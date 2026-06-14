'use client';
import { useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Link from 'next/link';

const FORMSPREE_ID = 'YOUR_FORM_ID';

const COUNTRIES = [
  'Australia', 'New Zealand', 'United Kingdom', 'United States', 'Canada',
  'Singapore', 'Hong Kong', 'Ireland', 'South Africa', 'United Arab Emirates',
  'Germany', 'France', 'Netherlands', 'Switzerland', 'Sweden', 'Norway',
  'Denmark', 'Finland', 'Belgium', 'Austria', 'Spain', 'Italy', 'Portugal',
];

function CheckIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M5 12.5l4.5 4.5L20 7"/>
    </svg>
  );
}

export default function DemoRequestPage() {
  const [fields, setFields] = useState({ fullName: '', company: '', email: '', country: '' });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // idle | submitting | success | error

  const set = (k) => (e) => setFields((f) => ({ ...f, [k]: e.target.value }));

  const validate = () => {
    const e = {};
    if (!fields.fullName.trim()) e.fullName = 'Please enter your name.';
    if (!fields.company.trim()) e.company = 'Please enter your company name.';
    if (!fields.email.trim()) e.email = 'Please enter your email.';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email)) e.email = 'Please enter a valid email address.';
    if (!fields.country) e.country = 'Please select your country.';
    return e;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setErrors({});
    setStatus('submitting');
    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: 'POST',
        headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fullName: fields.fullName,
          company: fields.company,
          email: fields.email,
          country: fields.country,
          _subject: `New demo request — ${fields.fullName} (${fields.company})`,
          _replyto: fields.email,
        }),
      });
      setStatus(res.ok ? 'success' : 'error');
    } catch {
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div className="mm-page">
        <Header />
        <main className="ty-page">
          <article className="ty-card">
            <Link href="/" className="ty-logo" aria-label="MoneyMind home">
              <img src="/assets/logos/moneymind-white.svg?v=5" alt="MoneyMind" />
            </Link>
            <span className="ty-icon"><CheckIcon /></span>
            <p className="ty-eyebrow">Request received</p>
            <h1>Thanks, <em>{fields.fullName.split(' ')[0]}.</em></h1>
            <p>
              We&apos;ve received your demo request and will be in touch at{' '}
              <strong style={{ color: 'var(--fg-1)' }}>{fields.email}</strong> shortly.
            </p>
            <div className="ty-actions">
              <Link href="/" className="mm-btn mm-btn-primary mm-btn-lg">Back to home</Link>
            </div>
            <div className="ty-meta">
              Need to reach us sooner?{' '}
              <a href="mailto:info@moneymindprofile.com">info@moneymindprofile.com</a>
            </div>
          </article>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="mm-page">
      <Header currentPage="demo-request" />

      <section className="mm-dr-hero">
        <div className="mm-container">
          <p className="eyebrow">Get Started</p>
          <h1>Request a demo</h1>
          <p className="mm-dr-sub">
            See MoneyMind in action with a guided walkthrough from our team.
            Fill in your details and we&apos;ll be in touch within the hour.
          </p>
        </div>
      </section>

      <section className="mm-dr-form-section">
        <div className="mm-container">
          <div className="mm-dr-form-wrap">
            <form className="mm-dr-form" onSubmit={handleSubmit} noValidate>

              <div className={`mm-dr-field${errors.fullName ? ' has-error' : ''}`}>
                <label htmlFor="fullName">Full name</label>
                <input
                  id="fullName"
                  type="text"
                  autoComplete="name"
                  placeholder="Jane Smith"
                  value={fields.fullName}
                  onChange={set('fullName')}
                />
                {errors.fullName && <span className="mm-dr-error">{errors.fullName}</span>}
              </div>

              <div className={`mm-dr-field${errors.company ? ' has-error' : ''}`}>
                <label htmlFor="company">Company</label>
                <input
                  id="company"
                  type="text"
                  autoComplete="organization"
                  placeholder="Smith Financial Planning"
                  value={fields.company}
                  onChange={set('company')}
                />
                {errors.company && <span className="mm-dr-error">{errors.company}</span>}
              </div>

              <div className={`mm-dr-field${errors.email ? ' has-error' : ''}`}>
                <label htmlFor="email">Work email</label>
                <input
                  id="email"
                  type="email"
                  autoComplete="email"
                  placeholder="jane@smithfp.com.au"
                  value={fields.email}
                  onChange={set('email')}
                />
                {errors.email && <span className="mm-dr-error">{errors.email}</span>}
              </div>

              <div className={`mm-dr-field${errors.country ? ' has-error' : ''}`}>
                <label htmlFor="country">Country</label>
                <div className="mm-dr-select-wrap">
                  <select
                    id="country"
                    value={fields.country}
                    onChange={set('country')}
                  >
                    <option value="">Select your country</option>
                    {COUNTRIES.map((c) => (
                      <option key={c} value={c}>{c}</option>
                    ))}
                  </select>
                  <svg className="mm-dr-chevron" width="16" height="16" viewBox="0 0 24 24"
                    fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                    strokeLinejoin="round" aria-hidden="true">
                    <path d="m6 9 6 6 6-6"/>
                  </svg>
                </div>
                {errors.country && <span className="mm-dr-error">{errors.country}</span>}
              </div>

              {status === 'error' && (
                <div className="mm-dr-api-error">
                  Something went wrong — please try again or email{' '}
                  <a href="mailto:info@moneymindprofile.com">info@moneymindprofile.com</a>
                </div>
              )}

              <button
                type="submit"
                className="mm-btn mm-btn-primary mm-btn-lg mm-dr-submit"
                disabled={status === 'submitting'}
              >
                {status === 'submitting' ? 'Sending…' : 'Request demo'}
              </button>

              <p className="mm-dr-legal">
                By submitting you agree to our{' '}
                <Link href="/legal/privacy-policy">Privacy Policy</Link>.
                We&apos;ll never share your details.
              </p>
            </form>

            <aside className="mm-dr-aside">
              <h3>What to expect</h3>
              <ul className="mm-dr-checklist">
                {[
                  'A personalised walkthrough with a MoneyMind specialist',
                  'See real client behavioural profiles in action',
                  'Learn how to integrate MoneyMind into your advisory process',
                  'Get answers to your specific use-case questions',
                  '30–45 minutes, no obligation',
                ].map((item) => (
                  <li key={item}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
                      stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"
                      strokeLinejoin="round" aria-hidden="true">
                      <path d="M20 6 9 17l-5-5"/>
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>

              <div className="mm-dr-trial-note">
                <p>Prefer to explore first?</p>
                <a href="https://auth.moneymindprofile.com/#signup" className="mm-btn mm-btn-ghost">
                  Start free 14-day trial
                </a>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
