import React, { useState } from 'react';
import { Bug, CheckCircle, RotateCcw, Award, Lightbulb, Play } from 'lucide-react';
import Editor from '@monaco-editor/react';
import { runPythonCode } from '../utils/pyodideRunner.js';
import { addXP } from '../utils/gamification.js';

const BUG_STAGES = [
  {
    stage: 1,
    title: 'Quên dấu hai chấm ở lệnh If',
    description: 'Chương trình kiểm tra số dương nhưng bị lỗi cú pháp cú pháp SyntaxError. Hãy tìm và sửa dòng bị lỗi.',
    buggyCode: `x = 10
if x > 0
    print("x là số dương")`,
    expectedOutput: 'x là số dương',
    hint: 'Trong Python, sau điều kiện của câu lệnh if luôn luôn phải có dấu hai chấm (:).',
  },
  {
    stage: 2,
    title: 'Lỗi nối chuỗi với số (TypeError)',
    description: 'Chương trình muốn in thông báo tuổi nhưng bị lỗi xung đột kiểu dữ liệu. Hãy ép kiểu cho phù hợp.',
    buggyCode: `tuoi = 20
print("Tuổi của bạn là: " + tuoi)`,
    expectedOutput: 'Tuổi của bạn là: 20',
    hint: 'Bạn không thể cộng chuỗi với số nguyên. Hãy đổi thành str(tuoi) hoặc dùng f-string f"Tuổi của bạn là: {tuoi}".',
  },
  {
    stage: 3,
    title: 'Lỗi chia cho số 0 (ZeroDivisionError)',
    description: 'Phép toán bị lỗi chia cho 0. Hãy sửa mẫu số hoặc thêm điều kiện để in kết quả an toàn.',
    buggyCode: `a = 10
b = 0
print(a // b)`,
    expectedOutput: '5',
    hint: 'Hãy đổi giá trị b = 2 để phép chia 10 // 2 ra kết quả 5.',
  },
  {
    stage: 4,
    title: 'Lỗi sai chính tả từ khóa Boolean',
    description: 'Trong Python, giá trị logic viết hoa chữ cái đầu. Hãy sửa lỗi gán biến.',
    buggyCode: `da_qua_mon = true
if da_qua_mon:
    print("Chúc mừng bạn!")`,
    expectedOutput: 'Chúc mừng bạn!',
    hint: 'Đổi "true" thành "True" (viết hoa chữ T).',
  },
  {
    stage: 5,
    title: 'Lỗi thụt lề câu lệnh (IndentationError)',
    description: 'Khối lệnh bên trong vòng lặp for chưa được thụt lề hợp lệ.',
    buggyCode: `for i in range(1, 4):
print("Lần lặp:", i)`,
    expectedOutput: 'Lần lặp: 1\nLần lặp: 2\nLần lặp: 3',
    hint: 'Thụt lề 4 dấu cách cho dòng lệnh print(...) bên trong for.',
  },
];

