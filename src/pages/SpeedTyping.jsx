import React, { useState, useEffect, useRef } from 'react';
import { Zap, RotateCcw, Trophy, Award, Flame } from 'lucide-react';
import { addXP } from '../utils/gamification.js';

const TYPING_SNIPPETS = [
  'print("Xin chào các bạn sinh viên!")',
  'x = int(input("Nhập số: "))',
  'if diem >= 5.0:\n    print("Đạt")',
  'for i in range(1, 10, 2):\n    print(i)',
  'def is_prime(n):\n    return n > 1',
  'd = {"ma": "SV01", "diem": 9.5}',
  'with open("data.txt", "w") as f:\n    f.write("OK")',
];

const SpeedTyping = () => {
  const [snippetIdx, setSnippetIdx] = useState(0);
  const [inputVal, setInputVal] = useState('');
  const [startTime, setStartTime] = useState(null);
  const [wpm, setWpm] = useState(0);
  const [accuracy, setAccuracy] = useState(100);
  const [completed, setCompleted] = useState(false);
  const inputRef = useRef(null);

  const targetText = TYPING_SNIPPETS[snippetIdx];

  const handleStartOver = () => {
    setInputVal('');
    setStartTime(null);
    setWpm(0);
    setAccuracy(100);
    setCompleted(false);
    if (inputRef.current) inputRef.current.focus();
  };

  const handleNextSnippet = () => {
    setSnippetIdx((prev) => (prev + 1) % TYPING_SNIPPETS.length);
    handleStartOver();
  };

  const handleChange = (e) => {
    const val = e.target.value;
    if (!startTime) {
      setStartTime(Date.now());
    }

    setInputVal(val);

    // Tính accuracy
    let correctChars = 0;
    for (let i = 0; i < val.length; i++) {
      if (val[i] === targetText[i]) correctChars++;
    }
    const acc = val.length > 0 ? Math.round((correctChars / val.length) * 100) : 100;
    setAccuracy(acc);

    // Kiểm tra hoàn thành
    if (val === targetText) {
      const elapsedMins = (Date.now() - (startTime || Date.now())) / 60000;
      const words = targetText.length / 5;
      const finalWpm = elapsedMins > 0 ? Math.round(words / elapsedMins) : 80;
      setWpm(finalWpm);
      setCompleted(true);
      addXP(25);
    }
  };

  return (
    <div style={{ maxWidth: 850, margin: '0 auto' }}>
      <div style={{ marginBottom: '1.5rem' }}>
        <h2 style={{ display: 'flex', alignItems: 'center', gap: 8, margin: '0 0 0.3rem 0' }}>
          <Zap size={24} color="var(--color-warning)" /> Đấu trường tốc độ gõ Code Python (Speed Typing)
        </h2>
        <p style={{ color: 'var(--color-text-secondary)', margin: 0 }}>
          Rèn luyện phản xạ gõ chuẩn xác các từ khóa, dấu ngoặc và cú pháp Python với tốc độ WPM.
        </p>
      </div>

      {/* Stats bar */}
      <div style={{ display: 'flex', gap: '1rem', marginBottom: '1.5rem', flexWrap: 'wrap' }}>
        <div className="card" style={{ flex: 1, padding: '0.8rem 1.2rem', textAlign: 'center' }}>
          <span style={{ fontSize: '0.78rem', color: 'var(--color-text-secondary)' }}>TỐC ĐỘ (WPM)</span>
          <div style={{ fontSize: '1.8rem', fontWeight: 800, color: 'var(--color-primary)' }}>{wpm}</div>
        </div>
        <div className="card" style={{ flex: 1, padding: '0.8rem 1.2rem', textAlign: 'center' }}>
          <span style={{ fontSize: '0.78rem', color: 'var(--color-text-secondary)' }}>ĐỘ CHÍNH XÁC</span>
          <div style={{ fontSize: '1.8rem', fontWeight: 800, color: accuracy >= 90 ? 'var(--color-success)' : 'var(--color-danger)' }}>
            {accuracy}%
          </div>
        </div>
        <div className="card" style={{ flex: 1, padding: '0.8rem 1.2rem', textAlign: 'center' }}>
          <span style={{ fontSize: '0.78rem', color: 'var(--color-text-secondary)' }}>ĐOẠN MẪU</span>
          <div style={{ fontSize: '1.8rem', fontWeight: 800, color: 'var(--color-cyan)' }}>
            {snippetIdx + 1} / {TYPING_SNIPPETS.length}
          </div>
        </div>
      </div>

      {/* Target text card */}
      <div className="card" style={{ padding: '1.5rem', marginBottom: '1rem', background: 'var(--color-card)' }}>
        <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--color-cyan)', textTransform: 'uppercase', display: 'block', marginBottom: 8 }}>
          Mẫu cần gõ:
        </span>
        <pre style={{
          margin: 0,
          fontFamily: 'monospace',
          fontSize: '1.15rem',
          lineHeight: 1.8,
          whiteSpace: 'pre-wrap',
          userSelect: 'none',
          color: 'var(--color-text)',
        }}>
          {targetText.split('').map((char, index) => {
            let color = 'inherit';
            let bg = 'transparent';
            if (index < inputVal.length) {
              if (inputVal[index] === char) {
                color = 'var(--color-success)';
              } else {
                color = '#fff';
                bg = 'var(--color-danger)';
              }
            } else if (index === inputVal.length) {
              bg = 'rgba(37,99,235,0.3)';
            }
            return (
              <span key={index} style={{ color, background, borderRadius: 2 }}>
                {char}
              </span>
            );
          })}
        </pre>
      </div>

      {/* Typing Input */}
      <div style={{ marginBottom: '1.5rem' }}>
        <textarea
          ref={inputRef}
          rows={3}
          className="search-input"
          value={inputVal}
          onChange={handleChange}
          disabled={completed}
          placeholder="Nhấp vào đây và bắt đầu gõ thật nhanh đoạn code mẫu bên trên..."
          style={{ width: '100%', fontFamily: 'monospace', fontSize: '1rem', lineHeight: 1.6, padding: '0.8rem', height: 90 }}
        />
      </div>

      {/* Result announcement */}
      {completed && (
        <div className="card" style={{ padding: '1.5rem', textAlign: 'center', background: 'rgba(34,197,94,0.1)', border: '1.5px solid var(--color-success)', marginBottom: '1.5rem' }}>
          <Trophy size={48} color="var(--color-warning)" style={{ margin: '0 auto 0.5rem auto' }} />
          <h3>Tuyệt vời! Bạn đã gõ chính xác 100%!</h3>
          <p style={{ margin: '0 0 1rem 0', color: 'var(--color-text)' }}>
            Tốc độ đạt: <strong>{wpm} WPM</strong> • Được thưởng <strong>+25 XP</strong>
          </p>
          <div style={{ display: 'flex', gap: '0.8rem', justifyContent: 'center' }}>
            <button className="btn btn-primary" onClick={handleNextSnippet}>
              Bài tiếp theo ➡️
            </button>
            <button className="btn btn-ghost" onClick={handleStartOver}>
              <RotateCcw size={16} /> Gõ lại bài này
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SpeedTyping;
