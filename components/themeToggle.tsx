'use client';

import { useTheme } from 'next-themes';
import React from 'react';

export default function ThemeToggle({}) {
  const { theme, setTheme } = useTheme();

  const [mounted, setMounted] = React.useState(false);
    // This is to avoid hydration mismatch by waiting until the component is mounted
  
    React.useEffect(() => {
      setMounted(true); // avoid mismatch by waiting until mounted
    }, []);
  
    if (!mounted) return null;

  return (
    <button
      className="fixed bottom-4 right-4 z-50 p-2 rounded-full bg-gray-50 border-2 border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 shadow-lg"
      aria-label="Toggle Theme"
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
    >
      {theme === 'light' ? '☀️' : '🌙'}
    </button>
  );
}
