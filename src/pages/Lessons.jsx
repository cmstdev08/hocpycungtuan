import React from 'react';
import { useNavigate } from 'react-router-dom';
import { BookOpen, CheckCircle, ChevronRight } from 'lucide-react';
import { lessons } from '../data/lessons.js';
import './Lessons.css';

const Lessons = () => {
  const navigate = useNavigate();
  const saved = JSON.parse(localStorage.getItem('learningProgress')) || {};
  const completedLessons = saved.completedLessons || [];

  return (
    <div className="lessons-page">
      <div className="lessons-header">
        <h2>Khóa học Python</h2>
        <p>12 chương từ cơ bản đến nâng cao. Mỗi bài gồm lý thuyết, ví dụ minh họa và bài tập thực hành.</p>
      </div>

      <div className="lessons-list">
        {lessons.map((lesson) => {
          const done = completedLessons.includes(lesson.id);
          return (
            <div
              key={lesson.id}
              className={`card lesson-row ${done ? 'completed' : ''}`}
              onClick={() => navigate(`/lessons/${lesson.id}`)}
            >
              <div className="lesson-row-left">
                <div className={`lesson-num ${done ? 'done' : ''}`}>
                  {done ? <CheckCircle size={18} /> : lesson.id}
                </div>
                <div className="lesson-row-info">
                  <span className="lesson-row-chapter">Chương {lesson.id}</span>
                  <span className="lesson-row-title">{lesson.title}</span>
                </div>
              </div>
              <ChevronRight size={18} className="lesson-row-arrow" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Lessons;
