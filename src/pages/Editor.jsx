import React, { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import Editor from '@monaco-editor/react';
import {
  Play, RotateCcw, Copy, Trash2, Download,
  Code2, Terminal as TerminalIcon, Check, Loader2, Sparkles
} from 'lucide-react';
import { runPythonCode } from '../utils/pyodideRunner.js';
import { codeSamples } from '../data/samples.js';
import './Editor.css';

const DEFAULT_CODE = `# Viết code Python của bạn ở đây
print("Xin chào các bạn sinh viên!")
ten = input("Bạn tên là gì? ")
print(f"Rất vui được gặp bạn, {ten}!")
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

  const [output, setOutput] = useState('');
  const [error, setError] = useState(null);
  const [status, setStatus] = useState('ready'); // 'ready' | 'running' | 'success' | 'error'
  const [execTime, setExecTime] = useState(null);
  const [copied, setCopied] = useState(false);
  const editorRef = useRef(null);

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

  const handleEditorDidMount = (editor) => {
    editorRef.current = editor;
  };

  // Run code with Pyodide
  const handleRun = async () => {
    if (status === 'running') return;
    setStatus('running');
    setOutput('Đang khởi tạo môi trường Python và thực thi...\n');
    setError(null);

    const result = await runPythonCode(code);

    setOutput(result.output);
    setError(result.error);
    setExecTime(result.executionTime);
    setStatus(result.success ? 'success' : 'error');
  };

  const handleReset = () => {
    if (window.confirm('Bạn có chắc muốn đặt lại code về mặc định không?')) {
      setCode(DEFAULT_CODE);
      localStorage.setItem('python_recent_code', DEFAULT_CODE);
      setOutput('');
      setError(null);
      setStatus('ready');
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

  const handleClearOutput = () => {
    setOutput('');
    setError(null);
    setStatus('ready');
    setExecTime(null);
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
      setOutput('');
      setError(null);
      setStatus('ready');
    }
  };

  // Check current dark/light mode
  const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
  const monacoTheme = currentTheme === 'dark' ? 'vs-dark' : 'light';

  return (
    <div className="compiler-container">
      {/* Top Header & Toolbar */}
      <div className="compiler-header">
        <div className="compiler-title-group">
          <h2><Code2 size={24} color="var(--color-primary)" /> Python Online Compiler</h2>
          <p>Trình biên dịch Python chạy trực tiếp trên trình duyệt bằng WebAssembly (Pyodide)</p>
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

          <button
            className="btn btn-primary"
            onClick={handleRun}
            disabled={status === 'running'}
            title="Chạy code (Pyodide WebAssembly)"
          >
            {status === 'running' ? (
              <>
                <Loader2 size={16} className="spin-animate" /> Đang chạy...
              </>
            ) : (
              <>
                <Play size={16} /> Chạy Code
              </>
            )}
          </button>
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

        {/* Terminal Panel */}
        <div className="panel-terminal">
          <div className="panel-bar">
            <div className="panel-title">
              <TerminalIcon size={16} color="var(--color-primary)" />
              <span>Terminal Output</span>
              {status === 'running' && (
                <span className="terminal-status-badge badge-running">Đang thực thi...</span>
              )}
              {status === 'success' && (
                <span className="terminal-status-badge badge-success">Thành công</span>
              )}
              {status === 'error' && (
                <span className="terminal-status-badge badge-error">Có lỗi</span>
              )}
            </div>

            <button className="btn-ghost" onClick={handleClearOutput} title="Xóa màn hình console">
              <Trash2 size={16} />
            </button>
          </div>

          <div className="terminal-surface">
            {!output && !error && status === 'ready' && (
              <span className="terminal-empty">
                Nhấn nút "Chạy Code" để thực thi chương trình Python của bạn...
              </span>
            )}

            {output && <div className="terminal-stdout">{output}</div>}
            {error && <div className="terminal-stderr">{error}</div>}

            {execTime !== null && (
              <div className="terminal-footer-meta">
                <span>⏱ Thời gian thực thi: {execTime} ms</span>
                <span>•</span>
                <span>Pyodide WebAssembly Python 3.12</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditorPage;
