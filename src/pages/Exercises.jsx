import React, { useState, useEffect } from 'react';
import Editor from '@monaco-editor/react';
import {
  PenTool, CheckCircle, XCircle, Play, RotateCcw,
  HelpCircle, Lightbulb, Check
} from 'lucide-react';
import { exercises } from '../data/exercises.js';
import { runPythonCode } from '../utils/pyodideRunner.js';
import './Exercises.css';

const Exercises = () => {
  const [selectedExercise, setSelectedExercise] = useState(exercises[0]);
  const [filter, setFilter] = useState('all'); // all | Dễ | Trung bình | Khó
  const [code, setCode] = useState(exercises[0].initialCode);
  const [testResults, setTestResults] = useState(null);
  const [running, setRunning] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const [completedIds, setCompletedIds] = useState(() => {
    const saved = localStorage.getItem('completed_exercises');
    return saved ? JSON.parse(saved) : [];
  });

  // When selected exercise changes
  useEffect(() => {
    setCode(selectedExercise.initialCode);
    setTestResults(null);
    setShowHint(false);
  }, [selectedExercise]);

  const filteredExercises = exercises.filter((ex) => {
    if (filter === 'all') return true;
    return ex.difficulty === filter;
  });

  const handleRunTests = async () => {
    if (running) return;
    setRunning(true);
    setTestResults([]);

    const results = [];
    let allPassed = true;

    for (let i = 0; i < selectedExercise.testCases.length; i++) {
      const tc = selectedExercise.testCases[i];
      const inputs = tc.input ? tc.input.split('\n') : [];

      const exec = await runPythonCode(code, { inputs });
      const actualOutput = exec.output.trim();
      const expectedOutput = tc.expectedOutput.trim();

      const passed = exec.success && actualOutput === expectedOutput;
      if (!passed) allPassed = false;

      results.push({
        index: i + 1,
        description: tc.description,
        input: tc.input,
        expected: expectedOutput,
        actual: actualOutput,
        error: exec.error,
        passed,
      });
    }

    setTestResults(results);
    setRunning(false);

    if (allPassed) {
      if (!completedIds.includes(selectedExercise.id)) {
        const nextCompleted = [...completedIds, selectedExercise.id];
        setCompletedIds(nextCompleted);
        localStorage.setItem('completed_exercises', JSON.stringify(nextCompleted));
      }
    }
  };

  const handleResetCode = () => {
    setCode(selectedExercise.initialCode);
    setTestResults(null);
  };

  const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
  const monacoTheme = currentTheme === 'dark' ? 'vs-dark' : 'light';

  return (
    <div className="exercises-container">
      <div className="exercises-header">
        <h2><PenTool size={22} color="var(--color-primary)" /> Bài tập thực hành có chấm điểm tự động</h2>
        <p>Viết code Python, chạy và kiểm tra kết quả ngay lập tức với các test case.</p>
      </div>

      {/* Difficulty Filters */}
      <div className="difficulty-filters">
        <button
          className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
          onClick={() => setFilter('all')}
        >
          Tất cả ({exercises.length})
        </button>
        <button
          className={`filter-btn ${filter === 'Dễ' ? 'active' : ''}`}
          onClick={() => setFilter('Dễ')}
        >
          Dễ
        </button>
        <button
          className={`filter-btn ${filter === 'Trung bình' ? 'active' : ''}`}
          onClick={() => setFilter('Trung bình')}
        >
          Trung bình
        </button>
        <button
          className={`filter-btn ${filter === 'Khó' ? 'active' : ''}`}
          onClick={() => setFilter('Khó')}
        >
          Khó
        </button>
      </div>

      <div className="exercises-layout">
        {/* Left: Exercise List */}
        <div className="exercises-sidebar-list">
          {filteredExercises.map((ex) => {
            const isDone = completedIds.includes(ex.id);
            const isSelected = selectedExercise.id === ex.id;
            return (
              <div
                key={ex.id}
                className={`exercise-item-card ${isSelected ? 'selected' : ''}`}
                onClick={() => setSelectedExercise(ex)}
              >
                <div className="exercise-item-top">
                  <span
                    className={`difficulty-badge ${
                      ex.difficulty === 'Dễ'
                        ? 'diff-easy'
                        : ex.difficulty === 'Trung bình'
                        ? 'diff-medium'
                        : 'diff-hard'
                    }`}
                  >
                    {ex.difficulty}
                  </span>
                  {isDone && <CheckCircle size={16} color="var(--color-success)" />}
                </div>
                <span className="exercise-item-title">
                  Bài {ex.id}: {ex.title}
                </span>
              </div>
            );
          })}
        </div>

        {/* Right: Workspace */}
        <div className="exercise-workspace">
          {/* Problem Card */}
          <div className="card problem-card">
            <div className="problem-header">
              <div>
                <span style={{ fontSize: '0.75rem', color: 'var(--color-cyan)', fontWeight: 700 }}>
                  CHƯƠNG {selectedExercise.chapterId}
                </span>
                <h3 className="problem-title">Bài {selectedExercise.id}: {selectedExercise.title}</h3>
              </div>
              <span
                className={`difficulty-badge ${
                  selectedExercise.difficulty === 'Dễ'
                    ? 'diff-easy'
                    : selectedExercise.difficulty === 'Trung bình'
                    ? 'diff-medium'
                    : 'diff-hard'
                }`}
              >
                {selectedExercise.difficulty}
              </span>
            </div>

            <div className="problem-desc">{selectedExercise.description}</div>

            {selectedExercise.testCases.length > 0 && selectedExercise.testCases[0].input && (
              <div className="problem-testcase-preview">
                <strong>Ví dụ Input:</strong>
                <pre style={{ margin: '0.2rem 0', fontFamily: 'monospace' }}>
                  {selectedExercise.testCases[0].input}
                </pre>
                <strong>Ví dụ Output kỳ vọng:</strong>
                <pre style={{ margin: '0.2rem 0', fontFamily: 'monospace' }}>
                  {selectedExercise.testCases[0].expectedOutput}
                </pre>
              </div>
            )}

            {showHint ? (
              <div style={{ marginTop: '0.8rem', padding: '0.5rem', background: 'rgba(6,182,212,0.1)', borderRadius: 6, fontSize: '0.85rem' }}>
                💡 <strong>Gợi ý:</strong> {selectedExercise.hint}
              </div>
            ) : (
              <button
                className="btn-ghost"
                style={{ marginTop: '0.6rem', padding: '0.2rem 0' }}
                onClick={() => setShowHint(true)}
              >
                <Lightbulb size={14} /> Xem gợi ý giải bài
              </button>
            )}
          </div>

          {/* Monaco Editor */}
          <div className="exercise-editor-box">
            <Editor
              height="100%"
              defaultLanguage="python"
              theme={monacoTheme}
              value={code}
              onChange={(val) => setCode(val || '')}
              options={{
                fontSize: 14,
                lineNumbers: 'on',
                minimap: { enabled: false },
                scrollBeyondLastLine: false,
                automaticLayout: true,
              }}
            />
          </div>

          {/* Actions */}
          <div className="exercise-actions">
            <button className="btn-ghost" onClick={handleResetCode}>
              <RotateCcw size={15} /> Đặt lại code ban đầu
            </button>

            <button className="btn btn-primary" onClick={handleRunTests} disabled={running}>
              <Play size={16} /> {running ? 'Đang chấm điểm...' : 'Chạy & Chấm bài'}
            </button>
          </div>

          {/* Test Case Results */}
          {testResults && (
            <div className="test-results">
              <h4>Kết quả chấm điểm:</h4>
              {testResults.map((tr) => (
                <div key={tr.index} className={`test-result-item ${tr.passed ? 'pass' : 'fail'}`}>
                  <div className="test-result-header">
                    <span>Test case #{tr.index}: {tr.description}</span>
                    {tr.passed ? (
                      <span style={{ color: 'var(--color-success)', display: 'flex', alignItems: 'center', gap: 4 }}>
                        <CheckCircle size={16} /> Chính xác (Passed)
                      </span>
                    ) : (
                      <span style={{ color: 'var(--color-danger)', display: 'flex', alignItems: 'center', gap: 4 }}>
                        <XCircle size={16} /> Sai kết quả (Failed)
                      </span>
                    )}
                  </div>

                  {!tr.passed && (
                    <div className="result-diff">
                      <div className="result-col">
                        <strong>Kỳ vọng:</strong>
                        <div>{tr.expected}</div>
                      </div>
                      <div className="result-col">
                        <strong>Thực tế trả về:</strong>
                        <div>{tr.actual || tr.error || '(Rỗng)'}</div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Exercises;
