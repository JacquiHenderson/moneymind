'use client';
import { useState, useEffect } from 'react';

// Light/dark switch shared by both header systems (mm-header and lp-header).
// Default (no stored choice) follows the OS via CSS `color-scheme: light dark`;
// a click sets an explicit data-theme on <html> and remembers it in localStorage.
export default function ThemeToggle({ className = '' }) {
  const [theme, setTheme] = useState(null); // 'light' | 'dark' | null (= follow system)
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const stored =
      typeof localStorage !== 'undefined' ? localStorage.getItem('mm-theme') : null;
    if (stored === 'light' || stored === 'dark') {
      setTheme(stored);
    } else if (typeof window !== 'undefined' && window.matchMedia) {
      setTheme(window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark');
    }
  }, []);

  const toggle = () => {
    const next = theme === 'light' ? 'dark' : 'light';
    setTheme(next);
    try {
      document.documentElement.setAttribute('data-theme', next);
      localStorage.setItem('mm-theme', next);
    } catch (e) {
      /* storage unavailable — the attribute still applies for this session */
    }
  };

  // Until mounted we don't know the resolved theme; render a stable placeholder
  // so the button exists in the layout and SSR/CSR markup matches.
  const isLight = theme === 'light';
  const label = !mounted
    ? 'Toggle theme'
    : isLight
    ? 'Switch to dark mode'
    : 'Switch to light mode';

  return (
    <button
      type="button"
      className={`mm-theme-toggle ${className}`.trim()}
      onClick={toggle}
      aria-label={label}
      title={label}
    >
      {/* Sun (shown in dark mode → click for light); Moon (shown in light mode). */}
      <svg
        className="mm-theme-toggle-icon mm-theme-toggle-sun"
        width="18" height="18" viewBox="0 0 24 24" fill="none"
        stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
        aria-hidden="true"
      >
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
      </svg>
      <svg
        className="mm-theme-toggle-icon mm-theme-toggle-moon"
        width="18" height="18" viewBox="0 0 24 24" fill="none"
        stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79Z" />
      </svg>
    </button>
  );
}
