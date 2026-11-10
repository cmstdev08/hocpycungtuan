// Danh sách bài tập Chương 6: Vòng lặp For và While (25 bài tập)
export const chapter6Exercises = [
  {
    id: 90,
    code: 'CH06_01',
    chapterId: 6,
    chapterName: 'Vòng lặp',
    title: 'In dãy số từ 1 đến n',
    difficulty: 'Dễ',
    appliedKnowledge: 'Vòng lặp for range(1, n + 1) và tham số end=" ".',
    description: 'Nhập vào một số nguyên dương n. Sử dụng vòng lặp for để in các số từ 1 đến n trên cùng một dòng, cách nhau một khoảng trắng.',
    inputDesc: 'Một số nguyên dương n.',
    outputDesc: 'Dãy số từ 1 đến n trên một dòng.',
    hint: 'for i in range(1, n + 1): print(i, end=" ")',
    sampleSolution: 'n = int(input())\nfor i in range(1, n + 1):\n    print(i, end=" " if i < n else "\\n")\n',
    initialCode: 'n = int(input())\n# In các số từ 1 đến n\n',
    testCases: [
      { input: '5', expectedOutput: '1 2 3 4 5', description: 'n = 5' },
      { input: '1', expectedOutput: '1', description: 'n = 1' }
    ]
  },
  {
    id: 91,
    code: 'CH06_02',
    chapterId: 6,
    chapterName: 'Vòng lặp',
    title: 'In các số chẵn từ 2 đến n',
    difficulty: 'Dễ',
    appliedKnowledge: 'Bước nhảy step trong hàm range(2, n + 1, 2).',
    description: 'Nhập vào số nguyên dương n (n >= 2). Hãy in tất cả các số chẵn trong phạm vi từ 2 đến n trên cùng một dòng, cách nhau một khoảng trắng.',
    inputDesc: 'Số nguyên dương n >= 2.',
    outputDesc: 'Các số chẵn từ 2 đến n.',
    hint: 'for i in range(2, n + 1, 2): print(i, end=" ")',
    sampleSolution: 'n = int(input())\nevents = [str(i) for i in range(2, n + 1, 2)]\nprint(" ".join(events))\n',
    initialCode: 'n = int(input())\n# In các số chẵn từ 2 đến n\n',
    testCases: [
      { input: '10', expectedOutput: '2 4 6 8 10', description: 'n = 10' },
      { input: '7', expectedOutput: '2 4 6', description: 'n = 7' }
    ]
  },
  {
    id: 92,
    code: 'CH06_03',
    chapterId: 6,
    chapterName: 'Vòng lặp',
    title: 'Tính tổng S = 1 + 2 + ... + n',
    difficulty: 'Dễ',
    appliedKnowledge: 'Vòng lặp tích lũy biến tổng s += i.',
    description: 'Nhập số nguyên dương n. Hãy dùng vòng lặp để tính tổng các số nguyên từ 1 đến n và in ra kết quả.',
    inputDesc: 'Một số nguyên dương n.',
    outputDesc: 'Tổng S = 1 + 2 + ... + n.',
    hint: 's = 0; for i in range(1, n + 1): s += i; print(s)',
    sampleSolution: 'n = int(input())\ns = 0\nfor i in range(1, n + 1):\n    s += i\nprint(s)\n',
    initialCode: 'n = int(input())\n# Tính tổng từ 1 đến n\n',
    testCases: [
      { input: '10', expectedOutput: '55', description: 'Tổng từ 1 đến 10 là 55' },
      { input: '100', expectedOutput: '5050', description: 'Tổng từ 1 đến 100 là 5050' }
    ]
  },
  {
    id: 93,
    code: 'CH06_04',
    chapterId: 6,
    chapterName: 'Vòng lặp',
    title: 'Tính giai thừa n! (1 * 2 * ... * n)',
    difficulty: 'Dễ',
    appliedKnowledge: 'Vòng lặp tích lũy biến tích p *= i.',
    description: 'Nhập vào một số nguyên không âm n (0 <= n <= 15). Tính n! (quy ước 0! = 1) và in ra kết quả.',
    inputDesc: 'Một số nguyên n.',
    outputDesc: 'Giá trị n!.',
    hint: 'p = 1; for i in range(1, n + 1): p *= i; print(p)',
    sampleSolution: 'n = int(input())\np = 1\nfor i in range(1, n + 1):\n    p *= i\nprint(p)\n',
    initialCode: 'n = int(input())\n# Tính n!\n',
    testCases: [
      { input: '5', expectedOutput: '120', description: '5! = 120' },
      { input: '0', expectedOutput: '1', description: '0! = 1' },
      { input: '6', expectedOutput: '720', description: '6! = 720' }
    ]
  },
  {
    id: 94,
    code: 'CH06_05',
    chapterId: 6,
    chapterName: 'Vòng lặp',
    title: 'In bảng nhân của số k',
    difficulty: 'Dễ',
    appliedKnowledge: 'Vòng lặp for in bảng cửu chương.',
    description: 'Nhập vào một số nguyên k (1 <= k <= 9). Hãy in bảng nhân của số k từ 1 đến 10 theo định dạng chuẩn: "<k> x <i> = <k*i>". Mỗi phép tính trên một dòng.',
    inputDesc: 'Một số nguyên k.',
    outputDesc: '10 dòng biểu diễn bảng nhân của k.',
    hint: 'for i in range(1, 11): print(f"{k} x {i} = {k * i}")',
    sampleSolution: 'k = int(input())\nfor i in range(1, 11):\n    print(f"{k} x {i} = {k * i}")\n',
    initialCode: 'k = int(input())\n# In bảng nhân của k\n',
    testCases: [
      { input: '7', expectedOutput: '7 x 1 = 7\n7 x 2 = 14\n7 x 3 = 21\n7 x 4 = 28\n7 x 5 = 35\n7 x 6 = 42\n7 x 7 = 49\n7 x 8 = 56\n7 x 9 = 63\n7 x 10 = 70', description: 'Bảng nhân 7' }
    ]
  },
  {
    id: 95,
    code: 'CH06_06',
    chapterId: 6,
    chapterName: 'Vòng lặp',
    title: 'Đếm số lượng ước số của số nguyên',
    difficulty: 'Trung bình',
    appliedKnowledge: 'Duyệt kiểm tra chia hết n % i == 0.',
    description: 'Nhập số nguyên dương n. Hãy đếm và in ra số lượng ước số nguyên dương của n (kể cả 1 và n).',
    inputDesc: 'Số nguyên dương n.',
    outputDesc: 'Số lượng ước số của n.',
    hint: 'count = 0; for i in range(1, n + 1): if n % i == 0: count += 1',
    sampleSolution: 'n = int(input())\ncount = 0\nfor i in range(1, n + 1):\n    if n % i == 0:\n        count += 1\nprint(count)\n',
    initialCode: 'n = int(input())\n# Đếm số lượng ước của n\n',
    testCases: [
      { input: '12', expectedOutput: '6', description: '12 có 6 ước: 1, 2, 3, 4, 6, 12' },
      { input: '7', expectedOutput: '2', description: 'Số nguyên tố 7 có 2 ước' }
    ]
  },
  {
    id: 96,
    code: 'CH06_07',
    chapterId: 6,
    chapterName: 'Vòng lặp',
    title: 'Kiểm tra số nguyên tố bằng vòng lặp',
    difficulty: 'Trung bình',
    appliedKnowledge: 'Thuật toán kiểm tra số nguyên tố duyệt đến căn bậc 2.',
    description: 'Nhập một số nguyên dương n. In ra "NGUYEN TO" nếu n là số nguyên tố, ngược lại in ra "KHONG NGUYEN TO".',
    inputDesc: 'Một số nguyên n.',
    outputDesc: '"NGUYEN TO" hoặc "KHONG NGUYEN TO".',
    hint: 'n < 2: False; duyệt i từ 2 đến int(n**0.5): nếu n % i == 0 thì không phải nguyên tố.',
    sampleSolution: 'n = int(input())\nif n < 2:\n    print("KHONG NGUYEN TO")\nelse:\n    is_p = True\n    for i in range(2, int(n**0.5) + 1):\n        if n % i == 0:\n            is_p = False\n            break\n    print("NGUYEN TO" if is_p else "KHONG NGUYEN TO")\n',
    initialCode: 'n = int(input())\n# Kiểm tra số nguyên tố\n',
    testCases: [
      { input: '17', expectedOutput: 'NGUYEN TO', description: '17 là số nguyên tố' },
      { input: '1', expectedOutput: 'KHONG NGUYEN TO', description: '1 không phải nguyên tố' },
      { input: '24', expectedOutput: 'KHONG NGUYEN TO', description: '24 là hợp số' }
    ]
  },
  {
    id: 97,
    code: 'CH06_08',
    chapterId: 6,
    chapterName: 'Vòng lặp',
    title: 'Ước chung lớn nhất (UCLN) bằng thuật toán Euclid',
    difficulty: 'Trung bình',
    appliedKnowledge: 'Vòng lặp while a % b != 0.',
    description: 'Nhập vào 2 số nguyên dương a và b trên 2 dòng. Sử dụng thuật toán Euclid với vòng lặp while để tìm và in ra ước chung lớn nhất của a và b.',
    inputDesc: '2 dòng chứa 2 số nguyên dương a và b.',
    outputDesc: 'Ước chung lớn nhất UCLN.',
    hint: 'while b != 0: a, b = b, a % b; print(a)',
    sampleSolution: 'a = int(input())\nb = int(input())\nwhile b != 0:\n    a, b = b, a % b\nprint(a)\n',
    initialCode: 'a = int(input())\nb = int(input())\n# Tìm UCLN của a và b\n',
    testCases: [
      { input: '24\n36', expectedOutput: '12', description: 'UCLN(24, 36) = 12' },
      { input: '17\n19', expectedOutput: '1', description: 'Nguyên tố cùng nhau' }
    ]
  },
  {
    id: 98,
    code: 'CH06_09',
    chapterId: 6,
    chapterName: 'Vòng lặp',
    title: 'Bội chung nhỏ nhất (BCNN) của hai số',
    difficulty: 'Trung bình',
    appliedKnowledge: 'Mối quan hệ BCNN(a, b) = (a * b) // UCLN(a, b).',
    description: 'Nhập vào 2 số nguyên dương a và b trên 2 dòng. Hãy tìm và in ra bội chung nhỏ nhất (BCNN) của a và b.',
    inputDesc: '2 số nguyên dương a và b.',
    outputDesc: 'BCNN của 2 số.',
    hint: 'tich = a * b; tìm ucln bằng while; bcnn = tich // ucln',
    sampleSolution: 'a = int(input())\nb = int(input())\nx, y = a, b\nwhile y != 0:\n    x, y = y, x % y\nprint((a * b) // x)\n',
    initialCode: 'a = int(input())\nb = int(input())\n# Tìm BCNN\n',
    testCases: [
      { input: '12\n18', expectedOutput: '36', description: 'BCNN(12, 18) = 36' },
      { input: '5\n7', expectedOutput: '35', description: 'BCNN(5, 7) = 35' }
    ]
  },
  {
    id: 99,
    code: 'CH06_10',
    chapterId: 6,
    chapterName: 'Vòng lặp',
    title: 'Đảo ngược số nguyên dương bằng toán học',
    difficulty: 'Trung bình',
    appliedKnowledge: 'Vòng lặp while tách từng chữ số cuối: rev = rev * 10 + n % 10.',
    description: 'Nhập một số nguyên dương n (không tận cùng bằng 0). Bằng cách sử dụng vòng lặp while và các phép toán số học (không dùng đảo chuỗi), hãy tạo và in ra số đảo ngược của n (ví dụ: 1234 -> 4321).',
    inputDesc: 'Một số nguyên dương n.',
    outputDesc: 'Số nguyên đảo ngược.',
    hint: 'rev = 0; while n > 0: rev = rev * 10 + n % 10; n //= 10',
    sampleSolution: 'n = int(input())\nrev = 0\nwhile n > 0:\n    rev = rev * 10 + n % 10\n    n //= 10\nprint(rev)\n',
    initialCode: 'n = int(input())\n# Đảo ngược số bằng toán học\n',
    testCases: [
      { input: '1234', expectedOutput: '4321', description: 'Đảo 1234 thành 4321' },
      { input: '987', expectedOutput: '789', description: 'Đảo 987 thành 789' }
    ]
  },
  {
    id: 100,
    code: 'CH06_11',
    chapterId: 6,
    chapterName: 'Vòng lặp',
    title: 'Kiểm tra số đối xứng (Palindrome)',
    difficulty: 'Trung bình',
    appliedKnowledge: 'So sánh số gốc với số đảo ngược.',
    description: 'Nhập vào một số nguyên dương n. In ra "DOI XUNG" nếu số đó đọc xuôi hay ngược đều như nhau (ví dụ: 121, 1331), ngược lại in ra "KHONG DOI XUNG".',
    inputDesc: 'Một số nguyên n.',
    outputDesc: '"DOI XUNG" hoặc "KHONG DOI XUNG".',
    hint: 'Lưu biến gốc orig = n, đảo ngược n, so sánh orig == rev',
    sampleSolution: 'n = int(input())\norig = n\nrev = 0\nwhile n > 0:\n    rev = rev * 10 + n % 10\n    n //= 10\nprint("DOI XUNG" if orig == rev else "KHONG DOI XUNG")\n',
    initialCode: 'n = int(input())\n# Kiểm tra số đối xứng\n',
    testCases: [
      { input: '12321', expectedOutput: 'DOI XUNG', description: '12321 là số đối xứng' },
      { input: '12345', expectedOutput: 'KHONG DOI XUNG', description: '12345 không đối xứng' }
    ]
  },
  {
    id: 101,
    code: 'CH06_12',
    chapterId: 6,
    chapterName: 'Vòng lặp',
    title: 'Tính tổng các chữ số của một số nguyên bất kỳ',
    difficulty: 'Dễ',
    appliedKnowledge: 'Vòng lặp while n > 0 cộng dồn n % 10.',
    description: 'Nhập vào một số nguyên dương n có số lượng chữ số tùy ý. Hãy tính tổng tất cả các chữ số của n và in kết quả.',
    inputDesc: 'Số nguyên dương n.',
    outputDesc: 'Tổng các chữ số của n.',
    hint: 'tong = 0; while n > 0: tong += n % 10; n //= 10',
    sampleSolution: 'n = int(input())\ntong = 0\nwhile n > 0:\n    tong += n % 10\n    n //= 10\nprint(tong)\n',
    initialCode: 'n = int(input())\n# Tính tổng các chữ số\n',
    testCases: [
      { input: '9876', expectedOutput: '30', description: '9 + 8 + 7 + 6 = 30' },
      { input: '1000', expectedOutput: '1', description: 'Tổng là 1' }
    ]
  },
  {
    id: 102,
    code: 'CH06_13',
    chapterId: 6,
    chapterName: 'Vòng lặp',
    title: 'In n số đầu tiên của dãy Fibonacci',
    difficulty: 'Khó',
    appliedKnowledge: 'Khởi tạo a, b = 0, 1 và tịnh tiến a, b = b, a + b.',
    description: 'Nhập số nguyên dương n (1 <= n <= 25). In ra n số đầu tiên của dãy số Fibonacci trên cùng một dòng, cách nhau một khoảng trắng. Dãy Fibonacci bắt đầu: 0, 1, 1, 2, 3, 5, 8, ...',
    inputDesc: 'Số nguyên n.',
    outputDesc: 'n số Fibonacci đầu tiên trên 1 dòng.',
    hint: 'a, b = 0, 1; lặp n lần in a và cập nhật a, b = b, a + b',
    sampleSolution: 'n = int(input())\na, b = 0, 1\nres = []\nfor _ in range(n):\n    res.append(str(a))\n    a, b = b, a + b\nprint(" ".join(res))\n',
    initialCode: 'n = int(input())\n# In n số Fibonacci đầu tiên\n',
    testCases: [
      { input: '6', expectedOutput: '0 1 1 2 3 5', description: '6 số Fibonacci đầu' },
      { input: '1', expectedOutput: '0', description: '1 số' }
    ]
  },
  {
    id: 103,
    code: 'CH06_14',
    chapterId: 6,
    chapterName: 'Vòng lặp',
    title: 'Tính tổng điều hòa S = 1 + 1/2 + 1/3 + ... + 1/n',
    difficulty: 'Trung bình',
    appliedKnowledge: 'Vòng lặp tích lũy số thực và hàm round().',
    description: 'Nhập số nguyên dương n. Hãy tính tổng S = 1/1 + 1/2 + 1/3 + ... + 1/n. In ra kết quả làm tròn đúng 4 chữ số thập phân.',
    inputDesc: 'Số nguyên dương n.',
    outputDesc: 'Tổng S làm tròn 4 chữ số.',
    hint: 's = 0.0; for i in range(1, n + 1): s += 1.0 / i; print(round(s, 4))',
    sampleSolution: 'n = int(input())\ns = 0.0\nfor i in range(1, n + 1):\n    s += 1.0 / i\nprint(round(s, 4))\n',
    initialCode: 'n = int(input())\n# Tính tổng điều hòa S\n',
    testCases: [
      { input: '5', expectedOutput: '2.2833', description: 'n = 5' },
      { input: '1', expectedOutput: '1.0', description: 'n = 1' }
    ]
  },
  {
    id: 104,
    code: 'CH06_15',
    chapterId: 6,
    chapterName: 'Vòng lặp',
    title: 'Tìm chữ số lớn nhất của số nguyên',
    difficulty: 'Trung bình',
    appliedKnowledge: 'Tách từng chữ số và so sánh tìm max_digit.',
    description: 'Nhập một số nguyên dương n. Hãy tìm và in ra chữ số có giá trị lớn nhất trong số n (ví dụ: nhập 3824 -> chữ số lớn nhất là 8).',
    inputDesc: 'Một số nguyên n.',
    outputDesc: 'Chữ số lớn nhất.',
    hint: 'max_d = 0; while n > 0: d = n % 10; if d > max_d: max_d = d; n //= 10',
    sampleSolution: 'n = int(input())\nmax_d = 0\nwhile n > 0:\n    d = n % 10\n    if d > max_d:\n        max_d = d\n    n //= 10\nprint(max_d)\n',
    initialCode: 'n = int(input())\n# Tìm chữ số lớn nhất của n\n',
    testCases: [
      { input: '3824', expectedOutput: '8', description: '3824 có chữ số lớn nhất là 8' },
      { input: '901', expectedOutput: '9', description: '901 có max là 9' }
    ]
  },
  {
    id: 105,
    code: 'CH06_16',
    chapterId: 6,
    chapterName: 'Vòng lặp',
    title: 'Đổi số thập phân sang nhị phân bằng vòng lặp',
    difficulty: 'Khó',
    appliedKnowledge: 'Thuật toán chia 2 liên tiếp và lấy phần dư ghép chuỗi.',
    description: 'Nhập một số nguyên dương n. Bằng thuật toán chia 2 liên tiếp lấy phần dư với vòng lặp while (không dùng hàm bin()), hãy in ra dạng biểu diễn nhị phân của n.',
    inputDesc: 'Số nguyên dương n.',
    outputDesc: 'Chuỗi nhị phân của n.',
    hint: 'res = ""; while n > 0: res = str(n % 2) + res; n //= 2',
    sampleSolution: 'n = int(input())\nres = ""\nwhile n > 0:\n    res = str(n % 2) + res\n    n //= 2\nprint(res if res else "0")\n',
    initialCode: 'n = int(input())\n# Đổi sang nhị phân bằng vòng lặp\n',
    testCases: [
      { input: '13', expectedOutput: '1101', description: '13 = 1101_2' },
      { input: '8', expectedOutput: '1000', description: '8 = 1000_2' }
    ]
  },
  {
    id: 106,
    code: 'CH06_17',
    chapterId: 6,
    chapterName: 'Vòng lặp',
    title: 'Kiểm tra số hoàn hảo (Perfect Number)',
    difficulty: 'Trung bình',
    appliedKnowledge: 'Tổng các ước số thực sự của n.',
    description: 'Số hoàn hảo là số nguyên dương có tổng các ước số thực sự (nhỏ hơn nó) bằng chính nó (ví dụ 6 = 1 + 2 + 3). Nhập số n, in "HOAN HAO" nếu đúng, ngược lại in "KHONG HOAN HAO".',
    inputDesc: 'Số nguyên dương n.',
    outputDesc: '"HOAN HAO" hoặc "KHONG HOAN HAO".',
    hint: 'tong_uoc = sum(i for i in range(1, n) if n % i == 0)',
    sampleSolution: 'n = int(input())\ntong_uoc = 0\nfor i in range(1, n):\n    if n % i == 0:\n        tong_uoc += i\nprint("HOAN HAO" if tong_uoc == n else "KHONG HOAN HAO")\n',
    initialCode: 'n = int(input())\n# Kiểm tra số hoàn hảo\n',
    testCases: [
      { input: '6', expectedOutput: 'HOAN HAO', description: '6 là số hoàn hảo' },
      { input: '28', expectedOutput: 'HOAN HAO', description: '28 là số hoàn hảo' },
      { input: '12', expectedOutput: 'KHONG HOAN HAO', description: '12 không phải số hoàn hảo' }
    ]
  },
  {
    id: 107,
    code: 'CH06_18',
    chapterId: 6,
    chapterName: 'Vòng lặp',
    title: 'In tam giác số tăng dần',
    difficulty: 'Trung bình',
    appliedKnowledge: 'Vòng lặp lồng nhau lồng for trong for.',
    description: 'Nhập số nguyên dương n (1 <= n <= 9). Hãy in tam giác số có chiều cao n dòng:\nDòng 1: 1\nDòng 2: 1 2\nDòng 3: 1 2 3\n... dòng thứ i in các số từ 1 đến i cách nhau khoảng trắng.',
    inputDesc: 'Số nguyên dương n.',
    outputDesc: 'Tam giác số gồm n dòng.',
    hint: 'for i in range(1, n + 1): print(" ".join(str(j) for j in range(1, i + 1)))',
    sampleSolution: 'n = int(input())\nfor i in range(1, n + 1):\n    print(" ".join(str(j) for j in range(1, i + 1)))\n',
    initialCode: 'n = int(input())\n# In tam giác số\n',
    testCases: [
      { input: '4', expectedOutput: '1\n1 2\n1 2 3\n1 2 3 4', description: 'Tam giác số cao 4' }
    ]
  },
  {
    id: 108,
    code: 'CH06_19',
    chapterId: 6,
    chapterName: 'Vòng lặp',
    title: 'In ma trận hình vuông số nxn',
    difficulty: 'Trung bình',
    appliedKnowledge: 'Vòng lặp 2 chiều in ma trận.',
    description: 'Nhập số nguyên dương n. In ra bảng số vuông n dòng x n cột, mỗi dòng gồm n số nguyên từ 1 đến n cách nhau một khoảng trắng.',
    inputDesc: 'Số nguyên n.',
    outputDesc: 'Ma trận kích thước nxn.',
    hint: 'row = " ".join(str(j) for j in range(1, n + 1)); lặp n lần in row',
    sampleSolution: 'n = int(input())\nrow = " ".join(str(j) for j in range(1, n + 1))\nfor _ in range(n):\n    print(row)\n',
    initialCode: 'n = int(input())\n# In ma trận vuông số\n',
    testCases: [
      { input: '3', expectedOutput: '1 2 3\n1 2 3\n1 2 3', description: 'Ma trận 3x3' }
    ]
  },
  {
    id: 109,
    code: 'CH06_20',
    chapterId: 6,
    chapterName: 'Vòng lặp',
    title: 'Tính tổng dãy số nhập vào cho đến khi gặp số 0 (Sentinel Loop)',
    difficulty: 'Khó',
    appliedKnowledge: 'Vòng lặp while True và lệnh break.',
    description: 'Người dùng nhập liên tiếp các số nguyên, mỗi số trên một dòng. Khi người dùng nhập số 0 thì chương trình dừng lại và in ra tổng của tất cả các số đã nhập trước đó.',
    inputDesc: 'Nhiều dòng chứa các số nguyên, kết thúc bằng số 0.',
    outputDesc: 'Tổng các số đã nhập.',
    hint: 's = 0; while True: x = int(input()); if x == 0: break; s += x',
    sampleSolution: 's = 0\nwhile True:\n    x = int(input())\n    if x == 0:\n        break\n    s += x\nprint(s)\n',
    initialCode: '# Vòng lặp dừng khi gặp số 0\n',
    testCases: [
      { input: '5\n10\n15\n0', expectedOutput: '30', description: '5 + 10 + 15 = 30' },
      { input: '100\n-20\n0', expectedOutput: '80', description: '100 - 20 = 80' }
    ]
  },
  {
    id: 110,
    code: 'CH06_21',
    chapterId: 6,
    chapterName: 'Vòng lặp',
    title: 'Tìm số k nhỏ nhất để tổng 1 + 2 + ... + k >= N',
    difficulty: 'Khó',
    appliedKnowledge: 'Vòng lặp while kiểm tra điều kiện tích lũy.',
    description: 'Nhập số nguyên dương N. Hãy tìm số nguyên dương k nhỏ nhất sao cho: 1 + 2 + 3 + ... + k >= N. In ra giá trị của k.',
    inputDesc: 'Số nguyên dương N.',
    outputDesc: 'Số nguyên k nhỏ nhất thỏa mãn.',
    hint: 'k = 0; s = 0; while s < N: k += 1; s += k; print(k)',
    sampleSolution: 'N = int(input())\nk = 0\ns = 0\nwhile s < N:\n    k += 1\n    s += k\nprint(k)\n',
    initialCode: 'N = int(input())\n# Tìm k nhỏ nhất\n',
    testCases: [
      { input: '10', expectedOutput: '4', description: '1+2+3+4 = 10 >= 10 -> k = 4' },
      { input: '11', expectedOutput: '5', description: '1+2+3+4+5 = 15 >= 11 -> k = 5' }
    ]
  },
  {
    id: 111,
    code: 'CH06_22',
    chapterId: 6,
    chapterName: 'Vòng lặp',
    title: 'Đếm số lượng chữ số chẵn và số lượng chữ số lẻ',
    difficulty: 'Trung bình',
    appliedKnowledge: 'Tách chữ số trong vòng lặp và đếm chẵn lẻ.',
    description: 'Nhập một số nguyên dương n. Hãy đếm số lượng chữ số chẵn và số lượng chữ số lẻ của n. In ra 2 số đếm trên cùng một dòng, cách nhau một khoảng trắng (chẵn trước, lẻ sau).',
    inputDesc: 'Một số nguyên dương n.',
    outputDesc: 'Số chữ số chẵn và lẻ cách nhau khoảng trắng.',
    hint: 'while n > 0: d = n % 10; if d % 2 == 0: chan += 1 else: le += 1; n //= 10',
    sampleSolution: 'n = int(input())\nchan = 0\nle = 0\nwhile n > 0:\n    d = n % 10\n    if d % 2 == 0:\n        chan += 1\n    else:\n        le += 1\n    n //= 10\nprint(chan, le)\n',
    initialCode: 'n = int(input())\n# Đếm chữ số chẵn và lẻ\n',
    testCases: [
      { input: '2468', expectedOutput: '4 0', description: 'Cả 4 chữ số đều chẵn' },
      { input: '12345', expectedOutput: '2 3', description: '2 chẵn (2,4) và 3 lẻ (1,3,5)' }
    ]
  },
  {
    id: 112,
    code: 'CH06_23',
    chapterId: 6,
    chapterName: 'Vòng lặp',
    title: 'Vẽ tam giác sao cân đối xứng',
    difficulty: 'Khó',
    appliedKnowledge: 'Kết hợp khoảng trắng và dấu sao theo công thức.',
    description: 'Nhập chiều cao n (1 <= n <= 10). In ra tam giác sao cân đối xứng gồm n dòng: dòng thứ i (tính từ 1 đến n) gồm (n - i) khoảng trắng theo sau bởi (2*i - 1) dấu sao.',
    inputDesc: 'Số nguyên dương n.',
    outputDesc: 'Hình tam giác sao cân n dòng.',
    hint: 'for i in range(1, n + 1): print(" " * (n - i) + "*" * (2 * i - 1))',
    sampleSolution: 'n = int(input())\nfor i in range(1, n + 1):\n    print(" " * (n - i) + "*" * (2 * i - 1))\n',
    initialCode: 'n = int(input())\n# In tam giác sao cân\n',
    testCases: [
      { input: '3', expectedOutput: '  *\n ***\n*****', description: 'Tam giác cân cao 3' },
      { input: '4', expectedOutput: '   *\n  ***\n *****\n*******', description: 'Tam giác cân cao 4' }
    ]
  },
  {
    id: 113,
    code: 'CH06_24',
    chapterId: 6,
    chapterName: 'Vòng lặp',
    title: 'Liệt kê các số nguyên tố nhỏ hơn hoặc bằng n',
    difficulty: 'Khó',
    appliedKnowledge: 'Vòng lặp lồng nhau duyệt số nguyên tố.',
    description: 'Nhập số nguyên dương n (n >= 2). Liệt kê tất cả các số nguyên tố nhỏ hơn hoặc bằng n trên cùng một dòng, cách nhau một khoảng trắng.',
    inputDesc: 'Số nguyên dương n >= 2.',
    outputDesc: 'Danh sách các số nguyên tố cách nhau khoảng trắng.',
    hint: 'Duyệt x từ 2 đến n, kiểm tra tính nguyên tố và thu thập vào danh sách',
    sampleSolution: 'n = int(input())\nprimes = []\nfor x in range(2, n + 1):\n    is_p = True\n    for i in range(2, int(x**0.5) + 1):\n        if x % i == 0:\n            is_p = False\n            break\n    if is_p:\n        primes.append(str(x))\nprint(" ".join(primes))\n',
    initialCode: 'n = int(input())\n# Liệt kê số nguyên tố <= n\n',
    testCases: [
      { input: '20', expectedOutput: '2 3 5 7 11 13 17 19', description: 'Số nguyên tố <= 20' },
      { input: '5', expectedOutput: '2 3 5', description: 'Số nguyên tố <= 5' }
    ]
  },
  {
    id: 114,
    code: 'CH06_25',
    chapterId: 6,
    chapterName: 'Vòng lặp',
    title: 'Tính tổng bình phương S = 1^2 + 2^2 + ... + n^2',
    difficulty: 'Trung bình',
    appliedKnowledge: 'Vòng lặp tính tổng dãy số bậc 2.',
    description: 'Nhập số nguyên dương n. Hãy tính tổng S = 1^2 + 2^2 + 3^2 + ... + n^2 và in ra kết quả.',
    inputDesc: 'Số nguyên dương n.',
    outputDesc: 'Giá trị tổng S.',
    hint: 's = sum(i**2 for i in range(1, n + 1))',
    sampleSolution: 'n = int(input())\ns = sum(i**2 for i in range(1, n + 1))\nprint(s)\n',
    initialCode: 'n = int(input())\n# Tính tổng bình phương\n',
    testCases: [
      { input: '4', expectedOutput: '30', description: '1 + 4 + 9 + 16 = 30' },
      { input: '10', expectedOutput: '385', description: 'Tổng bình phương từ 1 đến 10' }
    ]
  }
];
