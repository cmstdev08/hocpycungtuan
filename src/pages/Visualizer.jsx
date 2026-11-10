import React, { useState, useEffect, useRef } from 'react';
import { Activity, Play, Pause, RotateCcw, StepForward, StepBack, Info, Database, Layers, CheckCircle } from 'lucide-react';

const SAMPLES = [
  {
    name: '1. Vòng lặp For & Tính tổng tích lũy',
    category: 'Vòng lặp',
    code: [
      'tong = 0',
      'for i in range(1, 4):',
      '    tong += i',
      'print("Kết quả:", tong)',
    ],
    steps: [
      { line: 0, vars: { tong: 0 }, desc: 'Khởi tạo biến tong = 0 trong bộ nhớ RAM.' },
      { line: 1, vars: { tong: 0, i: 1 }, desc: 'Vòng lặp bắt đầu bước 1: biến i nhận giá trị 1.' },
      { line: 2, vars: { tong: 1, i: 1 }, desc: 'Cộng dồn: tong = tong + i = 0 + 1 = 1.' },
      { line: 1, vars: { tong: 1, i: 2 }, desc: 'Vòng lặp bước 2: biến i nhận giá trị 2.' },
      { line: 2, vars: { tong: 3, i: 2 }, desc: 'Cộng dồn: tong = 1 + 2 = 3.' },
      { line: 1, vars: { tong: 3, i: 3 }, desc: 'Vòng lặp bước 3: biến i nhận giá trị 3.' },
      { line: 2, vars: { tong: 6, i: 3 }, desc: 'Cộng dồn: tong = 3 + 3 = 6.' },
      { line: 3, vars: { tong: 6, i: 3 }, desc: 'Kết thúc vòng lặp. In ra màn hình console: Kết quả: 6.' },
    ],
  },
  {
    name: '2. Hoán đổi 2 phần tử (Swap in RAM)',
    category: 'Cơ bản',
    code: [
      'a = 15',
      'b = 30',
      'temp = a',
      'a = b',
      'b = temp',
    ],
    steps: [
      { line: 0, vars: { a: 15 }, desc: 'Cấp phát ô nhớ a nhận giá trị số nguyên 15.' },
      { line: 1, vars: { a: 15, b: 30 }, desc: 'Cấp phát ô nhớ b nhận giá trị 30.' },
      { line: 2, vars: { a: 15, b: 30, temp: 15 }, desc: 'Lưu tạm giá trị của a vào biến temp = 15.' },
      { line: 3, vars: { a: 30, b: 30, temp: 15 }, desc: 'Gán a = b: giá trị ô nhớ a được ghi đè thành 30.' },
      { line: 4, vars: { a: 30, b: 15, temp: 15 }, desc: 'Gán b = temp: ô nhớ b nhận lại giá trị cũ của a (15). Hoán đổi thành công!' },
    ],
  },
  {
    name: '3. Thao tác trên List (Mảng động)',
    category: 'Danh sách',
    code: [
      'fruits = ["Táo"]',
      'fruits.append("Cam")',
      'fruits.append("Xoài")',
      'fruits.pop(0)',
    ],
    steps: [
      { line: 0, vars: { fruits: '["Táo"]' }, desc: 'Tạo đối tượng List ban đầu với 1 phần tử tại index 0: "Táo".' },
      { line: 1, vars: { fruits: '["Táo", "Cam"]' }, desc: 'append("Cam"): chèn "Cam" vào vị trí cuối (index 1).' },
      { line: 2, vars: { fruits: '["Táo", "Cam", "Xoài"]' }, desc: 'append("Xoài"): tiếp tục mở rộng List, "Xoài" ở index 2.' },
      { line: 3, vars: { fruits: '["Cam", "Xoài"]' }, desc: 'pop(0): loại bỏ phần tử ở index 0 ("Táo"). Các phần tử còn lại dời sang trái.' },
    ],
  },
  {
    name: '4. Tìm số lớn nhất trong danh sách (Max Tracking)',
    category: 'Thuật toán',
    code: [
      'nums = [12, 45, 8, 29]',
      'max_val = nums[0]',
      'for x in nums[1:]:',
      '    if x > max_val:',
      '        max_val = x',
    ],
    steps: [
      { line: 0, vars: { nums: '[12, 45, 8, 29]' }, desc: 'Khởi tạo mảng số nguyên nums gồm 4 phần tử.' },
      { line: 1, vars: { nums: '[12, 45, 8, 29]', max_val: 12 }, desc: 'Giả định phần tử đầu tiên nums[0] = 12 là số lớn nhất.' },
      { line: 2, vars: { max_val: 12, x: 45 }, desc: 'Duyệt phần tử x = 45.' },
      { line: 3, vars: { max_val: 12, x: 45 }, desc: 'So sánh: 45 > 12 là Đúng (True).' },
      { line: 4, vars: { max_val: 45, x: 45 }, desc: 'Cập nhật kỷ lục mới: max_val = 45.' },
      { line: 2, vars: { max_val: 45, x: 8 }, desc: 'Duyệt phần tử tiếp theo: x = 8.' },
      { line: 3, vars: { max_val: 45, x: 8 }, desc: 'So sánh: 8 > 45 là Sai (False), không cập nhật.' },
      { line: 2, vars: { max_val: 45, x: 29 }, desc: 'Duyệt phần tử cuối cùng: x = 29.' },
      { line: 3, vars: { max_val: 45, x: 29 }, desc: 'So sánh: 29 > 45 là Sai. Duyệt xong, max_val = 45.' },
    ],
  },
  {
    name: '5. Đảo ngược chuỗi ký tự bằng vòng lặp',
    category: 'Chuỗi',
    code: [
      's = "CAT"',
      'rev = ""',
      'for char in s:',
      '    rev = char + rev',
      'print(rev)',
    ],
    steps: [
      { line: 0, vars: { s: '"CAT"' }, desc: 'Chuỗi ban đầu s = "CAT".' },
      { line: 1, vars: { s: '"CAT"', rev: '""' }, desc: 'Khởi tạo chuỗi kết quả rỗng rev = "".' },
      { line: 2, vars: { rev: '""', char: '"C"' }, desc: 'Lấy ký tự đầu tiên: char = "C".' },
      { line: 3, vars: { rev: '"C"', char: '"C"' }, desc: 'rev = "C" + "" = "C".' },
      { line: 2, vars: { rev: '"C"', char: '"A"' }, desc: 'Lấy ký tự thứ hai: char = "A".' },
      { line: 3, vars: { rev: '"AC"', char: '"A"' }, desc: 'rev = "A" + "C" = "AC".' },
      { line: 2, vars: { rev: '"AC"', char: '"T"' }, desc: 'Lấy ký tự thứ ba: char = "T".' },
      { line: 3, vars: { rev: '"TAC"', char: '"T"' }, desc: 'rev = "T" + "AC" = "TAC".' },
      { line: 4, vars: { rev: '"TAC"' }, desc: 'In kết quả đảo ngược: "TAC".' },
    ],
  },
  {
    name: '6. Đếm số lượng chẵn và lẻ',
    category: 'Điều kiện',
    code: [
      'nums = [3, 4, 7]',
      'evens = 0',
      'odds = 0',
      'for n in nums:',
      '    if n % 2 == 0:',
      '        evens += 1',
      '    else:',
      '        odds += 1',
    ],
    steps: [
      { line: 0, vars: { nums: '[3, 4, 7]' }, desc: 'Khởi tạo danh sách nums.' },
      { line: 1, vars: { evens: 0 }, desc: 'Khởi tạo biến đếm chẵn evens = 0.' },
      { line: 2, vars: { evens: 0, odds: 0 }, desc: 'Khởi tạo biến đếm lẻ odds = 0.' },
      { line: 3, vars: { n: 3, evens: 0, odds: 0 }, desc: 'Xét phần tử n = 3.' },
      { line: 4, vars: { n: 3 }, desc: 'Kiểm tra 3 % 2 == 0 là False -> Nhảy sang khối else.' },
      { line: 7, vars: { n: 3, evens: 0, odds: 1 }, desc: 'Tăng biến đếm lẻ: odds = 1.' },
      { line: 3, vars: { n: 4, evens: 0, odds: 1 }, desc: 'Xét phần tử tiếp theo: n = 4.' },
      { line: 4, vars: { n: 4 }, desc: 'Kiểm tra 4 % 2 == 0 là True -> Vào khối if.' },
      { line: 5, vars: { n: 4, evens: 1, odds: 1 }, desc: 'Tăng biến đếm chẵn: evens = 1.' },
      { line: 3, vars: { n: 7, evens: 1, odds: 1 }, desc: 'Xét phần tử n = 7.' },
      { line: 7, vars: { n: 7, evens: 1, odds: 2 }, desc: '7 là số lẻ: odds = 2.' },
    ],
  },
  {
    name: '7. Tính giai thừa n! (Factorial)',
    category: 'Vòng lặp',
    code: [
      'n = 4',
      'fact = 1',
      'for i in range(1, n + 1):',
      '    fact *= i',
      'print(fact)',
    ],
    steps: [
      { line: 0, vars: { n: 4 }, desc: 'Đặt n = 4 (cần tính 4!).' },
      { line: 1, vars: { n: 4, fact: 1 }, desc: 'Khởi tạo giá trị tích lũy fact = 1.' },
      { line: 2, vars: { fact: 1, i: 1 }, desc: 'Bước 1: i = 1.' },
      { line: 3, vars: { fact: 1, i: 1 }, desc: 'fact = fact * 1 = 1.' },
      { line: 2, vars: { fact: 1, i: 2 }, desc: 'Bước 2: i = 2.' },
      { line: 3, vars: { fact: 2, i: 2 }, desc: 'fact = 1 * 2 = 2.' },
      { line: 2, vars: { fact: 2, i: 3 }, desc: 'Bước 3: i = 3.' },
      { line: 3, vars: { fact: 6, i: 3 }, desc: 'fact = 2 * 3 = 6.' },
      { line: 2, vars: { fact: 6, i: 4 }, desc: 'Bước 4: i = 4.' },
      { line: 3, vars: { fact: 24, i: 4 }, desc: 'fact = 6 * 4 = 24.' },
      { line: 4, vars: { fact: 24 }, desc: 'Hoàn tất! In kết quả 4! = 24.' },
    ],
  },
  {
    name: '8. Tìm kiếm tuyến tính (Linear Search)',
    category: 'Thuật toán',
    code: [
      'arr = [10, 25, 30, 45]',
      'target = 30',
      'found_idx = -1',
      'for i, val in enumerate(arr):',
      '    if val == target:',
      '        found_idx = i',
      '        break',
    ],
    steps: [
      { line: 0, vars: { arr: '[10, 25, 30, 45]' }, desc: 'Mảng số nguyên arr.' },
      { line: 1, vars: { target: 30 }, desc: 'Phần tử cần tìm: target = 30.' },
      { line: 2, vars: { found_idx: -1 }, desc: 'Mặc định found_idx = -1 (chưa tìm thấy).' },
      { line: 3, vars: { i: 0, val: 10 }, desc: 'Kiểm tra index 0: val = 10.' },
      { line: 4, vars: { i: 0, val: 10 }, desc: '10 == 30 là False, tiếp tục duyệt.' },
      { line: 3, vars: { i: 1, val: 25 }, desc: 'Kiểm tra index 1: val = 25.' },
      { line: 4, vars: { i: 1, val: 25 }, desc: '25 == 30 là False, tiếp tục duyệt.' },
      { line: 3, vars: { i: 2, val: 30 }, desc: 'Kiểm tra index 2: val = 30.' },
      { line: 4, vars: { i: 2, val: 30 }, desc: '30 == 30 là True! Tìm thấy mục tiêu.' },
      { line: 5, vars: { found_idx: 2 }, desc: 'Gán found_idx = 2.' },
      { line: 6, vars: { found_idx: 2 }, desc: 'Gặp lệnh break: thoát vòng lặp ngay lập tức.' },
    ],
  },
  {
    name: '9. Thao tác trên Dictionary (Từ điển)',
    category: 'Cấu trúc dữ liệu',
    code: [
      'student = {"name": "An", "gpa": 8.0}',
      'student["gpa"] = 8.5',
      'student["rank"] = "Giỏi"',
      'del student["name"]',
    ],
    steps: [
      { line: 0, vars: { student: '{"name": "An", "gpa": 8.0}' }, desc: 'Khởi tạo từ điển gồm 2 cặp key-value.' },
      { line: 1, vars: { student: '{"name": "An", "gpa": 8.5}' }, desc: 'Cập nhật giá trị key "gpa" từ 8.0 lên 8.5.' },
      { line: 2, vars: { student: '{"name": "An", "gpa": 8.5, "rank": "Giỏi"}' }, desc: 'Thêm key mới "rank": "Giỏi" vào từ điển.' },
      { line: 3, vars: { student: '{"gpa": 8.5, "rank": "Giỏi"}' }, desc: 'Lệnh del xóa cặp key-value "name".' },
    ],
  },
  {
    name: '10. Sinh dãy số Fibonacci (Dịch chuyển 2 biến)',
    category: 'Thuật toán',
    code: [
      'a, b = 0, 1',
      'for _ in range(4):',
      '    print(a, end=" ")',
      '    a, b = b, a + b',
    ],
    steps: [
      { line: 0, vars: { a: 0, b: 1 }, desc: 'Khởi tạo 2 số đầu tiên F(0)=0, F(1)=1.' },
      { line: 1, vars: { a: 0, b: 1, step: 1 }, desc: 'Vòng lặp bước 1.' },
      { line: 2, vars: { output: '0' }, desc: 'In ra giá trị hiện tại của a: 0.' },
      { line: 3, vars: { a: 1, b: 1 }, desc: 'Dịch chuyển: a nhận giá trị b (1), b nhận a + b (0 + 1 = 1).' },
      { line: 1, vars: { a: 1, b: 1, step: 2 }, desc: 'Vòng lặp bước 2.' },
      { line: 2, vars: { output: '0 1' }, desc: 'In ra a: 1.' },
      { line: 3, vars: { a: 1, b: 2 }, desc: 'Dịch chuyển: a nhận 1, b nhận 1 + 1 = 2.' },
      { line: 1, vars: { a: 1, b: 2, step: 3 }, desc: 'Vòng lặp bước 3.' },
      { line: 2, vars: { output: '0 1 1' }, desc: 'In ra a: 1.' },
      { line: 3, vars: { a: 2, b: 3 }, desc: 'Dịch chuyển: a nhận 2, b nhận 1 + 2 = 3.' },
      { line: 2, vars: { output: '0 1 1 2' }, desc: 'In ra a: 2. Dãy in được: 0 1 1 2.' },
    ],
  },
  {
    name: '11. Tìm kiếm nhị phân (Binary Search Steps)',
    category: 'Thuật toán',
    code: [
      'arr = [2, 5, 8, 12, 16, 23]',
      'target = 12',
      'low, high = 0, len(arr) - 1',
      'mid = (low + high) // 2',
    ],
    steps: [
      { line: 0, vars: { arr: '[2, 5, 8, 12, 16, 23]' }, desc: 'Mảng đã sắp xếp gồm 6 phần tử.' },
      { line: 1, vars: { target: 12 }, desc: 'Phần tử cần tìm: target = 12.' },
      { line: 2, vars: { low: 0, high: 5 }, desc: 'Thiết lập phạm vi tìm kiếm: low = 0, high = 5.' },
      { line: 3, vars: { low: 0, high: 5, mid: 2, 'arr[mid]': 8 }, desc: 'Tính chỉ số giữa: mid = (0 + 5) // 2 = 2. Giá trị arr[2] = 8.' },
    ],
  },
  {
    name: '12. Sắp xếp nổi bọt (Bubble Sort 1 Pass)',
    category: 'Thuật toán',
    code: [
      'a = [5, 2, 8]',
      'if a[0] > a[1]:',
      '    a[0], a[1] = a[1], a[0]',
      'if a[1] > a[2]:',
      '    a[1], a[2] = a[2], a[1]',
    ],
    steps: [
      { line: 0, vars: { a: '[5, 2, 8]' }, desc: 'Mảng ban đầu [5, 2, 8].' },
      { line: 1, vars: { a: '[5, 2, 8]' }, desc: 'So sánh cặp đầu tiên: a[0] (5) > a[1] (2) là True.' },
      { line: 2, vars: { a: '[2, 5, 8]' }, desc: 'Hoán đổi 5 và 2: mảng trở thành [2, 5, 8].' },
      { line: 3, vars: { a: '[2, 5, 8]' }, desc: 'So sánh cặp tiếp theo: a[1] (5) > a[2] (8) là False.' },
      { line: 4, vars: { a: '[2, 5, 8]' }, desc: 'Không cần đổi chỗ. Mảng đã nổi bọt xong phần tử lớn nhất!' },
    ],
  },
];

