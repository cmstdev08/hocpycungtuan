import React, { useState, useEffect, useRef } from 'react';
import { Zap, RotateCcw, Trophy, ChevronRight, ChevronLeft, Flame, Sparkles, Smartphone, Keyboard } from 'lucide-react';
import { addXP } from '../utils/gamification.js';

const TYPING_SNIPPETS = [
  // --- 1. Cơ bản ---
  {
    id: 1,
    category: 'Cơ bản',
    title: 'Lệnh in print() & Chào mừng',
    code: 'print("Chào mừng bạn đến với môn Cơ sở lập trình!")',
  },
  {
    id: 2,
    category: 'Cơ bản',
    title: 'Nhập số nguyên từ bàn phím',
    code: 'n = int(input("Nhập số phần tử: "))',
  },
  {
    id: 3,
    category: 'Cơ bản',
    title: 'Nhập số thực float & f-string',
    code: 'diem = float(input("Nhập điểm: "))\nprint(f"Điểm số: {diem:.2f}")',
  },
  {
    id: 4,
    category: 'Cơ bản',
    title: 'Hoán đổi giá trị 2 biến (Swap)',
    code: 'a, b = b, a\nprint("Sau khi hoán đổi:", a, b)',
  },
  {
    id: 5,
    category: 'Cơ bản',
    title: 'Phép chia nguyên và chia dư',
    code: 'thuong = 17 // 5\ndu = 17 % 5\nprint(thuong, du)',
  },
  {
    id: 6,
    category: 'Cơ bản',
    title: 'Kiểm tra kiểu dữ liệu với type()',
    code: 'x = 3.14159\nprint(type(x))',
  },
  {
    id: 7,
    category: 'Cơ bản',
    title: 'Ép kiểu chuỗi sang số nguyên',
    code: 'nam_sinh = int("2004")\ntuoi = 2026 - nam_sinh',
  },

  // --- 2. Điều kiện ---
  {
    id: 8,
    category: 'Điều kiện',
    title: 'Cấu trúc if-else kiểm tra điểm qua môn',
    code: 'if diem >= 5.0:\n    print("Đỗ môn")\nelse:\n    print("Học lại")',
  },
  {
    id: 9,
    category: 'Điều kiện',
    title: 'Cấu trúc if-elif-else xếp loại',
    code: 'if gpa >= 8.5:\n    rank = "Giỏi"\nelif gpa >= 6.5:\n    rank = "Khá"\nelse:\n    rank = "Trung bình"',
  },
  {
    id: 10,
    category: 'Điều kiện',
    title: 'Toán tử 3 ngôi (Ternary Operator)',
    code: 'trang_thai = "Chẵn" if n % 2 == 0 else "Lẻ"',
  },
  {
    id: 11,
    category: 'Điều kiện',
    title: 'So sánh liên hoàn (Chained Comparison)',
    code: 'if 0 <= diem <= 10:\n    print("Điểm hợp lệ")',
  },
  {
    id: 12,
    category: 'Điều kiện',
    title: 'Kiểm tra năm nhuận Gregory',
    code: 'is_leap = (nam % 400 == 0) or (nam % 4 == 0 and nam % 100 != 0)',
  },
  {
    id: 13,
    category: 'Điều kiện',
    title: 'Toán tử logic and / or / not',
    code: 'if co_ve and (tuoi >= 18 or co_nguoi_giam_ho):\n    print("Được vào rạp")',
  },

  // --- 3. Vòng lặp ---
  {
    id: 14,
    category: 'Vòng lặp',
    title: 'Vòng lặp for với range(1, 11)',
    code: 'for i in range(1, 11):\n    print(f"Lần lặp thứ {i}")',
  },
  {
    id: 15,
    category: 'Vòng lặp',
    title: 'Duyệt danh sách với for-in',
    code: 'for item in ["Python", "C++", "Java"]:\n    print(item.upper())',
  },
  {
    id: 16,
    category: 'Vòng lặp',
    title: 'Duyệt kèm chỉ số index với enumerate()',
    code: 'for idx, val in enumerate(["A", "B", "C"]):\n    print(f"Index {idx}: {val}")',
  },
  {
    id: 17,
    category: 'Vòng lặp',
    title: 'Vòng lặp while tính tổng 1 đến n',
    code: 'tong, i = 0, 1\nwhile i <= n:\n    tong += i\n    i += 1',
  },
  {
    id: 18,
    category: 'Vòng lặp',
    title: 'Lệnh break dừng vòng lặp sớm',
    code: 'while True:\n    cmd = input()\n    if cmd == "exit":\n        break',
  },
  {
    id: 19,
    category: 'Vòng lặp',
    title: 'Lệnh continue bỏ qua số lẻ',
    code: 'for i in range(10):\n    if i % 2 != 0:\n        continue\n    print(i)',
  },
  {
    id: 20,
    category: 'Vòng lặp',
    title: 'Vòng lặp lồng nhau in bảng cửu chương',
    code: 'for i in range(2, 10):\n    for j in range(1, 10):\n        print(f"{i}x{j}={i*j}", end="\\t")',
  },

  // --- 4. Hàm & Lambda ---
  {
    id: 21,
    category: 'Hàm & Lambda',
    title: 'Hàm kiểm tra số nguyên tố',
    code: 'def is_prime(n):\n    if n < 2:\n        return False\n    for i in range(2, int(n**0.5) + 1):\n        if n % i == 0:\n            return False\n    return True',
  },
  {
    id: 22,
    category: 'Hàm & Lambda',
    title: 'Hàm trả về nhiều giá trị (Tuple return)',
    code: 'def min_max(nums):\n    return min(nums), max(nums)',
  },
  {
    id: 23,
    category: 'Hàm & Lambda',
    title: 'Hàm có tham số mặc định',
    code: 'def chao(ten, loi_chao="Xin chào"):\n    return f"{loi_chao}, {ten}!"',
  },
  {
    id: 24,
    category: 'Hàm & Lambda',
    title: 'Hàm ẩn danh Lambda tính bình phương',
    code: 'square = lambda x: x ** 2\nprint(square(9))',
  },
  {
    id: 25,
    category: 'Hàm & Lambda',
    title: 'Kết hợp map() và lambda',
    code: 'nums = [1, 2, 3, 4, 5]\ndoubled = list(map(lambda x: x * 2, nums))',
  },
  {
    id: 26,
    category: 'Hàm & Lambda',
    title: 'Kết hợp filter() và lambda lọc số chẵn',
    code: 'evens = list(filter(lambda x: x % 2 == 0, range(20)))',
  },
  {
    id: 27,
    category: 'Hàm & Lambda',
    title: 'Tham số biến đổi *args tính tổng',
    code: 'def sum_all(*args):\n    return sum(args)',
  },

  // --- 5. Cấu trúc dữ liệu ---
  {
    id: 28,
    category: 'Cấu trúc dữ liệu',
    title: 'Tạo từ điển Dictionary sinh viên',
    code: 'sv = {"mssv": "SV001", "ten": "Nguyen Van A", "diem": 9.5}',
  },
  {
    id: 29,
    category: 'Cấu trúc dữ liệu',
    title: 'Truy xuất an toàn từ điển với get()',
    code: 'tuoi = sv.get("tuoi", 18)\nprint(f"Tuổi: {tuoi}")',
  },
  {
    id: 30,
    category: 'Cấu trúc dữ liệu',
    title: 'List Comprehension tạo danh sách số chính phương',
    code: 'squares = [x**2 for x in range(1, 11)]',
  },
  {
    id: 31,
    category: 'Cấu trúc dữ liệu',
    title: 'List Comprehension có điều kiện if',
    code: 'so_chan = [x for x in range(30) if x % 2 == 0]',
  },
  {
    id: 32,
    category: 'Cấu trúc dữ liệu',
    title: 'Tập hợp Set loại bỏ phần tử trùng lặp',
    code: 'unique_items = list(set([1, 2, 2, 3, 3, 4]))',
  },
  {
    id: 33,
    category: 'Cấu trúc dữ liệu',
    title: 'Cắt chuỗi đảo ngược (String Slicing)',
    code: 's = "Python"\nprint(s[::-1])',
  },
  {
    id: 34,
    category: 'Cấu trúc dữ liệu',
    title: 'Nối các phần tử bằng join()',
    code: 'words = ["Học", "Lập", "Trình", "Python"]\nprint(" ".join(words))',
  },
  {
    id: 35,
    category: 'Cấu trúc dữ liệu',
    title: 'Sắp xếp danh sách với sorted() và key',
    code: 'danh_sach.sort(key=lambda item: item["diem"], reverse=True)',
  },

  // --- 6. File & Ngoại lệ & OOP ---
  {
    id: 36,
    category: 'File, Ngoại lệ & OOP',
    title: 'Ghi file an toàn với with open',
    code: 'with open("output.txt", "w", encoding="utf-8") as f:\n    f.write("Hoàn thành bài tập!")',
  },
  {
    id: 37,
    category: 'File, Ngoại lệ & OOP',
    title: 'Đọc file từng dòng với readlines()',
    code: 'with open("data.txt", "r", encoding="utf-8") as f:\n    lines = [line.strip() for line in f]',
  },
  {
    id: 38,
    category: 'File, Ngoại lệ & OOP',
    title: 'Bắt lỗi chia cho 0 với try-except',
    code: 'try:\n    kq = a / b\nexcept ZeroDivisionError:\n    print("Lỗi chia cho 0")',
  },
  {
    id: 39,
    category: 'File, Ngoại lệ & OOP',
    title: 'Bắt lỗi ép kiểu ValueError',
    code: 'try:\n    n = int(input())\nexcept ValueError:\n    print("Dữ liệu nhập không hợp lệ")',
  },
  {
    id: 40,
    category: 'File, Ngoại lệ & OOP',
    title: 'Khối try - except - else - finally',
    code: 'try:\n    f = open("log.txt")\nexcept IOError:\n    print("Không tìm thấy file")\nfinally:\n    print("Kết thúc dọn dẹp")',
  },
  {
    id: 41,
    category: 'File, Ngoại lệ & OOP',
    title: 'Chủ động ném ngoại lệ với raise',
    code: 'if tuoi < 0:\n    raise ValueError("Tuổi không được là số âm")',
  },
  {
    id: 42,
    category: 'File, Ngoại lệ & OOP',
    title: 'Lớp Sinh viên căn bản OOP',
    code: 'class SinhVien:\n    def __init__(self, mssv, ten, diem):\n        self.mssv = mssv\n        self.ten = ten\n        self.diem = diem',
  },
  {
    id: 43,
    category: 'File, Ngoại lệ & OOP',
    title: 'Phương thức trong Class OOP',
    code: 'class HinhTron:\n    def __init__(self, r):\n        self.r = r\n    def tinh_dien_tich(self):\n        return 3.14159 * (self.r ** 2)',
  },
  {
    id: 44,
    category: 'File, Ngoại lệ & OOP',
    title: 'Kế thừa trong OOP với super()',
    code: 'class Student(Person):\n    def __init__(self, name, age, mssv):\n        super().__init__(name, age)\n        self.mssv = mssv',
  },
];

