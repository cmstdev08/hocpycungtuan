import { exercises } from '../src/data/exercises.js';

let genericCount = 0;
let solutionMap = {};

exercises.forEach(ex => {
  const isGeneric = /bài \d+|tính toán \d+|f-string \d+|If-Else \d+|While \d+|Danh sách List \d+|Tuple và Set \d+|Dictionary \d+|Hàm def \d+|Xử lý File \d+|Đệ quy \d+|Thuật toán \d+|OOP \d+|Đồ án \d+/i.test(ex.title);
  if (isGeneric) genericCount++;
  
  const sol = ex.sampleSolution || ex.solution || '';
  if (!solutionMap[sol]) solutionMap[sol] = [];
  solutionMap[sol].push(ex.id);
});

console.log('Total exercises:', exercises.length);
console.log('Generic titles count:', genericCount);
console.log('Most repeated solutions:');
Object.entries(solutionMap)
  .sort((a, b) => b[1].length - a[1].length)
  .slice(0, 10)
  .forEach(([sol, ids]) => {
    console.log(`Repeated ${ids.length} times (IDs: ${ids.slice(0, 5).join(', ')}...): ${JSON.stringify(sol.slice(0, 50))}`);
  });
