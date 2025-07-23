'use client';

import { useTheme } from 'next-themes';
import React from 'react';
import styles from '@/components/themeToggle/themeToggle.module.css';

export default function ThemeToggle({}) {
  const { theme, setTheme } = useTheme();

  const [mounted, setMounted] = React.useState(false);
  
    React.useEffect(() => {
      setMounted(true);
    }, []);
  
    if (!mounted) return null;

  return (
    <button
      className={styles.themeButton}
      aria-label="Toggle Theme"
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
    >
      {theme === 'light' ? '☀️' : '🌙'}
    </button>
  );
}
