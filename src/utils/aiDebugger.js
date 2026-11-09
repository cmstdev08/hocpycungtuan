// src/utils/aiDebugger.js
// Bộ giải thích lỗi Python bằng Tiếng Việt thông minh (Offline AI Tutor)

export function analyzePythonError(errorMsg, code) {
  if (!errorMsg) return null;

  const err = errorMsg.toLowerCase();

  if (err.includes('zerodivisionerror')) {
    return {
      title: 'Lỗi chia cho số 0 (ZeroDivisionError)',
      explanation: 'Trong toán học và lập trình, không thể chia một số cho số 0.',
      suggestion: 'Hãy kiểm tra mẫu số hoặc biến chia, thêm điều kiện if mau_so != 0: trước khi thực hiện phép chia.',
    };
  }

  if (err.includes('indentationerror')) {
    return {
      title: 'Lỗi thụt lề câu lệnh (IndentationError)',
      explanation: 'Python bắt buộc các câu lệnh trong cùng một khối (như if, for, while, def) phải thụt lề bằng nhau.',
      suggestion: 'Hãy dùng đúng 4 dấu khoảng trắng (hoặc phím Tab) và đảm bảo các dòng lệnh ngang hàng có cùng số lượng dấu cách.',
    };
  }

  if (err.includes('syntaxerror')) {
    return {
      title: 'Lỗi cú pháp (SyntaxError)',
      explanation: 'Chương trình có đoạn viết sai ngữ pháp của Python (ví dụ: quên dấu hai chấm : hoặc quên đóng ngoặc).',
      suggestion: 'Kiểm tra xem bạn có quên dấu hai chấm : ở cuối câu lệnh if/for/def, hoặc quên dấu đóng ngoặc kép " " không.',
    };
  }

  if (err.includes('nameerror')) {
    const match = errorMsg.match(/name '(\w+)' is not defined/i);
    const varName = match ? match[1] : 'biến';
    return {
      title: `Tên biến '${varName}' chưa được định nghĩa (NameError)`,
      explanation: `Bạn đang gọi biến hoặc hàm '${varName}' nhưng chưa gán giá trị cho nó trước đó hoặc bị gõ sai chính tả.`,
      suggestion: `Kiểm tra lại xem biến '${varName}' đã được khai báo ở phía trên chưa, và chú ý Python có phân biệt chữ HOA - chữ thường.`,
    };
  }

  if (err.includes('typeerror')) {
    return {
      title: 'Lỗi xung đột kiểu dữ liệu (TypeError)',
      explanation: 'Bạn đang thực hiện phép toán giữa 2 kiểu dữ liệu không tương thích (ví dụ: cộng chuỗi str với số nguyên int).',
      suggestion: 'Hãy dùng các hàm ép kiểu như str(x) hoặc int(x) trước khi thực hiện phép tính hoặc ghép chuỗi.',
    };
  }

  if (err.includes('valueerror')) {
    return {
      title: 'Lỗi giá trị không hợp lệ (ValueError)',
      explanation: 'Hàm nhận được tham số đúng kiểu nhưng giá trị bên trong không thể chuyển đổi được (ví dụ: int("abc")).',
      suggestion: 'Hãy đảm bảo người dùng chỉ nhập chuỗi chứa chữ số khi sử dụng hàm int().',
    };
  }

  if (err.includes('indexerror')) {
    return {
      title: 'Vượt quá chỉ số danh sách (IndexError)',
      explanation: 'Bạn đang cố truy xuất một phần tử tại vị trí index nằm ngoài phạm vi độ dài của List hoặc chuỗi.',
      suggestion: 'Hãy dùng hàm len(danh_sach) để kiểm tra độ dài trước khi truy xuất, lưu ý index trong Python bắt đầu từ 0 đến len - 1.',
    };
  }

  if (err.includes('keyerror')) {
    return {
      title: 'Khóa không tồn tại trong từ điển (KeyError)',
      explanation: 'Bạn đang cố lấy giá trị của một key mà Dictionary hiện tại chưa hề có.',
      suggestion: 'Hãy sử dụng phương thức dict.get(key, default) để truy xuất an toàn mà không bị lỗi.',
    };
  }

  // Mặc định
  return {
    title: 'Phát hiện sự cố thực thi (Runtime Error)',
    explanation: 'Chương trình gặp lỗi trong lúc chạy.',
    suggestion: 'Hãy đọc kỹ dòng báo lỗi chi tiết ở khung Terminal màu đỏ và kiểm tra lại dòng code được thông báo.',
  };
}
