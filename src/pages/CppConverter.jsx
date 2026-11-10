import React, { useState } from 'react';
import { ArrowLeftRight, Copy, Check, Play, BookOpen, ExternalLink, Sparkles } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const SAMPLES_CPP = [
  // --- 1. Nhập xuất & Biến ---
  {
    category: 'Nhập xuất & Biến',
    name: '1. In ra màn hình (cout << vs print)',
    explain: 'C++ cần khai báo thư viện <iostream>, namespace và kết thúc bằng endl hoặc \\n. Python chỉ cần hàm print() tích hợp sẵn và tự động xuống dòng.',
    cpp: `#include <iostream>
using namespace std;

int main() {
    cout << "Xin chào C++" << endl;
    cout << "Giá trị: " << 100 << endl;
    return 0;
}`,
    py: `# Python tương đương:
print("Xin chào C++")
print("Giá trị:", 100)`,
  },
  {
    category: 'Nhập xuất & Biến',
    name: '2. Nhập số nguyên & số thực (cin >>)',
    explain: 'C++ dùng toán tử >> đọc trực tiếp vào biến đã khai báo kiểu. Python dùng input() trả về chuỗi (str) nên cần ép kiểu qua int() hoặc float().',
    cpp: `int a;
float b;
cin >> a >> b;
cout << "Tổng: " << (a + b);`,
    py: `# Python tương đương:
a = int(input())
b = float(input())
print(f"Tổng: {a + b}")`,
  },
  {
    category: 'Nhập xuất & Biến',
    name: '3. Kiểu dữ liệu tĩnh vs Kiểu dữ liệu động',
    explain: 'C++ là ngôn ngữ định kiểu tĩnh (Statically-typed), biến phải được định rõ kiểu khi khai báo. Python định kiểu động (Dynamically-typed), kiểu được tự suy luận lúc chạy.',
    cpp: `int soNguyen = 10;
double soThuc = 3.14;
string chuoi = "Học Python";
bool logic = true;`,
    py: `# Python tương đương:
so_nguyen = 10
so_thuc = 3.14
chuoi = "Học Python"
logic = True  # Viết hoa chữ T`,
  },
  {
    category: 'Nhập xuất & Biến',
    name: '4. Hoán đổi giá trị 2 biến (Swap)',
    explain: 'C++ truyền thống cần biến tạm temp hoặc gọi hàm std::swap(a, b). Python hỗ trợ hoán đổi tuple cực kỳ thanh lịch qua a, b = b, a.',
    cpp: `// C++ dùng biến tạm hoặc std::swap
int temp = a;
a = b;
b = temp;
// Hoặc: swap(a, b);`,
    py: `# Python tương đương:
a, b = b, a`,
  },

  // --- 2. Cấu trúc điều khiển & Vòng lặp ---
  {
    category: 'Cấu trúc điều khiển',
    name: '5. Cấu trúc rẽ nhánh if - else if - else',
    explain: 'C++ dùng cặp ngoặc nhọn { } để gom nhóm khối lệnh. Python dùng dấu hai chấm (:) ở cuối dòng điều kiện và thụt lề 4 dấu cách (indentation).',
    cpp: `if (diem >= 8.5) {
    cout << "Giỏi";
} else if (diem >= 6.5) {
    cout << "Khá";
} else {
    cout << "Trung bình";
}`,
    py: `# Python tương đương (elif thay cho else if):
if diem >= 8.5:
    print("Giỏi")
elif diem >= 6.5:
    print("Khá")
else:
    print("Trung bình")`,
  },
  {
    category: 'Cấu trúc điều khiển',
    name: '6. Toán tử 3 ngôi (Ternary Operator)',
    explain: 'C++ dùng cú pháp điều kiện ? đúng : sai. Python dùng cú pháp tự nhiên như câu văn tiếng Anh: giá_trị_đúng if điều_kiện else giá_trị_sai.',
    cpp: `string status = (n % 2 == 0) ? "Chẵn" : "Lẻ";`,
    py: `# Python tương đương:
status = "Chẵn" if n % 2 == 0 else "Lẻ"`,
  },
  {
    category: 'Cấu trúc điều khiển',
    name: '7. Vòng lặp For đếm chỉ số',
    explain: 'C++ dùng cú pháp kinh điển (khởi tạo; điều kiện; bước nhảy). Python dùng hàm sinh khoảng range(start, stop, step) duyệt an toàn.',
    cpp: `for (int i = 0; i < 5; i++) {
    cout << i << " ";
}`,
    py: `# Python tương đương (range dừng trước mốc 5):
for i in range(5):
    print(i, end=" ")`,
  },
  {
    category: 'Cấu trúc điều khiển',
    name: '8. Vòng lặp For-Each duyệt từng phần tử',
    explain: 'C++11 có Range-based for loop. Python mặc định mọi vòng lặp for đều là for-in duyệt trực tiếp các phần tử của tập hợp.',
    cpp: `vector<int> nums = {10, 20, 30};
for (int x : nums) {
    cout << x << endl;
}`,
    py: `# Python tương đương:
nums = [10, 20, 30]
for x in nums:
    print(x)`,
  },
  {
    category: 'Cấu trúc điều khiển',
    name: '9. Vòng lặp While',
    explain: 'Vòng lặp while trong cả 2 ngôn ngữ đều lặp khi điều kiện còn đúng, nhưng Python bỏ qua cặp dấu ngoặc tròn ( ).',
    cpp: `int i = 1;
while (i <= 5) {
    cout << i << " ";
    i++;
}`,
    py: `# Python tương đương:
i = 1
while i <= 5:
    print(i, end=" ")
    i += 1  # Python không hỗ trợ toán tử i++`,
  },
  {
    category: 'Cấu trúc điều khiển',
    name: '10. Switch-case vs Match-case',
    explain: 'C++ switch chỉ áp dụng cho kiểu số nguyên/char. Python 3.10+ hỗ trợ Structural Pattern Matching (match-case) cực kỳ mạnh mẽ cho mọi kiểu dữ liệu.',
    cpp: `switch (choice) {
    case 1: cout << "Tạo mới"; break;
    case 2: cout << "Cập nhật"; break;
    default: cout << "Không hợp lệ";
}`,
    py: `# Python 3.10+ match-case (hoặc if-elif-else):
match choice:
    case 1:
        print("Tạo mới")
    case 2:
        print("Cập nhật")
    case _:
        print("Không hợp lệ")`,
  },

  // --- 3. Mảng & Chuỗi ---
  {
    category: 'Mảng & Chuỗi',
    name: '11. Mảng động (std::vector vs List)',
    explain: 'C++ dùng std::vector<T> từ thư viện <vector>. Python có kiểu List [ ] tích hợp sẵn, chứa được nhiều kiểu dữ liệu hỗn hợp trong cùng 1 danh sách.',
    cpp: `#include <vector>
vector<int> arr = {1, 2, 3};
arr.push_back(4); // Thêm phần tử
arr.pop_back();  // Xóa phần tử cuối
cout << "Kích thước: " << arr.size();`,
    py: `# Python tương đương:
arr = [1, 2, 3]
arr.append(4)  # Thêm phần tử
arr.pop()      # Xóa phần tử cuối
print("Kích thước:", len(arr))`,
  },
  {
    category: 'Mảng & Chuỗi',
    name: '12. Cắt chuỗi ký tự (Substring vs Slicing)',
    explain: 'C++ dùng phương thức str.substr(vị_trí_bắt_đầu, độ_dài). Python dùng cú pháp cắt lát (slicing) s[bắt_đầu:kết_thúc:bước_nhảy] rất trực quan.',
    cpp: `string s = "Hello World";
string sub = s.substr(0, 5); // Lấy "Hello"
cout << sub;`,
    py: `# Python tương đương:
s = "Hello World"
sub = s[0:5]  # Lấy từ index 0 đến 4
print(sub)`,
  },
  {
    category: 'Mảng & Chuỗi',
    name: '13. Đảo ngược mảng hoặc chuỗi',
    explain: 'C++ dùng hàm std::reverse trong <algorithm>. Python đảo chuỗi cực nhanh bằng bước nhảy âm [::-1] hoặc arr.reverse() cho list.',
    cpp: `#include <algorithm>
string s = "Python";
reverse(s.begin(), s.end());
cout << s; // "nohtyP"`,
    py: `# Python tương đương:
s = "Python"
print(s[::-1])  # "nohtyP"`,
  },
  {
    category: 'Mảng & Chuỗi',
    name: '14. Sắp xếp mảng (std::sort vs sorted)',
    explain: 'C++ dùng std::sort(v.begin(), v.end()). Python dùng list.sort() (tại chỗ) hoặc sorted(list) (trả về danh sách mới), thuật toán Timsort cực nhanh.',
    cpp: `#include <algorithm>
vector<int> arr = {5, 2, 8, 1};
sort(arr.begin(), arr.end()); // Tăng dần
// Giảm dần: sort(arr.rbegin(), arr.rend());`,
    py: `# Python tương đương:
arr = [5, 2, 8, 1]
arr.sort()  # Tăng dần
# Giảm dần: arr.sort(reverse=True)`,
  },

  // --- 4. Hàm & Tham chiếu ---
  {
    category: 'Hàm & Tham số',
    name: '15. Định nghĩa hàm căn bản',
    explain: 'C++ phải khai báo kiểu trả về và kiểu từng tham số. Python dùng từ khóa def và lệnh return tự do.',
    cpp: `int binhPhuong(int x) {
    return x * x;
}`,
    py: `# Python tương đương:
def binh_phuong(x):
    return x * x`,
  },
  {
    category: 'Hàm & Tham số',
    name: '16. Truyền tham chiếu (&) vs Pass-by-object-reference',
    explain: 'C++ dùng dấu & để truyền tham chiếu thay đổi biến bên ngoài. Python truyền tham chiếu đối tượng (Mutable như list/dict sẽ thay đổi, Immutable như int/str thì không).',
    cpp: `void tangGiaTri(int &x) {
    x += 10;
}`,
    py: `# Trong Python số nguyên là Immutable,
# cách chuẩn là trả về giá trị mới:
def tang_gia_tri(x):
    return x + 10

x = tang_gia_tri(x)`,
  },
  {
    category: 'Hàm & Tham số',
    name: '17. Trả về nhiều giá trị (std::pair vs Tuple)',
    explain: 'C++ cần std::pair hoặc std::tuple. Python hỗ trợ trả về nhiều giá trị tự nhiên phân tách bằng dấu phẩy.',
    cpp: `#include <utility>
pair<int, int> minMax(int a, int b) {
    return make_pair(min(a, b), max(a, b));
}`,
    py: `# Python tương đương:
def min_max(a, b):
    return min(a, b), max(a, b)

nho_nhat, lon_nhat = min_max(10, 20)`,
  },
  {
    category: 'Hàm & Tham số',
    name: '18. Hàm ẩn danh Lambda',
    explain: 'C++11 có cú pháp lambda [capture](params) -> ret { body }. Python dùng từ khóa lambda params: expression ngắn gọn.',
    cpp: `auto square = [](int x) { return x * x; };
cout << square(5);`,
    py: `# Python tương đương:
square = lambda x: x * x
print(square(5))`,
  },

  // --- 5. Cấu trúc dữ liệu STL ---
  {
    category: 'Cấu trúc dữ liệu STL',
    name: '19. Bảng ánh xạ Key-Value (std::map vs Dictionary)',
    explain: 'C++ có std::map (cây đỏ đen) hoặc unordered_map (bảng băm). Python có Dictionary { } tích hợp với tốc độ truy xuất O(1).',
    cpp: `#include <map>
map<string, float> diem;
diem["Toan"] = 9.0;
diem["Tin"] = 10.0;
cout << diem["Tin"];`,
    py: `# Python tương đương:
diem = {
    "Toan": 9.0,
    "Tin": 10.0
}
print(diem["Tin"])`,
  },
  {
    category: 'Cấu trúc dữ liệu STL',
    name: '20. Tập hợp các phần tử duy nhất (std::set vs Set)',
    explain: 'C++ dùng std::set tự động loại bỏ trùng lặp và sắp xếp. Python dùng Set { } hỗ trợ toán tử giao (&), hợp (|), hiệu (-).',
    cpp: `#include <set>
set<int> tapHop;
tapHop.insert(10);
tapHop.insert(10); // Không bị trùng`,
    py: `# Python tương đương:
tap_hop = {10, 20, 10}
tap_hop.add(30)
print(tap_hop)  # {10, 20, 30}`,
  },
  {
    category: 'Cấu trúc dữ liệu STL',
    name: '21. Cặp phần tử Pair & Tuple',
    explain: 'C++ pair<T1, T2> truy cập qua .first và .second. Python tuple (a, b) hỗ trợ giải nén biến (unpacking) trực tiếp.',
    cpp: `pair<string, int> sv = {"Nam", 20};
cout << sv.first << " - " << sv.second;`,
    py: `# Python tương đương:
sv = ("Nam", 20)
ten, tuoi = sv
print(f"{ten} - {tuoi}")`,
  },

  // --- 6. OOP & Xử lý File ---
  {
    category: 'OOP & Xử lý File',
    name: '22. Định nghĩa Lớp Class và Hàm tạo',
    explain: 'C++ phân vùng public/private và dùng tên Class làm constructor. Python dùng phương thức đặc biệt __init__ và tham số self.',
    cpp: `class SinhVien {
public:
    string ten;
    float diem;
    SinhVien(string t, float d) {
        ten = t;
        diem = d;
    }
    void inThongTin() {
        cout << ten << ": " << diem << endl;
    }
};`,
    py: `# Python tương đương:
class SinhVien:
    def __init__(self, ten, diem):
        self.ten = ten
        self.diem = diem

    def in_thong_tin(self):
        print(f"{self.ten}: {self.diem}")`,
  },
  {
    category: 'OOP & Xử lý File',
    name: '23. Kế thừa trong OOP (Inheritance)',
    explain: 'C++ dùng cú pháp class Con : public Cha. Python dùng class Con(Cha) và gọi super().__init__() để kế thừa khởi tạo.',
    cpp: `class Con : public Cha {
public:
    Con() : Cha() { }
};`,
    py: `# Python tương đương:
class Con(Cha):
    def __init__(self):
        super().__init__()`,
  },
  {
    category: 'OOP & Xử lý File',
    name: '24. Xử lý ngoại lệ (try-catch vs try-except)',
    explain: 'C++ dùng khối try { } catch (exception &e) { }. Python dùng try: except TenNgoaiLe: và có thêm khối else / finally.',
    cpp: `try {
    if (b == 0) throw runtime_error("Chia 0");
    cout << a / b;
} catch (exception &e) {
    cout << e.what();
}`,
    py: `# Python tương đương:
try:
    print(a / b)
except ZeroDivisionError:
    print("Chia 0")`,
  },
];

