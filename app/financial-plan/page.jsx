import Link from 'next/link';
import { pageMeta } from '../../lib/seo';
import FinancialPlan from '../../components/FinancialPlan';

export const metadata = pageMeta({
  title: 'Sample Financial Plan — MoneyMind',
  description:
    'A sample financial plan showing how a MoneyMind behavioural profile is woven into a standard financial plan — cash flow, wealth, investments, retirement, and estate. Not personal financial advice.',
  path: '/financial-plan',
  noindex: true,
});

export default function FinancialPlanPage() {
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
            <Link href="/#security">Security</Link>
            <Link href="/regulatory-alignment">Compliance</Link>
          </nav>
          <Link href="/request-demo" className="lp-cta">Request demo</Link>
        </div>
      </header>

      <main className="fp-page">
        <Link href="/for-advisors" className="bd-back">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M19 12H5M12 19l-7-7 7-7" /></svg>
          Back to financial advisors
        </Link>
        <FinancialPlan />
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
