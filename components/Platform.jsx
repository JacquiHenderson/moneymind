'use client';
import { useState } from 'react';
import { IconBrain, IconUsers, IconCompass, IconLink, IconSparkle } from './Icons';
import Personas from './Personas';
import MoneyQuiz from './MoneyQuiz';

export default function Platform({
  eyebrow = 'The platform',
  heading = 'Everything you need to know about your client, in one place.',
  lead = 'Turn a five-minute profile into insights that will transform every client connection.',
  patternTab = null,
  aiPlansTab = null,
}) {
  const [tab, setTab] = useState('pattern');

  const TABS = [
    { id: 'pattern',  label: 'MoneyPattern™', icon: <IconBrain size={16} /> },
    { id: 'profile',  label: 'Profile',       icon: <IconUsers size={16} /> },
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

        <div className="mm-platform-stage">

          <div className="mm-platform-window">
            <div className="mm-platform-chrome">
              <span className="mm-platform-dot"></span>
              <span className="mm-platform-dot"></span>
              <span className="mm-platform-dot"></span>
            </div>
            {tab === 'personas' ? (
              <Personas />
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
