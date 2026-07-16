'use client';
import { useState } from 'react';
import { IconSend, IconScan, IconCheck } from './Icons';

// Mirrors the home page Steps cards (same markup, icons and hover-select
// behaviour), minus the section head / CTA which the page provides.
const STEPS = [
  {
    icon: <IconSend size={18} />,
    num: '01 · Invite',
    title: 'Send profile',
    body: "Share a branded, mobile-friendly link directly to your client. Five minutes to complete. Doesn't feel like a form — feels like self-discovery.",
  },
  {
    icon: <IconScan size={18} />,
    num: '02 · Analyze',
    title: 'Uncover patterns',
    body: 'MoneyMind maps each client across key behavioral dimensions — financial life satisfaction, financial foundations, financial decision making, and risk.',
  },
  {
    icon: <IconCheck size={18} />,
    num: '03 · Advise',
    title: 'Walk in knowing',
    body: "The dashboard surfaces personalised insights and talking points — so your advice doesn't just make sense. It lands. It sticks. And it gets acted on.",
  },
];

export default function HowItWorksSteps() {
  const [selected, setSelected] = useState(1);
  return (
    <div className="mm-steps">
      {STEPS.map((s, i) => (
        <button
          key={i}
          className={`mm-step${selected === i ? ' selected' : ''}`}
          onClick={() => setSelected(i)}
          onMouseEnter={() => setSelected(i)}
          type="button"
        >
          <span className="mm-step-icon">{s.icon}</span>
          <span className="mm-step-num">{s.num}</span>
          <h4>{s.title}</h4>
          <p>{s.body}</p>
        </button>
      ))}
    </div>
  );
}
