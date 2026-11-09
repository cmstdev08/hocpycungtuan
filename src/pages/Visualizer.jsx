import React, { useState } from 'react';
import { Activity, Play, RotateCcw, StepForward, Info } from 'lucide-react';

const SAMPLES = [
  {
    name: '1. Vòng lặp For & Tính tổng tích lũy',
    code: [
      'tong = 0',
      'for i in range(1, 4):',
      '    tong += i',
      'print("Kết quả:", tong)',
    ],
    steps: [
      { line: 0, vars: { tong: 0 }, desc: 'Khởi tạo biến tong = 0' },
      { line: 1, vars: { tong: 0, i: 1 }, desc: 'Bắt đầu vòng lặp: i = 1' },
      { line: 2, vars: { tong: 1, i: 1 }, desc: 'Cộng dồn: tong = 0 + 1 = 1' },
      { line: 1, vars: { tong: 1, i: 2 }, desc: 'Vòng lặp tiếp tục: i = 2' },
      { line: 2, vars: { tong: 3, i: 2 }, desc: 'Cộng dồn: tong = 1 + 2 = 3' },
      { line: 1, vars: { tong: 3, i: 3 }, desc: 'Vòng lặp tiếp tục: i = 3' },
      { line: 2, vars: { tong: 6, i: 3 }, desc: 'Cộng dồn: tong = 3 + 3 = 6' },
      { line: 3, vars: { tong: 6, i: 3 }, desc: 'In kết quả ra console: 6' },
    ],
  },
  {
    name: '2. Hoán đổi 2 phần tử (Swap in RAM)',
    code: [
      'a = 15',
      'b = 30',
      'temp = a',
      'a = b',
      'b = temp',
    ],
    steps: [
      { line: 0, vars: { a: 15 }, desc: 'Gán ô nhớ a = 15' },
      { line: 1, vars: { a: 15, b: 30 }, desc: 'Gán ô nhớ b = 30' },
      { line: 2, vars: { a: 15, b: 30, temp: 15 }, desc: 'Lưu tạm giá trị a vào biến temp = 15' },
      { line: 3, vars: { a: 30, b: 30, temp: 15 }, desc: 'Gán a = b (lúc này a thành 30)' },
      { line: 4, vars: { a: 30, b: 15, temp: 15 }, desc: 'Gán b = temp (b nhận lại 15)' },
    ],
  },
  {
    name: '3. Thao tác trên List (Mảng động)',
    code: [
      'fruits = ["Táo"]',
      'fruits.append("Cam")',
      'fruits.append("Xoài")',
      'fruits.pop(0)',
    ],
    steps: [
      { line: 0, vars: { fruits: '["Táo"]' }, desc: 'Tạo List ban đầu gồm 1 phần tử' },
      { line: 1, vars: { fruits: '["Táo", "Cam"]' }, desc: 'append("Cam") thêm vào cuối danh sách' },
      { line: 2, vars: { fruits: '["Táo", "Cam", "Xoài"]' }, desc: 'append("Xoài") tiếp tục thêm vào cuối' },
      { line: 3, vars: { fruits: '["Cam", "Xoài"]' }, desc: 'pop(0) xóa phần tử tại index 0 ("Táo")' },
    ],
  },
];

