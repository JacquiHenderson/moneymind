'use client';
import { useState } from 'react';
import { IconBrain, IconUsers, IconCompass, IconLink, IconSparkle, IconAudit, IconCouple } from './Icons';
import Personas from './Personas';
import MoneyQuiz from './MoneyQuiz';

// Copy shown between the tabs and the screen, per active tab.
const TAB_COPY = {
  pattern:
    "The MoneyPattern™ dashboard turns 34 behavioral measures — plus risk tolerance and capacity — into five read-outs: how your clients save, spend, plan, invest, and react when markets fall. Each shows their strength, their roadblocks, and how to optimise them.",
  couples:
    "MoneyMind links couples into a single profile. Each partner is assessed separately, then the two results sit side by side. Alignments and differences are described neutrally, not judged — so couples get curious about each other, and the adviser walks in with the agenda already written.",
  profile:
    "The behavioral assessment takes only minutes to complete — and it doesn't feel like a form. Clients get something back straight away: a personal read on how they make financial decisions, what drives them, and what gets in their way.",
  'pre-meeting':
    "MoneyMind insights flow straight into the AI tools you already use. The numbers, the meeting notes, and your client's financial psychology land into one brief — so your agenda is built on the full picture, not just what they own. The whole client story, before you walk in.",
  'ai-plans':
    "MoneyMind insights also flow into your financial plans. The numbers, the strategies, and your client's behavioral patterns come together — so the plan is tailored to their psychology, not just what the projections assume. The human behind the plan.",
  personas:
    "MoneyMind maps every client to one of seven archetypes. Each cohort carries behavioral traits, how to optimise, the words that land, and how common it is. Segment your whole client base by how they think, not just what they're worth — then design your comms for each one.",
  embed:
    "Embed MoneyMind anywhere — your website, your marketing, social, or your client portal. Run the full questionnaire or a single section. Every touchpoint becomes top of funnel, and every lead arrives warm, engaged, and already telling you how they think.",
};

export default function Platform({
  eyebrow = 'The platform',
  heading = 'Everything you need to know about your client, in one place.',
  lead = 'Turn a five-minute profile into insights that will transform every client connection.',
  patternTab = null,
  couplesTab = null,
  preMeetingTab = null,
  aiPlansTab = null,
}) {
  const [tab, setTab] = useState('pattern');

  const TABS = [
    { id: 'pattern',  label: 'MoneyPattern™', icon: <IconBrain size={16} /> },
    ...(couplesTab ? [{ id: 'couples', label: 'Couples', icon: <IconCouple size={16} /> }] : []),
    { id: 'profile',  label: 'Profile',       icon: <IconUsers size={16} /> },
    ...(preMeetingTab ? [{ id: 'pre-meeting', label: 'AI Meeting Prep', icon: <IconAudit size={16} /> }] : []),
    ...(aiPlansTab ? [{ id: 'ai-plans', label: 'AI Plans', icon: <IconSparkle size={16} /> }] : []),
    { id: 'personas', label: 'Personas',      icon: <IconCompass size={16} /> },
    { id: 'embed',    label: 'Embed link',    icon: <IconLink size={16} /> },
  ];

  return (
    <section className="mm-section" id="platform" data-screen-label="Platform">
      <div className="mm-container">
        <div className="mm-section-head center">
          <span className="eyebrow">{eyebrow}</span>
          <h2>{heading}</h2>
          <p className="lead">{lead}</p>
        </div>

        <div className="mm-platform-tabs-row">
          <div className="mm-platform-tabs" role="tablist">
            {TABS.map(t => (
              <button
                key={t.id}
                role="tab"
                aria-selected={tab === t.id}
                className={`mm-platform-tab${tab === t.id ? ' active' : ''}`}
                onClick={() => setTab(t.id)}
              >
                {t.icon}
                {t.label}
              </button>
            ))}
          </div>
        </div>

        {TAB_COPY[tab] && <p className="mm-platform-desc">{TAB_COPY[tab]}</p>}

        <div className="mm-platform-stage">

          <div className="mm-platform-window">
            <div className="mm-platform-chrome">
              <span className="mm-platform-dot"></span>
              <span className="mm-platform-dot"></span>
              <span className="mm-platform-dot"></span>
            </div>
            {tab === 'couples' ? (
              couplesTab
            ) : tab === 'personas' ? (
              <Personas />
            ) : tab === 'pre-meeting' ? (
              preMeetingTab
            ) : tab === 'ai-plans' ? (
              aiPlansTab
            ) : tab === 'profile' ? (
              <MoneyQuiz />
            ) : tab === 'embed' ? (
              <picture className="mm-platform-pic">
                <source srcSet="/assets/opt/product/embed-link.avif" type="image/avif" />
                <source srcSet="/assets/opt/product/embed-link.webp" type="image/webp" />
                <img
                  className="mm-platform-img"
                  src="/assets/opt/product/embed-link.png"
                  alt="MoneyMind embedded on an advisory firm's website with a Learn your MoneyMind profile call to action"
                  width="1600"
                  height="1012"
                  loading="lazy"
                  decoding="async"
                />
              </picture>
            ) : patternTab ? (
              patternTab
            ) : (
              <picture className="mm-platform-pic">
                <source srcSet="/assets/opt/product/dashboard.avif" type="image/avif" />
                <source srcSet="/assets/opt/product/dashboard.webp" type="image/webp" />
                <img
                  className="mm-platform-img"
                  src="/assets/opt/product/dashboard.png"
                  alt="MoneyMind profile dashboard showing the MoneyPattern™ for a client"
                  width="1600"
                  height="1064"
                  loading="lazy"
                  decoding="async"
                />
              </picture>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
