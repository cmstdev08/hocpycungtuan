import React, { useState, useEffect } from 'react';
import Editor from '@monaco-editor/react';
import {
  PenTool, CheckCircle, XCircle, Play, RotateCcw,
  Lightbulb, Eye, EyeOff, BookOpen, Search
} from 'lucide-react';
import { exercises } from '../data/exercises.js';
import { runPythonCode } from '../utils/pyodideRunner.js';
import './Exercises.css';

const Exercises = () => {
  const [selectedExercise, setSelectedExercise] = useState(exercises[0]);
  const [chapterFilter, setChapterFilter] = useState('all'); // all | 1..13
  const [diffFilter, setDiffFilter] = useState('all'); // all | Dễ | Trung bình | Khó
  const [search, setSearch] = useState('');
  const [code, setCode] = useState(exercises[0].initialCode);
  const [testResults, setTestResults] = useState(null);
  const [running, setRunning] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const [showSolution, setShowSolution] = useState(false);

  const [completedIds, setCompletedIds] = useState(() => {
    const saved = localStorage.getItem('completed_exercises');
    return saved ? JSON.parse(saved) : [];
  });

  // When selected exercise changes
  useEffect(() => {
    setCode(selectedExercise.initialCode || '# Viết code tại đây\n');
    setTestResults(null);
    setShowHint(false);
    setShowSolution(false);
  }, [selectedExercise]);

  const filteredExercises = exercises.filter((ex) => {
    const matchChap = chapterFilter === 'all' || ex.chapterId === Number(chapterFilter);
    const matchDiff = diffFilter === 'all' || ex.difficulty === diffFilter;
    const matchSearch =
      !search ||
      ex.title.toLowerCase().includes(search.toLowerCase()) ||
      ex.code.toLowerCase().includes(search.toLowerCase()) ||
      ex.description.toLowerCase().includes(search.toLowerCase());
    return matchChap && matchDiff && matchSearch;
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
    setCode(selectedExercise.initialCode || '');
    setTestResults(null);
  };

  const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
  const monacoTheme = currentTheme === 'dark' ? 'vs-dark' : 'light';

  return (
    <div className="exercises-container">
      <div className="exercises-header">
        <h2>
          <PenTool size={22} color="var(--color-primary)" /> Ngân hàng 250 Bài tập thực hành có Test case tự động
        </h2>
        <p>Hệ thống bài tập phân loại Dễ, Trung bình, Khó cho 13 chương học môn Cơ sở lập trình Python.</p>
      </div>

      {/* Filter and Search Bar */}
      <div style={{ display: 'flex', gap: '0.8rem', flexWrap: 'wrap', marginBottom: '1rem', alignItems: 'center' }}>
        {/* Chapter select */}
        <select
          value={chapterFilter}
          onChange={(e) => setChapterFilter(e.target.value)}
          className="sample-select"
          style={{ maxWidth: 220 }}
        >
          <option value="all">Tất cả các chương (1-13)</option>
          {Array.from({ length: 13 }, (_, i) => i + 1).map((ch) => (
            <option key={ch} value={ch}>
              Chương {ch}
            </option>
          ))}
        </select>

        {/* Difficulty select */}
        <div className="difficulty-filters" style={{ margin: 0 }}>
          <button
            className={`filter-btn ${diffFilter === 'all' ? 'active' : ''}`}
            onClick={() => setDiffFilter('all')}
          >
            Tất cả mức độ
          </button>
          <button
            className={`filter-btn ${diffFilter === 'Dễ' ? 'active' : ''}`}
            onClick={() => setDiffFilter('Dễ')}
          >
            Dễ (40%)
          </button>
          <button
            className={`filter-btn ${diffFilter === 'Trung bình' ? 'active' : ''}`}
            onClick={() => setDiffFilter('Trung bình')}
          >
            Trung bình (40%)
          </button>
          <button
            className={`filter-btn ${diffFilter === 'Khó' ? 'active' : ''}`}
            onClick={() => setDiffFilter('Khó')}
          >
            Khó (20%)
          </button>
        </div>

        {/* Search Input */}
        <div style={{ marginLeft: 'auto', minWidth: 200 }}>
          <input
            type="text"
            className="search-input"
            placeholder="Tìm mã hoặc tên bài..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>

      {/* Counter summary */}
      <div style={{ fontSize: '0.82rem', color: 'var(--color-text-secondary)', marginBottom: '1rem' }}>
        Hiển thị <strong>{filteredExercises.length}</strong> bài tập • Đã giải thành công:{' '}
        <strong style={{ color: 'var(--color-success)' }}>{completedIds.length}</strong> / 250 bài
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
                  <span style={{ fontSize: '0.7rem', fontWeight: 700, color: 'var(--color-cyan)' }}>
                    [{ex.code}]
                  </span>
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
                  {isDone && <CheckCircle size={15} color="var(--color-success)" style={{ marginLeft: 4 }} />}
                </div>
                <span className="exercise-item-title">{ex.title}</span>
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
                  MÃ BÀI: {selectedExercise.code} • CHƯƠNG {selectedExercise.chapterId}: {selectedExercise.chapterName}
                </span>
                <h3 className="problem-title">{selectedExercise.title}</h3>
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

            {/* Kiến thức áp dụng */}
            {selectedExercise.appliedKnowledge && (
              <div style={{ fontSize: '0.82rem', color: 'var(--color-text-secondary)', marginBottom: '0.6rem' }}>
                🎯 <strong>Kiến thức áp dụng:</strong> {selectedExercise.appliedKnowledge}
              </div>
            )}

            <div className="problem-desc">{selectedExercise.description}</div>

            {/* Input & Output Description */}
            <div style={{ marginTop: '0.8rem', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.8rem', fontSize: '0.85rem' }}>
              <div style={{ background: 'var(--color-input-bg)', padding: '0.6rem', borderRadius: 6 }}>
                <strong>📥 Dữ liệu vào (Input):</strong>
                <p style={{ margin: '0.2rem 0 0 0' }}>{selectedExercise.inputDesc || 'Dữ liệu chuẩn console'}</p>
              </div>
              <div style={{ background: 'var(--color-input-bg)', padding: '0.6rem', borderRadius: 6 }}>
                <strong>📤 Kết quả ra (Output):</strong>
                <p style={{ margin: '0.2rem 0 0 0' }}>{selectedExercise.outputDesc || 'In ra màn hình'}</p>
              </div>
            </div>

            {/* Example preview */}
            {selectedExercise.testCases && selectedExercise.testCases.length > 0 && (
              <div className="problem-testcase-preview">
                <strong>Ví dụ minh họa:</strong>
                <pre style={{ margin: '0.2rem 0', fontFamily: 'monospace', whiteSpace: 'pre-wrap' }}>
                  {selectedExercise.testCases[0].input ? `Input:\n${selectedExercise.testCases[0].input}\n\n` : ''}
                  {`Output kỳ vọng:\n${selectedExercise.testCases[0].expectedOutput}`}
                </pre>
              </div>
            )}

            {/* Hint & Solution Toggles */}
            <div style={{ display: 'flex', gap: '1rem', marginTop: '0.8rem', flexWrap: 'wrap' }}>
              <button
                className="btn-ghost"
                style={{ padding: '0.2rem 0' }}
                onClick={() => setShowHint(!showHint)}
              >
                <Lightbulb size={14} /> {showHint ? 'Ẩn gợi ý' : 'Xem gợi ý'}
              </button>

              <button
                className="btn-ghost"
                style={{ padding: '0.2rem 0', color: 'var(--color-cyan)' }}
                onClick={() => setShowSolution(!showSolution)}
              >
                {showSolution ? <EyeOff size={14} /> : <Eye size={14} />} {showSolution ? 'Ẩn đáp án tham khảo' : 'Mở đáp án tham khảo'}
              </button>
            </div>

            {showHint && (
              <div style={{ marginTop: '0.5rem', padding: '0.6rem', background: 'rgba(6,182,212,0.1)', borderRadius: 6, fontSize: '0.85rem' }}>
                💡 <strong>Gợi ý:</strong> {selectedExercise.hint}
              </div>
            )}

            {showSolution && (
              <div style={{ marginTop: '0.5rem', padding: '0.6rem', background: 'var(--color-code-bg)', border: '1px solid var(--color-border)', borderRadius: 6 }}>
                <span style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--color-success)' }}>
                  ✅ Đáp án tham khảo:
                </span>
                <pre style={{ margin: '0.3rem 0 0 0', fontFamily: 'monospace', fontSize: '0.85rem' }}>
                  {selectedExercise.sampleSolution}
                </pre>
              </div>
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
              <h4>Kết quả chấm điểm ({testResults.filter((r) => r.passed).length}/{testResults.length} test cases đạt):</h4>
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
