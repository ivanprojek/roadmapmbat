'use client';

import { useTheme } from '@/hooks/useTheme';

export function ThemeToggle() {
  const { theme, setTheme, mounted } = useTheme();

  if (!mounted) {
    return <div className="w-10 h-10" />;
  }

  const isDark = theme === 'dark';

  return (
    <button
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      className="flex items-center justify-center w-11 h-11 rounded-lg hover:bg-cream-beige dark:hover:bg-dark-card transition-colors duration-200 text-sm font-medium"
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      title={isDark ? 'Light mode' : 'Dark mode'}
    >
      {isDark ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-5 h-5"
        >
          <path d="M12 3.75a.75.75 0 01.75.75v1.5a.75.75 0 01-1.5 0V4.5A.75.75 0 0112 3.75zm0 14.25a.75.75 0 01.75.75v1.5a.75.75 0 01-1.5 0v-1.5a.75.75 0 01.75-.75zm8.25-6.75a.75.75 0 01-.75.75h-1.5a.75.75 0 010-1.5h1.5a.75.75 0 01.75.75zM5.25 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h1.5A.75.75 0 015.25 12zm12.032-5.282a.75.75 0 010 1.06l-1.06 1.06a.75.75 0 11-1.06-1.06l1.06-1.06a.75.75 0 011.06 0zM7.328 16.674a.75.75 0 010 1.06l-1.06 1.06a.75.75 0 11-1.06-1.06l1.06-1.06a.75.75 0 011.06 0zm0-11.648a.75.75 0 00-1.06 0l-1.06 1.06a.75.75 0 101.06 1.06l1.06-1.06a.75.75 0 000-1.06zm11.404 11.404a.75.75 0 00-1.06 0l-1.06 1.06a.75.75 0 101.06 1.06l1.06-1.06a.75.75 0 000-1.06zM12 7.5a4.5 4.5 0 100 9 4.5 4.5 0 000-9z" />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-5 h-5"
        >
          <path fillRule="evenodd" d="M17.657 16.657A8.25 8.25 0 0111.343 5.343a.75.75 0 10-1.06-1.06A9.75 9.75 0 1020.775 15.24a.75.75 0 10-1.06-1.06 8.216 8.216 0 01-2.058 2.477z" clipRule="evenodd" />
        </svg>
      )}
    </button>
  );
}
