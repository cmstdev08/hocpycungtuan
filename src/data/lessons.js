// src/data/lessons.js
// 13 Chương lộ trình bài bản Cơ sở lập trình Python
export const lessons = [
  {
    id: 1,
    stage: 'Giai đoạn 1: Nền tảng Python',
    title: 'Giới thiệu Python',
    topics: [
      'Python là gì?',
      'Cài đặt và môi trường lập trình',
      'Cấu trúc chương trình Python',
      'Hàm print()',
      'Comment và quy tắc viết code',
      'Bài tập làm quen'
    ],
    objective: 'Hiểu được Python là gì, cách hoạt động của thông dịch Python, nắm vững cú pháp hàm print(), cách ghi chú (comment) và các quy tắc thụt lề (indentation).',
    theory: `Python là ngôn ngữ lập trình bậc cao, thông dịch, hướng đối tượng và đa năng do Guido van Rossum tạo ra vào năm 1991.

1. Vì sao nên học Python?
- Cú pháp trong sáng, gần gũi với tiếng Anh tự nhiên.
- Mã nguồn ngắn hơn 3-5 lần so với C++ hay Java.
- Hệ sinh thái thư viện khổng lồ (Web, Data Science, AI, Automation).

2. Cấu trúc chương trình Python:
- Python không dùng dấu chấm phẩy (;) ở cuối câu lệnh.
- Không dùng cặp ngoặc nhọn {} để phân khối lệnh, mà dùng quy tắc "Thụt lề" (Indentation - thường là 4 khoảng trắng).

3. Ghi chú (Comments):
- Ghi chú 1 dòng dùng dấu thăng #
- Ghi chú nhiều dòng dùng cặp 3 dấu nháy đơn ''' hoặc nháy kép """`,
    syntax: `# Ghi chú 1 dòng
print(*objects, sep=' ', end='\\n')

"""
Ghi chú nhiều dòng
Dùng để chú thích tài liệu (docstring)
"""`,
    example: `# Ví dụ chương trình Python đầu tiên
print("Xin chào các bạn sinh viên!")
print("Học Python", "thật", "thú vị", sep=" - ")
print("Dòng 1", end=" ---> ")
print("Dòng 2 cùng hàng")`,
    explanation: `- Dòng 1: Ghi chú bắt đầu bằng #, Python sẽ bỏ qua khi thực thi.
- Dòng 2: print("...") in chuỗi ký tự ra màn hình, tự động xuống dòng.
- Dòng 3: Tham số sep=" - " quy định ký tự ngăn cách giữa các đối số, kết quả: "Học Python - thật - thú vị".
- Dòng 4: Tham số end=" ---> " thay thế ký tự xuống dòng mặc định '\\n' bằng chuỗi mũi tên.
- Dòng 5: Tiếp tục in ngay sau mũi tên ở dòng 4 mà không bị rớt dòng.`,
    commonMistakes: [
      'Gõ sai chính tả tên hàm: Print() thay vì print() (Python phân biệt chữ hoa, chữ thường).',
      'Quên dấu đóng nháy kép hoặc đóng ngoặc đơn gây ra SyntaxError: EOL while scanning string literal.',
      'Thụt lề bừa bãi ở các lệnh tuần tự gây ra IndentationError: unexpected indent.'
    ],
    exercise: 'Viết chương trình in ra thông tin giới thiệu bản thân gồm: Họ tên, Trường đang học, và lời chào đến môn Cơ sở lập trình, mỗi thông tin trên một dòng riêng biệt.',
    sampleCode: `print("Họ và tên: Nguyễn Văn An")
print("Trường: Đại học Công nghệ")
print("Lời chào: Rất vui được học môn Cơ sở lập trình Python!")`,
    reviewQuestions: [
      {
        question: 'Ký tự nào được dùng để ghi chú (comment) một dòng trong Python?',
        options: ['//', '/*', '#', '--'],
        answer: 2,
        explanation: 'Trong Python, dấu thăng # được dùng để mở đầu một dòng ghi chú.'
      },
      {
        question: 'Giá trị mặc định của tham số sep trong hàm print() là gì?',
        options: ['Không có gì', 'Dấu phẩy', 'Dấu khoảng trắng (space)', 'Ký tự xuống dòng (\\n)'],
        answer: 2,
        explanation: 'Mặc định giữa các đối số trong hàm print() sẽ được ngăn cách bởi 1 dấu cách.'
      }
    ]
  },
  {
    id: 2,
    stage: 'Giai đoạn 1: Nền tảng Python',
    title: 'Biến và kiểu dữ liệu',
    topics: [
      'Khai báo biến',
      'Quy tắc đặt tên biến',
      'int, float, str, bool',
      'Ép kiểu dữ liệu',
      'Hàm type()',
      'Các phép chuyển đổi kiểu dữ liệu'
    ],
    objective: 'Nắm vững cách khai báo biến, các quy tắc đặt tên hợp lệ (snake_case), phân biệt 4 kiểu dữ liệu cơ sở (int, float, str, bool) và sử dụng hàm type() cùng các hàm ép kiểu.',
    theory: `1. Khái niệm Biến:
Biến là ô nhớ trong bộ nhớ RAM dùng để lưu trữ giá trị. Trong Python, biến được tạo ra ngay khi bạn gán giá trị cho nó bằng toán tử = (không cần khai báo kiểu trước).

2. Quy tắc đặt tên biến:
- Chỉ chứa chữ cái (a-z, A-Z), chữ số (0-9) và dấu gạch dưới (_).
- KHÔNG được bắt đầu bằng chữ số (Ví dụ: 1diem là SAI).
- KHÔNG trùng với từ khóa của Python (như if, for, while, def,...).
- Phân biệt chữ hoa chữ thường (diem, Diem, DIEM là 3 biến khác nhau).
- Khuyên dùng chuẩn snake_case: ho_ten, diem_trung_binh.

3. Bốn kiểu dữ liệu cơ sở:
- int: Số nguyên (ví dụ: 10, -5, 0).
- float: Số thực dấu phẩy động (ví dụ: 3.14, -0.5, 2.0).
- str: Chuỗi văn bản, đặt trong nháy đơn ' ' hoặc nháy kép " " (ví dụ: "Python").
- bool: Logic chỉ có 2 giá trị: True hoặc False (viết hoa chữ cái đầu).`,
    syntax: `ten_bien = gia_tri
type(ten_bien) # Kiểm tra kiểu dữ liệu

# Ép kiểu dữ liệu (Type casting)
int("123")   # Chuyển chuỗi sang số nguyên
float("3.5") # Chuyển chuỗi sang số thực
str(100)     # Chuyển số sang chuỗi
bool(1)      # True (0 là False, khác 0 là True)`,
    example: `tuoi = 20
diem_tb = 8.75
ho_ten = "Trần Thị Mai"
da_tot_nghiep = False

print("Kiểu của tuoi:", type(tuoi))
print("Kiểu của diem_tb:", type(diem_tb))

# Ép kiểu
chuoi_so = "50"
tong = int(chuoi_so) + tuoi
print("Tổng tuổi và số:", tong)`,
    explanation: `- tuoi = 20: Python tự gán kiểu int.
- diem_tb = 8.75: Có phần thập phân nên kiểu float.
- da_tot_nghiep = False: Giá trị boolean logic.
- type(tuoi): Trả về <class 'int'>.
- int(chuoi_so): Chuyển chuỗi "50" thành số 50 trước khi cộng với 20, ra kết quả 70.`,
    commonMistakes: [
      'Cộng trực tiếp chuỗi với số: "Điểm: " + 10 gây ra TypeError: can only concatenate str (not "int") to str. Phải đổi thành "Điểm: " + str(10).',
      'Ép chuỗi số thực sang int trực tiếp: int("3.14") sẽ gây ValueError! Cần ép int(float("3.14")).',
      'Viết thường giá trị boolean: true hoặc false thay vì True / False.'
    ],
    exercise: 'Tạo 4 biến: ten_mon_hoc (str), so_tin_chi (int), diem_kiem_tra (float), qua_mon (bool). In thông tin và kiểu dữ liệu của từng biến bằng hàm type().',
    sampleCode: `ten_mon_hoc = "Cơ sở lập trình"
so_tin_chi = 3
diem_kiem_tra = 9.25
qua_mon = True

print(ten_mon_hoc, type(ten_mon_hoc))
print(so_tin_chi, type(so_tin_chi))
print(diem_kiem_tra, type(diem_kiem_tra))
print(qua_mon, type(qua_mon))`,
    reviewQuestions: [
      {
        question: 'Tên biến nào sau đây là KHÔNG hợp lệ trong Python?',
        options: ['_tong_diem', 'diem_toan', '2_nam_hoc', 'sinhVien1'],
        answer: 2,
        explanation: 'Tên biến không được phép bắt đầu bằng ký tự số (2_nam_hoc).'
      },
      {
        question: 'Kết quả của type(4 / 2) trong Python 3 là gì?',
        options: ["<class 'int'>", "<class 'float'>", "<class 'number'>", "<class 'double'>"],
        answer: 1,
        explanation: 'Phép chia đơn / trong Python luôn trả về số thực (float), 4 / 2 ra 2.0.'
      }
    ]
  },
  {
    id: 3,
    stage: 'Giai đoạn 1: Nền tảng Python',
    title: 'Toán tử',
    topics: [
      'Toán tử số học',
      'Toán tử so sánh',
      'Toán tử logic',
      'Toán tử gán',
      'Toán tử thành viên',
      'Thứ tự ưu tiên toán tử',
      'Biểu thức toán học trong Python'
    ],
    objective: 'Làm chủ các nhóm toán tử trong Python: số học (+, -, *, /, //, %, **), so sánh (==, !=, >, <, >=, <=), logic (and, or, not), gán và toán tử thành viên in / not in cùng quy tắc ưu tiên toán tử PEMDAS.',
    theory: `1. Toán tử số học:
+ (Cộng), - (Trừ), * (Nhân), / (Chia thực ra float)
// (Chia nguyên - bỏ phần thập phân)
% (Chia lấy dư - modulo)
** (Lũy thừa: 2 ** 3 = 8)

2. Toán tử so sánh (Kết quả luôn là bool: True/False):
== (Bằng), != (Khác), > (Lớn hơn), < (Nhỏ hơn), >= (Lớn hơn hoặc bằng), <= (Nhỏ hơn hoặc bằng).

3. Toán tử logic:
- and: True khi cả hai vế đều True.
- or: True khi có ít nhất một vế True.
- not: Đảo ngược giá trị logic (not True là False).

4. Toán tử gán rút gọn:
+=, -=, *=, /=, //=, %=, **=
(Ví dụ: x += 5 tương đương x = x + 5)

5. Toán tử thành viên (Membership):
in (Có nằm trong), not in (Không nằm trong).

6. Thứ tự ưu tiên (PEMDAS):
Ngoặc () -> Lũy thừa ** -> Nhân/Chia/Chia dư (*, /, //, %) -> Cộng/Trừ (+, -) -> So sánh -> Logic not -> and -> or.`,
    syntax: `a + b; a - b; a * b; a / b; a // b; a % b; a ** b
x == y; x != y; x >= y
dieukien_1 and dieukien_2
dieukien_1 or dieukien_2
not dieukien
pt in danh_sach`,
    example: `x = 17
y = 5

print("Chia thực:", x / y)      # 3.4
print("Chia nguyên:", x // y)   # 3
print("Chia dư:", x % y)        # 2
print("Lũy thừa:", 2 ** 4)      # 16

diem = 8.5
co_hoc_bong = (diem >= 8.0) and (diem <= 10.0)
print("Đạt học bổng:", co_hoc_bong)

chuoi = "Khoa CNTT"
print("CNTT" in chuoi)          # True`,
    explanation: `- 17 // 5 = 3 vì phần nguyên lớn nhất không vượt quá 3.4 là 3.
- 17 % 5 = 2 vì 17 = 5 * 3 + 2.
- (diem >= 8.0) là True và (diem <= 10.0) là True -> True and True ra True.
- "CNTT" in chuoi trả về True vì chuỗi con "CNTT" có xuất hiện trong "Khoa CNTT".`,
    commonMistakes: [
      'Nhầm lẫn giữa toán tử gán = và toán tử so sánh bằng ==. Ví dụ viết if x = 5: sẽ báo lỗi cú pháp.',
      'Quên dấu ngoặc khi tính biểu thức phức tạp: a + b / 2 sẽ tính b / 2 trước, muốn tính trung bình cộng phải viết (a + b) / 2.',
      'Toán tử lũy thừa trong Python là ** chứ không phải dấu mũ ^ (^ là phép XOR bitwise).'
    ],
    exercise: 'Cho số nguyên giây t = 3672. Hãy viết chương trình dùng toán tử // và % để tính và in ra số giờ, số phút và số giây tương ứng.',
    sampleCode: `t = 3672
gio = t // 3600
phut = (t % 3600) // 60
giay = t % 60

print(f"{t} giây = {gio} giờ {phut} phút {giay} giây")`,
    reviewQuestions: [
      {
        question: 'Biểu thức 2 + 3 * 2 ** 2 có giá trị là bao nhiêu?',
        options: ['20', '14', '100', '16'],
        answer: 1,
        explanation: 'Thứ tự ưu tiên: 2 ** 2 = 4 -> 3 * 4 = 12 -> 2 + 12 = 14.'
      },
      {
        question: 'Kết quả của biểu thức 15 % 4 là gì?',
        options: ['3', '3.75', '4', '1'],
        answer: 0,
        explanation: '15 chia 4 được 3, dư 3.'
      }
    ]
  },
  {
    id: 4,
    stage: 'Giai đoạn 1: Nền tảng Python',
    title: 'Nhập và xuất dữ liệu',
    topics: [
      'Hàm input()',
      'Hàm print()',
      'Ép kiểu dữ liệu khi nhập',
      'Định dạng chuỗi f-string',
      'Định dạng số thập phân',
      'Xử lý dữ liệu nhập từ bàn phím'
    ],
    objective: 'Biết cách nhận dữ liệu từ người dùng bằng input(), ép kiểu số nguyên/số thực thích hợp và thành thạo kỹ thuật định dạng văn bản chuyên nghiệp với f-string.',
    theory: `1. Hàm input():
- Dùng để tạm dừng chương trình và chờ người dùng gõ dữ liệu rồi nhấn Enter.
- CỰC KỲ QUAN TRỌNG: input() LUÔN LUÔN trả về kiểu chuỗi (str), bất kể người dùng nhập số hay chữ!

2. Ép kiểu khi nhập số:
- Số nguyên: n = int(input("Nhập n: "))
- Số thực: x = float(input("Nhập x: "))

3. Xuất dữ liệu với f-string (Python 3.6+):
- Đặt chữ f ngay trước dấu nháy kép: f"Nội dung {ten_bien}".
- Có thể đặt bất kỳ biểu thức tính toán nào vào trong cặp ngoặc nhọn {}.
- Định dạng số thập phân: {so_thuc:.2f} (lấy 2 chữ số sau dấu phẩy).
- Định dạng độ rộng cột: {ten:20} hoặc {so:5d}.`,
    syntax: `du_lieu = input("Lời nhắc: ")
so_nguyen = int(input("Nhập số nguyên: "))
so_thuc = float(input("Nhập số thực: "))

# Định dạng f-string
f"Xin chào {ten}, bạn {tuoi} tuổi."
f"Điểm làm tròn: {diem:.2f}"`,
    example: `ten = input("Nhập họ tên: ")
diem_toan = float(input("Nhập điểm Toán: "))
diem_tin = float(input("Nhập điểm Tin: "))

dtb = (diem_toan + diem_tin) / 2

print(f"Học sinh: {ten.upper()}")
print(f"Điểm trung bình: {dtb:.2f}")
print(f"Phần trăm hoàn thành: {85.5678:.1f}%")`,
    explanation: `- input("Nhập họ tên: "): Nhận tên từ người dùng dạng chuỗi.
- float(input(...)): Nhận chuỗi số và chuyển đổi thành số thực để tính toán.
- dtb = (diem_toan + diem_tin) / 2: Tính trung bình cộng.
- {dtb:.2f}: Định dạng hiển thị đúng 2 chữ số thập phân (ví dụ 8.333333 -> 8.33).`,
    commonMistakes: [
      'Quên ép kiểu khi nhập số: a = input(); b = input(); print(a + b) sẽ ghép chuỗi thay vì tính tổng (ví dụ nhập 5 và 3 ra "53" chứ không ra 8).',
      'Viết sai cú pháp f-string: Quên chữ f trước dấu nháy, ví dụ "{ten}" sẽ in nguyên văn chữ {ten}.',
      'Người dùng nhập chữ khi đang dùng int(input()), gây ra ValueError: invalid literal for int().'
    ],
    exercise: 'Viết chương trình nhập vào bán kính r của hình tròn (số thực). Tính và in ra chu vi và diện tích của hình tròn đó, làm tròn đến 2 chữ số thập phân (dùng PI = 3.14159).',
    sampleCode: `PI = 3.14159
r = float(input("Nhập bán kính r: "))

chu_vi = 2 * PI * r
dien_tich = PI * (r ** 2)

print(f"Bán kính: {r}")
print(f"Chu vi hình tròn: {chu_vi:.2f}")
print(f"Diện tích hình tròn: {dien_tich:.2f}")`,
    reviewQuestions: [
      {
        question: 'Nếu người dùng nhập số 10 vào lệnh a = input(), kiểu dữ liệu của a là gì?',
        options: ['int', 'float', 'str', 'number'],
        answer: 2,
        explanation: 'input() luôn trả về kiểu chuỗi (str).'
      },
      {
        question: 'Cú pháp f-string nào làm tròn số pi = 3.1415926 thành "3.14"?',
        options: ['f"{pi:2}"', 'f"{pi:.2f}"', 'f"{pi:float(2)}"', 'f"{round(2):pi}"'],
        answer: 1,
        explanation: 'Ký hiệu :.2f chỉ định lấy 2 chữ số phần thập phân kiểu float.'
      }
    ]
  },
  {
    id: 5,
    stage: 'Giai đoạn 2: Cấu trúc điều khiển',
    title: 'Cấu trúc rẽ nhánh (If - Else)',
    topics: [
      'if đơn',
      'if else',
      'if elif else',
      'Điều kiện lồng nhau',
      'Toán tử ba ngôi (Ternary operator)',
      'Bài toán phân loại và giải phương trình'
    ],
    objective: 'Hiểu bản chất dòng điều khiển rẽ nhánh, sử dụng linh hoạt câu lệnh if, if-else, if-elif-else, viết điều kiện lồng nhau và toán tử ba ngôi để giải quyết các bài toán phân loại và giải phương trình bậc nhất/bậc hai.',
    theory: `Cấu trúc rẽ nhánh cho phép chương trình lựa chọn thực thi các đoạn mã khác nhau dựa trên điều kiện đúng (True) hay sai (False).

1. Các dạng cấu trúc:
- if đơn: Chỉ thực hiện khối lệnh nếu điều kiện thỏa mãn.
- if - else: Thực hiện khối lệnh 1 nếu điều kiện True, ngược lại thực hiện khối lệnh 2.
- if - elif - else: Kiểm tra tuần tự nhiều điều kiện loại trừ lẫn nhau. Chỉ nhánh đầu tiên có điều kiện True được thực thi.

2. Quy tắc Thụt lề (Indentation):
Khối lệnh bên trong if/elif/else bắt buộc phải thụt lề vào trong (thường là 4 dấu cách) so với từ khóa if.

3. Toán tử ba ngôi (Ternary Operator):
Cú pháp: gia_tri_neu_dung if dieu_kien else gia_tri_neu_sai
Ví dụ: trang_thai = "Đậu" if diem >= 5.0 else "Rớt"`,
    syntax: `if dieu_kien_1:
    # Lệnh chạy khi dk1 đúng
elif dieu_kien_2:
    # Lệnh chạy khi dk2 đúng
else:
    # Lệnh chạy khi tất cả dk trên đều sai

# Toán tử ba ngôi
bien = bieu_thuc_1 if dieu_kien else bieu_thuc_2`,
    example: `diem = float(input("Nhập điểm tổng kết: "))

if diem < 0 or diem > 10:
    print("Điểm không hợp lệ!")
elif diem >= 9.0:
    xep_loai = "Xuất sắc"
elif diem >= 8.0:
    xep_loai = "Giỏi"
elif diem >= 6.5:
    xep_loai = "Khá"
elif diem >= 5.0:
    xep_loai = "Trung bình"
else:
    xep_loai = "Yếu"

print(f"Xếp loại: {xep_loai}")`,
    explanation: `- Dòng 3: Kiểm tra điểm ngoài miền [0, 10] trước để loại trừ dữ liệu sai.
- Dòng 5: Nếu điểm không lỗi, kiểm tra tiếp >= 9.0.
- Các dòng elif tiếp theo kiểm tra tuần tự từ cao xuống thấp. Nhờ tính loại trừ, khi lọt vào elif diem >= 8.0 thì chắc chắn điểm đã nhỏ hơn 9.0.
- Dòng 13: else xử lý tất cả trường hợp còn lại (< 5.0).`,
    commonMistakes: [
      'Quên dấu hai chấm : ở cuối dòng lệnh if, elif, else (Lỗi phổ biến nhất của người mới học).',
      'Sai thứ tự điều kiện trong if-elif: Nếu kiểm tra if diem >= 5.0 trước thì học sinh 9.5 điểm cũng sẽ bị xếp loại "Trung bình" vì điều kiện đầu tiên đã thỏa mãn!',
      'Thụt lề không đều (chỗ 2 dấu cách, chỗ 4 dấu cách) gây ra IndentationError.'
    ],
    exercise: 'Viết chương trình giải phương trình bậc nhất ax + b = 0 với a và b nhập từ bàn phím. Xét đầy đủ các trường hợp: vô số nghiệm (a=0, b=0), vô nghiệm (a=0, b!=0), và nghiệm duy nhất x = -b/a.',
    sampleCode: `a = float(input("Nhập hệ số a: "))
b = float(input("Nhập hệ số b: "))

if a == 0:
    if b == 0:
        print("Phương trình có vô số nghiệm.")
    else:
        print("Phương trình vô nghiệm.")
else:
    x = -b / a
    print(f"Phương trình có nghiệm duy nhất: x = {x:.2f}")`,
    reviewQuestions: [
      {
        question: 'Có bao nhiêu khối elif có thể xuất hiện sau một câu lệnh if?',
        options: ['Tối đa 1', 'Tối đa 5', 'Tối đa 10', 'Bao nhiêu cũng được (không giới hạn)'],
        answer: 3,
        explanation: 'Bạn có thể dùng bao nhiêu câu lệnh elif tùy ý sau một lệnh if.'
      },
      {
        question: 'Kết quả của: "Lớn" if 10 > 20 else "Nhỏ" là gì?',
        options: ['Lớn', 'Nhỏ', 'True', 'False'],
        answer: 1,
        explanation: 'Vì 10 > 20 là False nên nhận giá trị vế sau else là "Nhỏ".'
      }
    ]
  },
  {
    id: 6,
    stage: 'Giai đoạn 2: Cấu trúc điều khiển',
    title: 'Cấu trúc lặp (For và While)',
    topics: [
      'Vòng lặp for',
      'Vòng lặp while',
      'Hàm range()',
      'break và continue',
      'Vòng lặp lồng nhau',
      'Bảng cửu chương',
      'Các bài toán tính tổng, đếm và kiểm tra số'
    ],
    objective: 'Hiểu cơ chế lặp xác định (for qua range/chuỗi) và lặp không xác định (while với điều kiện), kiểm soát vòng lặp với break và continue, vận dụng vòng lặp lồng nhau để in bảng biểu và giải quyết các bài toán tích lũy, đếm.',
    theory: `1. Vòng lặp for:
Dùng khi biết trước số lần lặp hoặc duyệt qua một tập hợp dữ liệu.
Hàm range(start, stop, step):
- range(n): Từ 0 đến n-1.
- range(a, b): Từ a đến b-1.
- range(a, b, step): Bước nhảy step (có thể âm để đếm lùi).

2. Vòng lặp while:
Lặp liên tục chừng nào điều kiện logic vẫn còn True.
Rất quan trọng: Trong thân while phải có lệnh làm thay đổi điều kiện để tránh vòng lặp vô tận (infinite loop).

3. Lệnh điều khiển:
- break: Ngắt và thoát hẳn ra khỏi vòng lặp ngay lập tức.
- continue: Bỏ qua các lệnh còn lại của lần lặp hiện tại để chuyển sang lần lặp tiếp theo.

4. Vòng lặp lồng nhau (Nested loops):
Vòng lặp nằm bên trong một vòng lặp khác, thường dùng để xử lý ma trận hoặc bảng số 2 chiều.`,
    syntax: `# Vòng lặp for
for bien in range(start, stop, step):
    # Khối lệnh lặp

# Vòng lặp while
while dieu_kien:
    # Khối lệnh
    # Cập nhật biến đếm

# Thoát và bỏ qua
break; continue`,
    example: `# Tính tổng các số chẵn từ 1 đến 20
tong_chan = 0
for i in range(2, 21, 2):
    tong_chan += i
print("Tổng các số chẵn từ 1 đến 20:", tong_chan)

# Nhập số dương bằng vòng while (Validation)
while True:
    n = int(input("Nhập một số nguyên dương: "))
    if n > 0:
        print(f"Số bạn vừa nhập: {n}")
        break
    print("Sai rồi, vui lòng nhập lại!")`,
    explanation: `- range(2, 21, 2) sinh ra dãy: 2, 4, 6, ..., 20.
- tong_chan += i cộng dồn từng số vào biến tổng.
- while True tạo vòng lặp vô hạn, nhưng bên trong có lệnh if n > 0: break sẽ ngắt vòng lặp ngay khi nhập đúng số dương.`,
    commonMistakes: [
      'Quên cập nhật biến điều khiển trong while khiến vòng lặp chạy mãi mãi, làm đơ chương trình.',
      'Hiểu sai cận trên của hàm range: range(1, 10) chỉ dừng ở 9, không bao gồm 10.',
      'Đặt nhầm thụt lề của lệnh break khiến vòng lặp chỉ chạy duy nhất 1 lần rồi thoát luôn.'
    ],
    exercise: 'Viết chương trình in ra bảng cửu chương từ 2 đến 9 bằng vòng lặp lồng nhau (nested loop).',
    sampleCode: `for i in range(2, 10):
    print(f"--- BẢNG NHÂN {i} ---")
    for j in range(1, 11):
        print(f"{i} x {j:2d} = {i * j:2d}")
    print()`,
    reviewQuestions: [
      {
        question: 'Dãy số sinh bởi list(range(1, 10, 3)) là gì?',
        options: ['[1, 4, 7]', '[1, 4, 7, 10]', '[3, 6, 9]', '[1, 3, 6, 9]'],
        answer: 0,
        explanation: 'Bắt đầu từ 1, bước nhảy 3: 1, 4, 7. Số tiếp theo 10 đã bằng stop nên dừng lại.'
      },
      {
        question: 'Lệnh continue có tác dụng gì trong vòng lặp?',
        options: ['Thoát khỏi vòng lặp', 'Kết thúc chương trình', 'Bỏ qua lần lặp hiện tại và sang lần lặp kế tiếp', 'Khởi động lại vòng lặp từ đầu'],
        answer: 2,
        explanation: 'continue bỏ qua phần còn lại của thân vòng lặp hiện tại và chuyển sang vòng lặp kế tiếp.'
      }
    ]
  },
  {
    id: 7,
    stage: 'Giai đoạn 3: Cấu trúc dữ liệu',
    title: 'Chuỗi String',
    topics: [
      'Khai báo và truy cập chuỗi',
      'Cắt chuỗi slicing',
      'Duyệt chuỗi',
      'upper(), lower(), strip()',
      'split(), join(), replace()',
      'find(), count()',
      'Các bài toán xử lý chuỗi thực tế'
    ],
    objective: 'Hiểu tính chất bất biến (immutable) của chuỗi trong Python, thành thạo chỉ số index âm/dương, kỹ thuật cắt chuỗi slicing [start:stop:step] và làm chủ các phương thức xử lý chuỗi phổ biến.',
    theory: `1. Bản chất của Chuỗi (String):
- Chuỗi là tập hợp các ký tự có thứ tự, đánh số index từ 0 (từ trái qua) hoặc từ -1 (từ phải qua).
- BẤT BIẾN (Immutable): Không thể thay đổi trực tiếp ký tự của chuỗi bằng phép gán s[0] = 'A'.

2. Cắt chuỗi (Slicing):
Cú pháp: chuoi[start : stop : step]
- start: Vị trí bắt đầu (mặc định 0).
- stop: Vị trí kết thúc (không lấy phần tử tại stop).
- step: Bước nhảy (step = -1 dùng để đảo ngược chuỗi).

3. Các phương thức thông dụng:
- s.upper(), s.lower(): Đổi chữ hoa/thường.
- s.strip(): Cắt bỏ khoảng trắng thừa ở 2 đầu.
- s.split(sep): Tách chuỗi thành List các từ.
- sep.join(list): Nối các phần tử của List thành chuỗi.
- s.replace(old, new): Thay thế chuỗi con.
- s.find(sub): Tìm vị trí xuất hiện đầu tiên (-1 nếu không thấy).
- s.count(sub): Đếm số lần xuất hiện của chuỗi con.`,
    syntax: `s = "Lập trình Python"
s[0]         # Ký tự đầu tiên: 'L'
s[-1]        # Ký tự cuối cùng: 'n'
s[0:4]       # Cắt từ 0 đến 3: 'Lập '
s[::-1]      # Đảo ngược chuỗi
s.split(" ") # Tách từ`,
    example: `hoten_raw = "   nguyen van an   "
# Chuẩn hóa họ tên
hoten_clean = hoten_raw.strip().title()
print("Họ tên chuẩn hóa:", hoten_clean)

# Tách từ và đếm
words = hoten_clean.split()
print("Số từ:", len(words))
print("Tên:", words[-1])
print("Họ:", words[0])

# Đảo ngược chuỗi
s = "Python"
print("Đảo ngược:", s[::-1])`,
    explanation: `- hoten_raw.strip() bỏ khoảng trắng thừa ở 2 đầu.
- .title() viết hoa chữ cái đầu mỗi từ: "Nguyen Van An".
- .split() tách thành danh sách: ['Nguyen', 'Van', 'An'].
- words[-1] lấy phần tử cuối cùng chính là Tên.
- s[::-1] bước nhảy -1 duyệt từ cuối về đầu -> "nohtyP".`,
    commonMistakes: [
      'Cố gắng gán lại ký tự: s = "Hello"; s[0] = "h" gây ra TypeError: "str" object does not support item assignment.',
      'Quên rằng các phương thức chuỗi không thay đổi chuỗi gốc mà trả về chuỗi mới (s.upper() không làm s viết hoa nếu không gán s = s.upper()).',
      'Nhầm lẫn giữa split() (tách chuỗi thành List) và join() (nối List thành chuỗi).'
    ],
    exercise: 'Viết chương trình kiểm tra xem một chuỗi nhập vào có phải là chuỗi Palindrome (chuỗi đối xứng, đọc xuôi đọc ngược đều giống nhau) hay không, không phân biệt chữ hoa chữ thường và bỏ qua khoảng trắng.',
    sampleCode: `s = input("Nhập chuỗi cần kiểm tra: ")
# Bỏ khoảng trắng và chuyển chữ thường
s_clean = s.replace(" ", "").lower()

if s_clean == s_clean[::-1]:
    print(f'"{s}" là chuỗi đối xứng (Palindrome).')
else:
    print(f'"{s}" KHÔNG phải là chuỗi đối xứng.')`,
    reviewQuestions: [
      {
        question: 'Kết quả của "Python"[1:4] là gì?',
        options: ['"Pyt"', '"yth"', '"ytho"', '"tho"'],
        answer: 1,
        explanation: 'Index 1 là "y", index 2 là "t", index 3 là "h". Index 4 không lấy. Kết quả: "yth".'
      },
      {
        question: 'Phương thức nào nối danh sách ["A", "B", "C"] thành chuỗi "A-B-C"?',
        options: ['["A", "B", "C"].join("-")', '"-".join(["A", "B", "C"])', 'join("-", ["A", "B", "C"])', '"A-B-C".split("-")'],
        answer: 1,
        explanation: 'Cú pháp chuẩn trong Python là ky_tu_noi.join(danh_sach).'
      }
    ]
  },
  {
    id: 8,
    stage: 'Giai đoạn 3: Cấu trúc dữ liệu',
    title: 'List, Tuple, Set và Dictionary',
    topics: [
      'Khai báo và thao tác List',
      'Thêm, sửa, xóa phần tử trong List',
      'Duyệt và tìm kiếm',
      'Sắp xếp dữ liệu trong List',
      'Tuple (Bất biến)',
      'Set (Tập hợp duy nhất)',
      'Dictionary (Cặp key-value)',
      'List lồng nhau',
      'Các bài toán quản lý dữ liệu'
    ],
    objective: 'Nắm vững 4 cấu trúc dữ liệu cốt lõi trong Python: List (danh sách có thứ tự, thay đổi được), Tuple (danh sách bất biến), Set (tập hợp không trùng lặp) và Dictionary (bảng ánh xạ khóa-giá trị siêu tốc O(1)).',
    theory: `1. List (Danh sách [ ]):
- Có thứ tự, cho phép trùng lặp, THAY ĐỔI ĐƯỢC (mutable).
- Thao tác: .append(x) (thêm cuối), .insert(i, x), .pop(i) (xóa theo vị trí), .remove(x) (xóa theo giá trị), .sort() (sắp xếp).

2. Tuple (Bộ dữ liệu ( )):
- Giống List nhưng BẤT BIẾN (không thể thêm/sửa/xóa sau khi tạo). Dùng lưu trữ dữ liệu an toàn, tọa độ, hằng số.

3. Set (Tập hợp { }):
- KHÔNG có thứ tự, KHÔNG chứa phần tử trùng lặp.
- Thao tác toán học: Hợp (|), Giao (&), Hiệu (-). Rất hữu ích để lọc bỏ các phần tử trùng.

4. Dictionary (Từ điển {key: value}):
- Lưu trữ theo cặp Khóa (Key) : Giá trị (Value).
- Key là duy nhất và bất biến (thường là str hoặc int).
- Truy xuất cực nhanh: d[key] hoặc an toàn với d.get(key, default).`,
    syntax: `# Khai báo
my_list = [1, 2, 3]
my_tuple = (10, 20)
my_set = {1, 2, 2, 3}      # Ra {1, 2, 3}
my_dict = {"ma": "SV01", "ten": "An", "diem": 8.5}

# Truy xuất dict
my_dict["diem"] = 9.0     # Cập nhật
my_dict["lop"] = "K21"     # Thêm mới`,
    example: `# Quản lý điểm sinh viên với List of Dictionaries
lop_hoc = [
    {"ma": "SV01", "ten": "An", "diem": 8.5},
    {"ma": "SV02", "ten": "Bình", "diem": 9.2},
    {"ma": "SV03", "ten": "Cường", "diem": 6.8}
]

# Thêm 1 sinh viên mới
lop_hoc.append({"ma": "SV04", "ten": "Dung", "diem": 7.5})

# Tính điểm trung bình cả lớp
tong_diem = sum(sv["diem"] for sv in lop_hoc)
dtb_lop = tong_diem / len(lop_hoc)
print(f"Điểm trung bình lớp: {dtb_lop:.2f}")

# Tìm sinh viên điểm cao nhất
thu_khoa = max(lop_hoc, key=lambda sv: sv["diem"])
print(f"Thủ khoa: {thu_khoa['ten']} ({thu_khoa['diem']} điểm)")`,
    explanation: `- lop_hoc là List chứa nhiều Dictionary. Đây là mô hình chuẩn để lưu bảng dữ liệu trong thực tế.
- sv["diem"] truy xuất vào giá trị điểm của từng sinh viên.
- max(lop_hoc, key=lambda sv: sv["diem"]) tìm phần tử Dictionary có thuộc tính "diem" lớn nhất.`,
    commonMistakes: [
      'Truy cập key không tồn tại trong dict: d["tuoi"] sẽ văng lỗi KeyError nếu dict không có key đó. Nên dùng d.get("tuoi", 0).',
      'Nhầm lẫn giữa List và Tuple: cố sửa tuple t[0] = 5 sẽ văng TypeError.',
      'Sử dụng gán tham chiếu: b = a (với a là List), khi thay đổi b thì a cũng bị đổi theo! Cần dùng b = a.copy().'
    ],
    exercise: 'Cho danh sách số nguyên chứa nhiều phần tử trùng lặp: nums = [1, 2, 3, 2, 4, 1, 5, 3, 6, 4]. Hãy dùng Set để loại bỏ các phần tử trùng và in ra danh sách đã lọc theo thứ tự tăng dần.',
    sampleCode: `nums = [1, 2, 3, 2, 4, 1, 5, 3, 6, 4]
# Dùng set loại trùng, rồi ép về list và sắp xếp
unique_sorted = sorted(list(set(nums)))

print("Danh sách gốc:", nums)
print("Danh sách duy nhất đã sắp xếp:", unique_sorted)`,
    reviewQuestions: [
      {
        question: 'Cấu trúc dữ liệu nào trong Python KHÔNG cho phép chứa các phần tử trùng lặp?',
        options: ['List', 'Tuple', 'Set', 'Dictionary Value'],
        answer: 2,
        explanation: 'Set là tập hợp các phần tử duy nhất, tự động loại bỏ trùng lặp.'
      },
      {
        question: 'Cách nào lấy giá trị của key "age" trong dict d một cách an toàn mà không bị lỗi KeyError?',
        options: ['d["age"]', 'd.get("age")', 'd.find("age")', 'd.read("age")'],
        answer: 1,
        explanation: 'd.get("age") trả về None (hoặc giá trị mặc định) nếu không tìm thấy key.'
      }
    ]
  },
  {
    id: 9,
    stage: 'Giai đoạn 4: Tư duy lập trình',
    title: 'Hàm (Function - def)',
    topics: [
      'Khái niệm hàm',
      'Khai báo và gọi hàm',
      'Tham số và đối số',
      'return và print trong hàm',
      'Tham số mặc định (Default arguments)',
      'Phạm vi biến Local và Global',
      'Hàm có nhiều tham số (*args, **kwargs)',
      'Chia chương trình thành các hàm nhỏ',
      'Thiết kế chương trình có cấu trúc'
    ],
    objective: 'Hiểu nguyên lý tái sử dụng mã nguồn (DRY - Don\'t Repeat Yourself), biết cách viết hàm với từ khóa def, phân biệt rõ ràng giữa print() và return, sử dụng tham số mặc định và phân biệt phạm vi biến cục bộ (local) / toàn cục (global).',
    theory: `1. Khái niệm Hàm (Function):
Hàm là một khối lệnh được đặt tên thực hiện một nhiệm vụ cụ thể, có thể tái sử dụng nhiều lần ở nhiều nơi trong chương trình.

2. Cú pháp định nghĩa:
Dùng từ khóa def theo sau là tên hàm và cặp ngoặc đơn chứa tham số.

3. return vs print:
- print(): Chỉ hiển thị kết quả ra màn hình cho người dùng xem, KHÔNG thể lưu kết quả để tính tiếp.
- return: Trả giá trị về cho nơi gọi hàm, kết thúc hàm ngay lập tức. Giá trị này có thể gán vào biến hoặc đưa vào biểu thức khác.

4. Tham số mặc định:
Cho phép gán sẵn giá trị cho tham số. Nếu người gọi không truyền thì lấy giá trị mặc định đó.
Lưu ý: Các tham số mặc định phải đặt ở CUỐI danh sách tham số.

5. Biến cục bộ (Local) và toàn cục (Global):
- Biến khai báo bên trong hàm chỉ tồn tại trong hàm đó (Local scope).
- Biến khai báo ngoài hàm có thể đọc ở mọi nơi (Global scope). Muốn sửa biến global trong hàm cần từ khóa global.`,
    syntax: `def ten_ham(tham_so_1, tham_so_2=gia_tri_mac_dinh):
    """Docstring chú thích hàm"""
    # Khối lệnh tính toán
    return ket_qua

# Gọi hàm
ket_qua = ten_ham(gia_tri_1)`,
    example: `def tinh_tien_dien(so_kwh, don_gia=2500):
    """Tính tiền điện dựa trên số kwh tiêu thụ"""
    if so_kwh < 0:
        return 0
    tien = so_kwh * don_gia
    # Giảm 10% nếu dùng trên 200 kwh
    if so_kwh > 200:
        tien *= 0.9
    return tien

# Gọi hàm với tham số mặc định
tien_1 = tinh_tien_dien(150)
print(f"Tiền điện hộ 1: {tien_1:,.0f} VNĐ")

# Gọi hàm với đơn giá riêng
tien_2 = tinh_tien_dien(250, don_gia=3000)
print(f"Tiền điện hộ 2: {tien_2:,.0f} VNĐ")`,
    explanation: `- def tinh_tien_dien(...): Khởi tạo hàm.
- don_gia=2500 là tham số mặc định.
- return tien trả giá trị số tiền về cho biến tien_1 và tien_2.
- : , .0f định dạng phân cách hàng nghìn bằng dấu phẩy cho đẹp mắt.`,
    commonMistakes: [
      'Quên return trong hàm: Nếu hàm không có return thì mặc định trả về giá trị None.',
      'Đặt tham số có giá trị mặc định đứng trước tham số thường: def f(a=1, b) sẽ gây SyntaxError: non-default argument follows default argument.',
      'Nhầm lẫn giữa print() và return: viết print(ket_qua) bên trong hàm rồi ra ngoài gán x = ten_ham() dẫn đến x nhận giá trị None.'
    ],
    exercise: 'Viết hàm is_prime(n) kiểm tra xem số nguyên n có phải số nguyên tố hay không (trả về True/False). Sau đó dùng hàm này để in ra tất cả các số nguyên tố từ 1 đến 50.',
    sampleCode: `def is_prime(n):
    if n < 2:
        return False
    for i in range(2, int(n ** 0.5) + 1):
        if n % i == 0:
            return False
    return True

print("Các số nguyên tố từ 1 đến 50 là:")
for num in range(1, 51):
    if is_prime(num):
        print(num, end=" ")
print()`,
    reviewQuestions: [
      {
        question: 'Nếu một hàm không có câu lệnh return thì giá trị trả về của hàm đó là gì?',
        options: ['0', 'False', '"" (chuỗi rỗng)', 'None'],
        answer: 3,
        explanation: 'Mọi hàm trong Python không có lệnh return rõ ràng sẽ mặc định trả về None.'
      },
      {
        question: 'Từ khóa nào cho phép thay đổi giá trị của một biến toàn cục ngay bên trong hàm?',
        options: ['static', 'global', 'extern', 'public'],
        answer: 1,
        explanation: 'Từ khóa global ten_bien cho phép hàm chỉnh sửa biến toàn cục.'
      }
    ]
  },
  {
    id: 10,
    stage: 'Giai đoạn 4: Tư duy lập trình',
    title: 'Đệ quy',
    topics: [
      'Khái niệm đệ quy',
      'Điều kiện dừng (Base Case)',
      'Trường hợp đệ quy (Recursive Case)',
      'Tính giai thừa',
      'Dãy số Fibonacci',
      'Tính tổng chữ số của số nguyên',
      'Ước chung lớn nhất (UCLN) bằng đệ quy Euclid',
      'Các bài toán đệ quy nâng cao'
    ],
    objective: 'Hiểu bản chất đệ quy (hàm gọi lại chính nó), cơ chế Call Stack, nắm chắc 2 thành phần bắt buộc: Điểm dừng (Base case) và Bước đệ quy (Recursive case) để giải quyết các bài toán chia để trị kinh điển.',
    theory: `1. Khái niệm Đệ quy (Recursion):
Đệ quy là phương pháp lập trình trong đó một hàm tự gọi lại chính nó với dữ liệu đầu vào nhỏ hơn, cho đến khi chạm tới điều kiện cơ sở.

2. Cấu trúc của một hàm đệ quy chuẩn:
- Trường hợp cơ sở (Base Case): Điều kiện để hàm DỪNG LẠI và trả về giá trị trực tiếp, không gọi đệ quy nữa. Nếu không có hoặc sai Base Case, chương trình sẽ rơi vào lặp vô tận gây lỗi RecursionError: maximum recursion depth exceeded.
- Bước đệ quy (Recursive Step): Gọi lại hàm với tham số tiến dần về trường hợp cơ sở.

3. Call Stack (Ngăn xếp cuộc gọi):
Mỗi lần gọi đệ quy, máy tính đẩy trạng thái hàm vào Call Stack. Khi chạm Base Case, các hàm lần lượt quay lui (backtrack) và lấy kết quả trả về.`,
    syntax: `def ham_de_quy(n):
    # 1. Base case (Điều kiện dừng)
    if n == dieu_kien_dung:
        return gia_tri_co_so
    
    # 2. Recursive step (Bước đệ quy)
    return ket_hop(n, ham_de_quy(n - 1))`,
    example: `# 1. Tính giai thừa n!
def giai_thua(n):
    if n <= 1:
        return 1
    return n * giai_thua(n - 1)

# 2. Thuật toán Euclid tìm UCLN
def ucln(a, b):
    if b == 0:
        return a
    return ucln(b, a % b)

print("5! =", giai_thua(5))     # 120
print("UCLN(48, 18) =", ucln(48, 18)) # 6`,
    explanation: `- Với giai_thua(5):
  5 * giai_thua(4)
  5 * (4 * giai_thua(3))
  5 * (4 * (3 * giai_thua(2)))
  5 * (4 * (3 * (2 * giai_thua(1))))
  Khi n = 1 -> chạm base case trả về 1.
  Thu lại: 5 * 4 * 3 * 2 * 1 = 120.`,
    commonMistakes: [
      'Quên Base Case hoặc điều kiện Base Case không bao giờ xảy ra khiến hàm đệ quy vô tận -> văng RecursionError.',
      'Bước gọi đệ quy không thu nhỏ bài toán (ví dụ gọi lại chính ham(n) thay vì ham(n-1)).',
      'Đệ quy tính Fibonacci ngây thơ fib(n) = fib(n-1) + fib(n-2) có độ phức tạp hàm mũ O(2^n), sẽ bị treo máy khi n >= 40.'
    ],
    exercise: 'Viết hàm đệ quy sum_digits(n) nhận vào số nguyên dương n và trả về tổng các chữ số của nó. Ví dụ sum_digits(12345) trả về 1 + 2 + 3 + 4 + 5 = 15.',
    sampleCode: `def sum_digits(n):
    if n < 10:
        return n
    return (n % 10) + sum_digits(n // 10)

n = 12345
print(f"Tổng chữ số của {n} là: {sum_digits(n)}")`,
    reviewQuestions: [
      {
        question: 'Lỗi RecursionError thường xảy ra khi nào?',
        options: ['Hàm chạy quá nhanh', 'Hàm thiếu điều kiện dừng (Base case) dẫn tới gọi vô tận', 'Hàm trả về số âm', 'Bộ nhớ RAM bị hỏng'],
        answer: 1,
        explanation: 'Khi thiếu điều kiện dừng, ngăn xếp Call Stack vượt quá giới hạn độ sâu đệ quy của Python.'
      },
      {
        question: 'Base case của bài toán tính giai thừa n! (với n >= 0) là gì?',
        options: ['n == 1 hoặc n == 0 return 1', 'n == 2 return 2', 'n == 10 return 10', 'Không có điều kiện dừng'],
        answer: 0,
        explanation: 'Quy ước 0! = 1 và 1! = 1 là điểm dừng của bài toán tính giai thừa.'
      }
    ]
  },
  {
    id: 11,
    stage: 'Giai đoạn 5: Kỹ thuật lập trình',
    title: 'Xử lý ngoại lệ (Try - Except)',
    topics: [
      'SyntaxError, TypeError, ValueError, ZeroDivisionError',
      'Cấu trúc try và except',
      'Bắt nhiều ngoại lệ',
      'else và finally',
      'Chủ động ném lỗi với raise',
      'Kiểm tra và xử lý dữ liệu đầu vào không hợp lệ'
    ],
    objective: 'Biết cách xây dựng chương trình an toàn, chống sập (crash) khi người dùng nhập sai dữ liệu hoặc phát sinh sự cố trong lúc thực thi bằng khối lệnh try - except - else - finally.',
    theory: `1. Ngoại lệ (Exception) là gì?
Ngoại lệ là lỗi xảy ra trong quá trình chương trình đang chạy (Runtime error) làm gián đoạn luồng thực thi bình thường.

2. Các loại lỗi thường gặp:
- ValueError: Giá trị không hợp lệ (ví dụ: int("abc")).
- ZeroDivisionError: Phép chia cho số 0 (10 / 0).
- TypeError: Sai kiểu dữ liệu (ví dụ: "5" + 2).
- IndexError: Truy cập index vượt quá độ dài danh sách.
- KeyError: Truy cập key không có trong Dictionary.

3. Khối lệnh xử lý try - except - else - finally:
- try: Chứa đoạn mã có nguy cơ phát sinh lỗi.
- except TenLoi: Bắt và xử lý lỗi cụ thể, giúp chương trình không bị sập.
- else: Chỉ chạy khi khối try KHÔNG xảy ra bất kỳ lỗi nào.
- finally: LUÔN LUÔN CHẠY dù có lỗi hay không (thường dùng để dọn dẹp, đóng file, ngắt kết nối).

4. Từ khóa raise:
Dùng để chủ động tạo ra một ngoại lệ khi dữ liệu vi phạm logic nghiệp vụ.`,
    syntax: `try:
    # Đoạn code có thể lỗi
    x = int(input())
except ValueError:
    # Xử lý khi nhập sai kiểu
    print("Vui lòng nhập số nguyên!")
except ZeroDivisionError:
    # Xử lý khi chia 0
    print("Không thể chia cho 0!")
except Exception as e:
    # Bắt tất cả lỗi còn lại
    print("Lỗi phát sinh:", e)
else:
    # Chạy khi không có lỗi
    print("Thành công")
finally:
    # Luôn luôn chạy
    print("Kết thúc phiên làm việc")`,
    example: `def chia_an_toan():
    while True:
        try:
            a = float(input("Nhập số bị chia a: "))
            b = float(input("Nhập số chia b: "))
            kq = a / b
        except ValueError:
            print("❌ Lỗi: Bạn phải nhập ký tự số!")
        except ZeroDivisionError:
            print("❌ Lỗi: Số chia b không được bằng 0!")
        else:
            print(f"✅ Kết quả: {a} / {b} = {kq:.2f}")
            break
        finally:
            print("--- Thử lại lần lặp ---")

chia_an_toan()`,
    explanation: `- Nếu người dùng nhập "abc", khối try văng ValueError, lập tức nhảy vào except ValueError mà không làm sập console.
- Nếu nhập b = 0, nhảy vào except ZeroDivisionError.
- Nếu nhập đúng số, khối else chạy in kết quả và thực hiện lệnh break để kết thúc vòng lặp.`,
    commonMistakes: [
      'Dùng except: trống trơn (bare except) mà không chỉ rõ tên lỗi: Điều này sẽ nuốt cả lệnh ngắt Ctrl+C (KeyboardInterrupt) và các lỗi cú pháp tiềm ẩn.',
      'Đặt mã không có nguy cơ lỗi vào trong khối try: Chỉ nên đặt những dòng có khả năng gây lỗi vào try để code rõ ràng.',
      'Quên rằng khối finally luôn chạy kể cả khi trong try hoặc except có lệnh return.'
    ],
    exercise: 'Viết hàm nhap_tuoi() yêu cầu người dùng nhập tuổi. Nếu người dùng nhập chữ hoặc nhập tuổi âm (< 0) hoặc tuổi quá lớn (> 120), hãy chủ động thông báo lỗi và yêu cầu nhập lại cho đến khi hợp lệ.',
    sampleCode: `def nhap_tuoi():
    while True:
        try:
            tuoi = int(input("Nhập số tuổi của bạn: "))
            if tuoi < 0 or tuoi > 120:
                raise ValueError("Tuổi phải nằm trong khoảng từ 0 đến 120.")
            return tuoi
        except ValueError as e:
            print(f"❌ Dữ liệu không hợp lệ ({e}). Vui lòng nhập lại!")

tuoi_hop_le = nhap_tuoi()
print(f"Tuổi của bạn được xác nhận là: {tuoi_hop_le}")`,
    reviewQuestions: [
      {
        question: 'Khối lệnh nào trong try-except-else-finally LUÔN LUÔN được thực thi?',
        options: ['try', 'except', 'else', 'finally'],
        answer: 3,
        explanation: 'Khối finally luôn được chạy dù chương trình có lỗi hay không có lỗi.'
      },
      {
        question: 'Khi thực hiện lệnh int("xyz"), Python sẽ phát sinh ngoại lệ nào?',
        options: ['TypeError', 'ValueError', 'SyntaxError', 'NameError'],
        answer: 1,
        explanation: 'ValueError xảy ra khi giá trị truyền vào không thể chuyển đổi thành kiểu đích.'
      }
    ]
  },
  {
    id: 12,
    stage: 'Giai đoạn 5: Kỹ thuật lập trình',
    title: 'Làm việc với File và lập trình nâng cao',
    topics: [
      'Đọc và ghi file văn bản TXT',
      'Câu lệnh with open()',
      'Đọc ghi file CSV cơ bản',
      'Import và Module trong Python',
      'Tổ chức chương trình thành nhiều file',
      'Debugging và dò lỗi',
      'Thuật toán tìm kiếm (Tuyến tính & Nhị phân)',
      'Thuật toán sắp xếp (Bubble Sort, Selection Sort)',
      'Tối ưu code cơ bản'
    ],
    objective: 'Nắm vững kỹ thuật lưu trữ dữ liệu vĩnh viễn vào tệp tin (File I/O) với cú pháp an toàn with open(), hiểu cách tổ chức module và nắm bắt tư duy thuật toán tìm kiếm/sắp xếp cơ bản.',
    theory: `1. Làm việc với File (File I/O):
Các chế độ mở file (Mode):
- 'r' (Read): Đọc file (file phải tồn tại sẵn).
- 'w' (Write): Ghi file mới (xóa sạch nội dung cũ nếu có).
- 'a' (Append): Ghi nối tiếp vào cuối file hiện có.

2. Cú pháp an toàn with open():
Luôn sử dụng with open(filename, mode, encoding='utf-8') as f:
Trình quản lý ngữ cảnh (Context Manager) sẽ TỰ ĐỘNG đóng file khi thoát khỏi khối with, kể cả khi có ngoại lệ xảy ra.

3. Thuật toán tìm kiếm & sắp xếp cơ bản:
- Linear Search: Duyệt từng phần tử từ đầu đến cuối O(N).
- Binary Search: Tìm kiếm trên danh sách đã sắp xếp bằng cách chia đôi O(log N).
- Bubble Sort: So sánh và đổi chỗ 2 phần tử liền kề để đưa phần tử lớn nhất về cuối.`,
    syntax: `# Ghi file
with open("data.txt", "w", encoding="utf-8") as f:
    f.write("Dòng 1\\n")
    f.write("Dòng 2\\n")

# Đọc file
with open("data.txt", "r", encoding="utf-8") as f:
    for line in f:
        print(line.strip())`,
    example: `# Ví dụ thuật toán tìm kiếm nhị phân (Binary Search)
def binary_search(arr, target):
    left = 0
    right = len(arr) - 1
    
    while left <= right:
        mid = (left + right) // 2
        if arr[mid] == target:
            return mid  # Tìm thấy tại index mid
        elif arr[mid] < target:
            left = mid + 1
        else:
            right = mid - 1
    return -1  # Không tìm thấy

numbers = [2, 5, 8, 12, 16, 23, 38, 56, 72, 91]
vi_tri = binary_search(numbers, 23)
print(f"Số 23 nằm tại chỉ số: {vi_tri}")`,
    explanation: `- Thuật toán tìm kiếm nhị phân chia đôi danh sách sau mỗi vòng lặp.
- Mảng bắt buộc phải được sắp xếp tăng dần từ trước.
- Với 1 triệu phần tử, Binary Search chỉ mất tối đa ~20 phép so sánh để tìm ra đáp số!`,
    commonMistakes: [
      'Mở file bằng f = open() nhưng quên f.close(), dẫn đến lãng phí tài nguyên và dữ liệu chưa được xả (flush) xuống đĩa.',
      'Quên chỉ định encoding="utf-8" khi đọc/ghi tiếng Việt có dấu dẫn đến lỗi UnicodeDecodeError trên Windows.',
      'Áp dụng tìm kiếm nhị phân (Binary Search) trên mảng chưa được sắp xếp.'
    ],
    exercise: 'Viết chương trình thực hiện thuật toán sắp xếp nổi bọt (Bubble Sort) để sắp xếp danh sách [64, 34, 25, 12, 22, 11, 90] theo thứ tự tăng dần.',
    sampleCode: `def bubble_sort(arr):
    n = len(arr)
    for i in range(n):
        swapped = False
        for j in range(0, n - i - 1):
            if arr[j] > arr[j + 1]:
                arr[j], arr[j + 1] = arr[j + 1], arr[j]
                swapped = True
        if not swapped:
            break
    return arr

a = [64, 34, 25, 12, 22, 11, 90]
print("Mảng ban đầu:", a)
print("Sau khi sắp xếp Bubble Sort:", bubble_sort(a))`,
    reviewQuestions: [
      {
        question: 'Vì sao nên dùng cú pháp with open(...) thay vì open() thông thường?',
        options: ['Giúp chương trình chạy nhanh gấp 10 lần', 'Tự động đóng file an toàn sau khi làm việc xong', 'Chỉ with open mới ghi được tiếng Việt', 'Không có sự khác biệt'],
        answer: 1,
        explanation: 'with open() tự động gọi f.close() kể cả khi có ngoại lệ phát sinh.'
      },
      {
        question: 'Độ phức tạp thời gian của thuật toán tìm kiếm nhị phân (Binary Search) là bao nhiêu?',
        options: ['O(N)', 'O(N^2)', 'O(log N)', 'O(1)'],
        answer: 2,
        explanation: 'Mỗi bước chia đôi không gian tìm kiếm nên độ phức tạp là O(log N).'
      }
    ]
  },
  {
    id: 13,
    stage: 'Giai đoạn 6: Đồ án tổng hợp',
    title: 'Đồ án: Quản lý sinh viên Python',
    topics: [
      'Kiến trúc phần mềm CLI hướng chức năng',
      '1. Thêm sinh viên mới',
      '2. Hiển thị danh sách bảng sinh viên',
      '3. Tìm kiếm theo mã hoặc họ tên',
      '4. Cập nhật thông tin sinh viên',
      '5. Xóa sinh viên theo mã',
      '6. Tính điểm trung bình và xếp loại học lực',
      '7. Tìm thủ khoa và á khoa',
      '8. Sắp xếp danh sách theo điểm giảm dần',
      '9. Thống kê tỷ lệ học lực',
      '10. Lưu và đọc dữ liệu từ File'
    ],
    objective: 'Vận dụng tổng hợp toàn bộ kiến thức của 12 chương (Biến, Kiểu dữ liệu, Toán tử, If-Else, Vòng lặp While-Menu, List of Dictionaries, Functions, Try-Except và File I/O) để tự tay xây dựng một phần mềm console hoàn chỉnh quản lý sinh viên.',
    theory: `CHƯƠNG ĐẶC BIỆT: ĐỒ ÁN TỐT NGHIỆP MÔN CƠ SỞ LẬP TRÌNH

Trong đồ án này, bạn sẽ đóng vai trò một kỹ sư phần mềm xây dựng hệ thống "QUẢN LÝ SINH VIÊN PYTHON".

Cấu trúc kiến trúc chương trình:
1. Cấu trúc dữ liệu:
   Mỗi sinh viên được biểu diễn bằng một Dictionary:
   {
       "ma": "SV001",
       "ten": "Nguyễn Văn An",
       "tuoi": 20,
       "diem": 8.5,
       "hoc_luc": "Giỏi"
   }
   Toàn bộ danh sách sinh viên được quản lý bằng một List các Dictionary: danh_sach_sv = []

2. Thiết kế hàm (Modular design):
   - nhap_so_hop_le(prompt, min_val, max_val): Hàm tiện ích kiểm tra dữ liệu với try-except.
   - them_sinh_vien(): Nhập mã, tên, tuổi, điểm và append vào list.
   - hien_thi_danh_sach(): Định dạng bảng cột chuyên nghiệp.
   - tim_kiem_sinh_vien(): Tìm theo mã hoặc từ khóa tên.
   - sua_sinh_vien(): Tìm và cập nhật thông tin.
   - xoa_sinh_vien(): Xóa sinh viên theo mã.
   - thong_ke_hoc_luc(): Đếm số lượng Giỏi, Khá, Trung bình.
   - luu_file() & doc_file(): Ghi và đọc dữ liệu từ tệp tin txt/csv.
   - main(): Vòng lặp while True hiển thị menu và điều phối chương trình.`,
    syntax: `# Mô hình vòng lặp Menu chính
def main():
    while True:
        hien_thi_menu()
        chon = input("Chọn chức năng (1-10): ")
        if chon == '1':
            them_sinh_vien()
        elif chon == '0':
            print("Tạm biệt!")
            break`,
    example: `# MÃ NGUỒN CỐT LÕI CỦA ĐỒ ÁN QUẢN LÝ SINH VIÊN
danh_sach_sv = [
    {"ma": "SV01", "ten": "Nguyễn Văn An", "tuoi": 20, "diem": 8.5, "hoc_luc": "Giỏi"},
    {"ma": "SV02", "ten": "Trần Thị Bình", "tuoi": 19, "diem": 9.2, "hoc_luc": "Xuất sắc"},
    {"ma": "SV03", "ten": "Lê Văn Cường", "tuoi": 21, "diem": 6.0, "hoc_luc": "Trung bình"}
]

def xep_loai(diem):
    if diem >= 9.0: return "Xuất sắc"
    if diem >= 8.0: return "Giỏi"
    if diem >= 6.5: return "Khá"
    if diem >= 5.0: return "Trung bình"
    return "Yếu"

def hien_thi():
    print("=" * 65)
    print(f"{'MÃ SV':<8} | {'HỌ VÀ TÊN':<20} | {'TUỔI':<5} | {'ĐIỂM':<5} | {'HỌC LỰC':<10}")
    print("-" * 65)
    for sv in danh_sach_sv:
        print(f"{sv['ma']:<8} | {sv['ten']:<20} | {sv['tuoi']:<5} | {sv['diem']:<5.1f} | {sv['hoc_luc']:<10}")
    print("=" * 65)

hien_thi()`,
    explanation: `- {'MÃ SV':<8}: Căn lề trái 8 ký tự giúp bảng dữ liệu luôn thẳng hàng ngay ngắn trên terminal.
- Hàm xep_loai(diem) tự động phân hạng dựa trên điểm số.
- Toàn bộ đồ án kết hợp hài hòa cấu trúc dữ liệu List + Dict + Hàm + Xử lý ngoại lệ.`,
    commonMistakes: [
      'Cho phép thêm trùng mã sinh viên (Mã sinh viên phải là định danh duy nhất - Unique Identifier).',
      'Không kiểm tra lỗi nhập số khiến chương trình bị văng khi người dùng gõ chữ vào ô điểm.',
      'Sửa thông tin trực tiếp mà không kiểm tra xem sinh viên đó có tồn tại trong danh sách hay không.'
    ],
    exercise: 'Hoàn thiện chức năng tìm kiếm sinh viên theo tên: Nhập một từ khóa bất kỳ, in ra tất cả sinh viên có tên chứa từ khóa đó (không phân biệt chữ hoa, chữ thường).',
    sampleCode: `def tim_kiem_theo_ten(danh_sach, tu_khoa):
    tu_khoa = tu_khoa.lower().strip()
    ket_qua = [sv for sv in danh_sach if tu_khoa in sv["ten"].lower()]
    return ket_qua

# Thử nghiệm tìm kiếm
kq = tim_kiem_theo_ten(danh_sach_sv, "văn")
print(f"Tìm thấy {len(kq)} sinh viên chứa từ khóa 'văn':")
for sv in kq:
    print(f"- {sv['ma']}: {sv['ten']} ({sv['diem']} điểm)")`,
    reviewQuestions: [
      {
        question: 'Tại sao nên phân tách chương trình quản lý sinh viên thành nhiều hàm def riêng biệt?',
        options: ['Để code trông dài hơn', 'Để dễ kiểm tra lỗi, bảo trì và tái sử dụng mã nguồn', 'Bắt buộc bởi hệ điều hành', 'Để chương trình không tốn dung lượng RAM'],
        answer: 1,
        explanation: 'Tổ chức mã nguồn theo hàm (modular design) giúp code mạch lạc, dễ mở rộng, kiểm thử và bảo trì.'
      },
      {
        question: 'Cấu trúc dữ liệu nào phù hợp nhất để lưu trữ thông tin một sinh viên gồm mã, tên, tuổi, điểm?',
        options: ['Chỉ một số nguyên int', 'Dictionary với các khóa (key) tương ứng', 'Một biến chuỗi str duy nhất', 'Một biến boolean'],
        answer: 1,
        explanation: 'Dictionary cho phép lưu trữ nhiều trường thông tin có tên khóa rõ ràng và truy xuất O(1).'
      }
    ]
  }
];
