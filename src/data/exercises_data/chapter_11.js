// Danh sách bài tập Chương 11: Xử lý ngoại lệ (12 bài)
export const chapter11Exercises = [
  {
    "id": 200,
    "code": "CH11_01",
    "chapterId": 11,
    "chapterName": "Xử lý ngoại lệ",
    "title": "Bắt lỗi chia cho không (ZeroDivisionError)",
    "difficulty": "Dễ",
    "appliedKnowledge": "Khối lệnh try...except ZeroDivisionError.",
    "description": "Nhập vào hai số nguyên a và b trên 2 dòng. Thực hiện phép chia a / b và in kết quả làm tròn 2 chữ số thập phân. Nếu b bằng 0 gây ra lỗi chia cho 0, hãy bắt ngoại lệ `ZeroDivisionError` và in ra thông báo 'CANNOT DIVIDE BY ZERO'.",
    "inputDesc": "Dòng 1: số nguyên a. Dòng 2: số nguyên b.",
    "outputDesc": "Kết quả thương hoặc 'CANNOT DIVIDE BY ZERO'.",
    "exampleIO": "Input:\n10\n0\nOutput:\nCANNOT DIVIDE BY ZERO",
    "hint": "try: print(f\"{a / b:.2f}\") except ZeroDivisionError: print('CANNOT DIVIDE BY ZERO').",
    "sampleSolution": "try:\n    a = int(input())\n    b = int(input())\n    print(f\"{a / b:.2f}\")\nexcept ZeroDivisionError:\n    print('CANNOT DIVIDE BY ZERO')",
    "initialCode": "a = int(input())\nb = int(input())\n# Dùng try-except để bắt lỗi chia 0\n",
    "testCases": [
      { "input": "10\n0", "expectedOutput": "CANNOT DIVIDE BY ZERO", "description": "Chia cho 0" },
      { "input": "10\n4", "expectedOutput": "2.50", "description": "10 / 4 = 2.50" },
      { "input": "-9\n3", "expectedOutput": "-3.00", "description": "Chia số âm" }
    ]
  },
  {
    "id": 201,
    "code": "CH11_02",
    "chapterId": 11,
    "chapterName": "Xử lý ngoại lệ",
    "title": "Bắt lỗi ép kiểu số nguyên (ValueError)",
    "difficulty": "Dễ",
    "appliedKnowledge": "Bắt ngoại lệ ValueError khi chuyển chuỗi sang số nguyên.",
    "description": "Nhập vào một chuỗi s. Hãy chuyển đổi s thành số nguyên và in ra bình phương của số đó. Nếu chuỗi không thể chuyển thành số nguyên (ví dụ chứa chữ cái hoặc ký hiệu), hãy bắt lỗi `ValueError` và in ra 'INVALID INTEGER'.",
    "inputDesc": "Một dòng chuỗi s.",
    "outputDesc": "Bình phương của số hoặc 'INVALID INTEGER'.",
    "exampleIO": "Input:\nabc\nOutput:\nINVALID INTEGER",
    "hint": "try: n = int(s); print(n * n) except ValueError: print('INVALID INTEGER').",
    "sampleSolution": "s = input().strip()\ntry:\n    n = int(s)\n    print(n * n)\nexcept ValueError:\n    print('INVALID INTEGER')",
    "initialCode": "s = input().strip()\n# Ép kiểu int và bắt ValueError\n",
    "testCases": [
      { "input": "abc", "expectedOutput": "INVALID INTEGER", "description": "Chuỗi chữ không đổi được thành int" },
      { "input": "12", "expectedOutput": "144", "description": "12^2 = 144" },
      { "input": "-5", "expectedOutput": "25", "description": "(-5)^2 = 25" }
    ]
  },
  {
    "id": 202,
    "code": "CH11_03",
    "chapterId": 11,
    "chapterName": "Xử lý ngoại lệ",
    "title": "Xử lý nhiều loại ngoại lệ",
    "difficulty": "Trung bình",
    "appliedKnowledge": "Nhiều khối except riêng biệt cho ValueError và ZeroDivisionError.",
    "description": "Nhập vào 2 chuỗi a_str và b_str trên 2 dòng. Chuyển đổi cả hai sang số nguyên và thực hiện a // b (phép chia lấy phần nguyên). Nếu nhập sai định dạng số in 'VALUE ERROR'; nếu chia cho 0 in 'ZERO DIVISION ERROR'; nếu hợp lệ in kết quả chia nguyên.",
    "inputDesc": "Dòng 1: a_str. Dòng 2: b_str.",
    "outputDesc": "Kết quả nguyên hoặc thông báo lỗi tương ứng.",
    "exampleIO": "Input:\n10\nhello\nOutput:\nVALUE ERROR",
    "hint": "except ValueError: ... except ZeroDivisionError: ...",
    "sampleSolution": "try:\n    a = int(input())\n    b = int(input())\n    print(a // b)\nexcept ValueError:\n    print('VALUE ERROR')\nexcept ZeroDivisionError:\n    print('ZERO DIVISION ERROR')",
    "initialCode": "# Bắt ValueError và ZeroDivisionError\n",
    "testCases": [
      { "input": "10\nhello", "expectedOutput": "VALUE ERROR", "description": "Dòng 2 là chữ gây ValueError" },
      { "input": "20\n0", "expectedOutput": "ZERO DIVISION ERROR", "description": "Chia cho 0" },
      { "input": "50\n8", "expectedOutput": "6", "description": "50 // 8 = 6" }
    ]
  },
  {
    "id": 203,
    "code": "CH11_04",
    "chapterId": 11,
    "chapterName": "Xử lý ngoại lệ",
    "title": "Bắt lỗi vượt chỉ số danh sách (IndexError)",
    "difficulty": "Dễ",
    "appliedKnowledge": "Bắt ngoại lệ IndexError khi truy cập index ngoài phạm vi.",
    "description": "Nhập vào 2 dòng: Dòng 1 là một danh sách các phần tử cách nhau bởi dấu cách; Dòng 2 là một số nguyên k. Hãy in ra phần tử tại vị trí chỉ số k (`items[k]`). Nếu k nằm ngoài phạm vi danh sách, bắt lỗi `IndexError` và in 'INDEX OUT OF RANGE'.",
    "inputDesc": "Dòng 1: Danh sách các phần tử. Dòng 2: Chỉ số nguyên k.",
    "outputDesc": "Phần tử tại index k hoặc 'INDEX OUT OF RANGE'.",
    "exampleIO": "Input:\napple banana orange\n5\nOutput:\nINDEX OUT OF RANGE",
    "hint": "try: print(items[k]) except IndexError: print('INDEX OUT OF RANGE').",
    "sampleSolution": "items = input().split()\nk = int(input())\ntry:\n    print(items[k])\nexcept IndexError:\n    print('INDEX OUT OF RANGE')",
    "initialCode": "items = input().split()\nk = int(input())\n# Truy cập items[k] an toàn với try-except\n",
    "testCases": [
      { "input": "apple banana orange\n5", "expectedOutput": "INDEX OUT OF RANGE", "description": "Chỉ số 5 vượt quá độ dài 3" },
      { "input": "A B C D\n2", "expectedOutput": "C", "description": "Phần tử tại index 2 là C" },
      { "input": "X Y Z\n-1", "expectedOutput": "Z", "description": "Chỉ số âm hợp lệ trong Python" }
    ]
  },
  {
    "id": 204,
    "code": "CH11_05",
    "chapterId": 11,
    "chapterName": "Xử lý ngoại lệ",
    "title": "Bắt lỗi truy xuất từ điển (KeyError)",
    "difficulty": "Dễ",
    "appliedKnowledge": "Bắt ngoại lệ KeyError khi truy cập khóa không có trong Dictionary.",
    "description": "Hệ thống có sẵn từ điển thủ đô: `capitals = {'Vietnam': 'Hanoi', 'Japan': 'Tokyo', 'France': 'Paris', 'USA': 'Washington'}`. Nhập vào tên một quốc gia. Hãy in ra thủ đô của quốc gia đó bằng cách truy cập `capitals[country]`. Nếu không có trong từ điển, bắt lỗi `KeyError` và in ra 'NOT FOUND'.",
    "inputDesc": "Tên quốc gia (chuỗi).",
    "outputDesc": "Tên thủ đô hoặc 'NOT FOUND'.",
    "exampleIO": "Input:\nGermany\nOutput:\nNOT FOUND",
    "hint": "try: print(capitals[country]) except KeyError: print('NOT FOUND').",
    "sampleSolution": "capitals = {'Vietnam': 'Hanoi', 'Japan': 'Tokyo', 'France': 'Paris', 'USA': 'Washington'}\ncountry = input().strip()\ntry:\n    print(capitals[country])\nexcept KeyError:\n    print('NOT FOUND')",
    "initialCode": "capitals = {'Vietnam': 'Hanoi', 'Japan': 'Tokyo', 'France': 'Paris', 'USA': 'Washington'}\ncountry = input().strip()\n# Truy xuất và bắt KeyError\n",
    "testCases": [
      { "input": "Germany", "expectedOutput": "NOT FOUND", "description": "Germany không có trong từ điển" },
      { "input": "Vietnam", "expectedOutput": "Hanoi", "description": "Tìm thấy Vietnam" },
      { "input": "Japan", "expectedOutput": "Tokyo", "description": "Tìm thấy Japan" }
    ]
  },
  {
    "id": 205,
    "code": "CH11_06",
    "chapterId": 11,
    "chapterName": "Xử lý ngoại lệ",
    "title": "Khối lệnh try - except - else",
    "difficulty": "Trung bình",
    "appliedKnowledge": "Khối else thực thi khi không có ngoại lệ nào xảy ra trong try.",
    "description": "Nhập vào một số nguyên n. Trong khối try, kiểm tra nếu n % 2 != 0 thì phát sinh lỗi `raise ValueError('So le')`. Nếu có lỗi, in 'ERROR: SO LE'. Trong khối `else` (khi không phát sinh lỗi), in 'SUCCESS: SO CHAN'.",
    "inputDesc": "Một số nguyên n.",
    "outputDesc": "Thông báo tương ứng.",
    "exampleIO": "Input:\n4\nOutput:\nSUCCESS: SO CHAN",
    "hint": "try: if n % 2 != 0: raise ValueError except ValueError: print('ERROR: SO LE') else: print('SUCCESS: SO CHAN').",
    "sampleSolution": "n = int(input())\ntry:\n    if n % 2 != 0:\n        raise ValueError\nexcept ValueError:\n    print('ERROR: SO LE')\nelse:\n    print('SUCCESS: SO CHAN')",
    "initialCode": "n = int(input())\n# Cấu trúc try - except - else\n",
    "testCases": [
      { "input": "4", "expectedOutput": "SUCCESS: SO CHAN", "description": "Số chẵn vào khối else" },
      { "input": "7", "expectedOutput": "ERROR: SO LE", "description": "Số lẻ vào khối except" },
      { "input": "0", "expectedOutput": "SUCCESS: SO CHAN", "description": "Số 0 là số chẵn" }
    ]
  },
  {
    "id": 206,
    "code": "CH11_07",
    "chapterId": 11,
    "chapterName": "Xử lý ngoại lệ",
    "title": "Khối dọn dẹp tài nguyên (finally)",
    "difficulty": "Trung bình",
    "appliedKnowledge": "Khối finally luôn luôn được thực thi dù có ngoại lệ hay không.",
    "description": "Nhập vào 2 số nguyên a và b. Thực hiện phép chia a // b và in kết quả. Nếu b == 0, bắt `ZeroDivisionError` và in 'CANNOT DIVIDE'. Cuối cùng trong khối `finally`, luôn in ra dòng chữ 'CLEANUP FINISHED'.",
    "inputDesc": "Dòng 1: a. Dòng 2: b.",
    "outputDesc": "Kết quả hoặc thông báo lỗi, kèm dòng dọn dẹp cuối.",
    "exampleIO": "Input:\n10\n0\nOutput:\nCANNOT DIVIDE\nCLEANUP FINISHED",
    "hint": "try: ... except ZeroDivisionError: ... finally: print('CLEANUP FINISHED').",
    "sampleSolution": "a = int(input())\nb = int(input())\ntry:\n    print(a // b)\nexcept ZeroDivisionError:\n    print('CANNOT DIVIDE')\nfinally:\n    print('CLEANUP FINISHED')",
    "initialCode": "a = int(input())\nb = int(input())\n# try - except - finally\n",
    "testCases": [
      { "input": "10\n0", "expectedOutput": "CANNOT DIVIDE\nCLEANUP FINISHED", "description": "Có ngoại lệ chia 0, finally vẫn chạy" },
      { "input": "20\n5", "expectedOutput": "4\nCLEANUP FINISHED", "description": "Không có ngoại lệ, finally vẫn chạy" },
      { "input": "7\n2", "expectedOutput": "3\nCLEANUP FINISHED", "description": "Chia nguyên bình thường" }
    ]
  },
  {
    "id": 207,
    "code": "CH11_08",
    "chapterId": 11,
    "chapterName": "Xử lý ngoại lệ",
    "title": "Chủ động ném ngoại lệ với raise",
    "difficulty": "Trung bình",
    "appliedKnowledge": "Từ khóa raise ValueError để xác thực dữ liệu.",
    "description": "Viết chương trình kiểm tra tuổi của người dùng: Nhập vào số nguyên age. Nếu age < 0 hoặc age > 120, hãy `raise ValueError('Invalid age')`. Dùng try-except để bắt lỗi này: nếu hợp lệ in 'Tuoi hop le: <age>', nếu bị lỗi in 'LOI: TUOI NGOAI PHAM VI'.",
    "inputDesc": "Một số nguyên age.",
    "outputDesc": "Thông báo kiểm tra tuổi.",
    "exampleIO": "Input:\n-5\nOutput:\nLOI: TUOI NGOAI PHAM VI",
    "hint": "if age < 0 or age > 120: raise ValueError.",
    "sampleSolution": "age = int(input())\ntry:\n    if age < 0 or age > 120:\n        raise ValueError\n    print(f\"Tuoi hop le: {age}\")\nexcept ValueError:\n    print('LOI: TUOI NGOAI PHAM VI')",
    "initialCode": "age = int(input())\n# Dùng raise ValueError để kiểm tra tuổi\n",
    "testCases": [
      { "input": "-5", "expectedOutput": "LOI: TUOI NGOAI PHAM VI", "description": "Tuổi âm" },
      { "input": "25", "expectedOutput": "Tuoi hop le: 25", "description": "Tuổi hợp lệ" },
      { "input": "150", "expectedOutput": "LOI: TUOI NGOAI PHAM VI", "description": "Tuổi quá lớn" }
    ]
  },
  {
    "id": 208,
    "code": "CH11_09",
    "chapterId": 11,
    "chapterName": "Xử lý ngoại lệ",
    "title": "Tính căn bậc hai và kiểm tra số âm",
    "difficulty": "Trung bình",
    "appliedKnowledge": "raise ValueError khi tham số hàm toán học không hợp lệ.",
    "description": "Nhập vào số thực x. Nếu x < 0, chủ động ném lỗi `raise ValueError('So am')`. Hãy bắt lỗi và in 'KHONG THE TINH CAN SO AM'. Nếu x >= 0, in căn bậc hai của x làm tròn 2 chữ số thập phân.",
    "inputDesc": "Một số thực x.",
    "outputDesc": "Căn bậc hai dạng x.xx hoặc thông báo lỗi.",
    "exampleIO": "Input:\n-9\nOutput:\nKHONG THE TINH CAN SO AM",
    "hint": "try: if x < 0: raise ValueError; print(f\"{x**0.5:.2f}\") except ValueError: ...",
    "sampleSolution": "x = float(input())\ntry:\n    if x < 0:\n        raise ValueError\n    print(f\"{x ** 0.5:.2f}\")\nexcept ValueError:\n    print('KHONG THE TINH CAN SO AM')",
    "initialCode": "x = float(input())\n# Kiểm tra số âm và tính căn bậc hai\n",
    "testCases": [
      { "input": "-9", "expectedOutput": "KHONG THE TINH CAN SO AM", "description": "Số âm" },
      { "input": "16", "expectedOutput": "4.00", "description": "Căn của 16 là 4.00" },
      { "input": "2", "expectedOutput": "1.41", "description": "Căn của 2 là 1.41" }
    ]
  },
  {
    "id": 209,
    "code": "CH11_10",
    "chapterId": 11,
    "chapterName": "Xử lý ngoại lệ",
    "title": "Tự định nghĩa lớp ngoại lệ (Custom Exception)",
    "difficulty": "Khó",
    "appliedKnowledge": "Kế thừa class Exception để tạo lớp ngoại lệ riêng.",
    "description": "Tạo lớp ngoại lệ `class InsufficientFundsError(Exception): pass`. Nhập vào: Dòng 1 là số dư tài khoản balance (số nguyên); Dòng 2 là số tiền muốn rút amount. Nếu amount > balance, ném ngoại lệ `InsufficientFundsError`. Bắt ngoại lệ và in 'SO DU KHONG DU'. Nếu rút thành công, in 'CON LAI: <số dư mới>'.",
    "inputDesc": "Dòng 1: balance. Dòng 2: amount.",
    "outputDesc": "Số dư còn lại hoặc 'SO DU KHONG DU'.",
    "exampleIO": "Input:\n500000\n700000\nOutput:\nSO DU KHONG DU",
    "hint": "class InsufficientFundsError(Exception): pass. if amount > balance: raise InsufficientFundsError.",
    "sampleSolution": "class InsufficientFundsError(Exception):\n    pass\n\nbalance = int(input())\namount = int(input())\ntry:\n    if amount > balance:\n        raise InsufficientFundsError\n    print(f\"CON LAI: {balance - amount}\")\nexcept InsufficientFundsError:\n    print('SO DU KHONG DU')",
    "initialCode": "class InsufficientFundsError(Exception):\n    pass\n\nbalance = int(input())\namount = int(input())\n# Kiểm tra số dư và bắt InsufficientFundsError\n",
    "testCases": [
      { "input": "500000\n700000", "expectedOutput": "SO DU KHONG DU", "description": "Rút quá số dư" },
      { "input": "1000000\n200000", "expectedOutput": "CON LAI: 800000", "description": "Rút hợp lệ còn 800k" },
      { "input": "50000\n50000", "expectedOutput": "CON LAI: 0", "description": "Rút hết số dư" }
    ]
  },
  {
    "id": 210,
    "code": "CH11_11",
    "chapterId": 11,
    "chapterName": "Xử lý ngoại lệ",
    "title": "Chuyển đổi an toàn danh sách chuỗi sang số nguyên",
    "difficulty": "Trung bình",
    "appliedKnowledge": "Dùng try-except trong vòng lặp để bỏ qua các phần tử lỗi.",
    "description": "Nhập vào một danh sách các chuỗi cách nhau bởi dấu cách. Hãy duyệt qua từng chuỗi, cố gắng ép kiểu sang số nguyên bằng `int(x)`. Nếu thành công thì thêm vào danh sách kết quả, nếu phát sinh `ValueError` thì bỏ qua phần tử đó. Cuối cùng in ra các số nguyên hợp lệ cách nhau bởi dấu cách. Nếu không có số nào, in 'EMPTY'.",
    "inputDesc": "Một dòng chứa danh sách chuỗi.",
    "outputDesc": "Các số nguyên hợp lệ hoặc 'EMPTY'.",
    "exampleIO": "Input:\n10 abc 25 3.14 xyz 50\nOutput:\n10 25 50",
    "hint": "valid = []. for token in tokens: try: valid.append(int(token)) except ValueError: pass.",
    "sampleSolution": "tokens = input().split()\nvalid = []\nfor token in tokens:\n    try:\n        valid.append(int(token))\n    except ValueError:\n        pass\nif valid:\n    print(' '.join(map(str, valid)))\nelse:\n    print('EMPTY')",
    "initialCode": "tokens = input().split()\n# Lọc các số nguyên an toàn bằng try-except\n",
    "testCases": [
      { "input": "10 abc 25 3.14 xyz 50", "expectedOutput": "10 25 50", "description": "Bỏ qua abc, 3.14 và xyz" },
      { "input": "hello world test", "expectedOutput": "EMPTY", "description": "Không có số nguyên nào" },
      { "input": "1 2 3", "expectedOutput": "1 2 3", "description": "Toàn bộ là số nguyên" }
    ]
  },
  {
    "id": 211,
    "code": "CH11_12",
    "chapterId": 11,
    "chapterName": "Xử lý ngoại lệ",
    "title": "Tính trung bình cộng an toàn với danh sách rỗng",
    "difficulty": "Dễ",
    "appliedKnowledge": "Bắt ZeroDivisionError khi danh sách không có phần tử.",
    "description": "Nhập vào một dòng chứa các số thực cách nhau bởi dấu cách (dòng có thể hoàn toàn trống). Hãy tính trung bình cộng của các số và in ra làm tròn 2 chữ số thập phân. Nếu không có số nào (danh sách rỗng gây ra phép chia cho 0 khi tính `sum(nums) / len(nums)`), hãy bắt ngoại lệ `ZeroDivisionError` và in 'NO DATA'.",
    "inputDesc": "Một dòng chứa các số hoặc dòng trống.",
    "outputDesc": "Trung bình cộng hoặc 'NO DATA'.",
    "exampleIO": "Input:\n10 20 30\nOutput:\n20.00",
    "hint": "try: line = input().strip(); nums = [float(x) for x in line.split()]; avg = sum(nums) / len(nums); print(f\"{avg:.2f}\") except (ZeroDivisionError, EOFError): print('NO DATA').",
    "sampleSolution": "try:\n    line = input().strip()\n    nums = [float(x) for x in line.split()]\n    avg = sum(nums) / len(nums)\n    print(f\"{avg:.2f}\")\nexcept (ZeroDivisionError, EOFError):\n    print('NO DATA')",
    "initialCode": "# Bắt ZeroDivisionError khi tính TBC danh sách rỗng\ntry:\n    line = input().strip()\n    nums = [float(x) for x in line.split()]\n    avg = sum(nums) / len(nums)\n    print(f\"{avg:.2f}\")\nexcept (ZeroDivisionError, EOFError):\n    print('NO DATA')\n",
    "testCases": [
      { "input": "10 20 30", "expectedOutput": "20.00", "description": "TBC 3 số là 20.00" },
      { "input": "", "expectedOutput": "NO DATA", "description": "Chuỗi rỗng gây ZeroDivisionError" },
      { "input": "5.5 6.5", "expectedOutput": "6.00", "description": "TBC 2 số thập phân" }
    ]
  }
];
