// Danh sách bài tập Chương 2: Biến và kiểu dữ liệu (18 bài tập)
export const chapter2Exercises = [
  {
    id: 11,
    code: 'CH02_01',
    chapterId: 2,
    chapterName: 'Biến và kiểu dữ liệu',
    title: 'Tìm số đối của một số nguyên',
    difficulty: 'Dễ',
    appliedKnowledge: 'Khai báo biến số nguyên int(), toán tử đổi dấu (-).',
    description: 'Nhập vào một số nguyên n từ bàn phím. Hãy in ra số đối của n (ví dụ: nhập 5 in ra -5, nhập -8 in ra 8).',
    inputDesc: 'Một số nguyên n duy nhất.',
    outputDesc: 'Số đối của n.',
    hint: 'Dùng -n để tìm số đối.',
    sampleSolution: 'n = int(input())\nprint(-n)\n',
    initialCode: 'n = int(input())\n# In số đối của n\n',
    testCases: [
      { input: '15', expectedOutput: '-15', description: 'Số nguyên dương' },
      { input: '-42', expectedOutput: '42', description: 'Số nguyên âm' },
      { input: '0', expectedOutput: '0', description: 'Số 0' }
    ]
  },
  {
    id: 12,
    code: 'CH02_02',
    chapterId: 2,
    chapterName: 'Biến và kiểu dữ liệu',
    title: 'Tính bình phương và lập phương',
    difficulty: 'Dễ',
    appliedKnowledge: 'Toán tử lũy thừa (**), in nhiều dòng.',
    description: 'Nhập vào một số nguyên n. In ra bình phương của n trên dòng 1, và lập phương của n trên dòng 2.',
    inputDesc: 'Một số nguyên n.',
    outputDesc: '2 dòng: dòng 1 là n^2, dòng 2 là n^3.',
    hint: 'n ** 2 và n ** 3',
    sampleSolution: 'n = int(input())\nprint(n ** 2)\nprint(n ** 3)\n',
    initialCode: 'n = int(input())\n# In bình phương và lập phương\n',
    testCases: [
      { input: '3', expectedOutput: '9\n27', description: 'n = 3' },
      { input: '5', expectedOutput: '25\n125', description: 'n = 5' }
    ]
  },
  {
    id: 13,
    code: 'CH02_03',
    chapterId: 2,
    chapterName: 'Biến và kiểu dữ liệu',
    title: 'Hoán đổi giá trị 2 biến',
    difficulty: 'Dễ',
    appliedKnowledge: 'Cú pháp tuple unpacking đa biến a, b = b, a của Python.',
    description: 'Nhập vào 2 số nguyên a và b (mỗi số trên một dòng). Hoán đổi giá trị của a và b, sau đó in ra a và b cách nhau một khoảng trắng.',
    inputDesc: '2 dòng chứa 2 số nguyên a và b.',
    outputDesc: 'Giá trị a và b sau khi hoán đổi trên 1 dòng.',
    hint: 'Trong Python có thể viết: a, b = b, a',
    sampleSolution: 'a = int(input())\nb = int(input())\na, b = b, a\nprint(a, b)\n',
    initialCode: 'a = int(input())\nb = int(input())\n# Hoán đổi và in kết quả\n',
    testCases: [
      { input: '10\n20', expectedOutput: '20 10', description: 'Hoán đổi 10 và 20' },
      { input: '-7\n99', expectedOutput: '99 -7', description: 'Hoán đổi -7 và 99' }
    ]
  },
  {
    id: 14,
    code: 'CH02_04',
    chapterId: 2,
    chapterName: 'Biến và kiểu dữ liệu',
    title: 'Kiểm tra kiểu dữ liệu với hàm type()',
    difficulty: 'Dễ',
    appliedKnowledge: 'Hàm float() và type().',
    description: 'Nhập vào một số thực x. Hãy in ra kết quả của hàm type(x) để xem định danh lớp dữ liệu của biến.',
    inputDesc: 'Một số thực bất kỳ.',
    outputDesc: 'Dòng chữ kiểu dữ liệu tương ứng (ví dụ: <class \'float\'>).',
    hint: 'x = float(input()) rồi print(type(x))',
    sampleSolution: 'x = float(input())\nprint(type(x))\n',
    initialCode: 'x = float(input())\n# In kiểu dữ liệu của biến x\n',
    testCases: [
      { input: '3.14', expectedOutput: "<class 'float'>", description: 'Kiểm tra kiểu float' },
      { input: '0.0', expectedOutput: "<class 'float'>", description: 'Kiểm tra kiểu float số 0' }
    ]
  },
  {
    id: 15,
    code: 'CH02_05',
    chapterId: 2,
    chapterName: 'Biến và kiểu dữ liệu',
    title: 'Ép kiểu chuỗi sang số nguyên và nhân ba',
    difficulty: 'Dễ',
    appliedKnowledge: 'Ép kiểu int(s) từ chuỗi văn bản.',
    description: 'Nhập vào một chuỗi ký tự chứa các chữ số (ví dụ "25"). Ép kiểu chuỗi đó sang số nguyên rồi in ra giá trị sau khi nhân với 3.',
    inputDesc: 'Một chuỗi chữ số nguyên.',
    outputDesc: 'Một số nguyên là kết quả nhân 3.',
    hint: 'val = int(input()) -> in val * 3',
    sampleSolution: 'val = int(input())\nprint(val * 3)\n',
    initialCode: 's = input()\n# Ép kiểu sang int và nhân 3\n',
    testCases: [
      { input: '25', expectedOutput: '75', description: 'Chuỗi "25" thành 75' },
      { input: '100', expectedOutput: '300', description: 'Chuỗi "100" thành 300' }
    ]
  },
  {
    id: 16,
    code: 'CH02_06',
    chapterId: 2,
    chapterName: 'Biến và kiểu dữ liệu',
    title: 'Tính giá trị biểu thức đa thức bậc nhất',
    difficulty: 'Dễ',
    appliedKnowledge: 'Khai báo biến số nguyên và biểu thức đại số a * x + b.',
    description: 'Cho phương trình y = a * x + b. Nhập lần lượt 3 số nguyên a, x, b trên 3 dòng riêng biệt. Tính và in ra giá trị của y.',
    inputDesc: '3 dòng lần lượt chứa 3 số nguyên a, x, b.',
    outputDesc: 'Giá trị số nguyên y.',
    hint: 'y = a * x + b',
    sampleSolution: 'a = int(input())\nx = int(input())\nb = int(input())\nprint(a * x + b)\n',
    initialCode: 'a = int(input())\nx = int(input())\nb = int(input())\n# Tính y = a*x + b\n',
    testCases: [
      { input: '2\n5\n3', expectedOutput: '13', description: '2*5 + 3 = 13' },
      { input: '4\n0\n-5', expectedOutput: '-5', description: '4*0 - 5 = -5' }
    ]
  },
  {
    id: 17,
    code: 'CH02_07',
    chapterId: 2,
    chapterName: 'Biến và kiểu dữ liệu',
    title: 'Tính năm sinh từ số tuổi',
    difficulty: 'Dễ',
    appliedKnowledge: 'Phép trừ biến số nguyên.',
    description: 'Nhập vào tuổi của một người (số nguyên dương). Giả sử năm hiện tại là 2026, hãy tính và in ra năm sinh của người đó.',
    inputDesc: 'Một số nguyên đại diện cho tuổi.',
    outputDesc: 'Năm sinh tương ứng (2026 - tuổi).',
    hint: 'nam_sinh = 2026 - tuoi',
    sampleSolution: 'tuoi = int(input())\nprint(2026 - tuoi)\n',
    initialCode: 'tuoi = int(input())\n# Tính năm sinh\n',
    testCases: [
      { input: '18', expectedOutput: '2008', description: '18 tuổi -> năm sinh 2008' },
      { input: '20', expectedOutput: '2006', description: '20 tuổi -> năm sinh 2006' }
    ]
  },
  {
    id: 18,
    code: 'CH02_08',
    chapterId: 2,
    chapterName: 'Biến và kiểu dữ liệu',
    title: 'Chu vi và diện tích hình chữ nhật',
    difficulty: 'Trung bình',
    appliedKnowledge: 'Khai báo biến cạnh, tính chu vi và diện tích.',
    description: 'Nhập vào chiều dài và chiều rộng của hình chữ nhật (2 số nguyên dương a và b, mỗi số 1 dòng). In ra chu vi trên dòng 1 và diện tích trên dòng 2.',
    inputDesc: '2 số nguyên a và b.',
    outputDesc: 'Dòng 1: Chu vi (2*(a+b)). Dòng 2: Diện tích (a*b).',
    hint: 'cv = (a + b) * 2; dt = a * b',
    sampleSolution: 'a = int(input())\nb = int(input())\nprint((a + b) * 2)\nprint(a * b)\n',
    initialCode: 'a = int(input())\nb = int(input())\n# In chu vi và diện tích\n',
    testCases: [
      { input: '5\n4', expectedOutput: '18\n20', description: 'Dài 5, rộng 4 -> CV: 18, DT: 20' },
      { input: '10\n10', expectedOutput: '40\n100', description: 'Hình vuông cạnh 10' }
    ]
  },
  {
    id: 19,
    code: 'CH02_09',
    chapterId: 2,
    chapterName: 'Biến và kiểu dữ liệu',
    title: 'Chu vi và diện tích hình tròn',
    difficulty: 'Trung bình',
    appliedKnowledge: 'Biến float, hằng số pi = 3.14, hàm round().',
    description: 'Nhập bán kính r của hình tròn (số thực). Với pi = 3.14, hãy in chu vi trên dòng 1 và diện tích trên dòng 2. Kết quả làm tròn 2 chữ số thập phân bằng round().',
    inputDesc: 'Một số thực r.',
    outputDesc: '2 dòng lần lượt là chu vi và diện tích làm tròn 2 chữ số.',
    hint: 'round(2 * 3.14 * r, 2) và round(3.14 * r * r, 2)',
    sampleSolution: 'r = float(input())\npi = 3.14\nprint(round(2 * pi * r, 2))\nprint(round(pi * (r ** 2), 2))\n',
    initialCode: 'r = float(input())\n# Tính chu vi và diện tích hình tròn\n',
    testCases: [
      { input: '5.0', expectedOutput: '31.4\n78.5', description: 'Bán kính 5.0' },
      { input: '2.5', expectedOutput: '15.7\n19.62', description: 'Bán kính 2.5' }
    ]
  },
  {
    id: 20,
    code: 'CH02_10',
    chapterId: 2,
    chapterName: 'Biến và kiểu dữ liệu',
    title: 'Kiểm tra giá trị chân lý với bool()',
    difficulty: 'Trung bình',
    appliedKnowledge: 'Hàm ép kiểu chân lý bool().',
    description: 'Nhập một số nguyên n từ bàn phím. Sử dụng hàm bool(n) để chuyển đổi n sang giá trị True hoặc False rồi in ra màn hình.',
    inputDesc: 'Một số nguyên n.',
    outputDesc: 'Giá trị True hoặc False.',
    hint: 'print(bool(n))',
    sampleSolution: 'n = int(input())\nprint(bool(n))\n',
    initialCode: 'n = int(input())\n# Ép kiểu sang bool và in ra\n',
    testCases: [
      { input: '0', expectedOutput: 'False', description: 'Số 0 mang giá trị False' },
      { input: '10', expectedOutput: 'True', description: 'Số khác 0 mang giá trị True' },
      { input: '-5', expectedOutput: 'True', description: 'Số âm khác 0 mang giá trị True' }
    ]
  },
  {
    id: 21,
    code: 'CH02_11',
    chapterId: 2,
    chapterName: 'Biến và kiểu dữ liệu',
    title: 'Đổi giây sang phút và giây dư',
    difficulty: 'Trung bình',
    appliedKnowledge: 'Toán tử chia nguyên (//) và chia dư (%).',
    description: 'Nhập vào tổng số giây s (số nguyên dương). Hãy quy đổi ra số phút và số giây còn lại. In ra theo định dạng: "X phut Y giay".',
    inputDesc: 'Một số nguyên s biểu thị số giây.',
    outputDesc: 'Định dạng "X phut Y giay".',
    hint: 'm = s // 60; sec = s % 60',
    sampleSolution: 's = int(input())\nm = s // 60\nsec = s % 60\nprint(f"{m} phut {sec} giay")\n',
    initialCode: 's = int(input())\n# Đổi giây sang phút và giây dư\n',
    testCases: [
      { input: '125', expectedOutput: '2 phut 5 giay', description: '125s -> 2 phút 5 giây' },
      { input: '360', expectedOutput: '6 phut 0 giay', description: '360s -> 6 phút 0 giây' }
    ]
  },
  {
    id: 22,
    code: 'CH02_12',
    chapterId: 2,
    chapterName: 'Biến và kiểu dữ liệu',
    title: 'Tách chữ số hàng chục và đơn vị',
    difficulty: 'Trung bình',
    appliedKnowledge: 'Toán tử chia nguyên và chia dư cho 10.',
    description: 'Nhập vào một số nguyên dương có 2 chữ số N (10 <= N <= 99). Hãy in ra chữ số hàng chục trên dòng 1 và chữ số hàng đơn vị trên dòng 2.',
    inputDesc: 'Một số nguyên N có 2 chữ số.',
    outputDesc: '2 dòng lần lượt là hàng chục và hàng đơn vị.',
    hint: 'chuc = N // 10; don_vi = N % 10',
    sampleSolution: 'n = int(input())\nprint(n // 10)\nprint(n % 10)\n',
    initialCode: 'n = int(input())\n# Tách hàng chục và đơn vị\n',
    testCases: [
      { input: '79', expectedOutput: '7\n9', description: 'Số 79' },
      { input: '40', expectedOutput: '4\n0', description: 'Số 40' }
    ]
  },
  {
    id: 23,
    code: 'CH02_13',
    chapterId: 2,
    chapterName: 'Biến và kiểu dữ liệu',
    title: 'Tổng chữ số của số nguyên 3 chữ số',
    difficulty: 'Trung bình',
    appliedKnowledge: 'Toán tử chia lấy nguyên // và chia lấy dư % liên tiếp.',
    description: 'Nhập vào một số nguyên dương N có đúng 3 chữ số (100 <= N <= 999). Tính và in ra tổng của 3 chữ số đó (ví dụ nhập 345 in ra 12 vì 3 + 4 + 5 = 12).',
    inputDesc: 'Số nguyên dương có 3 chữ số.',
    outputDesc: 'Tổng 3 chữ số.',
    hint: 'tram = N // 100; chuc = (N // 10) % 10; donvi = N % 10',
    sampleSolution: 'n = int(input())\ntram = n // 100\nchuc = (n // 10) % 10\ndonvi = n % 10\nprint(tram + chuc + donvi)\n',
    initialCode: 'n = int(input())\n# Tính tổng các chữ số của n\n',
    testCases: [
      { input: '345', expectedOutput: '12', description: '3 + 4 + 5 = 12' },
      { input: '901', expectedOutput: '10', description: '9 + 0 + 1 = 10' }
    ]
  },
  {
    id: 24,
    code: 'CH02_14',
    chapterId: 2,
    chapterName: 'Biến và kiểu dữ liệu',
    title: 'Quy đổi nhiệt độ Celsius sang Fahrenheit',
    difficulty: 'Trung bình',
    appliedKnowledge: 'Công thức toán học với số thực float.',
    description: 'Nhập vào nhiệt độ theo thang đo độ C (Celsius). Hãy tính và in ra nhiệt độ tương ứng theo thang đo độ F (Fahrenheit) với công thức: F = C * 1.8 + 32. Kết quả làm tròn 1 chữ số thập phân.',
    inputDesc: 'Nhiệt độ Celsius (float).',
    outputDesc: 'Nhiệt độ Fahrenheit làm tròn 1 chữ số.',
    hint: 'f = c * 1.8 + 32; in round(f, 1)',
    sampleSolution: 'c = float(input())\nf = c * 1.8 + 32\nprint(round(f, 1))\n',
    initialCode: 'c = float(input())\n# Đổi C sang F\n',
    testCases: [
      { input: '0', expectedOutput: '32.0', description: '0 độ C là 32 độ F' },
      { input: '37.5', expectedOutput: '99.5', description: '37.5 độ C' }
    ]
  },
  {
    id: 25,
    code: 'CH02_15',
    chapterId: 2,
    chapterName: 'Biến và kiểu dữ liệu',
    title: 'Tách phần nguyên và phần thập phân của số thực',
    difficulty: 'Khó',
    appliedKnowledge: 'Ép kiểu int() và phép trừ số thực, round().',
    description: 'Nhập vào một số thực dương x. In ra phần nguyên của x trên dòng 1 (dạng int) và phần thập phân trên dòng 2 (làm tròn 4 chữ số thập phân).',
    inputDesc: 'Một số thực dương x.',
    outputDesc: 'Dòng 1: phần nguyên. Dòng 2: phần thập phân.',
    hint: 'nguyen = int(x); thap_phan = round(x - nguyen, 4)',
    sampleSolution: 'x = float(input())\nnguyen = int(x)\nthap_phan = round(x - nguyen, 4)\nprint(nguyen)\nprint(thap_phan)\n',
    initialCode: 'x = float(input())\n# Tách phần nguyên và phần thập phân\n',
    testCases: [
      { input: '12.3456', expectedOutput: '12\n0.3456', description: 'Tách 12.3456' },
      { input: '7.8', expectedOutput: '7\n0.8', description: 'Tách 7.8' }
    ]
  },
  {
    id: 26,
    code: 'CH02_16',
    chapterId: 2,
    chapterName: 'Biến và kiểu dữ liệu',
    title: 'Tính số tiền thanh toán sau giảm giá',
    difficulty: 'Khó',
    appliedKnowledge: 'Tính toán tỷ lệ phần trăm và làm tròn số nguyên.',
    description: 'Một cửa hàng áp dụng giảm giá. Nhập giá gốc mặt hàng (số nguyên dong) và phần trăm giảm giá k (số nguyên từ 1 đến 99). Tính và in ra số tiền thực tế khách phải trả dưới dạng số nguyên (làm tròn số nguyên int).',
    inputDesc: 'Dòng 1: giá gốc. Dòng 2: phần trăm giảm k.',
    outputDesc: 'Số tiền thanh toán cuối cùng (số nguyên).',
    hint: 'thanh_toan = int(gia_goc * (100 - k) / 100)',
    sampleSolution: 'gia = int(input())\nk = int(input())\nprint(int(gia * (100 - k) / 100))\n',
    initialCode: 'gia = int(input())\nk = int(input())\n# Tính tiền sau giảm giá\n',
    testCases: [
      { input: '200000\n15', expectedOutput: '170000', description: '200k giảm 15% còn 170k' },
      { input: '50000\n50', expectedOutput: '25000', description: '50k giảm 50% còn 25k' }
    ]
  },
  {
    id: 27,
    code: 'CH02_17',
    chapterId: 2,
    chapterName: 'Biến và kiểu dữ liệu',
    title: 'Chuyển đổi đơn vị mét sang centimét và milimét',
    difficulty: 'Khó',
    appliedKnowledge: 'Nhân số thực và ép kiểu số nguyên.',
    description: 'Nhập chiều dài m tính bằng mét (số thực). Hãy in ra chiều dài tương ứng theo đơn vị centimet (cm) trên dòng 1 và milimet (mm) trên dòng 2 dưới dạng số nguyên (dùng int()).',
    inputDesc: 'Một số thực m.',
    outputDesc: 'Dòng 1: cm. Dòng 2: mm.',
    hint: 'cm = int(m * 100); mm = int(m * 1000)',
    sampleSolution: 'm = float(input())\nprint(int(round(m * 100)))\nprint(int(round(m * 1000)))\n',
    initialCode: 'm = float(input())\n# Quy đổi m sang cm và mm\n',
    testCases: [
      { input: '1.75', expectedOutput: '175\n1750', description: '1.75m -> 175cm, 1750mm' },
      { input: '0.5', expectedOutput: '50\n500', description: '0.5m -> 50cm, 500mm' }
    ]
  },
  {
    id: 28,
    code: 'CH02_18',
    chapterId: 2,
    chapterName: 'Biến và kiểu dữ liệu',
    title: 'Tính chỉ số khối cơ thể BMI',
    difficulty: 'Khó',
    appliedKnowledge: 'Công thức toán học BMI = can_nang / (chieu_cao ** 2).',
    description: 'Nhập vào cân nặng tính bằng kg (float) trên dòng 1 và chiều cao tính bằng mét (float) trên dòng 2. Tính chỉ số BMI = can_nang / (chieu_cao ** 2) và in ra kết quả làm tròn 2 chữ số thập phân.',
    inputDesc: 'Dòng 1: cân nặng (kg). Dòng 2: chiều cao (m).',
    outputDesc: 'Chỉ số BMI làm tròn 2 chữ số thập phân.',
    hint: 'bmi = can_nang / (chieu_cao ** 2); round(bmi, 2)',
    sampleSolution: 'w = float(input())\nh = float(input())\nbmi = w / (h ** 2)\nprint(round(bmi, 2))\n',
    initialCode: 'w = float(input())\nh = float(input())\n# Tính BMI\n',
    testCases: [
      { input: '65.0\n1.70', expectedOutput: '22.49', description: '65kg cao 1.70m' },
      { input: '50.0\n1.60', expectedOutput: '19.53', description: '50kg cao 1.60m' }
    ]
  }
];
