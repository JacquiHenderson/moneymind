'use client';
import { useState } from 'react';
import { IconBrain, IconUsers, IconCompass, IconLink, IconSparkle } from './Icons';
import Personas from './Personas';
import MoneyQuiz from './MoneyQuiz';
import EmbedLink from './EmbedLink';

const TABS = [
  { id: 'pattern',  label: 'MoneyPattern™', icon: <IconBrain size={16} /> },
  { id: 'profile',  label: 'MoneyQuiz',     icon: <IconUsers size={16} /> },
  { id: 'personas', label: 'Personas',      icon: <IconCompass size={16} /> },
  { id: 'embed',    label: 'Embed link',    icon: <IconLink size={16} /> },
];

export default function Platform({
  heading = 'Everything you need to know about your client, in one place.',
  lead = 'Turn a five-minute profile into insights that will transform every client connection.',
}) {
  const [tab, setTab] = useState('pattern');

  return (
    <section className="mm-section" id="platform" data-screen-label="Platform">
      <div className="mm-container">
        <div className="mm-section-head center">
          <span className="eyebrow">The platform</span>
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
              <span className="mm-platform-url">
                app.moneymindprofile.com / {tab === 'personas' ? 'personas' : tab === 'profile' ? 'profile' : tab === 'embed' ? 'embed' : 'pattern'}
              </span>
            </div>
            {tab === 'personas' ? (
              <Personas />
            ) : tab === 'profile' ? (
              <MoneyQuiz />
            ) : tab === 'embed' ? (
              <EmbedLink />
            ) : (
              <img
                className="mm-platform-img"
                src="/assets/product/dashboard.png"
                alt="MoneyMind profile dashboard showing the MoneyPattern™ for a client"
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