const Visualizer = () => {
  const [selectedSampleIdx, setSelectedSampleIdx] = useState(0);
  const [currentStep, setCurrentStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const timerRef = useRef(null);

  const sample = SAMPLES[selectedSampleIdx];
  const activeStep = sample.steps[currentStep];

  useEffect(() => {
    if (isPlaying) {
      timerRef.current = setInterval(() => {
        setCurrentStep((prev) => {
          if (prev < sample.steps.length - 1) {
            return prev + 1;
          } else {
            setIsPlaying(false);
            return prev;
          }
        });
      }, 1300);
    } else {
      clearInterval(timerRef.current);
    }
    return () => clearInterval(timerRef.current);
  }, [isPlaying, sample.steps.length]);

  const handleNext = () => {
    if (currentStep < sample.steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrev = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleReset = () => {
    setIsPlaying(false);
    setCurrentStep(0);
  };

  const togglePlay = () => {
    if (currentStep >= sample.steps.length - 1) {
      setCurrentStep(0);
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div style={{ maxWidth: 1040, margin: '0 auto', paddingBottom: '3rem' }}>
      {/* Header */}
      <div style={{ marginBottom: '1.2rem' }}>
        <h2 style={{
          display: 'flex',
          alignItems: 'center',
          gap: 10,
          margin: '0 0 0.3rem 0',
          fontSize: 'clamp(1.25rem, 4vw, 1.6rem)',
          flexWrap: 'wrap',
        }}>
          <Activity size={26} color="var(--color-primary)" /> Mô phỏng từng bước chạy của Code (Code Visualizer)
        </h2>
        <p style={{ color: 'var(--color-text-secondary)', margin: 0, fontSize: '0.92rem' }}>
          Trực quan hóa sự biến đổi của các ô nhớ trong RAM và con trỏ dòng lệnh từng bước một qua 12 bài toán kinh điển.
        </p>
      </div>

      {/* Select sample */}
      <div style={{ marginBottom: '1.2rem' }}>
        <select
          className="sample-select"
          style={{ width: '100%', padding: '0.65rem 0.9rem', fontSize: '0.95rem' }}
          value={selectedSampleIdx}
          onChange={(e) => {
            setIsPlaying(false);
            setSelectedSampleIdx(Number(e.target.value));
            setCurrentStep(0);
          }}
        >
          {SAMPLES.map((s, idx) => (
            <option key={idx} value={idx}>
              [{s.category}] {s.name}
            </option>
          ))}
        </select>
      </div>

      {/* Layout Grid: Stacks on mobile <= 768px */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
        gap: '1.2rem',
        alignItems: 'start',
      }}>
        {/* Left: Code Box with Active Line */}
        <div className="card" style={{ padding: 0, overflow: 'hidden', border: '1px solid var(--color-border)' }}>
          <div style={{
            padding: '0.65rem 1rem',
            background: 'var(--color-input-bg)',
            borderBottom: '1px solid var(--color-border)',
            fontWeight: 700,
            fontSize: '0.88rem',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
            <span>Mã nguồn Python</span>
            <span style={{ fontSize: '0.78rem', color: 'var(--color-text-secondary)' }}>
              Dòng {activeStep.line + 1}
            </span>
          </div>

          <div style={{
            padding: '0.8rem 0',
            fontFamily: 'Consolas, Monaco, "Courier New", monospace',
            fontSize: 'clamp(0.85rem, 2.5vw, 0.95rem)',
            background: 'var(--color-code-bg)',
            minHeight: 180,
          }}>
            {sample.code.map((line, idx) => {
              const isActive = activeStep.line === idx;
              return (
                <div
                  key={idx}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    padding: '0.35rem 0.9rem',
                    background: isActive ? 'rgba(37,99,235,0.22)' : 'transparent',
                    borderLeft: isActive ? '4px solid var(--color-primary)' : '4px solid transparent',
                    color: isActive ? 'var(--color-primary)' : 'var(--color-text)',
                    fontWeight: isActive ? 700 : 400,
                    transition: 'all 0.15s ease',
                  }}
                >
                  <span style={{ width: 28, color: 'var(--color-text-secondary)', userSelect: 'none', fontSize: '0.82rem' }}>
                    {idx + 1}
                  </span>
                  <span style={{ whiteSpace: 'pre', overflowX: 'auto' }}>{line}</span>
                  {isActive && (
                    <span style={{ marginLeft: 'auto', fontSize: '0.75rem', color: 'var(--color-cyan)', paddingLeft: 8 }}>
                      👈 Đang chạy
                    </span>
                  )}
                </div>
              );
            })}
          </div>

          {/* Controls Bar */}
          <div style={{
            padding: '0.7rem 0.9rem',
            display: 'flex',
            gap: '0.4rem',
            borderTop: '1px solid var(--color-border)',
            alignItems: 'center',
            flexWrap: 'wrap',
          }}>
            <button
              className="btn btn-primary"
              onClick={handleNext}
              disabled={currentStep >= sample.steps.length - 1}
              style={{ padding: '0.45rem 0.9rem', fontSize: '0.85rem' }}
              title="Bước tiếp theo"
            >
              <StepForward size={15} /> Bước tiếp
            </button>
            <button
              className="btn btn-ghost"
              onClick={handlePrev}
              disabled={currentStep <= 0}
              style={{ padding: '0.45rem 0.7rem', fontSize: '0.85rem' }}
              title="Quay lại bước trước"
            >
              <StepBack size={15} /> Lùi lại
            </button>
            <button
              className="btn btn-ghost"
              onClick={togglePlay}
              style={{ padding: '0.45rem 0.7rem', fontSize: '0.85rem' }}
              title={isPlaying ? 'Tạm dừng tự động' : 'Tự động chạy'}
            >
              {isPlaying ? <Pause size={15} color="var(--color-warning)" /> : <Play size={15} color="var(--color-success)" />}
              <span>{isPlaying ? 'Tạm dừng' : 'Tự chạy'}</span>
            </button>
            <button
              className="btn btn-ghost"
              onClick={handleReset}
              style={{ padding: '0.45rem 0.6rem' }}
              title="Chạy lại từ đầu"
            >
              <RotateCcw size={15} />
            </button>
            <span style={{ marginLeft: 'auto', fontSize: '0.8rem', color: 'var(--color-text-secondary)', fontWeight: 600 }}>
              {currentStep + 1} / {sample.steps.length}
            </span>
          </div>
        </div>

        {/* Right: RAM Variables & Explanation */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {/* Step Explanation Card */}
          <div className="card" style={{ padding: '1rem 1.2rem', border: '1px solid var(--color-border)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontWeight: 700, color: 'var(--color-cyan)', marginBottom: '0.4rem', fontSize: '0.9rem' }}>
              <Info size={16} /> Diễn giải bước hiện tại:
            </div>
            <p style={{ margin: 0, fontSize: '0.92rem', color: 'var(--color-text)', lineHeight: 1.6 }}>
              {activeStep.desc}
            </p>
          </div>

          {/* RAM Variables Inspector */}
          <div className="card" style={{ padding: 0, overflow: 'hidden', border: '1px solid var(--color-border)' }}>
            <div style={{
              padding: '0.65rem 1rem',
              background: 'var(--color-input-bg)',
              borderBottom: '1px solid var(--color-border)',
              fontWeight: 700,
              fontSize: '0.88rem',
              display: 'flex',
              alignItems: 'center',
              gap: 6,
              color: 'var(--color-primary)',
            }}>
              <Database size={16} /> Trạng thái các ô nhớ trong RAM:
            </div>

            <div style={{ padding: '1rem' }}>
              {Object.keys(activeStep.vars).length === 0 ? (
                <div style={{ color: 'var(--color-text-secondary)', fontSize: '0.88rem', fontStyle: 'italic' }}>
                  Chưa có biến nào được khởi tạo trong bộ nhớ.
                </div>
              ) : (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.55rem' }}>
                  {Object.entries(activeStep.vars).map(([varName, varVal]) => (
                    <div
                      key={varName}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        padding: '0.5rem 0.8rem',
                        background: 'var(--color-hover)',
                        border: '1px solid var(--color-border)',
                        borderRadius: 6,
                        fontFamily: 'monospace',
                        fontSize: '0.9rem',
                        flexWrap: 'wrap',
                        gap: '0.4rem',
                      }}
                    >
                      <span style={{ fontWeight: 700, color: 'var(--color-primary)' }}>
                        {varName}
                      </span>
                      <span style={{
                        color: 'var(--color-text)',
                        background: 'var(--color-card)',
                        padding: '0.15rem 0.5rem',
                        borderRadius: 4,
                        border: '1px solid var(--color-border)',
                        maxWidth: '70%',
                        overflowX: 'auto',
                      }}>
                        {String(varVal)}
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Visualizer;
