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
        return '';
      }
      const userInput = window.prompt(options.inputPrompt || 'Nhập dữ liệu cho chương trình (input):', '');
      if (userInput === null) {
        return '';
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
