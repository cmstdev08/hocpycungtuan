import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  BookOpen, CheckCircle, BarChart3, ArrowRight,
  Clock, Zap, Target, TrendingUp, Flame, Trophy, Download, Upload
} from 'lucide-react';
import { lessons } from '../data/lessons.js';
import { getUserProfile, calculateLevel, BADGES } from '../utils/gamification.js';
import { exportProgressJSON, importProgressJSON } from '../utils/backup.js';
import './Home.css';

const Home = () => {
  const navigate = useNavigate();
  const [progress, setProgress] = useState({ completedLessons: [], lastLesson: null });
  const [profile, setProfile] = useState(getUserProfile());

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('learningProgress')) || {};
    const completedEx = JSON.parse(localStorage.getItem('completed_exercises')) || [];
    setProgress({
      completedLessons: saved.completedLessons || [],
      completedExercises: completedEx,
      lastLesson: saved.lastLesson || null,
    });
    setProfile(getUserProfile());
  }, []);

  const lvl = calculateLevel(profile.xp || 0);

  const handleImport = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    importProgressJSON(
      file,
      () => {
        alert('Khôi phục tiến độ thành công! Trang web sẽ làm mới.');
        window.location.reload();
      },
      () => alert('File sao lưu không hợp lệ!')
    );
  };

  const totalLessons = lessons.length;
  const completedCount = progress.completedLessons.length;
  const percent = totalLessons > 0 ? Math.round((completedCount / totalLessons) * 100) : 0;

  const continueLearning = () => {
    if (progress.lastLesson) {
      navigate(`/lessons/${progress.lastLesson.id}`);
    } else {
      navigate('/lessons/1');
    }
  };

  return (
    <div className="home">
      {/* Hero greeting */}
      <section className="hero-greeting">
        <div className="hero-content">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.8rem', marginBottom: '0.8rem' }}>
            <h2 style={{ margin: 0 }}>
              Xin chào! Chào mừng bạn đến với <span className="gradient-text">Python Learning</span> 👋
            </h2>
            <div style={{ display: 'flex', gap: '0.6rem', alignItems: 'center' }}>
              <span style={{ background: 'rgba(239,68,68,0.15)', color: '#ef4444', padding: '0.3rem 0.6rem', borderRadius: 20, fontSize: '0.85rem', fontWeight: 700, display: 'flex', alignItems: 'center', gap: 4 }}>
                <Flame size={16} /> {profile.streak || 1} ngày Streak
              </span>
              <span style={{ background: 'rgba(245,158,11,0.15)', color: '#f59e0b', padding: '0.3rem 0.6rem', borderRadius: 20, fontSize: '0.85rem', fontWeight: 700, display: 'flex', alignItems: 'center', gap: 4 }}>
                <Trophy size={16} /> Level {lvl.level}: {lvl.title} ({profile.xp || 0} XP)
              </span>
            </div>
          </div>
          <p>Nền tảng tự học Python miễn phí dành cho sinh viên. Học lý thuyết, viết code và chạy thử ngay trên trình duyệt.</p>
          <div style={{ display: 'flex', gap: '0.8rem', flexWrap: 'wrap', alignItems: 'center' }}>
            <button className="btn btn-primary" onClick={continueLearning}>
              <Zap size={16} />
              {progress.lastLesson ? 'Tiếp tục học' : 'Bắt đầu học ngay'}
            </button>
            <button className="btn btn-outline" onClick={exportProgressJSON} title="Tải file sao lưu dữ liệu tiến độ học">
              <Download size={14} /> Sao lưu tiến độ (.JSON)
            </button>
            <label className="btn btn-ghost" style={{ cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: 4 }} title="Khôi phục tiến độ từ file JSON">
              <Upload size={14} /> Khôi phục tiến độ
              <input type="file" accept=".json" onChange={handleImport} style={{ display: 'none' }} />
            </label>
          </div>
        </div>
      </section>

      {/* Huy hiệu danh dự */}
      <section style={{ marginBottom: '1.5rem' }}>
        <h3 className="section-title">Huy hiệu thành tích đã mở khóa</h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '0.8rem' }}>
          {BADGES.map((b) => {
            const isUnlocked = profile.unlockedBadges?.includes(b.id);
            return (
              <div
                key={b.id}
                className="card"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.8rem',
                  padding: '0.8rem 1rem',
                  opacity: isUnlocked ? 1 : 0.45,
                  filter: isUnlocked ? 'none' : 'grayscale(80%)',
                  border: isUnlocked ? '1.5px solid var(--color-cyan)' : '1px solid var(--color-border)',
                }}
              >
                <div style={{ fontSize: '1.8rem' }}>{b.icon}</div>
                <div>
                  <strong style={{ fontSize: '0.88rem', display: 'block' }}>{b.title}</strong>
                  <span style={{ fontSize: '0.74rem', color: 'var(--color-text-secondary)', lineHeight: 1.3, display: 'block' }}>
                    {b.desc}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Stat cards */}
      <section className="stats-grid">
        <div className="card stat-card">
          <div className="stat-icon-box blue">
            <BookOpen size={22} />
          </div>
          <div className="stat-info">
            <span className="stat-number">{totalLessons}</span>
            <span className="stat-label">Tổng bài học</span>
          </div>
        </div>

        <div className="card stat-card">
          <div className="stat-icon-box green">
            <CheckCircle size={22} />
          </div>
          <div className="stat-info">
            <span className="stat-number">{completedCount}</span>
            <span className="stat-label">Đã hoàn thành</span>
          </div>
        </div>

        <div className="card stat-card">
          <div className="stat-icon-box cyan">
            <TrendingUp size={22} />
          </div>
          <div className="stat-info">
            <span className="stat-number">{percent}%</span>
            <span className="stat-label">Tiến độ</span>
          </div>
        </div>

        <div className="card stat-card">
          <div className="stat-icon-box orange">
            <Target size={22} />
          </div>
          <div className="stat-info">
            <span className="stat-number">{progress.completedExercises?.length || 0}</span>
            <span className="stat-label">Bài tập hoàn thành</span>
          </div>
        </div>
      </section>

      {/* Progress bar */}
      <section className="card progress-card">
        <div className="progress-header">
          <h3><BarChart3 size={18} /> Tiến độ khóa học</h3>
          <span className="progress-percent">{percent}%</span>
        </div>
        <div className="progress-bar-track">
          <div className="progress-bar-fill" style={{ width: `${percent}%` }} />
        </div>
        <span className="progress-detail">{completedCount} / {totalLessons} bài học đã hoàn thành</span>
      </section>

      {/* Continue learning */}
      {progress.lastLesson && (
        <section className="card continue-card" onClick={continueLearning}>
          <div className="continue-left">
            <Clock size={20} className="continue-icon" />
            <div>
              <span className="continue-label">Bài học gần đây</span>
              <span className="continue-title">{progress.lastLesson.title}</span>
            </div>
          </div>
          <ArrowRight size={20} className="continue-arrow" />
        </section>
      )}

      {/* Chapter list */}
      <section className="chapters">
        <h3 className="section-title">Danh sách chương học</h3>
        <div className="chapters-grid">
          {lessons.map((lesson) => {
            const done = progress.completedLessons.includes(lesson.id);
            return (
              <div
                key={lesson.id}
                className={`card chapter-card ${done ? 'completed' : ''}`}
                onClick={() => navigate(`/lessons/${lesson.id}`)}
              >
                <div className="chapter-header">
                  <span className="chapter-badge">Chương {lesson.id}</span>
                  {done && <CheckCircle size={16} className="chapter-check" />}
                </div>
                <span className="chapter-title">{lesson.title}</span>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default Home;
