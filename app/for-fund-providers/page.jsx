'use client';
import { useState } from 'react';
import Header from '../../components/Header';
import { HeroCurves } from '../../components/Hero';
import Logos from '../../components/Logos';
import Platform from '../../components/Platform';
import Footer from '../../components/Footer';
import { IconBrain, IconChart, IconLink, Icon } from '../../components/Icons';

// ---- Hero ----
function FundProvidersHero() {
  return (
    <section className="mm-sub-hero" data-screen-label="Fund providers hero">
      <HeroCurves />
      <div className="mm-sub-hero-inner">
        <span className="eyebrow mm-sub-hero-eyebrow">Built for fund providers</span>
        <h1>
          The new standard of<br/>
          understanding <em>investors.</em>
        </h1>
        <p className="mm-sub-hero-lead">
          MoneyMind™ maps the behavioral intelligence layer that drives investor
          decisions — across product, distribution, retention, and growth.
        </p>
        <p className="mm-sub-hero-reveal">
          Investment decisions are influenced by emotion and behavioral bias —
          <em> not logic.</em>
        </p>
        <div className="mm-hero-actions">
          <a href="https://wkf.ms/3PMywRu" target="_blank" rel="noopener" className="mm-btn mm-btn-primary mm-btn-lg">Book a discovery call</a>
        </div>
      </div>
    </section>
  );
}

// ---- Impact Trio (interactive) ----
const FUND_IMPACT_CARDS = [
  {
    icon: <IconBrain size={18} />,
    title: 'New dimension of data',
    body: 'Go beyond demographics and account balances. Capture the psychological drivers behind every investor decision — at portfolio scale.',
  },
  {
    icon: <IconChart size={18} />,
    title: 'Predict and prevent churn',
    body: 'Surface the behavioral signals that precede churn. Intervene with the right cohort, in the right language, before AUM moves.',
  },
  {
    icon: <IconLink size={18} />,
    title: 'Personalize at scale',
    body: 'Match channel, framing, and nudges to the dominant MoneyPattern of each cohort archetype. Communications stop sounding generic.',
  },
];

