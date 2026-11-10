// public/pyodideWorker.js
// Pyodide Background Worker for VS Code-style Interactive Terminal

/* global importScripts, loadPyodide */
try {
  importScripts('https://cdn.jsdelivr.net/pyodide/v0.26.4/full/pyodide.js');
} catch (e) {
  console.error('Không thể tải Pyodide CDN trong Web Worker:', e);
}

let pyodide = null;
let pyodidePromise = null;
let controlArray = null;
let dataArray = null;
const textDecoder = new TextDecoder('utf-8');
const textEncoder = new TextEncoder();

async function getPyodideInstance(controlBuffer, dataBuffer) {
  if (controlBuffer && dataBuffer) {
    controlArray = new Int32Array(controlBuffer);
    dataArray = new Uint8Array(dataBuffer);
  }

  if (pyodide) return pyodide;
  if (pyodidePromise) return pyodidePromise;

  pyodidePromise = (async () => {
    self.postMessage({
      type: 'status',
      status: 'loading',
      message: 'Đang tải môi trường Python WebAssembly...',
    });

    const p = await loadPyodide({
      indexURL: 'https://cdn.jsdelivr.net/pyodide/v0.26.4/full/',
    });

    // Capture standard output in real-time
    p.setStdout({
      write: (buffer) => {
        const text = textDecoder.decode(buffer);
        self.postMessage({ type: 'stdout', text });
        return buffer.length;
      },
    });

    // Capture standard error in real-time
    p.setStderr({
      write: (buffer) => {
        const text = textDecoder.decode(buffer);
        self.postMessage({ type: 'stderr', text });
        return buffer.length;
      },
    });

    // Real-time blocking stdin using SharedArrayBuffer & Atomics
    p.setStdin({
      stdin: () => {
        if (!controlArray || !dataArray) {
          return '\n';
        }

        // Notify main thread to activate terminal interactive input mode
        self.postMessage({ type: 'stdin_prompt' });

        // Set status = 1 (waiting for input)
        Atomics.store(controlArray, 0, 1);

        // Put Web Worker thread to sleep until main thread calls Atomics.notify
        Atomics.wait(controlArray, 0, 1);

        // Check if user requested to stop execution
        const status = Atomics.load(controlArray, 0);
        if (status === 3) {
          throw new Error('KeyboardInterrupt: Chương trình bị dừng bởi người dùng');
        }

        // Read input data
        const byteLen = Atomics.load(controlArray, 1);
        const inputBytes = dataArray.slice(0, byteLen);
        const inputText = textDecoder.decode(inputBytes);

        // Reset status = 0 (idle)
        Atomics.store(controlArray, 0, 0);

        return inputText;
      },
      isatty: true,
    });

    pyodide = p;

    // Kích hoạt line buffering để flush ngay lập tức khi in \n
    try {
      await p.runPythonAsync(`
import sys
try:
    sys.stdout.reconfigure(line_buffering=True)
    sys.stderr.reconfigure(line_buffering=True)
except Exception:
    pass
`);
    } catch (e) {
      // ignore
    }

    self.postMessage({
      type: 'status',
      status: 'ready',
      message: 'Môi trường Python 3.12 WebAssembly đã sẵn sàng',
    });
    return pyodide;
  })();

  return pyodidePromise;
}

self.onmessage = async (e) => {
  const data = e.data;
  if (!data) return;

  if (data.type === 'init') {
    try {
      await getPyodideInstance(data.controlBuffer, data.dataBuffer);
      self.postMessage({ type: 'initialized' });
    } catch (err) {
      self.postMessage({ type: 'error', error: err.message || String(err) });
    }
  } else if (data.type === 'run') {
    try {
      const p = await getPyodideInstance(data.controlBuffer, data.dataBuffer);
      const startTime = performance.now();

      await p.runPythonAsync(data.code);

      const executionTime = Math.round(performance.now() - startTime);
      self.postMessage({ type: 'done', success: true, executionTime });
    } catch (err) {
      let errorMsg = err.message || String(err);
      // Clean up internal python traceback lines if present
      const pyErrorIndex = errorMsg.indexOf('File "<exec>"');
      if (pyErrorIndex !== -1) {
        errorMsg = errorMsg.substring(pyErrorIndex);
      }
      self.postMessage({ type: 'done', success: false, error: errorMsg });
    }
  }
};
