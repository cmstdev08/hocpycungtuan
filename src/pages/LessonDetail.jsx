import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
  ArrowLeft, ArrowRight, BookOpen, Code2, FileText,
  Lightbulb, PenTool, CheckCircle
} from 'lucide-react';
import { lessons } from '../data/lessons.js';
import './Lessons.css';

const LessonDetail = () => {
  const { lessonId } = useParams();
  const navigate = useNavigate();
  const lesson = lessons.find(l => l.id === Number(lessonId));

  useEffect(() => {
    if (lesson) {
      const progress = JSON.parse(localStorage.getItem('learningProgress')) || {};
      progress.lastLesson = { id: lesson.id, title: lesson.title };
      localStorage.setItem('learningProgress', JSON.stringify(progress));
    }
  }, [lesson]);

  if (!lesson) {
    return (
      <div className="lesson-detail">
        <p>Bài học không tồn tại.</p>
        <button className="btn btn-primary" onClick={() => navigate('/lessons')}>
          <ArrowLeft size={16} /> Quay lại
        </button>
      </div>
    );
  }

  const markComplete = () => {
    const progress = JSON.parse(localStorage.getItem('learningProgress')) || {};
    const completed = progress.completedLessons || [];
    if (!completed.includes(lesson.id)) {
      completed.push(lesson.id);
    }
    progress.completedLessons = completed;
    localStorage.setItem('learningProgress', JSON.stringify(progress));
    alert('Đã đánh dấu hoàn thành! ✅');
  };

  const prevLesson = lessons.find(l => l.id === lesson.id - 1);
  const nextLesson = lessons.find(l => l.id === lesson.id + 1);

  return (
    <div className="lesson-detail">
      {/* Nav back */}
      <div className="lesson-detail-nav">
        <button className="btn btn-ghost" onClick={() => navigate('/lessons')}>
          <ArrowLeft size={16} /> Quay lại
        </button>
      </div>

      {/* Title */}
      <span className="lesson-chapter-label">Chương {lesson.id}</span>
      <h2>{lesson.title}</h2>

      {/* Theory */}
      <section className="lesson-section">
        <h3><BookOpen size={16} /> Lý thuyết</h3>
        <div className="card">
          <p className="lesson-theory">{lesson.theory}</p>
        </div>
      </section>

      {/* Syntax */}
      <section className="lesson-section">
        <h3><Code2 size={16} /> Cú pháp</h3>
        <pre className="code-block">{lesson.syntax}</pre>
      </section>

      {/* Example */}
      <section className="lesson-section">
        <h3><FileText size={16} /> Ví dụ minh họa</h3>
        <pre className="code-block">{lesson.example}</pre>
      </section>

      {/* Explanation */}
      <section className="lesson-section">
        <h3><Lightbulb size={16} /> Giải thích</h3>
        <div className="card">
          <p className="lesson-theory">{lesson.explanation}</p>
        </div>
      </section>

      {/* Exercise */}
      <section className="lesson-section">
        <h3><PenTool size={16} /> Bài tập thực hành</h3>
        <div className="card">
          <p>{lesson.exercise}</p>
        </div>
      </section>

      {/* Actions */}
      <div className="lesson-actions">
        <button className="btn btn-primary" onClick={() => navigate('/editor', { state: { presetCode: lesson.sampleCode } })}>
          <Code2 size={16} /> Thực hành ngay
        </button>
        <button className="btn btn-cyan" onClick={markComplete}>
          <CheckCircle size={16} /> Đánh dấu hoàn thành
        </button>
      </div>

      {/* Prev / Next */}
      <div className="lesson-bottom-nav">
        {prevLesson ? (
          <button className="btn btn-outline" onClick={() => navigate(`/lessons/${prevLesson.id}`)}>
            <ArrowLeft size={16} /> {prevLesson.title}
          </button>
        ) : <div />}
        {nextLesson ? (
          <button className="btn btn-primary" onClick={() => navigate(`/lessons/${nextLesson.id}`)}>
            {nextLesson.title} <ArrowRight size={16} />
          </button>
        ) : <div />}
      </div>
    </div>
  );
};

export default LessonDetail;
