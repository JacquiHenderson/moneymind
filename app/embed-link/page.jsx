import Link from 'next/link';
import { pageMeta } from '../../lib/seo';

export const metadata = pageMeta({
  title: 'Embed MoneyMind — MoneyMind',
  description:
    'Embed MoneyMind wherever your prospects are — digital advice journeys, client portal, marketing, social media, or QR codes at events — to maximize your top of funnel.',
  path: '/embed-link',
  noindex: true,
});

const EMBED_STEPS = [
  "To create embed links, as best practice, choose Financial Decision Making on its own. This gives you a two-minute entry point into your advice process — a first iteration of your prospect's MoneyPattern.",
  'If you want more of a diagnostic and a fuller MoneyPattern, add both Financial Foundations and Financial Decision Making to your embed link. These two sections together will take your prospect four minutes.',
  'You can also add tags to track where your top-of-funnel leads come from.',
  "Once you've copied your embed link, simply paste it into your email marketing, website, social media posts, or client portal. Create different links for different sources, using tags to track each one.",
  "If you want to capture a prospect's Financial Information, switch this on. This section captures high-level income, assets, and liability information to calculate Risk Capacity — we don't necessarily recommend it for initial engagement.",
];

// Bold key section names wherever they appear in the guide copy.
const BOLD_RE = /(Financial Decision Making|Financial Foundations)/g;
function renderCopy(text) {
  return text.split(BOLD_RE).map((part, i) =>
    part === 'Financial Decision Making' || part === 'Financial Foundations'
      ? <strong key={i}>{part}</strong>
      : part
  );
}

export default function EmbedLinkPage() {
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
          <Link href="/request-demo" className="lp-cta">Request demo</Link>
        </div>
      </header>

      <main className="bd-page">
        <Link href="/help" className="bd-back">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M19 12H5M12 19l-7-7 7-7" /></svg>
          Back to help guides
        </Link>
        <section className="bd-hero">
          <span className="lp-eyebrow">Embed Link</span>
          <h1 className="bd-title">Embed MoneyMind everywhere</h1>
          <p className="bd-standfirst">
            Embed MoneyMind wherever your prospects are — your digital advice journeys,
            client portal, marketing, social media, or QR codes at events — to maximize
            your top of funnel. Unlike traditional questionnaires, MoneyMind feels like a
            valuable personal insight tool, not a form.
          </p>
        </section>

        <div className="sp-figure">
          <picture>
            <source srcSet="/assets/opt/product/embed-guide.avif" type="image/avif" />
            <source srcSet="/assets/opt/product/embed-guide.webp" type="image/webp" />
            <img
              src="/assets/opt/product/embed-guide.png"
              alt="MoneyMind Embed Link screen — build a custom profile link by selecting sections and tagging by channel"
              width="1600"
              height="854"
              loading="lazy"
              decoding="async"
            />
          </picture>
        </div>

        <div className="sp-copy-block">
          {EMBED_STEPS.map((p, i) => (
            <p key={i}>{renderCopy(p)}</p>
          ))}
        </div>

        <div className="sp-figure sp-figure--last">
          <picture>
            <source srcSet="/assets/opt/product/embed-guide-2.avif" type="image/avif" />
            <source srcSet="/assets/opt/product/embed-guide-2.webp" type="image/webp" />
            <img
              src="/assets/opt/product/embed-guide-2.png"
              alt="MoneyMind Select & Order Sections modal — toggle sections on, add tags, then Generate & Copy Link"
              width="1600"
              height="861"
              loading="lazy"
              decoding="async"
            />
          </picture>
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
