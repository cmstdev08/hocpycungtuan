// Danh sách bài tập Chương 5: Cấu trúc rẽ nhánh If - Else (25 bài tập)
export const chapter5Exercises = [
  {
    id: 65,
    code: 'CH05_01',
    chapterId: 5,
    chapterName: 'Cấu trúc điều kiện',
    title: 'Kiểm tra số âm, dương hay bằng không',
    difficulty: 'Dễ',
    appliedKnowledge: 'Cấu trúc if - elif - else cơ bản.',
    description: 'Nhập vào một số nguyên n. In ra "DUONG" nếu n > 0, in ra "AM" nếu n < 0, và in ra "KHONG" nếu n == 0.',
    inputDesc: 'Một số nguyên n.',
    outputDesc: 'Chuỗi "DUONG", "AM", hoặc "KHONG".',
    hint: 'if n > 0: print("DUONG") elif n < 0: print("AM") else: print("KHONG")',
    sampleSolution: 'n = int(input())\nif n > 0:\n    print("DUONG")\nelif n < 0:\n    print("AM")\nelse:\n    print("KHONG")\n',
    initialCode: 'n = int(input())\n# Kiểm tra số âm, dương hay 0\n',
    testCases: [
      { input: '15', expectedOutput: 'DUONG', description: 'Số 15 là số dương' },
      { input: '-7', expectedOutput: 'AM', description: 'Số -7 là số âm' },
      { input: '0', expectedOutput: 'KHONG', description: 'Số 0' }
    ]
  },
  {
    id: 66,
    code: 'CH05_02',
    chapterId: 5,
    chapterName: 'Cấu trúc điều kiện',
    title: 'Kiểm tra chẵn lẻ với if - else',
    difficulty: 'Dễ',
    appliedKnowledge: 'Toán tử chia dư % và cấu trúc rẽ nhánh.',
    description: 'Nhập một số nguyên n. In ra "CHAN" nếu n là số chẵn, in ra "LE" nếu n là số lẻ.',
    inputDesc: 'Một số nguyên n.',
    outputDesc: 'Chuỗi "CHAN" hoặc "LE".',
    hint: 'if n % 2 == 0: print("CHAN") else: print("LE")',
    sampleSolution: 'n = int(input())\nif n % 2 == 0:\n    print("CHAN")\nelse:\n    print("LE")\n',
    initialCode: 'n = int(input())\n# In CHAN hoặc LE\n',
    testCases: [
      { input: '44', expectedOutput: 'CHAN', description: '44 là chẵn' },
      { input: '27', expectedOutput: 'LE', description: '27 là lẻ' }
    ]
  },
  {
    id: 67,
    code: 'CH05_03',
    chapterId: 5,
    chapterName: 'Cấu trúc điều kiện',
    title: 'Tìm số lớn hơn trong hai số nguyên',
    difficulty: 'Dễ',
    appliedKnowledge: 'So sánh a > b và gán kết quả.',
    description: 'Nhập vào 2 số nguyên a và b trên 2 dòng. In ra số có giá trị lớn hơn. Nếu 2 số bằng nhau thì in ra giá trị đó.',
    inputDesc: '2 dòng là 2 số nguyên a và b.',
    outputDesc: 'Số lớn hơn trong hai số.',
    hint: 'if a > b: print(a) else: print(b)',
    sampleSolution: 'a = int(input())\nb = int(input())\nif a > b:\n    print(a)\nelse:\n    print(b)\n',
    initialCode: 'a = int(input())\nb = int(input())\n# In số lớn hơn\n',
    testCases: [
      { input: '18\n32', expectedOutput: '32', description: 'Max của 18 và 32 là 32' },
      { input: '-5\n-10', expectedOutput: '-5', description: 'Max số âm' }
    ]
  },
  {
    id: 68,
    code: 'CH05_04',
    chapterId: 5,
    chapterName: 'Cấu trúc điều kiện',
    title: 'Kiểm tra độ tuổi xem phim 18+',
    difficulty: 'Dễ',
    appliedKnowledge: 'Toán tử so sánh >=.',
    description: 'Nhập vào tuổi của một khán giả. Nếu tuổi >= 18 thì in "DU TUOI", ngược lại in "CHUA DU TUOI".',
    inputDesc: 'Một số nguyên tuổi.',
    outputDesc: '"DU TUOI" hoặc "CHUA DU TUOI".',
    hint: 'if tuoi >= 18: print("DU TUOI") else: print("CHUA DU TUOI")',
    sampleSolution: 'tuoi = int(input())\nif tuoi >= 18:\n    print("DU TUOI")\nelse:\n    print("CHUA DU TUOI")\n',
    initialCode: 'tuoi = int(input())\n# Kiểm tra độ tuổi\n',
    testCases: [
      { input: '18', expectedOutput: 'DU TUOI', description: '18 tuổi đủ điều kiện' },
      { input: '16', expectedOutput: 'CHUA DU TUOI', description: '16 tuổi chưa đủ' }
    ]
  },
  {
    id: 69,
    code: 'CH05_05',
    chapterId: 5,
    chapterName: 'Cấu trúc điều kiện',
    title: 'Kiểm tra năm nhuận (Leap Year)',
    difficulty: 'Trung bình',
    appliedKnowledge: 'Biểu thức điều kiện phức hợp: (nam % 400 == 0) or (nam % 4 == 0 and nam % 100 != 0).',
    description: 'Nhập một số nguyên dương đại diện cho năm. Năm nhuận là năm chia hết cho 400 HOẶC (chia hết cho 4 nhưng không chia hết cho 100). In ra "NAM NHUAN" nếu đúng, ngược lại in "KHONG NHUAN".',
    inputDesc: 'Một số nguyên năm.',
    outputDesc: '"NAM NHUAN" hoặc "KHONG NHUAN".',
    hint: 'if (nam % 400 == 0) or (nam % 4 == 0 and nam % 100 != 0): ...',
    sampleSolution: 'nam = int(input())\nif (nam % 400 == 0) or (nam % 4 == 0 and nam % 100 != 0):\n    print("NAM NHUAN")\nelse:\n    print("KHONG NHUAN")\n',
    initialCode: 'nam = int(input())\n# Kiểm tra năm nhuận\n',
    testCases: [
      { input: '2024', expectedOutput: 'NAM NHUAN', description: '2024 chia hết cho 4' },
      { input: '2000', expectedOutput: 'NAM NHUAN', description: '2000 chia hết cho 400' },
      { input: '1900', expectedOutput: 'KHONG NHUAN', description: '1900 chia hết 100 nhưng không chia hết 400' }
    ]
  },
  {
    id: 70,
    code: 'CH05_06',
    chapterId: 5,
    chapterName: 'Cấu trúc điều kiện',
    title: 'Xếp loại học lực thang điểm 10',
    difficulty: 'Trung bình',
    appliedKnowledge: 'Chuỗi rẽ nhánh if - elif - else nhiều mức.',
    description: 'Nhập điểm trung bình tích lũy của sinh viên (số thực float từ 0 đến 10). Quy tắc xếp loại:\n- Điểm >= 8.5: "Xuat sac"\n- 7.0 <= Điểm < 8.5: "Gioi"\n- 5.5 <= Điểm < 7.0: "Kha"\n- 4.0 <= Điểm < 5.5: "Trung binh"\n- Điểm < 4.0: "Yeu"\nIn ra xếp loại học lực tương ứng.',
    inputDesc: 'Một số thực từ 0.0 đến 10.0.',
    outputDesc: 'Tên xếp loại học lực.',
    hint: 'Dùng if d >= 8.5 elif d >= 7.0 elif d >= 5.5 elif d >= 4.0 else',
    sampleSolution: 'd = float(input())\nif d >= 8.5:\n    print("Xuat sac")\nelif d >= 7.0:\n    print("Gioi")\nelif d >= 5.5:\n    print("Kha")\nelif d >= 4.0:\n    print("Trung binh")\nelse:\n    print("Yeu")\n',
    initialCode: 'd = float(input())\n# Xếp loại học lực\n',
    testCases: [
      { input: '8.8', expectedOutput: 'Xuat sac', description: '8.8 là Xuất sắc' },
      { input: '7.2', expectedOutput: 'Gioi', description: '7.2 là Giỏi' },
      { input: '3.5', expectedOutput: 'Yeu', description: '3.5 là Yếu' }
    ]
  },
  {
    id: 71,
    code: 'CH05_07',
    chapterId: 5,
    chapterName: 'Cấu trúc điều kiện',
    title: 'Giải phương trình bậc nhất ax + b = 0',
    difficulty: 'Trung bình',
    appliedKnowledge: 'Xét các trường hợp a == 0 và a != 0.',
    description: 'Nhập 2 số thực a và b trên 2 dòng giải phương trình ax + b = 0:\n- Nếu a == 0 và b == 0: in "VO SO NGHIEM"\n- Nếu a == 0 và b != 0: in "VO NGHIEM"\n- Nếu a != 0: in nghiệm x = -b / a (làm tròn 2 chữ số thập phân).',
    inputDesc: '2 dòng là 2 số thực a và b.',
    outputDesc: '"VO SO NGHIEM", "VO NGHIEM" hoặc số thực nghiệm làm tròn 2 chữ số.',
    hint: 'if a == 0: if b == 0: ... else: ... else: round(-b / a, 2)',
    sampleSolution: 'a = float(input())\nb = float(input())\nif a == 0:\n    if b == 0:\n        print("VO SO NGHIEM")\n    else:\n        print("VO NGHIEM")\nelse:\n    print(round(-b / a, 2))\n',
    initialCode: 'a = float(input())\nb = float(input())\n# Giải ax + b = 0\n',
    testCases: [
      { input: '2.0\n-4.0', expectedOutput: '2.0', description: '2x - 4 = 0 -> x = 2.0' },
      { input: '0.0\n5.0', expectedOutput: 'VO NGHIEM', description: '0x + 5 = 0' },
      { input: '0.0\n0.0', expectedOutput: 'VO SO NGHIEM', description: '0x + 0 = 0' }
    ]
  },
  {
    id: 72,
    code: 'CH05_08',
    chapterId: 5,
    chapterName: 'Cấu trúc điều kiện',
    title: 'Tìm số lớn nhất trong 3 số nguyên bằng if',
    difficulty: 'Trung bình',
    appliedKnowledge: 'Thuật toán tìm max bằng biến phụ max_val kết hợp if.',
    description: 'Nhập vào 3 số nguyên a, b, c trên 3 dòng. Bằng cách sử dụng câu lệnh điều kiện if (không dùng hàm max()), hãy tìm và in ra giá trị lớn nhất trong 3 số.',
    inputDesc: '3 dòng là 3 số nguyên.',
    outputDesc: 'Số lớn nhất.',
    hint: 'm = a; if b > m: m = b; if c > m: m = c; print(m)',
    sampleSolution: 'a = int(input())\nb = int(input())\nc = int(input())\nm = a\nif b > m:\n    m = b\nif c > m:\n    m = c\nprint(m)\n',
    initialCode: 'a = int(input())\nb = int(input())\nc = int(input())\n# Tìm max dùng if\n',
    testCases: [
      { input: '12\n45\n30', expectedOutput: '45', description: 'Max là 45' },
      { input: '-1\n-8\n-3', expectedOutput: '-1', description: 'Max số âm là -1' }
    ]
  },
  {
    id: 73,
    code: 'CH05_09',
    chapterId: 5,
    chapterName: 'Cấu trúc điều kiện',
    title: 'Phân loại tam giác theo cạnh',
    difficulty: 'Khó',
    appliedKnowledge: 'Điều kiện tam giác đều, cân, vuông (Pythagoras) và thường.',
    description: 'Nhập 3 cạnh a, b, c (số thực dương đã thỏa mãn bất đẳng thức tam giác). Hãy in ra loại tam giác:\n- Nếu 3 cạnh bằng nhau: in "TAM GIAC DEU"\n- Nếu có 2 cạnh bằng nhau: in "TAM GIAC CAN"\n- Nếu a^2 + b^2 == c^2 hoặc a^2 + c^2 == b^2 hoặc b^2 + c^2 == a^2: in "TAM GIAC VUONG"\n- Ngược lại: in "TAM GIAC THUONG"',
    inputDesc: '3 dòng là 3 số thực a, b, c.',
    outputDesc: 'Loại tam giác tương ứng.',
    hint: 'Kiểm tra đều trước, sau đó cân, vuông, thường.',
    sampleSolution: 'a = float(input())\nb = float(input())\nc = float(input())\nif a == b == c:\n    print("TAM GIAC DEU")\nelif round(a**2 + b**2, 4) == round(c**2, 4) or round(a**2 + c**2, 4) == round(b**2, 4) or round(b**2 + c**2, 4) == round(a**2, 4):\n    print("TAM GIAC VUONG")\nelif a == b or a == c or b == c:\n    print("TAM GIAC CAN")\nelse:\n    print("TAM GIAC THUONG")\n',
    initialCode: 'a = float(input())\nb = float(input())\nc = float(input())\n# Phân loại tam giác\n',
    testCases: [
      { input: '3\n3\n3', expectedOutput: 'TAM GIAC DEU', description: 'Tam giác đều' },
      { input: '3\n4\n5', expectedOutput: 'TAM GIAC VUONG', description: 'Tam giác vuông 3-4-5' },
      { input: '5\n5\n6', expectedOutput: 'TAM GIAC CAN', description: 'Tam giác cân' },
      { input: '4\n5\n6', expectedOutput: 'TAM GIAC THUONG', description: 'Tam giác thường' }
    ]
  },
  {
    id: 74,
    code: 'CH05_10',
    chapterId: 5,
    chapterName: 'Cấu trúc điều kiện',
    title: 'Tính tiền cước taxi theo quãng đường',
    difficulty: 'Khó',
    appliedKnowledge: 'Bài toán tính cước phân đoạn bậc thang.',
    description: 'Nhập số km di chuyển d (số thực > 0). Bảng giá cước taxi tính như sau:\n- 1 km đầu tiên: giá 15.000 đ\n- Từ km thứ 2 đến km thứ 10 (tối đa 9 km): giá 13.000 đ/km\n- Từ km thứ 11 trở đi: giá 11.000 đ/km\nTính và in ra tổng số tiền cước (số nguyên int).',
    inputDesc: 'Một số thực d là số km.',
    outputDesc: 'Tổng tiền cước taxi (int).',
    hint: 'Nếu d <= 1: 15000. Nếu d <= 10: 15000 + (d-1)*13000. Nếu d > 10: 15000 + 9*13000 + (d-10)*11000',
    sampleSolution: 'd = float(input())\nif d <= 1:\n    tien = d * 15000\nelif d <= 10:\n    tien = 15000 + (d - 1) * 13000\nelse:\n    tien = 15000 + 9 * 13000 + (d - 10) * 11000\nprint(int(tien))\n',
    initialCode: 'd = float(input())\n# Tính cước taxi\n',
    testCases: [
      { input: '0.8', expectedOutput: '12000', description: 'Đi 0.8 km' },
      { input: '5.0', expectedOutput: '67000', description: '15000 + 4*13000 = 67000' },
      { input: '15.0', expectedOutput: '187000', description: '15k + 9*13k + 5*11k = 187k' }
    ]
  },
  {
    id: 75,
    code: 'CH05_11',
    chapterId: 5,
    chapterName: 'Cấu trúc điều kiện',
    title: 'Phân loại ký tự chữ hoa, chữ thường và chữ số',
    difficulty: 'Trung bình',
    appliedKnowledge: 'Phương thức kiểm tra ký tự isupper(), islower(), isdigit().',
    description: 'Nhập vào một ký tự c duy nhất. Phân loại và in ra:\n- "CHU HOA" nếu là chữ cái viết hoa\n- "CHU THUONG" nếu là chữ cái viết thường\n- "CHU SO" nếu là chữ số\n- "KY TU KHAC" nếu là các ký tự còn lại.',
    inputDesc: 'Một ký tự c.',
    outputDesc: 'Tên nhóm ký tự tương ứng.',
    hint: 'c.isupper(), c.islower(), c.isdigit()',
    sampleSolution: 'c = input()\nif c.isupper():\n    print("CHU HOA")\nelif c.islower():\n    print("CHU THUONG")\nelif c.isdigit():\n    print("CHU SO")\nelse:\n    print("KY TU KHAC")\n',
    initialCode: 'c = input()\n# Phân loại ký tự\n',
    testCases: [
      { input: 'P', expectedOutput: 'CHU HOA', description: 'Ký tự P' },
      { input: 'y', expectedOutput: 'CHU THUONG', description: 'Ký tự y' },
      { input: '8', expectedOutput: 'CHU SO', description: 'Chữ số 8' },
      { input: '@', expectedOutput: 'KY TU KHAC', description: 'Ký tự @' }
    ]
  },
  {
    id: 76,
    code: 'CH05_12',
    chapterId: 5,
    chapterName: 'Cấu trúc điều kiện',
    title: 'Tính tiền điện sinh hoạt bậc thang',
    difficulty: 'Khó',
    appliedKnowledge: 'Tính toán giá bậc thang theo định mức.',
    description: 'Nhập số điện tiêu thụ k (số nguyên kWh). Giá bán lẻ điện sinh hoạt:\n- Bậc 1: Cho 50 kWh đầu tiên: 1.678 đ/kWh\n- Bậc 2: Cho 50 kWh tiếp theo (từ kWh 51 đến 100): 1.734 đ/kWh\n- Bậc 3: Từ kWh 101 trở lên: 2.014 đ/kWh\nTính và in tổng tiền điện dưới dạng số nguyên int.',
    inputDesc: 'Số nguyên kWh điện tiêu thụ.',
    outputDesc: 'Tổng tiền điện (int).',
    hint: 'Tương tự bài taxi chia các mốc 50 và 100',
    sampleSolution: 'k = int(input())\nif k <= 50:\n    tien = k * 1678\nelif k <= 100:\n    tien = 50 * 1678 + (k - 50) * 1734\nelse:\n    tien = 50 * 1678 + 50 * 1734 + (k - 100) * 2014\nprint(int(tien))\n',
    initialCode: 'k = int(input())\n# Tính tiền điện sinh hoạt\n',
    testCases: [
      { input: '40', expectedOutput: '67120', description: '40 kWh bậc 1' },
      { input: '80', expectedOutput: '135920', description: '80 kWh qua bậc 2' },
      { input: '120', expectedOutput: '210880', description: '120 kWh qua bậc 3' }
    ]
  },
  {
    id: 77,
    code: 'CH05_13',
    chapterId: 5,
    chapterName: 'Cấu trúc điều kiện',
    title: 'Tìm số ngày của một tháng trong năm không nhuận',
    difficulty: 'Trung bình',
    appliedKnowledge: 'Toán tử in danh sách tháng 31, 30 ngày.',
    description: 'Nhập vào một tháng t (số nguyên từ 1 đến 12). Giả sử là năm không nhuận (tháng 2 có 28 ngày). Hãy in ra số ngày trong tháng đó.',
    inputDesc: 'Một số nguyên từ 1 đến 12.',
    outputDesc: 'Số ngày trong tháng (28, 30 hoặc 31).',
    hint: 'Tháng 1,3,5,7,8,10,12 có 31 ngày. Tháng 4,6,9,11 có 30 ngày. Tháng 2 có 28 ngày.',
    sampleSolution: 't = int(input())\nif t in [1, 3, 5, 7, 8, 10, 12]:\n    print(31)\nelif t in [4, 6, 9, 11]:\n    print(30)\nelif t == 2:\n    print(28)\n',
    initialCode: 't = int(input())\n# In số ngày trong tháng\n',
    testCases: [
      { input: '10', expectedOutput: '31', description: 'Tháng 10 có 31 ngày' },
      { input: '4', expectedOutput: '30', description: 'Tháng 4 có 30 ngày' },
      { input: '2', expectedOutput: '28', description: 'Tháng 2 có 28 ngày' }
    ]
  },
  {
    id: 78,
    code: 'CH05_14',
    chapterId: 5,
    chapterName: 'Cấu trúc điều kiện',
    title: 'Máy tính bỏ túi mini 4 phép toán cơ bản',
    difficulty: 'Khó',
    appliedKnowledge: 'So sánh toán tử chuỗi +, -, *, / và xử lý mẫu số 0.',
    description: 'Nhập số thực a trên dòng 1, toán tử op (+, -, *, /) trên dòng 2, số thực b trên dòng 3. Thực hiện phép tính:\n- Nếu op là / và b == 0: in ra "Loi chia cho 0"\n- Ngược lại in ra kết quả phép tính làm tròn 2 chữ số thập phân.',
    inputDesc: 'Dòng 1: số a. Dòng 2: toán tử. Dòng 3: số b.',
    outputDesc: 'Kết quả làm tròn 2 số hoặc chuỗi lỗi.',
    hint: 'if op == "+": ... elif op == "/": if b == 0: ...',
    sampleSolution: 'a = float(input())\nop = input().strip()\nb = float(input())\nif op == "+":\n    print(round(a + b, 2))\nelif op == "-":\n    print(round(a - b, 2))\nelif op == "*":\n    print(round(a * b, 2))\nelif op == "/":\n    if b == 0:\n        print("Loi chia cho 0")\n    else:\n        print(round(a / b, 2))\n',
    initialCode: 'a = float(input())\nop = input().strip()\nb = float(input())\n# Thực hiện phép tính\n',
    testCases: [
      { input: '10\n+\n5.5', expectedOutput: '15.5', description: '10 + 5.5 = 15.5' },
      { input: '8\n/\n0', expectedOutput: 'Loi chia cho 0', description: 'Chia cho 0' },
      { input: '14\n/\n4', expectedOutput: '3.5', description: '14 / 4 = 3.5' }
    ]
  },
  {
    id: 79,
    code: 'CH05_15',
    chapterId: 5,
    chapterName: 'Cấu trúc điều kiện',
    title: 'Phân loại tình trạng thể trạng theo chỉ số BMI',
    difficulty: 'Trung bình',
    appliedKnowledge: 'Tính toán BMI và so sánh điều kiện.',
    description: 'Nhập cân nặng w (kg, float) và chiều cao h (m, float) trên 2 dòng. Tính BMI = w / (h^2). Phân loại:\n- BMI < 18.5: in "Gay"\n- 18.5 <= BMI < 25.0: in "Binh thuong"\n- 25.0 <= BMI < 30.0: in "Thua can"\n- BMI >= 30.0: in "Beo phi"',
    inputDesc: 'Dòng 1: cân nặng (kg). Dòng 2: chiều cao (m).',
    outputDesc: 'Tình trạng thể trạng tương ứng.',
    hint: 'bmi = w / (h ** 2)',
    sampleSolution: 'w = float(input())\nh = float(input())\nbmi = w / (h ** 2)\nif bmi < 18.5:\n    print("Gay")\nelif bmi < 25.0:\n    print("Binh thuong")\nelif bmi < 30.0:\n    print("Thua can")\nelse:\n    print("Beo phi")\n',
    initialCode: 'w = float(input())\nh = float(input())\n# Phân loại BMI\n',
    testCases: [
      { input: '50\n1.7', expectedOutput: 'Gay', description: 'BMI ~ 17.3' },
      { input: '65\n1.7', expectedOutput: 'Binh thuong', description: 'BMI ~ 22.5' },
      { input: '85\n1.65', expectedOutput: 'Beo phi', description: 'BMI ~ 31.2' }
    ]
  },
  {
    id: 80,
    code: 'CH05_16',
    chapterId: 5,
    chapterName: 'Cấu trúc điều kiện',
    title: 'Hệ thống xác thực đăng nhập tài khoản',
    difficulty: 'Dễ',
    appliedKnowledge: 'So sánh chuỗi username và password kết hợp toán tử and.',
    description: 'Nhập tên đăng nhập username trên dòng 1 và mật khẩu password trên dòng 2. Nếu username là "admin" và password là "123456" thì in "DANG NHAP THANH CONG", ngược lại in "SAI THONG TIN".',
    inputDesc: 'Dòng 1: username. Dòng 2: password.',
    outputDesc: '"DANG NHAP THANH CONG" hoặc "SAI THONG TIN".',
    hint: 'if u == "admin" and p == "123456": ...',
    sampleSolution: 'u = input().strip()\np = input().strip()\nif u == "admin" and p == "123456":\n    print("DANG NHAP THANH CONG")\nelse:\n    print("SAI THONG TIN")\n',
    initialCode: 'u = input().strip()\np = input().strip()\n# Kiểm tra đăng nhập\n',
    testCases: [
      { input: 'admin\n123456', expectedOutput: 'DANG NHAP THANH CONG', description: 'Đúng thông tin' },
      { input: 'admin\nabcxyz', expectedOutput: 'SAI THONG TIN', description: 'Sai mật khẩu' }
    ]
  },
  {
    id: 81,
    code: 'CH05_17',
    chapterId: 5,
    chapterName: 'Cấu trúc điều kiện',
    title: 'Xác định quý trong năm theo tháng',
    difficulty: 'Dễ',
    appliedKnowledge: 'Toán tử chia nguyên hoặc rẽ nhánh điều kiện.',
    description: 'Nhập vào một tháng t (số nguyên từ 1 đến 12). Hãy in ra quý tương ứng trong năm:\n- Tháng 1, 2, 3: in "Quy 1"\n- Tháng 4, 5, 6: in "Quy 2"\n- Tháng 7, 8, 9: in "Quy 3"\n- Tháng 10, 11, 12: in "Quy 4"',
    inputDesc: 'Một số nguyên từ 1 đến 12.',
    outputDesc: '"Quy 1", "Quy 2", "Quy 3", hoặc "Quy 4".',
    hint: 'quy = (t - 1) // 3 + 1; print(f"Quy {quy}")',
    sampleSolution: 't = int(input())\nquy = (t - 1) // 3 + 1\nprint(f"Quy {quy}")\n',
    initialCode: 't = int(input())\n# In quý trong năm\n',
    testCases: [
      { input: '2', expectedOutput: 'Quy 1', description: 'Tháng 2 là Quý 1' },
      { input: '8', expectedOutput: 'Quy 3', description: 'Tháng 8 là Quý 3' },
      { input: '11', expectedOutput: 'Quy 4', description: 'Tháng 11 là Quý 4' }
    ]
  },
  {
    id: 82,
    code: 'CH05_18',
    chapterId: 5,
    chapterName: 'Cấu trúc điều kiện',
    title: 'Tính phí trông giữ phương tiện',
    difficulty: 'Trung bình',
    appliedKnowledge: 'Phân nhánh theo chuỗi loại phương tiện.',
    description: 'Nhập loại xe trên dòng 1 ("xe dap", "xe may", "o to") và số giờ gửi h (số nguyên dương) trên dòng 2. Giá trông giữ mỗi giờ:\n- "xe dap": 2.000 đ/giờ\n- "xe may": 5.000 đ/giờ\n- "o to": 25.000 đ/giờ\nTính và in ra tổng số tiền phải trả (số nguyên int).',
    inputDesc: 'Dòng 1: loại xe. Dòng 2: số giờ h.',
    outputDesc: 'Tổng tiền phí gửi xe.',
    hint: 'if loai == "xe dap": tien = h * 2000 ...',
    sampleSolution: 'loai = input().strip()\nh = int(input())\nif loai == "xe dap":\n    print(h * 2000)\nelif loai == "xe may":\n    print(h * 5000)\nelif loai == "o to":\n    print(h * 25000)\n',
    initialCode: 'loai = input().strip()\nh = int(input())\n# Tính phí gửi xe\n',
    testCases: [
      { input: 'xe may\n3', expectedOutput: '15000', description: 'Xe máy 3 giờ = 15k' },
      { input: 'o to\n4', expectedOutput: '100000', description: 'Ô tô 4 giờ = 100k' }
    ]
  },
  {
    id: 83,
    code: 'CH05_19',
    chapterId: 5,
    chapterName: 'Cấu trúc điều kiện',
    title: 'Sắp xếp 3 số nguyên tăng dần',
    difficulty: 'Khó',
    appliedKnowledge: 'Thuật toán hoán đổi vị trí if kết hợp a, b = b, a.',
    description: 'Nhập vào 3 số nguyên a, b, c trên 3 dòng. Hãy sắp xếp 3 số theo thứ tự tăng dần và in ra trên cùng một dòng, cách nhau một khoảng trắng (không dùng hàm sorted hoặc list.sort).',
    inputDesc: '3 dòng là 3 số nguyên.',
    outputDesc: '3 số theo thứ tự tăng dần trên 1 dòng.',
    hint: 'if a > b: a, b = b, a; if a > c: a, c = c, a; if b > c: b, c = c, b',
    sampleSolution: 'a = int(input())\nb = int(input())\nc = int(input())\nif a > b:\n    a, b = b, a\nif a > c:\n    a, c = c, a\nif b > c:\n    b, c = c, b\nprint(a, b, c)\n',
    initialCode: 'a = int(input())\nb = int(input())\nc = int(input())\n# Sắp xếp 3 số tăng dần\n',
    testCases: [
      { input: '9\n2\n5', expectedOutput: '2 5 9', description: 'Sắp xếp 9, 2, 5 thành 2 5 9' },
      { input: '10\n-3\n0', expectedOutput: '-3 0 10', description: 'Số âm' }
    ]
  },
  {
    id: 84,
    code: 'CH05_20',
    chapterId: 5,
    chapterName: 'Cấu trúc điều kiện',
    title: 'Giải phương trình bậc 2 (ax^2 + bx + c = 0)',
    difficulty: 'Khó',
    appliedKnowledge: 'Tính delta = b^2 - 4ac và xét nghiệm.',
    description: 'Nhập 3 hệ số a, b, c của phương trình bậc hai ax^2 + bx + c = 0 (với a khác 0). Tính biệt thức delta = b^2 - 4ac:\n- delta < 0: in "VO NGHIEM"\n- delta == 0: in "NGHIEM KEP <x>" (x = -b / (2a) làm tròn 2 số)\n- delta > 0: in 2 nghiệm x1 và x2 (x1 < x2) trên cùng một dòng cách nhau khoảng trắng, mỗi nghiệm làm tròn 2 chữ số.',
    inputDesc: '3 dòng là 3 số thực a, b, c (a != 0).',
    outputDesc: 'Kết quả giải phương trình.',
    hint: 'x1 = (-b - delta**0.5)/(2*a); x2 = (-b + delta**0.5)/(2*a)',
    sampleSolution: 'a = float(input())\nb = float(input())\nc = float(input())\ndelta = b**2 - 4*a*c\nif delta < 0:\n    print("VO NGHIEM")\nelif delta == 0:\n    x = -b / (2 * a)\n    print(f"NGHIEM KEP {round(x, 2)}")\nelse:\n    r1 = (-b - delta**0.5) / (2 * a)\n    r2 = (-b + delta**0.5) / (2 * a)\n    if r1 > r2:\n        r1, r2 = r2, r1\n    print(f"{round(r1, 2)} {round(r2, 2)}")\n',
    initialCode: 'a = float(input())\nb = float(input())\nc = float(input())\n# Giải phương trình bậc 2\n',
    testCases: [
      { input: '1\n-3\n2', expectedOutput: '1.0 2.0', description: 'x^2 - 3x + 2 = 0' },
      { input: '1\n-2\n1', expectedOutput: 'NGHIEM KEP 1.0', description: 'Nghiệm kép x = 1.0' },
      { input: '1\n1\n1', expectedOutput: 'VO NGHIEM', description: 'Delta âm vô nghiệm' }
    ]
  },
  {
    id: 85,
    code: 'CH05_21',
    chapterId: 5,
    chapterName: 'Cấu trúc điều kiện',
    title: 'Kiểm tra giờ mở cửa siêu thị',
    difficulty: 'Dễ',
    appliedKnowledge: 'Điều kiện trong đoạn [8, 21].',
    description: 'Một siêu thị mở cửa từ 8 giờ sáng (8h) đến 21 giờ tối (21h). Nhập một số nguyên hour biểu thị giờ hiện tại trong ngày (từ 0 đến 23). In ra "MO CUA" nếu siêu thị đang mở cửa (8 <= hour <= 21), ngược lại in ra "DONG CUA".',
    inputDesc: 'Một số nguyên hour từ 0 đến 23.',
    outputDesc: '"MO CUA" hoặc "DONG CUA".',
    hint: 'if 8 <= hour <= 21: print("MO CUA") else: print("DONG CUA")',
    sampleSolution: 'h = int(input())\nif 8 <= h <= 21:\n    print("MO CUA")\nelse:\n    print("DONG CUA")\n',
    initialCode: 'h = int(input())\n# Kiểm tra giờ mở cửa\n',
    testCases: [
      { input: '14', expectedOutput: 'MO CUA', description: '14h đang mở cửa' },
      { input: '22', expectedOutput: 'DONG CUA', description: '22h đã đóng cửa' },
      { input: '8', expectedOutput: 'MO CUA', description: 'Đúng 8h sáng' }
    ]
  },
  {
    id: 86,
    code: 'CH05_22',
    chapterId: 5,
    chapterName: 'Cấu trúc điều kiện',
    title: 'Xác định góc phần tư của điểm tọa độ Oxy',
    difficulty: 'Trung bình',
    appliedKnowledge: 'Điều kiện dấu của x và y.',
    description: 'Nhập tọa độ 2D của điểm M(x, y) trên 2 dòng (x, y khác 0). Xác định góc phần tư:\n- x > 0 và y > 0: in "Goc I"\n- x < 0 và y > 0: in "Goc II"\n- x < 0 và y < 0: in "Goc III"\n- x > 0 và y < 0: in "Goc IV"',
    inputDesc: '2 dòng là 2 số thực x và y (khác 0).',
    outputDesc: '"Goc I", "Goc II", "Goc III", hoặc "Goc IV".',
    hint: 'if x > 0 and y > 0: ...',
    sampleSolution: 'x = float(input())\ny = float(input())\nif x > 0 and y > 0:\n    print("Goc I")\nelif x < 0 and y > 0:\n    print("Goc II")\nelif x < 0 and y < 0:\n    print("Goc III")\nelse:\n    print("Goc IV")\n',
    initialCode: 'x = float(input())\ny = float(input())\n# Xác định góc phần tư\n',
    testCases: [
      { input: '3.5\n4.2', expectedOutput: 'Goc I', description: 'Tọa độ dương' },
      { input: '-2\n5', expectedOutput: 'Goc II', description: 'Góc II' },
      { input: '-1\n-1', expectedOutput: 'Goc III', description: 'Góc III' },
      { input: '4\n-3', expectedOutput: 'Goc IV', description: 'Góc IV' }
    ]
  },
  {
    id: 87,
    code: 'CH05_23',
    chapterId: 5,
    chapterName: 'Cấu trúc điều kiện',
    title: 'Trò chơi Oẳn tù tì (Kéo - Búa - Bao)',
    difficulty: 'Khó',
    appliedKnowledge: 'Logic so sánh giữa 2 lựa chọn người chơi.',
    description: 'Nhập lựa chọn của Người 1 trên dòng 1 và Người 2 trên dòng 2 ("Keo", "Bua", "Bao"). Quy tắc: Búa thắng Kéo, Kéo thắng Bao, Bao thắng Búa. In ra "Nguoi 1 thang", "Nguoi 2 thang" hoặc "Hoa".',
    inputDesc: '2 dòng là lựa chọn của 2 người.',
    outputDesc: 'Kết quả ván đấu.',
    hint: 'if p1 == p2: print("Hoa") elif (p1=="Bua" and p2=="Keo") or ...',
    sampleSolution: 'p1 = input().strip()\np2 = input().strip()\nif p1 == p2:\n    print("Hoa")\nelif (p1 == "Bua" and p2 == "Keo") or (p1 == "Keo" and p2 == "Bao") or (p1 == "Bao" and p2 == "Bua"):\n    print("Nguoi 1 thang")\nelse:\n    print("Nguoi 2 thang")\n',
    initialCode: 'p1 = input().strip()\np2 = input().strip()\n# Phân định thắng thua\n',
    testCases: [
      { input: 'Bua\nKeo', expectedOutput: 'Nguoi 1 thang', description: 'Búa thắng Kéo' },
      { input: 'Bao\nBao', expectedOutput: 'Hoa', description: 'Hòa nhau' },
      { input: 'Keo\nBua', expectedOutput: 'Nguoi 2 thang', description: 'Người 2 thắng' }
    ]
  },
  {
    id: 88,
    code: 'CH05_24',
    chapterId: 5,
    chapterName: 'Cấu trúc điều kiện',
    title: 'Tính cước gửi bưu kiện theo khối lượng',
    difficulty: 'Trung bình',
    appliedKnowledge: 'Phân bậc giá cước theo khối lượng gram.',
    description: 'Nhập khối lượng gói hàng w tính bằng gram (số nguyên dương). Bảng giá cước vận chuyển:\n- Đến 500g: giá 15.000 đ\n- Từ trên 500g đến 1500g: giá 25.000 đ\n- Từ trên 1500g đến 3000g: giá 40.000 đ\n- Trên 3000g: giá 40.000 đ + 5.000 đ cho mỗi 500g vượt quá (tính nguyên từng đợt 500g làm tròn lên: dùng ceil hoặc chia nguyên).\nTính và in ra cước phí vận chuyển.',
    inputDesc: 'Một số nguyên w là khối lượng gram.',
    outputDesc: 'Cước phí (int).',
    hint: 'Nếu w > 3000: phần vượt = w - 3000; số đợt 500g = (phần vượt + 499) // 500; tiền = 40000 + số đợt * 5000',
    sampleSolution: 'w = int(input())\nif w <= 500:\n    print(15000)\nelif w <= 1500:\n    print(25000)\nelif w <= 3000:\n    print(40000)\nelse:\n    extra = (w - 3000 + 499) // 500\n    print(40000 + extra * 5000)\n',
    initialCode: 'w = int(input())\n# Tính cước bưu kiện\n',
    testCases: [
      { input: '350', expectedOutput: '15000', description: '350g bậc 1' },
      { input: '1200', expectedOutput: '25000', description: '1200g bậc 2' },
      { input: '3400', expectedOutput: '45000', description: '3400g vượt 400g (+5000đ)' }
    ]
  },
  {
    id: 89,
    code: 'CH05_25',
    chapterId: 5,
    chapterName: 'Cấu trúc điều kiện',
    title: 'Kiểm tra ngày hợp lệ trong tháng',
    difficulty: 'Khó',
    appliedKnowledge: 'Kiểm tra tính hợp lệ của ngày kết hợp tháng và năm nhuận.',
    description: 'Nhập ngày d (int), tháng m (int), năm y (int) trên 3 dòng. Kiểm tra ngày tháng năm đó có hợp lệ hay không:\n- Năm y > 0\n- Tháng m từ 1 đến 12\n- Ngày d phải phù hợp với số ngày tối đa của tháng đó (chú ý tháng 2 có 29 ngày nếu năm nhuận, 28 ngày nếu năm không nhuận).\nIn ra "HOP LE" nếu ngày tháng hợp lệ, ngược lại in "KHONG HOP LE".',
    inputDesc: '3 dòng: d, m, y.',
    outputDesc: '"HOP LE" hoặc "KHONG HOP LE".',
    hint: 'Xác định max_day của tháng m trong năm y, sau đó kiểm tra 1 <= d <= max_day.',
    sampleSolution: 'd = int(input())\nm = int(input())\ny = int(input())\nif y <= 0 or m < 1 or m > 12:\n    print("KHONG HOP LE")\nelse:\n    is_leap = (y % 400 == 0) or (y % 4 == 0 and y % 100 != 0)\n    if m in [1, 3, 5, 7, 8, 10, 12]:\n        max_d = 31\n    elif m in [4, 6, 9, 11]:\n        max_d = 30\n    else:\n        max_d = 29 if is_leap else 28\n    if 1 <= d <= max_d:\n        print("HOP LE")\n    else:\n        print("KHONG HOP LE")\n',
    initialCode: 'd = int(input())\nm = int(input())\ny = int(input())\n# Kiểm tra ngày hợp lệ\n',
    testCases: [
      { input: '29\n2\n2024', expectedOutput: 'HOP LE', description: '29/02/2024 năm nhuận hợp lệ' },
      { input: '29\n2\n2023', expectedOutput: 'KHONG HOP LE', description: '29/02/2023 năm không nhuận' },
      { input: '31\n4\n2025', expectedOutput: 'KHONG HOP LE', description: 'Tháng 4 chỉ có 30 ngày' }
    ]
  }
];
