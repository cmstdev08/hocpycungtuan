// src/data/quizzes.js
export const quizzes = [
  {
    id: 1,
    chapterId: 1,
    question: 'Ai là người sáng lập ra ngôn ngữ lập trình Python?',
    options: [
      'Guido van Rossum',
      'Dennis Ritchie',
      'James Gosling',
      'Bjarne Stroustrup'
    ],
    answer: 0,
    explanation: 'Python được tạo ra bởi Guido van Rossum và phát hành lần đầu vào năm 1991.',
  },
  {
    id: 2,
    chapterId: 1,
    question: 'Hàm nào trong Python dùng để xuất dữ liệu ra màn hình console?',
    options: [
      'echo()',
      'print()',
      'console.log()',
      'printf()'
    ],
    answer: 1,
    explanation: 'Trong Python, hàm print() được dùng để in thông tin ra màn hình.',
  },
  {
    id: 3,
    chapterId: 2,
    question: 'Kết quả của type(3.14) trong Python là gì?',
    options: [
      "<class 'int'>",
      "<class 'double'>",
      "<class 'float'>",
      "<class 'number'>"
    ],
    answer: 2,
    explanation: 'Trong Python, số thực có kiểu dữ liệu là float.',
  },
  {
    id: 4,
    chapterId: 3,
    question: 'Kết quả của biểu thức 19 // 4 trong Python là gì?',
    options: [
      '4.75',
      '4',
      '3',
      '5'
    ],
    answer: 1,
    explanation: 'Toán tử // là phép chia lấy phần nguyên. 19 // 4 = 4.',
  },
  {
    id: 5,
    chapterId: 4,
    question: 'Giá trị trả về mặc định của hàm input() là kiểu dữ liệu nào?',
    options: [
      'int',
      'float',
      'str (chuỗi ký tự)',
      'bool'
    ],
    answer: 2,
    explanation: 'Hàm input() luôn trả về kiểu str. Muốn tính toán phải ép kiểu như int() hoặc float().',
  },
  {
    id: 6,
    chapterId: 5,
    question: 'Từ khóa nào dùng để kiểm tra điều kiện phụ tiếp theo sau "if"?',
    options: [
      'else if',
      'elif',
      'elseif',
      'then'
    ],
    answer: 1,
    explanation: 'Python sử dụng cú pháp `elif` thay cho `else if` như trong C/Java.',
  },
  {
    id: 7,
    chapterId: 6,
    question: 'Lệnh range(1, 6) sẽ sinh ra các giá trị nào?',
    options: [
      '1, 2, 3, 4, 5, 6',
      '1, 2, 3, 4, 5',
      '0, 1, 2, 3, 4, 5',
      '2, 3, 4, 5'
    ],
    answer: 1,
    explanation: 'range(start, stop) sẽ chạy từ start đến stop - 1. Do đó range(1, 6) gồm: 1, 2, 3, 4, 5.',
  },
  {
    id: 8,
    chapterId: 7,
    question: 'Cú pháp nào sau đây dùng để lấy chuỗi đảo ngược của chuỗi s?',
    options: [
      's.reverse()',
      's[::-1]',
      's[-1:0]',
      'reverse(s)'
    ],
    answer: 1,
    explanation: 'Cú pháp cắt chuỗi (string slice) s[::-1] với step -1 sẽ trả về chuỗi đảo ngược.',
  },
  {
    id: 9,
    chapterId: 8,
    question: 'Phương thức nào dùng để thêm một phần tử vào cuối danh sách (List)?',
    options: [
      'push()',
      'insert_last()',
      'append()',
      'add()'
    ],
    answer: 2,
    explanation: 'Trong Python, danh sách sử dụng phương thức .append(x) để thêm phần tử vào cuối list.',
  },
  {
    id: 10,
    chapterId: 9,
    question: 'Từ khóa nào dùng để định nghĩa một hàm trong Python?',
    options: [
      'function',
      'def',
      'fn',
      'func'
    ],
    answer: 1,
    explanation: 'Python dùng từ khóa `def` (viết tắt của define) để định nghĩa một hàm.',
  },
  {
    id: 11,
    chapterId: 10,
    question: 'Yếu tố quan trọng nhất để hàm đệ quy không bị lặp vô tận (RecursionError) là gì?',
    options: [
      'Biến toàn cục',
      'Trường hợp cơ sở (Base case) để dừng',
      'Vòng lặp while',
      'Ép kiểu dữ liệu'
    ],
    answer: 1,
    explanation: 'Hàm đệ quy luôn phải có ít nhất một Base Case (điều kiện dừng) để tránh việc gọi hàm vô hạn.',
  },
  {
    id: 12,
    chapterId: 11,
    question: 'Khối lệnh nào trong try-except luôn luôn được thực thi dù có lỗi hay không?',
    options: [
      'except',
      'else',
      'finally',
      'catch'
    ],
    answer: 2,
    explanation: 'Khối `finally` luôn luôn chạy, thường được dùng để đóng tệp, giải phóng tài nguyên.',
  },
];