const CATEGORIES = [
  'Tất cả',
  'Nhập xuất & Biến',
  'Cấu trúc điều khiển',
  'Mảng & Chuỗi',
  'Hàm & Tham số',
  'Cấu trúc dữ liệu STL',
  'OOP & Xử lý File',
];

const CppConverter = () => {
  const [selectedCategory, setSelectedCategory] = useState('Tất cả');
  const [sampleIdx, setSampleIdx] = useState(0);
  const [copied, setCopied] = useState(false);
  const navigate = useNavigate();

  const filteredSamples = selectedCategory === 'Tất cả'
    ? SAMPLES_CPP
    : SAMPLES_CPP.filter(s => s.category === selectedCategory);

  const selectedSample = filteredSamples[sampleIdx] || filteredSamples[0] || SAMPLES_CPP[0];

  const handleCopy = () => {
    navigator.clipboard.writeText(selectedSample.py);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleOpenInEditor = () => {
    // Chuyển sang Python Compiler và có thể chạy ngay
    navigate('/editor');
  };

  return (
    <div style={{ maxWidth: 1040, margin: '0 auto', paddingBottom: '3rem' }}>
      {/* Header */}
      <div style={{ marginBottom: '1.2rem' }}>
        <h2 style={{
          display: 'flex',
          alignItems: 'center',
          gap: 10,
          margin: '0 0 0.3rem 0',
          fontSize: 'clamp(1.25rem, 4vw, 1.6rem)',
          flexWrap: 'wrap',
        }}>
          <ArrowLeftRight size={26} color="var(--color-primary)" /> Đối chiếu & Chuyển đổi cú pháp C++ sang Python
        </h2>
        <p style={{ color: 'var(--color-text-secondary)', margin: 0, fontSize: '0.92rem' }}>
          Dành riêng cho sinh viên đã quen với C++/C: đối chiếu trực quan 24 chủ đề cốt lõi để làm chủ Python nhanh chóng.
        </p>
      </div>

      {/* Category Pills (Touch-scrollable) */}
      <div style={{
        display: 'flex',
        gap: '0.45rem',
        marginBottom: '1rem',
        overflowX: 'auto',
        paddingBottom: '0.35rem',
        WebkitOverflowScrolling: 'touch',
      }}>
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => {
              setSelectedCategory(cat);
              setSampleIdx(0);
            }}
            style={{
              padding: '0.4rem 0.85rem',
              borderRadius: 20,
              fontSize: '0.8rem',
              fontWeight: 600,
              cursor: 'pointer',
              whiteSpace: 'nowrap',
              border: selectedCategory === cat ? '1px solid var(--color-primary)' : '1px solid var(--color-border)',
              background: selectedCategory === cat ? 'var(--color-primary)' : 'var(--color-card)',
              color: selectedCategory === cat ? '#ffffff' : 'var(--color-text)',
              transition: 'all 0.15s ease',
              flexShrink: 0,
            }}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Topic Selector Dropdown */}
      <div style={{ marginBottom: '1.2rem' }}>
        <select
          className="sample-select"
          style={{ width: '100%', padding: '0.65rem 0.9rem', fontSize: '0.95rem' }}
          value={sampleIdx}
          onChange={(e) => setSampleIdx(Number(e.target.value))}
        >
          {filteredSamples.map((s, idx) => (
            <option key={idx} value={idx}>
              {s.name}
            </option>
          ))}
        </select>
      </div>

      {/* Explanation Banner */}
      <div className="card" style={{
        padding: '0.9rem 1.2rem',
        marginBottom: '1.2rem',
        background: 'linear-gradient(135deg, rgba(37,99,235,0.08) 0%, rgba(6,182,212,0.08) 100%)',
        border: '1px solid rgba(37,99,235,0.2)',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontWeight: 700, color: 'var(--color-primary)', marginBottom: '0.3rem', fontSize: '0.9rem' }}>
          <Sparkles size={16} /> Điểm mấu chốt cần nhớ:
        </div>
        <p style={{ margin: 0, fontSize: '0.9rem', color: 'var(--color-text)', lineHeight: 1.6 }}>
          {selectedSample.explain}
        </p>
      </div>

      {/* Comparison Grid: Stacks on mobile <= 768px */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
        gap: '1.2rem',
      }}>
        {/* C++ Code Box */}
        <div className="card" style={{ padding: 0, overflow: 'hidden', border: '1px solid var(--color-border)' }}>
          <div style={{
            padding: '0.65rem 1rem',
            background: 'var(--color-input-bg)',
            borderBottom: '1px solid var(--color-border)',
            fontWeight: 700,
            fontSize: '0.88rem',
            color: '#38bdf8',
            display: 'flex',
            alignItems: 'center',
            gap: 6,
          }}>
            <span>🔵 Ngôn ngữ C++ (Cú pháp tĩnh)</span>
          </div>
          <pre style={{
            margin: 0,
            padding: '1.1rem',
            fontFamily: 'Consolas, Monaco, "Courier New", monospace',
            fontSize: 'clamp(0.85rem, 2.5vw, 0.92rem)',
            lineHeight: 1.7,
            background: 'var(--color-code-bg)',
            whiteSpace: 'pre-wrap',
            wordBreak: 'break-word',
            minHeight: 180,
            color: 'var(--color-text)',
          }}>
            {selectedSample.cpp}
          </pre>
        </div>

        {/* Python Code Box */}
        <div className="card" style={{ padding: 0, overflow: 'hidden', border: '1.5px solid var(--color-primary)' }}>
          <div style={{
            padding: '0.65rem 1rem',
            background: 'var(--color-hover)',
            borderBottom: '1px solid var(--color-border)',
            fontWeight: 700,
            fontSize: '0.88rem',
            color: 'var(--color-primary)',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '0.4rem',
          }}>
            <span>🐍 Python 3 (Ngắn gọn, trong sáng)</span>
            <div style={{ display: 'flex', gap: '0.4rem' }}>
              <button
                className="btn btn-ghost"
                onClick={handleCopy}
                style={{ padding: '0.25rem 0.5rem', fontSize: '0.8rem' }}
                title="Sao chép code Python"
              >
                {copied ? <Check size={15} color="var(--color-success)" /> : <Copy size={15} />}
                <span style={{ fontSize: '0.78rem' }}>{copied ? 'Đã chép' : 'Chép'}</span>
              </button>
              <button
                className="btn btn-ghost"
                onClick={handleOpenInEditor}
                style={{ padding: '0.25rem 0.5rem', fontSize: '0.8rem' }}
                title="Chạy trên Python Compiler"
              >
                <ExternalLink size={15} />
                <span style={{ fontSize: '0.78rem' }}>Compiler</span>
              </button>
            </div>
          </div>
          <pre style={{
            margin: 0,
            padding: '1.1rem',
            fontFamily: 'Consolas, Monaco, "Courier New", monospace',
            fontSize: 'clamp(0.85rem, 2.5vw, 0.92rem)',
            lineHeight: 1.7,
            background: 'var(--color-code-bg)',
            whiteSpace: 'pre-wrap',
            wordBreak: 'break-word',
            color: 'var(--color-cyan)',
            minHeight: 180,
          }}>
            {selectedSample.py}
          </pre>
        </div>
      </div>
    </div>
  );
};

export default CppConverter;
