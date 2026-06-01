'use client';
import { useState } from 'react';
import Header from '../../components/Header';
import { HeroCurves } from '../../components/Hero';
import Logos from '../../components/Logos';
import Steps from '../../components/Steps';
import Platform from '../../components/Platform';
import Footer from '../../components/Footer';
import {
  IconChart, IconLink, IconBrain, IconCheck, IconShield, IconChevronDown
} from '../../components/Icons';

// ---- Hero ----
function AdvisersHero() {
  return (
    <section className="mm-sub-hero" data-screen-label="Advisers hero">
      <HeroCurves />
      <div className="mm-sub-hero-inner">
        <span className="eyebrow mm-sub-hero-eyebrow">Built for financial advisors</span>
        <h1>
          The new standard of<br/>
          profiling <em>clients.</em>
        </h1>
        <p className="mm-sub-hero-lead">
          MoneyMind™ maps the financial behaviors behind — how your
          client&apos;s save, spend, plan for retirement, respond to markets, and invest.
        </p>
        <p className="mm-sub-hero-reveal">
          Your clients have always had a MoneyPattern.
          <em> Now you can see it.</em>
        </p>
        <div className="mm-hero-actions">
          <a href="https://auth.moneymindprofile.com/#signup" className="mm-btn mm-btn-primary mm-btn-lg">Start 14-day trial</a>
          <a href="https://wkf.ms/3PMywRu" target="_blank" rel="noopener" className="mm-btn mm-btn-ghost mm-btn-lg">Request demo</a>
        </div>
      </div>
    </section>
  );
}

// ---- Impact Trio (interactive) ----
const IMPACT_CARDS = [
  {
    icon: <IconChart size={18} />,
    title: '74% more trust',
    body: 'Shorten your trust cycle by knowing how your clients think. Clients commit faster and stay longer when advice is built around what actually drives them.',
  },
  {
    icon: <IconLink size={18} />,
    title: '4.6× more warm leads',
    body: 'Turn every touchpoint into an entry point. One embed link dropped into your website, emails, portal, and socials — generating warm, engaged leads.',
  },
  {
    icon: <IconBrain size={18} />,
    title: 'Protect AUM',
    body: (<><span className="mm-stat-inline">68%</span> of decisions influenced by emotion. Know how your clients make financial decisions, and the triggers that protect your AUM.</>),
  },
];

