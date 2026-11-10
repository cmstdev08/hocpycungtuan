import { loadPyodide } from 'pyodide';

async function main() {
  const pyodide = await loadPyodide();
  let stdout = '';
  pyodide.setStdout({ batched: (str) => { stdout += str + '\n'; } });
  
  let inputs = ['Alice', '20'];
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
name = input()
age = int(input())
print(f"Hello {name}, {age * 2}")
`);

  console.log('Output:\n' + stdout.trim());
}

main().catch(console.error);
