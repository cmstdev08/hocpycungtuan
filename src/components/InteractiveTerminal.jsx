import React, { useEffect, useRef, useState, useImperativeHandle, forwardRef } from 'react';
import { Terminal } from '@xterm/xterm';
import { FitAddon } from '@xterm/addon-fit';
import { Terminal as TerminalIcon, Trash2, Square, Play, Loader2, Sparkles, CheckCircle2, AlertCircle } from 'lucide-react';
import '@xterm/xterm/css/xterm.css';

const VS_CODE_THEME = {
  background: '#181e29',
  foreground: '#d4d4d4',
  cursor: '#38bdf8',
  cursorAccent: '#181e29',
  selectionBackground: '#264f78',
  selectionForeground: '#ffffff',
  black: '#000000',
  red: '#f87171',
  green: '#4ade80',
  yellow: '#facc15',
  blue: '#60a5fa',
  magenta: '#c084fc',
  cyan: '#22d3ee',
  white: '#e2e8f0',
  brightBlack: '#64748b',
  brightRed: '#ef4444',
  brightGreen: '#22c55e',
  brightYellow: '#eab308',
  brightBlue: '#3b8eea',
  brightMagenta: '#a855f7',
  brightCyan: '#06b6d4',
  brightWhite: '#ffffff',
};

