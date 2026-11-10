// Danh sách bài tập Chương 4: Nhập xuất dữ liệu và Định dạng f-string (18 bài tập)
export const chapter4Exercises = [
  {
    id: 47,
    code: 'CH04_01',
    chapterId: 4,
    chapterName: 'Nhập xuất dữ liệu',
    title: 'Nhập tên và in lời chào f-string',
    difficulty: 'Dễ',
    appliedKnowledge: 'Hàm input() và f-string cơ bản f"Xin chao, {name}!".',
    description: 'Nhập vào tên của một người. Hãy in ra lời chào theo định dạng chính xác: "Xin chao, <tên>!".',
    inputDesc: 'Một chuỗi ký tự tên người.',
    outputDesc: 'Dòng chữ "Xin chao, <tên>!".',
    hint: 'name = input(); print(f"Xin chao, {name}!")',
    sampleSolution: 'name = input()\nprint(f"Xin chao, {name}!")\n',
    initialCode: 'name = input()\n# In lời chào theo f-string\n',
    testCases: [
      { input: 'Tuan', expectedOutput: 'Xin chao, Tuan!', description: 'Tên Tuan' },
      { input: 'Python Coder', expectedOutput: 'Xin chao, Python Coder!', description: 'Tên có khoảng trắng' }
    ]
  },
  {
    id: 48,
    code: 'CH04_02',
    chapterId: 4,
    chapterName: 'Nhập xuất dữ liệu',
    title: 'Ghép Họ và Tên từ 2 dòng',
    difficulty: 'Dễ',
    appliedKnowledge: 'Nhập nhiều dòng và nối chuỗi f"{ho} {ten}".',
    description: 'Nhập họ trên dòng 1 và tên trên dòng 2. Hãy in ra họ và tên đầy đủ trên một dòng, cách nhau một dấu cách.',
    inputDesc: 'Dòng 1: Họ. Dòng 2: Tên.',
    outputDesc: 'Họ và tên đầy đủ.',
    hint: 'ho = input(); ten = input(); print(f"{ho} {ten}")',
    sampleSolution: 'ho = input()\nten = input()\nprint(f"{ho} {ten}")\n',
    initialCode: 'ho = input()\nten = input()\n# Ghép họ và tên\n',
    testCases: [
      { input: 'Nguyen\nAn', expectedOutput: 'Nguyen An', description: 'Nguyen An' },
      { input: 'Tran\nMinh Tuan', expectedOutput: 'Tran Minh Tuan', description: 'Tran Minh Tuan' }
    ]
  },
  {
    id: 49,
    code: 'CH04_03',
    chapterId: 4,
    chapterName: 'Nhập xuất dữ liệu',
    title: 'Định dạng số thực đúng 2 chữ số thập phân',
    difficulty: 'Dễ',
    appliedKnowledge: 'Định dạng f-string f"{x:.2f}".',
    description: 'Nhập vào một số thực x. Sử dụng f-string định dạng hiển thị x với đúng 2 chữ số sau dấu phẩy (làm tròn số theo chuẩn làm tròn của f-string).',
    inputDesc: 'Một số thực x.',
    outputDesc: 'Chuỗi biểu diễn số thực có đúng 2 chữ số thập phân.',
    hint: 'print(f"{x:.2f}")',
    sampleSolution: 'x = float(input())\nprint(f"{x:.2f}")\n',
    initialCode: 'x = float(input())\n# Định dạng 2 chữ số thập phân\n',
    testCases: [
      { input: '3.14159265', expectedOutput: '3.14', description: 'Số pi -> 3.14' },
      { input: '7.0', expectedOutput: '7.00', description: '7.0 -> 7.00' },
      { input: '9.876', expectedOutput: '9.88', description: 'Làm tròn lên 9.88' }
    ]
  },
  {
    id: 50,
    code: 'CH04_04',
    chapterId: 4,
    chapterName: 'Nhập xuất dữ liệu',
    title: 'Định dạng phần trăm với f-string',
    difficulty: 'Dễ',
    appliedKnowledge: 'Định dạng tỷ lệ phần trăm f"{p:.1%}".',
    description: 'Nhập vào một tỷ lệ số thực p (0 <= p <= 1, ví dụ 0.8564). Hãy in ra tỷ lệ đó dưới dạng phần trăm với đúng 1 chữ số sau dấu phẩy (ví dụ: "85.6%").',
    inputDesc: 'Số thực p từ 0 đến 1.',
    outputDesc: 'Định dạng phần trăm X.X%.',
    hint: 'print(f"{p:.1%}")',
    sampleSolution: 'p = float(input())\nprint(f"{p:.1%}")\n',
    initialCode: 'p = float(input())\n# In định dạng phần trăm\n',
    testCases: [
      { input: '0.8564', expectedOutput: '85.6%', description: '0.8564 -> 85.6%' },
      { input: '0.5', expectedOutput: '50.0%', description: '0.5 -> 50.0%' },
      { input: '1.0', expectedOutput: '100.0%', description: '1.0 -> 100.0%' }
    ]
  },
  {
    id: 51,
    code: 'CH04_05',
    chapterId: 4,
    chapterName: 'Nhập xuất dữ liệu',
    title: 'Định dạng dấu phẩy phân cách hàng nghìn',
    difficulty: 'Trung bình',
    appliedKnowledge: 'Định dạng tiền tệ f"{n:,}".',
    description: 'Nhập vào một số nguyên lớn n (ví dụ số tiền). Sử dụng f-string in ra số đó có dấu phẩy (,) ngăn cách mỗi nhóm 3 chữ số hàng nghìn (ví dụ 1000000 -> 1,000,000).',
    inputDesc: 'Một số nguyên n.',
    outputDesc: 'Chuỗi số có dấu phẩy ngăn cách hàng nghìn.',
    hint: 'print(f"{n:,}")',
    sampleSolution: 'n = int(input())\nprint(f"{n:,}")\n',
    initialCode: 'n = int(input())\n# In số có phân cách hàng nghìn\n',
    testCases: [
      { input: '1000000', expectedOutput: '1,000,000', description: '1 triệu' },
      { input: '25450600', expectedOutput: '25,450,600', description: '25 triệu' }
    ]
  },
  {
    id: 52,
    code: 'CH04_06',
    chapterId: 4,
    chapterName: 'Nhập xuất dữ liệu',
    title: 'Chèn số 0 ở đầu (Zero-padding)',
    difficulty: 'Trung bình',
    appliedKnowledge: 'Định dạng padding số nguyên f"{n:05d}".',
    description: 'Nhập vào một số nguyên dương n. Hãy in ra chuỗi biểu diễn số n có độ dài cố định 5 ký tự, nếu thiếu thì chèn thêm các chữ số 0 ở đầu (ví dụ: nhập 42 in ra "00042", nhập 7 in ra "00007").',
    inputDesc: 'Một số nguyên dương n.',
    outputDesc: 'Chuỗi 5 ký tự có padding 0 ở đầu.',
    hint: 'print(f"{n:05d}")',
    sampleSolution: 'n = int(input())\nprint(f"{n:05d}")\n',
    initialCode: 'n = int(input())\n# In số có zero-padding 5 chữ số\n',
    testCases: [
      { input: '42', expectedOutput: '00042', description: '42 thành 00042' },
      { input: '7', expectedOutput: '00007', description: '7 thành 00007' },
      { input: '12345', expectedOutput: '12345', description: 'Đủ 5 chữ số' }
    ]
  },
  {
    id: 53,
    code: 'CH04_07',
    chapterId: 4,
    chapterName: 'Nhập xuất dữ liệu',
    title: 'Định dạng ngày tháng chuẩn ISO (YYYY-MM-DD)',
    difficulty: 'Trung bình',
    appliedKnowledge: 'Zero-padding cho ngày và tháng: f"{nam:04d}-{thang:02d}-{ngay:02d}".',
    description: 'Nhập vào 3 số nguyên lần lượt là ngày, tháng, năm trên 3 dòng. In ra chuỗi ngày tháng chuẩn quốc tế ISO 8601 theo dạng: "YYYY-MM-DD" (năm đủ 4 số, tháng và ngày đủ 2 số).',
    inputDesc: '3 dòng: ngày, tháng, năm.',
    outputDesc: 'Chuỗi dạng YYYY-MM-DD.',
    hint: 'print(f"{nam:04d}-{thang:02d}-{ngay:02d}")',
    sampleSolution: 'ngay = int(input())\nthang = int(input())\nnam = int(input())\nprint(f"{nam:04d}-{thang:02d}-{ngay:02d}")\n',
    initialCode: 'ngay = int(input())\nthang = int(input())\nnam = int(input())\n# In ngày tháng chuẩn ISO\n',
    testCases: [
      { input: '5\n9\n2026', expectedOutput: '2026-09-05', description: 'Ngày 5/9/2026' },
      { input: '22\n12\n2025', expectedOutput: '2025-12-22', description: 'Ngày 22/12/2025' }
    ]
  },
  {
    id: 54,
    code: 'CH04_08',
    chapterId: 4,
    chapterName: 'Nhập xuất dữ liệu',
    title: 'Căn lề cột trong bảng thông tin',
    difficulty: 'Trung bình',
    appliedKnowledge: 'Căn lề f-string: < căn trái, > căn phải.',
    description: 'Nhập mã môn học (chuỗi) trên dòng 1 và số tín chỉ (nguyên) trên dòng 2. In ra theo định dạng: "Mon: <ma môn căn trái 8 ký tự> | Tin chi: <số tín chỉ căn phải 2 ký tự>".',
    inputDesc: 'Dòng 1: mã môn. Dòng 2: số tín chỉ.',
    outputDesc: 'Dòng định dạng cột căn lề.',
    hint: 'print(f"Mon: {ma:<8} | Tin chi: {tc:>2}")',
    sampleSolution: 'ma = input()\ntc = int(input())\nprint(f"Mon: {ma:<8} | Tin chi: {tc:>2}")\n',
    initialCode: 'ma = input()\ntc = int(input())\n# Căn lề cột f-string\n',
    testCases: [
      { input: 'CS101\n3', expectedOutput: 'Mon: CS101    | Tin chi:  3', description: 'CS101 và 3 tín chỉ' },
      { input: 'PYTHON\n4', expectedOutput: 'Mon: PYTHON   | Tin chi:  4', description: 'PYTHON và 4 tín chỉ' }
    ]
  },
  {
    id: 55,
    code: 'CH04_09',
    chapterId: 4,
    chapterName: 'Nhập xuất dữ liệu',
    title: 'Nhập 2 số trên cùng 1 dòng với split()',
    difficulty: 'Dễ',
    appliedKnowledge: 'Phương thức input().split() và ép kiểu bản đồ map(int, ...).',
    description: 'Nhập vào 2 số nguyên a và b trên cùng một dòng, cách nhau bởi 1 dấu cách. Tính và in ra tổng a + b.',
    inputDesc: 'Một dòng chứa 2 số nguyên cách nhau khoảng trắng.',
    outputDesc: 'Tổng a + b.',
    hint: 'a, b = map(int, input().split())',
    sampleSolution: 'a, b = map(int, input().split())\nprint(a + b)\n',
    initialCode: '# Nhập 2 số trên 1 dòng và tính tổng\n',
    testCases: [
      { input: '15 25', expectedOutput: '40', description: '15 + 25 = 40' },
      { input: '-10 30', expectedOutput: '20', description: '-10 + 30 = 20' }
    ]
  },
  {
    id: 56,
    code: 'CH04_10',
    chapterId: 4,
    chapterName: 'Nhập xuất dữ liệu',
    title: 'Nhập 3 số thực phân tách bởi dấu phẩy',
    difficulty: 'Trung bình',
    appliedKnowledge: 'Phương thức input().split(\',\').',
    description: 'Nhập 3 số thực trên 1 dòng duy nhất, phân tách bởi dấu phẩy (ví dụ: "2.5,4.0,3.5"). Hãy tính tích của 3 số đó và in ra làm tròn 2 chữ số thập phân.',
    inputDesc: 'Chuỗi 3 số thực ngăn cách bởi dấu phẩy.',
    outputDesc: 'Tích 3 số làm tròn 2 chữ số.',
    hint: 'a, b, c = map(float, input().split(","))\nprint(round(a * b * c, 2))',
    sampleSolution: 'a, b, c = map(float, input().split(","))\nprint(round(a * b * c, 2))\n',
    initialCode: '# Tách chuỗi theo dấu phẩy và tính tích\n',
    testCases: [
      { input: '2.5,4.0,3.5', expectedOutput: '35.0', description: '2.5 * 4.0 * 3.5 = 35.0' },
      { input: '1.2,1.5,2.0', expectedOutput: '3.6', description: '1.2 * 1.5 * 2.0 = 3.6' }
    ]
  },
  {
    id: 57,
    code: 'CH04_11',
    chapterId: 4,
    chapterName: 'Nhập xuất dữ liệu',
    title: 'Chuyển đổi số nguyên sang hệ nhị phân, bát phân và thập lục phân',
    difficulty: 'Trung bình',
    appliedKnowledge: 'Các hàm chuyển đổi hệ đếm bin(), oct(), hex().',
    description: 'Nhập vào một số nguyên dương n. In ra biểu diễn của n ở hệ nhị phân (bỏ tiền tố 0b) trên dòng 1, hệ bát phân (bỏ tiền tố 0o) trên dòng 2, và hệ thập lục phân chữ hoa (bỏ tiền tố 0x) trên dòng 3.',
    inputDesc: 'Một số nguyên dương n.',
    outputDesc: '3 dòng: nhị phân, bát phân, thập lục phân viết hoa.',
    hint: 'f"{n:b}", f"{n:o}", f"{n:X}"',
    sampleSolution: 'n = int(input())\nprint(f"{n:b}")\nprint(f"{n:o}")\nprint(f"{n:X}")\n',
    initialCode: 'n = int(input())\n# In nhị phân, bát phân, hex\n',
    testCases: [
      { input: '255', expectedOutput: '11111111\n377\nFF', description: '255 thành bin, oct, HEX' },
      { input: '16', expectedOutput: '10000\n20\n10', description: '16' }
    ]
  },
  {
    id: 58,
    code: 'CH04_12',
    chapterId: 4,
    chapterName: 'Nhập xuất dữ liệu',
    title: 'Nối các từ bằng dấu gạch dưới với join()',
    difficulty: 'Dễ',
    appliedKnowledge: 'Phương thức chuỗi str.join().',
    description: 'Nhập vào 3 từ trên 3 dòng riêng biệt. Sử dụng phương thức "_".join(...) để nối 3 từ đó thành một chuỗi duy nhất phân cách bởi dấu gạch dưới.',
    inputDesc: '3 dòng là 3 từ.',
    outputDesc: 'Chuỗi nối bởi dấu gạch dưới.',
    hint: 'w1 = input(); w2 = input(); w3 = input(); print("_".join([w1, w2, w3]))',
    sampleSolution: 'w1 = input()\nw2 = input()\nw3 = input()\nprint("_".join([w1, w2, w3]))\n',
    initialCode: '# Nối 3 từ với "_"\n',
    testCases: [
      { input: 'lap\ntrinh\npython', expectedOutput: 'lap_trinh_python', description: 'lap_trinh_python' },
      { input: 'dai\nhoc\nqg', expectedOutput: 'dai_hoc_qg', description: 'dai_hoc_qg' }
    ]
  },
  {
    id: 59,
    code: 'CH04_13',
    chapterId: 4,
    chapterName: 'Nhập xuất dữ liệu',
    title: 'Định dạng ký hiệu khoa học (Scientific Notation)',
    difficulty: 'Trung bình',
    appliedKnowledge: 'Định dạng số thực f"{x:.2e}".',
    description: 'Nhập vào một số thực x (có thể rất lớn hoặc rất nhỏ). Hãy in ra biểu diễn dạng ký hiệu khoa học của x với đúng 2 chữ số thập phân (dạng x.xxe+xx).',
    inputDesc: 'Một số thực x.',
    outputDesc: 'Định dạng scientific notation 2 chữ số thập phân.',
    hint: 'print(f"{x:.2e}")',
    sampleSolution: 'x = float(input())\nprint(f"{x:.2e}")\n',
    initialCode: 'x = float(input())\n# In dạng ký hiệu khoa học\n',
    testCases: [
      { input: '1500000.0', expectedOutput: '1.50e+06', description: '1.5 triệu' },
      { input: '0.000456', expectedOutput: '4.56e-04', description: 'Số nhỏ' }
    ]
  },
  {
    id: 60,
    code: 'CH04_14',
    chapterId: 4,
    chapterName: 'Nhập xuất dữ liệu',
    title: 'Tạo đường kẻ phân cách lặp lại',
    difficulty: 'Dễ',
    appliedKnowledge: 'Phép nhân chuỗi trong Python: char * count.',
    description: 'Nhập một ký tự c trên dòng 1 và số nguyên dương k trên dòng 2. Hãy in ra một dòng gồm đúng k ký tự c lặp lại liên tiếp (ví dụ nhập "=" và 10 -> in "==========").',
    inputDesc: 'Dòng 1: ký tự c. Dòng 2: số nguyên k.',
    outputDesc: 'Dòng gồm k ký tự c.',
    hint: 'c = input(); k = int(input()); print(c * k)',
    sampleSolution: 'c = input()\nk = int(input())\nprint(c * k)\n',
    initialCode: 'c = input()\nk = int(input())\n# In chuỗi lặp lại\n',
    testCases: [
      { input: '=\n15', expectedOutput: '===============', description: '15 dấu bằng' },
      { input: '*\n8', expectedOutput: '********', description: '8 dấu sao' }
    ]
  },
  {
    id: 61,
    code: 'CH04_15',
    chapterId: 4,
    chapterName: 'Nhập xuất dữ liệu',
    title: 'In hóa đơn siêu thị mini',
    difficulty: 'Khó',
    appliedKnowledge: 'Kết hợp nhập nhiều kiểu dữ liệu, tính thành tiền và f-string phân cách hàng nghìn.',
    description: 'Nhập tên hàng (str) trên dòng 1, số lượng (int) trên dòng 2, đơn giá (int) trên dòng 3. Tính thành tiền = số lượng * đơn giá. In ra 2 dòng:\nDòng 1: "Mat hang: <ten> (SL: <so_luong>)"\nDòng 2: "Tong tien: <thanh_tien:,} VND"',
    inputDesc: '3 dòng: tên, số lượng, đơn giá.',
    outputDesc: '2 dòng thông tin hóa đơn có phân cách hàng nghìn.',
    hint: 'print(f"Mat hang: {ten} (SL: {sl})"); print(f"Tong tien: {sl * gia:,} VND")',
    sampleSolution: 'ten = input()\nsl = int(input())\ngia = int(input())\ntong = sl * gia\nprint(f"Mat hang: {ten} (SL: {sl})")\nprint(f"Tong tien: {tong:,} VND")\n',
    initialCode: '# In hóa đơn bán hàng\n',
    testCases: [
      { input: 'Sua tuoi\n4\n12000', expectedOutput: 'Mat hang: Sua tuoi (SL: 4)\nTong tien: 48,000 VND', description: '4 hộp sữa 12k' },
      { input: 'Banh mi\n10\n15000', expectedOutput: 'Mat hang: Banh mi (SL: 10)\nTong tien: 150,000 VND', description: '10 bánh mì' }
    ]
  },
  {
    id: 62,
    code: 'CH04_16',
    chapterId: 4,
    chapterName: 'Nhập xuất dữ liệu',
    title: 'Tách tọa độ từ chuỗi dạng "(x, y)"',
    difficulty: 'Khó',
    appliedKnowledge: 'Xử lý cắt chuỗi strip(), split().',
    description: 'Người dùng nhập vào tọa độ dạng chuỗi: "(x, y)" (ví dụ "(12, 34)"). Hãy trích xuất 2 số nguyên x và y rồi in ra: "X = <x>, Y = <y>".',
    inputDesc: 'Chuỗi định dạng "(x, y)".',
    outputDesc: 'Định dạng "X = <x>, Y = <y>".',
    hint: 's = input().strip("()").split(","); x = int(s[0].strip()); y = int(s[1].strip())',
    sampleSolution: 's = input().strip("()").split(",")\nx = int(s[0].strip())\ny = int(s[1].strip())\nprint(f"X = {x}, Y = {y}")\n',
    initialCode: 's = input()\n# Tách x, y từ chuỗi "(x, y)"\n',
    testCases: [
      { input: '(12, 34)', expectedOutput: 'X = 12, Y = 34', description: 'Tọa độ (12, 34)' },
      { input: '(-5, 20)', expectedOutput: 'X = -5, Y = 20', description: 'Tọa độ có số âm' }
    ]
  },
  {
    id: 63,
    code: 'CH04_17',
    chapterId: 4,
    chapterName: 'Nhập xuất dữ liệu',
    title: 'Định dạng hiển thị thời lượng video (HH:MM:SS)',
    difficulty: 'Khó',
    appliedKnowledge: 'Toán tử chia nguyên, chia dư và format :02d.',
    description: 'Nhập vào tổng số giây của một video (số nguyên dương S). Hãy in ra thời lượng chuẩn định dạng "HH:MM:SS" (ví dụ nhập 3665 in ra "01:01:05").',
    inputDesc: 'Một số nguyên giây S.',
    outputDesc: 'Chuỗi dạng HH:MM:SS.',
    hint: 'h = S // 3600; m = (S % 3600) // 60; s = S % 60; print(f"{h:02d}:{m:02d}:{s:02d}")',
    sampleSolution: 'tot = int(input())\nh = tot // 3600\nm = (tot % 3600) // 60\ns = tot % 60\nprint(f"{h:02d}:{m:02d}:{s:02d}")\n',
    initialCode: 'tot = int(input())\n# Đổi sang HH:MM:SS\n',
    testCases: [
      { input: '3665', expectedOutput: '01:01:05', description: '3665 giây' },
      { input: '7200', expectedOutput: '02:00:00', description: '2 tiếng tròn' },
      { input: '45', expectedOutput: '00:00:45', description: '45 giây' }
    ]
  },
  {
    id: 64,
    code: 'CH04_18',
    chapterId: 4,
    chapterName: 'Nhập xuất dữ liệu',
    title: 'Căn giữa văn bản trong khung (Center alignment)',
    difficulty: 'Khó',
    appliedKnowledge: 'Định dạng căn giữa f-string f"{text:^width}".',
    description: 'Nhập một từ s (str) trên dòng 1 và số nguyên width (>= độ dài s) trên dòng 2. In ra chuỗi s được căn giữa trong phạm vi width ký tự, hai bên lấp đầy bằng dấu sao (*) (ví dụ s="HELLO", width=11 -> in "***HELLO***").',
    inputDesc: 'Dòng 1: chuỗi s. Dòng 2: số nguyên width.',
    outputDesc: 'Chuỗi căn giữa với ký tự lấp đầy *.',
    hint: 'print(f"{s:*^{width}}")',
    sampleSolution: 's = input()\nw = int(input())\nprint(f"{s:*^{w}}")\n',
    initialCode: 's = input()\nw = int(input())\n# Căn giữa với dấu *\n',
    testCases: [
      { input: 'HELLO\n11', expectedOutput: '***HELLO***', description: 'Căn giữa HELLO độ rộng 11' },
      { input: 'PYTHON\n12', expectedOutput: '***PYTHON***', description: 'Căn giữa PYTHON độ rộng 12' }
    ]
  }
];
