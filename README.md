# 🐍 Python Learning Platform (Cơ Sở Lập Trình)

> **Tài liệu hướng dẫn kiến trúc, ngân hàng dữ liệu & bảo trì hệ thống**  
> Dành cho lập trình viên và các AI Agent tiếp quản, bảo trì, phát triển mở rộng hệ thống trong tương lai.

---

## 📑 MỤC LỤC
1. [Tổng quan hệ sinh thái](#1-tổng-quan-hệ-sinh-thái)
2. [Nguyên tắc cốt lõi (Core Constraints)](#2-nguyên-tắc-cốt-lõi-core-constraints)
3. [Kiến trúc kỹ thuật (Tech Stack)](#3-kiến-trúc-kỹ-thuật-tech-stack)
4. [Cấu trúc cây thư mục (Project Structure)](#4-cấu-trúc-cây-thư-mục-project-structure)
5. [Cơ chế hoạt động các module cốt lõi](#5-cơ-chế-hoạt-động-các-module-cốt-lõi)
   - [A. Interactive Terminal phong cách VS Code (xterm.js + Pyodide Worker)](#a-interactive-terminal-phong-cách-vs-code-xtermjs--pyodide-worker)
   - [B. Bảo mật Cross-Origin Isolation (COOP & COEP)](#b-bảo-mật-cross-origin-isolation-coop--coep)
   - [C. Ngân hàng 250 bài tập thực hành & Automated Test Runner (100% Pass)](#c-ngân-hàng-250-bài-tập-thực-hành--automated-test-runner-100-pass)
   - [D. Đấu trường tốc độ gõ Code Python (Speed Typing 44 bài + Thanh phím tắt Mobile)](#d-đấu-trường-tốc-độ-gõ-code-python-speed-typing-44-bài--thanh-phím-tắt-mobile)
   - [E. Săn Lỗi Bug Hunt (20 ải thử thách thực chiến)](#e-săn-lỗi-bug-hunt-20-ải-thử-thách-thực-chiến)
   - [F. Đối chiếu cú pháp C++ sang Python (24 chủ đề đối chiếu)](#f-đối-chiếu-cú-pháp-c-sang-python-24-chủ-đề-đối-chiếu)
   - [G. Mô phỏng từng bước chạy của Code (Code Visualizer 12 bài toán + Auto Play)](#g-mô-phỏng-từng-bước-chạy-của-code-code-visualizer-12-bài-toán--auto-play)
   - [H. Tối ưu hóa giao diện đa nền tảng (Mobile Responsive UI)](#h-tối-ưu-hóa-giao-diện-đa-nền-tảng-mobile-responsive-ui)
   - [I. Hệ thống Gamification & Lưu trữ LocalStorage](#i-hệ-thống-gamification--lưu-trữ-localstorage)
6. [Hướng dẫn bảo trì & Thêm nội dung mới](#6-hướng-dẫn-bảo-trì--thêm-nội-dung-mới)
7. [Các lệnh CLI thường dùng & Quy trình Deploy Vercel](#7-các-lệnh-cli-thường-dùng--quy-trình-deploy-vercel)
8. [Cẩm nang xử lý sự cố (Troubleshooting)](#8-cẩm-nang-xử-lý-sự-cố-troubleshooting)

---

## 1. Tổng quan hệ sinh thái

Trang web là nền tảng tự học lập trình Python miễn phí, hướng tới sinh viên đại học/cao đẳng đang học môn **Cơ sở lập trình**. Toàn bộ website được xây dựng theo kiến trúc Single Page Application (SPA), chạy 100% trên trình duyệt người dùng bằng WebAssembly.

### Các phân hệ chính:
- **Khóa học 13 chương chuẩn đại học:** Đi từ Cơ bản, Điều kiện, Vòng lặp, List, Dict, Tuple/Set, Chuỗi, Hàm, File, Đệ quy, Thuật toán, OOP và Đồ án quản lý sinh viên CLI. Có tích hợp **Giọng đọc AI (Web Speech API)** và **Sổ tay ghi chú (Sticky Note)** theo từng bài.
- **Python Compiler & Interactive Terminal:** Trình soạn thảo Monaco Editor kết hợp xterm.js, hỗ trợ `input()` trực tiếp tại con trỏ Terminal, hỗ trợ phím tắt `Ctrl + Enter`.
- **Ngân hàng 250 bài tập thực hành độc nhất:** Phân chia theo 13 chương học, có hệ thống chạy test case tự động kiểm tra output kỳ vọng (đã kiểm định 657/657 test cases đỗ 100%).
- **Trắc nghiệm & Thi thử 45 phút:** Bộ đề 30 câu hỏi ngẫu nhiên có đồng hồ bấm giờ, chấm điểm và xếp loại học lực.
- **Đấu trường tốc độ gõ Code (Speed Typing):** 44 bài gõ đa dạng từ cơ bản đến OOP, thanh phím tắt Mobile Quick Symbols Bar, tính WPM và Accuracy % thời gian thực.
- **Săn lỗi Bug Hunt (20 ải):** Mini-game tìm và sửa lỗi cú pháp, thụt lề, kiểu dữ liệu, off-by-one, logic lặp, bộ nhớ.
- **Trình chuyển đổi C++ sang Python (24 chủ đề):** Bảng tra cứu cú pháp song song 6 nhóm chủ đề, kèm ghi chú mấu chốt và nút chạy thử trên Compiler.
- **Mô phỏng luồng code (Visualizer 12 bài toán):** Minh họa sự biến đổi giá trị của biến trong RAM, highlight dòng lệnh, hỗ trợ lùi bước (Step Back) và tự động chạy (Auto-Play).
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
5. **Mobile-first & Touch-friendly:** Mọi component và bảng điều khiển phải hiển thị mượt mà trên màn hình điện thoại ($\le 768\text{px}$), các nút bấm phải có kích thước tối thiểu $38\text{px}$ để chạm dễ dàng.

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
├── package.json                 # Khai báo dependency, type: module và scripts
├── vercel.json                  # Cấu hình COOP/COEP headers & SPA rewrite
├── vite.config.js               # Cấu hình Vite server headers
├── read.md                      # Tài liệu bảo trì hệ thống này
├── README.md                    # Giới thiệu dự án cho GitHub
│
├── public/                      # Tệp tĩnh được copy nguyên vẹn khi build
│   ├── coi-serviceworker.js     # Service Worker kích hoạt Cross-Origin Isolation
│   └── pyodideWorker.js         # Web Worker độc lập chạy Pyodide + Atomics stdin
│
├── src/
│   ├── main.jsx                 # Entry point React (React.StrictMode, BrowserRouter)
│   ├── App.jsx                  # Khai báo Route, responsive sidebar listener, ErrorBoundary
│   │
│   ├── components/              # Các thành phần dùng chung
│   │   ├── Navbar.jsx           # Thanh điều hướng, Pomodoro timer, tìm kiếm, đổi theme
│   │   ├── Sidebar.jsx          # Menu thanh bên, auto-close trên mobile
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
│   │   ├── SpeedTyping.jsx      # Đấu trường tốc độ gõ (44 bài, Quick Code Bar, mobile UI)
│   │   ├── BugHunt.jsx          # Mini-game Săn lỗi Bug Hunt (20 ải thử thách)
│   │   ├── CppConverter.jsx     # Bảng đối chiếu C++ vs Python (24 chủ đề, 6 nhóm)
│   │   ├── Visualizer.jsx       # Mô phỏng từng bước chạy Code (12 bài toán, Step Back, Auto Play)
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
│   │   └── global.css           # Biến màu sắc, Dark/Light Mode, mobile responsive rules
│   │
│   └── utils/                   # Các hàm tiện ích logic
│       ├── pyodideRunner.js     # Singleton Pyodide dùng cho Exercises & Bug Hunt (hỗ trợ EOF chuẩn)
│       ├── aiDebugger.js        # Bác sĩ AI chẩn đoán lỗi Python tiếng Việt
│       ├── gamification.js      # Tính XP, cấp độ, duy trì streak, mở khóa huy hiệu
│       └── backup.js            # Xuất và khôi phục tiến độ học bằng file JSON
```

---

## 5. Cơ chế hoạt động các module cốt lõi

### A. Interactive Terminal phong cách VS Code (xterm.js + Pyodide Worker)
- **Vấn đề kỹ thuật:** Lệnh `input()` trong Python là lời gọi **đồng bộ (synchronous)**. Nếu chạy ở Main Thread, JavaScript không thể dừng chờ người dùng nhập mà không làm đơ giao diện hoặc dùng `window.prompt()`.
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

### C. Ngân hàng 250 bài tập thực hành & Automated Test Runner (100% Pass)
- **Tập hợp dữ liệu:** Nằm tại `src/data/exercises_data/chapter_1.js` đến `chapter_13.js`, được tập hợp thông qua `src/data/exercises.js`.
- **Chất lượng nội dung:** 250/250 bài tập có tiêu đề độc nhất, bài toán thực tế sinh động, có `inputDesc`, `outputDesc`, `exampleIO`, `hint`, `initialCode`, `sampleSolution` và mảng 2-3 `testCases`.
- **Cơ chế xử lý EOF trong `src/utils/pyodideRunner.js`:**
  ```javascript
  pyodide.setStdin({
    stdin: () => {
      if (inputQueue !== null) {
        if (inputQueue.length > 0) {
          return String(inputQueue.shift());
        }
        return null; // BẮT BUỘC trả về null để báo hiệu EOF cho Python! Tránh vòng lặp treo vô tận của sys.stdin.read()
      }
      ...
    }
  });
  ```
- **Tỷ lệ kiểm thử thành công:** Đã kiểm thử tự động toàn bộ 250 bài tập bằng Pyodide v0.26.4: **657 / 657 test cases passed (100%)**.

### D. Đấu trường tốc độ gõ Code Python (Speed Typing 44 bài + Thanh phím tắt Mobile)
- **Vị trí file:** `src/pages/SpeedTyping.jsx`.
- **Số lượng snippet:** 44 bài tập gõ phong phú phân chia 6 nhóm:
  - *Cơ bản (7 bài):* print, input số nguyên, float f-string, hoán đổi biến, chia nguyên/dư, type, ép kiểu.
  - *Điều kiện (6 bài):* if-else điểm, if-elif-else xếp loại, toán tử 3 ngôi, so sánh liên hoàn, năm nhuận, logic and/or/not.
  - *Vòng lặp (7 bài):* for range, for-in list, enumerate, while tính tổng, break, continue, bảng cửu chương.
  - *Hàm & Lambda (7 bài):* is_prime, trả về tuple, tham số mặc định, lambda bình phương, map+lambda, filter+lambda, *args.
  - *Cấu trúc dữ liệu (8 bài):* Dictionary sinh viên, get() an toàn, list comprehension bình phương, list comprehension chẵn, Set loại trùng, slicing đảo ngược, join, sort với key=lambda.
  - *File, Ngoại lệ & OOP (9 bài):* ghi file with open, đọc file readlines, bắt chia 0, ValueError, try-except-else-finally, raise, Lớp SinhVien, HinhTron method, kế thừa super().__init__().
- **Thanh phím tắt Mobile Quick Symbols Bar:** Hàng nút phím tắt chuyên dụng (`Tab (4 spc)`, `:`, `()`, `""`, `[]`, `{}`, `=`, `==`, `+`, `-`, `*`, `/`, `#`, `↵ Enter`) hỗ trợ chèn nhanh ngay tại con trỏ văn bản của điện thoại.
- **Tính toán WPM & Accuracy:** Cập nhật thời gian thực theo số ký tự chia 5 và số giây trôi qua; thưởng +25 XP khi gõ hoàn thành.

### E. Săn Lỗi Bug Hunt (20 ải thử thách thực chiến)
- **Vị trí file:** `src/pages/BugHunt.jsx`.
- **Số lượng ải:** 20 ải thử thách với độ khó tăng dần:
  - Ải 1: Quên dấu hai chấm ở lệnh `if`.
  - Ải 2: Nối chuỗi với số nguyên (`TypeError`).
  - Ải 3: Lỗi chia cho 0 (`ZeroDivisionError`).
  - Ải 4: Nhầm `true` thành `True` (Boolean).
  - Ải 5: Lỗi thụt dòng câu lệnh trong vòng lặp (`IndentationError`).
  - Ải 6: Lỗi sai tên biến (`NameError`).
  - Ải 7: Lỗi mốc biên Off-by-one trong `range()`.
  - Ải 8: Hàm tính toán quên lệnh `return`.
  - Ải 9: Truy cập vượt chỉ số danh sách (`IndexError`).
  - Ải 10: Đọc sai key trong Dictionary (`KeyError`).
  - Ải 11: Nhầm lẫn toán tử gán `=` với so sánh bằng `==` trong `if`.
  - Ải 12: Quên chữ `f` trong f-string.
  - Ải 13: Cố tình gán ký tự vào chuỗi bất biến (`TypeError`).
  - Ải 14: Quên đóng ngoặc đơn câu lệnh lồng nhau (`SyntaxError`).
  - Ải 15: Quên khởi tạo biến tích lũy trước vòng lặp (`NameError`).
  - Ải 16: Vòng lặp `while` vô tận do quên cập nhật biến đếm.
  - Ải 17: Nhầm phương thức `.add()` với `.append()` của List.
  - Ải 18: Gọi hàm thiếu tham số bắt buộc (`TypeError`).
  - Ải 19: Thiếu dấu phẩy ngăn cách phần tử trong List.
  - Ải 20: Mở file ghi dữ liệu nhưng đặt nhầm mode `"r"` thay vì `"w"`.
- **Trải nghiệm:** Thanh chọn ải cuộn ngang mượt mà, editor tự động ngắt dòng (`wordWrap: 'on'`), hệ thống 3 mạng sống ❤️, thưởng +30 XP khi diệt bug.

### F. Đối chiếu cú pháp C++ sang Python (24 chủ đề đối chiếu)
- **Vị trí file:** `src/pages/CppConverter.jsx`.
- **Số lượng chủ đề:** 24 mẫu đối chiếu chia thành 6 danh mục lớn:
  1. *Nhập xuất & Biến:* `cout` vs `print`, `cin` vs `input`, kiểu tĩnh vs kiểu động, swap biến.
  2. *Cấu trúc điều khiển:* `if-else if` vs `if-elif`, toán tử 3 ngôi, `for` đếm chỉ số, For-Each duyệt mảng, `while`, `switch-case` vs `match-case`.
  3. *Mảng & Chuỗi:* `std::vector` vs `List`, cắt chuỗi `substr` vs `slicing`, đảo ngược `std::reverse` vs `[::-1]`, sắp xếp `std::sort` vs `sorted()`.
  4. *Hàm & Tham số:* Khai báo hàm, tham chiếu `&` vs Pass-by-object-reference, trả về nhiều giá trị `std::pair` vs `Tuple`, Lambda.
  5. *Cấu trúc dữ liệu STL:* `std::map` vs `Dictionary`, `std::set` vs `Set`, `std::pair` vs `(a, b)`.
  6. *OOP & Xử lý File:* Khai báo Class & Constructor, kế thừa `Inheritance`, ngoại lệ `try-catch` vs `try-except`.
- **Tính năng mở rộng:** Hộp phân tích mấu chốt kỹ thuật, nút Copy mã Python, nút mở sang Compiler chạy thử, layout tự chuyển 1 cột trên điện thoại.

### G. Mô phỏng từng bước chạy của Code (Code Visualizer: 12 bài mẫu + Tự dán Code tùy chỉnh)
- **Vị trí file:** `src/pages/Visualizer.jsx` và hàm lõi `tracePythonCode` trong `src/utils/pyodideRunner.js`.
- **Hỗ trợ 2 chế độ linh hoạt:**
  1. **📚 12 Bài toán kinh điển chuẩn:** Vòng lặp tổng tích lũy, Hoán đổi biến swap, Thao tác List, Max tracking, Đảo chuỗi, Đếm chẵn lẻ, Giai thừa n!, Tìm kiếm tuyến tính, Thao tác Dictionary, Dãy Fibonacci, Tìm kiếm nhị phân, Sắp xếp nổi bọt. Có giải thích sư phạm chi tiết từng bước.
  2. **✨ Dán code Python tùy chỉnh của người dùng (Custom Code Mode):**
     - Người dùng có thể dán hoặc gõ bất kỳ đoạn code Python nào vào ô soạn thảo.
     - Hệ thống sử dụng hook `sys.settrace()` trong CPython để ghi nhận từng sự kiện `line`, trích xuất toàn bộ biến trong ô nhớ RAM (`frame.f_locals`), đồng thời gom toàn bộ `stdout` được in ra.
     - Tự động bắt lỗi cú pháp (SyntaxError) hoặc ngoại lệ thời gian chạy (Runtime Error) và dừng tại đúng dòng bị lỗi để người học quan sát.
     - Giới hạn an toàn `max_steps = 150` bước để chống đóng băng trình duyệt nếu người dùng vô tình viết vòng lặp vô tận.
- **Tính năng điều khiển:** Nút "Bước tiếp" (Next), nút "Lùi lại" (Step Back), chế độ "Tự chạy" (Auto-Play / Pause sau mỗi 1.3s), bảng biến RAM phân biệt kiểu dữ liệu trực quan, khung Output console thời gian thực.
- **Nút "Chỉnh sửa code":** Giúp người học dễ dàng quay lại sửa mã nguồn và phân tích lại ngay lập tức.

### H. Tối ưu hóa giao diện đa nền tảng (Mobile Responsive UI)
- **Sidebar tự động đóng trên Mobile:**
  - `src/App.jsx`: State `sidebarOpen` được khởi tạo dựa trên `window.innerWidth > 768`. Tự động lắng nghe sự kiện `resize` để đóng/mở hợp lý.
  - `src/components/Sidebar.jsx`: Khi người dùng click vào bất kỳ mục menu nào trên màn hình $\le 768\text{px}$, sidebar sẽ tự động kích hoạt hàm `handleNavClick` để đóng menu lại, giúp xem nội dung bài học ngay lập tức.
- **Tối ưu CSS Mobile (`src/styles/global.css`):**
  - Thiết lập vùng đệm `.page-container` là `0.85rem` và `.card` là `1rem` trên mobile.
  - Các tiêu đề `h1, h2, h3` tự co giãn tránh rớt dòng xấu.
  - Vùng phủ `sidebar-overlay` có hiệu ứng mờ nền `backdrop-filter: blur(2px)`.

### I. Hệ thống Gamification & Lưu trữ LocalStorage
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
  id: 251, // ID số nguyên duy nhất (tăng dần)
  code: "CH01_11",
  chapterId: 1, // Thuộc chương nào (1 -> 13)
  chapterName: "Giới thiệu Python",
  title: "Tính diện tích hình thang",
  difficulty: "Dễ", // 'Dễ' | 'Trung bình' | 'Khó'
  appliedKnowledge: "Nhập số thực float và biểu thức toán học.",
  description: "Viết chương trình nhập đáy lớn a, đáy bé b, chiều cao h và in ra diện tích.",
  inputDesc: "3 dòng lần lượt là a, b, h.",
  outputDesc: "Diện tích hình thang.",
  exampleIO: "Input:\n4\n6\n5\nOutput:\n25.0",
  hint: "dien_tich = (a + b) * h / 2",
  sampleSolution: "a = float(input())\nb = float(input())\nh = float(input())\nprint((a + b) * h / 2)",
  initialCode: "a = float(input())\nb = float(input())\nh = float(input())\n# Tính và in diện tích\n",
  testCases: [
    {
      input: "4\n6\n5",
      expectedOutput: "25.0",
      description: "Đáy 4, 6 và cao 5"
    },
    {
      input: "10\n20\n8",
      expectedOutput: "120.0",
      description: "Đáy 10, 20 và cao 8"
    }
  ]
}
```

### Cách 2: Thêm bài luyện gõ code mới (Speed Typing)
Mở `src/pages/SpeedTyping.jsx` và thêm vào mảng `TYPING_SNIPPETS`:
```javascript
{
  id: 45,
  category: 'Cơ bản', // 'Cơ bản' | 'Điều kiện' | 'Vòng lặp' | 'Hàm & Lambda' | 'Cấu trúc dữ liệu' | 'File, Ngoại lệ & OOP'
  title: 'Khởi tạo danh sách số chẵn',
  code: 'even_nums = [i for i in range(10) if i % 2 == 0]',
}
```

### Cách 3: Thêm ải Săn lỗi mới (Bug Hunt)
Mở `src/pages/BugHunt.jsx` và thêm vào mảng `BUG_STAGES`:
```javascript
{
  stage: 21,
  title: 'Tiêu đề lỗi cần sửa',
  category: 'Cú pháp',
  description: 'Mô tả ngắn gọn lỗi xảy ra và yêu cầu.',
  buggyCode: `dòng mã bị lỗi`,
  expectedOutput: 'kết quả mong muốn sau khi sửa',
  hint: 'Gợi ý cách khắc phục.',
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

# Kiểm tra đóng gói build bản sản xuất (bắt buộc trước khi commit)
npm run build

# Chạy kiểm thử tự động toàn bộ 250 bài tập bằng Pyodide
node scratch/verify_all_exercises.mjs
```

### Quy trình Deploy Vercel
Dự án đã được liên kết với GitHub repository: `https://github.com/cmstdev08/hocpycungtuan.git`.  
Mỗi khi có commit mới trên nhánh `master`, Vercel sẽ **tự động kích hoạt Webhook và Deploy**:
```bash
# Đẩy toàn bộ thay đổi lên GitHub để Vercel tự động build
git add .
git commit -m "Cập nhật tính năng và giao diện"
git push origin master
```

---

## 8. Cẩm nang xử lý sự cố (Troubleshooting)

| Hiện tượng | Nguyên nhân có thể | Cách khắc phục triệt để |
|---|---|---|
| **Vercel báo lỗi `Command exited with 126`** | Thư mục `node_modules` chứa file binary Windows vô tình bị commit vào git index. | Chạy `git rm -r --cached node_modules`, kiểm tra `.gitignore` có dòng `node_modules` và commit lại. |
| **Màn hình trắng (White Screen) khi click vào một trang** | Một lỗi JavaScript runtime xảy ra lúc render mà không có try/catch hoặc ErrorBoundary. | Kiểm tra console trình duyệt; `ErrorBoundary.jsx` sẽ hiển thị chi tiết stack trace thay vì sập toàn bộ app. |
| **Lệnh `input()` trong Terminal không dừng để gõ** | Trình duyệt chưa kích hoạt `crossOriginIsolated` nên `SharedArrayBuffer` bị khóa. | Đảm bảo file `coi-serviceworker.js` nằm trong thư mục `public/` và `vercel.json` có đủ 2 header COOP / COEP. Nhấn tải lại trang để Service Worker cập nhật. |
| **Ký tự `\n` bị hiển thị thô dạng chữ trên giao diện** | Dữ liệu bị escape 2 lần (`\\n`) hoặc JSX thiếu thuộc tính `white-space`. | Thêm style `whiteSpace: 'pre-wrap'` hoặc `whiteSpace: 'pre-line'` cho thẻ cha hoặc thẻ `<pre>`. |
| **Vòng lặp đọc file `sys.stdin.read()` bị treo vô tận** | Hàm `stdin` trong Pyodide trả về chuỗi rỗng `''` thay vì `null`. | Đảm bảo `pyodideRunner.js` trả về `null` khi `inputQueue` rỗng để kích hoạt tín hiệu EOF. |
| **Không đẩy được code bằng git trong sandbox** | Sandbox terminal bị chặn internet do chính sách bảo mật sandbox. | Chạy lệnh `git push origin master` trên **terminal bên ngoài (PowerShell / Command Prompt)** của máy tính cá nhân. |

---

*Tài liệu được cập nhật ngày: 10/11/2026.*
