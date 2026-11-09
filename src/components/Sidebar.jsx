import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  LayoutDashboard, BookOpen, Code2, PenTool,
  HelpCircle, BookMarked, ChevronLeft, ChevronRight
} from 'lucide-react';
import './Sidebar.css';

const menuItems = [
  { path: '/', icon: LayoutDashboard, label: 'Dashboard', end: true },
  { path: '/lessons', icon: BookOpen, label: 'Khóa học Python' },
  { path: '/editor', icon: Code2, label: 'Python Compiler' },
  { path: '/exercises', icon: PenTool, label: 'Bài tập thực hành' },
  { path: '/quizzes', icon: HelpCircle, label: 'Trắc nghiệm' },
  { path: '/dictionary', icon: BookMarked, label: 'Từ điển Python' },
];

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <nav className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
      {/* Logo */}
      <div className="sidebar-header">
        <div className="sidebar-logo">
          <div className="logo-icon-wrapper">
            <Code2 size={22} />
          </div>
          <div className="logo-text">
            <span className="logo-title">PYTHON</span>
            <span className="logo-subtitle">LEARNING</span>
          </div>
        </div>
        <button className="sidebar-toggle" onClick={toggleSidebar} aria-label="Toggle sidebar">
          {isOpen ? <ChevronLeft size={18} /> : <ChevronRight size={18} />}
        </button>
      </div>

      {/* Menu */}
      <div className="sidebar-menu">
        <span className="menu-label">MENU</span>
        {menuItems.map(item => (
          <NavLink
            key={item.path}
            to={item.path}
            end={item.end}
            className={({ isActive }) => `menu-item ${isActive ? 'active' : ''}`}
          >
            <item.icon size={18} className="menu-icon" />
            <span className="menu-text">{item.label}</span>
          </NavLink>
        ))}
      </div>

      {/* Footer */}
      <div className="sidebar-footer">
        <div className="sidebar-version">
          <span>v1.0.0</span>
        </div>
      </div>
    </nav>
  );
};

export default Sidebar;
