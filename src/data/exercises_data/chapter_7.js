// Danh sách bài tập Chương 7: Chuỗi String (20 bài)
export const chapter7Exercises = [
  {
    "id": 115,
    "code": "CH07_01",
    "chapterId": 7,
    "chapterName": "Chuỗi String",
    "title": "Đảo ngược chuỗi ký tự",
    "difficulty": "Dễ",
    "appliedKnowledge": "Cú pháp cắt chuỗi (string slicing) với bước nhảy âm.",
    "description": "Nhập vào một chuỗi ký tự s bất kỳ. Hãy in ra chuỗi đó theo thứ tự ngược lại.",
    "inputDesc": "Một dòng chứa chuỗi ký tự s.",
    "outputDesc": "In ra chuỗi đảo ngược của s.",
    "exampleIO": "Input:\nPython\nOutput:\nnohtyP",
    "hint": "Sử dụng cú pháp slicing s[::-1].",
    "sampleSolution": "s = input()\nprint(s[::-1])",
    "initialCode": "s = input()\n# In chuỗi đảo ngược\n",
    "testCases": [
      { "input": "Python", "expectedOutput": "nohtyP", "description": "Đảo ngược chữ Python" },
      { "input": "Hello World", "expectedOutput": "dlroW olleH", "description": "Đảo ngược chuỗi có khoảng trắng" },
      { "input": "12345", "expectedOutput": "54321", "description": "Đảo ngược chuỗi số" }
    ]
  },
  {
    "id": 116,
    "code": "CH07_02",
    "chapterId": 7,
    "chapterName": "Chuỗi String",
    "title": "Độ dài chuỗi và ký tự đầu/cuối",
    "difficulty": "Dễ",
    "appliedKnowledge": "Hàm len() và chỉ mục âm trong Python.",
    "description": "Nhập vào một chuỗi văn bản s (độ dài >= 1). Hãy in ra độ dài của chuỗi, ký tự đầu tiên và ký tự cuối cùng của chuỗi, cách nhau bởi dấu cách.",
    "inputDesc": "Một dòng chứa chuỗi s.",
    "outputDesc": "In ra: <độ dài> <ký tự đầu> <ký tự cuối>.",
    "exampleIO": "Input:\nComputer\nOutput:\n8 C r",
    "hint": "Độ dài dùng len(s), ký tự đầu là s[0], ký tự cuối là s[-1].",
    "sampleSolution": "s = input()\nprint(len(s), s[0], s[-1])",
    "initialCode": "s = input()\n# In ra độ dài, ký tự đầu và ký tự cuối\n",
    "testCases": [
      { "input": "Computer", "expectedOutput": "8 C r", "description": "Chuỗi Computer" },
      { "input": "Python 3", "expectedOutput": "8 P 3", "description": "Chuỗi có số và khoảng trắng" },
      { "input": "A", "expectedOutput": "1 A A", "description": "Chuỗi 1 ký tự" }
    ]
  },
  {
    "id": 117,
    "code": "CH07_03",
    "chapterId": 7,
    "chapterName": "Chuỗi String",
    "title": "Chuyển đổi hoa - thường",
    "difficulty": "Dễ",
    "appliedKnowledge": "Phương thức upper() và lower() của đối tượng chuỗi.",
    "description": "Nhập vào một chuỗi s. Dòng 1 in ra chuỗi ở dạng IN HOA toàn bộ, dòng 2 in ra chuỗi ở dạng in thường toàn bộ.",
    "inputDesc": "Một dòng chứa chuỗi s.",
    "outputDesc": "Dòng 1: chuỗi in hoa. Dòng 2: chuỗi in thường.",
    "exampleIO": "Input:\nLap Trinh Python\nOutput:\nLAP TRINH PYTHON\nlap trinh python",
    "hint": "Dùng s.upper() và s.lower().",
    "sampleSolution": "s = input()\nprint(s.upper())\nprint(s.lower())",
    "initialCode": "s = input()\n# In chuỗi HOA và chuỗi thường\n",
    "testCases": [
      { "input": "Lap Trinh Python", "expectedOutput": "LAP TRINH PYTHON\nlap trinh python", "description": "Chuỗi hỗn hợp hoa thường" },
      { "input": "hello", "expectedOutput": "HELLO\nhello", "description": "Chuỗi thường toàn bộ" },
      { "input": "VIETNAM", "expectedOutput": "VIETNAM\nvietnam", "description": "Chuỗi hoa toàn bộ" }
    ]
  },
  {
    "id": 118,
    "code": "CH07_04",
    "chapterId": 7,
    "chapterName": "Chuỗi String",
    "title": "Đếm số lần xuất hiện của từ con",
    "difficulty": "Dễ",
    "appliedKnowledge": "Phương thức s.count() của chuỗi.",
    "description": "Nhập vào dòng 1 là chuỗi văn bản chính text, dòng 2 là chuỗi con sub cần tìm kiếm. Hãy in ra số lần xuất hiện không chồng lấn của chuỗi con trong chuỗi chính.",
    "inputDesc": "Dòng 1: chuỗi text. Dòng 2: chuỗi sub.",
    "outputDesc": "In ra một số nguyên là số lần xuất hiện.",
    "exampleIO": "Input:\nbanana\nan\nOutput:\n2",
    "hint": "Sử dụng text.count(sub).",
    "sampleSolution": "text = input()\nsub = input()\nprint(text.count(sub))",
    "initialCode": "text = input()\nsub = input()\n# Đếm số lần xuất hiện của sub trong text\n",
    "testCases": [
      { "input": "banana\nan", "expectedOutput": "2", "description": "banana có 2 chuỗi 'an'" },
      { "input": "hoc python de hon hoc c++ vi python de hieu hon\npython", "expectedOutput": "2", "description": "Đoạn văn có 2 từ python" },
      { "input": "aaaaaa\naa", "expectedOutput": "3", "description": "6 chữ a có 3 cụm aa không chồng chéo" }
    ]
  },
  {
    "id": 119,
    "code": "CH07_05",
    "chapterId": 7,
    "chapterName": "Chuỗi String",
    "title": "Chuẩn hóa họ và tên",
    "difficulty": "Trung bình",
    "appliedKnowledge": "split(), capitalize(), join() để chuẩn hóa chuỗi danh từ riêng.",
    "description": "Người dùng thường nhập họ tên với nhiều khoảng trắng thừa ở đầu, cuối hoặc giữa các từ, kèm chữ hoa chữ thường lộn xộn. Hãy chuẩn hóa họ tên: mỗi từ viết hoa chữ cái đầu, các chữ sau viết thường, và giữa các từ chỉ có đúng 1 dấu cách.",
    "inputDesc": "Một dòng chuỗi họ tên người dùng nhập.",
    "outputDesc": "Chuỗi họ tên đã được chuẩn hóa.",
    "exampleIO": "Input:\n   nguYen   vAn    aN   \nOutput:\nNguyen Van An",
    "hint": "Dùng s.split() để tách các từ tự động bỏ khoảng trắng dư, sau đó dùng w.capitalize() cho từng từ rồi ' '.join().",
    "sampleSolution": "s = input()\nwords = [w.capitalize() for w in s.split()]\nprint(' '.join(words))",
    "initialCode": "s = input()\n# Chuẩn hóa họ tên chuẩn\n",
    "testCases": [
      { "input": "   nguYen   vAn    aN   ", "expectedOutput": "Nguyen Van An", "description": "Khoảng trắng nhiều và hoa thường lộn xộn" },
      { "input": "tran thi bich", "expectedOutput": "Tran Thi Bich", "description": "Chữ thường toàn bộ" },
      { "input": "LE HOANG LONG", "expectedOutput": "Le Hoang Long", "description": "Chữ hoa toàn bộ" }
    ]
  },
  {
    "id": 120,
    "code": "CH07_06",
    "chapterId": 7,
    "chapterName": "Chuỗi String",
    "title": "Kiểm tra chuỗi đối xứng (Palindrome)",
    "difficulty": "Dễ",
    "appliedKnowledge": "So sánh chuỗi với bản đảo ngược, không phân biệt hoa thường.",
    "description": "Nhập vào một từ hoặc chuỗi s (không chứa khoảng trắng). Hãy kiểm tra xem chuỗi có phải là Palindrome (đọc xuôi hay đọc ngược đều giống nhau, không phân biệt hoa thường) hay không. In 'YES' nếu đúng, ngược lại in 'NO'.",
    "inputDesc": "Một chuỗi s.",
    "outputDesc": "In 'YES' hoặc 'NO'.",
    "exampleIO": "Input:\nRadar\nOutput:\nYES",
    "hint": "Đổi chuỗi về chữ thường bằng s.lower(), sau đó so sánh s == s[::-1].",
    "sampleSolution": "s = input().lower()\nif s == s[::-1]:\n    print('YES')\nelse:\n    print('NO')",
    "initialCode": "s = input()\n# Kiểm tra chuỗi Palindrome\n",
    "testCases": [
      { "input": "Radar", "expectedOutput": "YES", "description": "Radar đối xứng" },
      { "input": "python", "expectedOutput": "NO", "description": "python không đối xứng" },
      { "input": "Level", "expectedOutput": "YES", "description": "Level đối xứng" }
    ]
  },
  {
    "id": 121,
    "code": "CH07_07",
    "chapterId": 7,
    "chapterName": "Chuỗi String",
    "title": "Đếm nguyên âm trong câu tiếng Anh",
    "difficulty": "Dễ",
    "appliedKnowledge": "Vòng lặp duyệt chuỗi và kiểm tra phần tử trong tập hợp 'ueoai'.",
    "description": "Nhập vào một câu tiếng Anh s. Hãy đếm xem có bao nhiêu nguyên âm (a, e, i, o, u không phân biệt hoa thường) xuất hiện trong câu.",
    "inputDesc": "Một dòng chứa câu s.",
    "outputDesc": "In ra số lượng nguyên âm.",
    "exampleIO": "Input:\nHello World\nOutput:\n3",
    "hint": "Chuyển câu về s.lower(), duyệt từng ký tự c trong s, nếu c in 'aeiou' thì tăng biến đếm.",
    "sampleSolution": "s = input().lower()\nvowels = 'aeiou'\ncount = sum(1 for c in s if c in vowels)\nprint(count)",
    "initialCode": "s = input()\n# Đếm số nguyên âm tiếng Anh\n",
    "testCases": [
      { "input": "Hello World", "expectedOutput": "3", "description": "e, o, o -> 3" },
      { "input": "Programming is fun", "expectedOutput": "5", "description": "o, a, i, i, u -> 5" },
      { "input": "FLY BY DRY", "expectedOutput": "0", "description": "Không có nguyên âm -> 0" }
    ]
  },
  {
    "id": 122,
    "code": "CH07_08",
    "chapterId": 7,
    "chapterName": "Chuỗi String",
    "title": "Thay thế từ khóa trong văn bản",
    "difficulty": "Dễ",
    "appliedKnowledge": "Phương thức s.replace(old, new).",
    "description": "Nhập vào 3 dòng: Dòng 1 là đoạn văn bản gốc; Dòng 2 là từ khóa cần thay thế; Dòng 3 là từ mới thay vào. Hãy in ra đoạn văn sau khi đã thay thế tất cả các lần xuất hiện.",
    "inputDesc": "Dòng 1: Văn bản gốc. Dòng 2: Từ cũ. Dòng 3: Từ mới.",
    "outputDesc": "Văn bản sau khi thay thế.",
    "exampleIO": "Input:\nI like Java. Java is cool.\nJava\nPython\nOutput:\nI like Python. Python is cool.",
    "hint": "Sử dụng text.replace(old, new).",
    "sampleSolution": "text = input()\nold = input()\nnew = input()\nprint(text.replace(old, new))",
    "initialCode": "text = input()\nold = input()\nnew = input()\n# Thay thế old bằng new trong text\n",
    "testCases": [
      { "input": "I like Java. Java is cool.\nJava\nPython", "expectedOutput": "I like Python. Python is cool.", "description": "Thay Java bằng Python" },
      { "input": "apple orange banana apple\napple\nmango", "expectedOutput": "mango orange banana mango", "description": "Thay apple bằng mango" },
      { "input": "hello 123 world\n123\n456", "expectedOutput": "hello 456 world", "description": "Thay số dạng chuỗi" }
    ]
  },
  {
    "id": 123,
    "code": "CH07_09",
    "chapterId": 7,
    "chapterName": "Chuỗi String",
    "title": "Tách danh sách theo dấu phẩy",
    "difficulty": "Dễ",
    "appliedKnowledge": "split(',') và duyệt in các phần tử sau khi loại bỏ khoảng trắng.",
    "description": "Nhập vào một chuỗi các mục cách nhau bởi dấu phẩy (ví dụ danh sách đồ dùng: bút, thước, vở). Hãy tách các mục, loại bỏ khoảng trắng thừa ở hai đầu mỗi mục, và in từng mục trên một dòng riêng biệt.",
    "inputDesc": "Một chuỗi các mục ngăn cách bởi dấu phẩy.",
    "outputDesc": "Mỗi mục in trên một dòng.",
    "exampleIO": "Input:\nbut, thuoc, vo, tay\nOutput:\nbut\nthuoc\nvo\ntay",
    "hint": "Tách bằng s.split(','), với mỗi item in ra item.strip().",
    "sampleSolution": "s = input()\nitems = [item.strip() for item in s.split(',')]\nfor item in items:\n    print(item)",
    "initialCode": "s = input()\n# Tách các mục theo dấu phẩy và in mỗi mục 1 dòng\n",
    "testCases": [
      { "input": "but, thuoc, vo, tay", "expectedOutput": "but\nthuoc\nvo\ntay", "description": "4 vật dụng học tập" },
      { "input": "Toan,  Ly ,Hoa", "expectedOutput": "Toan\nLy\nHoa", "description": "Có khoảng trắng không đều" },
      { "input": "Python", "expectedOutput": "Python", "description": "Chỉ có 1 phần tử" }
    ]
  },
  {
    "id": 124,
    "code": "CH07_10",
    "chapterId": 7,
    "chapterName": "Chuỗi String",
    "title": "Nối từ bằng dấu gạch ngang (Kebab-case)",
    "difficulty": "Dễ",
    "appliedKnowledge": "s.lower().split() và '-'.join().",
    "description": "Nhập vào một tiêu đề bài viết. Hãy chuyển tiêu đề thành dạng đường dẫn thân thiện URL (slug/kebab-case): tất cả viết thường, các từ nối nhau bằng dấu gạch ngang '-', không có khoảng trắng thừa.",
    "inputDesc": "Một dòng chứa tiêu đề.",
    "outputDesc": "Chuỗi dạng kebab-case.",
    "exampleIO": "Input:\nHoc Lap Trinh Python Can Ban\nOutput:\nhoc-lap-trinh-python-can-ban",
    "hint": "Chuyển s.lower(), tách thành các từ bằng .split(), rồi dùng '-'.join(words).",
    "sampleSolution": "s = input()\nwords = s.lower().split()\nprint('-'.join(words))",
    "initialCode": "s = input()\n# Tạo slug bằng dấu gạch ngang\n",
    "testCases": [
      { "input": "Hoc Lap Trinh Python Can Ban", "expectedOutput": "hoc-lap-trinh-python-can-ban", "description": "Tiêu đề tiếng Việt không dấu" },
      { "input": "   Introduction    to  AI  ", "expectedOutput": "introduction-to-ai", "description": "Có khoảng trắng dư thừa" },
      { "input": "Vite", "expectedOutput": "vite", "description": "1 từ duy nhất" }
    ]
  },
  {
    "id": 125,
    "code": "CH07_11",
    "chapterId": 7,
    "chapterName": "Chuỗi String",
    "title": "Phân loại và đếm ký tự trong chuỗi",
    "difficulty": "Trung bình",
    "appliedKnowledge": "isalpha(), isdigit() và đếm số lượng.",
    "description": "Nhập vào một chuỗi s. Hãy đếm và in ra 3 số lượng trên 1 dòng cách nhau bởi dấu cách: số ký tự chữ cái, số ký tự chữ số, và số ký tự khác (bao gồm khoảng trắng và dấu câu).",
    "inputDesc": "Một chuỗi ký tự s.",
    "outputDesc": "In ra: <số chữ cái> <số chữ số> <số ký tự khác>.",
    "exampleIO": "Input:\nPython 3.12!\nOutput:\n6 3 3",
    "hint": "Duyệt từng ký tự: c.isalpha() tăng chữ cái, c.isdigit() tăng chữ số, còn lại tăng biến khác.",
    "sampleSolution": "s = input()\nletters = sum(1 for c in s if c.isalpha())\ndigits = sum(1 for c in s if c.isdigit())\nothers = len(s) - letters - digits\nprint(letters, digits, others)",
    "initialCode": "s = input()\n# Đếm chữ cái, chữ số và ký tự khác\n",
    "testCases": [
      { "input": "Python 3.12!", "expectedOutput": "6 3 3", "description": "6 chữ, 3 số (3, 1, 2), 3 ký tự khác (cách, chấm, !)" },
      { "input": "123456", "expectedOutput": "0 6 0", "description": "Chỉ có chữ số" },
      { "input": "Hello", "expectedOutput": "5 0 0", "description": "Chỉ có chữ cái" }
    ]
  },
  {
    "id": 126,
    "code": "CH07_12",
    "chapterId": 7,
    "chapterName": "Chuỗi String",
    "title": "Xóa nguyên âm khỏi văn bản",
    "difficulty": "Dễ",
    "appliedKnowledge": "Lọc chuỗi bằng list comprehension hoặc vòng lặp.",
    "description": "Nhập vào một câu tiếng Anh s. Hãy loại bỏ tất cả các nguyên âm (a, e, i, o, u, cả chữ hoa và thường) khỏi câu và in ra chuỗi kết quả.",
    "inputDesc": "Một dòng chuỗi s.",
    "outputDesc": "Chuỗi sau khi đã lược bỏ tất cả nguyên âm.",
    "exampleIO": "Input:\nThis is an apple\nOutput:\nThs s n ppl",
    "hint": "Dùng ''.join([c for c in s if c.lower() not in 'aeiou']).",
    "sampleSolution": "s = input()\nres = ''.join(c for c in s if c.lower() not in 'aeiou')\nprint(res)",
    "initialCode": "s = input()\n# Xóa tất cả các nguyên âm trong chuỗi\n",
    "testCases": [
      { "input": "This is an apple", "expectedOutput": "Ths s n ppl", "description": "Câu có hoa và thường" },
      { "input": "BEAUTIFUL", "expectedOutput": "BTFL", "description": "Từ toàn chữ hoa" },
      { "input": "xyz", "expectedOutput": "xyz", "description": "Không có nguyên âm" }
    ]
  },
  {
    "id": 127,
    "code": "CH07_13",
    "chapterId": 7,
    "chapterName": "Chuỗi String",
    "title": "Tạo từ viết tắt (Acronym)",
    "difficulty": "Dễ",
    "appliedKnowledge": "split() và lấy ký tự đầu w[0].upper().",
    "description": "Nhập vào tên đầy đủ của một tổ chức hoặc cụm từ tiếng Anh. Hãy tạo từ viết tắt (Acronym) bằng cách lấy chữ cái đầu tiên của mỗi từ và viết hoa toàn bộ.",
    "inputDesc": "Một dòng chứa cụm từ.",
    "outputDesc": "Từ viết tắt tương ứng.",
    "exampleIO": "Input:\nWorld Health Organization\nOutput:\nWHO",
    "hint": "Tách các từ bằng s.split(), lấy w[0].upper() rồi ghép lại bằng ''.join().",
    "sampleSolution": "s = input()\nacronym = ''.join(w[0].upper() for w in s.split())\nprint(acronym)",
    "initialCode": "s = input()\n# In từ viết tắt\n",
    "testCases": [
      { "input": "World Health Organization", "expectedOutput": "WHO", "description": "Tổ chức y tế thế giới" },
      { "input": "as soon as possible", "expectedOutput": "ASAP", "description": "Viết tắt thường gặp" },
      { "input": "artificial intelligence", "expectedOutput": "AI", "description": "Trí tuệ nhân tạo" }
    ]
  },
  {
    "id": 128,
    "code": "CH07_14",
    "chapterId": 7,
    "chapterName": "Chuỗi String",
    "title": "Kiểm tra chuỗi số hợp lệ",
    "difficulty": "Dễ",
    "appliedKnowledge": "Phương thức s.isdigit() và ép kiểu int.",
    "description": "Nhập vào một chuỗi s. Nếu s hoàn toàn là các chữ số tự nhiên, hãy chuyển thành số nguyên và in ra gấp đôi giá trị đó (s * 2). Nếu chứa ký tự khác ngoài chữ số, in ra thông báo 'INVALID'.",
    "inputDesc": "Một dòng chứa chuỗi s.",
    "outputDesc": "In ra số nguyên gấp đôi hoặc 'INVALID'.",
    "exampleIO": "Input:\n250\nOutput:\n500",
    "hint": "Kiểm tra nếu s.isdigit() thì print(int(s) * 2) ngược lại in 'INVALID'.",
    "sampleSolution": "s = input().strip()\nif s.isdigit():\n    print(int(s) * 2)\nelse:\n    print('INVALID')",
    "initialCode": "s = input()\n# Kiểm tra chuỗi số và nhân đôi\n",
    "testCases": [
      { "input": "250", "expectedOutput": "500", "description": "Số hợp lệ 250" },
      { "input": "12a34", "expectedOutput": "INVALID", "description": "Chứa chữ a" },
      { "input": "0", "expectedOutput": "0", "description": "Số 0" }
    ]
  },
  {
    "id": 129,
    "code": "CH07_15",
    "chapterId": 7,
    "chapterName": "Chuỗi String",
    "title": "Trích xuất tên miền từ Email",
    "difficulty": "Dễ",
    "appliedKnowledge": "Phương thức split('@') hoặc find('@').",
    "description": "Nhập vào một địa chỉ email chuẩn dạng username@domain.com. Hãy trích xuất và in ra phần tên miền (domain) nằm sau ký tự '@'.",
    "inputDesc": "Một địa chỉ email.",
    "outputDesc": "Tên miền của email.",
    "exampleIO": "Input:\nstudent@hust.edu.vn\nOutput:\nhust.edu.vn",
    "hint": "Sử dụng s.split('@')[1] hoặc s[s.index('@')+1:].",
    "sampleSolution": "s = input().strip()\nparts = s.split('@')\nprint(parts[1])",
    "initialCode": "s = input()\n# Trích xuất tên miền sau dấu @\n",
    "testCases": [
      { "input": "student@hust.edu.vn", "expectedOutput": "hust.edu.vn", "description": "Email trường đại học" },
      { "input": "john.doe@gmail.com", "expectedOutput": "gmail.com", "description": "Email Gmail" },
      { "input": "contact@company.org", "expectedOutput": "company.org", "description": "Email tổ chức" }
    ]
  },
  {
    "id": 130,
    "code": "CH07_16",
    "chapterId": 7,
    "chapterName": "Chuỗi String",
    "title": "Đảo ngược từng từ trong câu",
    "difficulty": "Trung bình",
    "appliedKnowledge": "Tách từ, đảo ngược từng từ w[::-1] và nối lại.",
    "description": "Nhập vào một câu văn s. Hãy đảo ngược thứ tự các ký tự trong từng từ nhưng giữ nguyên thứ tự các từ trong câu.",
    "inputDesc": "Một dòng văn bản chứa các từ cách nhau bởi dấu cách.",
    "outputDesc": "Câu văn với từng từ đã bị đảo ngược ký tự.",
    "exampleIO": "Input:\nPython is awesome\nOutput:\nnohtyP si emosewa",
    "hint": "Tách câu bằng s.split(), duyệt qua từng từ w và đảo bằng w[::-1], rồi dùng ' '.join().",
    "sampleSolution": "s = input()\nwords = [w[::-1] for w in s.split()]\nprint(' '.join(words))",
    "initialCode": "s = input()\n# Đảo ngược từng từ trong câu\n",
    "testCases": [
      { "input": "Python is awesome", "expectedOutput": "nohtyP si emosewa", "description": "3 từ đảo ngược" },
      { "input": "Hello World", "expectedOutput": "olleH dlroW", "description": "Hello World" },
      { "input": "abc def ghi", "expectedOutput": "cba fed ihg", "description": "Các từ 3 chữ cái" }
    ]
  },
  {
    "id": 131,
    "code": "CH07_17",
    "chapterId": 7,
    "chapterName": "Chuỗi String",
    "title": "Mã hóa dịch chuyển Caesar 1 vị trí",
    "difficulty": "Trung bình",
    "appliedKnowledge": "Hàm ord() và chr(), vòng tròn bảng chữ cái.",
    "description": "Nhập vào một chuỗi chỉ gồm chữ cái tiếng Anh in thường (a-z). Hãy mã hóa chuỗi bằng cách dịch mỗi ký tự sang phải 1 vị trí trong bảng chữ cái ('a' -> 'b', 'b' -> 'c', ..., 'z' -> 'a').",
    "inputDesc": "Một chuỗi chữ cái thường.",
    "outputDesc": "Chuỗi sau khi mã hóa.",
    "exampleIO": "Input:\nxyz\nOutput:\nyza",
    "hint": "Ký tự tiếp theo có thể tính bằng chr((ord(c) - ord('a') + 1) % 26 + ord('a')).",
    "sampleSolution": "s = input()\nres = []\nfor c in s:\n    if 'a' <= c <= 'z':\n        res.append(chr((ord(c) - ord('a') + 1) % 26 + ord('a')))\n    else:\n        res.append(c)\nprint(''.join(res))",
    "initialCode": "s = input()\n# Mã hóa Caesar dịch 1 vị trí\n",
    "testCases": [
      { "input": "xyz", "expectedOutput": "yza", "description": "Qua vòng biên z -> a" },
      { "input": "abc", "expectedOutput": "bcd", "description": "Đầu bảng chữ cái" },
      { "input": "python", "expectedOutput": "qzuipo", "description": "Từ python" }
    ]
  },
  {
    "id": 132,
    "code": "CH07_18",
    "chapterId": 7,
    "chapterName": "Chuỗi String",
    "title": "Kiểm tra chuỗi Pangram",
    "difficulty": "Trung bình",
    "appliedKnowledge": "Tập hợp (set) và kiểm tra sự xuất hiện đủ 26 chữ cái tiếng Anh.",
    "description": "Một chuỗi được gọi là Pangram nếu nó chứa đầy đủ tất cả 26 chữ cái trong bảng chữ cái tiếng Anh (từ 'a' đến 'z', không phân biệt hoa thường). Hãy in 'YES' nếu chuỗi là Pangram, ngược lại in 'NO'.",
    "inputDesc": "Một dòng văn bản.",
    "outputDesc": "In 'YES' hoặc 'NO'.",
    "exampleIO": "Input:\nThe quick brown fox jumps over the lazy dog\nOutput:\nYES",
    "hint": "Chuyển chuỗi về chữ thường, lọc các ký tự là chữ cái vào một set: chars = {c for c in s.lower() if 'a' <= c <= 'z'}. Nếu len(chars) == 26 thì YES.",
    "sampleSolution": "s = input().lower()\nletters = set(c for c in s if 'a' <= c <= 'z')\nif len(letters) == 26:\n    print('YES')\nelse:\n    print('NO')",
    "initialCode": "s = input()\n# Kiểm tra câu Pangram\n",
    "testCases": [
      { "input": "The quick brown fox jumps over the lazy dog", "expectedOutput": "YES", "description": "Câu Pangram kinh điển" },
      { "input": "Hello world from Python", "expectedOutput": "NO", "description": "Thiếu nhiều ký tự" },
      { "input": "Pack my box with five dozen liquor jugs", "expectedOutput": "YES", "description": "Một câu Pangram khác" }
    ]
  },
  {
    "id": 133,
    "code": "CH07_19",
    "chapterId": 7,
    "chapterName": "Chuỗi String",
    "title": "Nén chuỗi ký tự lặp liên tiếp",
    "difficulty": "Khó",
    "appliedKnowledge": "Duyệt chuỗi và đếm số lượng ký tự giống nhau liên tiếp (Run-length encoding).",
    "description": "Nhập vào một chuỗi ký tự s. Hãy nén chuỗi theo quy tắc: mỗi nhóm ký tự giống nhau liên tiếp được viết lại dưới dạng <ký tự><số lần>. Ví dụ 'aaabbc' được nén thành 'a3b2c1'.",
    "inputDesc": "Một chuỗi ký tự không rỗng.",
    "outputDesc": "Chuỗi sau khi nén.",
    "exampleIO": "Input:\naaabbc\nOutput:\na3b2c1",
    "hint": "Duyệt qua chuỗi với biến đếm count = 1. Khi ký tự hiện tại khác ký tự kế tiếp (hoặc hết chuỗi), ghi lại ký tự và số lần rồi reset count = 1.",
    "sampleSolution": "s = input()\nif not s:\n    print('')\nelse:\n    res = []\n    count = 1\n    for i in range(1, len(s)):\n        if s[i] == s[i - 1]:\n            count += 1\n        else:\n            res.append(f\"{s[i - 1]}{count}\")\n            count = 1\n    res.append(f\"{s[-1]}{count}\")\n    print(''.join(res))",
    "initialCode": "s = input()\n# Nén chuỗi theo quy tắc run-length encoding\n",
    "testCases": [
      { "input": "aaabbc", "expectedOutput": "a3b2c1", "description": "Chuỗi có các ký tự lặp 3, 2, 1" },
      { "input": "wwwwww", "expectedOutput": "w6", "description": "6 chữ w" },
      { "input": "abc", "expectedOutput": "a1b1c1", "description": "Không có ký tự nào lặp" }
    ]
  },
  {
    "id": 134,
    "code": "CH07_20",
    "chapterId": 7,
    "chapterName": "Chuỗi String",
    "title": "Ẩn số điện thoại bảo mật",
    "difficulty": "Dễ",
    "appliedKnowledge": "Cắt chuỗi ghép nối: s[:4] + '****' + s[-2:].",
    "description": "Để bảo mật thông tin khách hàng, số điện thoại có độ dài 10 chữ số cần được che 4 chữ số ở giữa bằng 4 dấu sao '****'. Cụ thể: giữ nguyên 4 chữ số đầu, thay 4 chữ số tiếp theo bằng '****', và giữ nguyên 2 chữ số cuối cùng.",
    "inputDesc": "Một chuỗi gồm 10 chữ số.",
    "outputDesc": "Chuỗi số điện thoại đã được ẩn thông tin bảo mật.",
    "exampleIO": "Input:\n0912345678\nOutput:\n0912****78",
    "hint": "Cắt chuỗi: s[:4] + '****' + s[8:] (hoặc s[-2:]).",
    "sampleSolution": "s = input().strip()\nmasked = s[:4] + '****' + s[8:]\nprint(masked)",
    "initialCode": "s = input()\n# Che 4 chữ số giữa của số điện thoại\n",
    "testCases": [
      { "input": "0912345678", "expectedOutput": "0912****78", "description": "Số 0912345678" },
      { "input": "0987654321", "expectedOutput": "0987****21", "description": "Số 0987654321" },
      { "input": "0333333333", "expectedOutput": "0333****33", "description": "Số toàn số 3" }
    ]
  }
];
