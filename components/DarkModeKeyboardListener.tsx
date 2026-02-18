'use client';

import { useEffect } from 'react';
import { useDarkMode } from './DarkModeProvider';

export default function DarkModeKeyboardListener() {
  const { toggle } = useDarkMode();

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      // Command+/ on Mac, Ctrl+/ on Windows/Linux
      if ((event.metaKey || event.ctrlKey) && event.key === '/') {
        event.preventDefault();
        toggle();
      }
    }

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [toggle]);

  return null;
}