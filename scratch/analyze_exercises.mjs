import { exercises } from '../src/data/exercises.js';

console.log('Total exercises:', exercises.length);
const byChapter = {};
let duplicateIds = [];
let seenIds = new Set();
let missingFields = [];
let invalidTestCases = [];

exercises.forEach((ex, idx) => {
  byChapter[ex.chapterId] = (byChapter[ex.chapterId] || 0) + 1;
  if (seenIds.has(ex.id)) {
    duplicateIds.push(ex.id);
  }
  seenIds.add(ex.id);

  if (!ex.id || !ex.chapterId || !ex.title || !ex.description || !ex.testCases || !ex.solution) {
    missingFields.push({ id: ex.id, title: ex.title });
  }

  if (!Array.isArray(ex.testCases) || ex.testCases.length === 0) {
    invalidTestCases.push({ id: ex.id, issue: 'No test cases' });
  } else {
    ex.testCases.forEach((tc, tcIdx) => {
      if (tc.expectedOutput === undefined || tc.expectedOutput === null) {
        invalidTestCases.push({ id: ex.id, tcIdx, issue: 'Missing expectedOutput' });
      }
    });
  }
});

console.log('By chapter:', byChapter);
console.log('Duplicate IDs:', duplicateIds);
console.log('Missing fields:', missingFields);
console.log('Invalid test cases count:', invalidTestCases.length);
if (invalidTestCases.length > 0) {
  console.log('Sample invalid test cases:', invalidTestCases.slice(0, 10));
}
