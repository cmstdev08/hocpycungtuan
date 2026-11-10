// Danh sách bài tập Chương 1: Giới thiệu Python & Cú pháp cơ bản
export const chapter1Exercises = [
  {
    id: 1,
    code: 'CH01_01',
    chapterId: 1,
    chapterName: 'Giới thiệu Python',
    title: 'In lời chào Hello World',
    difficulty: 'Dễ',
    appliedKnowledge: 'Hàm print(), chuỗi ký tự đơn giản.',
    description: 'Viết chương trình in chính xác dòng chữ "Hello, World!" ra màn hình console.',
    inputDesc: 'Không có dữ liệu đầu vào.',
    outputDesc: 'Một dòng duy nhất chứa chữ "Hello, World!".',
    hint: 'Sử dụng lệnh print("Hello, World!")',
    sampleSolution: 'print("Hello, World!")\n',
    initialCode: '# Viết lệnh in "Hello, World!"\n',
    testCases: [
      {
        input: '',
        expectedOutput: 'Hello, World!',
        description: 'Kiểm tra in đúng lời chào chuẩn'
      }
    ]
  },
  {
    id: 2,
    code: 'CH01_02',
    chapterId: 1,
    chapterName: 'Giới thiệu Python',
    title: 'In thông tin thẻ sinh viên',
    difficulty: 'Dễ',
    appliedKnowledge: 'In nhiều dòng liên tiếp với print().',
    description: 'Viết chương trình in thông tin thẻ sinh viên gồm đúng 3 dòng:\nDong 1: Ho ten: Nguyen Van An\nDong 2: MSSV: 2026001\nDong 3: Lop: K26_CNTT',
    inputDesc: 'Không có input.',
    outputDesc: '3 dòng thông tin sinh viên tương ứng.',
    hint: 'Dùng 3 lệnh print() liên tiếp hoặc 1 lệnh print() chứa ký tự \\n.',
    sampleSolution: 'print("Ho ten: Nguyen Van An")\nprint("MSSV: 2026001")\nprint("Lop: K26_CNTT")\n',
    initialCode: '# In thông tin thẻ sinh viên gồm 3 dòng\n',
    testCases: [
      {
        input: '',
        expectedOutput: 'Ho ten: Nguyen Van An\nMSSV: 2026001\nLop: K26_CNTT',
        description: 'Kiểm tra in đúng 3 dòng thông tin'
      }
    ]
  },
  {
    id: 3,
    code: 'CH01_03',
    chapterId: 1,
    chapterName: 'Giới thiệu Python',
    title: 'In câu trích dẫn chứa dấu nháy kép',
    difficulty: 'Dễ',
    appliedKnowledge: 'Escape character \\" hoặc sử dụng cặp nháy đơn \'...\'.',
    description: 'Viết chương trình in ra câu danh ngôn có chứa dấu nháy kép: Python la ngon ngu "don gian va manh me"!',
    inputDesc: 'Không có input.',
    outputDesc: 'Dòng chữ chứa dấu nháy kép chính xác.',
    hint: 'Đặt chuỗi bên trong nháy đơn: print(\'Python la ngon ngu "don gian va manh me"!\')',
    sampleSolution: 'print(\'Python la ngon ngu "don gian va manh me"!\')\n',
    initialCode: '# In câu có dấu nháy kép\n',
    testCases: [
      {
        input: '',
        expectedOutput: 'Python la ngon ngu "don gian va manh me"!',
        description: 'Kiểm tra dấu nháy kép không gây lỗi cú pháp'
      }
    ]
  },
  {
    id: 4,
    code: 'CH01_04',
    chapterId: 1,
    chapterName: 'Giới thiệu Python',
    title: 'Định dạng ngày tháng với tham số sep',
    difficulty: 'Dễ',
    appliedKnowledge: 'Tham số sep trong print().',
    description: 'Sử dụng lệnh print() in ra ngày, tháng, năm: 20, 11, 2026 nhưng phân tách bởi dấu gạch nối " - " bằng cách dùng tham số sep.',
    inputDesc: 'Không có input.',
    outputDesc: 'Chuỗi "20 - 11 - 2026".',
    hint: 'print(20, 11, 2026, sep=" - ")',
    sampleSolution: 'print(20, 11, 2026, sep=" - ")\n',
    initialCode: '# Dùng tham số sep=" - " trong print\n',
    testCases: [
      {
        input: '',
        expectedOutput: '20 - 11 - 2026',
        description: 'Kiểm tra sử dụng sep phân tách đúng'
      }
    ]
  },
  {
    id: 5,
    code: 'CH01_05',
    chapterId: 1,
    chapterName: 'Giới thiệu Python',
    title: 'In liên tiếp trên một dòng với tham số end',
    difficulty: 'Dễ',
    appliedKnowledge: 'Tham số end trong hàm print().',
    description: 'Viết chương trình dùng các lệnh print riêng biệt để in các số 1, 2, 3, 4, 5 trên cùng một dòng, cách nhau bởi 1 dấu cách.',
    inputDesc: 'Không có input.',
    outputDesc: 'Dòng chữ "1 2 3 4 5".',
    hint: 'Sử dụng print(..., end=" ")',
    sampleSolution: 'print(1, end=" ")\nprint(2, end=" ")\nprint(3, end=" ")\nprint(4, end=" ")\nprint(5)\n',
    initialCode: '# In các số từ 1 đến 5 trên 1 dòng\n',
    testCases: [
      {
        input: '',
        expectedOutput: '1 2 3 4 5',
        description: 'Kiểm tra in trên cùng một dòng'
      }
    ]
  },
  {
    id: 6,
    code: 'CH01_06',
    chapterId: 1,
    chapterName: 'Giới thiệu Python',
    title: 'Vẽ hình tam giác sao ASCII',
    difficulty: 'Trung bình',
    appliedKnowledge: 'Toán tử nhân chuỗi * hoặc nhiều lệnh print().',
    description: 'Viết chương trình in hình tam giác vuông bằng dấu sao (*) có chiều cao 4 dòng:\n*\n**\n***\n****',
    inputDesc: 'Không có input.',
    outputDesc: 'Hình tam giác sao 4 dòng.',
    hint: 'Có thể in từng dòng hoặc dùng "*" * 1, "*" * 2, ...',
    sampleSolution: 'print("*")\nprint("**")\nprint("***")\nprint("****")\n',
    initialCode: '# In hình tam giác sao 4 dòng\n',
    testCases: [
      {
        input: '',
        expectedOutput: '*\n**\n***\n****',
        description: 'Kiểm tra hình tam giác sao'
      }
    ]
  },
  {
    id: 7,
    code: 'CH01_07',
    chapterId: 1,
    chapterName: 'Giới thiệu Python',
    title: 'In hình chữ nhật rỗng 4x5',
    difficulty: 'Trung bình',
    appliedKnowledge: 'Kết hợp chuỗi và định dạng in hình học.',
    description: 'In hình chữ nhật kích thước 3 dòng x 5 cột dấu sao:\n*****\n*   *\n*****',
    inputDesc: 'Không có input.',
    outputDesc: 'Hình chữ nhật rỗng kích thước 3x5.',
    hint: 'Dòng giữa gồm 1 dấu sao, 3 dấu cách và 1 dấu sao.',
    sampleSolution: 'print("*****")\nprint("*   *")\nprint("*****")\n',
    initialCode: '# In hình chữ nhật rỗng\n',
    testCases: [
      {
        input: '',
        expectedOutput: '*****\n*   *\n*****',
        description: 'Kiểm tra hình chữ nhật rỗng 3x5'
      }
    ]
  },
  {
    id: 8,
    code: 'CH01_08',
    chapterId: 1,
    chapterName: 'Giới thiệu Python',
    title: 'In biểu thức toán học và kết quả',
    difficulty: 'Trung bình',
    appliedKnowledge: 'Phân biệt chuỗi ký tự và biểu thức tính toán trong print().',
    description: 'Viết chương trình in phép tính: 25 + 75 = 100 bằng cách truyền chuỗi "25 + 75 =" và biểu thức tính 25 + 75 vào hàm print.',
    inputDesc: 'Không có input.',
    outputDesc: 'Dòng chữ "25 + 75 = 100".',
    hint: 'print("25 + 75 =", 25 + 75)',
    sampleSolution: 'print("25 + 75 =", 25 + 75)\n',
    initialCode: '# In biểu thức và kết quả tính toán\n',
    testCases: [
      {
        input: '',
        expectedOutput: '25 + 75 = 100',
        description: 'Kiểm tra in biểu thức cùng giá trị tính'
      }
    ]
  },
  {
    id: 9,
    code: 'CH01_09',
    chapterId: 1,
    chapterName: 'Giới thiệu Python',
    title: 'In đường dẫn tệp Windows với dấu gạch chéo ngược',
    difficulty: 'Khó',
    appliedKnowledge: 'Escape sequence \\\\ trong chuỗi Python.',
    description: 'Viết chương trình in chính xác đường dẫn tệp trên hệ điều hành Windows: C:\\Users\\Admin\\Documents\\python.py',
    inputDesc: 'Không có input.',
    outputDesc: 'Đường dẫn chính xác có các dấu gạch chéo ngược.',
    hint: 'Dùng chuỗi raw r"C:\\Users\\Admin\\Documents\\python.py" hoặc nhân đôi dấu gạch: \\\\',
    sampleSolution: 'print(r"C:\\Users\\Admin\\Documents\\python.py")\n',
    initialCode: '# In đường dẫn tệp Windows\n',
    testCases: [
      {
        input: '',
        expectedOutput: 'C:\\Users\\Admin\\Documents\\python.py',
        description: 'Kiểm tra xử lý đúng ký tự escape gạch chéo'
      }
    ]
  },
  {
    id: 10,
    code: 'CH01_10',
    chapterId: 1,
    chapterName: 'Giới thiệu Python',
    title: 'In banner chào mừng có khung viền',
    difficulty: 'Khó',
    appliedKnowledge: 'Kỹ năng căn chỉnh lề văn bản bằng print.',
    description: 'Viết chương trình in banner thông báo có khung viền:\n+-------------------------+\n|  CHAO MUNG DEN VOI IT   |\n+-------------------------+',
    inputDesc: 'Không có input.',
    outputDesc: 'Khung thông báo đúng 3 dòng.',
    hint: 'Chú ý số lượng dấu trừ và dấu cách trong khung.',
    sampleSolution: 'print("+-------------------------+")\nprint("|  CHAO MUNG DEN VOI IT   |")\nprint("+-------------------------+")\n',
    initialCode: '# In khung thông báo 3 dòng\n',
    testCases: [
      {
        input: '',
        expectedOutput: '+-------------------------+\n|  CHAO MUNG DEN VOI IT   |\n+-------------------------+',
        description: 'Kiểm tra banner khung viền chuẩn xác'
      }
    ]
  }
];
