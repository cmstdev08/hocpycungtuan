import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
  ArrowLeft, ArrowRight, BookOpen, Code2, FileText,
  Lightbulb, PenTool, CheckCircle, AlertTriangle, HelpCircle, Target,
  Volume2, VolumeX, StickyNote, Save
} from 'lucide-react';
import { lessons } from '../data/lessons.js';
import './Lessons.css';

const LessonDetail = () => {
  const { lessonId } = useParams();
  const navigate = useNavigate();
  const lesson = lessons.find(l => l.id === Number(lessonId));

  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [userNote, setUserNote] = useState('');
  const [noteSaved, setNoteSaved] = useState(false);

  useEffect(() => {
    if (lesson) {
      const progress = JSON.parse(localStorage.getItem('learningProgress')) || {};
      progress.lastLesson = { id: lesson.id, title: lesson.title };
      localStorage.setItem('learningProgress', JSON.stringify(progress));
      setSelectedAnswers({});

      // Lấy note của bài học này
      const allNotes = JSON.parse(localStorage.getItem('python_lesson_notes') || '{}');
      setUserNote(allNotes[lesson.id] || '');
      setNoteSaved(false);

      // Dừng audio nếu đang đọc bài trước
      if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
        setIsPlayingAudio(false);
      }
    }
  }, [lesson]);

  // AI Voice Reader
  const toggleAudio = () => {
    if (!('speechSynthesis' in window)) {
      alert('Trình duyệt của bạn không hỗ trợ Web Speech API.');
      return;
    }

    if (isPlayingAudio) {
      window.speechSynthesis.cancel();
      setIsPlayingAudio(false);
    } else {
      const textToRead = `Bài học: ${lesson.title}. Mục tiêu bài học: ${lesson.objective || ''}. Lý thuyết: ${lesson.theory}`;
      const utterance = new SpeechSynthesisUtterance(textToRead);
      utterance.lang = 'vi-VN';
      utterance.rate = 1.0;
      utterance.onend = () => setIsPlayingAudio(false);
      utterance.onerror = () => setIsPlayingAudio(false);
      window.speechSynthesis.speak(utterance);
      setIsPlayingAudio(true);
    }
  };

  // Lưu note
  const handleSaveNote = () => {
    const allNotes = JSON.parse(localStorage.getItem('python_lesson_notes') || '{}');
    allNotes[lesson.id] = userNote;
    localStorage.setItem('python_lesson_notes', JSON.stringify(allNotes));
    setNoteSaved(true);
    setTimeout(() => setNoteSaved(false), 2000);
  };

  if (!lesson) {
    return (
      <div className="lesson-detail">
        <p>Bài học không tồn tại.</p>
        <button className="btn btn-primary" onClick={() => navigate('/lessons')}>
          <ArrowLeft size={16} /> Quay lại danh sách bài học
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
    alert('Đã đánh dấu hoàn thành chương học! ✅');
  };

  const handleSelectQuiz = (qIdx, optIdx) => {
    setSelectedAnswers({
      ...selectedAnswers,
      [qIdx]: optIdx
    });
  };

  const prevLesson = lessons.find(l => l.id === lesson.id - 1);
  const nextLesson = lessons.find(l => l.id === lesson.id + 1);

  return (
    <div className="lesson-detail">
      {/* Nav back */}
      <div className="lesson-detail-nav">
        <button className="btn btn-ghost" onClick={() => navigate('/lessons')}>
          <ArrowLeft size={16} /> Quay lại danh mục
        </button>
      </div>

      {/* Header Info */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.8rem', marginBottom: '0.5rem' }}>
        <div>
          <span className="lesson-chapter-label">{lesson.stage} • Chương {lesson.id}</span>
          <h2 style={{ margin: 0 }}>{lesson.title}</h2>
        </div>

        <button
          className={isPlayingAudio ? 'btn btn-cyan' : 'btn btn-outline'}
          onClick={toggleAudio}
          title="Nghe bài giảng âm thanh giọng đọc Tiếng Việt"
        >
          {isPlayingAudio ? <VolumeX size={16} /> : <Volume2 size={16} />}
          {isPlayingAudio ? 'Dừng đọc' : 'Nghe bài giảng'}
        </button>
      </div>

      {/* 1. Mục tiêu bài học */}
      {lesson.objective && (
        <section className="lesson-section">
          <div className="card" style={{ borderLeft: '4px solid var(--color-cyan)', background: 'rgba(6,182,212,0.06)' }}>
            <h4 style={{ display: 'flex', alignItems: 'center', gap: 6, margin: '0 0 0.4rem 0', color: 'var(--color-cyan)' }}>
              <Target size={18} /> 1. Mục tiêu bài học
            </h4>
            <p style={{ margin: 0, fontSize: '0.92rem', lineHeight: 1.6, whiteSpace: 'pre-line' }}>{lesson.objective}</p>
          </div>
        </section>
      )}

      {/* 2. Kiến thức lý thuyết */}
      <section className="lesson-section">
        <h3><BookOpen size={18} /> 2. Kiến thức lý thuyết</h3>
        <div className="card">
          <p className="lesson-theory">{lesson.theory}</p>
        </div>
      </section>

      {/* 3. Cú pháp Python */}
      <section className="lesson-section">
        <h3><Code2 size={18} /> 3. Cú pháp Python</h3>
        <pre className="code-block">{lesson.syntax}</pre>
      </section>

      {/* 4. Ví dụ minh họa */}
      <section className="lesson-section">
        <h3><FileText size={18} /> 4. Ví dụ minh họa</h3>
        <pre className="code-block">{lesson.example}</pre>
      </section>

      {/* 5. Giải thích từng dòng code */}
      <section className="lesson-section">
        <h3><Lightbulb size={18} /> 5. Giải thích từng dòng code</h3>
        <div className="card">
          <p className="lesson-theory">{lesson.explanation}</p>
        </div>
      </section>

      {/* 6. Những lỗi thường gặp */}
      {lesson.commonMistakes && lesson.commonMistakes.length > 0 && (
        <section className="lesson-section">
          <h3><AlertTriangle size={18} color="var(--color-warning)" /> 6. Những lỗi thường gặp (Common Mistakes)</h3>
          <div className="card" style={{ borderLeft: '4px solid var(--color-warning)' }}>
            <ul style={{ margin: 0, paddingLeft: '1.2rem', lineHeight: 1.7, fontSize: '0.92rem' }}>
              {lesson.commonMistakes.map((err, idx) => (
                <li key={idx} style={{ marginBottom: '0.4rem' }}>{err}</li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* 7. Bài tập thực hành */}
      <section className="lesson-section">
        <h3><PenTool size={18} /> 7. Bài tập thực hành</h3>
        <div className="card">
          <p style={{ marginBottom: '1rem', fontWeight: 500, whiteSpace: 'pre-line' }}>{lesson.exercise}</p>
          <button
            className="btn btn-primary"
            onClick={() => navigate('/editor', { state: { presetCode: lesson.sampleCode } })}
          >
            <Code2 size={16} /> Mở code trong Python Compiler
          </button>
        </div>
      </section>

      {/* 8. Câu hỏi ôn tập */}
      {lesson.reviewQuestions && lesson.reviewQuestions.length > 0 && (
        <section className="lesson-section">
          <h3><HelpCircle size={18} color="var(--color-primary)" /> 8. Câu hỏi ôn tập</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
            {lesson.reviewQuestions.map((q, qIdx) => {
              const selected = selectedAnswers[qIdx];
              return (
                <div key={qIdx} className="card">
                  <p style={{ fontWeight: 600, marginBottom: '0.6rem' }}>
                    Câu {qIdx + 1}: {q.question}
                  </p>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                    {q.options.map((opt, optIdx) => {
                      const isChosen = selected === optIdx;
                      const hasChosen = selected !== undefined;
                      const isCorrect = q.answer === optIdx;
                      let btnBg = 'var(--color-input-bg)';
                      let borderCol = 'var(--color-border)';

                      if (hasChosen) {
                        if (isCorrect) {
                          btnBg = 'rgba(34, 197, 94, 0.15)';
                          borderCol = 'var(--color-success)';
                        } else if (isChosen) {
                          btnBg = 'rgba(239, 68, 68, 0.15)';
                          borderCol = 'var(--color-danger)';
                        }
                      }

                      return (
                        <button
                          key={optIdx}
                          style={{
                            textAlign: 'left',
                            padding: '0.6rem 0.8rem',
                            borderRadius: 6,
                            background: btnBg,
                            border: `1px solid ${borderCol}`,
                            color: 'var(--color-text)',
                            fontSize: '0.88rem',
                            cursor: hasChosen ? 'default' : 'pointer'
                          }}
                          disabled={hasChosen}
                          onClick={() => handleSelectQuiz(qIdx, optIdx)}
                        >
                          {String.fromCharCode(65 + optIdx)}. {opt}
                        </button>
                      );
                    })}
                  </div>
                  {selected !== undefined && (
                    <div style={{ marginTop: '0.6rem', fontSize: '0.85rem', color: 'var(--color-text-secondary)', background: 'var(--color-code-bg)', padding: '0.5rem', borderRadius: 4 }}>
                      💡 <strong>Giải thích:</strong> {q.explanation}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>
      )}

      {/* Ghi chú cá nhân */}
      <section className="lesson-section">
        <h3><StickyNote size={18} color="var(--color-warning)" /> Ghi chú cá nhân cho bài này</h3>
        <div className="card">
          <textarea
            rows={3}
            className="search-input"
            value={userNote}
            onChange={(e) => setUserNote(e.target.value)}
            placeholder="Ghi lại các mẹo, công thức hoặc lưu ý của bạn tại đây (sẽ tự động lưu lại trên máy)..."
            style={{ width: '100%', marginBottom: '0.6rem', padding: '0.8rem', minHeight: 70 }}
          />
          <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', gap: '0.6rem' }}>
            {noteSaved && <span style={{ color: 'var(--color-success)', fontSize: '0.85rem' }}>Đã lưu ghi chú!</span>}
            <button className="btn btn-primary" onClick={handleSaveNote}>
              <Save size={14} /> Lưu ghi chú
            </button>
          </div>
        </div>
      </section>

      {/* Complete Button */}
      <div className="lesson-actions" style={{ marginTop: '2rem' }}>
        <button className="btn btn-cyan" onClick={markComplete}>
          <CheckCircle size={16} /> Đánh dấu hoàn thành chương {lesson.id}
        </button>
      </div>

      {/* Prev / Next */}
      <div className="lesson-bottom-nav">
        {prevLesson ? (
          <button className="btn btn-outline" onClick={() => navigate(`/lessons/${prevLesson.id}`)}>
            <ArrowLeft size={16} /> Chương {prevLesson.id}: {prevLesson.title}
          </button>
        ) : <div />}
        {nextLesson ? (
          <button className="btn btn-primary" onClick={() => navigate(`/lessons/${nextLesson.id}`)}>
            Chương {nextLesson.id}: {nextLesson.title} <ArrowRight size={16} />
          </button>
        ) : <div />}
      </div>
    </div>
  );
};

export default LessonDetail;
