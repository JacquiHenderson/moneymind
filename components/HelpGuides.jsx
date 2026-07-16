'use client';
import { useState, useMemo } from 'react';
import Link from 'next/link';

const IconEmbed = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
  </svg>
);
const IconPattern = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M12 3a3 3 0 0 1 3 3 3 3 0 0 1 2 5 3 3 0 0 1-2 5 3 3 0 0 1-6 0 3 3 0 0 1-2-5 3 3 0 0 1 2-5 3 3 0 0 1 3-3Z" />
    <path d="M12 3v18M8 8h8M8 16h8" />
  </svg>
);
const IconSend = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M22 2 11 13M22 2l-7 20-4-9-9-4Z" />
  </svg>
);

const GUIDES = [
  {
    href: '/moneypattern-guide',
    title: 'MoneyPattern Guide',
    desc: 'Every behavioral construct MoneyMind measures — the spectrum, its source, and its plain-English meaning, by domain.',
    icon: <IconPattern />,
  },
  {
    href: '/send-profile',
    title: 'Send Profile',
    desc: "Send and schedule a client's profile — choose which sections go out at each stage of your advice process.",
    icon: <IconSend />,
  },
  {
    href: '/embed-link',
    title: 'Embed Link',
    desc: 'Embed MoneyMind across your digital journeys, client portal, marketing, and socials to grow your top of funnel.',
    icon: <IconEmbed />,
  },
];

export default function HelpGuides() {
  const [query, setQuery] = useState('');

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return GUIDES;
    return GUIDES.filter((g) => `${g.title} ${g.desc}`.toLowerCase().includes(q));
  }, [query]);

  return (
    <>
      <section className="hg-hero">
        <h1 className="hg-title">Welcome to MoneyMind&apos;s Help Guides</h1>
        <div className="hg-search">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            <circle cx="11" cy="11" r="7" /><path d="m21 21-4.3-4.3" strokeLinecap="round" />
          </svg>
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Find a help guide…"
            aria-label="Search help guides"
          />
        </div>
      </section>

      {results.length ? (
        <div className="hg-grid">
          {results.map((g) => (
            <Link key={g.href} href={g.href} className="hg-card">
              <span className="hg-card-icon">{g.icon}</span>
              <span className="hg-card-title">{g.title}</span>
              <span className="hg-card-desc">{g.desc}</span>
            </Link>
          ))}
        </div>
      ) : (
        <div className="hg-empty">No guides match — try a different search.</div>
      )}
    </>
  );
}