const Visualizer = () => {
  const [selectedSampleIdx, setSelectedSampleIdx] = useState(0);
  const [currentStep, setCurrentStep] = useState(0);

  const sample = SAMPLES[selectedSampleIdx];
  const activeStep = sample.steps[currentStep];

  const handleNext = () => {
    if (currentStep < sample.steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleReset = () => {
    setCurrentStep(0);
  };

  return (
    <div style={{ maxWidth: 1000, margin: '0 auto' }}>
      <div style={{ marginBottom: '1.5rem' }}>
        <h2 style={{ display: 'flex', alignItems: 'center', gap: 8, margin: '0 0 0.3rem 0' }}>
          <Activity size={24} color="var(--color-primary)" /> Mô phỏng từng bước chạy của Code (Code Visualizer)
        </h2>
        <p style={{ color: 'var(--color-text-secondary)', margin: 0 }}>
          Trực quan hóa sự biến đổi của các ô nhớ trong RAM và con trỏ dòng lệnh từng bước một.
        </p>
      </div>

      {/* Select sample */}
      <div style={{ marginBottom: '1rem' }}>
        <select
          className="sample-select"
          value={selectedSampleIdx}
          onChange={(e) => {
            setSelectedSampleIdx(Number(e.target.value));
            setCurrentStep(0);
          }}
        >
          {SAMPLES.map((s, idx) => (
            <option key={idx} value={idx}>
              {s.name}
            </option>
          ))}
        </select>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '1.5rem', alignItems: 'start' }}>
        {/* Left: Code Box with Active Line */}
        <div className="card" style={{ padding: 0, overflow: 'hidden' }}>
          <div style={{ padding: '0.6rem 1rem', background: 'var(--color-input-bg)', borderBottom: '1px solid var(--color-border)', fontWeight: 600, fontSize: '0.88rem' }}>
            Mã nguồn Python
          </div>
          <div style={{ padding: '1rem 0', fontFamily: 'monospace', fontSize: '0.92rem', background: 'var(--color-code-bg)' }}>
            {sample.code.map((line, idx) => {
              const isActive = activeStep.line === idx;
              return (
                <div
                  key={idx}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    padding: '0.35rem 1rem',
                    background: isActive ? 'rgba(37,99,235,0.25)' : 'transparent',
                    borderLeft: isActive ? '4px solid var(--color-primary)' : '4px solid transparent',
                    color: isActive ? 'var(--color-primary)' : 'var(--color-text)',
                    fontWeight: isActive ? 700 : 400,
                  }}
                >
                  <span style={{ width: 30, color: 'var(--color-text-secondary)', userSelect: 'none' }}>
                    {idx + 1}
                  </span>
                  <span>{line}</span>
                  {isActive && <span style={{ marginLeft: 'auto', fontSize: '0.75rem', color: 'var(--color-cyan)' }}>👈 Đang chạy</span>}
                </div>
              );
            })}
          </div>

          <div style={{ padding: '0.8rem 1rem', display: 'flex', gap: '0.8rem', borderTop: '1px solid var(--color-border)', alignItems: 'center' }}>
            <button className="btn btn-primary" onClick={handleNext} disabled={currentStep >= sample.steps.length - 1}>
              <StepForward size={16} /> Bước tiếp theo (Next Step)
            </button>
            <button className="btn btn-ghost" onClick={handleReset}>
              <RotateCcw size={16} /> Chạy lại từ đầu
            </button>
            <span style={{ marginLeft: 'auto', fontSize: '0.85rem', color: 'var(--color-text-secondary)' }}>
              Bước {currentStep + 1} / {sample.steps.length}
            </span>
          </div>
        </div>

        {/* Right: RAM Variables & Explanation */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {/* Explanation */}
          <div className="card" style={{ borderLeft: '4px solid var(--color-cyan)' }}>
            <h4 style={{ margin: '0 0 0.4rem 0', display: 'flex', alignItems: 'center', gap: 6, color: 'var(--color-cyan)' }}>
              <Info size={18} /> Giải thích bước hiện tại
            </h4>
            <p style={{ margin: 0, fontSize: '0.95rem', lineHeight: 1.6 }}>{activeStep.desc}</p>
          </div>

          {/* Variables Memory Box */}
          <div className="card">
            <h4 style={{ margin: '0 0 0.8rem 0' }}>Trạng thái biến trong bộ nhớ RAM</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              {Object.entries(activeStep.vars).map(([name, val]) => (
                <div
                  key={name}
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: '0.6rem 0.8rem',
                    borderRadius: 6,
                    background: 'var(--color-input-bg)',
                    border: '1px solid var(--color-border)',
                  }}
                >
                  <span style={{ fontFamily: 'monospace', fontWeight: 700, color: 'var(--color-primary)' }}>
                    {name}
                  </span>
                  <span style={{ fontFamily: 'monospace', background: 'rgba(34,197,94,0.15)', color: 'var(--color-success)', padding: '0.2rem 0.5rem', borderRadius: 4, fontWeight: 600 }}>
                    {String(val)}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Visualizer;
