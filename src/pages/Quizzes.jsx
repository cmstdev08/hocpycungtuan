import React, { useState } from 'react';
import {
  HelpCircle, CheckCircle, XCircle, ArrowRight,
  ArrowLeft, RotateCcw, Trophy, Award
} from 'lucide-react';
import { quizzes } from '../data/quizzes.js';
import './Quizzes.css';

const Quizzes = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({}); // { [quizId]: optionIndex }
  const [isFinished, setIsFinished] = useState(false);

  const currentQuiz = quizzes[currentIndex];
  const totalQuestions = quizzes.length;

  const handleSelectOption = (optionIndex) => {
    if (selectedAnswers[currentQuiz.id] !== undefined) return; // locked once chosen
    setSelectedAnswers({
      ...selectedAnswers,
      [currentQuiz.id]: optionIndex,
    });
  };

  const handleNext = () => {
    if (currentIndex < totalQuestions - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setIsFinished(true);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleRestart = () => {
    setSelectedAnswers({});
    setCurrentIndex(0);
    setIsFinished(false);
  };

  // Calculate score
  const correctCount = quizzes.reduce((acc, q) => {
    return selectedAnswers[q.id] === q.answer ? acc + 1 : acc;
  }, 0);

  const score = Math.round((correctCount / totalQuestions) * 100);

  return (
    <div className="quizzes-container">
      <div className="quizzes-header">
        <h2><HelpCircle size={22} color="var(--color-primary)" /> Trắc nghiệm kiến thức Python</h2>
        <p>Kiểm tra và củng cố kiến thức từ cơ bản đến nâng cao với giải thích chi tiết cho từng câu hỏi.</p>
      </div>

      {!isFinished ? (
        <div className="card quiz-card">
          <div className="quiz-top">
            <span style={{ fontWeight: 600, color: 'var(--color-cyan)' }}>
              Câu hỏi {currentIndex + 1} / {totalQuestions}
            </span>
            <span style={{ fontSize: '0.8rem', color: 'var(--color-text-secondary)' }}>
              Chương {currentQuiz.chapterId}
            </span>
          </div>

          <div className="quiz-question">{currentQuiz.question}</div>

          <div className="quiz-options">
            {currentQuiz.options.map((option, idx) => {
              const isSelected = selectedAnswers[currentQuiz.id] === idx;
              const hasAnswered = selectedAnswers[currentQuiz.id] !== undefined;
              const isCorrectAnswer = currentQuiz.answer === idx;

              let btnClass = 'quiz-option-btn';
              if (hasAnswered) {
                if (isCorrectAnswer) btnClass += ' correct';
                else if (isSelected) btnClass += ' wrong';
              } else if (isSelected) {
                btnClass += ' selected';
              }

              const letters = ['A', 'B', 'C', 'D'];

              return (
                <button
                  key={idx}
                  className={btnClass}
                  onClick={() => handleSelectOption(idx)}
                  disabled={hasAnswered}
                >
                  <span className="option-letter">{letters[idx]}</span>
                  <span>{option}</span>
                  {hasAnswered && isCorrectAnswer && (
                    <CheckCircle size={18} style={{ marginLeft: 'auto', color: 'var(--color-success)' }} />
                  )}
                  {hasAnswered && isSelected && !isCorrectAnswer && (
                    <XCircle size={18} style={{ marginLeft: 'auto', color: 'var(--color-danger)' }} />
                  )}
                </button>
              );
            })}
          </div>

          {/* Explanation if answered */}
          {selectedAnswers[currentQuiz.id] !== undefined && (
            <div className="quiz-explanation">
              💡 <strong>Giải thích đáp án:</strong> {currentQuiz.explanation}
            </div>
          )}

          {/* Navigation Controls */}
          <div className="quiz-controls">
            <button className="btn btn-ghost" onClick={handlePrev} disabled={currentIndex === 0}>
              <ArrowLeft size={16} /> Câu trước
            </button>

            <button
              className="btn btn-primary"
              onClick={handleNext}
              disabled={selectedAnswers[currentQuiz.id] === undefined}
            >
              {currentIndex === totalQuestions - 1 ? 'Hoàn thành bài thi' : 'Câu tiếp theo'}{' '}
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      ) : (
        /* Summary Screen */
        <div className="card quiz-summary-card">
          <Trophy size={54} color="var(--color-warning)" style={{ margin: '0 auto' }} />
          <h3>Kết Quả Bài Kiểm Tra</h3>
          <p style={{ color: 'var(--color-text-secondary)' }}>
            Bạn đã trả lời đúng {correctCount} trên tổng số {totalQuestions} câu hỏi.
          </p>

          <div className="quiz-summary-score">{score} / 100 điểm</div>

          <div style={{ display: 'flex', gap: '0.8rem', justifyContent: 'center', marginTop: '1.5rem' }}>
            <button className="btn btn-primary" onClick={handleRestart}>
              <RotateCcw size={16} /> Làm lại bài trắc nghiệm
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Quizzes;
