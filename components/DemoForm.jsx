'use client';
import { useState } from 'react';
import Link from 'next/link';

// NOTE: This form's submission wiring is duplicated verbatim from
// app/demo-request/page.jsx so leads reach the MoneyMind platform exactly
// the same way. Keep REGION_API, the POST endpoint, the field names and the
// honeypot in sync with that file — do not change the behavior here.
const REGION_API = {
  AU: 'https://au-api.moneymindprofile.com',
  NZ: 'https://au-api.moneymindprofile.com',
  UK: 'https://uk-api.moneymindprofile.com',
  US: 'https://us-api.moneymindprofile.com',
  CA: 'https://us-api.moneymindprofile.com',
  OTHER: 'https://au-api.moneymindprofile.com',
};

const COUNTRIES = [
  { code: 'AU', label: 'Australia' },
  { code: 'NZ', label: 'New Zealand' },
  { code: 'UK', label: 'United Kingdom' },
  { code: 'US', label: 'United States' },
  { code: 'CA', label: 'Canada' },
  { code: 'OTHER', label: 'Other' },
];

// Dial-code options for the mobile field. The four markets most prospects come
// from sit at the top; the rest follow alphabetically. Values are ISO codes so
// US and CA (both +1) stay distinct. Keep in sync with app/demo-request/page.jsx.
const DIAL_TOP = [
  { code: 'AU', label: 'Australia', dial: '+61' },
  { code: 'US', label: 'United States', dial: '+1' },
  { code: 'GB', label: 'United Kingdom', dial: '+44' },
  { code: 'CA', label: 'Canada', dial: '+1' },
];
const DIAL_REST = [
  { code: 'CN', label: 'China', dial: '+86' },
  { code: 'DK', label: 'Denmark', dial: '+45' },
  { code: 'FR', label: 'France', dial: '+33' },
  { code: 'DE', label: 'Germany', dial: '+49' },
  { code: 'HK', label: 'Hong Kong', dial: '+852' },
  { code: 'IN', label: 'India', dial: '+91' },
  { code: 'ID', label: 'Indonesia', dial: '+62' },
  { code: 'IE', label: 'Ireland', dial: '+353' },
  { code: 'IT', label: 'Italy', dial: '+39' },
  { code: 'JP', label: 'Japan', dial: '+81' },
  { code: 'MY', label: 'Malaysia', dial: '+60' },
  { code: 'NL', label: 'Netherlands', dial: '+31' },
  { code: 'NZ', label: 'New Zealand', dial: '+64' },
  { code: 'NO', label: 'Norway', dial: '+47' },
  { code: 'PH', label: 'Philippines', dial: '+63' },
  { code: 'SG', label: 'Singapore', dial: '+65' },
  { code: 'ZA', label: 'South Africa', dial: '+27' },
  { code: 'ES', label: 'Spain', dial: '+34' },
  { code: 'SE', label: 'Sweden', dial: '+46' },
  { code: 'CH', label: 'Switzerland', dial: '+41' },
  { code: 'AE', label: 'United Arab Emirates', dial: '+971' },
];
const DIAL_BY_CODE = Object.fromEntries([...DIAL_TOP, ...DIAL_REST].map((c) => [c.code, c.dial]));

