import React, { useState } from 'react';
import { Bug, CheckCircle, RotateCcw, Award, Lightbulb, Play, ChevronLeft, ChevronRight, Sparkles, Heart } from 'lucide-react';
import Editor from '@monaco-editor/react';
import { runPythonCode } from '../utils/pyodideRunner.js';
import { addXP } from '../utils/gamification.js';

const BUG_STAGES = [
  {
    stage: 1,
    title: 'Quên dấu hai chấm ở lệnh If',
    category: 'Cú pháp',
    description: 'Chương trình kiểm tra số dương nhưng bị lỗi cú pháp SyntaxError. Hãy tìm và sửa dòng bị lỗi.',
    buggyCode: `x = 10
if x > 0
    print("x là số dương")`,
    expectedOutput: 'x là số dương',
    hint: 'Trong Python, sau điều kiện của câu lệnh if luôn luôn phải có dấu hai chấm (:).',
  },
  {
    stage: 2,
    title: 'Lỗi nối chuỗi với số (TypeError)',
    category: 'Kiểu dữ liệu',
    description: 'Chương trình muốn in thông báo tuổi nhưng bị lỗi xung đột kiểu dữ liệu. Hãy ép kiểu cho phù hợp.',
    buggyCode: `tuoi = 20
print("Tuổi của bạn là: " + tuoi)`,
    expectedOutput: 'Tuổi của bạn là: 20',
    hint: 'Bạn không thể cộng chuỗi với số nguyên. Hãy đổi thành str(tuoi) hoặc dùng f-string f"Tuổi của bạn là: {tuoi}".',
  },
  {
    stage: 3,
    title: 'Lỗi chia cho số 0 (ZeroDivisionError)',
    category: 'Toán học',
    description: 'Phép toán bị lỗi chia cho 0. Hãy sửa mẫu số b để in ra kết quả 5.',
    buggyCode: `a = 10
b = 0
print(a // b)`,
    expectedOutput: '5',
    hint: 'Hãy đổi giá trị b = 2 để phép chia 10 // 2 ra kết quả 5.',
  },
  {
    stage: 4,
    title: 'Lỗi sai chính tả từ khóa Boolean',
    category: 'Cú pháp',
    description: 'Trong Python, giá trị logic viết hoa chữ cái đầu. Hãy sửa lỗi gán biến.',
    buggyCode: `da_qua_mon = true
if da_qua_mon:
    print("Chúc mừng bạn!")`,
    expectedOutput: 'Chúc mừng bạn!',
    hint: 'Đổi "true" thành "True" (viết hoa chữ T).',
  },
  {
    stage: 5,
    title: 'Lỗi thụt lề câu lệnh (IndentationError)',
    category: 'Thụt lề',
    description: 'Khối lệnh bên trong vòng lặp for chưa được thụt lề hợp lệ.',
    buggyCode: `for i in range(1, 4):
print("Lần lặp:", i)`,
    expectedOutput: 'Lần lặp: 1\nLần lặp: 2\nLần lặp: 3',
    hint: 'Thụt lề 4 dấu cách cho dòng lệnh print(...) bên trong for.',
  },
  {
    stage: 6,
    title: 'Lỗi gõ sai tên biến (NameError)',
    category: 'Biến',
    description: 'Biến được khai báo một đằng nhưng khi in lại gọi một nẻo.',
    buggyCode: `tong_tien = 500000
print("Tổng thanh toán:", tongtien)`,
    expectedOutput: 'Tổng thanh toán: 500000',
    hint: 'Sửa "tongtien" thành đúng tên biến đã khai báo "tong_tien".',
  },
  {
    stage: 7,
    title: 'Lỗi mốc biên Off-by-one trong range()',
    category: 'Vòng lặp',
    description: 'Chương trình muốn in các số từ 1 đến 5 nhưng hiện tại chỉ in tới 4 vì cơ chế [start, stop).',
    buggyCode: `for i in range(1, 5):
    print(i)`,
    expectedOutput: '1\n2\n3\n4\n5',
    hint: 'range(1, 5) chỉ dừng ở 4. Muốn in tới 5, bạn cần đổi thành range(1, 6).',
  },
  {
    stage: 8,
    title: 'Quên từ khóa return trong hàm',
    category: 'Hàm',
    description: 'Hàm tính bình phương nhưng in ra kết quả None vì thiếu lệnh trả về giá trị.',
    buggyCode: `def square(n):
    res = n * n

print(square(5))`,
    expectedOutput: '25',
    hint: 'Thêm lệnh "return res" bên trong thân hàm square.',
  },
  {
    stage: 9,
    title: 'Truy xuất vượt chỉ số mảng (IndexError)',
    category: 'Danh sách',
    description: 'Danh sách chỉ có 3 phần tử (chỉ số 0, 1, 2) nhưng chương trình lại cố lấy phần tử index 3.',
    buggyCode: `fruits = ["Táo", "Cam", "Xoài"]
print(fruits[3])`,
    expectedOutput: 'Xoài',
    hint: 'Phần tử cuối cùng "Xoài" nằm ở vị trí fruits[2] hoặc fruits[-1].',
  },
  {
    stage: 10,
    title: 'Truy xuất sai key trong từ điển (KeyError)',
    category: 'Dictionary',
    description: 'Từ điển không có key "gpa" dẫn đến KeyError khi đọc dữ liệu.',
    buggyCode: `sv = {"id": "SV01", "name": "Nam", "diem": 8.5}
print(sv["gpa"])`,
    expectedOutput: '8.5',
    hint: 'Key chứa điểm số trong từ điển là "diem", hãy sửa sv["gpa"] thành sv["diem"].',
  },
  {
    stage: 11,
    title: 'Nhầm lẫn dấu gán (=) với so sánh bằng (==)',
    category: 'Điều kiện',
    description: 'Trong biểu thức if, bạn phải dùng toán tử so sánh == thay vì toán tử gán =.',
    buggyCode: `role = "user"
if role = "admin":
    print("Xin chào Quản trị viên")
else:
    print("Xin chào Khách")`,
    expectedOutput: 'Xin chào Khách',
    hint: 'Đổi "if role = "admin":" thành "if role == "admin":".',
  },
  {
    stage: 12,
    title: 'Lỗi thiếu chữ f trong f-string',
    category: 'Chuỗi',
    description: 'Muốn truyền biến vào chuỗi nhưng quên tiền tố f, khiến biểu thức bị in nguyên văn.',
    buggyCode: `name = "Python"
print("Chào mừng đến với {name}")`,
    expectedOutput: 'Chào mừng đến với Python',
    hint: 'Thêm chữ f trước dấu ngoặc kép: f"Chào mừng đến với {name}".',
  },
  {
    stage: 13,
    title: 'Cố tình sửa đổi chuỗi bất biến (TypeError)',
    category: 'Chuỗi',
    description: 'Chuỗi trong Python là kiểu bất biến (Immutable), không thể gán lại ký tự theo index s[0] = ...',
    buggyCode: `s = "hello"
s[0] = "H"
print(s)`,
    expectedOutput: 'Hello',
    hint: 'Bạn không thể gán s[0] = "H". Hãy tạo chuỗi mới: s = "H" + s[1:] hoặc s = s.capitalize().',
  },
  {
    stage: 14,
    title: 'Quên đóng ngoặc đơn câu lệnh lồng',
    category: 'Cú pháp',
    description: 'Lệnh print bọc hàm int() bị thiếu một dấu đóng ngoặc tròn ở cuối.',
    buggyCode: `val = "100"
print(int(val)`,
    expectedOutput: '100',
    hint: 'Bổ sung thêm dấu đóng ngoặc tròn ) ở cuối dòng: print(int(val)).',
  },
  {
    stage: 15,
    title: 'Quên khởi tạo biến tích lũy trước vòng lặp',
    category: 'Vòng lặp',
    description: 'Biến tong chưa được gán giá trị ban đầu nhưng đã thực hiện phép cộng dồn tong += i.',
    buggyCode: `for i in range(1, 4):
    tong += i
print(tong)`,
    expectedOutput: '6',
    hint: 'Khai báo "tong = 0" ở dòng đầu tiên trước khi vào vòng lặp for.',
  },
  {
    stage: 16,
    title: 'Vòng lặp while vô tận do quên cập nhật biến đếm',
    category: 'Vòng lặp',
    description: 'Biến i không được tăng sau mỗi vòng lặp khiến điều kiện i < 3 luôn đúng.',
    buggyCode: `i = 0
while i < 3:
    print("Lặp:", i)
    # Hãy cập nhật i ở đây`,
    expectedOutput: 'Lặp: 0\nLặp: 1\nLặp: 2',
    hint: 'Thêm dòng "    i += 1" vào cuối khối lệnh trong while.',
  },
  {
    stage: 17,
    title: 'Gọi sai phương thức thêm phần tử vào List',
    category: 'Danh sách',
    description: 'Người mới học thường nhầm lẫn phương thức .add() của Java/C++ với List trong Python.',
    buggyCode: `numbers = [1, 2, 3]
numbers.add(4)
print(numbers)`,
    expectedOutput: '[1, 2, 3, 4]',
    hint: 'Trong Python List dùng phương thức .append(4), không có phương thức .add().',
  },
  {
    stage: 18,
    title: 'Thiếu tham số bắt buộc khi gọi hàm',
    category: 'Hàm',
    description: 'Hàm tinh_tong yêu cầu 2 tham số a và b nhưng lúc gọi lại chỉ truyền 1 tham số.',
    buggyCode: `def tinh_tong(a, b):
    return a + b

print(tinh_tong(10))`,
    expectedOutput: '30',
    hint: 'Truyền đủ 2 tham số khi gọi hàm: print(tinh_tong(10, 20)).',
  },
  {
    stage: 19,
    title: 'Thiếu dấu phẩy ngăn cách phần tử trong List',
    category: 'Cú pháp',
    description: 'Các phần tử trong danh sách bị thiếu dấu phẩy ngăn cách khiến cú pháp bị lỗi.',
    buggyCode: `colors = ["red" "green", "blue"]
print(len(colors))`,
    expectedOutput: '3',
    hint: 'Thêm dấu phẩy giữa "red" và "green": ["red", "green", "blue"].',
  },
  {
    stage: 20,
    title: 'Mở file ghi dữ liệu nhưng nhầm mode đọc',
    category: 'File',
    description: 'Muốn ghi dữ liệu vào file nhưng mở ở chế độ "r" (read) gây ra UnsupportedOperation.',
    buggyCode: `with open("test.txt", "r") as f:
    f.write("Hello File")
with open("test.txt", "r") as f:
    print(f.read())`,
    expectedOutput: 'Hello File',
    hint: 'Ở dòng đầu tiên, đổi mode từ "r" sang "w" để cho phép ghi file: with open("test.txt", "w") as f:',
  },
];

