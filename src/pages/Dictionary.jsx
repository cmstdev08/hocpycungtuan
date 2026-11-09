import React, { useState } from 'react';
import { BookMarked, Search, Code, Tag } from 'lucide-react';
import { dictionaryData } from '../data/dictionary.js';
import './Dictionary.css';

const categories = [
  { id: 'all', label: 'Tất cả' },
  { id: 'builtin', label: 'Hàm có sẵn' },
  { id: 'string', label: 'Phương thức String' },
  { id: 'list', label: 'Phương thức List' },
  { id: 'dict', label: 'Dictionary' },
  { id: 'operator', label: 'Toán tử' },
  { id: 'keyword', label: 'Từ khóa' },
];

const categoryLabels = {
  builtin: 'Hàm có sẵn',
  string: 'String',
  list: 'List',
  dict: 'Dictionary',
  operator: 'Toán tử',
  keyword: 'Từ khóa',
};

const Dictionary = () => {
  const [selectedCat, setSelectedCat] = useState('all');
  const [search, setSearch] = useState('');

  const filteredItems = dictionaryData.filter((item) => {
    const matchesCat = selectedCat === 'all' || item.category === selectedCat;
    const q = search.toLowerCase().trim();
    const matchesSearch =
      !q ||
      item.name.toLowerCase().includes(q) ||
      item.desc.toLowerCase().includes(q) ||
      item.example.toLowerCase().includes(q);
    return matchesCat && matchesSearch;
  });

  return (
    <div className="dict-container">
      <div className="dict-header">
        <h2><BookMarked size={22} color="var(--color-primary)" /> Từ điển tra cứu nhanh Python</h2>
        <p>Tra cứu nhanh các hàm có sẵn, phương thức xử lý chuỗi, danh sách, dictionary, toán tử và từ khóa Python.</p>
      </div>

      <div className="dict-toolbar">
        {/* Search */}
        <div className="dict-search-box">
          <Search size={18} className="dict-search-icon" />
          <input
            type="text"
            className="dict-search-input"
            placeholder="Tìm kiếm hàm, phương thức, từ khóa (ví dụ: split, append, len, def)..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        {/* Categories */}
        <div className="dict-categories">
          {categories.map((cat) => (
            <button
              key={cat.id}
              className={`dict-cat-btn ${selectedCat === cat.id ? 'active' : ''}`}
              onClick={() => setSelectedCat(cat.id)}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      <div className="dict-grid">
        {filteredItems.map((item, idx) => (
          <div key={idx} className="card dict-card">
            <div className="dict-card-top">
              <span className={`dict-badge badge-${item.category}`}>
                {categoryLabels[item.category] || item.category}
              </span>
            </div>

            <div className="dict-name">{item.name}</div>
            <div className="dict-desc">{item.desc}</div>

            {item.example && (
              <div>
                <span style={{ fontSize: '0.72rem', color: 'var(--color-text-secondary)', fontWeight: 600 }}>
                  Ví dụ minh họa:
                </span>
                <pre className="dict-example">{item.example}</pre>
              </div>
            )}
          </div>
        ))}

        {filteredItems.length === 0 && (
          <div style={{ gridColumn: '1 / -1', textAlign: 'center', padding: '3rem', color: 'var(--color-text-secondary)' }}>
            Không tìm thấy mục tra cứu nào phù hợp với từ khóa "{search}".
          </div>
        )}
      </div>
    </div>
  );
};

export default Dictionary;
