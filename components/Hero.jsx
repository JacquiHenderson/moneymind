import Link from 'next/link';
import { IconSparkle, IconChevronRight } from './Icons';

export function HeroCurves() {
  return (
    <div className="mm-curves" aria-hidden="true">
      <svg viewBox="0 0 1920 900" preserveAspectRatio="xMidYMid slice">
        <defs>
          <linearGradient id="curve-a" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#5298BF" stopOpacity="0"/>
            <stop offset="35%" stopColor="#5298BF" stopOpacity="0.55"/>
            <stop offset="70%" stopColor="#3C7AA8" stopOpacity="0.75"/>
            <stop offset="100%" stopColor="#1D4A75" stopOpacity="0"/>
          </linearGradient>
          <linearGradient id="curve-b" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#1D4A75" stopOpacity="0"/>
            <stop offset="55%" stopColor="#3C7AA8" stopOpacity="0.55"/>
            <stop offset="100%" stopColor="#5298BF" stopOpacity="0"/>
          </linearGradient>
          <filter id="grain">
            <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2"/>
            <feColorMatrix values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 0.18 0"/>
            <feComposite in2="SourceGraphic" operator="in"/>
          </filter>
        </defs>
        <path
          d="M 2200 -120 Q 1500 350 600 480 T -200 1100"
          fill="none"
          stroke="url(#curve-a)"
          strokeWidth="2.4"
          strokeLinecap="round"
        />
        <path
          d="M 2200 -120 Q 1500 350 600 480 T -200 1100"
          fill="none"
          stroke="url(#curve-a)"
          strokeWidth="6"
          strokeLinecap="round"
          opacity="0.18"
        />
        <path
          d="M -200 1100 Q 450 700 1000 880 T 2200 1100"
          fill="none"
          stroke="url(#curve-b)"
          strokeWidth="2"
          strokeLinecap="round"
          opacity="0.6"
        />
        <rect x="0" y="0" width="1920" height="900" fill="#5298BF" filter="url(#grain)" opacity="0.5"/>
      </svg>
    </div>
  );
}

export function Hero() {
  return (
    <section className="mm-hero" data-screen-label="Hero">
      <HeroCurves />
      <div className="mm-hero-inner">
        <a className="mm-pill" href="#money-pattern">
          <IconSparkle size={14} stroke={1.8} style={{ color: 'var(--mm-blue-light)' }} />
          <span>Introducing The MoneyPattern™</span>
          <IconChevronRight size={13} className="chev" />
        </a>

        <h1>
          Every client meeting<br />
          without MoneyMind is<br />
          a meeting <em>without</em><br />
          the full picture.
        </h1>

        <p className="mm-hero-sub">
          MoneyMind's AI behavioural intelligence gives financial advisory firms a
          psychological blueprint of how their clients make financial decisions — how
          they save, spend, plan for retirement, invest, and react when markets get messy.
        </p>

        <div className="mm-hero-actions">
          <a href="https://auth.moneymindprofile.com/#signup" className="mm-btn mm-btn-primary mm-btn-lg">Start 14-day trial</a>
          <Link href="/demo-request" className="mm-btn mm-btn-ghost mm-btn-lg">Request demo</Link>
        </div>

        <div className="mm-trial-line">Demo it. Trial it. Transform it. 14 days on us.</div>
      </div>
    </section>
  );
}
