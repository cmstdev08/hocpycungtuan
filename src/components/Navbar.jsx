import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Moon, Sun, Menu, HelpCircle, Search } from 'lucide-react';
import { lessons } from '../data/lessons.js';
import './Navbar.css';

const pageTitles = {
  '/': 'Dashboard',
  '/lessons': 'Khóa học Python',
  '/editor': 'Python Compiler',
  '/exercises': 'Bài tập thực hành',
  '/quizzes': 'Trắc nghiệm',
  '/dictionary': 'Từ điển Python',
};

const Navbar = ({ toggleTheme, theme, toggleSidebar }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [showSearch, setShowSearch] = useState(false);

  // Determine current page title & breadcrumb
  const pathSegments = location.pathname.split('/').filter(Boolean);
  const baseTitle = pageTitles['/' + (pathSegments[0] || '')] || 'Dashboard';

  const handleSearch = (query) => {
    setSearchQuery(query);
    if (query.trim().length < 2) {
      setSearchResults([]);
      return;
    }
    const q = query.toLowerCase();
    const results = lessons.filter(
      l => l.title.toLowerCase().includes(q) || l.theory.toLowerCase().includes(q)
    ).slice(0, 5);
    setSearchResults(results);
  };

  const goToLesson = (id) => {
    setSearchQuery('');
    setSearchResults([]);
    setShowSearch(false);
    navigate(`/lessons/${id}`);
  };

  return (
    <header className="navbar">
      <div className="navbar-left">
        <button className="btn-ghost navbar-menu-btn" onClick={toggleSidebar} aria-label="Toggle menu">
          <Menu size={20} />
        </button>
        <div className="navbar-title-area">
          <h1 className="navbar-title">{baseTitle}</h1>
          {pathSegments.length > 1 && (
            <nav className="breadcrumb">
              <span onClick={() => navigate('/' + pathSegments[0])} className="breadcrumb-link">
                {baseTitle}
              </span>
              <span className="breadcrumb-sep">/</span>
              <span className="breadcrumb-current">
                {pathSegments.slice(1).join(' / ')}
              </span>
            </nav>
          )}
        </div>
      </div>

      <div className="navbar-center">
        <div className="search-wrapper">
          <Search size={16} className="search-icon" />
          <input
            type="text"
            className="search-input"
            placeholder="Tìm kiếm bài học..."
            value={searchQuery}
            onChange={(e) => handleSearch(e.target.value)}
            onFocus={() => setShowSearch(true)}
            onBlur={() => setTimeout(() => setShowSearch(false), 200)}
          />
          {showSearch && searchResults.length > 0 && (
            <div className="search-dropdown">
              {searchResults.map(r => (
                <div
                  key={r.id}
                  className="search-result-item"
                  onMouseDown={() => goToLesson(r.id)}
                >
                  <span className="search-result-chapter">Chương {r.id}</span>
                  <span className="search-result-title">{r.title}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="navbar-right">
        <button className="btn-ghost" onClick={toggleTheme} aria-label="Toggle theme">
          {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
        </button>
        <button className="btn-ghost" aria-label="Trợ giúp" title="Trợ giúp">
          <HelpCircle size={18} />
        </button>
      </div>
    </header>
  );
};

export default Navbar;
