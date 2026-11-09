import React, { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import Editor from '@monaco-editor/react';
import {
  Play, RotateCcw, Copy, Download, Square,
  Code2, Check, Loader2, Sparkles, Terminal as TerminalIcon
} from 'lucide-react';
import InteractiveTerminal from '../components/InteractiveTerminal.jsx';
import { codeSamples } from '../data/samples.js';
import { analyzePythonError } from '../utils/aiDebugger.js';
import { addXP } from '../utils/gamification.js';
import './Editor.css';

const DEFAULT_CODE = `# Viết code Python của bạn ở đây
name = input("Nhập tên: ")
age = int(input("Nhập tuổi: "))

print("Xin chào", name)
print("Bạn", age, "tuổi")
`;

const EditorPage = () => {
  const location = useLocation();
  const [code, setCode] = useState(() => {
    // 1. Check if passed from lesson
    if (location.state?.presetCode) {
      return location.state.presetCode;
    }
    // 2. Check localStorage
    const saved = localStorage.getItem('python_recent_code');
    return saved !== null ? saved : DEFAULT_CODE;
  });

  const [status, setStatus] = useState('ready'); // 'ready' | 'loading' | 'running' | 'waiting_input' | 'success' | 'error'
  const [aiDiagnosis, setAiDiagnosis] = useState(null);
  const [copied, setCopied] = useState(false);
  const editorRef = useRef(null);
  const terminalRef = useRef(null);

  // Sync preset if navigate with new state
  useEffect(() => {
    if (location.state?.presetCode) {
      setCode(location.state.presetCode);
      localStorage.setItem('python_recent_code', location.state.presetCode);
    }
  }, [location.state]);

  // Save to localStorage when code changes
  const handleCodeChange = (newCode) => {
    setCode(newCode || '');
    localStorage.setItem('python_recent_code', newCode || '');
  };

  const handleEditorDidMount = (editor, monaco) => {
    editorRef.current = editor;

    // Phím tắt Ctrl + Enter (hoặc Cmd + Enter trên Mac) để chạy code
    editor.addCommand(monaco.KeyMod.CtrlCmd | monaco.KeyCode.Enter, () => {
      handleRun();
    });
  };

  // Run code using the Interactive Terminal
  const handleRun = () => {
    if (status === 'running' || status === 'waiting_input') return;
    setAiDiagnosis(null);
    if (terminalRef.current) {
      terminalRef.current.run(code);
    }
  };

  // Stop running execution
  const handleStop = () => {
    if (terminalRef.current) {
      terminalRef.current.stop();
    }
  };

  // Callback when execution completes
  const handleExecutionDone = ({ success, error }) => {
    if (success) {
      addXP(15, 'first_run');
      setAiDiagnosis(null);
    } else if (error) {
      const diag = analyzePythonError(error, code);
      if (diag) {
        setAiDiagnosis(diag);
      }
    }
  };

  const handleReset = () => {
    if (window.confirm('Bạn có chắc muốn đặt lại code về mặc định không?')) {
      setCode(DEFAULT_CODE);
      localStorage.setItem('python_recent_code', DEFAULT_CODE);
      setAiDiagnosis(null);
      if (terminalRef.current) {
        terminalRef.current.clear();
      }
    }
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      alert('Không thể sao chép code.');
    }
  };

  const handleDownload = () => {
    const blob = new Blob([code], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'main.py';
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleSelectSample = (e) => {
    const sampleId = e.target.value;
    if (!sampleId) return;
    const sample = codeSamples.find((s) => s.id === sampleId);
    if (sample) {
      setCode(sample.code);
      localStorage.setItem('python_recent_code', sample.code);
      setAiDiagnosis(null);
      if (terminalRef.current) {
        terminalRef.current.clear();
      }
    }
  };

  // Check current dark/light mode
  const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
  const monacoTheme = currentTheme === 'dark' ? 'vs-dark' : 'light';
  const isRunning = status === 'running' || status === 'waiting_input';

  return (
    <div className="compiler-container">
      {/* Top Header & Toolbar */}
      <div className="compiler-header">
        <div className="compiler-title-group">
          <h2><Code2 size={24} color="var(--color-primary)" /> Python Online Compiler & Terminal</h2>
          <p>Terminal tương tác trực tiếp với input() giống VS Code / PyCharm (WebAssembly Pyodide)</p>
        </div>

        <div className="compiler-toolbar">
          <select className="sample-select" onChange={handleSelectSample} defaultValue="">
            <option value="" disabled>-- Chọn code mẫu thử nghiệm --</option>
            {codeSamples.map((s) => (
              <option key={s.id} value={s.id}>
                {s.title}
              </option>
            ))}
          </select>

          {isRunning ? (
            <button
              className="btn"
              onClick={handleStop}
              style={{
                background: 'var(--color-danger, #ef4444)',
                color: '#ffffff',
                display: 'flex',
                alignItems: 'center',
                gap: 6
              }}
              title="Dừng chương trình ngay lập tức"
            >
              <Square size={16} fill="currentColor" /> Dừng (Stop)
            </button>
          ) : (
            <button
              className="btn btn-primary"
              onClick={handleRun}
              title="Chạy code (Phím tắt: Ctrl + Enter)"
            >
              <Play size={16} /> Chạy Code
            </button>
          )}
        </div>
      </div>

      {/* Main Split Panels */}
      <div className="compiler-main">
        {/* Editor Panel */}
        <div className="panel-editor">
          <div className="panel-bar">
            <div className="panel-title">
              <Code2 size={16} color="var(--color-cyan)" />
              <span>main.py</span>
            </div>

            <div className="editor-actions">
              <button className="btn-ghost" onClick={handleCopy} title="Sao chép code">
                {copied ? <Check size={16} color="var(--color-success)" /> : <Copy size={16} />}
              </button>
              <button className="btn-ghost" onClick={handleDownload} title="Tải file .py">
                <Download size={16} />
              </button>
              <button className="btn-ghost" onClick={handleReset} title="Đặt lại code ban đầu">
                <RotateCcw size={16} />
              </button>
            </div>
          </div>

          <div className="editor-surface">
            <Editor
              height="100%"
              defaultLanguage="python"
              theme={monacoTheme}
              value={code}
              onChange={handleCodeChange}
              onMount={handleEditorDidMount}
              options={{
                fontSize: 14,
                lineNumbers: 'on',
                minimap: { enabled: false },
                scrollBeyondLastLine: false,
                wordWrap: 'on',
                automaticLayout: true,
                tabSize: 4,
                insertSpaces: true,
              }}
            />
          </div>
        </div>

        {/* Interactive Terminal Panel */}
        <div style={{ display: 'flex', flexDirection: 'column', height: '100%', minHeight: 0 }}>
          <div style={{ flex: 1, minHeight: 0 }}>
            <InteractiveTerminal
              ref={terminalRef}
              onStatusChange={setStatus}
              onExecutionDone={handleExecutionDone}
            />
          </div>

          {/* AI Debugger Diagnosis Card (if error occurs) */}
          {aiDiagnosis && (
            <div style={{
              marginTop: '0.8rem',
              padding: '0.8rem 1rem',
              background: 'rgba(6, 182, 212, 0.1)',
              border: '1.5px solid var(--color-cyan)',
              borderRadius: 8,
              fontSize: '0.85rem',
              lineHeight: 1.6,
              color: 'var(--color-text)',
              animation: 'fadeIn 0.25s ease'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 6, color: 'var(--color-cyan)', fontWeight: 700, marginBottom: 4 }}>
                <Sparkles size={16} /> Bác sĩ AI Python chẩn đoán: {aiDiagnosis.title}
              </div>
              <p style={{ margin: '0 0 0.4rem 0' }}>{aiDiagnosis.explanation}</p>
              <div style={{ background: 'rgba(0,0,0,0.2)', padding: '0.4rem 0.6rem', borderRadius: 4, color: '#38bdf8' }}>
                💡 <strong>Lời khuyên khắc phục:</strong> {aiDiagnosis.suggestion}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default EditorPage;
