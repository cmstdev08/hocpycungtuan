// src/utils/backup.js
// Xuất và nạp tiến độ học tập (JSON backup & restore) hoàn toàn phía client

export function exportProgressJSON() {
  const backupData = {
    version: '1.0',
    exportDate: new Date().toISOString(),
    learningProgress: JSON.parse(localStorage.getItem('learningProgress') || '{}'),
    completedExercises: JSON.parse(localStorage.getItem('completed_exercises') || '[]'),
    userProfile: JSON.parse(localStorage.getItem('python_user_profile') || '{}'),
    theme: localStorage.getItem('theme') || 'light',
    recentCode: localStorage.getItem('python_recent_code') || '',
  };

  const dataStr = 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(backupData, null, 2));
  const downloadAnchor = document.createElement('a');
  downloadAnchor.setAttribute('href', dataStr);
  downloadAnchor.setAttribute('download', `python_learning_backup_${new Date().toISOString().split('T')[0]}.json`);
  document.body.appendChild(downloadAnchor);
  downloadAnchor.click();
  downloadAnchor.remove();
}

export function importProgressJSON(file, onSuccess, onError) {
  const reader = new FileReader();
  reader.onload = (e) => {
    try {
      const data = JSON.parse(e.target.result);
      if (data.learningProgress) {
        localStorage.setItem('learningProgress', JSON.stringify(data.learningProgress));
      }
      if (data.completedExercises) {
        localStorage.setItem('completed_exercises', JSON.stringify(data.completedExercises));
      }
      if (data.userProfile) {
        localStorage.setItem('python_user_profile', JSON.stringify(data.userProfile));
      }
      if (data.theme) {
        localStorage.setItem('theme', data.theme);
      }
      if (data.recentCode) {
        localStorage.setItem('python_recent_code', data.recentCode);
      }
      if (onSuccess) onSuccess();
    } catch (err) {
      if (onError) onError(err);
    }
  };
  reader.onerror = () => {
    if (onError) onError(new Error('Không thể đọc file'));
  };
  reader.readAsText(file);
}
