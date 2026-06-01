'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Header({ currentPage = 'home' }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const close = () => setMenuOpen(false);
  const homeAnchor = (hash) => (currentPage === 'home' ? hash : `/${hash}`);

  return (
    <>
      <header className={`mm-header${scrolled ? ' scrolled' : ''}`}>
        <div className="mm-header-inner">
          <Link href="/" className="mm-logo" aria-label="MoneyMind home" onClick={close}>
            <img src="/assets/logos/moneymind-white.svg?v=5" alt="MoneyMind" />
          </Link>
          <nav className="mm-nav" aria-label="Primary">
            <Link href="/" className={currentPage === 'home' ? 'is-current' : ''} aria-current={currentPage === 'home' ? 'page' : undefined}>Home</Link>
            <Link href="/for-advisers" className={currentPage === 'advisers' ? 'is-current' : ''} aria-current={currentPage === 'advisers' ? 'page' : undefined}>Financial Advisors</Link>
            <Link href="/for-fund-providers" className={currentPage === 'fund-providers' ? 'is-current' : ''} aria-current={currentPage === 'fund-providers' ? 'page' : undefined}>Fund Providers</Link>
            <a href={homeAnchor('#security')}>Security</a>
          </nav>
          <div className="mm-nav-actions">
            <a href="https://auth.moneymindprofile.com/" className="mm-btn mm-btn-ghost">Log in</a>
            <a href="https://auth.moneymindprofile.com/#signup" className="mm-btn mm-btn-primary">Start 14-day trial</a>
          </div>
          <button
            className={`mm-hamburger${menuOpen ? ' is-open' : ''}`}
            onClick={() => setMenuOpen(o => !o)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            <span /><span /><span />
          </button>
        </div>
      </header>

      {menuOpen && <div className="mm-mobile-overlay" onClick={close} aria-hidden="true" />}
      <nav className={`mm-mobile-nav${menuOpen ? ' is-open' : ''}`} aria-label="Mobile navigation">
        <Link href="/" onClick={close} className={currentPage === 'home' ? 'is-current' : ''}>Home</Link>
        <Link href="/for-advisers" onClick={close} className={currentPage === 'advisers' ? 'is-current' : ''}>Financial Advisors</Link>
        <Link href="/for-fund-providers" onClick={close} className={currentPage === 'fund-providers' ? 'is-current' : ''}>Fund Providers</Link>
        <a href={homeAnchor('#security')} onClick={close}>Security</a>
        <div className="mm-mobile-nav-actions">
          <a href="https://auth.moneymindprofile.com/" className="mm-btn mm-btn-ghost mm-btn-lg" onClick={close}>Log in</a>
          <a href="https://auth.moneymindprofile.com/#signup" className="mm-btn mm-btn-primary mm-btn-lg" onClick={close}>Start 14-day trial</a>
        </div>
      </nav>
    </>
  );
}
