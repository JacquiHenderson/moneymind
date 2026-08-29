import Link from 'next/link';
import { pageMeta } from '../../lib/seo';

export const metadata = pageMeta({
  title: 'Send your first profile — MoneyMind',
  description:
    'A quick guide to sending and scheduling your first MoneyMind profile — which sections to choose at which stage of your advice process.',
  path: '/send-profile',
  noindex: true,
});

export default function SendProfilePage() {
  return (
    <div>
      <header className="lp-header">
        <div className="lp-header-inner">
          <Link href="/" className="lp-logo" aria-label="MoneyMind home">
            <img src="/assets/logos/moneymind-white.svg?v=5" alt="MoneyMind" />
          </Link>
          <nav className="lp-nav" aria-label="Primary">
            <Link href="/for-advisors">Financial Advisors</Link>
            <Link href="/for-fund-providers">Enterprise Firms</Link>
            <Link href="/regulatory-alignment">Compliance</Link>
            <Link href="/#security">Security</Link>
            <Link href="/#team">About</Link>
          </nav>
          <Link href="/request-demo" className="lp-cta">Request demo</Link>
        </div>
      </header>

      <main className="bd-page">
        <Link href="/help" className="bd-back">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M19 12H5M12 19l-7-7 7-7" /></svg>
          Back to help guides
        </Link>
        <section className="bd-hero">
          <span className="lp-eyebrow">Send Profile</span>
          <h1 className="bd-title">Send your first profile</h1>
          <p className="bd-standfirst">
            This guide walks you through sending and scheduling your first profile.
            Which sections to choose at which stage of your advice process.
          </p>
        </section>

        <section className="sp-step">
          <span className="sp-step-label">Step 1</span>
          <p className="sp-step-copy">
            Send a Profile to your client&apos;s email with one click. Or Copy Link to
            grab the profile link and send it manually to your client.
          </p>
          <div className="sp-shot">
            <div className="sp-shot-frame sp-shot-frame--wide">
              <picture>
                <source srcSet="/assets/opt/product/send-profile-step1.avif?v=2" type="image/avif" />
                <source srcSet="/assets/opt/product/send-profile-step1.webp?v=2" type="image/webp" />
                <img
                  src="/assets/opt/product/send-profile-step1.png?v=2"
                  alt="MoneyMind client detail panel with the Send Profile and Copy Link buttons"
                  width="1600"
                  height="860"
                  loading="lazy"
                  decoding="async"
                />
              </picture>
              <span className="sp-hl" style={{ left: '70%', top: '93.6%', width: '9%', height: '5.4%' }} aria-hidden="true" />
              <span className="sp-hl" style={{ left: '79.2%', top: '93.6%', width: '8.7%', height: '5.4%' }} aria-hidden="true" />
            </div>
          </div>
        </section>

        <section className="sp-step">
          <span className="sp-step-label">Step 2</span>
          <p className="sp-step-copy">
            Select, order, and send profile sections. As the client completes a section,
            they&apos;ll be asked to continue to the next, depending on how many sections
            you&apos;ve chosen to send out.
          </p>
          <p className="sp-step-copy sp-step-copy--next">
            Now means the profile will be sent to the client&apos;s email immediately.
          </p>
          <div className="sp-tip">
            <span className="sp-tip-label">Best practice</span>
            <ul>
              <li>
                Order and send the Financial Decision Making section first as a starting
                point — it has 24 questions that give you a good picture of your client.
              </li>
              <li>
                Order and send the Financial Foundations and Risk Tolerance &amp; Risk
                Capacity sections next; align this to when you usually send a risk profile
                questionnaire in your advice workflow.
              </li>
              <li>
                Risk Capacity will automatically calculate if you have your client&apos;s
                Employment, Education, and Financial Information in MoneyMind.
              </li>
            </ul>
          </div>
          <div className="sp-shot">
            <div className="sp-shot-frame sp-shot-frame--med">
              <picture>
                <source srcSet="/assets/opt/product/send-profile-step2.avif" type="image/avif" />
                <source srcSet="/assets/opt/product/send-profile-step2.webp" type="image/webp" />
                <img
                  src="/assets/opt/product/send-profile-step2.png"
                  alt="MoneyMind Select & Order Sections dialog, with a Send field set to Now and each profile section toggled on with an estimated completion time"
                  width="1200"
                  height="1064"
                  loading="lazy"
                  decoding="async"
                />
              </picture>
            </div>
          </div>
        </section>

        <section className="sp-step">
          <span className="sp-step-label">Step 3</span>
          <p className="sp-step-copy">
            Schedule the profile sections to go out at a specific time — click the
            calendar icon up top.
          </p>
          <div className="sp-shot">
            <div className="sp-shot-frame sp-shot-frame--med">
              <picture>
                <source srcSet="/assets/opt/product/send-profile-step3.avif?v=2" type="image/avif" />
                <source srcSet="/assets/opt/product/send-profile-step3.webp?v=2" type="image/webp" />
                <img
                  src="/assets/opt/product/send-profile-step3.png?v=2"
                  alt="MoneyMind Select & Order Sections dialog with the date and time picker open, scheduling the send for a specific date and time"
                  width="1200"
                  height="1189"
                  loading="lazy"
                  decoding="async"
                />
              </picture>
            </div>
          </div>
        </section>
      </main>

      <footer className="lp-footer">
        <div className="lp-footer-inner">
          <div className="lp-footer-brand">
            <img src="/assets/logos/moneymind-white.svg?v=5" alt="MoneyMind" />
            <span className="legal">© 2026 MoneyMind Profile · ABN 33 672 152 073</span>
          </div>
          <div className="lp-footer-links">
            <Link href="/regulatory-alignment">Compliance</Link>
            <Link href="/legal/privacy-policy">Privacy Policy</Link>
            <Link href="/legal/terms-of-use">Terms of Use</Link>
            <Link href="/legal/acceptable-use-policy">Acceptable Use</Link>
            <Link href="/legal/data-aggregation">Data Aggregation</Link>
            <Link href="/legal/data-processing-agreement">DPA</Link>
            <Link href="/legal/subprocessors">Sub-processors</Link>
            <Link href="/legal/repeat-infringer-policy">Repeat Infringer</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
