// src/data/exercises.js
export const exercises = [
  {
    id: 1,
    chapterId: 1,
    title: 'In thông điệp chào mừng',
    difficulty: 'Dễ', // Dễ | Trung bình | Khó
    description: 'Viết chương trình Python in ra đúng 2 dòng chữ:\nDòng 1: "Xin chào Python!"\nDòng 2: "Học lập trình thật dễ!"',
    initialCode: `# Viết code của bạn ở đây\n`,
    hint: 'Sử dụng 2 lệnh print() riêng biệt.',
    testCases: [
      {
        input: '',
        expectedOutput: 'Xin chào Python!\nHọc lập trình thật dễ!',
        description: 'Kiểm tra chuỗi đầu ra chính xác',
      },
    ],
  },
  {
    id: 2,
    chapterId: 2,
    title: 'Tính diện tích hình chữ nhật',
    difficulty: 'Dễ',
    description: 'Nhập vào 2 số thực a và b (chiều dài và chiều rộng hình chữ nhật). Hãy in ra diện tích của nó.',
    initialCode: `a = float(input())\nb = float(input())\n# Tính và in ra diện tích:\n`,
    hint: 'Diện tích = chiều dài * chiều rộng',
    testCases: [
      {
        input: '5\n4',
        expectedOutput: '20.0',
        description: 'a = 5, b = 4 -> 20.0',
      },
      {
        input: '2.5\n4',
        expectedOutput: '10.0',
        description: 'a = 2.5, b = 4 -> 10.0',
      },
    ],
  },
  {
    id: 3,
    chapterId: 3,
    title: 'Chia lấy dư và chia nguyên',
    difficulty: 'Dễ',
    description: 'Nhập vào 2 số nguyên a và b. In ra trên 2 dòng:\nDòng 1: Kết quả phép chia nguyên a // b\nDòng 2: Kết quả phép chia dư a % b',
    initialCode: `a = int(input())\nb = int(input())\n`,
    hint: 'Sử dụng toán tử // và %',
    testCases: [
      {
        input: '17\n5',
        expectedOutput: '3\n2',
        description: '17 chia 5 được 3 dư 2',
      },
    ],
  },
  {
    id: 4,
    chapterId: 5,
    title: 'Kiểm tra chẵn lẻ',
    difficulty: 'Dễ',
    description: 'Nhập vào một số nguyên n. Nếu n là số chẵn, in ra "CHAN", nếu n là số lẻ, in ra "LE".',
    initialCode: `n = int(input())\n`,
    hint: 'Kiểm tra n % 2 == 0',
    testCases: [
      {
        input: '8',
        expectedOutput: 'CHAN',
        description: '8 là số chẵn',
      },
      {
        input: '15',
        expectedOutput: 'LE',
        description: '15 là số lẻ',
      },
    ],
  },
  {
    id: 5,
    chapterId: 5,
    title: 'Tìm số lớn nhất trong 3 số',
    difficulty: 'Trung bình',
    description: 'Nhập vào 3 số nguyên a, b, c mỗi số trên một dòng. In ra số lớn nhất trong 3 số.',
    initialCode: `a = int(input())\nb = int(input())\nc = int(input())\n`,
    hint: 'Dùng câu lệnh if-elif-else hoặc hàm max()',
    testCases: [
      {
        input: '5\n12\n8',
        expectedOutput: '12',
        description: 'Max của 5, 12, 8 là 12',
      },
      {
        input: '99\n10\n45',
        expectedOutput: '99',
        description: 'Max là 99',
      },
    ],
  },
  {
    id: 6,
    chapterId: 6,
    title: 'Tính tổng từ 1 đến N',
    difficulty: 'Dễ',
    description: 'Nhập vào số nguyên dương n. Sử dụng vòng lặp để tính tổng S = 1 + 2 + 3 + ... + n và in ra S.',
    initialCode: `n = int(input())\n`,
    hint: 'Dùng vòng lặp for i in range(1, n + 1) hoặc công thức n * (n + 1) // 2',
    testCases: [
      {
        input: '10',
        expectedOutput: '55',
        description: 'Tổng từ 1 đến 10 là 55',
      },
      {
        input: '100',
        expectedOutput: '5050',
        description: 'Tổng từ 1 đến 100 là 5050',
      },
    ],
  },
  {
    id: 7,
    chapterId: 6,
    title: 'In bảng cửu chương N',
    difficulty: 'Trung bình',
    description: 'Nhập vào số nguyên n (1 <= n <= 9). In ra bảng nhân n từ 1 đến 10 theo định dạng:\nn x 1 = ...\n...\nn x 10 = ...',
    initialCode: `n = int(input())\n`,
    hint: 'for i in range(1, 11): print(f"{n} x {i} = {n * i}")',
    testCases: [
      {
        input: '3',
        expectedOutput: '3 x 1 = 3\n3 x 2 = 6\n3 x 3 = 9\n3 x 4 = 12\n3 x 5 = 15\n3 x 6 = 18\n3 x 7 = 21\n3 x 8 = 24\n3 x 9 = 27\n3 x 10 = 30',
        description: 'Bảng nhân 3',
      },
    ],
  },
  {
    id: 8,
    chapterId: 7,
    title: 'Đảo ngược chuỗi ký tự',
    difficulty: 'Dễ',
    description: 'Nhập vào một chuỗi ký tự s. In ra chuỗi đảo ngược của s.',
    initialCode: `s = input()\n`,
    hint: 'Có thể dùng slicing s[::-1]',
    testCases: [
      {
        input: 'python',
        expectedOutput: 'nohtyp',
        description: 'Đảo ngược "python"',
      },
      {
        input: 'lap trinh',
        expectedOutput: 'hnirt pal',
        description: 'Đảo ngược chuỗi có dấu cách',
      },
    ],
  },
  {
    id: 9,
    chapterId: 8,
    title: 'Tìm số lớn nhất và nhỏ nhất trong danh sách',
    difficulty: 'Trung bình',
    description: 'Dòng đầu nhập số lượng phần tử N. N dòng tiếp theo mỗi dòng là một số nguyên. Hãy in ra số lớn nhất và số nhỏ nhất cách nhau một khoảng trắng.',
    initialCode: `n = int(input())\narr = [int(input()) for _ in range(n)]\n`,
    hint: 'Sử dụng max(arr) và min(arr)',
    testCases: [
      {
        input: '5\n10\n4\n25\n7\n3',
        expectedOutput: '25 3',
        description: 'Lớn nhất 25, nhỏ nhất 3',
      },
    ],
  },
  {
    id: 10,
    chapterId: 9,
    title: 'Hàm kiểm tra số nguyên tố',
    difficulty: 'Trung bình',
    description: 'Nhập vào một số nguyên n. Nếu n là số nguyên tố in ra "YES", ngược lại in ra "NO". (Số nguyên tố là số nguyên lớn hơn 1 chỉ chia hết cho 1 và chính nó).',
    initialCode: `n = int(input())\n# Định nghĩa hàm và kiểm tra:\n`,
    hint: 'Số < 2 không là số nguyên tố. Chạy vòng lặp từ 2 đến căn bậc 2 của n.',
    testCases: [
      {
        input: '17',
        expectedOutput: 'YES',
        description: '17 là số nguyên tố',
      },
      {
        input: '1',
        expectedOutput: 'NO',
        description: '1 không là số nguyên tố',
      },
      {
        input: '10',
        expectedOutput: 'NO',
        description: '10 chia hết cho 2 và 5',
      },
    ],
  },
  {
    id: 11,
    chapterId: 10,
    title: 'Tính giai thừa bằng đệ quy',
    difficulty: 'Khó',
    description: 'Viết hàm đệ quy factorial(n) tính n! (0 <= n <= 15). Nhập n và in ra n!.',
    initialCode: `def factorial(n):\n    # Đệ quy tại đây\n    pass\n\nn = int(input())\nprint(factorial(n))\n`,
    hint: 'Trường hợp cơ sở: if n <= 1: return 1. Ngược lại: return n * factorial(n - 1)',
    testCases: [
      {
        input: '5',
        expectedOutput: '120',
        description: '5! = 120',
      },
      {
        input: '0',
        expectedOutput: '1',
        description: '0! = 1',
      },
    ],
  },
  {
    id: 12,
    chapterId: 11,
    title: 'Phép chia an toàn với ngoại lệ',
    difficulty: 'Trung bình',
    description: 'Nhập 2 số a và b. In ra kết quả phép chia float a / b làm tròn đến 2 chữ số thập phân dạng "{:.2f}". Nếu b == 0, in ra "KHONG THE CHIA CHO 0".',
    initialCode: `try:\n    a = float(input())\n    b = float(input())\n    # Thực hiện phép chia an toàn\nexcept ZeroDivisionError:\n    print("KHONG THE CHIA CHO 0")\n`,
    hint: 'Dùng try-except ZeroDivisionError',
    testCases: [
      {
        input: '10\n3',
        expectedOutput: '3.33',
        description: '10 / 3 = 3.33',
      },
      {
        input: '7\n0',
        expectedOutput: 'KHONG THE CHIA CHO 0',
        description: 'Bắt lỗi chia cho 0',
      },
    ],
  },
];
