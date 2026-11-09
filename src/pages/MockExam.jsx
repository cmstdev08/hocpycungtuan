import React, { useState, useEffect } from 'react';
import {
  Timer, Award, CheckCircle, XCircle, ArrowRight,
  ArrowLeft, RotateCcw, AlertTriangle, ShieldCheck
} from 'lucide-react';
import { quizzes } from '../data/quizzes.js';
import { addXP } from '../utils/gamification.js';

const MockExam = () => {
  const [examStarted, setExamStarted] = useState(false);
  const [examFinished, setExamFinished] = useState(false);
  const [timeLeft, setTimeLeft] = useState(45 * 60); // 45 phút = 2700 giây
  const [examQuestions, setExamQuestions] = useState([]);
  const [selectedAnswers, setSelectedAnswers] = useState({});

  // Khởi tạo đề thi ngẫu nhiên 15 câu khi bắt đầu
  const startExam = () => {
    // Trộn ngẫu nhiên câu hỏi
    const shuffled = [...quizzes].sort(() => 0.5 - Math.random()).slice(0, 15);
    setExamQuestions(shuffled);
    setSelectedAnswers({});
    setTimeLeft(45 * 60);
    setExamFinished(false);
    setExamStarted(true);
  };

  // Đếm ngược thời gian
  useEffect(() => {
    if (!examStarted || examFinished) return;
    if (timeLeft <= 0) {
      finishExam();
      return;
    }
    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(timer);
  }, [examStarted, examFinished, timeLeft]);

  const handleSelect = (qId, optIdx) => {
    if (examFinished) return;
    setSelectedAnswers({
      ...selectedAnswers,
      [qId]: optIdx,
    });
  };

  const finishExam = () => {
    setExamFinished(true);
    // Tính điểm và cộng XP
    let correct = 0;
    examQuestions.forEach((q) => {
      if (selectedAnswers[q.id] === q.answer) correct++;
    });
    const score = Math.round((correct / examQuestions.length) * 100);
    if (score >= 80) {
      addXP(100, 'quiz_master');
    } else {
      addXP(40);
    }
  };

  const formatTime = (secs) => {
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
  };

  const correctCount = examQuestions.reduce((acc, q) => {
    return selectedAnswers[q.id] === q.answer ? acc + 1 : acc;
  }, 0);

  return (
    <div style={{ maxWidth: 900, margin: '0 auto' }}>
      <div style={{ marginBottom: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
        <div>
          <h2 style={{ display: 'flex', alignItems: 'center', gap: 8, margin: '0 0 0.3rem 0' }}>
            <Timer size={24} color="var(--color-primary)" /> Phòng thi thử trắc nghiệm Cơ sở lập trình
          </h2>
          <p style={{ color: 'var(--color-text-secondary)', margin: 0 }}>
            Mô phỏng kỳ thi kết thúc học phần: 15 câu hỏi ngẫu nhiên trong thời gian 45 phút.
          </p>
        </div>

        {examStarted && !examFinished && (
          <div style={{
            fontSize: '1.3rem', fontWeight: 800, padding: '0.5rem 1rem',
            borderRadius: 8, background: timeLeft < 300 ? 'rgba(239,68,68,0.2)' : 'rgba(37,99,235,0.15)',
            color: timeLeft < 300 ? 'var(--color-danger)' : 'var(--color-primary)',
            border: '1px solid currentColor'
          }}>
            ⏱ {formatTime(timeLeft)}
          </div>
        )}
      </div>

      {!examStarted ? (
        <div className="card" style={{ padding: '2.5rem', textAlign: 'center' }}>
          <ShieldCheck size={56} color="var(--color-cyan)" style={{ margin: '0 auto 1rem auto' }} />
          <h3>Quy chế phòng thi thử trực tuyến</h3>
          <p style={{ maxWidth: 600, margin: '0.5rem auto 1.5rem auto', color: 'var(--color-text-secondary)', lineHeight: 1.7 }}>
            • Đề thi gồm 15 câu hỏi trắc nghiệm khách quan 4 lựa chọn.<br />
            • Thời gian làm bài: <strong>45 phút</strong> đếm ngược.<br />
            • Kết quả và lời giải chi tiết sẽ được công bố ngay sau khi bấm Nộp bài.
          </p>
          <button className="btn btn-primary" onClick={startExam} style={{ padding: '0.8rem 2rem', fontSize: '1rem' }}>
            Bắt đầu làm bài thi ngay
          </button>
        </div>
      ) : !examFinished ? (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {examQuestions.map((q, idx) => {
            const chosen = selectedAnswers[q.id];
            return (
              <div key={q.id} className="card">
                <p style={{ fontWeight: 600, fontSize: '0.98rem', marginBottom: '0.8rem' }}>
                  Câu {idx + 1}: {q.question}
                </p>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '0.5rem' }}>
                  {q.options.map((opt, oIdx) => (
                    <button
                      key={oIdx}
                      style={{
                        textAlign: 'left',
                        padding: '0.7rem 0.9rem',
                        borderRadius: 6,
                        background: chosen === oIdx ? 'var(--color-hover)' : 'var(--color-input-bg)',
                        border: chosen === oIdx ? '1.5px solid var(--color-primary)' : '1px solid var(--color-border)',
                        color: chosen === oIdx ? 'var(--color-primary)' : 'var(--color-text)',
                        fontWeight: chosen === oIdx ? 600 : 400,
                        cursor: 'pointer'
                      }}
                      onClick={() => handleSelect(q.id, oIdx)}
                    >
                      {String.fromCharCode(65 + oIdx)}. {opt}
                    </button>
                  ))}
                </div>
              </div>
            );
          })}

          <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '1rem' }}>
            <button
              className="btn btn-cyan"
              style={{ padding: '0.8rem 2rem', fontSize: '1rem' }}
              onClick={() => {
                if (window.confirm('Bạn có chắc chắn muốn nộp bài thi không?')) {
                  finishExam();
                }
              }}
            >
              Nộp bài thi
            </button>
          </div>
        </div>
      ) : (
        /* Kết quả bài thi */
        <div className="card" style={{ padding: '2.5rem', textAlign: 'center' }}>
          <Award size={64} color="var(--color-warning)" style={{ margin: '0 auto 1rem auto' }} />
          <h2>Kết Quả Bài Thi Thử</h2>
          <div style={{ fontSize: '3rem', fontWeight: 800, color: 'var(--color-primary)', margin: '1rem 0' }}>
            {Math.round((correctCount / examQuestions.length) * 100)} / 100 Điểm
          </div>
          <p style={{ color: 'var(--color-text-secondary)', fontSize: '1.05rem' }}>
            Bạn trả lời đúng <strong>{correctCount} / {examQuestions.length}</strong> câu hỏi.
          </p>

          <button className="btn btn-primary" onClick={startExam} style={{ marginTop: '1.5rem' }}>
            <RotateCcw size={16} /> Làm lại đề thi mới
          </button>
        </div>
      )}
    </div>
  );
};

export default MockExam;
