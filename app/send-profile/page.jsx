import Link from 'next/link';
import { pageMeta } from '../../lib/seo';
import DiscoveryWorkflow from '../../components/DiscoveryWorkflow';

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
            <Link href="/">Home</Link>
            <Link href="/for-advisors">Financial Advisors</Link>
            <Link href="/for-fund-providers">Fund Providers</Link>
            <Link href="/#security">Security</Link>
            <Link href="/regulatory-alignment">Compliance</Link>
          </nav>
          <Link href="/demo-request" className="lp-cta">Request demo</Link>
        </div>
      </header>

      <main className="bd-page">
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
            Send the Profile to your client&apos;s email with one click. Or, under More
            Actions, choose Copy Profile Link to add it to an email manually, or Schedule
            Profile to send it at a later date.
          </p>
          <div className="sp-shot">
            <div className="sp-shot-frame">
              <picture>
                <source srcSet="/assets/opt/product/send-profile-step1.avif" type="image/avif" />
                <source srcSet="/assets/opt/product/send-profile-step1.webp" type="image/webp" />
                <img
                  src="/assets/opt/product/send-profile-step1.png"
                  alt="MoneyMind client detail panel showing Send Profile and More Actions, with the Schedule Profile and Copy Profile Link options"
                  width="900"
                  height="1054"
                  loading="lazy"
                  decoding="async"
                />
              </picture>
              <span className="sp-shot-hl" aria-hidden="true" />
            </div>
          </div>
        </section>

        <section className="sp-step">
          <span className="sp-step-label">Step 2</span>
          <p className="sp-step-copy">
            We&apos;ve built a best-practice workflow so you know which sections to send
            when, what each one captures, and how long each takes your client to complete.
          </p>
          <p className="sp-step-copy sp-step-copy--next">
            Send different sections across your Pre-Discovery, Risk Profile, and Discovery
            Meeting stages.
          </p>
          <div className="sp-screen" role="img" aria-label="MoneyMind client dashboard with the Discovery Workflow scheduling popup open">
          <picture className="sp-screen-bg">
            <source srcSet="/assets/opt/product/send-profile-bg.avif" type="image/avif" />
            <source srcSet="/assets/opt/product/send-profile-bg.webp" type="image/webp" />
            <img
              src="/assets/opt/product/send-profile-bg.png"
              alt=""
              width="1600"
              height="806"
              loading="lazy"
              decoding="async"
            />
          </picture>
          <div className="sp-screen-scrim" aria-hidden="true" />
          <DiscoveryWorkflow />
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
