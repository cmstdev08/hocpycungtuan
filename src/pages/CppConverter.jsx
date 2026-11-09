import React, { useState } from 'react';
import { ArrowLeftRight, Copy, Check, Sparkles } from 'lucide-react';

const SAMPLES_CPP = [
  {
    name: '1. In ra màn hình (cout <<)',
    cpp: `#include <iostream>
using namespace std;

int main() {
    cout << "Xin chào C++" << endl;
    return 0;
}`,
    py: `# Python tương đương:
print("Xin chào C++")`,
  },
  {
    name: '2. Khai báo biến & Nhập số (cin >>)',
    cpp: `int a, b;
cin >> a >> b;
int tong = a + b;
cout << "Tổng: " << tong;`,
    py: `# Python tương đương:
a = int(input())
b = int(input())
tong = a + b
print(f"Tổng: {tong}")`,
  },
  {
    name: '3. Vòng lặp For',
    cpp: `for (int i = 0; i < 5; i++) {
    cout << i << " ";
}`,
    py: `# Python tương đương:
for i in range(5):
    print(i, end=" ")`,
  },
  {
    name: '4. Hàm tính bình phương',
    cpp: `int binhPhuong(int x) {
    return x * x;
}`,
    py: `# Python tương đương:
def binh_phuong(x):
    return x * x`,
  },
];

const CppConverter = () => {
  const [selectedSample, setSelectedSample] = useState(SAMPLES_CPP[0]);
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(selectedSample.py);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div style={{ maxWidth: 1000, margin: '0 auto' }}>
      <div style={{ marginBottom: '1.5rem' }}>
        <h2 style={{ display: 'flex', alignItems: 'center', gap: 8, margin: '0 0 0.3rem 0' }}>
          <ArrowLeftRight size={24} color="var(--color-primary)" /> Đối chiếu & Chuyển đổi cú pháp C++ sang Python
        </h2>
        <p style={{ color: 'var(--color-text-secondary)', margin: 0 }}>
          Dành riêng cho sinh viên đã học qua môn C++/C: so sánh cú pháp 2 ngôn ngữ để nắm bắt Python chỉ trong 5 phút.
        </p>
      </div>

      <div style={{ marginBottom: '1.5rem' }}>
        <select
          className="sample-select"
          onChange={(e) => setSelectedSample(SAMPLES_CPP[Number(e.target.value)])}
        >
          {SAMPLES_CPP.map((s, idx) => (
            <option key={idx} value={idx}>
              {s.name}
            </option>
          ))}
        </select>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.5rem' }}>
        {/* C++ Code Box */}
        <div className="card" style={{ padding: 0, overflow: 'hidden' }}>
          <div style={{ padding: '0.6rem 1rem', background: 'var(--color-input-bg)', borderBottom: '1px solid var(--color-border)', fontWeight: 700, color: '#38bdf8' }}>
            🔵 Ngôn ngữ C++ (Cũ)
          </div>
          <pre style={{
            margin: 0,
            padding: '1.2rem',
            fontFamily: 'monospace',
            fontSize: '0.92rem',
            lineHeight: 1.7,
            background: 'var(--color-code-bg)',
            whiteSpace: 'pre-wrap',
            minHeight: 180,
          }}>
            {selectedSample.cpp}
          </pre>
        </div>

        {/* Python Code Box */}
        <div className="card" style={{ padding: 0, overflow: 'hidden', border: '1.5px solid var(--color-primary)' }}>
          <div style={{
            padding: '0.6rem 1rem',
            background: 'var(--color-hover)',
            borderBottom: '1px solid var(--color-border)',
            fontWeight: 700,
            color: 'var(--color-primary)',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
            <span>🐍 Python 3 (Ngắn gọn, trong sáng)</span>
            <button className="btn-ghost" onClick={handleCopy} title="Sao chép code Python">
              {copied ? <Check size={16} color="var(--color-success)" /> : <Copy size={16} />}
            </button>
          </div>
          <pre style={{
            margin: 0,
            padding: '1.2rem',
            fontFamily: 'monospace',
            fontSize: '0.92rem',
            lineHeight: 1.7,
            background: 'var(--color-code-bg)',
            whiteSpace: 'pre-wrap',
            color: 'var(--color-cyan)',
            minHeight: 180,
          }}>
            {selectedSample.py}
          </pre>
        </div>
      </div>
    </div>
  );
};

export default CppConverter;
