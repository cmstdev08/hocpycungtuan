import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Moon, Sun, Menu, HelpCircle, Search, Clock, Play, Pause, RotateCcw } from 'lucide-react';
import { lessons } from '../data/lessons.js';
import './Navbar.css';

const pageTitles = {
  '/': 'Dashboard',
  '/lessons': 'Khóa học Python',
  '/editor': 'Python Compiler',
  '/exercises': 'Bài tập thực hành',
  '/quizzes': 'Trắc nghiệm',
  '/mock-exam': 'Thi thử 45 phút',
  '/speed-typing': 'Luyện gõ Code',
  '/bughunt': 'Săn lỗi Bug Hunt',
  '/converter': 'C++ sang Python',
  '/visualizer': 'Mô phỏng Code',
  '/cheatsheet': 'Cheat Sheet A4',
  '/dictionary': 'Từ điển Python',
  '/certificate': 'Chứng chỉ Python',
};

const Navbar = ({ toggleTheme, theme, toggleSidebar }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [showSearch, setShowSearch] = useState(false);

  // Pomodoro Timer 25 phút
  const [pomoSeconds, setPomoSeconds] = useState(25 * 60);
  const [pomoActive, setPomoActive] = useState(false);

  useEffect(() => {
    let interval = null;
    if (pomoActive && pomoSeconds > 0) {
      interval = setInterval(() => {
        setPomoSeconds((prev) => prev - 1);
      }, 1000);
    } else if (pomoSeconds === 0) {
      alert('⏰ Hết 25 phút Pomodoro! Hãy đứng dậy nghỉ ngơi 5 phút nhé!');
      setPomoActive(false);
      setPomoSeconds(25 * 60);
    }
    return () => clearInterval(interval);
  }, [pomoActive, pomoSeconds]);

  const togglePomo = () => setPomoActive(!pomoActive);
  const resetPomo = () => {
    setPomoActive(false);
    setPomoSeconds(25 * 60);
  };

  const formatPomo = (sec) => {
    const m = Math.floor(sec / 60);
    const s = sec % 60;
    return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
  };

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
        {/* Pomodoro Widget */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: 6,
          background: 'var(--color-input-bg)',
          padding: '0.25rem 0.6rem',
          borderRadius: 20,
          border: '1px solid var(--color-border)',
          fontSize: '0.82rem',
          fontWeight: 700,
        }}>
          <Clock size={14} color="var(--color-primary)" />
          <span style={{ fontFamily: 'monospace', color: pomoActive ? 'var(--color-danger)' : 'inherit' }}>
            {formatPomo(pomoSeconds)}
          </span>
          <button
            onClick={togglePomo}
            style={{ background: 'transparent', padding: 0, color: 'inherit', display: 'flex' }}
            title={pomoActive ? 'Tạm dừng' : 'Bắt đầu 25 phút học tập trung'}
          >
            {pomoActive ? <Pause size={14} /> : <Play size={14} />}
          </button>
          <button
            onClick={resetPomo}
            style={{ background: 'transparent', padding: 0, color: 'var(--color-text-secondary)', display: 'flex' }}
            title="Đặt lại 25 phút"
          >
            <RotateCcw size={12} />
          </button>
        </div>

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