function AdvisersImpactTrio() {
  const [selected, setSelected] = useState(1);
  return (
    <section className="mm-impact-trio" data-screen-label="Adviser impact trio">
      <div className="mm-container">
        <div className="mm-section-head">
          <span className="eyebrow">The impact</span>
          <h2>What changes when you use MoneyMind.</h2>
        </div>
        <div className="mm-steps mm-steps-eyebrowless">
          {IMPACT_CARDS.map((c, i) => (
            <button key={i}
              className={`mm-step${selected === i ? ' selected' : ''}`}
              onClick={() => setSelected(i)}
              onMouseEnter={() => setSelected(i)}
              type="button"
            >
              <span className="mm-step-icon">{c.icon}</span>
              <h4>{c.title}</h4>
              <p>{c.body}</p>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

// ---- Shared Outcomes ----
function SharedOutcomesVisual() {
  const total = 20;
  const filled = 9;
  const bars = Array.from({ length: total }, (_, i) => {
    const h = 28 + Math.round((i / (total - 1)) * 80);
    const isFilled = i < filled;
    return { h, isFilled, t: i / (filled - 1) };
  });
  return (
    <div className="mm-split-visual mm-fls">
      <header className="mm-fls-head">
        <div>
          <h4>Financial Life Satisfaction Index</h4>
          <p>Your client&apos;s overall financial life satisfaction score.</p>
        </div>
        <span className="mm-fls-score">4.6<span className="of">/ 10</span></span>
      </header>
      <div className="mm-fls-bars">
        {bars.map((b, i) => (
          <span key={i} className={`mm-fls-bar${b.isFilled ? ' is-filled' : ''}`}
            style={{ height: `${b.h}px`, '--t': String(b.t) }}></span>
        ))}
      </div>
      <footer className="mm-fls-foot">
        <span className="mm-fls-axis">Life Have</span>
        <span className="mm-fls-axis right">Life Want</span>
      </footer>
    </div>
  );
}

function AdvisersSharedOutcomes() {
  return (
    <section className="mm-section mm-split" data-screen-label="Shared outcomes">
      <div className="mm-container">
        <div className="mm-split-grid">
          <div className="mm-split-copy">
            <span className="eyebrow">Shared outcomes</span>
            <h2>Succeed through shared outcomes.</h2>
            <p>Find the gap between where your clients are at vs. their ideal financial life. See which dominant area shapes their financial decisions.</p>
            <p>Deliver your advice aligned with what matters most.</p>
          </div>
          <SharedOutcomesVisual />
        </div>
      </div>
    </section>
  );
}

// ---- Kahneman Quote ----
function KahnemanQuote() {
  return (
    <section className="mm-pull-quote" data-screen-label="Kahneman quote">
      <div className="mm-container">
        <svg className="mm-quote-mark" width="80" height="60" viewBox="0 0 80 60" fill="none" aria-hidden="true">
          <path d="M0 60V36C0 16 12 4 32 0v12c-10 4-16 12-16 24h16v24H0Zm48 0V36C48 16 60 4 80 0v12c-10 4-16 12-16 24h16v24H48Z" fill="currentColor"/>
        </svg>
        <blockquote>
          People don&apos;t make financial decisions with spreadsheets.<br/>
          They make them with <em>fear, hope, memory, and gut instinct.</em><br/>
          Always have. Always will.
        </blockquote>
        <footer>
          <span className="mm-quote-cite">Daniel Kahneman</span>
          <span className="mm-quote-role">Nobel laureate · author of <em>Thinking, Fast and Slow</em></span>
        </footer>
      </div>
    </section>
  );
}

// ---- Decode Patterns ----
const patternDims = [
  { label: 'Saving',              result: 'Steady Saver',       rule: '#A8C8DD' },
  { label: 'Spending',            result: 'Considered Spender', rule: '#7FAFCB' },
  { label: 'Retirement Planning', result: 'Retirement-Ready',   rule: 'var(--mm-blue-light)' },
  { label: 'Market Response',     result: 'Steady-Responder',   rule: 'var(--mm-blue-mid)' },
  { label: 'Investment',          result: 'Cautious Investor',  rule: 'var(--mm-blue-deep)' },
];

function PatternsVisual() {
  return (
    <div className="mm-split-visual mm-mp">
      <ul className="mm-mp-dims">
        {patternDims.map((d) => (
          <li key={d.label} className="mm-mp-dim">
            <span className="mm-mp-rule" style={{ background: d.rule }}></span>
            <span className="mm-mp-label">{d.label}</span>
            <span className="mm-mp-result">{d.result}</span>
            <IconChevronDown size={14} className="mm-mp-chev" />
          </li>
        ))}
      </ul>
    </div>
  );
}

function AdvisersDecodePatterns() {
  return (
    <section className="mm-section mm-split mm-split-reverse" data-screen-label="Decode patterns">
      <div className="mm-container">
        <div className="mm-split-grid">
          <PatternsVisual />
          <div className="mm-split-copy">
            <span className="eyebrow">Decode hidden patterns</span>
            <h2>Decode hidden patterns behind client decisions.</h2>
            <p>Anticipate how your clients will react, what actions they&apos;ll take, and whether they&apos;ll abandon their financial plan.</p>
            <p>Identify their Superpowers, Roadblocks, and how to Optimize your strategies. Identify all the emotions that override rational plans and protect your AUM.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

// ---- Risk Picture ----
const riskRows = [
  { label: 'Risk Tolerance',       result: 'Very High',       tone: 'accent', level: 0.92, body: 'Well-calibrated, context-appropriate risk tolerance for investment decisions.' },
  { label: 'Financial Confidence', result: 'Steady',          tone: 'warn',   level: 0.62, body: 'Developing investment confidence but sometimes hesitant on pivotal decisions.' },
  { label: 'Adaptability',         result: 'Balanced',        tone: 'warn',   level: 0.70, body: 'Can adapt investment strategy with clear rationale but needs time to process changes.' },
  { label: 'Motivation',           result: 'Balanced',        tone: 'accent', level: 0.66, body: 'Balanced promotion and prevention motivation in investment decisions.' },
  { label: 'Regret Aversion',      result: 'Regret-Tolerant', tone: 'warn',   level: 0.78, body: 'Calibrated regret-weighting supports sound portfolio decisions.' },
  { label: 'Ownership',            result: 'Steady',          tone: 'warn',   level: 0.58, body: 'Has some sense of investment ownership but reverts to external attribution when outcomes disappoint.' },
];

function RiskVisual() {
  return (
    <div className="mm-split-visual mm-rprofile">
      <header className="mm-rprofile-head">
        <div className="mm-rprofile-head-left">
          <span className="mm-rprofile-rule"></span>
          <h4>Investment</h4>
        </div>
        <span className="mm-rprofile-archetype">Cautious Investor</span>
      </header>
      <ul className="mm-rprofile-rows">
        {riskRows.map((r) => (
          <li className="mm-rprofile-row" key={r.label}>
            <div className="mm-rprofile-row-top">
              <span className="mm-rprofile-label">{r.label}</span>
              <span className={`mm-rprofile-result tone-${r.tone}`}>{r.result}</span>
              <span className="mm-rprofile-level">
                <span className="mm-rprofile-level-fill" style={{ width: `${r.level * 100}%` }}></span>
              </span>
            </div>
            <p className="mm-rprofile-body">{r.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

function AdvisersRisk() {
  return (
    <section className="mm-section mm-split" data-screen-label="Risk picture">
      <div className="mm-container">
        <div className="mm-split-grid">
          <div className="mm-split-copy">
            <span className="eyebrow">A complete risk picture</span>
            <h2>Map a complete risk picture.</h2>
            <p>Capture all the dimensions of risk behavior: tolerance, capacity, loss response, anxiety, discipline, overconfidence, regret, adaptability, and more.</p>
            <p>Know how your clients will <em>actually</em> behave under pressure — so portfolios match reality, not a score.</p>
          </div>
          <RiskVisual />
        </div>
      </div>
    </section>
  );
}

// ---- Pricing ----
const pricingBullets = [
  'No lock-in contracts',
  'Send unlimited profiles across 250 clients + option to add client bundles',
  'Dashboard, reports, and meeting insights',
  'Embed profile link for lead generation',
];

function AdvisersPricing() {
  return (
    <section className="mm-section mm-pricing" id="pricing" data-screen-label="Adviser pricing">
      <div className="mm-container">
        <div className="mm-section-head">
          <span className="eyebrow">Pricing</span>
          <h2>One tier. Built for practices that grow.</h2>
          <p className="lead">
            Unlock a new dimension of insight beyond risk profiles. Shorten the
            prospect trust cycle, accelerate advice acceptance, and protect AUM with
            deeper client connections — at one straightforward price.
          </p>
        </div>
        <div className="mm-pricing-card">
          <div className="mm-pricing-card-left">
            <span className="mm-pricing-tier">Advisor</span>
            <div className="mm-pricing-amount">
              <span className="cur">$US</span>
              <span className="num">69</span>
              <span className="per">per advisor / month</span>
            </div>
            <p className="mm-pricing-trial">
              14-day free trial. Start with a few profiles and 10 team members — upgrade any time.
            </p>
            <div className="mm-pricing-actions">
              <a href="https://auth.moneymindprofile.com/#signup" className="mm-btn mm-btn-primary mm-btn-lg">Start 14-day trial</a>
              <a href="https://wkf.ms/3PMywRu" target="_blank" rel="noopener" className="mm-btn mm-btn-ghost mm-btn-lg">Request demo</a>
            </div>
          </div>
          <ul className="mm-pricing-bullets">
            {pricingBullets.map((b) => (
              <li key={b}><IconCheck size={16} /> {b}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

// ---- CTA Band ----
function AdvisersCtaBand() {
  return (
    <section className="mm-cta-band" id="demo" data-screen-label="Adviser CTA">
      <div className="mm-container">
        <div className="mm-cta-card">
          <h2>See MoneyMind in action.<br/>Use it with your clients. Watch what happens.</h2>
          <p className="lead">
            Stop guessing how your clients will react. Start knowing. Give yourself the
            most powerful client-discovery tool in the advice industry.
          </p>
          <div className="mm-hero-actions">
            <a href="https://auth.moneymindprofile.com/#signup" className="mm-btn mm-btn-primary mm-btn-lg">Try for free</a>
            <a href="https://wkf.ms/3PMywRu" target="_blank" rel="noopener" className="mm-btn mm-btn-ghost mm-btn-lg">Request demo</a>
          </div>
          <div className="mm-cta-trial">Demo it. Trial it. Transform it. 14 days on us.</div>
        </div>
      </div>
    </section>
  );
}

// ---- Page ----
export default function ForAdvisersPage() {
  return (
    <div className="mm-page">
      <Header currentPage="advisers" />
      <AdvisersHero />
      <Logos />
      <AdvisersImpactTrio />
      <AdvisersSharedOutcomes />
      <KahnemanQuote />
      <AdvisersDecodePatterns />
      <AdvisersRisk />
      <Steps />
      <Platform
        heading="MoneyMind's unique features are designed to elevate your client experience."
        lead="Insights that transform every client connection."
      />
      <AdvisersPricing />
      <AdvisersCtaBand />
      <Footer />
    </div>
  );
}
