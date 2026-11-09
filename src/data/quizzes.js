// src/data/quizzes.js
// Bộ câu hỏi trắc nghiệm chuẩn hóa cho 13 chương học môn Cơ sở lập trình Python
export const quizzes = [
  // CHƯƠNG 1
  {
    id: 1,
    chapterId: 1,
    question: 'Ai là người sáng lập ra ngôn ngữ lập trình Python và phát hành lần đầu vào năm nào?',
    options: [
      'Guido van Rossum (1991)',
      'Dennis Ritchie (1972)',
      'James Gosling (1995)',
      'Bjarne Stroustrup (1983)'
    ],
    answer: 0,
    explanation: 'Python được tạo ra bởi Guido van Rossum tại Hà Lan và phát hành lần đầu vào năm 1991.'
  },
  {
    id: 2,
    chapterId: 1,
    question: 'Tham số nào trong hàm print() quy định ký tự nằm giữa các đối số được in ra?',
    options: ['end', 'sep', 'split', 'divider'],
    answer: 1,
    explanation: 'Tham số sep (viết tắt của separator) quy định ký tự ngăn cách giữa các đối số trong hàm print(). Mặc định là 1 dấu khoảng trắng.'
  },

  // CHƯƠNG 2
  {
    id: 3,
    chapterId: 2,
    question: 'Tên biến nào sau đây là HỢP LỆ theo quy tắc đặt tên của Python?',
    options: ['2_sinh_vien', 'diem-thi', '_ho_va_ten', 'class'],
    answer: 2,
    explanation: 'Tên biến chỉ chứa chữ cái, chữ số và dấu gạch dưới _, không bắt đầu bằng số, không chứa dấu gạch nối (-) và không trùng từ khóa (như class). Do đó _ho_va_ten là hợp lệ.'
  },
  {
    id: 4,
    chapterId: 2,
    question: 'Kết quả của type(10 / 2) trong Python 3 là gì?',
    options: ["<class 'int'>", "<class 'float'>", "<class 'double'>", "<class 'number'>"],
    answer: 1,
    explanation: 'Toán tử chia đơn / trong Python luôn trả về số thực kiểu float (10 / 2 ra 5.0).'
  },

  // CHƯƠNG 3
  {
    id: 5,
    chapterId: 3,
    question: 'Biểu thức 23 // 5 và 23 % 5 lần lượt cho kết quả là gì?',
    options: ['4 và 3', '4.6 và 3', '3 và 4', '4 và 0'],
    answer: 0,
    explanation: '23 chia 5 được phần nguyên là 4 (23 // 5 = 4) và phần dư là 3 (23 % 5 = 3).'
  },
  {
    id: 6,
    chapterId: 3,
    question: 'Thứ tự ưu tiên tính toán của biểu thức: 3 + 2 * 2 ** 3 là gì?',
    options: [
      'Cộng -> Nhân -> Lũy thừa (kết quả 1000)',
      'Lũy thừa -> Nhân -> Cộng (kết quả 19)',
      'Nhân -> Lũy thừa -> Cộng (kết quả 35)',
      'Tính tuần tự từ trái sang phải'
    ],
    answer: 1,
    explanation: 'Quy tắc PEMDAS: Lũy thừa 2 ** 3 = 8 trước, sau đó nhân 2 * 8 = 16, cuối cùng cộng 3 + 16 = 19.'
  },

  // CHƯƠNG 4
  {
    id: 7,
    chapterId: 4,
    question: 'Hàm input() trong Python mặc định luôn trả về giá trị thuộc kiểu dữ liệu nào?',
    options: ['int', 'float', 'str (chuỗi ký tự)', 'bool'],
    answer: 2,
    explanation: 'Dù người dùng nhập số hay chữ, input() luôn đọc dữ liệu dưới dạng chuỗi (str). Cần tính toán thì phải ép kiểu như int() hoặc float().'
  },
  {
    id: 8,
    chapterId: 4,
    question: 'Cú pháp f-string nào định dạng số pi = 3.141592 thành hiển thị 2 chữ số thập phân?',
    options: ['f"{pi:2}"', 'f"{pi:.2f}"', 'f"{pi:round(2)}"', 'f"{round(pi, 2)}"'],
    answer: 1,
    explanation: 'Cú pháp chuẩn trong f-string là {bien:.2f} với 2 là số chữ số phần thập phân.'
  },

  // CHƯƠNG 5
  {
    id: 9,
    chapterId: 5,
    question: 'Cấu trúc rẽ nhánh nào sau đây là cú pháp đúng trong Python?',
    options: [
      'if điều_kiện then: ...',
      'if (điều_kiện) { ... }',
      'if điều_kiện: ... elif điều_kiện: ... else: ...',
      'switch (điều_kiện) case: ...'
    ],
    answer: 2,
    explanation: 'Python dùng if, elif, else kết thúc bằng dấu hai chấm : và thụt lề khối lệnh.'
  },
  {
    id: 10,
    chapterId: 5,
    question: 'Toán tử ba ngôi (Ternary Operator) "Đạt" if diem >= 5.0 else "Không đạt" với diem = 4.5 sẽ trả về gì?',
    options: ['Đạt', 'Không đạt', 'True', 'False'],
    answer: 1,
    explanation: 'Vì diem >= 5.0 là 4.5 >= 5.0 cho kết quả False nên biểu thức nhận nhánh sau else là "Không đạt".'
  },

  // CHƯƠNG 6
  {
    id: 11,
    chapterId: 6,
    question: 'Dãy số sinh bởi lệnh list(range(2, 11, 3)) là gì?',
    options: ['[2, 5, 8]', '[2, 5, 8, 11]', '[3, 6, 9]', '[2, 4, 6, 8, 10]'],
    answer: 0,
    explanation: 'Bắt đầu từ 2, cộng thêm 3 mỗi bước: 2 -> 5 -> 8. Giá trị kế tiếp là 11 đã chạm stop nên không lấy.'
  },
  {
    id: 12,
    chapterId: 6,
    question: 'Sự khác biệt chính giữa lệnh break và continue trong vòng lặp là gì?',
    options: [
      'break dừng toàn bộ chương trình, continue thoát vòng lặp',
      'break thoát hẳn khỏi vòng lặp, continue bỏ qua các lệnh còn lại của lần lặp hiện tại để sang lần lặp kế tiếp',
      'Hai lệnh có chức năng giống hệt nhau',
      'continue chỉ dùng được trong vòng lặp while'
    ],
    answer: 1,
    explanation: 'break ngắt và thoát vòng lặp ngay lập tức; continue chỉ bỏ qua phần còn lại của lượt lặp hiện tại.'
  },

  // CHƯƠNG 7
  {
    id: 13,
    chapterId: 7,
    question: 'Cho chuỗi s = "Python". Lệnh s[::-1] và s[1:4] lần lượt cho kết quả là gì?',
    options: ['"nohtyP" và "yth"', '"nohtyP" và "ytho"', '"Python" và "Pyt"', '"nohty" và "ytho"'],
    answer: 0,
    explanation: 's[::-1] bước nhảy -1 đảo ngược chuỗi thành "nohtyP". s[1:4] lấy các vị trí index 1, 2, 3 tương ứng "yth".'
  },
  {
    id: 14,
    chapterId: 7,
    question: 'Phương thức nào biến chuỗi "  hoc python  " thành "HOC PYTHON" và loại bỏ khoảng trắng 2 đầu?',
    options: [
      's.clean().upper()',
      's.strip().upper()',
      's.trim().capitalize()',
      's.upper().delete_space()'
    ],
    answer: 1,
    explanation: 's.strip() cắt khoảng trắng ở 2 đầu, sau đó .upper() chuyển toàn bộ thành chữ hoa.'
  },

  // CHƯƠNG 8
  {
    id: 15,
    chapterId: 8,
    question: 'Trong 4 cấu trúc dữ liệu sau, cấu trúc nào có tính chất BẤT BIẾN (Immutable - không thể thay đổi sau khi tạo)?',
    options: ['List (Danh sách)', 'Dictionary (Từ điển)', 'Tuple (Bộ dữ liệu)', 'Set (Tập hợp)'],
    answer: 2,
    explanation: 'Tuple là cấu trúc dữ liệu có thứ tự nhưng bất biến, không thể thêm, sửa, xóa phần tử.'
  },
  {
    id: 16,
    chapterId: 8,
    question: 'Cách nào truy xuất an toàn giá trị của key "diem" trong Dictionary d mà không bị lỗi KeyError nếu key không tồn tại?',
    options: ['d["diem"]', 'd.get("diem", 0)', 'd.find("diem")', 'd.read("diem")'],
    answer: 1,
    explanation: 'd.get("diem", 0) sẽ trả về 0 nếu "diem" không có trong từ điển, không văng lỗi KeyError.'
  },

  // CHƯƠNG 9
  {
    id: 17,
    chapterId: 9,
    question: 'Quy tắc nào sau đây là BẮT BUỘC khi định nghĩa hàm có tham số mặc định trong Python?',
    options: [
      'Tham số mặc định phải đặt ở đầu danh sách tham số',
      'Tham số mặc định phải đặt ở cuối cùng, sau các tham số thông thường',
      'Tất cả tham số đều phải có giá trị mặc định',
      'Không được phép dùng tham số mặc định trong Python'
    ],
    answer: 1,
    explanation: 'Trong Python, các tham số có giá trị mặc định bắt buộc phải đặt sau (ở cuối) các tham số không có giá trị mặc định.'
  },
  {
    id: 18,
    chapterId: 9,
    question: 'Từ khóa nào cho phép một hàm chỉnh sửa giá trị của một biến toàn cục (global variable)?',
    options: ['static', 'extern', 'global', 'public'],
    answer: 2,
    explanation: 'Từ khóa global ten_bien trong thân hàm cho phép gán lại giá trị cho biến toàn cục ở phạm vi ngoài.'
  },

  // CHƯƠNG 10
  {
    id: 19,
    chapterId: 10,
    question: 'Thành phần nào là BẮT BUỘC phải có trong mọi hàm đệ quy để tránh lỗi tràn ngăn xếp (RecursionError)?',
    options: [
      'Vòng lặp while True',
      'Trường hợp cơ sở (Base Case) để dừng đệ quy',
      'Biến toàn cục global',
      'Câu lệnh try-except'
    ],
    answer: 1,
    explanation: 'Hàm đệ quy luôn phải có Base Case (điều kiện dừng) để ngắt việc gọi hàm liên tục không hồi kết.'
  },

  // CHƯƠNG 11
  {
    id: 20,
    chapterId: 11,
    question: 'Trong cấu trúc try - except - else - finally, khối lệnh nào LUÔN LUÔN được thực thi dù có lỗi hay không?',
    options: ['try', 'except', 'else', 'finally'],
    answer: 3,
    explanation: 'Khối finally luôn được chạy, rất thích hợp cho việc đóng tệp tin hoặc giải phóng tài nguyên hệ thống.'
  },

  // CHƯƠNG 12
  {
    id: 21,
    chapterId: 12,
    question: 'Tại sao việc mở file bằng câu lệnh with open("data.txt", "r") as f: được xem là chuẩn mực tốt nhất?',
    options: [
      'Giúp chương trình đọc dữ liệu nhanh gấp 5 lần',
      'Tự động đóng file an toàn sau khi kết thúc khối with, kể cả khi có ngoại lệ xảy ra',
      'Tự động chuyển đổi file thành kiểu số nguyên',
      'Cho phép chỉnh sửa file mà không cần quyền ghi'
    ],
    answer: 1,
    explanation: 'Context Manager with open() tự động gọi f.close() khi luồng thực thi rời khỏi khối with.'
  },

  // CHƯƠNG 13
  {
    id: 22,
    chapterId: 13,
    question: 'Trong đồ án Quản lý sinh viên, mô hình cấu trúc dữ liệu nào phù hợp và tối ưu nhất để quản lý danh sách sinh viên gồm mã, tên, tuổi, điểm?',
    options: [
      'Một mảng 1 chiều chứa các số nguyên',
      'Một danh sách chứa các Dictionary (List of Dictionaries): mỗi phần tử là 1 sinh viên có các key ma, ten, tuoi, diem',
      'Một chuỗi ký tự dài chứa tất cả thông tin nối với nhau',
      'Một bộ Tuple bất biến'
    ],
    answer: 1,
    explanation: 'List of Dictionaries cho phép quản lý danh bạ linh hoạt, dễ dàng thêm/sửa/xóa và truy xuất theo tên trường rõ ràng.'
  }
];
