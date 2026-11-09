// src/data/samples.js
export const codeSamples = [
  {
    id: 'name_age',
    title: '1. Nhập Tên & Tuổi (Mẫu chuẩn đề bài)',
    code: `name = input("Nhập tên: ")
age = int(input("Nhập tuổi: "))

print("Xin chào", name)
print("Bạn", age, "tuổi")
`,
  },
  {
    id: 'sum_two_nums',
    title: '2. Tính tổng hai số (Nhiều input liên tiếp)',
    code: `print("--- TÍNH TỔNG HAI SỐ NGUYÊN ---")
a = int(input("a = "))
b = int(input("b = "))
print("Tổng =", a + b)
`,
  },
  {
    id: 'float_calc',
    title: '3. Nhập số thực Float (Tính chu vi & diện tích)',
    code: `r = float(input("Nhập bán kính hình tròn r = "))
pi = 3.14159
chu_vi = 2 * pi * r
dien_tich = pi * (r ** 2)

print(f"Chu vi hình tròn: {chu_vi:.2f}")
print(f"Diện tích hình tròn: {dien_tich:.2f}")
`,
  },
  {
    id: 'loop_inputs',
    title: '4. Vòng lặp For liên tục gọi input()',
    code: `tong = 0
so_luong = int(input("Bạn muốn nhập bao nhiêu số? "))

for i in range(so_luong):
    val = float(input(f"Nhập giá trị thứ {i + 1}: "))
    tong += val
    print(f"-> Đã ghi nhận {val}, tổng tạm thời: {tong}")

print("=== KẾT QUẢ CUỐI CÙNG ===")
print("Tổng tất cả các số vừa nhập =", tong)
`,
  },
  {
    id: 'error_handling',
    title: '5. Bắt lỗi nhập liệu ZeroDivision & ValueError',
    code: `try:
    a = int(input("Nhập tử số: "))
    b = int(input("Nhập mẫu số: "))
    print(f"Kết quả {a} / {b} = {a / b}")
except ZeroDivisionError:
    print("❌ Lỗi: Không thể chia cho 0!")
except ValueError:
    print("❌ Lỗi: Dữ liệu nhập vào phải là số nguyên!")
`,
  },
  {
    id: 'hello',
    title: '6. Hello World & In định dạng',
    code: `print("Xin chào! Chào mừng bạn đến với Python Interactive Terminal.")
print("Học lập trình thật thú vị cùng Python! 🚀")
`,
  },
  {
    id: 'list_dict',
    title: '7. Quản lý sinh viên với List & Dict',
    code: `danh_sach = [
    {"ten": "Nguyễn Văn An", "diem": 8.5},
    {"ten": "Trần Thị Bình", "diem": 9.0},
    {"ten": "Lê Văn Cường", "diem": 6.5},
]

print("=== DANH SÁCH SINH VIÊN ===")
for sv in danh_sach:
    xep_loai = "Giỏi" if sv["diem"] >= 8.0 else "Khá"
    print(f"- {sv['ten']}: {sv['diem']} điểm -> {xep_loai}")
`,
  },
];
