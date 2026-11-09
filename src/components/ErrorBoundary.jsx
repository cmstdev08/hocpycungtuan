import React from 'react';
import { AlertTriangle, RefreshCw, Home } from 'lucide-react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo);
    this.setState({ errorInfo });
  }

  handleReload = () => {
    window.location.reload();
  };

  handleGoHome = () => {
    window.location.href = '/';
  };

  render() {
    if (this.state.hasError) {
      return (
        <div style={{
          maxWidth: 600,
          margin: '3rem auto',
          padding: '2rem',
          textAlign: 'center',
          background: 'var(--color-card, #ffffff)',
          borderRadius: 12,
          border: '1px solid var(--color-border, #e2e8f0)',
          boxShadow: 'var(--shadow-md, 0 4px 16px rgba(0,0,0,0.1))',
        }}>
          <AlertTriangle size={48} color="var(--color-warning, #f59e0b)" style={{ margin: '0 auto 1rem auto' }} />
          <h2 style={{ margin: '0 0 0.5rem 0', color: 'var(--color-text, #1e293b)' }}>
            Đã xảy ra sự cố khi tải nội dung
          </h2>
          <p style={{ color: 'var(--color-text-secondary, #64748b)', margin: '0 0 1.5rem 0', fontSize: '0.95rem' }}>
            Hệ thống đã tự động bảo vệ giao diện để ngăn chặn lỗi màn hình trắng. Bạn có thể tải lại trang hoặc quay về trang chủ.
          </p>

          {this.state.error && (
            <div style={{
              background: '#fef2f2',
              color: '#991b1b',
              padding: '0.8rem',
              borderRadius: 8,
              fontSize: '0.82rem',
              fontFamily: 'monospace',
              textAlign: 'left',
              marginBottom: '1.5rem',
              maxHeight: 150,
              overflowY: 'auto',
              wordBreak: 'break-word',
            }}>
              {this.state.error.toString()}
            </div>
          )}

          <div style={{ display: 'flex', gap: '0.8rem', justifyContent: 'center' }}>
            <button className="btn btn-primary" onClick={this.handleReload} style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
              <RefreshCw size={16} /> Tải lại trang
            </button>
            <button className="btn btn-outline" onClick={this.handleGoHome} style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
              <Home size={16} /> Về Dashboard
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
