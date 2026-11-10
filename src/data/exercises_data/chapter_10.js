// Danh sách bài tập Chương 10: Đệ quy (15 bài)
export const chapter10Exercises = [
  {
    "id": 185,
    "code": "CH10_01",
    "chapterId": 10,
    "chapterName": "Đệ quy",
    "title": "Tính giai thừa bằng đệ quy",
    "difficulty": "Dễ",
    "appliedKnowledge": "Cơ chế đệ quy căn bản: Base case và Recursive case.",
    "description": "Viết hàm đệ quy `factorial(n)` để tính n!. Điểm dừng (Base case): nếu n == 0 hoặc n == 1 thì trả về 1. Bước đệ quy: return n * factorial(n - 1). Nhập n (0 <= n <= 15) và in ra n!.",
    "inputDesc": "Một số tự nhiên n.",
    "outputDesc": "Giá trị n!.",
    "exampleIO": "Input:\n5\nOutput:\n120",
    "hint": "if n <= 1: return 1; else return n * factorial(n - 1).",
    "sampleSolution": "def factorial(n):\n    if n <= 1:\n        return 1\n    return n * factorial(n - 1)\n\nn = int(input())\nprint(factorial(n))",
    "initialCode": "def factorial(n):\n    # Viết hàm đệ quy tính n!\n    pass\n\nn = int(input())\n",
    "testCases": [
      { "input": "5", "expectedOutput": "120", "description": "5! = 120" },
      { "input": "0", "expectedOutput": "1", "description": "0! = 1" },
      { "input": "6", "expectedOutput": "720", "description": "6! = 720" }
    ]
  },
  {
    "id": 186,
    "code": "CH10_02",
    "chapterId": 10,
    "chapterName": "Đệ quy",
    "title": "Số Fibonacci thứ n bằng đệ quy",
    "difficulty": "Dễ",
    "appliedKnowledge": "Đệ quy phân nhánh: fib(n) = fib(n-1) + fib(n-2).",
    "description": "Dãy Fibonacci bắt đầu với F(0) = 0, F(1) = 1. Viết hàm đệ quy `fib(n)` trả về số Fibonacci thứ n. Nhập n (0 <= n <= 25) và in ra F(n).",
    "inputDesc": "Một số nguyên n (0 <= n <= 25).",
    "outputDesc": "Giá trị F(n).",
    "exampleIO": "Input:\n6\nOutput:\n8",
    "hint": "if n == 0: return 0; if n == 1: return 1; return fib(n-1) + fib(n-2).",
    "sampleSolution": "def fib(n):\n    if n == 0:\n        return 0\n    if n == 1:\n        return 1\n    return fib(n - 1) + fib(n - 2)\n\nn = int(input())\nprint(fib(n))",
    "initialCode": "def fib(n):\n    # Viết hàm đệ quy tính F(n)\n    pass\n\nn = int(input())\n",
    "testCases": [
      { "input": "6", "expectedOutput": "8", "description": "F(6) = 8" },
      { "input": "0", "expectedOutput": "0", "description": "F(0) = 0" },
      { "input": "10", "expectedOutput": "55", "description": "F(10) = 55" }
    ]
  },
  {
    "id": 187,
    "code": "CH10_03",
    "chapterId": 10,
    "chapterName": "Đệ quy",
    "title": "Tính tổng 1 đến n bằng đệ quy",
    "difficulty": "Dễ",
    "appliedKnowledge": "Hàm đệ quy tuyến tính cộng dồn.",
    "description": "Viết hàm đệ quy `sum_to_n(n)` tính tổng S = 1 + 2 + ... + n với n >= 1. Điểm dừng: nếu n == 1 return 1. Bước đệ quy: return n + sum_to_n(n - 1). Nhập n và in kết quả.",
    "inputDesc": "Một số nguyên dương n.",
    "outputDesc": "Tổng từ 1 đến n.",
    "exampleIO": "Input:\n10\nOutput:\n55",
    "hint": "if n <= 1: return n; return n + sum_to_n(n - 1).",
    "sampleSolution": "def sum_to_n(n):\n    if n <= 1:\n        return n\n    return n + sum_to_n(n - 1)\n\nn = int(input())\nprint(sum_to_n(n))",
    "initialCode": "def sum_to_n(n):\n    pass\n\nn = int(input())\n",
    "testCases": [
      { "input": "10", "expectedOutput": "55", "description": "Tổng 1..10 = 55" },
      { "input": "1", "expectedOutput": "1", "description": "Tổng 1..1 = 1" },
      { "input": "100", "expectedOutput": "5050", "description": "Tổng 1..100 = 5050" }
    ]
  },
  {
    "id": 188,
    "code": "CH10_04",
    "chapterId": 10,
    "chapterName": "Đệ quy",
    "title": "Tính lũy thừa a mũ b bằng đệ quy",
    "difficulty": "Dễ",
    "appliedKnowledge": "Công thức lũy thừa đệ quy: power(a, b) = a * power(a, b-1).",
    "description": "Viết hàm đệ quy `power(a, b)` tính a^b với a, b là các số nguyên (b >= 0). Điểm dừng: b == 0 trả về 1. Nhập a và b trên 2 dòng và in ra kết quả a^b.",
    "inputDesc": "Dòng 1: số nguyên a. Dòng 2: số tự nhiên b.",
    "outputDesc": "Giá trị a^b.",
    "exampleIO": "Input:\n2\n5\nOutput:\n32",
    "hint": "if b == 0: return 1; return a * power(a, b - 1).",
    "sampleSolution": "def power(a, b):\n    if b == 0:\n        return 1\n    return a * power(a, b - 1)\n\na = int(input())\nb = int(input())\nprint(power(a, b))",
    "initialCode": "def power(a, b):\n    pass\n\na = int(input())\nb = int(input())\n",
    "testCases": [
      { "input": "2\n5", "expectedOutput": "32", "description": "2^5 = 32" },
      { "input": "7\n0", "expectedOutput": "1", "description": "7^0 = 1" },
      { "input": "3\n4", "expectedOutput": "81", "description": "3^4 = 81" }
    ]
  },
  {
    "id": 189,
    "code": "CH10_05",
    "chapterId": 10,
    "chapterName": "Đệ quy",
    "title": "Tính tổng các chữ số bằng đệ quy",
    "difficulty": "Trung bình",
    "appliedKnowledge": "Tách chữ số hàng đơn vị n % 10 và gọi đệ quy cho n // 10.",
    "description": "Viết hàm đệ quy `sum_digits_rec(n)` tính tổng các chữ số của số nguyên dương n. Điểm dừng: nếu n < 10 return n. Bước đệ quy: return (n % 10) + sum_digits_rec(n // 10). Nhập n và in kết quả.",
    "inputDesc": "Một số nguyên dương n.",
    "outputDesc": "Tổng các chữ số của n.",
    "exampleIO": "Input:\n987\nOutput:\n24",
    "hint": "if n < 10: return n; return (n % 10) + sum_digits_rec(n // 10).",
    "sampleSolution": "def sum_digits_rec(n):\n    if n < 10:\n        return n\n    return (n % 10) + sum_digits_rec(n // 10)\n\nn = int(input())\nprint(sum_digits_rec(n))",
    "initialCode": "def sum_digits_rec(n):\n    pass\n\nn = int(input())\n",
    "testCases": [
      { "input": "987", "expectedOutput": "24", "description": "9 + 8 + 7 = 24" },
      { "input": "5", "expectedOutput": "5", "description": "1 chữ số" },
      { "input": "12345", "expectedOutput": "15", "description": "1+2+3+4+5 = 15" }
    ]
  },
  {
    "id": 190,
    "code": "CH10_06",
    "chapterId": 10,
    "chapterName": "Đệ quy",
    "title": "Tìm GCD bằng đệ quy Euclid",
    "difficulty": "Dễ",
    "appliedKnowledge": "gcd(a, b) = a nếu b == 0, ngược lại gcd(b, a % b).",
    "description": "Viết hàm đệ quy `gcd(a, b)` tìm ước chung lớn nhất của 2 số nguyên dương a và b. Điểm dừng: nếu b == 0 return a. Bước đệ quy: return gcd(b, a % b). Nhập a và b trên 2 dòng và in ra gcd(a, b).",
    "inputDesc": "Dòng 1: số nguyên dương a. Dòng 2: số nguyên dương b.",
    "outputDesc": "Ước chung lớn nhất gcd(a, b).",
    "exampleIO": "Input:\n48\n18\nOutput:\n6",
    "hint": "if b == 0: return a; return gcd(b, a % b).",
    "sampleSolution": "def gcd(a, b):\n    if b == 0:\n        return a\n    return gcd(b, a % b)\n\na = int(input())\nb = int(input())\nprint(gcd(a, b))",
    "initialCode": "def gcd(a, b):\n    pass\n\na = int(input())\nb = int(input())\n",
    "testCases": [
      { "input": "48\n18", "expectedOutput": "6", "description": "GCD(48, 18) = 6" },
      { "input": "101\n10", "expectedOutput": "1", "description": "Nguyên tố cùng nhau" },
      { "input": "60\n60", "expectedOutput": "60", "description": "Hai số bằng nhau" }
    ]
  },
  {
    "id": 191,
    "code": "CH10_07",
    "chapterId": 10,
    "chapterName": "Đệ quy",
    "title": "Đảo ngược chuỗi bằng đệ quy",
    "difficulty": "Trung bình",
    "appliedKnowledge": "Đệ quy cắt chuỗi: reverse(s) = reverse(s[1:]) + s[0].",
    "description": "Viết hàm đệ quy `reverse_str_rec(s)` để đảo ngược một chuỗi ký tự mà không dùng cú pháp slicing `[::-1]`. Điểm dừng: nếu len(s) <= 1 return s. Bước đệ quy: return reverse_str_rec(s[1:]) + s[0]. Nhập s và in kết quả.",
    "inputDesc": "Một dòng chuỗi s.",
    "outputDesc": "Chuỗi đảo ngược.",
    "exampleIO": "Input:\npython\nOutput:\nnohtyp",
    "hint": "if len(s) <= 1: return s; return reverse_str_rec(s[1:]) + s[0].",
    "sampleSolution": "def reverse_str_rec(s):\n    if len(s) <= 1:\n        return s\n    return reverse_str_rec(s[1:]) + s[0]\n\ns = input()\nprint(reverse_str_rec(s))",
    "initialCode": "def reverse_str_rec(s):\n    pass\n\ns = input()\n",
    "testCases": [
      { "input": "python", "expectedOutput": "nohtyp", "description": "Đảo ngược python" },
      { "input": "a", "expectedOutput": "a", "description": "Chuỗi 1 ký tự" },
      { "input": "12345", "expectedOutput": "54321", "description": "Chuỗi số" }
    ]
  },
  {
    "id": 192,
    "code": "CH10_08",
    "chapterId": 10,
    "chapterName": "Đệ quy",
    "title": "Kiểm tra chuỗi đối xứng bằng đệ quy",
    "difficulty": "Trung bình",
    "appliedKnowledge": "So sánh 2 đầu s[0] == s[-1] và đệ quy s[1:-1].",
    "description": "Viết hàm đệ quy `is_palindrome_rec(s)` kiểm tra xem chuỗi s có đối xứng hay không. Điểm dừng: nếu len(s) <= 1 return True; nếu s[0] != s[-1] return False. Bước đệ quy: return is_palindrome_rec(s[1:-1]). Nhập chuỗi s và in 'YES' nếu đối xứng, ngược lại in 'NO'.",
    "inputDesc": "Một dòng chuỗi ký tự s.",
    "outputDesc": "In 'YES' hoặc 'NO'.",
    "exampleIO": "Input:\nracecar\nOutput:\nYES",
    "hint": "s = input().lower(). Kiểm tra đệ quy hàm trả về True in YES, False in NO.",
    "sampleSolution": "def is_palindrome_rec(s):\n    if len(s) <= 1:\n        return True\n    if s[0] != s[-1]:\n        return False\n    return is_palindrome_rec(s[1:-1])\n\ns = input().lower()\nprint('YES' if is_palindrome_rec(s) else 'NO')",
    "initialCode": "def is_palindrome_rec(s):\n    pass\n\ns = input().lower()\n",
    "testCases": [
      { "input": "racecar", "expectedOutput": "YES", "description": "racecar đối xứng" },
      { "input": "python", "expectedOutput": "NO", "description": "python không đối xứng" },
      { "input": "madam", "expectedOutput": "YES", "description": "madam đối xứng" }
    ]
  },
  {
    "id": 193,
    "code": "CH10_09",
    "chapterId": 10,
    "chapterName": "Đệ quy",
    "title": "Đếm số chữ số bằng đệ quy",
    "difficulty": "Dễ",
    "appliedKnowledge": "count(n) = 1 nếu n < 10, ngược lại 1 + count(n // 10).",
    "description": "Viết hàm đệ quy `count_digits(n)` đếm số lượng chữ số của một số tự nhiên n (n >= 0). Điểm dừng: nếu n < 10 return 1. Bước đệ quy: return 1 + count_digits(n // 10). Nhập n và in kết quả.",
    "inputDesc": "Một số tự nhiên n.",
    "outputDesc": "Số lượng chữ số của n.",
    "exampleIO": "Input:\n123456\nOutput:\n6",
    "hint": "if n < 10: return 1; return 1 + count_digits(n // 10).",
    "sampleSolution": "def count_digits(n):\n    if n < 10:\n        return 1\n    return 1 + count_digits(n // 10)\n\nn = int(input())\nprint(count_digits(n))",
    "initialCode": "def count_digits(n):\n    pass\n\nn = int(input())\n",
    "testCases": [
      { "input": "123456", "expectedOutput": "6", "description": "6 chữ số" },
      { "input": "0", "expectedOutput": "1", "description": "Số 0 có 1 chữ số" },
      { "input": "99", "expectedOutput": "2", "description": "2 chữ số" }
    ]
  },
  {
    "id": 194,
    "code": "CH10_10",
    "chapterId": 10,
    "chapterName": "Đệ quy",
    "title": "Tính tổng danh sách bằng đệ quy",
    "difficulty": "Trung bình",
    "appliedKnowledge": "sum_list(lst) = 0 nếu rỗng, ngược lại lst[0] + sum_list(lst[1:]).",
    "description": "Viết hàm đệ quy `sum_list(lst)` tính tổng các phần tử trong một danh sách số nguyên mà không dùng hàm `sum()`. Điểm dừng: nếu not lst return 0. Bước đệ quy: return lst[0] + sum_list(lst[1:]). Nhập danh sách các số trên một dòng và in ra tổng.",
    "inputDesc": "Một dòng chứa các số nguyên cách nhau bởi dấu cách.",
    "outputDesc": "Tổng các số.",
    "exampleIO": "Input:\n2 4 6 8 10\nOutput:\n30",
    "hint": "if not lst: return 0; return lst[0] + sum_list(lst[1:]).",
    "sampleSolution": "def sum_list(lst):\n    if not lst:\n        return 0\n    return lst[0] + sum_list(lst[1:])\n\nnums = [int(x) for x in input().split()]\nprint(sum_list(nums))",
    "initialCode": "def sum_list(lst):\n    pass\n\nnums = [int(x) for x in input().split()]\n",
    "testCases": [
      { "input": "2 4 6 8 10", "expectedOutput": "30", "description": "Tổng 5 số" },
      { "input": "5 -2 3", "expectedOutput": "6", "description": "Có số âm" },
      { "input": "42", "expectedOutput": "42", "description": "1 phần tử" }
    ]
  },
  {
    "id": 195,
    "code": "CH10_11",
    "chapterId": 10,
    "chapterName": "Đệ quy",
    "title": "Tìm phần tử lớn nhất bằng đệ quy",
    "difficulty": "Trung bình",
    "appliedKnowledge": "max_rec(lst) = lst[0] nếu len == 1, ngược lại so sánh lst[0] với max_rec(lst[1:]).",
    "description": "Viết hàm đệ quy `find_max(lst)` tìm giá trị lớn nhất trong danh sách không rỗng mà không dùng hàm `max()`. Điểm dừng: nếu len(lst) == 1 return lst[0]. Bước đệ quy: m = find_max(lst[1:]), return lst[0] if lst[0] > m else m. Nhập danh sách và in số lớn nhất.",
    "inputDesc": "Một dòng chứa danh sách số nguyên.",
    "outputDesc": "Giá trị lớn nhất.",
    "exampleIO": "Input:\n3 9 2 15 6\nOutput:\n15",
    "hint": "if len(lst) == 1: return lst[0]; sub_max = find_max(lst[1:]); return lst[0] if lst[0] > sub_max else sub_max.",
    "sampleSolution": "def find_max(lst):\n    if len(lst) == 1:\n        return lst[0]\n    sub_max = find_max(lst[1:])\n    return lst[0] if lst[0] > sub_max else sub_max\n\nnums = [int(x) for x in input().split()]\nprint(find_max(nums))",
    "initialCode": "def find_max(lst):\n    pass\n\nnums = [int(x) for x in input().split()]\n",
    "testCases": [
      { "input": "3 9 2 15 6", "expectedOutput": "15", "description": "Max là 15" },
      { "input": "-10 -20 -5 -30", "expectedOutput": "-5", "description": "Max số âm là -5" },
      { "input": "7", "expectedOutput": "7", "description": "1 phần tử" }
    ]
  },
  {
    "id": 196,
    "code": "CH10_12",
    "chapterId": 10,
    "chapterName": "Đệ quy",
    "title": "Chuyển đổi số thập phân sang nhị phân bằng đệ quy",
    "difficulty": "Trung bình",
    "appliedKnowledge": "dec_to_bin(n) = str(n) nếu n < 2, ngược lại dec_to_bin(n//2) + str(n%2).",
    "description": "Viết hàm đệ quy `dec_to_bin(n)` nhận vào số tự nhiên n và trả về chuỗi biểu diễn nhị phân của n (không dùng hàm `bin()`). Điểm dừng: nếu n < 2 return str(n). Bước đệ quy: return dec_to_bin(n // 2) + str(n % 2). Nhập n và in chuỗi nhị phân.",
    "inputDesc": "Một số tự nhiên n (n >= 0).",
    "outputDesc": "Chuỗi nhị phân.",
    "exampleIO": "Input:\n13\nOutput:\n1101",
    "hint": "if n < 2: return str(n); return dec_to_bin(n // 2) + str(n % 2).",
    "sampleSolution": "def dec_to_bin(n):\n    if n < 2:\n        return str(n)\n    return dec_to_bin(n // 2) + str(n % 2)\n\nn = int(input())\nprint(dec_to_bin(n))",
    "initialCode": "def dec_to_bin(n):\n    pass\n\nn = int(input())\n",
    "testCases": [
      { "input": "13", "expectedOutput": "1101", "description": "13 đổi sang nhị phân là 1101" },
      { "input": "0", "expectedOutput": "0", "description": "Số 0 là 0" },
      { "input": "8", "expectedOutput": "1000", "description": "8 là 1000" }
    ]
  },
  {
    "id": 197,
    "code": "CH10_13",
    "chapterId": 10,
    "chapterName": "Đệ quy",
    "title": "Số bước di chuyển Tháp Hà Nội",
    "difficulty": "Trung bình",
    "appliedKnowledge": "Công thức đệ quy tháp Hà Nội: hanoi(n) = 2 * hanoi(n - 1) + 1.",
    "description": "Bài toán Tháp Hà Nội (Tower of Hanoi) gồm 3 cọc và n đĩa. Để chuyển n đĩa từ cọc nguồn sang cọc đích theo luật, số bước di chuyển tối thiểu thỏa mãn công thức đệ quy: nếu n == 1 cần 1 bước; nếu n > 1 thì `hanoi(n) = 2 * hanoi(n - 1) + 1`. Hãy viết hàm đệ quy `hanoi(n)` tính số bước tối thiểu. Nhập n (1 <= n <= 30) và in số bước.",
    "inputDesc": "Một số nguyên dương n.",
    "outputDesc": "Số bước di chuyển tối thiểu.",
    "exampleIO": "Input:\n3\nOutput:\n7",
    "hint": "if n == 1: return 1; return 2 * hanoi(n - 1) + 1 (hoặc 2**n - 1).",
    "sampleSolution": "def hanoi(n):\n    if n == 1:\n        return 1\n    return 2 * hanoi(n - 1) + 1\n\nn = int(input())\nprint(hanoi(n))",
    "initialCode": "def hanoi(n):\n    pass\n\nn = int(input())\n",
    "testCases": [
      { "input": "3", "expectedOutput": "7", "description": "3 đĩa cần 7 bước" },
      { "input": "1", "expectedOutput": "1", "description": "1 đĩa cần 1 bước" },
      { "input": "5", "expectedOutput": "31", "description": "5 đĩa cần 31 bước" }
    ]
  },
  {
    "id": 198,
    "code": "CH10_14",
    "chapterId": 10,
    "chapterName": "Đệ quy",
    "title": "Bài toán leo cầu thang (Climbing Stairs)",
    "difficulty": "Trung bình",
    "appliedKnowledge": "Đệ quy tương tự Fibonacci: ways(n) = ways(n-1) + ways(n-2).",
    "description": "Bạn đang leo một cầu thang có n bậc. Mỗi lần bạn có thể bước 1 bậc hoặc 2 bậc. Viết hàm đệ quy `climb_stairs(n)` tính xem có bao nhiêu cách khác nhau để leo lên đỉnh cầu thang. Điểm dừng: n == 1 có 1 cách; n == 2 có 2 cách (1+1 hoặc 2). Nhập n (1 <= n <= 25) và in số cách.",
    "inputDesc": "Một số nguyên dương n.",
    "outputDesc": "Số cách leo cầu thang.",
    "exampleIO": "Input:\n4\nOutput:\n5",
    "hint": "if n == 1: return 1; if n == 2: return 2; return climb_stairs(n - 1) + climb_stairs(n - 2).",
    "sampleSolution": "def climb_stairs(n):\n    if n == 1:\n        return 1\n    if n == 2:\n        return 2\n    return climb_stairs(n - 1) + climb_stairs(n - 2)\n\nn = int(input())\nprint(climb_stairs(n))",
    "initialCode": "def climb_stairs(n):\n    pass\n\nn = int(input())\n",
    "testCases": [
      { "input": "4", "expectedOutput": "5", "description": "4 bậc có 5 cách" },
      { "input": "3", "expectedOutput": "3", "description": "3 bậc có 3 cách" },
      { "input": "5", "expectedOutput": "8", "description": "5 bậc có 8 cách" }
    ]
  },
  {
    "id": 199,
    "code": "CH10_15",
    "chapterId": 10,
    "chapterName": "Đệ quy",
    "title": "Tìm kiếm nhị phân bằng đệ quy (Binary Search)",
    "difficulty": "Khó",
    "appliedKnowledge": "Chia để trị: đệ quy tìm kiếm nhị phân trên mảng đã sắp xếp.",
    "description": "Viết hàm đệ quy `binary_search(arr, low, high, target)` tìm kiếm target trong danh sách arr đã sắp xếp tăng dần. Nếu tìm thấy, trả về chỉ số (index bắt đầu từ 0); nếu không tìm thấy (low > high), trả về -1. Nhập vào: Dòng 1 là danh sách số sắp xếp; Dòng 2 là số target cần tìm. In ra chỉ số hoặc -1.",
    "inputDesc": "Dòng 1: Danh sách số sắp xếp tăng dần. Dòng 2: Số target.",
    "outputDesc": "Chỉ số tìm thấy hoặc -1.",
    "exampleIO": "Input:\n2 5 8 12 16 23 38 56 72 91\n23\nOutput:\n5",
    "hint": "mid = (low + high) // 2. Nếu arr[mid] == target return mid. Nếu target < arr[mid] tìm (low, mid - 1), ngược lại tìm (mid + 1, high).",
    "sampleSolution": "def binary_search(arr, low, high, target):\n    if low > high:\n        return -1\n    mid = (low + high) // 2\n    if arr[mid] == target:\n        return mid\n    elif target < arr[mid]:\n        return binary_search(arr, low, mid - 1, target)\n    else:\n        return binary_search(arr, mid + 1, high, target)\n\narr = [int(x) for x in input().split()]\ntarget = int(input())\nprint(binary_search(arr, 0, len(arr) - 1, target))",
    "initialCode": "def binary_search(arr, low, high, target):\n    pass\n\narr = [int(x) for x in input().split()]\ntarget = int(input())\n",
    "testCases": [
      { "input": "2 5 8 12 16 23 38 56 72 91\n23", "expectedOutput": "5", "description": "23 nằm ở vị trí index 5" },
      { "input": "1 3 5 7 9\n6", "expectedOutput": "-1", "description": "Không có số 6 trong mảng" },
      { "input": "10 20 30\n10", "expectedOutput": "0", "description": "Nằm ngay vị trí đầu tiên index 0" }
    ]
  }
];
