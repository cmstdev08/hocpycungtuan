import React, { useState, useEffect, useRef } from 'react';
import { Zap, RotateCcw, Trophy, ChevronRight, ChevronLeft, CheckCircle2, Flame, Award, Sparkles } from 'lucide-react';
import { addXP } from '../utils/gamification.js';

const TYPING_SNIPPETS = [
  {
    id: 1,
    category: 'Cơ bản',
    title: 'Lệnh in print() & Chào mừng',
    code: 'print("Chào mừng bạn đến với môn Cơ sở lập trình!")',
  },
  {
    id: 2,
    category: 'Cơ bản',
    title: 'Nhập dữ liệu số nguyên input()',
    code: 'n = int(input("Nhập số phần tử: "))',
  },
  {
    id: 3,
    category: 'Điều kiện',
    title: 'Cấu trúc if-else kiểm tra điểm',
    code: 'if diem >= 5.0:\n    print("Đỗ môn")\nelse:\n    print("Học lại")',
  },
  {
    id: 4,
    category: 'Vòng lặp',
    title: 'Vòng lặp for với range()',
    code: 'for i in range(1, 11):\n    print(f"Số: {i}")',
  },
  {
    id: 5,
    category: 'Hàm',
    title: 'Định nghĩa hàm kiểm tra số nguyên tố',
    code: 'def is_prime(n):\n    if n < 2:\n        return False\n    return True',
  },
  {
    id: 6,
    category: 'Cấu trúc dữ liệu',
    title: 'Từ điển Dictionary sinh viên',
    code: 'sv = {"mssv": "SV001", "ten": "Nguyen Van A", "diem": 9.5}',
  },
  {
    id: 7,
    category: 'Cấu trúc dữ liệu',
    title: 'List Comprehension lọc số chẵn',
    code: 'so_chan = [x for x in range(20) if x % 2 == 0]',
  },
  {
    id: 8,
    category: 'File & Ngoại lệ',
    title: 'Đọc ghi file an toàn với with open',
    code: 'with open("data.txt", "w", encoding="utf-8") as f:\n    f.write("Hoàn thành bài thi!")',
  },
  {
    id: 9,
    category: 'Ngoại lệ',
    title: 'Bắt lỗi chia cho 0 try-except',
    code: 'try:\n    kq = a / b\nexcept ZeroDivisionError:\n    print("Lỗi chia cho 0")',
  },
];

