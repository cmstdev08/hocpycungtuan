import React from 'react';
import { FileText, Printer, Download, Sparkles } from 'lucide-react';
import { cheatSheetSections } from '../data/cheatSheetData.js';

const CheatSheet = () => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div style={{ maxWidth: 1100, margin: '0 auto' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem', flexWrap: 'wrap', gap: '1rem' }}>
        <div>
          <h2 style={{ display: 'flex', alignItems: 'center', gap: 8, margin: '0 0 0.3rem 0' }}>
            <FileText size={24} color="var(--color-primary)" /> Python Cheat Sheet (Bảng tra cứu 1 trang)
          </h2>
          <p style={{ color: 'var(--color-text-secondary)', margin: 0 }}>
            Tóm tắt toàn bộ công thức, cú pháp và hàm cốt lõi của 13 chương môn Cơ sở lập trình.
          </p>
        </div>

        <button className="btn btn-primary" onClick={handlePrint}>
          <Printer size={16} /> In / Xuất PDF (Chuẩn A4)
        </button>
      </div>

      {/* Grid of cheatsheet cards */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1rem' }}>
        {cheatSheetSections.map((sec, idx) => (
          <div key={idx} className="card" style={{ padding: '1rem 1.2rem', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
            <h4 style={{ margin: 0, color: 'var(--color-cyan)', fontSize: '0.98rem', borderBottom: '1px solid var(--color-border)', paddingBottom: '0.4rem' }}>
              {sec.category}
            </h4>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {sec.items.map((item, i) => (
                <div key={i} style={{ fontSize: '0.85rem' }}>
                  <span style={{ fontWeight: 600, color: 'var(--color-text)', display: 'block', marginBottom: 2 }}>
                    • {item.name}:
                  </span>
                  <pre style={{
                    margin: 0,
                    padding: '0.4rem 0.6rem',
                    background: 'var(--color-code-bg)',
                    border: '1px solid var(--color-border)',
                    borderRadius: 4,
                    fontFamily: 'monospace',
                    fontSize: '0.8rem',
                    color: '#38bdf8',
                    whiteSpace: 'pre-wrap',
                    wordBreak: 'break-word',
                  }}>
                    {item.code}
                  </pre>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CheatSheet;
