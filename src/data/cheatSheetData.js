// src/data/cheatSheetData.js
export const cheatSheetSections = [
  {
    category: '1. Cú pháp & Kiểu dữ liệu',
    items: [
      { name: 'In dữ liệu', code: 'print("A", "B", sep="-", end="\\n")' },
      { name: 'Nhập dữ liệu', code: 'x = int(input("Nhập: ")) # luôn là str nếu chưa ép' },
      { name: 'Kiểm tra kiểu', code: 'type(10) -> int, type(3.14) -> float' },
      { name: 'f-string', code: 'f"Chào {ten}, điểm: {diem:.2f}"' },
      { name: 'Ghi chú', code: '# 1 dòng  |  """ nhiều dòng """' },
    ],
  },
  {
    category: '2. Toán tử cốt lõi',
    items: [
      { name: 'Số học', code: '+, -, *, / (chia thực), // (chia nguyên), % (dư), ** (mũ)' },
      { name: 'So sánh', code: '== (bằng), != (khác), >, <, >=, <=' },
      { name: 'Logic', code: 'and (và), or (hoặc), not (phủ định)' },
      { name: 'Toán tử ba ngôi', code: 'x = "Đậu" if diem >= 5 else "Rớt"' },
      { name: 'Thành viên', code: '"py" in "python" -> True' },
    ],
  },
  {
    category: '3. Cấu trúc điều khiển',
    items: [
      { name: 'if - elif - else', code: 'if x > 0:\n    print("+")\nelif x < 0:\n    print("-")\nelse:\n    print("0")' },
      { name: 'Vòng for', code: 'for i in range(1, 10, 2): # 1, 3, 5, 7, 9' },
      { name: 'Vòng while', code: 'while n > 0:\n    n -= 1' },
      { name: 'break / continue', code: 'break (thoát hẳn) | continue (bỏ qua lượt này)' },
    ],
  },
  {
    category: '4. Chuỗi String',
    items: [
      { name: 'Cắt chuỗi (Slice)', code: 's[0] (đầu), s[-1] (cuối), s[::-1] (đảo ngược)' },
      { name: 'Hoa / Thường', code: 's.upper(), s.lower(), s.title()' },
      { name: 'Tách & Nối', code: 'words = s.split(",")  |  "-".join(list)' },
      { name: 'Tìm & Thay thế', code: 's.replace("cũ", "mới")  |  s.find("sub")' },
      { name: 'Cắt khoảng trắng', code: 's.strip() (bỏ 2 đầu), s.count("a")' },
    ],
  },
  {
    category: '5. Danh sách List',
    items: [
      { name: 'Khởi tạo', code: 'arr = [1, 2, 3]' },
      { name: 'Thêm phần tử', code: 'arr.append(4)  |  arr.insert(0, 99)' },
      { name: 'Xóa phần tử', code: 'arr.pop() (cuối), arr.pop(0), arr.remove(x)' },
      { name: 'Sắp xếp & Đảo', code: 'arr.sort() (tăng), arr.sort(reverse=True)' },
      { name: 'Thống kê', code: 'len(arr), sum(arr), max(arr), min(arr)' },
    ],
  },
  {
    category: '6. Dictionary, Tuple, Set',
    items: [
      { name: 'Dictionary', code: 'd = {"ma": "SV01", "diem": 8.5}\nd.get("diem", 0) # truy xuất an toàn' },
      { name: 'Duyệt dict', code: 'for k, v in d.items(): print(k, v)' },
      { name: 'Tuple (bất biến)', code: 't = (10, 20) # không thể gán lại t[0]' },
      { name: 'Set (duy nhất)', code: 's = {1, 2, 2, 3} -> {1, 2, 3} (lọc trùng)' },
    ],
  },
  {
    category: '7. Hàm & Đệ quy',
    items: [
      { name: 'Hàm chuẩn', code: 'def tinh_tong(a, b=0):\n    return a + b' },
      { name: 'Biến toàn cục', code: 'global ten_bien # sửa biến ngoài hàm' },
      { name: 'Đệ quy', code: 'def fact(n):\n    if n <= 1: return 1 # base case\n    return n * fact(n - 1)' },
    ],
  },
  {
    category: '8. File & Ngoại lệ',
    items: [
      { name: 'Đọc/Ghi file', code: 'with open("data.txt", "w", encoding="utf-8") as f:\n    f.write("Xin chào")' },
      { name: 'Đọc từng dòng', code: 'with open("data.txt", "r") as f:\n    for line in f: print(line.strip())' },
      { name: 'Bắt lỗi ngoại lệ', code: 'try:\n    x = 10 / n\nexcept ZeroDivisionError:\n    print("Lỗi chia 0")\nfinally:\n    print("Luôn chạy")' },
    ],
  },
];