const SpeedTyping = () => {
  const [snippetIdx, setSnippetIdx] = useState(0);
  const [inputVal, setInputVal] = useState('');
  const [startTime, setStartTime] = useState(null);
  const [wpm, setWpm] = useState(0);
  const [accuracy, setAccuracy] = useState(100);
  const [completed, setCompleted] = useState(false);
  const [xpAwarded, setXpAwarded] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('Tất cả');
  const inputRef = useRef(null);

  const categories = ['Tất cả', 'Cơ bản', 'Điều kiện', 'Vòng lặp', 'Hàm', 'Cấu trúc dữ liệu', 'File & Ngoại lệ'];

  const filteredSnippets = selectedCategory === 'Tất cả'
    ? TYPING_SNIPPETS
    : TYPING_SNIPPETS.filter((s) => s.category === selectedCategory || (selectedCategory === 'File & Ngoại lệ' && (s.category === 'File & Ngoại lệ' || s.category === 'Ngoại lệ')));

  // Đảm bảo snippet hiện tại luôn hợp lệ
  const activeSnippet = filteredSnippets[snippetIdx] || filteredSnippets[0] || TYPING_SNIPPETS[0];
  const targetText = (activeSnippet && activeSnippet.code) ? activeSnippet.code : 'print("Python")';

  // Tự động focus vào ô gõ khi đổi bài
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, [snippetIdx, selectedCategory]);

  const resetState = () => {
    setInputVal('');
    setStartTime(null);
    setWpm(0);
    setAccuracy(100);
    setCompleted(false);
    setXpAwarded(false);
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  const handleNextSnippet = () => {
    setSnippetIdx((prev) => (prev + 1) % filteredSnippets.length);
    resetState();
  };

  const handlePrevSnippet = () => {
    setSnippetIdx((prev) => (prev - 1 + filteredSnippets.length) % filteredSnippets.length);
    resetState();
  };

  const handleCategoryChange = (cat) => {
    setSelectedCategory(cat);
    setSnippetIdx(0);
    resetState();
  };

  const handleKeyDown = (e) => {
    // Cho phép gõ phím Tab để chèn 4 khoảng trắng thay vì mất focus
    if (e.key === 'Tab') {
      e.preventDefault();
      const start = e.target.selectionStart;
      const end = e.target.selectionEnd;
      const newVal = inputVal.substring(0, start) + '    ' + inputVal.substring(end);
      setInputVal(newVal);
      // Cập nhật vị trí con trỏ sau khi render
      setTimeout(() => {
        if (inputRef.current) {
          inputRef.current.selectionStart = inputRef.current.selectionEnd = start + 4;
        }
      }, 0);
    }
  };

  const handleChange = (e) => {
    if (completed) return;

    // Chuẩn hóa ký tự xuống dòng trên Windows
    const val = (e.target.value || '').replace(/\r\n/g, '\n');

    let currentStart = startTime;
    if (!currentStart) {
      currentStart = Date.now();
      setStartTime(currentStart);
    }

    setInputVal(val);

    // Tính độ chính xác (Accuracy %)
    let correctCount = 0;
    const len = Math.min(val.length, targetText.length);
    for (let i = 0; i < len; i++) {
      if (val[i] === targetText[i]) {
        correctCount++;
      }
    }
    const acc = val.length > 0 ? Math.round((correctCount / val.length) * 100) : 100;
    setAccuracy(acc);

    // Tính tốc độ gõ (WPM) theo thời gian thực
    const elapsedSeconds = Math.max((Date.now() - currentStart) / 1000, 1);
    const wordsTyped = val.length / 5;
    const currentWpm = Math.round((wordsTyped / elapsedSeconds) * 60);
    setWpm(currentWpm);

    // Kiểm tra hoàn thành đoạn mã
    if (val === targetText) {
      setCompleted(true);
      const finalWpm = Math.max(currentWpm, 15);
      setWpm(finalWpm);

      if (!xpAwarded) {
        try {
          addXP(25);
          setXpAwarded(true);
        } catch (err) {
          console.warn('Lỗi lưu điểm XP:', err);
        }
      }
    }
  };

  const progressPercent = targetText.length > 0
    ? Math.min(100, Math.round((inputVal.length / targetText.length) * 100))
    : 0;

  return (
    <div style={{ maxWidth: 880, margin: '0 auto', paddingBottom: '3rem' }}>
      {/* Header */}
      <div style={{ marginBottom: '1.2rem' }}>
        <h2 style={{ display: 'flex', alignItems: 'center', gap: 10, margin: '0 0 0.4rem 0', fontSize: '1.6rem' }}>
          <Zap size={28} color="var(--color-warning, #f59e0b)" /> Đấu trường tốc độ gõ Code Python (Speed Typing)
        </h2>
        <p style={{ color: 'var(--color-text-secondary)', margin: 0, fontSize: '0.95rem' }}>
          Rèn luyện phản xạ gõ chuẩn xác các từ khóa cú pháp Python (def, range, if/else, print, dict, with open) với tốc độ WPM thực tế.
        </p>
      </div>

      {/* Category Pills */}
      <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1.2rem', overflowX: 'auto', paddingBottom: '0.3rem' }}>
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => handleCategoryChange(cat)}
            style={{
              padding: '0.4rem 0.9rem',
              borderRadius: 20,
              fontSize: '0.82rem',
              fontWeight: 600,
              cursor: 'pointer',
              whiteSpace: 'nowrap',
              border: selectedCategory === cat ? '1px solid var(--color-primary)' : '1px solid var(--color-border)',
              background: selectedCategory === cat ? 'var(--color-primary)' : 'var(--color-card)',
              color: selectedCategory === cat ? '#ffffff' : 'var(--color-text)',
              transition: 'all 0.2s ease',
            }}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Stats Dashboard */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '1rem', marginBottom: '1.2rem' }}>
        <div className="card" style={{ padding: '0.9rem 1.2rem', textAlign: 'center' }}>
          <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--color-text-secondary)', letterSpacing: '0.5px' }}>
            TỐC ĐỘ (WPM)
          </span>
          <div style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--color-primary)', marginTop: 4 }}>
            {wpm}
          </div>
        </div>

        <div className="card" style={{ padding: '0.9rem 1.2rem', textAlign: 'center' }}>
          <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--color-text-secondary)', letterSpacing: '0.5px' }}>
            ĐỘ CHÍNH XÁC
          </span>
          <div style={{
            fontSize: '2rem',
            fontWeight: 800,
            marginTop: 4,
            color: accuracy >= 95 ? 'var(--color-success)' : accuracy >= 80 ? 'var(--color-warning)' : 'var(--color-danger)'
          }}>
            {accuracy}%
          </div>
        </div>

        <div className="card" style={{ padding: '0.9rem 1.2rem', textAlign: 'center' }}>
          <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--color-text-secondary)', letterSpacing: '0.5px' }}>
            TIẾN ĐỘ GÕ
          </span>
          <div style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--color-cyan)', marginTop: 4 }}>
            {progressPercent}%
          </div>
        </div>

        <div className="card" style={{ padding: '0.9rem 1.2rem', textAlign: 'center' }}>
          <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--color-text-secondary)', letterSpacing: '0.5px' }}>
            BÀI LUYỆN
          </span>
          <div style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--color-text)', marginTop: 4 }}>
            {snippetIdx + 1} / {filteredSnippets.length}
          </div>
        </div>
      </div>

      {/* Code Display Box */}
      <div className="card" style={{ padding: '1.4rem', marginBottom: '1rem', position: 'relative' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.8rem', flexWrap: 'wrap', gap: '0.5rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <span style={{
              background: 'rgba(37, 99, 235, 0.1)',
              color: 'var(--color-primary)',
              fontSize: '0.75rem',
              fontWeight: 700,
              padding: '0.2rem 0.6rem',
              borderRadius: 6,
              textTransform: 'uppercase'
            }}>
              {activeSnippet.category}
            </span>
            <span style={{ fontWeight: 600, fontSize: '0.95rem', color: 'var(--color-text)' }}>
              {activeSnippet.title}
            </span>
          </div>

          <div style={{ display: 'flex', gap: '0.4rem' }}>
            <button
              onClick={handlePrevSnippet}
              className="btn btn-ghost"
              style={{ padding: '0.3rem 0.6rem', fontSize: '0.8rem' }}
              title="Bài trước"
            >
              <ChevronLeft size={16} />
            </button>
            <button
              onClick={handleNextSnippet}
              className="btn btn-ghost"
              style={{ padding: '0.3rem 0.6rem', fontSize: '0.8rem' }}
              title="Bài sau"
            >
              <ChevronRight size={16} />
            </button>
            <button
              onClick={resetState}
              className="btn btn-ghost"
              style={{ padding: '0.3rem 0.6rem', fontSize: '0.8rem' }}
              title="Gõ lại bài này"
            >
              <RotateCcw size={16} />
            </button>
          </div>
        </div>

        {/* Highlighted Target Code */}
        <div style={{
          background: 'var(--color-code-bg, #0f172a)',
          padding: '1.2rem',
          borderRadius: 8,
          border: '1px solid var(--color-border)',
          fontFamily: 'Consolas, Monaco, "Courier New", monospace',
          fontSize: '1.15rem',
          lineHeight: 1.8,
          whiteSpace: 'pre-wrap',
          userSelect: 'none',
          minHeight: 80,
          position: 'relative',
        }}>
          {targetText.split('').map((char, index) => {
            let textColor = 'var(--color-text-secondary, #94a3b8)';
            let bgColor = 'transparent';
            let borderBottom = 'none';

            if (index < inputVal.length) {
              if (inputVal[index] === char) {
                // Ký tự đúng
                textColor = '#22c55e'; // Green
                bgColor = 'rgba(34, 197, 94, 0.12)';
              } else {
                // Ký tự gõ sai
                textColor = '#ffffff';
                bgColor = '#ef4444'; // Red
              }
            } else if (index === inputVal.length) {
              // Vị trí con trỏ hiện tại
              bgColor = 'rgba(37, 99, 235, 0.4)';
              borderBottom = '2px solid var(--color-primary, #2563eb)';
            }

            return (
              <span
                key={index}
                style={{
                  color: textColor,
                  backgroundColor: bgColor,
                  borderBottom: borderBottom,
                  borderRadius: 2,
                  transition: 'background-color 0.1s ease',
                }}
              >
                {char === '\n' ? (
                  <span style={{ opacity: 0.6, fontSize: '0.85em', color: '#60a5fa' }}>↵{'\n'}</span>
                ) : (
                  char
                )}
              </span>
            );
          })}
        </div>
      </div>

      {/* Typing Input Area */}
      <div style={{ marginBottom: '1.5rem' }}>
        <textarea
          ref={inputRef}
          rows={3}
          value={inputVal}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          disabled={completed}
          placeholder="Nhấp vào đây và bắt đầu gõ thật nhanh đoạn code mẫu bên trên..."
          spellCheck={false}
          autoComplete="off"
          autoCorrect="off"
          autoCapitalize="off"
          style={{
            width: '100%',
            boxSizing: 'border-box',
            fontFamily: 'Consolas, Monaco, "Courier New", monospace',
            fontSize: '1.05rem',
            lineHeight: 1.6,
            padding: '1rem',
            borderRadius: 8,
            border: completed ? '2px solid var(--color-success)' : '1.5px solid var(--color-primary)',
            background: 'var(--color-input-bg, #ffffff)',
            color: 'var(--color-text)',
            outline: 'none',
            resize: 'vertical',
            minHeight: 100,
            boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
          }}
        />
        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 6, fontSize: '0.8rem', color: 'var(--color-text-secondary)' }}>
          <span>💡 Gợi ý: Bạn có thể nhấn phím <strong>Tab</strong> để chèn 4 khoảng trắng thụt lề code.</span>
          <span>{inputVal.length} / {targetText.length} ký tự</span>
        </div>
      </div>

      {/* Celebration & Reward Card */}
      {completed && (
        <div className="card" style={{
          padding: '2rem',
          textAlign: 'center',
          background: 'linear-gradient(135deg, rgba(34,197,94,0.12) 0%, rgba(6,182,212,0.12) 100%)',
          border: '2px solid var(--color-success)',
          borderRadius: 12,
          animation: 'fadeIn 0.3s ease-in-out',
        }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: 70,
            height: 70,
            borderRadius: '50%',
            background: 'rgba(245, 158, 11, 0.2)',
            marginBottom: '0.8rem'
          }}>
            <Trophy size={40} color="#f59e0b" />
          </div>
          <h3 style={{ margin: '0 0 0.5rem 0', fontSize: '1.4rem', color: 'var(--color-text)' }}>
            🎉 Xuất sắc! Bạn đã gõ xong đoạn code!
          </h3>
          <p style={{ margin: '0 0 1.2rem 0', color: 'var(--color-text-secondary)', fontSize: '1rem' }}>
            Tốc độ đạt: <strong style={{ color: 'var(--color-primary)', fontSize: '1.2rem' }}>{wpm} WPM</strong>
            {' • '}
            Độ chính xác: <strong style={{ color: 'var(--color-success)', fontSize: '1.2rem' }}>{accuracy}%</strong>
            {' • '}
            Thưởng: <strong style={{ color: '#f59e0b' }}>+25 XP</strong> 🔥
          </p>

          <div style={{ display: 'flex', gap: '0.8rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button className="btn btn-primary" onClick={handleNextSnippet} style={{ padding: '0.6rem 1.4rem', fontSize: '0.95rem' }}>
              Bài tiếp theo ➡️
            </button>
            <button className="btn btn-ghost" onClick={resetState} style={{ padding: '0.6rem 1.2rem', fontSize: '0.95rem' }}>
              <RotateCcw size={16} /> Gõ lại bài này
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SpeedTyping;
