import { loadPyodide } from 'pyodide';

async function main() {
  const pyodide = await loadPyodide();
  let calls = 0;
  pyodide.setStdin({
    stdin: () => {
      calls++;
      if (calls === 1) return 'hello';
      return null;
    }
  });
  pyodide.runPython("import sys; data = sys.stdin.read(); print('READ RESULT:', repr(data))");
  console.log('Finished read test!');
}

main().catch(console.error);
