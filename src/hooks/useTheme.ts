import { useEffect, useState } from 'react';

export function useTheme() {
  const [theme, setThemeState] = useState<'light' | 'dark'>('light');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    // Check system preference or localStorage
    const isDark =
      localStorage.getItem('theme') === 'dark' ||
      (localStorage.getItem('theme') === null &&
        window.matchMedia('(prefers-color-scheme: dark)').matches);

    setThemeState(isDark ? 'dark' : 'light');
    
    // Apply theme
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const setTheme = (newTheme: 'light' | 'dark') => {
    setThemeState(newTheme);
    localStorage.setItem('theme', newTheme);
    
    if (newTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  return {
    theme: mounted ? theme : 'light',
    setTheme,
    mounted,
  };
}