const BugHunt = () => {
  const [currentStageIdx, setCurrentStageIdx] = useState(0);
  const currentStage = BUG_STAGES[currentStageIdx];
  const [code, setCode] = useState(currentStage.buggyCode);
  const [result, setResult] = useState(null);
  const [lives, setLives] = useState(3);
  const [showHint, setShowHint] = useState(false);
  const [stagePassed, setStagePassed] = useState(false);
  const [running, setRunning] = useState(false);

  const handleSelectStage = (idx) => {
    setCurrentStageIdx(idx);
    setCode(BUG_STAGES[idx].buggyCode);
    setResult(null);
    setStagePassed(false);
    setShowHint(false);
  };

  const handleRunAndCheck = async () => {
    if (running) return;
    setRunning(true);
    setResult(null);

    try {
      const exec = await runPythonCode(code);
      const actualOutput = (exec.output || '').trim();
      const expectedOutput = currentStage.expectedOutput.trim();

      if (exec.success && actualOutput === expectedOutput) {
        setResult({ success: true, msg: 'Chính xác! Bạn đã tiêu diệt được Bug thành công! 🐛🎯 +30 XP' });
        setStagePassed(true);
        try {
          addXP(30);
        } catch (e) {}
      } else {
        const newLives = Math.max(0, lives - 1);
        setLives(newLives);
        const errDetail = exec.error ? `\nChi tiết lỗi: ${exec.error}` : '';
        setResult({
          success: false,
          msg: `Code vẫn còn lỗi hoặc output chưa đúng kỳ vọng!\nThực tế: "${actualOutput}"\nKỳ vọng: "${expectedOutput}"${errDetail}`,
        });
      }
    } catch (err) {
      setResult({
        success: false,
        msg: `Lỗi thực thi: ${err.message}`,
      });
    } finally {
      setRunning(false);
    }
  };

  const handleNextStage = () => {
    if (currentStageIdx < BUG_STAGES.length - 1) {
      handleSelectStage(currentStageIdx + 1);
    }
  };

  const handlePrevStage = () => {
    if (currentStageIdx > 0) {
      handleSelectStage(currentStageIdx - 1);
    }
  };

  const handleResetStage = () => {
    setCode(currentStage.buggyCode);
    setResult(null);
    setStagePassed(false);
    setShowHint(false);
  };

  return (
    <div style={{ maxWidth: 920, margin: '0 auto', paddingBottom: '3rem' }}>
      {/* Header */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '1.2rem',
        flexWrap: 'wrap',
        gap: '0.8rem',
      }}>
        <div>
          <h2 style={{
            display: 'flex',
            alignItems: 'center',
            gap: 8,
            margin: '0 0 0.3rem 0',
            fontSize: 'clamp(1.25rem, 4vw, 1.6rem)',
            flexWrap: 'wrap',
          }}>
            <Bug size={26} color="var(--color-danger)" /> Săn Lỗi Bug Hunt (Thợ săn lỗi Code)
          </h2>
          <p style={{ color: 'var(--color-text-secondary)', margin: 0, fontSize: '0.92rem' }}>
            Vượt qua 20 ải thử thách: tìm và sửa các lỗi Syntax, Indent, Type, Name, Logic để nhận XP.
          </p>
        </div>

        <div style={{ display: 'flex', gap: '0.8rem', alignItems: 'center' }}>
          <div style={{ fontSize: '1.1rem', letterSpacing: 2 }}>
            {Array.from({ length: 3 }).map((_, i) => (
              <span key={i}>{i < lives ? '❤️' : '🖤'}</span>
            ))}
          </div>
          <span style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--color-cyan)', background: 'rgba(6,182,212,0.1)', padding: '0.25rem 0.6rem', borderRadius: 6 }}>
            Ải {currentStage.stage} / {BUG_STAGES.length}
          </span>
        </div>
      </div>

      {/* Stage Selector Pills (Horizontally touch-scrollable) */}
      <div style={{
        display: 'flex',
        gap: '0.4rem',
        marginBottom: '1rem',
        overflowX: 'auto',
        paddingBottom: '0.4rem',
        WebkitOverflowScrolling: 'touch',
      }}>
        {BUG_STAGES.map((stg, idx) => {
          const isActive = idx === currentStageIdx;
          return (
            <button
              key={stg.stage}
              onClick={() => handleSelectStage(idx)}
              style={{
                padding: '0.35rem 0.65rem',
                borderRadius: 8,
                fontSize: '0.78rem',
                fontWeight: 700,
                cursor: 'pointer',
                whiteSpace: 'nowrap',
                border: isActive ? '1.5px solid var(--color-primary)' : '1px solid var(--color-border)',
                background: isActive ? 'var(--color-primary)' : 'var(--color-card)',
                color: isActive ? '#ffffff' : 'var(--color-text)',
                transition: 'all 0.15s ease',
                flexShrink: 0,
              }}
            >
              Ải {stg.stage}
            </button>
          );
        })}
      </div>

      {/* Stage Details Card */}
      <div className="card" style={{ padding: '1rem 1.2rem', marginBottom: '0.8rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.4rem', flexWrap: 'wrap', gap: '0.4rem' }}>
          <h4 style={{ margin: 0, color: 'var(--color-primary)', fontSize: '1.05rem' }}>
            Ải {currentStage.stage}: {currentStage.title}
          </h4>
          <span style={{
            fontSize: '0.72rem',
            fontWeight: 700,
            color: 'var(--color-cyan)',
            background: 'rgba(6,182,212,0.12)',
            padding: '0.15rem 0.5rem',
            borderRadius: 4,
          }}>
            {currentStage.category}
          </span>
        </div>
        <p style={{ margin: '0 0 0.6rem 0', fontSize: '0.9rem', color: 'var(--color-text)' }}>
          {currentStage.description}
        </p>

        <div style={{ fontSize: '0.82rem', color: 'var(--color-text-secondary)', marginTop: '0.4rem' }}>
          <strong>Output kỳ vọng:</strong>
          <pre style={{
            margin: '0.3rem 0 0 0',
            padding: '0.5rem 0.8rem',
            background: 'var(--color-code-bg)',
            border: '1px solid var(--color-border)',
            borderRadius: 6,
            fontFamily: 'monospace',
            fontSize: '0.85rem',
            whiteSpace: 'pre-wrap',
            wordBreak: 'break-word',
            color: 'var(--color-cyan)',
          }}>
            {currentStage.expectedOutput}
          </pre>
        </div>
      </div>

      {/* Code Editor */}
      <div style={{
        height: 'clamp(200px, 35vh, 270px)',
        border: '1px solid var(--color-border)',
        borderRadius: 8,
        overflow: 'hidden',
        marginBottom: '0.8rem',
      }}>
        <Editor
          height="100%"
          defaultLanguage="python"
          theme={document.documentElement.getAttribute('data-theme') === 'dark' ? 'vs-dark' : 'light'}
          value={code}
          onChange={(val) => setCode(val || '')}
          options={{
            fontSize: 14,
            lineNumbers: 'on',
            minimap: { enabled: false },
            scrollBeyondLastLine: false,
            wordWrap: 'on',
          }}
        />
      </div>

      {/* Action Buttons */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '0.8rem',
        flexWrap: 'wrap',
        gap: '0.6rem',
      }}>
        <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
          <button className="btn btn-ghost" onClick={handleResetStage} style={{ padding: '0.4rem 0.75rem', fontSize: '0.85rem' }}>
            <RotateCcw size={15} /> Đặt lại code gốc
          </button>
          <button className="btn btn-ghost" onClick={() => setShowHint(!showHint)} style={{ padding: '0.4rem 0.75rem', fontSize: '0.85rem' }}>
            <Lightbulb size={15} /> {showHint ? 'Ẩn gợi ý' : 'Xem gợi ý'}
          </button>
        </div>

        <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
          {stagePassed ? (
            <button
              className="btn btn-cyan"
              onClick={handleNextStage}
              disabled={currentStageIdx >= BUG_STAGES.length - 1}
              style={{ padding: '0.5rem 1.2rem', fontSize: '0.9rem' }}
            >
              {currentStageIdx >= BUG_STAGES.length - 1 ? '🎉 Bạn đã phá đảo toàn bộ 20 ải!' : 'Qua ải tiếp theo ➡️'}
            </button>
          ) : (
            <button
              className="btn btn-primary"
              onClick={handleRunAndCheck}
              disabled={running}
              style={{ padding: '0.5rem 1.3rem', fontSize: '0.9rem' }}
            >
              <Play size={16} /> {running ? 'Đang kiểm tra...' : 'Chạy thử & Diệt Bug'}
            </button>
          )}
        </div>
      </div>

      {/* Hint Alert */}
      {showHint && (
        <div style={{
          padding: '0.8rem 1rem',
          background: 'rgba(6,182,212,0.1)',
          border: '1px solid rgba(6,182,212,0.3)',
          borderRadius: 8,
          fontSize: '0.88rem',
          marginBottom: '0.8rem',
          color: 'var(--color-text)',
        }}>
          💡 <strong>Gợi ý:</strong> {currentStage.hint}
        </div>
      )}

      {/* Result Alert Box */}
      {result && (
        <div style={{
          padding: '0.9rem 1.1rem',
          borderRadius: 8,
          background: result.success ? 'rgba(34,197,94,0.12)' : 'rgba(239,68,68,0.12)',
          border: `1.5px solid ${result.success ? 'var(--color-success)' : 'var(--color-danger)'}`,
          whiteSpace: 'pre-wrap',
          wordBreak: 'break-word',
          fontFamily: 'monospace',
          fontSize: '0.88rem',
          color: result.success ? 'var(--color-success)' : 'var(--color-danger)',
          lineHeight: 1.6,
        }}>
          {result.msg}
        </div>
      )}
    </div>
  );
};

export default BugHunt;
