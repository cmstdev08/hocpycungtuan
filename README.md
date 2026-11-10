# 🐍 Python Learning Platform (Cơ Sở Lập Trình)

> **Tài liệu hướng dẫn kiến trúc & bảo trì hệ thống**  
> Dành cho lập trình viên và các AI Agent tiếp quản, bảo trì, phát triển mở rộng hệ thống trong tương lai.

---

## 📑 MỤC LỤC
1. [Tổng quan hệ sinh thái](#1-tổng-quan-hệ-sinh-thái)
2. [Nguyên tắc cốt lõi (Core Constraints)](#2-nguyên-tắc-cốt-lõi-core-constraints)
3. [Kiến trúc kỹ thuật (Tech Stack)](#3-kiến-trúc-kỹ-thuật-tech-stack)
4. [Cấu trúc cây thư mục (Project Structure)](#4-cấu-trúc-cây-thư-mục-project-structure)
5. [Cơ chế hoạt động các module phức tạp](#5-cơ-chế-hoạt-động-các-module-phức-tạp)
   - [A. Interactive Terminal phong cách VS Code (xterm.js + Pyodide Worker)](#a-interactive-terminal-phong-cách-vs-code-xtermjs--pyodide-worker)
   - [B. Bảo mật Cross-Origin Isolation (COOP & COEP)](#b-bảo-mật-cross-origin-isolation-coop--coep)
   - [C. Automated Test Runner (Ngân hàng 250 bài tập)](#c-automated-test-runner-ngân-hàng-250-bài-tập)
   - [D. Hệ thống Gamification & Lưu trữ LocalStorage](#d-hệ-thống-gamification--lưu-trữ-localstorage)
6. [Hướng dẫn bảo trì & Thêm nội dung mới](#6-hướng-dẫn-bảo-trì--thêm-nội-dung-mới)
7. [Các lệnh CLI thường dùng & Quy trình Deploy Vercel](#7-các-lệnh-cli-thường-dùng--quy-trình-deploy-vercel)
8. [Cẩm nang xử lý sự cố (Troubleshooting)](#8-cẩm-nang-xử-lý-sự-cố-troubleshooting)

---

## 1. Tổng quan hệ sinh thái

Trang web là nền tảng tự học lập trình Python miễn phí, hướng tới sinh viên đại học/cao đẳng đang học môn **Cơ sở lập trình**. Toàn bộ website được xây dựng theo kiến trúc Single Page Application (SPA), chạy 100% trên trình duyệt người dùng bằng WebAssembly.

### Các phân hệ chính:
- **Khóa học 13 chương chuẩn đại học:** Đi từ Cơ bản, Điều kiện, Vòng lặp, List, Dict, Tuple/Set, Chuỗi, Hàm, File, Đệ quy, Thuật toán, OOP và Đồ án quản lý sinh viên CLI. Có tích hợp **Giọng đọc AI (Web Speech API)** và **Sổ tay ghi chú (Sticky Note)** theo từng bài.
- **Python Compiler & Interactive Terminal:** Trình soạn thảo Monaco Editor kết hợp xterm.js, hỗ trợ `input()` trực tiếp tại con trỏ Terminal, hỗ trợ phím tắt `Ctrl + Enter`.
- **Ngân hàng 250 bài tập thực hành:** Phân chia 13 chương học, có hệ thống chạy test case tự động kiểm tra output kỳ vọng.
- **Trắc nghiệm & Thi thử 45 phút:** Bộ đề 30 câu hỏi ngẫu nhiên có đồng hồ bấm giờ, chấm điểm và xếp loại học lực.
- **Đấu trường tốc độ gõ Code (Speed Typing):** Rèn phản xạ gõ chuẩn từ khóa Python (`def`, `range`, `if`, `class`, `with open`), tính WPM, Accuracy %, hỗ trợ thụt lề bằng phím `Tab`.
- **Săn lỗi Bug Hunt:** Mini-game tìm và sửa lỗi cú pháp/logic Python trong thực tế.
- **Trình chuyển đổi C++ sang Python:** Bảng tra cứu cú pháp song song giúp sinh viên đã học C++ dễ dàng tiếp cận Python.
- **Mô phỏng luồng code (Visualizer):** Minh họa sự biến đổi giá trị của biến và từng dòng lặp.
- **Cheat Sheet A4:** Tóm tắt công thức 13 chương, tối ưu layout in ấn PDF chuẩn A4.
- **Từ điển Python:** Tra cứu nhanh từ khóa, hàm built-in, ngoại lệ và thuật ngữ.
- **Cấp chứng chỉ tốt nghiệp:** Tự động vẽ chứng chỉ lên HTML5 Canvas và xuất file `.PNG` chất lượng cao.
- **Gamification:** Tính điểm kinh nghiệm XP, Level 1-6, Daily Streak, Huy hiệu danh dự, Sao lưu / Khôi phục tiến độ bằng tệp `.JSON`.

---

## 2. Nguyên tắc cốt lõi (Core Constraints)

Khi bảo trì và phát triển tính năng mới, **BẮT BUỘC** tuân thủ các nguyên tắc sau:
1. **100% Client-side (Frontend only):** Không thêm backend (Node.js/Express, Python/Flask/FastAPI), không thêm cơ sở dữ liệu (MySQL, MongoDB, Supabase, Firebase) và không sử dụng các dịch vụ API có trả phí.
2. **Không dùng `window.prompt()` / `alert()` cho Compiler:** Mọi thao tác nhập liệu của Python `input()` phải diễn ra trực tiếp trên dòng lệnh xterm.js của Terminal.
3. **Phòng thủ lỗi màn hình trắng:** Mọi trang và component chính phải nằm trong `ErrorBoundary` (`src/components/ErrorBoundary.jsx`).
4. **Không làm hỏng Code Editor:** Tránh dùng lệnh replace toàn cục chuỗi `\n` mà phải sử dụng CSS `white-space: pre-wrap` hoặc `white-space: pre-line` khi render văn bản nhiều dòng.

---

## 3. Kiến trúc kỹ thuật (Tech Stack)

| Thành phần | Công nghệ / Thư viện | Mục đích |
|---|---|---|
| **Core Framework** | React 18, Vite 5, React Router DOM v6 | Xây dựng Single Page App, quản trị Routing |
| **Code Editor** | `@monaco-editor/react` (`monaco-editor`) | Trình soạn thảo chuẩn VS Code, syntax highlighting Python |
| **Terminal Tương tác**| `@xterm/xterm`, `@xterm/addon-fit` | Terminal dòng lệnh hiển thị stdout, stderr và nhận stdin |
| **Python Engine** | Pyodide v0.26.4 (WebAssembly CPython 3.12) | Thực thi mã nguồn Python trực tiếp trên trình duyệt |
| **Đa luồng & Đồng bộ**| Web Worker + `SharedArrayBuffer` + `Atomics` | Ngăn chặn đơ UI và hỗ trợ `input()` tạm dừng đồng bộ |
| **Icons & UI** | `lucide-react`, Vanilla CSS Variables | Icon hiện đại, chuyển đổi Dark / Light Theme mượt mà |

---

## 4. Cấu trúc cây thư mục (Project Structure)

```text
WEBPYTHON/
├── index.html                   # Entry point HTML (đã nạp coi-serviceworker)
├── package.json                 # Khai báo dependency và scripts
├── vercel.json                  # Cấu hình COOP/COEP headers & SPA rewrite
├── vite.config.js               # Cấu hình Vite server headers
├── README.md                    # Tài liệu bảo trì hệ thống này
│
├── public/                      # Tệp tĩnh được copy nguyên vẹn khi build
│   ├── coi-serviceworker.js     # Service Worker kích hoạt Cross-Origin Isolation
│   └── pyodideWorker.js         # Web Worker độc lập chạy Pyodide + Atomics stdin
│
├── src/
│   ├── main.jsx                 # Entry point React (React.StrictMode, BrowserRouter)
│   ├── App.jsx                  # Khai báo các Route & bọc ErrorBoundary
│   │
│   ├── components/              # Các thành phần dùng chung
│   │   ├── Navbar.jsx           # Thanh điều hướng trên cùng, Pomodoro timer, tìm kiếm
│   │   ├── Sidebar.jsx          # Menu thanh bên, nút đóng/mở
│   │   ├── InteractiveTerminal.jsx # Terminal tương tác xterm.js kết nối Web Worker
│   │   └── ErrorBoundary.jsx    # Bắt lỗi crash và ngăn ngừa màn hình trắng
│   │
│   ├── pages/                   # Các màn hình chức năng chính
│   │   ├── Home.jsx             # Dashboard tổng quan tiến độ, Streak, Level, Badges
│   │   ├── Lessons.jsx          # Danh sách 13 chương học
│   │   ├── LessonDetail.jsx     # Chi tiết chương: Lý thuyết, Ví dụ, Giọng đọc, Note
│   │   ├── Editor.jsx           # Python Compiler + Monaco Editor + Terminal xterm.js
│   │   ├── Exercises.jsx        # Ngân hàng 250 bài tập có Test runner tự động
│   │   ├── Quizzes.jsx          # Trắc nghiệm lý thuyết theo từng chương
│   │   ├── MockExam.jsx         # Thi thử 45 phút xếp loại học lực
│   │   ├── SpeedTyping.jsx      # Đấu trường tốc độ gõ code Python (WPM, Accuracy)
│   │   ├── BugHunt.jsx          # Mini-game Săn lỗi Bug Hunt
│   │   ├── CppConverter.jsx     # Bảng so sánh C++ vs Python
│   │   ├── Visualizer.jsx       # Mô phỏng trực quan từng bước gán biến
│   │   ├── CheatSheet.jsx       # Bảng tra cứu 1 trang A4 xuất PDF
│   │   ├── Dictionary.jsx       # Từ điển thuật ngữ, từ khóa, hàm Python
│   │   └── Certificate.jsx      # Cấp chứng chỉ Canvas PNG xuất file ảnh
│   │
│   ├── data/                    # Dữ liệu tĩnh của chương trình học
│   │   ├── lessons.js           # 13 chương lý thuyết, cú pháp, ví dụ, mini quiz
│   │   ├── exercises.js         # Tập hợp toàn bộ 250 bài tập từ 13 chapters
│   │   ├── exercises_data/      # Tách nhỏ 13 file: chapter_1.js -> chapter_13.js
│   │   ├── quizzes.js           # Ngân hàng câu hỏi trắc nghiệm
│   │   ├── mockExamData.js      # Bộ 30 câu hỏi thi thử tổng hợp
│   │   ├── cheatSheetData.js    # Dữ liệu bảng tra cứu cú pháp A4
│   │   └── samples.js           # Các đoạn code mẫu trong Compiler
│   │
│   ├── styles/                  # Định dạng giao diện
│   │   └── global.css           # Biến màu sắc, Dark/Light Mode, layout chung
│   │
│   └── utils/                   # Các hàm tiện ích logic
│       ├── pyodideRunner.js     # Singleton Pyodide dùng cho Exercises & Bug Hunt
│       ├── aiDebugger.js        # Bác sĩ AI chẩn đoán lỗi Python tiếng Việt
│       ├── gamification.js      # Tính XP, cấp độ, duy trì streak, mở khóa huy hiệu
│       └── backup.js            # Xuất và khôi phục tiến độ học bằng file JSON
```

---

## 5. Cơ chế hoạt động các module phức tạp

### A. Interactive Terminal phong cách VS Code (xterm.js + Pyodide Worker)
- **Vấn đề kỹ thuật:** Lệnh `input()` trong Python là lời gọi **đồng bộ (synchronous)**. Nếu chạy ở Main Thread, JavaScript không thể dừng chờ người dùng nhập mà không dùng `window.prompt()`.
- **Giải pháp:**
  1. Pyodide chạy bên trong Web Worker độc lập (`public/pyodideWorker.js`).
  2. Tạo 2 vùng nhớ chia sẻ `SharedArrayBuffer`:
     - `controlBuffer` (16 bytes): Lưu trạng thái (`0 = idle`, `1 = waiting_for_input`, `2 = input_ready`, `3 = stopped`) và độ dài chuỗi byte.
     - `dataBuffer` (65536 bytes): Lưu dữ liệu text UTF-8 do người dùng gõ.
  3. Khi gặp `input(prompt)`:
     - Worker gửi prompt ra stdout.
     - Worker gọi `Atomics.store(controlArray, 0, 1)` và `Atomics.wait(controlArray, 0, 1)` để **ngủ đồng bộ (0% CPU)**.
     - Terminal xterm trên giao diện chính nhận sự kiện `stdin_prompt`, bật con trỏ gõ màu xanh lá.
     - Người dùng gõ dữ liệu và ấn <kbd>Enter</kbd>.
     - Main thread mã hóa chuỗi byte vào `dataBuffer`, ghi độ dài vào `controlArray[1]`, đặt trạng thái `2` và gọi `Atomics.notify(controlArray, 0, 1)` đánh thức Worker.
     - Worker thức dậy, đọc dữ liệu và trả kết quả cho Python `input()`.
  4. **Nút Dừng (Stop):** Gọi `worker.terminate()`, giải phóng luồng ngay lập tức kể cả khi code rơi vào vòng lặp vô tận (`while True:`), sau đó tự động tái tạo một Worker mới sẵn sàng cho lần chạy tiếp theo.

### B. Bảo mật Cross-Origin Isolation (COOP & COEP)
`SharedArrayBuffer` bắt buộc trình duyệt phải chạy ở chế độ **Cross-Origin Isolated** (`window.crossOriginIsolated === true`). Hệ thống được bảo vệ 3 lớp:
1. `vercel.json`: Gửi `Cross-Origin-Opener-Policy: same-origin` và `Cross-Origin-Embedder-Policy: require-corp` trong HTTP headers của Vercel.
2. `vite.config.js`: Gửi headers tương tự cho môi trường phát triển cục bộ (`localhost:5173`).
3. `public/coi-serviceworker.js`: Dự phòng tự kích hoạt Service Worker nếu website được deploy lên các máy chủ tĩnh không cấu hình được HTTP headers (như GitHub Pages).

### C. Automated Test Runner (Ngân hàng 250 bài tập)
- Nằm trong `src/pages/Exercises.jsx`.
- Sử dụng hàm `runPythonCode(code, { inputs })` trong `src/utils/pyodideRunner.js`.
- Với mỗi test case, mảng `inputs` chứa danh sách các giá trị input được xếp hàng (`inputQueue`). Khi Python gọi `input()`, runner tự động lấy giá trị tiếp theo trong hàng đợi mà không cần chờ người dùng gõ.

### D. Hệ thống Gamification & Lưu trữ LocalStorage
Toàn bộ dữ liệu người dùng được lưu trữ bền vững tại `localStorage`:
- `learningProgress`: `{ completedLessons: [1, 2, ...], lastLesson: { id, title } }`
- `completed_exercises`: Mảng các ID bài tập đã vượt qua 100% test case: `[1, 2, 5, ...]`
- `python_user_profile`: `{ xp: 250, streak: 3, lastActiveDate: '2026-11-10', unlockedBadges: ['first_run', 'streak_3'], fullName: '...' }`
- `python_lesson_notes`: Dictionary lưu ghi chú cá nhân của từng bài học: `{ "1": "Lưu ý nhớ ép kiểu int()", "2": "..." }`
- `python_recent_code`: Đoạn mã gần nhất đang viết trong Compiler.
- `theme`: Trạng thái giao diện `'dark'` hoặc `'light'`.

---

## 6. Hướng dẫn bảo trì & Thêm nội dung mới

### Cách 1: Thêm bài tập mới vào Ngân hàng bài tập
Mở file tương ứng trong `src/data/exercises_data/chapter_X.js` và thêm object theo cấu trúc:
```javascript
{
  id: 251, // ID số nguyên duy nhất
  chapterId: 1, // Thuộc chương nào (1 -> 13)
  title: 'Tính diện tích hình thang',
  difficulty: 'Dễ', // 'Dễ' | 'Trung bình' | 'Khó'
  description: 'Viết chương trình nhập đáy lớn a, đáy bé b, chiều cao h và in ra diện tích.',
  initialCode: 'a = float(input())\nb = float(input())\nh = float(input())\n# Viết tiếp code tại đây\n',
  solution: 'a = float(input())\nb = float(input())\nh = float(input())\nprint((a + b) * h / 2)\n',
  testCases: [
    {
      index: 1,
      description: 'Đáy 4, 6 và cao 5',
      input: '4\n6\n5',
      expectedOutput: '25.0',
    },
    {
      index: 2,
      description: 'Đáy 10, 20 và cao 8',
      input: '10\n20\n8',
      expectedOutput: '120.0',
    }
  ]
}
```

### Cách 2: Thêm đoạn code mẫu trong Compiler
Mở `src/data/samples.js` và thêm vào mảng `codeSamples`:
```javascript
{
  id: 'my_sample',
  title: 'X. Tiêu đề mẫu thử nghiệm',
  code: `# Mô tả mã nguồn
n = int(input("Nhập n: "))
print("Giá trị:", n)
`
}
```

### Cách 3: Thêm bài luyện gõ code mới
Mở `src/pages/SpeedTyping.jsx` và thêm vào mảng `TYPING_SNIPPETS`:
```javascript
{
  id: 10,
  category: 'Cơ bản', // 'Cơ bản' | 'Điều kiện' | 'Vòng lặp' | 'Hàm' | 'Cấu trúc dữ liệu' | 'File & Ngoại lệ'
  title: 'Khởi tạo danh sách số chẵn',
  code: 'even_nums = [i for i in range(10) if i % 2 == 0]',
}
```

---

## 7. Các lệnh CLI thường dùng & Quy trình Deploy Vercel

### Môi trường phát triển cục bộ (Local Development)
```bash
# Cài đặt thư viện dependencies
npm install

# Khởi chạy dev server (mở tại http://localhost:5173)
npm run dev

# Kiểm tra đóng gói build bản sản xuất
npm run build

# Xem thử bản build production
npm run preview
```

### Quy trình Deploy Vercel
Dự án đã được liên kết với GitHub repository: `https://github.com/cmstdev08/hocpycungtuan.git`.  
Mỗi khi có commit mới trên nhánh `master`, Vercel sẽ **tự động kích hoạt Webhook và Deploy**:
```bash
# Đẩy toàn bộ thay đổi lên GitHub để Vercel tự động build
git push origin master
```

---

## 8. Cẩm nang xử lý sự cố (Troubleshooting)

| Hiện tượng | Nguyên nhân có thể | Cách khắc phục triệt để |
|---|---|---|
| **Vercel báo lỗi `Command exited with 126`** | Thư mục `node_modules` chứa file binary Windows vô tình bị commit vào git index. | Chạy `git rm -r --cached node_modules`, kiểm tra `.gitignore` có dòng `node_modules` và commit lại. |
| **Màn hình trắng (White Screen) khi click vào một trang** | Một lỗi JavaScript runtime xảy ra lúc render mà không có try/catch hoặc ErrorBoundary. | Kiểm tra console trình duyệt; [ErrorBoundary.jsx](file:///d:/VSCODE/PROJECT/WEBPYTHON/src/components/ErrorBoundary.jsx) sẽ hiển thị chi tiết stack trace thay vì sập toàn bộ app. |
| **Lệnh `input()` trong Terminal không dừng để gõ** | Trình duyệt chưa kích hoạt `crossOriginIsolated` nên `SharedArrayBuffer` bị khóa. | Đảm bảo file `coi-serviceworker.js` nằm trong thư mục `public/` và `vercel.json` có đủ 2 header COOP / COEP. Nhấn tải lại trang để Service Worker cập nhật. |
| **Ký tự `\n` bị hiển thị thô dạng chữ trên giao diện** | Dữ liệu bị escape 2 lần (`\\n`) hoặc JSX thiếu thuộc tính `white-space`. | Thêm style `whiteSpace: 'pre-wrap'` hoặc `whiteSpace: 'pre-line'` cho thẻ cha hoặc thẻ `<pre>`. |
| **Không đẩy được code bằng git trong sandbox** | Sandbox terminal bị chặn internet do chính sách bảo mật sandbox. | Chạy lệnh `git push origin master` trên **terminal bên ngoài (PowerShell / Command Prompt)** của máy tính cá nhân. |

---

*Tài liệu được cập nhật ngày: 10/11/2026.*
