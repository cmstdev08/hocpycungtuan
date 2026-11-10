// Danh sách bài tập Chương 12: Làm việc với File và lập trình nâng cao (14 bài)
export const chapter12Exercises = [
  {
    "id": 212,
    "code": "CH12_01",
    "chapterId": 12,
    "chapterName": "Làm việc với File và lập trình nâng cao",
    "title": "Thuật toán sắp xếp nổi bọt (Bubble Sort)",
    "difficulty": "Trung bình",
    "appliedKnowledge": "Cài đặt thuật toán sắp xếp nổi bọt qua 2 vòng lặp lồng nhau.",
    "description": "Nhập vào một danh sách các số nguyên. Hãy tự triển khai thuật toán sắp xếp nổi bọt (Bubble Sort) để sắp xếp danh sách theo thứ tự tăng dần mà không dùng hàm `sort()` hay `sorted()`. In danh sách sau khi sắp xếp, cách nhau bởi dấu cách.",
    "inputDesc": "Một dòng chứa danh sách các số nguyên cách nhau bởi dấu cách.",
    "outputDesc": "Dãy số đã sắp xếp tăng dần.",
    "exampleIO": "Input:\n64 34 25 12 22 11 90\nOutput:\n11 12 22 25 34 64 90",
    "hint": "Duyệt i từ 0 đến n-1, duyệt j từ 0 đến n-i-2, nếu a[j] > a[j+1] thì đổi chỗ.",
    "sampleSolution": "arr = [int(x) for x in input().split()]\nn = len(arr)\nfor i in range(n):\n    for j in range(0, n - i - 1):\n        if arr[j] > arr[j + 1]:\n            arr[j], arr[j + 1] = arr[j + 1], arr[j]\nprint(' '.join(map(str, arr)))",
    "initialCode": "arr = [int(x) for x in input().split()]\n# Tự triển khai Bubble Sort\n",
    "testCases": [
      { "input": "64 34 25 12 22 11 90", "expectedOutput": "11 12 22 25 34 64 90", "description": "Dãy 7 số nguyên lộn xộn" },
      { "input": "5 4 3 2 1", "expectedOutput": "1 2 3 4 5", "description": "Dãy giảm dần hoàn toàn" },
      { "input": "1 2 3", "expectedOutput": "1 2 3", "description": "Dãy đã sắp xếp" }
    ]
  },
  {
    "id": 213,
    "code": "CH12_02",
    "chapterId": 12,
    "chapterName": "Làm việc với File và lập trình nâng cao",
    "title": "Thuật toán sắp xếp chọn (Selection Sort)",
    "difficulty": "Trung bình",
    "appliedKnowledge": "Tìm phần tử nhỏ nhất trong đoạn chưa sắp xếp và đưa về vị trí đầu.",
    "description": "Nhập vào một danh sách các số nguyên. Hãy triển khai thuật toán sắp xếp chọn (Selection Sort) để sắp xếp danh sách tăng dần. In mảng sau khi sắp xếp trên một dòng, các số cách nhau bởi dấu cách.",
    "inputDesc": "Một dòng chứa danh sách các số nguyên.",
    "outputDesc": "Dãy số đã sắp xếp tăng dần.",
    "exampleIO": "Input:\n29 10 14 37 13\nOutput:\n10 13 14 29 37",
    "hint": "Với mỗi vị trí i, tìm min_idx trong đoạn i..n-1 rồi hoán đổi arr[i] và arr[min_idx].",
    "sampleSolution": "arr = [int(x) for x in input().split()]\nn = len(arr)\nfor i in range(n):\n    min_idx = i\n    for j in range(i + 1, n):\n        if arr[j] < arr[min_idx]:\n            min_idx = j\n    arr[i], arr[min_idx] = arr[min_idx], arr[i]\nprint(' '.join(map(str, arr)))",
    "initialCode": "arr = [int(x) for x in input().split()]\n# Tự triển khai Selection Sort\n",
    "testCases": [
      { "input": "29 10 14 37 13", "expectedOutput": "10 13 14 29 37", "description": "Dãy 5 số" },
      { "input": "-3 8 0 -7 2", "expectedOutput": "-7 -3 0 2 8", "description": "Có số âm" },
      { "input": "42", "expectedOutput": "42", "description": "1 số" }
    ]
  },
  {
    "id": 214,
    "code": "CH12_03",
    "chapterId": 12,
    "chapterName": "Làm việc với File và lập trình nâng cao",
    "title": "Thuật toán sắp xếp chèn (Insertion Sort)",
    "difficulty": "Trung bình",
    "appliedKnowledge": "Chèn từng phần tử key vào vị trí thích hợp trong đoạn con đã sắp.",
    "description": "Nhập vào một danh sách các số nguyên. Hãy triển khai thuật toán sắp xếp chèn (Insertion Sort) để sắp xếp mảng tăng dần. In kết quả các số cách nhau bởi dấu cách.",
    "inputDesc": "Một dòng chứa danh sách số.",
    "outputDesc": "Dãy số sắp xếp tăng dần.",
    "exampleIO": "Input:\n12 11 13 5 6\nOutput:\n5 6 11 12 13",
    "hint": "Duyệt i từ 1 đến n-1, key = arr[i], lùi j từ i-1 về 0 dời các phần tử lớn hơn key sang phải.",
    "sampleSolution": "arr = [int(x) for x in input().split()]\nfor i in range(1, len(arr)):\n    key = arr[i]\n    j = i - 1\n    while j >= 0 and arr[j] > key:\n        arr[j + 1] = arr[j]\n        j -= 1\n    arr[j + 1] = key\nprint(' '.join(map(str, arr)))",
    "initialCode": "arr = [int(x) for x in input().split()]\n# Tự triển khai Insertion Sort\n",
    "testCases": [
      { "input": "12 11 13 5 6", "expectedOutput": "5 6 11 12 13", "description": "Dãy 5 phần tử" },
      { "input": "9 8 7 6", "expectedOutput": "6 7 8 9", "description": "Dãy nghịch đảo" },
      { "input": "2 2 1 1", "expectedOutput": "1 1 2 2", "description": "Có phần tử trùng" }
    ]
  },
  {
    "id": 215,
    "code": "CH12_04",
    "chapterId": 12,
    "chapterName": "Làm việc với File và lập trình nâng cao",
    "title": "Tìm kiếm nhị phân lặp (Iterative Binary Search)",
    "difficulty": "Trung bình",
    "appliedKnowledge": "Vòng lặp while low <= high để tìm kiếm với độ phức tạp O(log N).",
    "description": "Nhập 2 dòng: Dòng 1 là dãy số đã sắp xếp tăng dần; Dòng 2 là số target cần tìm. Dùng vòng lặp `while` tìm kiếm vị trí của target trong mảng. Nếu thấy, in 'FOUND AT INDEX <index>'; nếu không thấy, in 'NOT FOUND'.",
    "inputDesc": "Dòng 1: Mảng số tăng dần. Dòng 2: target.",
    "outputDesc": "Thông báo tìm thấy kèm chỉ số hoặc 'NOT FOUND'.",
    "exampleIO": "Input:\n1 3 5 7 9 11 13 15\n7\nOutput:\nFOUND AT INDEX 3",
    "hint": "low, high = 0, len(arr) - 1. Khi low <= high: mid = (low + high) // 2.",
    "sampleSolution": "arr = [int(x) for x in input().split()]\ntarget = int(input())\nlow, high = 0, len(arr) - 1\nans = -1\nwhile low <= high:\n    mid = (low + high) // 2\n    if arr[mid] == target:\n        ans = mid\n        break\n    elif arr[mid] < target:\n        low = mid + 1\n    else:\n        high = mid - 1\nif ans != -1:\n    print(f\"FOUND AT INDEX {ans}\")\nelse:\n    print('NOT FOUND')",
    "initialCode": "arr = [int(x) for x in input().split()]\ntarget = int(input())\n# Tìm kiếm nhị phân bằng vòng lặp\n",
    "testCases": [
      { "input": "1 3 5 7 9 11 13 15\n7", "expectedOutput": "FOUND AT INDEX 3", "description": "Tìm thấy số 7 ở vị trí 3" },
      { "input": "10 20 30 40\n25", "expectedOutput": "NOT FOUND", "description": "Không có số 25" },
      { "input": "5 10 15\n5", "expectedOutput": "FOUND AT INDEX 0", "description": "Tìm thấy ở đầu dãy" }
    ]
  },
  {
    "id": 216,
    "code": "CH12_05",
    "chapterId": 12,
    "chapterName": "Làm việc với File và lập trình nâng cao",
    "title": "Bài toán tìm cặp số có tổng bằng Target (Two Sum)",
    "difficulty": "Trung bình",
    "appliedKnowledge": "Sử dụng từ điển (hash map) để đạt độ phức tạp O(N).",
    "description": "Nhập vào 2 dòng: Dòng 1 là danh sách các số nguyên; Dòng 2 là số nguyên target. Hãy tìm hai chỉ số i và j (i < j) đầu tiên sao cho `nums[i] + nums[j] == target`. In ra hai chỉ số `i j`. Nếu không tồn tại cặp số nào, in 'NOT FOUND'.",
    "inputDesc": "Dòng 1: Danh sách các số nguyên. Dòng 2: Số nguyên target.",
    "outputDesc": "Hai chỉ số i j hoặc 'NOT FOUND'.",
    "exampleIO": "Input:\n2 7 11 15\n9\nOutput:\n0 1",
    "hint": "Dùng dict lưu seen[num] = index. Khi duyệt, nếu target - num in seen thì in seen[target - num] và index.",
    "sampleSolution": "nums = [int(x) for x in input().split()]\ntarget = int(input())\nseen = {}\nfound = False\nfor i, num in enumerate(nums):\n    diff = target - num\n    if diff in seen:\n        print(f\"{seen[diff]} {i}\")\n        found = True\n        break\n    seen[num] = i\nif not found:\n    print('NOT FOUND')",
    "initialCode": "nums = [int(x) for x in input().split()]\ntarget = int(input())\n# Giải bài toán Two Sum O(N)\n",
    "testCases": [
      { "input": "2 7 11 15\n9", "expectedOutput": "0 1", "description": "nums[0] + nums[1] = 2 + 7 = 9" },
      { "input": "3 2 4\n6", "expectedOutput": "1 2", "description": "nums[1] + nums[2] = 2 + 4 = 6" },
      { "input": "1 2 3\n10", "expectedOutput": "NOT FOUND", "description": "Không có cặp nào" }
    ]
  },
  {
    "id": 217,
    "code": "CH12_06",
    "chapterId": 12,
    "chapterName": "Làm việc với File và lập trình nâng cao",
    "title": "Ghi và đọc dữ liệu tệp tin (with open)",
    "difficulty": "Trung bình",
    "appliedKnowledge": "Sử dụng cú pháp with open(filename, mode) để ghi và đọc file.",
    "description": "Nhập vào một dòng văn bản. Hãy ghi dòng văn bản đó vào tệp tin 'sample.txt'. Sau đó, mở lại tệp tin 'sample.txt' ở chế độ đọc 'r', đọc toàn bộ nội dung và in hoa nội dung đó ra màn hình.",
    "inputDesc": "Một dòng văn bản bất kỳ.",
    "outputDesc": "Nội dung đọc được từ file và chuyển thành in hoa.",
    "exampleIO": "Input:\nHello Python File\nOutput:\nHELLO PYTHON FILE",
    "hint": "with open('sample.txt', 'w') as f: f.write(s). Sau đó with open('sample.txt', 'r') as f: print(f.read().upper()).",
    "sampleSolution": "s = input()\nwith open('sample.txt', 'w') as f:\n    f.write(s)\nwith open('sample.txt', 'r') as f:\n    content = f.read()\nprint(content.upper())",
    "initialCode": "s = input()\n# Ghi vào file sample.txt và đọc lại in hoa\n",
    "testCases": [
      { "input": "Hello Python File", "expectedOutput": "HELLO PYTHON FILE", "description": "Ghi và đọc dòng chữ" },
      { "input": "python programming 2026", "expectedOutput": "PYTHON PROGRAMMING 2026", "description": "Chuỗi có số" },
      { "input": "test", "expectedOutput": "TEST", "description": "Từ ngắn" }
    ]
  },
  {
    "id": 218,
    "code": "CH12_07",
    "chapterId": 12,
    "chapterName": "Làm việc với File và lập trình nâng cao",
    "title": "Thống kê văn bản nhiều dòng (Word Count - wc)",
    "difficulty": "Trung bình",
    "appliedKnowledge": "sys.stdin.read() và thống kê số dòng, số từ, số ký tự.",
    "description": "Nhập vào một khối văn bản gồm nhiều dòng cho đến khi hết dữ liệu (EOF). Hãy đếm và in ra 3 đại lượng cách nhau bởi dấu cách: số dòng, số từ, và số ký tự (bao gồm cả ký tự xuống dòng).",
    "inputDesc": "Đoạn văn bản nhiều dòng.",
    "outputDesc": "In ra: <số dòng> <số từ> <số ký tự>.",
    "exampleIO": "Input:\nHello World\nPython is great\nOutput:\n2 5 27",
    "hint": "Dùng sys.stdin.read(). lines = text.count('\\n') + (1 if text and not text.endswith('\\n') else 0). words = len(text.split()). chars = len(text).",
    "sampleSolution": "import sys\ntext = sys.stdin.read()\nif not text:\n    print(\"0 0 0\")\nelse:\n    lines = text.splitlines()\n    num_lines = len(lines)\n    num_words = len(text.split())\n    num_chars = len(text.rstrip('\\r\\n'))\n    print(f\"{num_lines} {num_words} {num_chars}\")",
    "initialCode": "import sys\ntext = sys.stdin.read()\n# Đếm số dòng, số từ, số ký tự\n",
    "testCases": [
      { "input": "Hello World\nPython is great", "expectedOutput": "2 5 27", "description": "2 dòng, 5 từ, 27 ký tự" },
      { "input": "One line text", "expectedOutput": "1 3 13", "description": "1 dòng duy nhất" },
      { "input": "A\nB\nC", "expectedOutput": "3 3 5", "description": "3 dòng ngắn" }
    ]
  },
  {
    "id": 219,
    "code": "CH12_08",
    "chapterId": 12,
    "chapterName": "Làm việc với File và lập trình nâng cao",
    "title": "Xử lý bảng tính dạng CSV",
    "difficulty": "Trung bình",
    "appliedKnowledge": "Tách chuỗi CSV bằng split(',') và ép kiểu tính điểm.",
    "description": "Nhập vào n sinh viên, mỗi sinh viên trên một dòng theo định dạng CSV: `Tên,Toán,Lý,Hóa`. Hãy tính điểm trung bình 3 môn của từng sinh viên và in ra: `<Tên>: <Điểm TB làm tròn 2 chữ số>`.",
    "inputDesc": "Dòng 1: n. n dòng tiếp theo là dữ liệu CSV.",
    "outputDesc": "Mỗi sinh viên một dòng: <Tên>: <ĐTB>.",
    "exampleIO": "Input:\n2\nAn,8,7,9\nBinh,6.5,8,7.5\nOutput:\nAn: 8.00\nBinh: 7.33",
    "hint": "parts = line.split(','); name = parts[0]; avg = sum(map(float, parts[1:])) / 3.",
    "sampleSolution": "n = int(input())\nfor _ in range(n):\n    parts = input().strip().split(',')\n    name = parts[0]\n    scores = [float(x) for x in parts[1:]]\n    avg = sum(scores) / len(scores)\n    print(f\"{name}: {avg:.2f}\")",
    "initialCode": "n = int(input())\n# Xử lý các dòng CSV\n",
    "testCases": [
      { "input": "2\nAn,8,7,9\nBinh,6.5,8,7.5", "expectedOutput": "An: 8.00\nBinh: 7.33", "description": "2 học sinh có điểm trung bình" },
      { "input": "1\nCuong,10,10,10", "expectedOutput": "Cuong: 10.00", "description": "Điểm tuyệt đối" },
      { "input": "1\nHoa,5,6,7", "expectedOutput": "Hoa: 6.00", "description": "Điểm tròn 6.00" }
    ]
  },
  {
    "id": 220,
    "code": "CH12_09",
    "chapterId": 12,
    "chapterName": "Làm việc với File và lập trình nâng cao",
    "title": "Hàm sinh Generator với từ khóa yield",
    "difficulty": "Trung bình",
    "appliedKnowledge": "Từ khóa yield để tạo Generator Iterator.",
    "description": "Viết một hàm generator `even_numbers(n)` sử dụng từ khóa `yield` để lần lượt sinh ra các số chẵn từ 0 đến n. Nhập vào số tự nhiên n, dùng vòng lặp `for` duyệt qua generator và in các số chẵn trên một dòng cách nhau bởi dấu cách.",
    "inputDesc": "Một số tự nhiên n.",
    "outputDesc": "Các số chẵn từ 0 đến n.",
    "exampleIO": "Input:\n10\nOutput:\n0 2 4 6 8 10",
    "hint": "def even_numbers(n): for i in range(0, n + 1, 2): yield i.",
    "sampleSolution": "def even_numbers(n):\n    for i in range(0, n + 1, 2):\n        yield i\n\nn = int(input())\ngen = even_numbers(n)\nprint(' '.join(str(x) for x in gen))",
    "initialCode": "def even_numbers(n):\n    # Sử dụng yield\n    pass\n\nn = int(input())\n",
    "testCases": [
      { "input": "10", "expectedOutput": "0 2 4 6 8 10", "description": "Dãy chẵn đến 10" },
      { "input": "5", "expectedOutput": "0 2 4", "description": "Dãy chẵn đến 5" },
      { "input": "0", "expectedOutput": "0", "description": "n = 0" }
    ]
  },
  {
    "id": 221,
    "code": "CH12_10",
    "chapterId": 12,
    "chapterName": "Làm việc với File và lập trình nâng cao",
    "title": "Viết Decorator cơ bản",
    "difficulty": "Khó",
    "appliedKnowledge": "Decorator hàm bọc wrapper(*args, **kwargs).",
    "description": "Viết một decorator `@log_banner` bao quanh một hàm tính toán. Khi hàm được gọi, decorator sẽ in dòng '--- START ---' trước khi hàm chạy, sau đó in kết quả của hàm, và in '--- END ---' kết thúc. Hàm được trang trí nhận vào số nguyên n và trả về n * 10. Nhập n và gọi hàm.",
    "inputDesc": "Một số nguyên n.",
    "outputDesc": "3 dòng gồm banner bắt đầu, kết quả, và banner kết thúc.",
    "exampleIO": "Input:\n5\nOutput:\n--- START ---\n50\n--- END ---",
    "hint": "def log_banner(func): def wrapper(*args): print('--- START ---'); res = func(*args); print(res); print('--- END ---'); return wrapper.",
    "sampleSolution": "def log_banner(func):\n    def wrapper(*args):\n        print('--- START ---')\n        res = func(*args)\n        print(res)\n        print('--- END ---')\n    return wrapper\n\n@log_banner\ndef multiply_by_10(n):\n    return n * 10\n\nn = int(input())\nmultiply_by_10(n)",
    "initialCode": "def log_banner(func):\n    pass\n\n@log_banner\ndef multiply_by_10(n):\n    return n * 10\n\nn = int(input())\n",
    "testCases": [
      { "input": "5", "expectedOutput": "--- START ---\n50\n--- END ---", "description": "5 * 10 = 50" },
      { "input": "0", "expectedOutput": "--- START ---\n0\n--- END ---", "description": "0 * 10 = 0" },
      { "input": "-3", "expectedOutput": "--- START ---\n-30\n--- END ---", "description": "Số âm" }
    ]
  },
  {
    "id": 222,
    "code": "CH12_11",
    "chapterId": 12,
    "chapterName": "Làm việc với File và lập trình nâng cao",
    "title": "Phân tích cú pháp chuỗi JSON (json.loads)",
    "difficulty": "Dễ",
    "appliedKnowledge": "Thư viện json và hàm json.loads().",
    "description": "Nhập vào một chuỗi JSON mô tả một sản phẩm (gồm các trường 'name', 'price', 'quantity'). Hãy sử dụng thư viện `json` để parse chuỗi thành dictionary và in ra tổng giá trị kho hàng của sản phẩm đó: `Total: <price * quantity>` (số nguyên).",
    "inputDesc": "Một dòng chuỗi JSON hợp lệ.",
    "outputDesc": "In ra: Total: <giá trị>.",
    "exampleIO": "Input:\n{\"name\": \"Laptop\", \"price\": 1500, \"quantity\": 3}\nOutput:\nTotal: 4500",
    "hint": "import json; data = json.loads(input()); print(f\"Total: {data['price'] * data['quantity']}\").",
    "sampleSolution": "import json\ndata = json.loads(input().strip())\ntotal = data['price'] * data['quantity']\nprint(f\"Total: {total}\")",
    "initialCode": "import json\n# Phân tích chuỗi JSON và tính tổng giá trị\n",
    "testCases": [
      { "input": "{\"name\": \"Laptop\", \"price\": 1500, \"quantity\": 3}", "expectedOutput": "Total: 4500", "description": "1500 * 3 = 4500" },
      { "input": "{\"name\": \"Mouse\", \"price\": 20, \"quantity\": 10}", "expectedOutput": "Total: 200", "description": "20 * 10 = 200" },
      { "input": "{\"name\": \"Keyboard\", \"price\": 50, \"quantity\": 0}", "expectedOutput": "Total: 0", "description": "Số lượng 0" }
    ]
  },
  {
    "id": 223,
    "code": "CH12_12",
    "chapterId": 12,
    "chapterName": "Làm việc với File và lập trình nâng cao",
    "title": "Kiểm tra số điện thoại bằng Regex (re.match)",
    "difficulty": "Trung bình",
    "appliedKnowledge": "Thư viện re và mẫu pattern biểu thức chính quy.",
    "description": "Nhập vào một chuỗi số điện thoại. Hãy dùng module `re` kiểm tra xem chuỗi có phải là số điện thoại Việt Nam hợp lệ: Bắt đầu bằng chữ số 0, theo sau là đúng 9 chữ số (tổng cộng đúng 10 chữ số, không chứa khoảng trắng hay ký tự khác). In 'VALID' nếu đúng, ngược lại in 'INVALID'.",
    "inputDesc": "Một chuỗi ký tự.",
    "outputDesc": "In 'VALID' hoặc 'INVALID'.",
    "exampleIO": "Input:\n0912345678\nOutput:\nVALID",
    "hint": "import re; pattern = r'^0\\d{9}$'. if re.match(pattern, s): print('VALID') else: print('INVALID').",
    "sampleSolution": "import re\ns = input().strip()\nif re.fullmatch(r'0\\d{9}', s):\n    print('VALID')\nelse:\n    print('INVALID')",
    "initialCode": "import re\ns = input().strip()\n# Kiểm tra regex số điện thoại 10 chữ số bắt đầu bằng 0\n",
    "testCases": [
      { "input": "0912345678", "expectedOutput": "VALID", "description": "Đủ 10 chữ số bắt đầu bằng 0" },
      { "input": "1912345678", "expectedOutput": "INVALID", "description": "Không bắt đầu bằng 0" },
      { "input": "091234567", "expectedOutput": "INVALID", "description": "Chỉ có 9 chữ số" }
    ]
  },
  {
    "id": 224,
    "code": "CH12_13",
    "chapterId": 12,
    "chapterName": "Làm việc với File và lập trình nâng cao",
    "title": "Trích xuất Email bằng Regex (re.findall)",
    "difficulty": "Trung bình",
    "appliedKnowledge": "Sử dụng re.findall() để tìm tất cả các mẫu email trong văn bản.",
    "description": "Nhập vào một đoạn văn bản có chứa các địa chỉ email xen lẫn. Hãy sử dụng `re.findall()` để trích xuất tất cả các địa chỉ email (dạng `username@domain.ext`) và in mỗi địa chỉ trên một dòng theo thứ tự xuất hiện. Nếu không có email nào, in 'NO EMAIL'.",
    "inputDesc": "Một dòng văn bản.",
    "outputDesc": "Mỗi email trên một dòng hoặc 'NO EMAIL'.",
    "exampleIO": "Input:\nLien he qua support@gmail.com hoac admin@company.org nhe\nOutput:\nsupport@gmail.com\nadmin@company.org",
    "hint": "pattern = r'[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\\.[a-zA-Z0-9-.]+'.",
    "sampleSolution": "import re\ntext = input()\npattern = r'[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\\.[a-zA-Z0-9-.]+'\nemails = re.findall(pattern, text)\nif emails:\n    for email in emails:\n        print(email)\nelse:\n    print('NO EMAIL')",
    "initialCode": "import re\ntext = input()\n# Trích xuất email bằng re.findall\n",
    "testCases": [
      { "input": "Lien he qua support@gmail.com hoac admin@company.org nhe", "expectedOutput": "support@gmail.com\nadmin@company.org", "description": "2 địa chỉ email" },
      { "input": "No email address found here", "expectedOutput": "NO EMAIL", "description": "Không có email" },
      { "input": "contact me at info@test.vn", "expectedOutput": "info@test.vn", "description": "1 email đuôi vn" }
    ]
  },
  {
    "id": 225,
    "code": "CH12_14",
    "chapterId": 12,
    "chapterName": "Làm việc với File và lập trình nâng cao",
    "title": "Thống kê dữ liệu với module statistics",
    "difficulty": "Dễ",
    "appliedKnowledge": "Sử dụng module statistics: mean() và median().",
    "description": "Nhập vào một danh sách các số thực cách nhau bởi dấu cách. Hãy sử dụng thư viện `statistics` để tính: Giá trị trung bình (mean) và Giá trị trung vị (median). In kết quả trên một dòng cách nhau bởi dấu cách, mỗi giá trị làm tròn 2 chữ số thập phân.",
    "inputDesc": "Một dòng chứa danh sách số thực.",
    "outputDesc": "In ra: <mean> <median>.",
    "exampleIO": "Input:\n1 2 4 8 15\nOutput:\n6.00 4.00",
    "hint": "import statistics; mean_val = statistics.mean(nums); median_val = statistics.median(nums).",
    "sampleSolution": "import statistics\nnums = [float(x) for x in input().split()]\nm_val = statistics.mean(nums)\nmed_val = statistics.median(nums)\nprint(f\"{m_val:.2f} {med_val:.2f}\")",
    "initialCode": "import statistics\nnums = [float(x) for x in input().split()]\n# Tính mean và median với statistics\n",
    "testCases": [
      { "input": "1 2 4 8 15", "expectedOutput": "6.00 4.00", "description": "5 số: trung bình 6.00, trung vị 4.00" },
      { "input": "10 20 30 40", "expectedOutput": "25.00 25.00", "description": "4 số chẵn: trung vị là (20+30)/2 = 25" },
      { "input": "5.5 2.5 8.0", "expectedOutput": "5.33 5.50", "description": "Dãy số thực" }
    ]
  }
];
