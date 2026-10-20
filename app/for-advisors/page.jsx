'use client';
import { useState } from 'react';
import Link from 'next/link';
import Header from '../../components/Header';
import Logos from '../../components/Logos';
import Team from '../../components/Team';
import Security from '../../components/Security';
import Faq from '../../components/Faq';
import Platform from '../../components/Platform';
import Footer from '../../components/Footer';
import DemoTestimonials from '../../components/DemoTestimonials';
import ClientStory from '../../components/ClientStory';
import CouplesStory from '../../components/CouplesStory';
import IntegrationDiagram from '../../components/IntegrationDiagram';
import ImpactTrio from '../../components/ImpactTrio';
import {
  IconChart, IconLink, IconBrain, IconCheck, IconChevronDown
} from '../../components/Icons';

// ---- Hero ----
function AdvisersHero() {
  return (
    <section className="mm-banner-hero" data-screen-label="Advisors hero">
      <div className="mm-banner-hero-inner">
        <span className="eyebrow mm-banner-hero-eyebrow">Built for financial advisors</span>
        <h1>
          The AI behavioral intelligence layer for <em>modern advice.</em>
        </h1>
        <p className="mm-banner-hero-lead">
          MoneyMind™ maps the financial behaviors behind — how your
          client&apos;s save, spend, plan for retirement, respond to markets, and invest.
          A multi-factor behavioral assessment risk profile questionnaires miss.
        </p>
        <div className="mm-hero-actions">
          <a href="https://auth.moneymindprofile.com/#signup" className="mm-btn mm-btn-primary mm-btn-lg">Start 14-day trial</a>
          <Link href="/request-demo" className="mm-btn mm-btn-ghost mm-btn-lg">Request demo</Link>
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

function AdvisersHowItWorks() {
  return (
    <section className="mm-section" data-screen-label="How it works">
      <div className="mm-container">
        <div className="mm-section-head center">
          <span className="eyebrow">How it works</span>
          <h2>A new kind of wealth proposition, built around each client.</h2>
          <p className="lead">MoneyMind gives financial planners the behavioral insight to understand how each client thinks about money, so they can move clients past the points where they get stuck, guide couples through money differences, and help every client reach their financial potential.</p>
          <p className="mm-how-note">MoneyMind works alongside the tools you already use.</p>
        </div>
      </div>
    </section>
  );
}

// ---- Risk signals chart (magnitude: % of clients carrying each flag) ----
const RISK_SIGNAL_GROUPS = [
  { label: 'Investment flags', rows: [
    { name: 'Impulsive Responder', desc: 'Panic sells in falls',                  pct: 27, count: 769 },
    { name: 'Overconfidence',      desc: 'Bullish, may overtrade',                pct: 7,  count: 199 },
    { name: 'Low risk capacity',   desc: 'Capacity to absorb losses',             pct: 16, count: 456 },
  ] },
  { label: 'Behavioral flags', rows: [
    { name: 'Action-Orientation', desc: 'Deliberates on decisions',            pct: 18, count: 512 },
    { name: 'Adaptability',       desc: "Won't change course",                 pct: 12, count: 342 },
    { name: "Advice won't stick", desc: 'Disengages, plan abandonment',        pct: 24, count: 683 },
  ] },
];
const RISK_SIGNAL_MAX = 28;

function RiskSignalsVisual() {
  return (
    <div className="mm-split-visual mm-fv-meeting mm-rsig" role="img"
      aria-label="Risk signals across 2,847 profiled clients — percentage carrying each flag">
      <header className="mm-rsig-head">
        <h4>Flags</h4>
        <span className="mm-rsig-sub">· 2,847 clients profiled</span>
      </header>
      {RISK_SIGNAL_GROUPS.map((g) => (
        <div className="mm-rsig-group" key={g.label}>
          <span className="mm-rsig-glabel">{g.label}</span>
          {g.rows.map((r) => (
            <div className="mm-rsig-row" key={r.name}>
              <div className="mm-rsig-row-top">
                <span className="mm-rsig-name">{r.name}<span className="mm-rsig-desc"> · {r.desc}</span></span>
                <span className="mm-rsig-vals"><b>{r.pct}%</b><span className="mm-rsig-count">{r.count}</span></span>
              </div>
              <div className="mm-rsig-track">
                <div className="mm-rsig-fill" style={{ width: `${(r.pct / RISK_SIGNAL_MAX) * 100}%`, backgroundSize: `${(RISK_SIGNAL_MAX / r.pct) * 100}% 100%` }}></div>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

// Dark/light image swap used inside the feature boxes.
function ShotSwap({ dark, light, alt, v }) {
  // Always render the light (white) screenshot — same image in light and dark mode.
  const q = v ? `?v=${v}` : '';
  return (
    <picture>
      <source srcSet={`/assets/opt/product/${light}.avif${q}`} type="image/avif" />
      <source srcSet={`/assets/opt/product/${light}.webp${q}`} type="image/webp" />
      <img className="mm-fbox-img" src={`/assets/opt/product/${light}.png${q}`} alt={alt} loading="lazy" decoding="async" />
    </picture>
  );
}

const COUPLE_ALT = 'MoneyMind joint dashboard comparing a couple side by side — alignment score, combined financial snapshot, and behavioral traits marked aligned or different';

function AdvisersFeatureBoxes() {
  return (
    <section className="mm-section mm-fbox-section" data-screen-label="Features">
      <div className="mm-container">
        <div className="mm-fbox-grid">
          <article className="mm-fbox" data-screen-label="Predict decisions">
            <div className="mm-fbox-copy">
              <span className="eyebrow">Predict · prevent</span>
              <h3>Signals that predict client decisions.</h3>
              <p>Every client carries hidden flags: past money experiences, how they learn, what motivates them, how disciplined they are, and different relationships that shape their decisions.</p>
              <p>MoneyMind reveals the triggers that push clients off course, helping you <em>protect AUM</em> before emotion overrides strategy.</p>
            </div>
            <div className="mm-fbox-visual mm-fbox-visual--canvas"><RiskSignalsVisual /></div>
          </article>

          <article className="mm-fbox" data-screen-label="Decode patterns">
            <div className="mm-fbox-copy">
              <span className="eyebrow">Decode hidden patterns</span>
              <h3>A playbook for every client.</h3>
              <p>Coach with clarity, not assumptions. One dashboard that shows how each client is likely to react, what they&apos;ll do, and whether they&apos;re at risk of panicking or abandoning their plan.</p>
              <p>Uncover each partner&apos;s alignments and roadblocks side by side, and how to bring them together, all in one view.</p>
            </div>
            <div className="mm-fbox-visual"><ShotSwap dark="platform-couples" light="playbook-light" alt={COUPLE_ALT} v="9" /></div>
          </article>

          <article className="mm-fbox" data-screen-label="Goals planning">
            <div className="mm-fbox-copy">
              <span className="eyebrow">Goals-based planning</span>
              <h3>Risk tailored to goals.</h3>
              <p>Map each client&apos;s cash and investment goals to see the risk needed and the chance of success.</p>
              <p>Advisors can choose to tailor portfolios to each goal&apos;s time horizon and outcome, helping reduce emotional and impulsive decision-making when markets fall.</p>
            </div>
            <div className="mm-fbox-visual"><ShotSwap dark="goals-planning-dark" light="goals-planning" alt="MoneyMind goals-based planning — a renovation cash goal and a retirement growth goal, each with a projection and the chance of reaching it" v="2" /></div>
          </article>

          <article className="mm-fbox" data-screen-label="Risk picture">
            <div className="mm-fbox-copy">
              <span className="eyebrow">A complete risk picture</span>
              <h3>Multi-factor risk.</h3>
              <p>Capture all the dimensions of risk behavior: risk tolerance, risk capacity, risk needed for goals, discipline, overconfidence, regret, adaptability, and more.</p>
              <p>Know how your clients will <em>actually</em> behave under pressure — so portfolios match reality, not a score.</p>
            </div>
            <div className="mm-fbox-visual"><ShotSwap dark="risk-dark" light="risk-light" alt="MoneyMind risk profile — High risk tolerance alongside a High capacity to take risk" v="9" /></div>
          </article>
        </div>
      </div>
    </section>
  );
}

function AdvisersSharedOutcomes() {
  return (
    <section className="mm-section mm-split mm-split-boxed" data-screen-label="Shared outcomes">
      <div className="mm-container">
        <div className="mm-split-grid">
          <div className="mm-split-copy">
            <span className="eyebrow">Personal onboarding</span>
            <h2>Onboarding that stands out.</h2>
            <p>MoneyMind gives your clients an engaging onboarding experience that feels like a personal chat conversation, grounded in how they actually think about money.</p>
            <p>Meeting prep is faster, every conversation is tailored to who your clients really are, and they leave feeling understood and confident to act on your advice.</p>
          </div>
          <div className="mm-split-cell">
            <div className="mm-split-visual mm-split-visual--img">
              <picture>
                <source srcSet="/assets/opt/product/onboarding-light.avif" type="image/avif" />
                <source srcSet="/assets/opt/product/onboarding-light.webp" type="image/webp" />
                <img
                  className="mm-split-visual-img"
                  src="/assets/opt/product/onboarding-light.png"
                  alt="MoneyMind onboarding welcome screen — Let's discover your MoneyPattern, with a short guided intro and a Let's start button"
                  width="1600"
                  height="1168"
                  loading="lazy"
                  decoding="async"
                />
              </picture>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ---- Kahneman Quote ----
// ---- Trust banner (above "What is MoneyPattern?") ----
function TrustBanner() {
  return (
    <section className="mm-trust-band" data-screen-label="Trust banner">
      <div className="mm-container">
        <h2 className="mm-trust-head">
          Trust is built <em>emotionally</em>, not technically.
        </h2>
        <div className="mm-trust-grid">
          <figure className="mm-trust-stat">
            <span className="mm-trust-lead">Trust is the</span>
            <span className="mm-trust-num" aria-hidden="true">#1</span>
            <span className="mm-trust-desc">factor in choosing an advisor.</span>
          </figure>
          <figure className="mm-trust-stat">
            <span className="mm-trust-lead">Broken trust is the</span>
            <span className="mm-trust-num" aria-hidden="true">#1</span>
            <span className="mm-trust-desc">reason clients leave.</span>
          </figure>
        </div>
        <p className="mm-trust-source">Source: CapIntel 2025 Investor Engagement Survey</p>
      </div>
    </section>
  );
}

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
    <section className="mm-section mm-split mm-split-reverse mm-split-boxed" data-screen-label="Decode patterns">
      <div className="mm-container">
        <div className="mm-split-grid">
          <div className="mm-split-copy">
            <span className="eyebrow">Decode hidden patterns</span>
            <h2>A playbook for every client &amp; couple.</h2>
            <p>Coach with clarity, not assumptions. One dashboard that shows how each client is likely to react, what they&apos;ll do, and whether they&apos;re at risk of panicking or abandoning their plan.</p>
            <p>See each partner&apos;s superpowers and roadblocks side by side, and how to bring them together, all in one view.</p>
          </div>
          <div className="mm-split-cell">
            <div className="mm-split-visual mm-split-visual--img mm-shot is-dark">
              <picture>
                <source srcSet="/assets/opt/product/platform-couples.avif" type="image/avif" />
                <source srcSet="/assets/opt/product/platform-couples.webp" type="image/webp" />
                <img
                  className="mm-split-visual-img"
                  src="/assets/opt/product/platform-couples.png"
                  alt="MoneyMind joint dashboard comparing a couple side by side — alignment score, combined financial snapshot, and behavioral traits marked aligned or different"
                  width="1600"
                  height="854"
                  loading="lazy"
                  decoding="async"
                />
              </picture>
            </div>
            <div className="mm-split-visual mm-split-visual--img mm-shot is-light">
              <picture>
                <source srcSet="/assets/opt/product/playbook-light.avif" type="image/avif" />
                <source srcSet="/assets/opt/product/playbook-light.webp" type="image/webp" />
                <img
                  className="mm-split-visual-img"
                  src="/assets/opt/product/playbook-light.png"
                  alt="MoneyMind joint dashboard comparing a couple side by side — alignment score, combined financial snapshot, and behavioral traits marked aligned or different"
                  width="1600"
                  height="896"
                  loading="lazy"
                  decoding="async"
                />
              </picture>
            </div>
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

function AdvisersGoals() {
  return (
    <section className="mm-section mm-split mm-split-boxed" data-screen-label="Goals planning">
      <div className="mm-container">
        <div className="mm-split-grid">
          <div className="mm-split-copy">
            <span className="eyebrow">Goals-based planning</span>
            <h2>Risk tailored to goals.</h2>
            <p>Map each client&apos;s cash and investment goals to see the risk needed and the chance of success.</p>
            <p>Advisors can choose to tailor portfolios to each goal&apos;s time horizon and outcome, helping reduce emotional and impulsive decision-making when markets fall.</p>
          </div>
          <div className="mm-split-cell">
            <div className="mm-split-visual mm-split-visual--img mm-shot is-dark">
              <picture>
                <source srcSet="/assets/opt/product/goals-planning-dark.avif" type="image/avif" />
                <source srcSet="/assets/opt/product/goals-planning-dark.webp" type="image/webp" />
                <img
                  className="mm-split-visual-img"
                  src="/assets/opt/product/goals-planning-dark.png"
                  alt="MoneyMind goals-based planning — a renovation cash goal and a retirement growth goal, each with a projection of where it lands and the chance of reaching it"
                  width="1600"
                  height="614"
                  loading="lazy"
                  decoding="async"
                />
              </picture>
            </div>
            <div className="mm-split-visual mm-split-visual--img mm-shot is-light">
              <picture>
                <source srcSet="/assets/opt/product/goals-planning.avif" type="image/avif" />
                <source srcSet="/assets/opt/product/goals-planning.webp" type="image/webp" />
                <img
                  className="mm-split-visual-img"
                  src="/assets/opt/product/goals-planning.png"
                  alt="MoneyMind goals-based planning — a renovation cash goal and a retirement growth goal, each with a projection of where it lands and the chance of reaching it"
                  width="1600"
                  height="602"
                  loading="lazy"
                  decoding="async"
                />
              </picture>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function AdvisersRisk() {
  return (
    <section className="mm-section mm-split mm-split-reverse mm-split-boxed" data-screen-label="Risk picture">
      <div className="mm-container">
        <div className="mm-split-grid">
          <div className="mm-split-copy">
            <span className="eyebrow">A complete risk picture</span>
            <h2>Multi-factor risk.</h2>
            <p>Capture all the dimensions of risk behavior: risk tolerance, risk capacity, risk needed for goals, discipline, overconfidence, regret, adaptability, and more.</p>
            <p>Know how your clients will <em>actually</em> behave under pressure — so portfolios match reality, not a score.</p>
          </div>
          <div className="mm-split-cell">
            <div className="mm-split-visual mm-split-visual--img mm-shot is-dark">
              <picture>
                <source srcSet="/assets/opt/product/risk-dark.avif" type="image/avif" />
                <source srcSet="/assets/opt/product/risk-dark.webp" type="image/webp" />
                <img
                  className="mm-split-visual-img"
                  src="/assets/opt/product/risk-dark.png"
                  alt="MoneyMind risk profile — Moderate risk tolerance alongside a Very High capacity to take risk"
                  width="1200"
                  height="642"
                  loading="lazy"
                  decoding="async"
                />
              </picture>
            </div>
            <div className="mm-split-visual mm-split-visual--img mm-shot is-light">
              <picture>
                <source srcSet="/assets/opt/product/risk-light.avif?v=3" type="image/avif" />
                <source srcSet="/assets/opt/product/risk-light.webp?v=3" type="image/webp" />
                <img
                  className="mm-split-visual-img"
                  src="/assets/opt/product/risk-light.png?v=3"
                  alt="MoneyMind risk profile — Moderate risk tolerance alongside a Very High capacity to take risk"
                  width="1092"
                  height="580"
                  loading="lazy"
                  decoding="async"
                />
              </picture>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ---- Real results (testimonials) ----
function AdvisersResults() {
  return (
    <section className="mm-section rd-testimonials rd-testimonials-fa" data-screen-label="Advisor results">
      <div className="mm-container">
        <DemoTestimonials subhead="No behavioral finance degree required — an expert's read on every client, on tap." />
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
          <h2>One tier.<br />Built for practices.</h2>
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
              <Link href="/request-demo" className="mm-btn mm-btn-ghost mm-btn-lg">Request demo</Link>
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
            <Link href="/request-demo" className="mm-btn mm-btn-ghost mm-btn-lg">Request demo</Link>
          </div>
          <div className="mm-cta-trial">Demo it. Trial it. Transform it. 14 days on us.</div>
        </div>
      </div>
    </section>
  );
}

// ---- Integrations constellation ----
function AdvisersInsightFlow() {
  return (
    <section className="mm-section mm-insight-section" data-screen-label="Integrations">
      <div className="mm-container">
        <div className="mm-section-head center">
          <span className="eyebrow">Integrated insights</span>
          <h2>MoneyMind insights flow into the AI tools you already use — and into the meeting agendas and plans you write.</h2>
          <p className="lead">Tell us what tools you use — we&apos;ll handle the connection.</p>
        </div>
        <div className="mm-insight mm-insight-full">
          <IntegrationDiagram />
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
      <TrustBanner />
      <Platform
        eyebrow="What is MoneyPattern?"
        heading="MoneyPattern™ is your client's story, the person behind the plan."
        lead="Advice is brilliant at the numbers — but almost never looks at the mindset driving them. It works alongside the tools you already use — no new platform to learn."
        patternTab={<ClientStory />}
        couplesTab={<CouplesStory />}
        preMeetingTab={
          <div className="mm-aiplan">
            <img
              className="mm-platform-img"
              src="/assets/opt/product/meeting-prep.webp"
              alt="A MoneyMind meeting prep overlay — the client-psychology brief an advisor sees before a meeting"
              width="1600"
              height="1027"
            />
            <Link href="/meeting-prep" className="mm-btn mm-btn-primary mm-aiplan-btn">
              View a sample prep <span aria-hidden="true">→</span>
            </Link>
          </div>
        }
        aiPlansTab={
          <div className="mm-aiplan">
            <img
              className="mm-platform-img"
              src="/assets/opt/product/financial-plan.webp"
              alt="A MoneyMind financial plan with behavioral insights woven through each section"
              width="1600"
              height="1027"
            />
            <Link href="/financial-plan" className="mm-btn mm-btn-primary mm-aiplan-btn">
              View a sample plan <span aria-hidden="true">→</span>
            </Link>
          </div>
        }
      />
      <AdvisersHowItWorks />
      <AdvisersSharedOutcomes />
      <AdvisersFeatureBoxes />
      <AdvisersInsightFlow />
      <AdvisersResults />
      <ImpactTrio />
      <KahnemanQuote />
      <AdvisersPricing />
      <Team />
      <Security />
      <Faq />
      <AdvisersCtaBand />
      <Footer />
    </div>
  );
}
