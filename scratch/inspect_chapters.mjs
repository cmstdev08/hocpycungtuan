import { exercises } from '../src/data/exercises.js';

for (let ch = 1; ch <= 13; ch++) {
  const chExs = exercises.filter(e => e.chapterId === ch);
  console.log(`\n================ CHAPTER ${ch}: ${chExs[0]?.chapterName} (${chExs.length} exercises) ================`);
  chExs.forEach(e => {
    const isRepetitive = e.title.includes('bài') || e.title.includes('Bài') || / \d+$/.test(e.title);
    console.log(`[${e.id}] [${e.code}] [${e.difficulty}] ${e.title} -> sol: ${JSON.stringify(e.sampleSolution?.slice(0, 30))}`);
  });
}
