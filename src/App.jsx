import React, { useState, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Sidebar from './components/Sidebar.jsx';
import Navbar from './components/Navbar.jsx';
import ErrorBoundary from './components/ErrorBoundary.jsx';
import Home from './pages/Home.jsx';
import Lessons from './pages/Lessons.jsx';
import LessonDetail from './pages/LessonDetail.jsx';
import EditorPage from './pages/Editor.jsx';
import Exercises from './pages/Exercises.jsx';
import Quizzes from './pages/Quizzes.jsx';
import Dictionary from './pages/Dictionary.jsx';
import Certificate from './pages/Certificate.jsx';
import MockExam from './pages/MockExam.jsx';
import Visualizer from './pages/Visualizer.jsx';
import CheatSheet from './pages/CheatSheet.jsx';
import SpeedTyping from './pages/SpeedTyping.jsx';
import BugHunt from './pages/BugHunt.jsx';
import CppConverter from './pages/CppConverter.jsx';
import './styles/global.css';

function App() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'light';
  });
  const [sidebarOpen, setSidebarOpen] = useState(true);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  const toggleSidebar = () => setSidebarOpen(prev => !prev);

  return (
    <div className="app">
      <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
      {sidebarOpen && <div className="sidebar-overlay" onClick={toggleSidebar} />}
      <div className="main-content">
        <Navbar toggleTheme={toggleTheme} theme={theme} toggleSidebar={toggleSidebar} />
        <div className="page-container">
          <ErrorBoundary>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/lessons" element={<Lessons />} />
              <Route path="/lessons/:lessonId" element={<LessonDetail />} />
              <Route path="/editor" element={<EditorPage />} />
              <Route path="/exercises" element={<Exercises />} />
              <Route path="/quizzes" element={<Quizzes />} />
              <Route path="/dictionary" element={<Dictionary />} />
              <Route path="/visualizer" element={<Visualizer />} />
              <Route path="/mock-exam" element={<MockExam />} />
              <Route path="/cheatsheet" element={<CheatSheet />} />
              <Route path="/speed-typing" element={<SpeedTyping />} />
              <Route path="/bughunt" element={<BugHunt />} />
              <Route path="/converter" element={<CppConverter />} />
              <Route path="/certificate" element={<Certificate />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </ErrorBoundary>
        </div>
      </div>
    </div>
  );
}

export default App;