function FundProvidersImpactTrio() {
  const [selected, setSelected] = useState(1);
  return (
    <section className="mm-impact-trio" data-screen-label="Fund impact trio">
      <div className="mm-container">
        <div className="mm-section-head">
          <span className="eyebrow">The impact</span>
          <h2>What changes when you understand your investors.</h2>
        </div>
        <div className="mm-steps">
          {FUND_IMPACT_CARDS.map((c, i) => (
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

// ---- Expand Data ----
function CohortVisual() {
  const segments = [
    { name: 'Steady Saver',       pct: 28, color: 'var(--mm-blue-light)' },
    { name: 'Cautious Investor',  pct: 22, color: 'var(--mm-blue-mid)' },
    { name: 'Considered Spender', pct: 18, color: 'var(--mm-blue-deep)' },
    { name: 'Retirement-Ready',   pct: 17, color: 'var(--mm-blue-100)' },
    { name: 'Anxious Avoider',    pct: 9,  color: 'var(--mm-blue-200)' },
    { name: 'Other',              pct: 6,  color: 'var(--mm-blue-800)' },
  ];
  return (
    <div className="mm-split-visual mm-fv-archetype">
      <div className="mm-cohort">
        <header className="mm-cohort-head">
          <div>
            <span className="mm-cohort-sub">Investor cohorts · this quarter</span>
            <span className="mm-cohort-count">58,420 investors profiled</span>
          </div>
          <span className="mm-cohort-pill">Auto-updated</span>
        </header>
        <div className="mm-cohort-bar">
          {segments.map((s) => (
            <div key={s.name} className="mm-cohort-seg" style={{ flex: s.pct, background: s.color }} title={`${s.name} · ${s.pct}%`}></div>
          ))}
        </div>
        <ul className="mm-cohort-legend">
          {segments.map((s) => (
            <li key={s.name}>
              <span className="mm-cohort-swatch" style={{ background: s.color }}></span>
              <span className="mm-cohort-name">{s.name}</span>
              <span className="mm-cohort-pct">{s.pct}%</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function FundProvidersExpandData() {
  return (
    <section className="mm-section mm-split" data-screen-label="Expand data">
      <div className="mm-container">
        <div className="mm-split-grid">
          <div className="mm-split-copy">
            <span className="eyebrow">Behavioral intelligence</span>
            <h2>Expand Your Data with Behavioral Intelligence.</h2>
            <p>
              Unlock a new dimension of investor data — go beyond demographics
              and account balances — capture the psychological drivers behind
              investor financial decisions.
            </p>
            <p>
              Understand the behavioral biases that shape contribution rates,
              investment choices, and engagement — so you can predict churn,
              personalize experiences, and <em>protect AUM</em>.
            </p>
          </div>
          <CohortVisual />
        </div>
      </div>
    </section>
  );
}

// ---- Persona Cohorts ----
const PERSONA_TILES = [
  { name: 'Steady Saver',       investors: '16,240', ltv: 'High',     engagement: 0.78 },
  { name: 'Cautious Investor',  investors: '12,870', ltv: 'High',     engagement: 0.66 },
  { name: 'Anxious Avoider',    investors: '5,260',  ltv: 'At risk',  engagement: 0.34 },
  { name: 'Impulsive Optimist', investors: '8,140',  ltv: 'Variable', engagement: 0.52 },
];

function PersonaCohortsVisual() {
  return (
    <div className="mm-split-visual mm-fv-meeting">
      <div className="mm-pcoh">
        <header className="mm-pcoh-head">
          <div>
            <span className="mm-pcoh-eyebrow">Persona cohorts · LTV index</span>
            <span className="mm-pcoh-count">Auto-built from 58,420 investors</span>
          </div>
          <span className="mm-pcoh-pill">Refreshed daily</span>
        </header>
        <ul className="mm-pcoh-list">
          {PERSONA_TILES.map((p) => (
            <li key={p.name} className="mm-pcoh-row">
              <div className="mm-pcoh-row-top">
                <span className="mm-pcoh-name">{p.name}</span>
                <span className={`mm-pcoh-ltv ltv-${p.ltv.toLowerCase().replace(/[^a-z]/g, '')}`}>{p.ltv}</span>
              </div>
              <div className="mm-pcoh-row-bottom">
                <span className="mm-pcoh-investors">{p.investors} investors</span>
                <span className="mm-pcoh-track">
                  <span className="mm-pcoh-fill" style={{ width: `${p.engagement * 100}%` }}></span>
                </span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function FundProvidersPersonaCohorts() {
  return (
    <section className="mm-section mm-split mm-split-reverse" data-screen-label="Persona cohorts">
      <div className="mm-container">
        <div className="mm-split-grid">
          <div className="mm-split-copy">
            <span className="eyebrow">Persona cohorts</span>
            <h2>Build Persona Cohorts That Predict Client Lifetime Value.</h2>
            <p>
              Analyze behavioral characteristics across your investor base over
              time and automatically build persona archetypes that represent
              key investor segments.
            </p>
            <p>
              Reveal investor cohorts that enable you to personalize products,
              optimize digital advice with higher acceptance, and craft nudge
              communications that increase retention and engagement.
            </p>
          </div>
          <PersonaCohortsVisual />
        </div>
      </div>
    </section>
  );
}

// ---- Predict ----
function ChurnVisual() {
  const signals = [
    { name: 'Loss-response sensitivity', val: 78, level: 'High' },
    { name: 'Plan abandonment intent',   val: 64, level: 'Elevated' },
    { name: 'Advisor engagement decay',  val: 52, level: 'Watch' },
    { name: 'Volatility communication',  val: 31, level: 'Normal' },
  ];
  return (
    <div className="mm-split-visual mm-fv-meeting">
      <div className="mm-churn-card">
        <header className="mm-churn-head">
          <div>
            <span className="mm-churn-eyebrow">Churn-risk signals</span>
            <span className="mm-churn-cohort">&quot;Anxious Avoider&quot; cohort · 5,260 investors</span>
          </div>
          <span className="mm-churn-pill">+12% WoW</span>
        </header>
        {signals.map((s) => (
          <div key={s.name} className="mm-churn-row">
            <div className="mm-churn-row-head">
              <span className="mm-churn-name">{s.name}</span>
              <span className={`mm-churn-level lv-${s.level.toLowerCase()}`}>{s.level}</span>
            </div>
            <div className="mm-churn-track">
              <div className="mm-churn-fill" style={{ width: `${s.val}%` }}></div>
            </div>
          </div>
        ))}
        <footer className="mm-churn-foot">
          <span className="dot"></span>
          <span><strong>Recommended intervention.</strong> Pre-volatility communication framed around protection, not growth.</span>
        </footer>
      </div>
    </div>
  );
}

function FundProvidersPredict() {
  return (
    <section className="mm-section mm-split" data-screen-label="Predict decisions">
      <div className="mm-container">
        <div className="mm-split-grid">
          <div className="mm-split-copy">
            <span className="eyebrow">Predict · prevent</span>
            <h2>Predict Investor Decisions Before They Happen.</h2>
            <p>
              Anticipate how your investors will react, what actions they&apos;ll
              take, and whether they&apos;ll abandon their investment plan — before
              it impacts your fund.
            </p>
            <p>
              Identify investor triggers that <em>protect your AUM</em> —
              impulsivity, optimism bias, loss aversion, and anxiety — all the
              emotions that can override rational investing.
            </p>
          </div>
          <ChurnVisual />
        </div>
      </div>
    </section>
  );
}

// ---- Omni Channel ----
const ChannelIcon = ({ name }) => {
  const iconMap = {
    Website:   <Icon><path d="M3 12h18"/><path d="M12 3a15 15 0 0 1 0 18M12 3a15 15 0 0 0 0 18"/><circle cx="12" cy="12" r="9"/></Icon>,
    Portal:    <Icon><rect x="3" y="4" width="18" height="16" rx="2"/><path d="M3 9h18"/><circle cx="7" cy="6.5" r="0.6" fill="currentColor" stroke="none"/></Icon>,
    Marketing: <Icon><path d="M3 11l16-7v16L3 13Z"/><path d="M7 13v5a2 2 0 0 0 4 0v-3"/></Icon>,
    Social:    <Icon><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><path d="M8.6 13.5l6.8 4M8.6 10.5l6.8-4"/></Icon>,
    Email:     <Icon><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/></Icon>,
    QR:        <Icon><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><path d="M14 14h3v3M20 14v3M14 20h3M17 17h4M20 20h1"/></Icon>,
  };
  return iconMap[name] || null;
};

const CHANNELS = [
  { name: 'Website',   sub: 'Embed widget' },
  { name: 'Portal',    sub: 'Investor login' },
  { name: 'Marketing', sub: 'Digital advice' },
  { name: 'Social',    sub: 'Shareable link' },
  { name: 'Email',     sub: 'Campaign drop-in' },
  { name: 'QR',        sub: 'In-person events' },
];

function OmniChannelVisual() {
  return (
    <div className="mm-split-visual mm-fv-stat">
      <div className="mm-omni">
        <header className="mm-omni-head">
          <div>
            <span className="mm-omni-eyebrow">Active distribution channels</span>
            <span className="mm-omni-count">All synced to one investor profile</span>
          </div>
          <span className="mm-omni-pill">6 live</span>
        </header>
        <div className="mm-omni-grid">
          {CHANNELS.map((c) => (
            <div className="mm-omni-tile" key={c.name}>
              <span className="mm-omni-icon"><ChannelIcon name={c.name} /></span>
              <span className="mm-omni-name">{c.name}</span>
              <span className="mm-omni-sub">{c.sub}</span>
              <span className="mm-omni-live"><span className="dot"></span>Live</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function FundProvidersOmni() {
  return (
    <section className="mm-section mm-split mm-split-reverse" data-screen-label="Omni-channel">
      <div className="mm-container">
        <div className="mm-split-grid">
          <div className="mm-split-copy">
            <span className="eyebrow">Distribution</span>
            <h2>Omni-channel Distribution.</h2>
            <p>
              Deploy MoneyMind wherever your investors are — maximizing reach
              and broadening behavioral data capture across your entire investor base.
            </p>
            <p>
              Embed into your digital advice journeys, client portals, marketing,
              social media, and QR codes — unlike traditional questionnaires,
              MoneyMind <em>feels like a valuable personal insight tool</em>,
              not a data collection exercise.
            </p>
          </div>
          <OmniChannelVisual />
        </div>
      </div>
    </section>
  );
}

// ---- Enterprise Contact ----
function FundProvidersContact() {
  return (
    <section className="mm-section mm-enterprise" id="contact" data-screen-label="Enterprise contact">
      <div className="mm-container">
        <div className="mm-enterprise-card">
          <div className="mm-enterprise-left">
            <span className="eyebrow">Enterprise engagement</span>
            <h2>Pricing scales with your investor base.</h2>
            <p>
              Enterprise pricing is bespoke — based on the size of your investor
              base, integration depth, and data-requirements. We move fast on
              project delivery.
            </p>
            <div className="mm-enterprise-actions">
              <a href="https://wkf.ms/3PMywRu" target="_blank" rel="noopener" className="mm-btn mm-btn-primary mm-btn-lg">Book a discovery call</a>
              <a href="mailto:info@moneymindprofile.com" className="mm-btn mm-btn-ghost mm-btn-lg">info@moneymindprofile.com</a>
            </div>
          </div>
          <div className="mm-enterprise-right">
            <h5>What a typical engagement includes</h5>
            <ul className="mm-enterprise-ppp">
              <li>
                <div className="mm-ppp-head"><h6>Predict</h6></div>
                <p>Our data insights anticipate member decisions, at an individual, persona, and cohort level.</p>
              </li>
              <li>
                <div className="mm-ppp-head"><h6>Personalize</h6></div>
                <p>We hyper-personalize your digital advice, product marketing, and nudges at scale.</p>
              </li>
              <li>
                <div className="mm-ppp-head"><h6>Protect</h6></div>
                <p>We can detect churn signals proactively — before it&apos;s too late.</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

// ---- CTA Band ----
function FundProvidersCtaBand() {
  return (
    <section className="mm-cta-band" data-screen-label="Fund CTA">
      <div className="mm-container">
        <div className="mm-cta-card">
          <h2>Predict decisions. Prevent churn. Drive growth.</h2>
          <p className="lead">
            Give your team the psychological layer on every investor record —
            continuously refreshed, ready to action across product, retention, and comms.
          </p>
          <div className="mm-hero-actions">
            <a href="https://wkf.ms/3PMywRu" target="_blank" rel="noopener" className="mm-btn mm-btn-primary mm-btn-lg">Book a discovery call</a>
          </div>
          <div className="mm-cta-trial">Decode insights. Predict decisions. Protect AUM.</div>
        </div>
      </div>
    </section>
  );
}

// ---- Page ----
export default function ForFundProvidersPage() {
  return (
    <div className="mm-page">
      <Header currentPage="fund-providers" />
      <FundProvidersHero />
      <FundProvidersImpactTrio />
      <FundProvidersExpandData />
      <FundProvidersPersonaCohorts />
      <FundProvidersPredict />
      <FundProvidersOmni />
      <Platform
        heading="MoneyMind's unique features designed to elevate your investor experience."
        lead="The behavioral intelligence layer for every investor record."
      />
      <FundProvidersContact />
      <FundProvidersCtaBand />
      <Footer />
    </div>
  );
}
