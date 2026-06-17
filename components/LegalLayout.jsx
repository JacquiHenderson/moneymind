import Link from 'next/link';

export default function LegalLayout({ title, meta, children }) {
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

      <main className="lp-page">
        <div className="lp-breadcrumbs">
          <Link href="/">Home</Link>
          <span>·</span>
          <span>{title}</span>
        </div>
        <span className="lp-eyebrow">Resource</span>
        <h1 className="lp-title">{title}</h1>
        {meta && <p className="lp-meta" dangerouslySetInnerHTML={{ __html: meta }} />}
        <div className="lp-prose">
          {children}
        </div>
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
