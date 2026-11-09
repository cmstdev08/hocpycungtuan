// src/data/samples.js
export const codeSamples = [
  {
    id: 'hello',
    title: '1. Hello World & Print',
    code: `# Chương trình Python đầu tiên
print("Xin chào! Chào mừng bạn đến với Python Online Compiler.")
print("Học lập trình thật thú vị cùng Python! 🚀")
`,
  },
  {
    id: 'input',
    title: '2. Nhập dữ liệu với input()',
    code: `# Nhập tên và năm sinh từ bàn phím
ten = input("Nhập tên của bạn: ")
nam_sinh = int(input("Nhập năm sinh của bạn: "))

tuoi = 2026 - nam_sinh
print(f"Chào {ten}! Năm nay bạn {tuoi} tuổi.")
`,
  },
  {
    id: 'if_else',
    title: '3. Điều kiện If - Else (Kiểm tra chẵn/lẻ)',
    code: `# Kiểm tra số nguyên âm, dương, chẵn hay lẻ
n = int(input("Nhập một số nguyên: "))

if n > 0:
    loai = "dương"
elif n < 0:
    loai = "âm"
else:
    loai = "bằng 0"

tinh_chat = "chẵn" if n % 2 == 0 else "lẻ"
print(f"Số {n} là số {loai} và là số {tinh_chat}.")
`,
  },
  {
    id: 'for_loop',
    title: '4. Vòng lặp For (Bảng cửu chương)',
    code: `# In bảng cửu chương 7
n = 7
print(f"--- BẢNG CỬU CHƯƠNG {n} ---")
for i in range(1, 11):
    print(f"{n} x {i:2d} = {n * i:2d}")
`,
  },
  {
    id: 'list_dict',
    title: '5. List & Dictionary (Quản lý điểm)',
    code: `# Quản lý danh sách sinh viên bằng Dictionary trong List
danh_sach = [
    {"ten": "Nguyễn Văn An", "diem": 8.5},
    {"ten": "Trần Thị Bình", "diem": 9.0},
    {"ten": "Lê Văn Cường", "diem": 6.5},
    {"ten": "Phạm Thị Dung", "diem": 7.0}
]

print("=== DANH SÁCH SINH VIÊN ===")
for sv in danh_sach:
    xep_loai = "Giỏi" if sv["diem"] >= 8.0 else ("Khá" if sv["diem"] >= 6.5 else "Trung bình")
    print(f"- {sv['ten']}: {sv['diem']} điểm -> {xep_loai}")

diem_tb = sum(sv["diem"] for sv in danh_sach) / len(danh_sach)
print(f"\\nĐiểm trung bình lớp: {diem_tb:.2f}")
`,
  },
  {
    id: 'functions',
    title: '6. Hàm Def (Kiểm tra số nguyên tố)',
    code: `def la_so_nguyen_to(n):
    if n < 2:
        return False
    for i in range(2, int(n ** 0.5) + 1):
        if n % i == 0:
            return False
    return True

print("Các số nguyên tố từ 1 đến 50:")
nguyen_to = [x for x in range(1, 51) if la_so_nguyen_to(x)]
print(nguyen_to)
`,
  },
  {
    id: 'recursion',
    title: '7. Đệ quy (Giai thừa & Fibonacci)',
    code: `def giai_thua(n):
    if n <= 1:
        return 1
    return n * giai_thua(n - 1)

def fibonacci(n):
    if n <= 0:
        return 0
    elif n == 1:
        return 1
    return fibonacci(n - 1) + fibonacci(n - 2)

so = 6
print(f"{so}! (Giai thừa của {so}) = {giai_thua(so)}")
print(f"Dãy 10 số Fibonacci đầu tiên:")
print([fibonacci(i) for i in range(10)])
`,
  },
  {
    id: 'try_except',
    title: '8. Xử lý ngoại lệ (Try - Except)',
    code: `print("--- CHƯƠNG TRÌNH PHÉP CHIA AN TOÀN ---")
try:
    a = float(input("Nhập số bị chia (a): "))
    b = float(input("Nhập số chia (b): "))
    ket_qua = a / b
except ValueError:
    print("❌ Lỗi: Bạn phải nhập số hợp lệ!")
except ZeroDivisionError:
    print("❌ Lỗi: Không thể chia một số cho 0!")
else:
    print(f"✅ Kết quả: {a} / {b} = {ket_qua}")
finally:
    print("Hoàn tất phép tính.")
`,
  }
];
