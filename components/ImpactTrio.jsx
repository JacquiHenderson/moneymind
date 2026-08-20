'use client';
import { useState } from 'react';
import { IconChart, IconLink, IconBrain } from './Icons';

const IMPACT_CARDS = [
  {
    icon: <IconChart size={18} />,
    stat: '9 out of 10',
    statLabel: 'advisors say prospects who complete a MoneyMind profile go on to become clients. Not one reported losing them.',
    title: 'Accelerate trust & advice acceptance',
    body: 'Advice tailored to what drives clients emotionally earns trust faster — so they commit sooner and stay longer.',
  },
  {
    icon: <IconLink size={18} />,
    stat: '83%',
    statLabel: 'of advisors say MoneyMind helps them spot which prospects are a good fit — sooner. Saving hours on wrong fits.',
    title: 'Qualify the right prospects earlier',
    body: "Know how a prospect thinks before you invest hours into them, so your time goes to the clients you'll do your best work with.",
  },
  {
    icon: <IconBrain size={18} />,
    stat: '50%',
    statLabel: 'of advisors use MoneyMind to open a conversation with the next generation. The other half plan to.',
    title: 'Keep clients across generations',
    body: "The $84 trillion wealth transfer is a retention cliff. Understand the whole family's dynamics, so the relationship transfers before the wealth does.",
  },
];

export default function ImpactTrio({ showLead = true }) {
  const [selected, setSelected] = useState(1);
  return (
    <section className="mm-impact-trio" data-screen-label="Adviser impact trio">
      <div className="mm-container">
        <div className="mm-section-head">
          <span className="eyebrow">The impact</span>
          <h2>The edge advisors<br />get with MoneyMind.</h2>
          {showLead && <p className="lead">Financial decisions are shaped by how clients think, not just what they hold in a balance sheet.</p>}
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
              {c.stat && (
                <p className="mm-step-stat"><span className="mm-stat-inline">{c.stat}</span> {c.statLabel}</p>
              )}
              <h4>{c.title}</h4>
              <p>{c.body}</p>
              {c.source && <p className="mm-step-source">Source: {c.source}</p>}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
