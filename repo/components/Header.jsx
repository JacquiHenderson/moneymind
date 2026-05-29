'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Header({ currentPage = 'home' }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const homeAnchor = (hash) => (currentPage === 'home' ? hash : `/${hash}`);

  return (
    <header className={`mm-header${scrolled ? ' scrolled' : ''}`}>
      <div className="mm-header-inner">
        <Link href="/" className="mm-logo" aria-label="MoneyMind home">
          <img src="/assets/logos/moneymind-white.svg?v=5" alt="MoneyMind" />
        </Link>
        <nav className="mm-nav" aria-label="Primary">
          <Link
            href="/"
            className={currentPage === 'home' ? 'is-current' : ''}
            aria-current={currentPage === 'home' ? 'page' : undefined}
          >Home</Link>
          <Link
            href="/for-advisers"
            className={currentPage === 'advisers' ? 'is-current' : ''}
            aria-current={currentPage === 'advisers' ? 'page' : undefined}
          >Financial Advisors</Link>
          <Link
            href="/for-fund-providers"
            className={currentPage === 'fund-providers' ? 'is-current' : ''}
            aria-current={currentPage === 'fund-providers' ? 'page' : undefined}
          >Fund Providers</Link>
          <a href={homeAnchor('#security')}>Security</a>
        </nav>
        <div className="mm-nav-actions">
          <a href="https://auth.moneymindprofile.com/" className="mm-btn mm-btn-ghost">Log in</a>
          <a href="https://auth.moneymindprofile.com/#signup" className="mm-btn mm-btn-primary">Start 14-day trial</a>
        </div>
      </div>
    </header>
  );
}
