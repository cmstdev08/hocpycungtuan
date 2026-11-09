// src/utils/gamification.js
// Quản lý hệ thống Gamification: XP, Cấp độ, Daily Streak và Huy hiệu danh dự

export const BADGES = [
  {
    id: 'first_run',
    title: 'Bước Chân Đầu Tiên',
    desc: 'Chạy thành công đoạn mã Python đầu tiên trong Compiler.',
    icon: '🚀',
    category: 'compiler',
  },
  {
    id: 'streak_3',
    title: 'Chiến Thần Chăm Chỉ',
    desc: 'Duy trì chuỗi học tập liên tục trong 3 ngày.',
    icon: '🔥',
    category: 'streak',
  },
  {
    id: 'first_exercise',
    title: 'Thử Thách Đầu Tiên',
    desc: 'Vượt qua bài tập lập trình đầu tiên với 100% test case đúng.',
    icon: '⭐',
    category: 'exercise',
  },
  {
    id: 'exercises_10',
    title: 'Thợ Code Chăm Chỉ',
    desc: 'Giải quyết chính xác 10 bài tập trong ngân hàng bài tập.',
    icon: '💻',
    category: 'exercise',
  },
  {
    id: 'exercises_50',
    title: 'Chiến Binh Lập Trình',
    desc: 'Giải quyết xuất sắc 50 bài tập lập trình.',
    icon: '🛡️',
    category: 'exercise',
  },
  {
    id: 'chapter_recursion',
    title: 'Bậc Thầy Đệ Quy',
    desc: 'Hoàn thành chương học Đệ quy (Chương 10).',
    icon: '🌀',
    category: 'lesson',
  },
  {
    id: 'quiz_master',
    title: 'Thủ Khoa Lý Thuyết',
    desc: 'Đạt điểm tối đa 100% trong bài kiểm tra trắc nghiệm.',
    icon: '🏆',
    category: 'quiz',
  },
  {
    id: 'course_complete',
    title: 'Tốt Nghiệp Python',
    desc: 'Hoàn thành đầy đủ 13 chương học môn Cơ sở lập trình.',
    icon: '🎓',
    category: 'lesson',
  },
];

// Tính cấp độ (Level) dựa vào điểm kinh nghiệm XP
export function calculateLevel(xp = 0) {
  if (xp < 100) return { level: 1, title: 'Tập sự Python', nextXp: 100, currentBaseXp: 0 };
  if (xp < 300) return { level: 2, title: 'Lập trình viên Sơ cấp', nextXp: 300, currentBaseXp: 100 };
  if (xp < 700) return { level: 3, title: 'Coder Năng động', nextXp: 700, currentBaseXp: 300 };
  if (xp < 1500) return { level: 4, title: 'Thợ săn Thuật toán', nextXp: 1500, currentBaseXp: 700 };
  if (xp < 3000) return { level: 5, title: 'Chuyên gia Python', nextXp: 3000, currentBaseXp: 1500 };
  return { level: 6, title: 'Bậc Thầy Python', nextXp: 5000, currentBaseXp: 3000 };
}

// Lấy dữ liệu user profile
export function getUserProfile() {
  const defaultProfile = {
    xp: 0,
    streak: 1,
    lastActiveDate: new Date().toISOString().split('T')[0],
    unlockedBadges: [],
    fullName: 'Sinh viên Python',
  };

  try {
    const saved = localStorage.getItem('python_user_profile');
    if (!saved) return defaultProfile;
    const profile = JSON.parse(saved);

    // Cập nhật streak theo ngày
    const today = new Date().toISOString().split('T')[0];
    if (profile.lastActiveDate !== today) {
      const lastDate = new Date(profile.lastActiveDate);
      const currDate = new Date(today);
      const diffDays = Math.round((currDate - lastDate) / (1000 * 60 * 60 * 24));

      if (diffDays === 1) {
        profile.streak = (profile.streak || 0) + 1;
      } else if (diffDays > 1) {
        profile.streak = 1; // đứt streak
      }
      profile.lastActiveDate = today;
      localStorage.setItem('python_user_profile', JSON.stringify(profile));
    }

    return profile;
  } catch {
    return defaultProfile;
  }
}

// Cộng điểm XP và mở khóa huy hiệu
export function addXP(points, badgeIdToCheck = null) {
  const profile = getUserProfile();
  profile.xp = (profile.xp || 0) + points;

  if (badgeIdToCheck && !profile.unlockedBadges.includes(badgeIdToCheck)) {
    profile.unlockedBadges.push(badgeIdToCheck);
  }

  // Tự động kiểm tra streak badge
  if (profile.streak >= 3 && !profile.unlockedBadges.includes('streak_3')) {
    profile.unlockedBadges.push('streak_3');
  }

  localStorage.setItem('python_user_profile', JSON.stringify(profile));
  return profile;
}
