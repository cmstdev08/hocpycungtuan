// src/utils/pyodideRunner.js
// Singleton Pyodide instance loader and execution helper

let pyodideInstance = null;
let pyodideLoadingPromise = null;

/**
 * Loads Pyodide from CDN or local bundle, ensuring it's only loaded once.
 */
export async function getPyodide() {
  if (pyodideInstance) {
    return pyodideInstance;
  }

  if (pyodideLoadingPromise) {
    return pyodideLoadingPromise;
  }

  pyodideLoadingPromise = (async () => {
    // If window.loadPyodide is not yet available, dynamically inject the script
    if (typeof window.loadPyodide !== 'function') {
      await new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = 'https://cdn.jsdelivr.net/pyodide/v0.26.4/full/pyodide.js';
        script.async = true;
        script.onload = resolve;
        script.onerror = () => reject(new Error('Không thể tải Pyodide từ CDN. Vui lòng kiểm tra kết nối mạng.'));
        document.head.appendChild(script);
      });
    }

    const pyodide = await window.loadPyodide({
      indexURL: 'https://cdn.jsdelivr.net/pyodide/v0.26.4/full/',
    });

    pyodideInstance = pyodide;
    return pyodide;
  })();

  return pyodideLoadingPromise;
}

/**
 * Executes Python code, capturing stdout, stderr, and supporting input().
 * @param {string} code - Python code to run
 * @param {object} options - Execution options (custom input prompt handler, timeout, etc.)
 * @returns {Promise<{ success: boolean, output: string, error?: string, executionTime: number }>}
 */
export async function runPythonCode(code, options = {}) {
  const pyodide = await getPyodide();
  const startTime = performance.now();

  let stdoutBuffer = [];
  let stderrBuffer = [];
  const textDecoder = new TextDecoder('utf-8');

  // Custom standard streams capture using write to preserve exact \n newlines
  pyodide.setStdout({
    write: (buffer) => {
      stdoutBuffer.push(textDecoder.decode(buffer));
      return buffer.length;
    },
  });

  pyodide.setStderr({
    write: (buffer) => {
      stderrBuffer.push(textDecoder.decode(buffer));
      return buffer.length;
    },
  });

  // Support python input() using prompt or pre-fed inputs queue
  const inputQueue = Array.isArray(options.inputs) ? [...options.inputs] : null;

  pyodide.setStdin({
    stdin: () => {
      if (inputQueue !== null) {
        if (inputQueue.length > 0) {
          const val = inputQueue.shift();
          return String(val);
        }
        return null;
      }
      const userInput = window.prompt(options.inputPrompt || 'Nhập dữ liệu cho chương trình (input):', '');
      if (userInput === null) {
        return null;
      }
      // Print the input to stdout so it looks like a real terminal
      stdoutBuffer.push(userInput + '\n');
      return userInput;
    },
    isatty: true,
  });

  try {
    // Clean Python globals to prevent variable pollution between runs if desired
    await pyodide.runPythonAsync(code);
    const executionTime = Math.round(performance.now() - startTime);
    const output = stdoutBuffer.join('');
    const errorOutput = stderrBuffer.join('');

    return {
      success: true,
      output: output || '(Chương trình chạy thành công không có output)',
      error: errorOutput || null,
      executionTime,
    };
  } catch (err) {
    const executionTime = Math.round(performance.now() - startTime);
    // Format error message to be cleaner for beginners
    let errorMsg = err.message || String(err);
    // Remove unnecessary python traceback internals if present
    const pyErrorIndex = errorMsg.indexOf('File "<exec>"');
    if (pyErrorIndex !== -1) {
      errorMsg = errorMsg.substring(pyErrorIndex);
    }

    return {
      success: false,
      output: stdoutBuffer.join(''),
      error: errorMsg,
      executionTime,
    };
  }
}

/**
 * Traces execution of custom Python code step-by-step using sys.settrace.
 * Records the line number, active RAM variables, description, and console output.
 * @param {string} code - User's Python source code
 * @param {number} maxSteps - Limit maximum execution steps to prevent infinite loop browser freeze
 * @returns {Promise<{ success: boolean, steps: Array<{ line: number, vars: object, desc: string }>, stdout: string, error?: string }>}
 */
export async function tracePythonCode(code, maxSteps = 150) {
  const pyodide = await getPyodide();
  const traceScript = `
import sys
import json

code_to_run = ${JSON.stringify(code)}
lines = code_to_run.split('\\n')

steps = []
max_steps = ${maxSteps}
step_count = 0

def trace_callback(frame, event, arg):
    global step_count
    if event == 'line' and frame.f_code.co_filename == '<user_code>':
        step_count += 1
        if step_count > max_steps:
            raise RuntimeError(f"Vượt quá giới hạn {max_steps} bước mô phỏng. Đã dừng để bảo vệ bộ nhớ.")
        
        lineno = frame.f_lineno - 1
        current_vars = {}
        for k, v in frame.f_locals.items():
            if not k.startswith('__') and k not in ('sys', 'json', 'trace_callback', 'code_to_run', 'lines'):
                try:
                    rep = repr(v)
                    if len(rep) > 120:
                        rep = rep[:120] + '...'
                    current_vars[k] = rep
                except Exception:
                    current_vars[k] = str(type(v))
        
        line_text = lines[lineno].strip() if 0 <= lineno < len(lines) else ''
        steps.append({
            'line': lineno,
            'vars': current_vars,
            'desc': f"Đang thực thi dòng {lineno + 1}: {line_text}"
        })
    return trace_callback

captured_stdout = []
class CustomStdout:
    def write(self, s):
        captured_stdout.append(s)
    def flush(self):
        pass

old_stdout = sys.stdout
sys.stdout = CustomStdout()

try:
    code_obj = compile(code_to_run, '<user_code>', 'exec')
    sys.settrace(trace_callback)
    exec_scope = {}
    exec(code_obj, exec_scope)
    error_msg = None
except Exception as e:
    error_msg = str(e)
finally:
    sys.settrace(None)
    sys.stdout = old_stdout

json.dumps({
    'success': error_msg is None or len(steps) > 0,
    'error': error_msg,
    'steps': steps,
    'stdout': ''.join(captured_stdout)
}, ensure_ascii=False)
`;

  try {
    const resultJson = await pyodide.runPythonAsync(traceScript);
    return JSON.parse(resultJson);
  } catch (err) {
    return {
      success: false,
      error: err.message || String(err),
      steps: [],
      stdout: '',
    };
  }
}