export default function DemoForm() {
  const [fields, setFields] = useState({ fullName: '', company: '', email: '', mobileCountry: 'AU', mobile: '', country: '', website: '' });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // idle | submitting | success | error | ratelimited

  const set = (k) => (e) => setFields((f) => ({ ...f, [k]: e.target.value }));

  const validate = () => {
    const e = {};
    if (!fields.fullName.trim()) e.fullName = 'Please enter your name.';
    if (!fields.company.trim()) e.company = 'Please enter your company.';
    if (!fields.email.trim()) e.email = 'Please enter your email.';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email)) e.email = 'Please enter a valid email address.';
    if (!fields.mobile.trim()) e.mobile = 'Please enter your mobile number.';
    else if (fields.mobile.replace(/\D/g, '').length < 6) e.mobile = 'Please enter a valid mobile number.';
    if (!fields.country) e.country = 'Please select your country.';
    return e;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setErrors({});
    setStatus('submitting');
    const api = REGION_API[fields.country] || REGION_API.OTHER;
    try {
      const res = await fetch(`${api}/api/public/demo-request`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          full_name:    fields.fullName.trim(),
          company_name: fields.company.trim(),
          email:        fields.email.trim(),
          mobile_phone: `${DIAL_BY_CODE[fields.mobileCountry] || ''} ${fields.mobile.trim()}`.trim(),
          country:      fields.country,
          website:      fields.website, // honeypot — stays empty for humans
        }),
      });
      if (res.ok)                  setStatus('success');
      else if (res.status === 429) setStatus('ratelimited');
      else                         setStatus('error');
    } catch {
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div className="rd-form-success">
        <span className="rd-success-icon" aria-hidden="true">
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12.5l4.5 4.5L20 7" /></svg>
        </span>
        <p className="eyebrow">Your demo is ready!</p>
        <h3>Thanks, {fields.fullName.split(' ')[0]}.</h3>
        <p>Hit the button below to see MoneyMind in action in just 7 minutes.</p>
        <Link href="/demo" className="mm-btn mm-btn-primary mm-btn-lg rd-success-cta">
          Watch the Demo
        </Link>
      </div>
    );
  }

  return (
    <form className="mm-dr-form rd-form" onSubmit={handleSubmit} noValidate>
      <div className={`mm-dr-field${errors.fullName ? ' has-error' : ''}`}>
        <label htmlFor="rd-fullName">Full name</label>
        <input id="rd-fullName" type="text" autoComplete="name" placeholder="Jane Smith"
          value={fields.fullName} onChange={set('fullName')} />
        {errors.fullName && <span className="mm-dr-error">{errors.fullName}</span>}
      </div>

      <div className={`mm-dr-field${errors.company ? ' has-error' : ''}`}>
        <label htmlFor="rd-company">Company</label>
        <input id="rd-company" type="text" autoComplete="organization" placeholder="Smith Financial Planning"
          value={fields.company} onChange={set('company')} />
        {errors.company && <span className="mm-dr-error">{errors.company}</span>}
      </div>

      <div className={`mm-dr-field${errors.email ? ' has-error' : ''}`}>
        <label htmlFor="rd-email">Work email</label>
        <input id="rd-email" type="email" autoComplete="email" placeholder="jane@smithfp.com.au"
          value={fields.email} onChange={set('email')} />
        {errors.email && <span className="mm-dr-error">{errors.email}</span>}
      </div>

      <div className={`mm-dr-field${errors.mobile ? ' has-error' : ''}`}>
        <label htmlFor="rd-mobile">Mobile phone</label>
        <div className="mm-dr-phone">
          <div className="mm-dr-select-wrap mm-dr-dial">
            <select id="rd-mobileCountry" aria-label="Mobile phone country code"
              value={fields.mobileCountry} onChange={set('mobileCountry')}>
              {DIAL_TOP.map((c) => <option key={c.code} value={c.code}>{c.label} ({c.dial})</option>)}
              <option disabled>──────────</option>
              {DIAL_REST.map((c) => <option key={c.code} value={c.code}>{c.label} ({c.dial})</option>)}
            </select>
            <svg className="mm-dr-chevron" width="16" height="16" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="m6 9 6 6 6-6" />
            </svg>
          </div>
          <input id="rd-mobile" type="tel" inputMode="tel" autoComplete="tel-national"
            placeholder="412 345 678" value={fields.mobile} onChange={set('mobile')} />
        </div>
        {errors.mobile && <span className="mm-dr-error">{errors.mobile}</span>}
      </div>

      <div className={`mm-dr-field${errors.country ? ' has-error' : ''}`}>
        <label htmlFor="rd-country">Country</label>
        <div className="mm-dr-select-wrap">
          <select id="rd-country" value={fields.country} onChange={set('country')}>
            <option value="">Select your country</option>
            {COUNTRIES.map((c) => <option key={c.code} value={c.code}>{c.label}</option>)}
          </select>
          <svg className="mm-dr-chevron" width="16" height="16" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="m6 9 6 6 6-6" />
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
      {status === 'ratelimited' && (
        <div className="mm-dr-api-error">Too many attempts. Please try again shortly.</div>
      )}

      {/* Honeypot: hidden from humans, must stay empty */}
      <input name="website" tabIndex={-1} autoComplete="off" aria-hidden="true"
        value={fields.website} onChange={set('website')}
        style={{ position: 'absolute', left: '-9999px', width: '1px', height: '1px', opacity: 0 }} />

      <button type="submit" className="mm-btn mm-btn-primary mm-btn-lg mm-dr-submit" disabled={status === 'submitting'}>
        {status === 'submitting' ? 'Sending…' : 'Request demo'}
      </button>

      <p className="mm-dr-legal">
        By submitting you agree to our <Link href="/legal/privacy-policy">Privacy Policy</Link>.
        We&apos;ll never share your details.
      </p>
    </form>
  );
}