const QUICK_SYMBOLS = [
  { label: 'Tab (4 spc)', val: '    ' },
  { label: ':', val: ':' },
  { label: '(', val: '(' },
  { label: ')', val: ')' },
  { label: '"', val: '"' },
  { label: "'", val: "'" },
  { label: '[', val: '[' },
  { label: ']', val: ']' },
  { label: '{', val: '{' },
  { label: '}', val: '}' },
  { label: '=', val: '=' },
  { label: '==', val: '==' },
  { label: '+', val: '+' },
  { label: '-', val: '-' },
  { label: '*', val: '*' },
  { label: '/', val: '/' },
  { label: '#', val: '#' },
  { label: '↵ Enter', val: '\n' },
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

  const categories = [
    'Tất cả',
    'Cơ bản',
    'Điều kiện',
    'Vòng lặp',
    'Hàm & Lambda',
    'Cấu trúc dữ liệu',
    'File, Ngoại lệ & OOP',
  ];

  const filteredSnippets = selectedCategory === 'Tất cả'
    ? TYPING_SNIPPETS
    : TYPING_SNIPPETS.filter((s) => s.category === selectedCategory);

  const activeSnippet = filteredSnippets[snippetIdx] || filteredSnippets[0] || TYPING_SNIPPETS[0];
  const targetText = activeSnippet && activeSnippet.code ? activeSnippet.code : 'print("Python")';

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

  const handleInsertSymbol = (symVal) => {
    if (completed || !inputRef.current) return;
    const start = inputRef.current.selectionStart;
    const end = inputRef.current.selectionEnd;
    const newVal = inputVal.substring(0, start) + symVal + inputVal.substring(end);
    
    // Simulate change
    handleChange({ target: { value: newVal } });

    setTimeout(() => {
      if (inputRef.current) {
        inputRef.current.focus();
        inputRef.current.selectionStart = inputRef.current.selectionEnd = start + symVal.length;
      }
    }, 0);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Tab') {
      e.preventDefault();
      handleInsertSymbol('    ');
    }
  };

  const handleChange = (e) => {
    if (completed) return;

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

    // Tính tốc độ gõ (WPM)
    const elapsedSeconds = Math.max((Date.now() - currentStart) / 1000, 0.5);
    const wordsTyped = val.length / 5;
    const currentWpm = Math.round((wordsTyped / elapsedSeconds) * 60);
    setWpm(currentWpm);

    // Kiểm tra hoàn thành
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
    <div style={{ maxWidth: 920, margin: '0 auto', paddingBottom: '3rem' }}>
      {/* Header */}
      <div style={{ marginBottom: '1.2rem' }}>
        <h2 style={{
          display: 'flex',
          alignItems: 'center',
          gap: 10,
          margin: '0 0 0.4rem 0',
          fontSize: 'clamp(1.3rem, 4vw, 1.7rem)',
          flexWrap: 'wrap',
        }}>
          <Zap size={28} color="var(--color-warning, #f59e0b)" /> Đấu trường tốc độ gõ Code Python (Speed Typing)
        </h2>
        <p style={{ color: 'var(--color-text-secondary)', margin: 0, fontSize: '0.92rem' }}>
          Rèn luyện phản xạ gõ chuẩn xác 40+ mẫu code Python (def, range, if/else, dict, with open, oop) theo chuẩn WPM thực tế.
        </p>
      </div>

      {/* Category Pills (Touch scrollable) */}
      <div style={{
        display: 'flex',
        gap: '0.45rem',
        marginBottom: '1.2rem',
        overflowX: 'auto',
        paddingBottom: '0.4rem',
        WebkitOverflowScrolling: 'touch',
      }}>
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => handleCategoryChange(cat)}
            style={{
              padding: '0.4rem 0.85rem',
              borderRadius: 20,
              fontSize: '0.8rem',
              fontWeight: 600,
              cursor: 'pointer',
              whiteSpace: 'nowrap',
              border: selectedCategory === cat ? '1px solid var(--color-primary)' : '1px solid var(--color-border)',
              background: selectedCategory === cat ? 'var(--color-primary)' : 'var(--color-card)',
              color: selectedCategory === cat ? '#ffffff' : 'var(--color-text)',
              transition: 'all 0.2s ease',
              flexShrink: 0,
            }}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Stats Dashboard - 2 cols on mobile, 4 on desktop */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))',
        gap: '0.8rem',
        marginBottom: '1.2rem',
      }}>
        <div className="card" style={{ padding: '0.75rem 0.9rem', textAlign: 'center' }}>
          <span style={{ fontSize: '0.7rem', fontWeight: 700, color: 'var(--color-text-secondary)', letterSpacing: '0.5px' }}>
            TỐC ĐỘ (WPM)
          </span>
          <div style={{ fontSize: 'clamp(1.5rem, 4vw, 2rem)', fontWeight: 800, color: 'var(--color-primary)', marginTop: 2 }}>
            {wpm}
          </div>
        </div>

        <div className="card" style={{ padding: '0.75rem 0.9rem', textAlign: 'center' }}>
          <span style={{ fontSize: '0.7rem', fontWeight: 700, color: 'var(--color-text-secondary)', letterSpacing: '0.5px' }}>
            CHÍNH XÁC
          </span>
          <div style={{
            fontSize: 'clamp(1.5rem, 4vw, 2rem)',
            fontWeight: 800,
            marginTop: 2,
            color: accuracy >= 95 ? 'var(--color-success)' : accuracy >= 80 ? 'var(--color-warning)' : 'var(--color-danger)'
          }}>
            {accuracy}%
          </div>
        </div>

        <div className="card" style={{ padding: '0.75rem 0.9rem', textAlign: 'center' }}>
          <span style={{ fontSize: '0.7rem', fontWeight: 700, color: 'var(--color-text-secondary)', letterSpacing: '0.5px' }}>
            TIẾN ĐỘ
          </span>
          <div style={{ fontSize: 'clamp(1.5rem, 4vw, 2rem)', fontWeight: 800, color: 'var(--color-cyan)', marginTop: 2 }}>
            {progressPercent}%
          </div>
        </div>

        <div className="card" style={{ padding: '0.75rem 0.9rem', textAlign: 'center' }}>
          <span style={{ fontSize: '0.7rem', fontWeight: 700, color: 'var(--color-text-secondary)', letterSpacing: '0.5px' }}>
            BÀI LUYỆN
          </span>
          <div style={{ fontSize: 'clamp(1.5rem, 4vw, 2rem)', fontWeight: 800, color: 'var(--color-text)', marginTop: 2 }}>
            {snippetIdx + 1} / {filteredSnippets.length}
          </div>
        </div>
      </div>

      {/* Code Display Box */}
      <div className="card" style={{ padding: '1rem', marginBottom: '0.8rem', position: 'relative' }}>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '0.8rem',
          flexWrap: 'wrap',
          gap: '0.5rem',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap' }}>
            <span style={{
              background: 'rgba(37, 99, 235, 0.1)',
              color: 'var(--color-primary)',
              fontSize: '0.72rem',
              fontWeight: 700,
              padding: '0.2rem 0.5rem',
              borderRadius: 6,
              textTransform: 'uppercase',
            }}>
              {activeSnippet.category}
            </span>
            <span style={{ fontWeight: 600, fontSize: '0.92rem', color: 'var(--color-text)' }}>
              {activeSnippet.title}
            </span>
          </div>

          <div style={{ display: 'flex', gap: '0.3rem' }}>
            <button
              onClick={handlePrevSnippet}
              className="btn btn-ghost"
              style={{ padding: '0.35rem 0.6rem', fontSize: '0.8rem' }}
              title="Bài trước"
              aria-label="Bài trước"
            >
              <ChevronLeft size={16} /> Bài trước
            </button>
            <button
              onClick={handleNextSnippet}
              className="btn btn-ghost"
              style={{ padding: '0.35rem 0.6rem', fontSize: '0.8rem' }}
              title="Bài sau"
              aria-label="Bài sau"
            >
              Bài sau <ChevronRight size={16} />
            </button>
            <button
              onClick={resetState}
              className="btn btn-ghost"
              style={{ padding: '0.35rem 0.5rem' }}
              title="Gõ lại bài này"
              aria-label="Gõ lại bài này"
            >
              <RotateCcw size={16} />
            </button>
          </div>
        </div>

        {/* Highlighted Target Code */}
        <div style={{
          background: 'var(--color-code-bg, #0f172a)',
          padding: '1rem',
          borderRadius: 8,
          border: '1px solid var(--color-border)',
          fontFamily: 'Consolas, Monaco, "Courier New", monospace',
          fontSize: 'clamp(0.95rem, 3.5vw, 1.15rem)',
          lineHeight: 1.8,
          whiteSpace: 'pre-wrap',
          wordBreak: 'break-word',
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
                textColor = '#22c55e';
                bgColor = 'rgba(34, 197, 94, 0.12)';
              } else {
                textColor = '#ffffff';
                bgColor = '#ef4444';
              }
            } else if (index === inputVal.length) {
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

      {/* Quick Mobile Code Symbol Helper Bar */}
      <div style={{
        marginBottom: '0.8rem',
        padding: '0.5rem 0.6rem',
        background: 'var(--color-card)',
        border: '1px solid var(--color-border)',
        borderRadius: 8,
        display: 'flex',
        alignItems: 'center',
        gap: '0.4rem',
        overflowX: 'auto',
        WebkitOverflowScrolling: 'touch',
      }}>
        <span style={{ fontSize: '0.72rem', fontWeight: 700, color: 'var(--color-text-secondary)', display: 'flex', alignItems: 'center', gap: 4, whiteSpace: 'nowrap', paddingRight: 4 }}>
          <Keyboard size={14} /> Phím tắt:
        </span>
        {QUICK_SYMBOLS.map((sym, idx) => (
          <button
            key={idx}
            type="button"
            onClick={() => handleInsertSymbol(sym.val)}
            style={{
              padding: '0.3rem 0.55rem',
              background: 'var(--color-input-bg)',
              border: '1px solid var(--color-border)',
              borderRadius: 4,
              fontSize: '0.78rem',
              fontFamily: 'monospace',
              fontWeight: 700,
              color: 'var(--color-text)',
              cursor: 'pointer',
              whiteSpace: 'nowrap',
              flexShrink: 0,
            }}
          >
            {sym.label}
          </button>
        ))}
      </div>

      {/* Typing Input Area */}
      <div style={{ marginBottom: '1.2rem' }}>
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
            fontSize: 'clamp(0.95rem, 3.5vw, 1.05rem)',
            lineHeight: 1.6,
            padding: '0.85rem',
            borderRadius: 8,
            border: completed ? '2px solid var(--color-success)' : '1.5px solid var(--color-primary)',
            background: 'var(--color-input-bg, #ffffff)',
            color: 'var(--color-text)',
            outline: 'none',
            resize: 'vertical',
            minHeight: 90,
            boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
          }}
        />
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          marginTop: 6,
          fontSize: '0.78rem',
          color: 'var(--color-text-secondary)',
          flexWrap: 'wrap',
          gap: '0.5rem',
        }}>
          <span>💡 Gợi ý: Dùng phím tắt trên thanh hỗ trợ hoặc phím <strong>Tab</strong> để thụt dòng.</span>
          <span>{inputVal.length} / {targetText.length} ký tự</span>
        </div>
      </div>

      {/* Celebration & Reward Card */}
      {completed && (
        <div className="card" style={{
          padding: '1.5rem',
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
            width: 60,
            height: 60,
            borderRadius: '50%',
            background: 'rgba(245, 158, 11, 0.2)',
            marginBottom: '0.6rem',
          }}>
            <Trophy size={34} color="#f59e0b" />
          </div>
          <h3 style={{ margin: '0 0 0.4rem 0', fontSize: '1.3rem', color: 'var(--color-text)' }}>
            🎉 Xuất sắc! Bạn đã hoàn thành đoạn code!
          </h3>
          <p style={{ margin: '0 0 1rem 0', color: 'var(--color-text-secondary)', fontSize: '0.95rem' }}>
            Tốc độ: <strong style={{ color: 'var(--color-primary)', fontSize: '1.15rem' }}>{wpm} WPM</strong>
            {' • '}
            Chính xác: <strong style={{ color: 'var(--color-success)', fontSize: '1.15rem' }}>{accuracy}%</strong>
            {' • '}
            Thưởng: <strong style={{ color: '#f59e0b' }}>+25 XP</strong> 🔥
          </p>

          <div style={{ display: 'flex', gap: '0.6rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button className="btn btn-primary" onClick={handleNextSnippet} style={{ padding: '0.55rem 1.2rem', fontSize: '0.9rem' }}>
              Bài tiếp theo ➡️
            </button>
            <button className="btn btn-ghost" onClick={resetState} style={{ padding: '0.55rem 1rem', fontSize: '0.9rem' }}>
              <RotateCcw size={16} /> Gõ lại bài này
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SpeedTyping;
