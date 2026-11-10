// Danh sách bài tập Chương 3: Toán tử và biểu thức tính toán (18 bài tập)
export const chapter3Exercises = [
  {
    id: 29,
    code: 'CH03_01',
    chapterId: 3,
    chapterName: 'Toán tử',
    title: 'Tổng, hiệu và tích của hai số nguyên',
    difficulty: 'Dễ',
    appliedKnowledge: 'Toán tử số học +, -, *.',
    description: 'Nhập vào 2 số nguyên a và b trên 2 dòng. Tính và in ra tổng (a+b) trên dòng 1, hiệu (a-b) trên dòng 2, và tích (a*b) trên dòng 3.',
    inputDesc: '2 dòng lần lượt chứa 2 số nguyên a và b.',
    outputDesc: '3 dòng lần lượt là tổng, hiệu, tích.',
    hint: 'print(a + b); print(a - b); print(a * b)',
    sampleSolution: 'a = int(input())\nb = int(input())\nprint(a + b)\nprint(a - b)\nprint(a * b)\n',
    initialCode: 'a = int(input())\nb = int(input())\n# In tổng, hiệu, tích\n',
    testCases: [
      { input: '12\n5', expectedOutput: '17\n7\n60', description: 'a = 12, b = 5' },
      { input: '20\n-3', expectedOutput: '17\n23\n-60', description: 'Số âm' }
    ]
  },
  {
    id: 30,
    code: 'CH03_02',
    chapterId: 3,
    chapterName: 'Toán tử',
    title: 'Phép chia thực và chia lấy phần nguyên',
    difficulty: 'Dễ',
    appliedKnowledge: 'Toán tử chia thực / và chia nguyên //.',
    description: 'Nhập vào 2 số nguyên dương a và b (b khác 0). In ra kết quả phép chia thực a / b (làm tròn 2 chữ số) trên dòng 1 và thương nguyên a // b trên dòng 2.',
    inputDesc: '2 dòng chứa 2 số nguyên dương a và b.',
    outputDesc: 'Dòng 1: kết quả chia thực làm tròn 2 số. Dòng 2: thương nguyên.',
    hint: 'round(a / b, 2) và a // b',
    sampleSolution: 'a = int(input())\nb = int(input())\nprint(round(a / b, 2))\nprint(a // b)\n',
    initialCode: 'a = int(input())\nb = int(input())\n# Chia thực và chia nguyên\n',
    testCases: [
      { input: '17\n5', expectedOutput: '3.4\n3', description: '17 chia 5' },
      { input: '20\n3', expectedOutput: '6.67\n6', description: '20 chia 3' }
    ]
  },
  {
    id: 31,
    code: 'CH03_03',
    chapterId: 3,
    chapterName: 'Toán tử',
    title: 'Toán tử chia lấy phần dư (%)',
    difficulty: 'Dễ',
    appliedKnowledge: 'Toán tử modulo (%).',
    description: 'Nhập một số nguyên dương n. In ra phần dư khi chia n cho 10 trên dòng 1, và phần dư khi chia n cho 2 trên dòng 2.',
    inputDesc: 'Một số nguyên dương n.',
    outputDesc: 'Dòng 1: n % 10. Dòng 2: n % 2.',
    hint: 'Dùng toán tử %',
    sampleSolution: 'n = int(input())\nprint(n % 10)\nprint(n % 2)\n',
    initialCode: 'n = int(input())\n# In n % 10 và n % 2\n',
    testCases: [
      { input: '47', expectedOutput: '7\n1', description: '47 % 10 = 7, 47 % 2 = 1' },
      { input: '100', expectedOutput: '0\n0', description: '100 chia hết cho 10 và 2' }
    ]
  },
  {
    id: 32,
    code: 'CH03_04',
    chapterId: 3,
    chapterName: 'Toán tử',
    title: 'Tính trung bình cộng 3 số thực',
    difficulty: 'Dễ',
    appliedKnowledge: 'Toán tử ngoặc tròn () và chia thực /.',
    description: 'Nhập vào 3 số thực x, y, z trên 3 dòng riêng biệt. Tính trung bình cộng của 3 số đó và in ra kết quả làm tròn 2 chữ số thập phân.',
    inputDesc: '3 dòng chứa 3 số thực.',
    outputDesc: 'Điểm trung bình cộng làm tròn 2 chữ số.',
    hint: 'tb = (x + y + z) / 3; in round(tb, 2)',
    sampleSolution: 'x = float(input())\ny = float(input())\nz = float(input())\nprint(round((x + y + z) / 3, 2))\n',
    initialCode: 'x = float(input())\ny = float(input())\nz = float(input())\n# Tính trung bình cộng\n',
    testCases: [
      { input: '8.0\n7.5\n9.2', expectedOutput: '8.23', description: 'TBC của 8.0, 7.5, 9.2' },
      { input: '10.0\n10.0\n10.0', expectedOutput: '10.0', description: 'Cả 3 điểm 10' }
    ]
  },
  {
    id: 33,
    code: 'CH03_05',
    chapterId: 3,
    chapterName: 'Toán tử',
    title: 'Khoảng cách Euclidean giữa 2 điểm',
    difficulty: 'Trung bình',
    appliedKnowledge: 'Công thức khoảng cách sqrt((x2-x1)^2 + (y2-y1)^2) bằng lũy thừa ** 0.5.',
    description: 'Nhập tọa độ 2 điểm trong mặt phẳng Oxy: x1, y1, x2, y2 trên 4 dòng riêng biệt. Tính khoảng cách Euclidean giữa 2 điểm và in ra làm tròn 2 chữ số thập phân.',
    inputDesc: '4 dòng tương ứng là x1, y1, x2, y2 (số thực).',
    outputDesc: 'Khoảng cách d làm tròn 2 chữ số.',
    hint: 'd = ((x2 - x1)**2 + (y2 - y1)**2) ** 0.5',
    sampleSolution: 'x1 = float(input())\ny1 = float(input())\nx2 = float(input())\ny2 = float(input())\nd = ((x2 - x1)**2 + (y2 - y1)**2) ** 0.5\nprint(round(d, 2))\n',
    initialCode: 'x1 = float(input())\ny1 = float(input())\nx2 = float(input())\ny2 = float(input())\n# Tính khoảng cách Euclidean\n',
    testCases: [
      { input: '0\n0\n3\n4', expectedOutput: '5.0', description: 'Điểm (0,0) và (3,4) khoảng cách 5.0' },
      { input: '1\n2\n4\n6', expectedOutput: '5.0', description: 'Điểm (1,2) và (4,6) khoảng cách 5.0' }
    ]
  },
  {
    id: 34,
    code: 'CH03_06',
    chapterId: 3,
    chapterName: 'Toán tử',
    title: 'Kiểm tra tính chia hết',
    difficulty: 'Dễ',
    appliedKnowledge: 'Toán tử so sánh bằng (==) và chia dư (%).',
    description: 'Nhập vào 2 số nguyên a và b (b khác 0). In ra True nếu a chia hết cho b, ngược lại in ra False.',
    inputDesc: '2 số nguyên a và b.',
    outputDesc: 'True hoặc False.',
    hint: 'print(a % b == 0)',
    sampleSolution: 'a = int(input())\nb = int(input())\nprint(a % b == 0)\n',
    initialCode: 'a = int(input())\nb = int(input())\n# Kiểm tra a chia hết cho b\n',
    testCases: [
      { input: '15\n5', expectedOutput: 'True', description: '15 chia hết cho 5' },
      { input: '14\n3', expectedOutput: 'False', description: '14 không chia hết cho 3' }
    ]
  },
  {
    id: 35,
    code: 'CH03_07',
    chapterId: 3,
    chapterName: 'Toán tử',
    title: 'Kiểm tra số chẵn bằng biểu thức quan hệ',
    difficulty: 'Dễ',
    appliedKnowledge: 'Biểu thức so sánh n % 2 == 0.',
    description: 'Nhập số nguyên n. Không dùng câu lệnh if, hãy in ra True nếu n là số chẵn, ngược lại in ra False.',
    inputDesc: 'Một số nguyên n.',
    outputDesc: 'True nếu chẵn, False nếu lẻ.',
    hint: 'print(n % 2 == 0)',
    sampleSolution: 'n = int(input())\nprint(n % 2 == 0)\n',
    initialCode: 'n = int(input())\n# In True nếu chẵn, False nếu lẻ\n',
    testCases: [
      { input: '8', expectedOutput: 'True', description: 'Số 8 là số chẵn' },
      { input: '13', expectedOutput: 'False', description: 'Số 13 là số lẻ' }
    ]
  },
  {
    id: 36,
    code: 'CH03_08',
    chapterId: 3,
    chapterName: 'Toán tử',
    title: 'Kiểm tra số nằm trong đoạn [10, 50]',
    difficulty: 'Trung bình',
    appliedKnowledge: 'Toán tử so sánh chuỗi liên hoàn 10 <= x <= 50 trong Python.',
    description: 'Nhập vào một số nguyên x. Kiểm tra xem x có thuộc đoạn từ 10 đến 50 hay không. In ra True nếu thuộc đoạn, ngược lại in ra False.',
    inputDesc: 'Một số nguyên x.',
    outputDesc: 'True hoặc False.',
    hint: 'Trong Python có thể viết gọn: print(10 <= x <= 50)',
    sampleSolution: 'x = int(input())\nprint(10 <= x <= 50)\n',
    initialCode: 'x = int(input())\n# Kiểm tra 10 <= x <= 50\n',
    testCases: [
      { input: '25', expectedOutput: 'True', description: '25 nằm trong [10, 50]' },
      { input: '9', expectedOutput: 'False', description: '9 ngoài khoảng' },
      { input: '50', expectedOutput: 'True', description: '50 ở biên' }
    ]
  },
  {
    id: 37,
    code: 'CH03_09',
    chapterId: 3,
    chapterName: 'Toán tử',
    title: 'Tính giá trị đa thức bậc hai P(x) = ax^2 + bx + c',
    difficulty: 'Trung bình',
    appliedKnowledge: 'Biểu thức đại số phức hợp.',
    description: 'Nhập vào 4 số thực a, b, c, x trên 4 dòng riêng biệt. Tính và in ra giá trị của đa thức P(x) = a * x^2 + b * x + c làm tròn 2 chữ số thập phân.',
    inputDesc: '4 dòng là 4 số thực a, b, c, x.',
    outputDesc: 'Giá trị P(x) làm tròn 2 chữ số.',
    hint: 'p = a * (x**2) + b * x + c',
    sampleSolution: 'a = float(input())\nb = float(input())\nc = float(input())\nx = float(input())\np = a * (x ** 2) + b * x + c\nprint(round(p, 2))\n',
    initialCode: 'a = float(input())\nb = float(input())\nc = float(input())\nx = float(input())\n# Tính P(x) = a*x^2 + b*x + c\n',
    testCases: [
      { input: '2.0\n-3.0\n1.0\n2.0', expectedOutput: '3.0', description: '2*(4) - 3*(2) + 1 = 3' },
      { input: '1.0\n0.0\n-4.0\n3.0', expectedOutput: '5.0', description: '3^2 - 4 = 5' }
    ]
  },
  {
    id: 38,
    code: 'CH03_10',
    chapterId: 3,
    chapterName: 'Toán tử',
    title: 'Toán tử gán tăng giảm kết hợp (+=, *=, -=)',
    difficulty: 'Trung bình',
    appliedKnowledge: 'Toán tử gán kết hợp.',
    description: 'Nhập một số nguyên n. Thực hiện các bước biến đổi liên tiếp:\n1. Cộng thêm 10 vào n (dùng += 10)\n2. Nhân đôi n (dùng *= 2)\n3. Trừ đi 6 từ n (dùng -= 6)\nIn ra giá trị cuối cùng của n.',
    inputDesc: 'Một số nguyên n.',
    outputDesc: 'Giá trị n sau 3 bước biến đổi.',
    hint: 'n += 10; n *= 2; n -= 6',
    sampleSolution: 'n = int(input())\nn += 10\nn *= 2\nn -= 6\nprint(n)\n',
    initialCode: 'n = int(input())\n# Thực hiện biến đổi n\n',
    testCases: [
      { input: '5', expectedOutput: '24', description: '(5+10)*2 - 6 = 24' },
      { input: '0', expectedOutput: '14', description: '(0+10)*2 - 6 = 14' }
    ]
  },
  {
    id: 39,
    code: 'CH03_11',
    chapterId: 3,
    chapterName: 'Toán tử',
    title: 'Toán tử logic AND: Chia hết cho cả 3 và 5',
    difficulty: 'Trung bình',
    appliedKnowledge: 'Toán tử logic and.',
    description: 'Nhập vào một số nguyên dương n. In ra True nếu n đồng thời chia hết cho cả 3 và 5 (tức chia hết cho 15), ngược lại in ra False.',
    inputDesc: 'Một số nguyên n.',
    outputDesc: 'True hoặc False.',
    hint: 'print((n % 3 == 0) and (n % 5 == 0))',
    sampleSolution: 'n = int(input())\nprint((n % 3 == 0) and (n % 5 == 0))\n',
    initialCode: 'n = int(input())\n# Kiểm tra chia hết cho cả 3 và 5\n',
    testCases: [
      { input: '30', expectedOutput: 'True', description: '30 chia hết cho cả 3 và 5' },
      { input: '25', expectedOutput: 'False', description: '25 chỉ chia hết cho 5' },
      { input: '12', expectedOutput: 'False', description: '12 chỉ chia hết cho 3' }
    ]
  },
  {
    id: 40,
    code: 'CH03_12',
    chapterId: 3,
    chapterName: 'Toán tử',
    title: 'Toán tử logic OR: Đủ điều kiện khen thưởng',
    difficulty: 'Trung bình',
    appliedKnowledge: 'Toán tử logic or.',
    description: 'Sinh viên đạt học bổng nếu điểm học tập (float) >= 9.0 HOẶC điểm rèn luyện (int) >= 95. Nhập điểm học tập trên dòng 1 và điểm rèn luyện trên dòng 2, in ra True nếu đủ điều kiện, ngược lại in False.',
    inputDesc: 'Dòng 1: điểm học tập (float). Dòng 2: điểm rèn luyện (int).',
    outputDesc: 'True hoặc False.',
    hint: 'print((diem_ht >= 9.0) or (diem_rl >= 95))',
    sampleSolution: 'ht = float(input())\nrl = int(input())\nprint((ht >= 9.0) or (rl >= 95))\n',
    initialCode: 'ht = float(input())\nrl = int(input())\n# Kiểm tra điều kiện học bổng\n',
    testCases: [
      { input: '8.5\n96', expectedOutput: 'True', description: 'Rèn luyện 96 đạt tiêu chuẩn' },
      { input: '9.2\n80', expectedOutput: 'True', description: 'Học tập 9.2 đạt tiêu chuẩn' },
      { input: '8.0\n85', expectedOutput: 'False', description: 'Không thỏa mãn điều kiện nào' }
    ]
  },
  {
    id: 41,
    code: 'CH03_13',
    chapterId: 3,
    chapterName: 'Toán tử',
    title: 'Toán tử NOT: Đảo ngược mệnh đề logic',
    difficulty: 'Dễ',
    appliedKnowledge: 'Toán tử logic not.',
    description: 'Nhập một số nguyên n. Sử dụng toán tử not để in ra True nếu n KHÔNG PHẢI là số 0, ngược lại in ra False.',
    inputDesc: 'Một số nguyên n.',
    outputDesc: 'True nếu n != 0, False nếu n == 0.',
    hint: 'print(not (n == 0))',
    sampleSolution: 'n = int(input())\nprint(not (n == 0))\n',
    initialCode: 'n = int(input())\n# Dùng not kiểm tra n != 0\n',
    testCases: [
      { input: '15', expectedOutput: 'True', description: '15 khác 0' },
      { input: '0', expectedOutput: 'False', description: 'Số 0' }
    ]
  },
  {
    id: 42,
    code: 'CH03_14',
    chapterId: 3,
    chapterName: 'Toán tử',
    title: 'Tính căn bậc hai với toán tử lũy thừa',
    difficulty: 'Trung bình',
    appliedKnowledge: 'Toán tử lũy thừa số mũ hữu tỉ ** 0.5.',
    description: 'Nhập vào một số thực dương x. Tính căn bậc hai của x bằng toán tử ** 0.5 (không dùng thư viện math). In kết quả làm tròn 2 chữ số thập phân.',
    inputDesc: 'Một số thực dương x.',
    outputDesc: 'Căn bậc hai của x làm tròn 2 chữ số.',
    hint: 'can = x ** 0.5; in round(can, 2)',
    sampleSolution: 'x = float(input())\nprint(round(x ** 0.5, 2))\n',
    initialCode: 'x = float(input())\n# Tính căn bậc 2 bằng ** 0.5\n',
    testCases: [
      { input: '25.0', expectedOutput: '5.0', description: 'Căn 25 là 5' },
      { input: '2.0', expectedOutput: '1.41', description: 'Căn 2 là 1.41' }
    ]
  },
  {
    id: 43,
    code: 'CH03_15',
    chapterId: 3,
    chapterName: 'Toán tử',
    title: 'Tính tiền lãi đơn ngân hàng',
    difficulty: 'Khó',
    appliedKnowledge: 'Công thức tài chính cơ bản: I = P * (r / 100) * t.',
    description: 'Nhập số tiền gốc P (nguyên), lãi suất năm r (% float) và thời gian gửi t (năm, float) trên 3 dòng. Hãy tính số tiền lãi nhận được: Lai = P * (r / 100) * t. In ra số tiền lãi dưới dạng số nguyên (làm tròn int).',
    inputDesc: '3 dòng: P, r, t.',
    outputDesc: 'Số tiền lãi (int).',
    hint: 'int(P * (r / 100) * t)',
    sampleSolution: 'p = int(input())\nr = float(input())\nt = float(input())\nlai = int(p * (r / 100) * t)\nprint(lai)\n',
    initialCode: 'p = int(input())\nr = float(input())\nt = float(input())\n# Tính tiền lãi đơn\n',
    testCases: [
      { input: '10000000\n6.5\n2.0', expectedOutput: '1300000', description: '10 triệu, lãi 6.5%, gửi 2 năm' },
      { input: '50000000\n7.0\n0.5', expectedOutput: '1750000', description: '50 triệu gửi 6 tháng' }
    ]
  },
  {
    id: 44,
    code: 'CH03_16',
    chapterId: 3,
    chapterName: 'Toán tử',
    title: 'Mô phỏng máy rút tiền ATM mệnh giá 100k và 50k',
    difficulty: 'Khó',
    appliedKnowledge: 'Toán tử chia nguyên // và chia dư % theo thứ tự ưu tiên.',
    description: 'Cần rút số tiền M (số nguyên chia hết cho 50.000). Máy ATM ưu tiên nhả nhiều tờ 100.000đ nhất có thể, phần dư đổi thành tờ 50.000đ. Hãy in ra số tờ 100k trên dòng 1 và số tờ 50k trên dòng 2.',
    inputDesc: 'Số tiền cần rút M (bội số của 50000).',
    outputDesc: 'Dòng 1: số tờ 100k. Dòng 2: số tờ 50k.',
    hint: 'to_100k = M // 100000; to_50k = (M % 100000) // 50000',
    sampleSolution: 'm = int(input())\nto_100k = m // 100000\nto_50k = (m % 100000) // 50000\nprint(to_100k)\nprint(to_50k)\n',
    initialCode: 'm = int(input())\n# Đổi tờ 100k và 50k\n',
    testCases: [
      { input: '350000', expectedOutput: '3\n1', description: '350k gồm 3 tờ 100k và 1 tờ 50k' },
      { input: '500000', expectedOutput: '5\n0', description: '500k gồm 5 tờ 100k' }
    ]
  },
  {
    id: 45,
    code: 'CH03_17',
    chapterId: 3,
    chapterName: 'Toán tử',
    title: 'Tìm giá trị lớn nhất và nhỏ nhất của 3 số',
    difficulty: 'Khó',
    appliedKnowledge: 'Hàm max() và min() tích hợp sẵn của Python.',
    description: 'Nhập vào 3 số thực a, b, c trên 3 dòng. In ra giá trị lớn nhất trên dòng 1 và giá trị nhỏ nhất trên dòng 2.',
    inputDesc: '3 dòng chứa 3 số thực.',
    outputDesc: 'Dòng 1: max. Dòng 2: min.',
    hint: 'print(max(a, b, c)); print(min(a, b, c))',
    sampleSolution: 'a = float(input())\nb = float(input())\nc = float(input())\nprint(max(a, b, c))\nprint(min(a, b, c))\n',
    initialCode: 'a = float(input())\nb = float(input())\nc = float(input())\n# Tìm max và min\n',
    testCases: [
      { input: '4.5\n9.2\n1.8', expectedOutput: '9.2\n1.8', description: 'Max 9.2, Min 1.8' },
      { input: '-10.0\n-5.0\n-20.0', expectedOutput: '-5.0\n-20.0', description: 'Số âm: Max -5.0, Min -20.0' }
    ]
  },
  {
    id: 46,
    code: 'CH03_18',
    chapterId: 3,
    chapterName: 'Toán tử',
    title: 'Kiểm tra bất đẳng thức tam giác',
    difficulty: 'Khó',
    appliedKnowledge: 'Toán tử so sánh kết hợp toán tử logic and: a+b>c and a+c>b and b+c>a.',
    description: 'Nhập vào 3 cạnh a, b, c (số thực dương). Kiểm tra xem 3 cạnh này có tạo thành một tam giác hợp lệ hay không. In ra True nếu hợp lệ, ngược lại in ra False.',
    inputDesc: '3 số thực a, b, c trên 3 dòng.',
    outputDesc: 'True hoặc False.',
    hint: 'print((a + b > c) and (a + c > b) and (b + c > a))',
    sampleSolution: 'a = float(input())\nb = float(input())\nc = float(input())\nis_triangle = (a + b > c) and (a + c > b) and (b + c > a)\nprint(is_triangle)\n',
    initialCode: 'a = float(input())\nb = float(input())\nc = float(input())\n# Kiểm tra bất đẳng thức tam giác\n',
    testCases: [
      { input: '3\n4\n5', expectedOutput: 'True', description: 'Bộ ba 3-4-5 tạo thành tam giác' },
      { input: '1\n2\n3', expectedOutput: 'False', description: '1+2=3 không thỏa mãn a+b>c' },
      { input: '5\n10\n4', expectedOutput: 'False', description: '5+4 < 10' }
    ]
  }
];
