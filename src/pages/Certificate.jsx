import React, { useRef, useState, useEffect } from 'react';
import { Award, Download, CheckCircle, ShieldCheck, User } from 'lucide-react';
import { lessons } from '../data/lessons.js';
import { getUserProfile } from '../utils/gamification.js';

const Certificate = () => {
  const canvasRef = useRef(null);
  const [userName, setUserName] = useState(() => {
    const p = getUserProfile();
    return p.fullName || 'Nguyễn Văn An';
  });

  const saved = JSON.parse(localStorage.getItem('learningProgress') || '{}');
  const completedLessons = saved.completedLessons || [];
  const completedExercises = JSON.parse(localStorage.getItem('completed_exercises') || '[]');

  const isEligible = completedLessons.length >= 10 || completedExercises.length >= 5;

  const drawCertificate = (name) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    // Kích thước canvas chuẩn HD: 1200 x 800
    canvas.width = 1200;
    canvas.height = 800;

    // Nền gradient sang trọng
    const grad = ctx.createLinearGradient(0, 0, 1200, 800);
    grad.addColorStop(0, '#0f172a');
    grad.addColorStop(1, '#1e293b');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, 1200, 800);

    // Viền kim loại đôi sang trọng
    ctx.strokeStyle = '#38bdf8';
    ctx.lineWidth = 12;
    ctx.strokeRect(40, 40, 1120, 720);

    ctx.strokeStyle = '#f59e0b';
    ctx.lineWidth = 3;
    ctx.strokeRect(55, 55, 1090, 690);

    // Header Logo & Badge
    ctx.fillStyle = '#38bdf8';
    ctx.font = 'bold 24px system-ui';
    ctx.textAlign = 'center';
    ctx.fillText('PYTHON LEARNING • NỀN TẢNG TỰ HỌC LẬP TRÌNH', 600, 130);

    // Tiêu đề Chứng chỉ
    ctx.fillStyle = '#f8fafc';
    ctx.font = 'bold 52px system-ui';
    ctx.fillText('CHỨNG NHẬN HOÀN THÀNH', 600, 210);

    ctx.fillStyle = '#94a3b8';
    ctx.font = '22px system-ui';
    ctx.fillText('Chứng nhận trao tặng cho học viên:', 600, 270);

    // Tên học viên
    ctx.fillStyle = '#f59e0b';
    ctx.font = 'bold 50px system-ui';
    ctx.fillText(name.toUpperCase(), 600, 360);

    // Nội dung khóa học
    ctx.fillStyle = '#e2e8f0';
    ctx.font = '24px system-ui';
    ctx.fillText('Đã hoàn thành xuất sắc chương trình đào tạo:', 600, 430);

    ctx.fillStyle = '#38bdf8';
    ctx.font = 'bold 32px system-ui';
    ctx.fillText('CƠ SỞ LẬP TRÌNH PYTHON TỪ CƠ BẢN ĐẾN NÂNG CAO', 600, 485);

    ctx.fillStyle = '#94a3b8';
    ctx.font = '20px system-ui';
    ctx.fillText('Bao gồm 13 Chương chuyên đề và ngân hàng bài tập thực hành thuật toán', 600, 535);

    // Dòng chữ ký & Ngày cấp
    const dateStr = new Date().toLocaleDateString('vi-VN');
    ctx.fillStyle = '#cbd5e1';
    ctx.font = '18px system-ui';
    ctx.textAlign = 'left';
    ctx.fillText(`Ngày cấp: ${dateStr}`, 120, 670);
    ctx.fillText(`Mã chứng chỉ: PY-${Math.random().toString(36).substring(2, 9).toUpperCase()}`, 120, 700);

    ctx.textAlign = 'right';
    ctx.fillText('Xác thực bởi: Hệ thống Python Learning', 1080, 670);
    ctx.fillStyle = '#22c55e';
    ctx.fillText('✓ Verified Online Certificate', 1080, 700);
  };

  useEffect(() => {
    drawCertificate(userName);
  }, [userName]);

  const handleDownload = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const link = document.createElement('a');
    link.download = `Chung_Nhan_Python_${userName.replace(/\s+/g, '_')}.png`;
    link.href = canvas.toDataURL('image/png');
    link.click();
  };

  const handleNameChange = (e) => {
    const val = e.target.value;
    setUserName(val);
    try {
      const p = getUserProfile();
      p.fullName = val;
      localStorage.setItem('python_user_profile', JSON.stringify(p));
    } catch (err) {
      console.warn('Lỗi lưu tên học viên:', err);
    }
  };

  return (
    <div style={{ maxWidth: 1000, margin: '0 auto' }}>
      <div style={{ marginBottom: '1.5rem' }}>
        <h2 style={{ display: 'flex', alignItems: 'center', gap: 8, margin: '0 0 0.3rem 0' }}>
          <Award size={26} color="var(--color-primary)" /> Chứng nhận hoàn thành khóa học Python
        </h2>
        <p style={{ color: 'var(--color-text-secondary)', margin: 0 }}>
          Hệ thống cấp chứng chỉ trực tuyến khi bạn đạt đủ điều kiện hoàn thành khóa học.
        </p>
      </div>

      {/* Điều kiện */}
      <div className="card" style={{ marginBottom: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
        <div>
          <h4 style={{ margin: '0 0 0.4rem 0', display: 'flex', alignItems: 'center', gap: 6 }}>
            <ShieldCheck size={18} color="var(--color-success)" /> Tiến độ đủ điều kiện cấp chứng chỉ:
          </h4>
          <div style={{ fontSize: '0.88rem', color: 'var(--color-text-secondary)' }}>
            • Hoàn thành bài học: <strong>{completedLessons.length} / 13</strong> chương
            <br />
            • Bài tập đã giải: <strong>{completedExercises.length} / 250</strong> bài
          </div>
        </div>

        <div style={{ display: 'flex', gap: '0.6rem', alignItems: 'center' }}>
          <User size={18} color="var(--color-cyan)" />
          <input
            type="text"
            className="search-input"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            placeholder="Nhập họ và tên của bạn..."
            style={{ width: 220 }}
          />
          <button className="btn btn-primary" onClick={handleDownload} title="Tải ảnh chứng chỉ HD">
            <Download size={16} /> Tải Chứng chỉ (.PNG)
          </button>
        </div>
      </div>

      {/* Preview Canvas */}
      <div style={{ overflowX: 'auto', borderRadius: 12, boxShadow: 'var(--shadow-md)', background: '#000', padding: 10 }}>
        <canvas ref={canvasRef} style={{ width: '100%', height: 'auto', display: 'block', borderRadius: 8 }} />
      </div>
    </div>
  );
};

export default Certificate;