const BugHunt = () => {
  const [currentStageIdx, setCurrentStageIdx] = useState(0);
  const currentStage = BUG_STAGES[currentStageIdx];
  const [code, setCode] = useState(currentStage.buggyCode);
  const [result, setResult] = useState(null);
  const [lives, setLives] = useState(3);
  const [showHint, setShowHint] = useState(false);
  const [stagePassed, setStagePassed] = useState(false);

  const handleRunAndCheck = async () => {
    const exec = await runPythonCode(code);
    const actualOutput = exec.output.trim();
    const expectedOutput = currentStage.expectedOutput.trim();

    if (exec.success && actualOutput === expectedOutput) {
      setResult({ success: true, msg: 'Chính xác! Bạn đã tiêu diệt được Bug! 🐛🎯' });
      setStagePassed(true);
      addXP(30);
    } else {
      const newLives = Math.max(0, lives - 1);
      setLives(newLives);
      setResult({
        success: false,
        msg: `Code vẫn còn lỗi hoặc output chưa đúng kỳ vọng!\nThực tế: "${actualOutput || exec.error}"\nKỳ vọng: "${expectedOutput}"`,
      });
    }
  };

  const handleNextStage = () => {
    if (currentStageIdx < BUG_STAGES.length - 1) {
      const nextIdx = currentStageIdx + 1;
      setCurrentStageIdx(nextIdx);
      setCode(BUG_STAGES[nextIdx].buggyCode);
      setResult(null);
      setStagePassed(false);
      setShowHint(false);
    }
  };

  const handleResetStage = () => {
    setCode(currentStage.buggyCode);
    setResult(null);
    setStagePassed(false);
  };

  return (
    <div style={{ maxWidth: 900, margin: '0 auto' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem', flexWrap: 'wrap', gap: '1rem' }}>
        <div>
          <h2 style={{ display: 'flex', alignItems: 'center', gap: 8, margin: '0 0 0.3rem 0' }}>
            <Bug size={24} color="var(--color-danger)" /> Săn Lỗi Bug Hunt (Mini-game Thợ săn lỗi Code)
          </h2>
          <p style={{ color: 'var(--color-text-secondary)', margin: 0 }}>
            Phát hiện và tiêu diệt các lỗi cú pháp (Syntax, Indent, Type, ZeroDivision) để vượt ải.
          </p>
        </div>

        <div style={{ display: 'flex', gap: '0.8rem', alignItems: 'center' }}>
          <div style={{ fontSize: '1.2rem', letterSpacing: 4 }}>
            {Array.from({ length: 3 }).map((_, i) => (
              <span key={i}>{i < lives ? '❤️' : '🖤'}</span>
            ))}
          </div>
          <span style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--color-cyan)' }}>
            Ải {currentStage.stage} / {BUG_STAGES.length}
          </span>
        </div>
      </div>

      <div className="card" style={{ padding: '1.2rem', marginBottom: '1rem' }}>
        <h4 style={{ margin: '0 0 0.4rem 0', color: 'var(--color-primary)' }}>
          Ải {currentStage.stage}: {currentStage.title}
        </h4>
        <p style={{ margin: '0 0 0.6rem 0', fontSize: '0.92rem' }}>{currentStage.description}</p>
        <div style={{ fontSize: '0.82rem', color: 'var(--color-text-secondary)' }}>
          Output kỳ vọng: <code>{currentStage.expectedOutput}</code>
        </div>
      </div>

      {/* Code Editor */}
      <div style={{ height: 260, border: '1px solid var(--color-border)', borderRadius: 8, overflow: 'hidden', marginBottom: '1rem' }}>
        <Editor
          height="100%"
          defaultLanguage="python"
          theme={document.documentElement.getAttribute('data-theme') === 'dark' ? 'vs-dark' : 'light'}
          value={code}
          onChange={(val) => setCode(val || '')}
          options={{
            fontSize: 14,
            lineNumbers: 'on',
            minimap: { enabled: false },
          }}
        />
      </div>

      {/* Action Buttons */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
        <div style={{ display: 'flex', gap: '0.8rem' }}>
          <button className="btn btn-ghost" onClick={handleResetStage}>
            <RotateCcw size={15} /> Đặt lại đoạn code lỗi
          </button>
          <button className="btn btn-ghost" onClick={() => setShowHint(!showHint)}>
            <Lightbulb size={15} /> {showHint ? 'Ẩn gợi ý' : 'Xem gợi ý'}
          </button>
        </div>

        {stagePassed ? (
          <button className="btn btn-cyan" onClick={handleNextStage} disabled={currentStageIdx >= BUG_STAGES.length - 1}>
            {currentStageIdx >= BUG_STAGES.length - 1 ? 'Đã hoàn thành toàn bộ ải! 🎉' : 'Qua ải tiếp theo ➡️'}
          </button>
        ) : (
          <button className="btn btn-primary" onClick={handleRunAndCheck}>
            <Play size={15} /> Chạy thử & Diệt Bug
          </button>
        )}
      </div>

      {showHint && (
        <div style={{ padding: '0.8rem', background: 'rgba(6,182,212,0.1)', borderRadius: 6, fontSize: '0.88rem', marginBottom: '1rem' }}>
          💡 <strong>Gợi ý:</strong> {currentStage.hint}
        </div>
      )}

      {result && (
        <div style={{
          padding: '1rem',
          borderRadius: 8,
          background: result.success ? 'rgba(34,197,94,0.15)' : 'rgba(239,68,68,0.15)',
          border: `1.5px solid ${result.success ? 'var(--color-success)' : 'var(--color-danger)'}`,
          whiteSpace: 'pre-wrap',
          fontFamily: 'monospace',
          fontSize: '0.9rem',
          color: result.success ? 'var(--color-success)' : 'var(--color-danger)'
        }}>
          {result.msg}
        </div>
      )}
    </div>
  );
};

export default BugHunt;
