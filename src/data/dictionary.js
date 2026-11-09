// src/data/dictionary.js
export const dictionaryData = [
  // HÀM CÓ SẴN (Built-in Functions)
  {
    category: 'builtin',
    name: 'print(*objects, sep=" ", end="\\n")',
    desc: 'In các đối tượng ra màn hình console.',
    example: 'print("Xin chào", "Python", sep=" - ")\n# Output: Xin chào - Python',
  },
  {
    category: 'builtin',
    name: 'input(prompt="")',
    desc: 'Dừng chương trình và nhận dữ liệu nhập từ bàn phím dưới dạng chuỗi (str).',
    example: 'ten = input("Nhập tên: ")\nprint("Chào", ten)',
  },
  {
    category: 'builtin',
    name: 'len(s)',
    desc: 'Trả về độ dài (số lượng phần tử) của một đối tượng như chuỗi, danh sách, từ điển,...',
    example: 'print(len("Python")) # 6\nprint(len([1, 2, 3])) # 3',
  },
  {
    category: 'builtin',
    name: 'type(object)',
    desc: 'Trả về kiểu dữ liệu của đối tượng truyền vào.',
    example: 'print(type(10))    # <class \'int\'>\nprint(type("abc")) # <class \'str\'>',
  },
  {
    category: 'builtin',
    name: 'range(start, stop[, step])',
    desc: 'Tạo một dãy số nguyên bất biến từ start đến stop - 1 với bước nhảy step.',
    example: 'for i in range(1, 10, 2):\n    print(i) # 1, 3, 5, 7, 9',
  },
  {
    category: 'builtin',
    name: 'int(x), float(x), str(x)',
    desc: 'Các hàm ép kiểu dữ liệu sang số nguyên, số thực hoặc chuỗi ký tự.',
    example: 'x = int("123")   # 123 (int)\ny = float("3.14") # 3.14 (float)',
  },
  {
    category: 'builtin',
    name: 'max(iterable) / min(iterable)',
    desc: 'Tìm giá trị lớn nhất / nhỏ nhất trong danh sách hoặc giữa các đối số.',
    example: 'nums = [5, 2, 9, 1]\nprint(max(nums)) # 9\nprint(min(nums)) # 1',
  },
  {
    category: 'builtin',
    name: 'sum(iterable, start=0)',
    desc: 'Tính tổng tất cả các phần tử số trong iterable.',
    example: 'print(sum([1, 2, 3, 4])) # 10',
  },

  // STRING METHODS
  {
    category: 'string',
    name: 'str.upper() / str.lower()',
    desc: 'Chuyển toàn bộ chuỗi sang chữ hoa hoặc chữ thường.',
    example: '"hello".upper() # "HELLO"\n"HELLO".lower() # "hello"',
  },
  {
    category: 'string',
    name: 'str.strip([chars])',
    desc: 'Loại bỏ các ký tự khoảng trắng (hoặc ký tự chỉ định) ở đầu và cuối chuỗi.',
    example: '"   python   ".strip() # "python"',
  },
  {
    category: 'string',
    name: 'str.split(sep=None)',
    desc: 'Tách chuỗi thành danh sách (list) các từ dựa trên ký tự phân cách.',
    example: '"táo,cam,chuối".split(",") # [\'táo\', \'cam\', \'chuối\']',
  },
  {
    category: 'string',
    name: 'str.join(iterable)',
    desc: 'Nối các phần tử của một chuỗi/list lại với nhau bằng chuỗi làm ký tự phân tách.',
    example: '", ".join(["A", "B", "C"]) # "A, B, C"',
  },
  {
    category: 'string',
    name: 'str.replace(old, new)',
    desc: 'Thay thế tất cả các lần xuất hiện của chuỗi con cũ bằng chuỗi con mới.',
    example: '"Học C++".replace("C++", "Python") # "Học Python"',
  },
  {
    category: 'string',
    name: 'str.find(sub)',
    desc: 'Tìm vị trí index đầu tiên của chuỗi con. Nếu không thấy trả về -1.',
    example: '"Python".find("th") # 2\n"Python".find("java") # -1',
  },

  // LIST METHODS
  {
    category: 'list',
    name: 'list.append(x)',
    desc: 'Thêm một phần tử x vào cuối danh sách.',
    example: 'arr = [1, 2]\narr.append(3) # [1, 2, 3]',
  },
  {
    category: 'list',
    name: 'list.insert(i, x)',
    desc: 'Chèn một phần tử x vào vị trí index i xác định.',
    example: 'arr = [1, 3]\narr.insert(1, 2) # [1, 2, 3]',
  },
  {
    category: 'list',
    name: 'list.pop([i])',
    desc: 'Xóa và trả về phần tử tại vị trí index i (mặc định là phần tử cuối cùng).',
    example: 'arr = [10, 20, 30]\nx = arr.pop() # x = 30, arr = [10, 20]',
  },
  {
    category: 'list',
    name: 'list.remove(x)',
    desc: 'Xóa phần tử đầu tiên có giá trị bằng x khỏi danh sách.',
    example: 'arr = [1, 2, 3, 2]\narr.remove(2) # [1, 3, 2]',
  },
  {
    category: 'list',
    name: 'list.sort(reverse=False)',
    desc: 'Sắp xếp các phần tử trong danh sách tại chỗ (tăng dần hoặc giảm dần).',
    example: 'nums = [3, 1, 4]\nnums.sort() # [1, 3, 4]',
  },

  // DICTIONARY METHODS
  {
    category: 'dict',
    name: 'dict.get(key, default=None)',
    desc: 'Truy cập an toàn giá trị theo key mà không gây lỗi KeyError nếu key không tồn tại.',
    example: 'd = {"name": "An"}\nprint(d.get("age", 18)) # 18',
  },
  {
    category: 'dict',
    name: 'dict.keys(), dict.values(), dict.items()',
    desc: 'Lấy danh sách các key, danh sách value hoặc các cặp (key, value) của từ điển.',
    example: 'd = {"a": 1, "b": 2}\nfor k, v in d.items():\n    print(k, v)',
  },
  {
    category: 'dict',
    name: 'dict.update([other])',
    desc: 'Cập nhật từ điển bằng các cặp key/value từ từ điển khác.',
    example: 'd = {"a": 1}\nd.update({"b": 2}) # {"a": 1, "b": 2}',
  },

  // TOÁN TỬ (Operators)
  {
    category: 'operator',
    name: '+, -, *, /, //, %, **',
    desc: 'Toán tử số học: cộng, trừ, nhân, chia thực, chia lấy nguyên, chia lấy dư, lũy thừa.',
    example: '7 / 2  # 3.5\n7 // 2 # 3\n7 % 2  # 1\n2 ** 3 # 8',
  },
  {
    category: 'operator',
    name: '==, !=, >, <, >=, <=',
    desc: 'Toán tử so sánh: bằng, khác, lớn hơn, nhỏ hơn, lớn hơn hoặc bằng, nhỏ hơn hoặc bằng.',
    example: '5 == 5 # True\n10 != 5 # True',
  },
  {
    category: 'operator',
    name: 'and, or, not',
    desc: 'Toán tử logic: Và, Hoặc, Phủ định.',
    example: 'True and False # False\nTrue or False  # True\nnot True       # False',
  },

  // TỪ KHÓA PYTHON (Keywords)
  {
    category: 'keyword',
    name: 'def, return',
    desc: 'Định nghĩa hàm và trả về giá trị từ hàm.',
    example: 'def cong(a, b):\n    return a + b',
  },
  {
    category: 'keyword',
    name: 'if, elif, else',
    desc: 'Cấu trúc rẽ nhánh điều kiện.',
    example: 'if x > 0:\n    print("Dương")\nelse:\n    print("Không dương")',
  },
  {
    category: 'keyword',
    name: 'for, while, break, continue',
    desc: 'Cấu trúc lặp và điều khiển vòng lặp.',
    example: 'for i in range(5):\n    if i == 3: break\n    print(i)',
  },
  {
    category: 'keyword',
    name: 'try, except, finally',
    desc: 'Bắt và xử lý ngoại lệ an toàn trong Python.',
    example: 'try:\n    x = 1 / 0\nexcept ZeroDivisionError:\n    print("Lỗi chia 0")',
  },
];
