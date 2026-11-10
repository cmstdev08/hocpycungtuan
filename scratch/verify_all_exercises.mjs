import { loadPyodide } from 'pyodide';
import { exercises } from '../src/data/exercises.js';

async function main() {
  console.log(`Starting automated verification of all ${exercises.length} exercises...`);
  const pyodide = await loadPyodide();
  console.log('Pyodide engine initialized.');

  let totalTests = 0;
  let passedTests = 0;
  let failedExercises = [];

  for (const ex of exercises) {
    let exPassed = true;
    for (let i = 0; i < ex.testCases.length; i++) {
      totalTests++;
      const tc = ex.testCases[i];
      const inputs = tc.input !== undefined && tc.input !== '' ? tc.input.split('\n') : [];
      let inputIdx = 0;

      let stdout = [];
      let stderr = [];

      pyodide.setStdout({
        batched: (str) => {
          stdout.push(str);
        }
      });
      pyodide.setStderr({
        batched: (str) => {
          stderr.push(str);
        }
      });
      pyodide.setStdin({
        stdin: () => {
          if (inputIdx < inputs.length) {
            return inputs[inputIdx++];
          }
          return null;
        }
      });

      try {
        await pyodide.runPythonAsync(ex.sampleSolution);
        const actualOutput = stdout.join('\n').trim();
        const expectedOutput = tc.expectedOutput.trim();

        if (actualOutput !== expectedOutput) {
          exPassed = false;
          failedExercises.push({
            id: ex.id,
            title: ex.title,
            testIndex: i + 1,
            input: tc.input,
            expected: expectedOutput,
            actual: actualOutput,
            error: stderr.join('\n')
          });
        } else {
          passedTests++;
        }
      } catch (err) {
        exPassed = false;
        failedExercises.push({
          id: ex.id,
          title: ex.title,
          testIndex: i + 1,
          input: tc.input,
          expected: tc.expectedOutput.trim(),
          actual: stdout.join('\n').trim(),
          error: err.message
        });
      }
    }
    if (ex.id % 25 === 0 || ex.id === exercises.length) {
      console.log(`Checked up to Exercise ${ex.id}... Passed: ${passedTests}/${totalTests}`);
    }
  }

  console.log('\n=======================================');
  console.log(`FINAL RESULT: ${passedTests}/${totalTests} test cases passed.`);
  if (failedExercises.length > 0) {
    console.log(`Failed on ${failedExercises.length} tests:`);
    failedExercises.forEach(f => {
      console.log(`--- [ID: ${f.id}] ${f.title} (Test Case ${f.testIndex}) ---`);
      console.log(`Input: ${JSON.stringify(f.input)}`);
      console.log(`Expected: ${JSON.stringify(f.expected)}`);
      console.log(`Actual:   ${JSON.stringify(f.actual)}`);
      if (f.error) console.log(`Error:    ${f.error}`);
    });
  } else {
    console.log('SUCCESS! ALL 250 EXERCISES PASSED 100% OF TEST CASES!');
  }
}

main().catch(console.error);
