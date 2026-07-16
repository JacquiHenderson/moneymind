'use client';
import { useState } from 'react';
import Link from 'next/link';
import { IconSend, IconScan, IconCheck } from './Icons';

const STEPS = [
  {
    icon: <IconSend size={18} />,
    num: '01 · Invite',
    title: 'Send profile',
    body: "Share a branded, mobile-friendly link directly to your client. Five minutes to complete. Doesn't feel like a form — feels like self-discovery."
  },
  {
    icon: <IconScan size={18} />,
    num: '02 · Analyze',
    title: 'Uncover patterns',
    body: 'MoneyMind maps each client across key behavioral dimensions — financial life satisfaction, financial foundations, financial decision making, and risk.'
  },
  {
    icon: <IconCheck size={18} />,
    num: '03 · Advise',
    title: 'Walk in knowing',
    body: "The dashboard surfaces personalized insights and talking points — so your advice doesn't just make sense. It lands. It sticks. And it gets acted on."
  },
];

const StepsCurve = () => (
  <svg className="mm-steps-curve" viewBox="0 0 1920 700" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
    <defs>
      <linearGradient id="steps-curve" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%"   stopColor="#5298BF" stopOpacity="0"/>
        <stop offset="50%"  stopColor="#5298BF" stopOpacity="0.30"/>
        <stop offset="100%" stopColor="#1D4A75" stopOpacity="0"/>
      </linearGradient>
    </defs>
    <path
      d="M 1100 -120 Q 1700 500 1300 900 T -200 900"
      fill="none"
      stroke="url(#steps-curve)"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

export default function Steps() {
  const [selected, setSelected] = useState(1);

  return (
    <section className="mm-section mm-steps-section" data-screen-label="Process steps">
      <StepsCurve />
      <div className="mm-container">
        <div className="mm-section-head">
          <span className="eyebrow">How to start</span>
          <h2>Start your 14-day trial now.<br />Onboarding to client insights in three steps.</h2>
        </div>

        <div className="mm-steps">
          {STEPS.map((s, i) => (
            <button
              key={i}
              className={`mm-step${selected === i ? ' selected' : ''}`}
              onClick={() => setSelected(i)}
              onMouseEnter={() => setSelected(i)}
            >
              <span className="mm-step-icon">{s.icon}</span>
              <span className="mm-step-num">{s.num}</span>
              <h4>{s.title}</h4>
              <p>{s.body}</p>
            </button>
          ))}
        </div>

        <div className="mm-steps-cta">
          <a href="https://auth.moneymindprofile.com/#signup" className="mm-btn mm-btn-primary mm-btn-lg">Start 14-day trial</a>
          <Link href="/request-demo" className="mm-btn mm-btn-ghost mm-btn-lg">Request demo</Link>
        </div>
      </div>
    </section>
  );
}
