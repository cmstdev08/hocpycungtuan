import { loadPyodide } from 'pyodide';

async function main() {
  const pyodide = await loadPyodide();
  let stdout = '';
  pyodide.setStdout({ batched: (str) => { stdout += str + '\n'; } });
  
  let inputs = ['line1', 'line2', 'line3'];
  let idx = 0;
  pyodide.setStdin({
    stdin: () => {
      if (idx < inputs.length) {
        return inputs[idx++];
      }
      return null;
    }
  });

  pyodide.runPython(`
import sys
data = sys.stdin.read()
print("DATA READ:", repr(data))
`);

  console.log('Output:\n' + stdout.trim());
}

main().catch(console.error);
