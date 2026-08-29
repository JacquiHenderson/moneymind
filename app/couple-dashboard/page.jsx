import Link from 'next/link';
import { pageMeta } from '../../lib/seo';

export const metadata = pageMeta({
  title: 'Join two individuals as a couple — MoneyMind',
  description:
    'A quick guide to joining two individuals together — their financial capital and human capital — into a side-by-side joint dashboard view.',
  path: '/couple-dashboard',
  noindex: true,
});

export default function CoupleDashboardPage() {
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
          <span className="lp-eyebrow">Joint</span>
          <h1 className="bd-title">Join two individuals as a couple</h1>
          <p className="bd-standfirst">
            This guide walks you through joining two individuals together, their
            financial capital and human capital, then provides a side-by-side
            comparison in a joint dashboard view.
          </p>
        </section>

        <section className="sp-step">
          <span className="sp-step-label">Step 1</span>
          <p className="sp-step-copy">
            Link two individuals together in the Client Details tab under the
            Partner/Spouse field.
          </p>
          <div className="sp-shot">
            <div className="sp-shot-frame sp-shot-frame--wide">
              <picture>
                <source srcSet="/assets/opt/product/couple-dashboard-step1.avif" type="image/avif" />
                <source srcSet="/assets/opt/product/couple-dashboard-step1.webp" type="image/webp" />
                <img
                  src="/assets/opt/product/couple-dashboard-step1.png"
                  alt="MoneyMind Client Details tab with the Partner/Spouse field linking a client to John Smith, showing Joint dashboard available"
                  width="1600"
                  height="859"
                  loading="lazy"
                  decoding="async"
                />
              </picture>
              <span className="sp-hl" style={{ left: '83.7%', top: '36.5%', width: '14%', height: '15%' }} aria-hidden="true" />
              <span className="sp-hl" style={{ left: '69.7%', top: '64.8%', width: '13.3%', height: '4.2%' }} aria-hidden="true" />
            </div>
          </div>
        </section>

        <section className="sp-step">
          <span className="sp-step-label">Step 2</span>
          <p className="sp-step-copy">
            Join a couple&apos;s assets together by ticking which fields you want to
            merge or keep separate in the household view.
          </p>
          <div className="sp-shot">
            <div className="sp-shot-frame sp-shot-frame--wide">
              <picture>
                <source srcSet="/assets/opt/product/couple-dashboard-step2.avif" type="image/avif" />
                <source srcSet="/assets/opt/product/couple-dashboard-step2.webp" type="image/webp" />
                <img
                  src="/assets/opt/product/couple-dashboard-step2.png"
                  alt="MoneyMind Joint with John Smith dialog, with tickable fields combining each partner's figures into household totals"
                  width="1600"
                  height="1001"
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
            Click the Joint Dashboard icon to launch directly from the client list.
          </p>
          <div className="sp-shot">
            <div className="sp-shot-frame sp-shot-frame--wide">
              <picture>
                <source srcSet="/assets/opt/product/couple-dashboard-step3.avif" type="image/avif" />
                <source srcSet="/assets/opt/product/couple-dashboard-step3.webp" type="image/webp" />
                <img
                  src="/assets/opt/product/couple-dashboard-step3.png"
                  alt="MoneyMind client list with a row action to View Joint Dashboard with John Smith"
                  width="1600"
                  height="856"
                  loading="lazy"
                  decoding="async"
                />
              </picture>
            </div>
          </div>
        </section>

        <section className="sp-step">
          <span className="sp-step-label">Step 4</span>
          <p className="sp-step-copy">
            Compare side-by-side your couple&apos;s behavioral traits. Alignments and
            differences are described neutrally to enhance your meetings and advice.
          </p>
          <div className="sp-shot">
            <div className="sp-shot-frame sp-shot-frame--wide">
              <picture>
                <source srcSet="/assets/opt/product/couple-dashboard-step4.avif" type="image/avif" />
                <source srcSet="/assets/opt/product/couple-dashboard-step4.webp" type="image/webp" />
                <img
                  src="/assets/opt/product/couple-dashboard-step4.png"
                  alt="MoneyMind joint dashboard comparing a couple's behavioral traits side by side, each row neutrally labelled Aligned or Difference"
                  width="1600"
                  height="857"
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