const InteractiveTerminal = forwardRef(({ onStatusChange, onExecutionDone }, ref) => {
  const containerRef = useRef(null);
  const termRef = useRef(null);
  const fitAddonRef = useRef(null);

  const workerRef = useRef(null);
  const controlBufferRef = useRef(null);
  const dataBufferRef = useRef(null);
  const controlArrayRef = useRef(null);
  const dataArrayRef = useRef(null);

  const isInputActiveRef = useRef(false);
  const inputBufferRef = useRef('');
  const textEncoderRef = useRef(new TextEncoder());

  const [status, setStatus] = useState('ready'); // 'ready' | 'loading' | 'running' | 'waiting_input' | 'success' | 'error'
  const [lastError, setLastError] = useState(null);

  // Helper cập nhật status
  const updateStatus = (newStatus) => {
    setStatus(newStatus);
    if (onStatusChange) onStatusChange(newStatus);
  };

  // Khởi tạo Worker
  const createWorker = () => {
    if (workerRef.current) {
      try {
        workerRef.current.terminate();
      } catch (e) {
        console.warn('Lỗi terminate worker cũ:', e);
      }
      workerRef.current = null;
    }

    // Kiểm tra SharedArrayBuffer
    if (typeof SharedArrayBuffer === 'undefined') {
      console.warn('SharedArrayBuffer chưa khả dụng.');
      return null;
    }

    if (!controlBufferRef.current) {
      controlBufferRef.current = new SharedArrayBuffer(16);
      dataBufferRef.current = new SharedArrayBuffer(65536);
      controlArrayRef.current = new Int32Array(controlBufferRef.current);
      dataArrayRef.current = new Uint8Array(dataBufferRef.current);
    }

    // Reset control array
    Atomics.store(controlArrayRef.current, 0, 0);
    Atomics.store(controlArrayRef.current, 1, 0);

    const worker = new Worker('/pyodideWorker.js');

    worker.onmessage = (e) => {
      const data = e.data;
      if (!data) return;

      const term = termRef.current;

      if (data.type === 'status') {
        if (data.status === 'loading') {
          updateStatus('loading');
        } else if (data.status === 'ready') {
          updateStatus('ready');
        }
      } else if (data.type === 'stdout') {
        if (term) {
          // Chuẩn hóa \n thành \r\n theo chuẩn Terminal VT100 để xuống dòng và về đầu dòng
          const formatted = data.text ? data.text.replace(/\r?\n/g, '\r\n') : '';
          term.write(formatted);
        }
      } else if (data.type === 'stderr') {
        if (term) {
          const formatted = data.text ? data.text.replace(/\r?\n/g, '\r\n') : '';
          term.write(`\x1b[91m${formatted}\x1b[0m`);
        }
        setLastError((prev) => (prev ? prev + '\n' + data.text : data.text));
      } else if (data.type === 'stdin_prompt') {
        // Kích hoạt chế độ nhận phím từ người dùng
        isInputActiveRef.current = true;
        inputBufferRef.current = '';
        updateStatus('waiting_input');
      } else if (data.type === 'done') {
        isInputActiveRef.current = false;
        inputBufferRef.current = '';

        if (data.success) {
          if (term) {
            term.write(`\r\n\x1b[90m----------------------------------------\x1b[0m\r\n\x1b[32m✔ Chương trình thực thi hoàn tất (${data.executionTime || 0} ms)\x1b[0m\r\n`);
          }
          updateStatus('success');
          if (onExecutionDone) onExecutionDone({ success: true, executionTime: data.executionTime });
        } else {
          if (term) {
            if (data.error && !lastError) {
              const formattedErr = data.error.replace(/\r?\n/g, '\r\n');
              term.write(`\r\n\x1b[91m${formattedErr}\x1b[0m\r\n`);
            }
            term.write(`\r\n\x1b[90m----------------------------------------\x1b[0m\r\n\x1b[91m✖ Chương trình dừng lại do có lỗi\x1b[0m\r\n`);
          }
          setLastError(data.error);
          updateStatus('error');
          if (onExecutionDone) onExecutionDone({ success: false, error: data.error });
        }
      }
    };

    worker.onerror = (err) => {
      console.error('Worker runtime error:', err);
      if (termRef.current) {
        termRef.current.write(`\r\n\x1b[91m[Lỗi Worker]: ${err.message || 'Không thể thực thi Worker'}\x1b[0m\r\n`);
      }
      updateStatus('error');
    };

    // Gửi buffer để khởi tạo
    worker.postMessage({
      type: 'init',
      controlBuffer: controlBufferRef.current,
      dataBuffer: dataBufferRef.current,
    });

    workerRef.current = worker;
    return worker;
  };

  // Khởi tạo xterm.js
  useEffect(() => {
    if (!containerRef.current) return;

    const term = new Terminal({
      theme: VS_CODE_THEME,
      fontFamily: 'Consolas, "Fira Code", Monaco, "Courier New", monospace',
      fontSize: 14,
      lineHeight: 1.45,
      cursorBlink: true,
      cursorStyle: 'block',
      convertEol: true,
      scrollback: 2000,
      disableStdin: false,
    });

    const fitAddon = new FitAddon();
    term.loadAddon(fitAddon);
    term.open(containerRef.current);
    fitAddon.fit();

    termRef.current = term;
    fitAddonRef.current = fitAddon;

    // In thông điệp chào mừng
    term.write('\x1b[1;36mPython 3.12 Interactive Terminal\x1b[0m\r\n');
    term.write('\x1b[90mNhấn "Chạy Code" (hoặc phím tắt Ctrl + Enter) để chạy chương trình.\x1b[0m\r\n');
    term.write('\x1b[90mKhi gặp lệnh input(), bạn có thể gõ trực tiếp vào Terminal này.\x1b[0m\r\n\r\n');

    // Lắng nghe gõ phím từ Terminal xterm
    term.onData((data) => {
      if (!isInputActiveRef.current) {
        // Chưa tới lượt input() hoặc chương trình chưa chạy
        return;
      }

      for (let i = 0; i < data.length; i++) {
        const char = data[i];
        const code = char.charCodeAt(0);

        if (char === '\r' || char === '\n') {
          // Người dùng bấm Enter -> Gửi dữ liệu vào stdin
          term.write('\r\n');
          const line = inputBufferRef.current + '\n';
          inputBufferRef.current = '';
          isInputActiveRef.current = false;
          updateStatus('running');

          if (controlArrayRef.current && dataArrayRef.current) {
            const encoded = textEncoderRef.current.encode(line);
            dataArrayRef.current.set(encoded, 0);
            Atomics.store(controlArrayRef.current, 1, encoded.byteLength); // Độ dài chuỗi
            Atomics.store(controlArrayRef.current, 0, 2); // input_ready
            Atomics.notify(controlArrayRef.current, 0, 1); // Đánh thức Worker tiếp tục chạy
          }
          break;
        } else if (char === '\x7f' || char === '\b') {
          // Phím Backspace xoá ký tự
          if (inputBufferRef.current.length > 0) {
            inputBufferRef.current = inputBufferRef.current.slice(0, -1);
            term.write('\b \b');
          }
        } else if (char === '\x03') {
          // Ctrl + C: Dừng chương trình
          handleStop();
          break;
        } else if (code >= 32) {
          // Ký tự thông thường: hiển thị màu xanh lá trực tiếp tại con trỏ
          inputBufferRef.current += char;
          term.write(`\x1b[92m${char}\x1b[0m`);
        }
      }
    });

    // Resize observer để Terminal luôn co giãn vừa vặn
    const handleResize = () => {
      try {
        fitAddon.fit();
      } catch (err) {
        // container unmounted
      }
    };
    window.addEventListener('resize', handleResize);

    // Khởi tạo worker ngầm
    createWorker();

    return () => {
      window.removeEventListener('resize', handleResize);
      if (workerRef.current) {
        workerRef.current.terminate();
      }
      term.dispose();
    };
  }, []);

  // Chức năng Dừng chương trình (Stop)
  const handleStop = () => {
    if (workerRef.current) {
      workerRef.current.terminate();
      workerRef.current = null;
    }

    if (termRef.current) {
      termRef.current.write('\r\n\x1b[93m⏹ [Chương trình đã dừng theo yêu cầu của bạn]\x1b[0m\r\n');
    }

    isInputActiveRef.current = false;
    inputBufferRef.current = '';
    updateStatus('ready');

    // Khởi tạo lại worker mới ngay lập tức
    createWorker();
  };

  // Chức năng Xóa màn hình Terminal
  const handleClear = () => {
    if (termRef.current) {
      termRef.current.clear();
      termRef.current.write('\x1b[2J\x1b[3J\x1b[H');
      termRef.current.write('\x1b[1;36mPython 3.12 Interactive Terminal\x1b[0m\r\n');
      termRef.current.write('\x1b[90mTerminal đã được làm sạch. Nhấn "Chạy Code" để bắt đầu.\x1b[0m\r\n\r\n');
    }
    setLastError(null);
    if (status !== 'running' && status !== 'waiting_input') {
      updateStatus('ready');
    }
  };

  // Chức năng Thực thi Code (Run)
  const handleRun = (code) => {
    if (status === 'running' || status === 'waiting_input') {
      return;
    }

    setLastError(null);
    updateStatus('running');

    const term = termRef.current;
    if (term) {
      term.write(`\r\n\x1b[94m▶ Đang thực thi main.py...\x1b[0m\r\n`);
    }

    let worker = workerRef.current;
    if (!worker) {
      worker = createWorker();
    }

    if (!worker) {
      if (term) {
        term.write(`\x1b[91m[Lỗi]: Không thể khởi tạo Web Worker. Hãy kiểm tra trình duyệt của bạn.\x1b[0m\r\n`);
      }
      updateStatus('error');
      return;
    }

    worker.postMessage({
      type: 'run',
      code: code || '',
      controlBuffer: controlBufferRef.current,
      dataBuffer: dataBufferRef.current,
    });
  };

  // Expose các phương thức ra ngoài thông qua Ref
  useImperativeHandle(ref, () => ({
    run: (code) => handleRun(code),
    stop: () => handleStop(),
    clear: () => handleClear(),
    focus: () => {
      if (termRef.current) termRef.current.focus();
    },
    getLastError: () => lastError,
    getStatus: () => status,
  }));

  const isRunning = status === 'running' || status === 'waiting_input';

  return (
    <div className="panel-terminal" style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      {/* Terminal Title Bar */}
      <div className="panel-bar" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div className="panel-title" style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <TerminalIcon size={16} color="var(--color-primary)" />
          <span>Terminal</span>

          {/* Badges */}
          {status === 'loading' && (
            <span className="terminal-status-badge badge-running" style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
              <Loader2 size={12} className="spin-animate" /> Đang nạp Pyodide...
            </span>
          )}
          {status === 'running' && (
            <span className="terminal-status-badge badge-running" style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
              <Loader2 size={12} className="spin-animate" /> Đang chạy...
            </span>
          )}
          {status === 'waiting_input' && (
            <span className="terminal-status-badge" style={{
              background: 'rgba(234, 179, 8, 0.2)',
              color: '#facc15',
              display: 'flex',
              alignItems: 'center',
              gap: 4,
              animation: 'pulse 1.5s infinite'
            }}>
              ⌨️ Đang chờ nhập dữ liệu...
            </span>
          )}
          {status === 'success' && (
            <span className="terminal-status-badge badge-success" style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
              <CheckCircle2 size={12} /> Thành công
            </span>
          )}
          {status === 'error' && (
            <span className="terminal-status-badge badge-error" style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
              <AlertCircle size={12} /> Có lỗi
            </span>
          )}
        </div>

        {/* Action Controls */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
          {isRunning && (
            <button
              className="btn btn-ghost"
              onClick={handleStop}
              style={{
                color: 'var(--color-danger, #ef4444)',
                display: 'flex',
                alignItems: 'center',
                gap: 4,
                fontSize: '0.8rem',
                padding: '0.25rem 0.6rem',
                border: '1px solid rgba(239, 68, 68, 0.3)',
                borderRadius: 4
              }}
              title="Dừng chương trình (Stop)"
            >
              <Square size={13} fill="currentColor" /> Dừng (Stop)
            </button>
          )}

          <button
            className="btn btn-ghost"
            onClick={handleClear}
            style={{ fontSize: '0.8rem', padding: '0.25rem 0.6rem' }}
            title="Xóa màn hình Terminal"
          >
            <Trash2 size={14} /> Clear
          </button>
        </div>
      </div>

      {/* xterm Container */}
      <div
        ref={containerRef}
        style={{
          flex: 1,
          minHeight: 0,
          background: '#181e29',
          padding: '0.4rem 0.6rem',
          overflow: 'hidden',
        }}
      />
    </div>
  );
});

export default InteractiveTerminal;
