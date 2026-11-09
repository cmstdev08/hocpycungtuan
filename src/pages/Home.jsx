import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  BookOpen, CheckCircle, BarChart3, ArrowRight,
  Clock, Zap, Target, TrendingUp
} from 'lucide-react';
import { lessons } from '../data/lessons.js';
import './Home.css';

const Home = () => {
  const navigate = useNavigate();
  const [progress, setProgress] = useState({ completedLessons: [], lastLesson: null });

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('learningProgress')) || {};
    const completedEx = JSON.parse(localStorage.getItem('completed_exercises')) || [];
    setProgress({
      completedLessons: saved.completedLessons || [],
      completedExercises: completedEx,
      lastLesson: saved.lastLesson || null,
    });
  }, []);

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
          <h2>Xin chào! Chào mừng bạn đến với <span className="gradient-text">Python Learning</span> 👋</h2>
          <p>Nền tảng tự học Python miễn phí dành cho sinh viên. Học lý thuyết, viết code và chạy thử ngay trên trình duyệt.</p>
          <button className="btn btn-primary" onClick={continueLearning}>
            <Zap size={16} />
            {progress.lastLesson ? 'Tiếp tục học' : 'Bắt đầu học ngay'}
          </button>
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
