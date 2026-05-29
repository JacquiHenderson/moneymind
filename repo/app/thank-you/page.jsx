import Link from 'next/link';

export const metadata = {
  title: 'Thank you — MoneyMind',
  description: "Thanks for reaching out — we'll be in touch within the hour.",
};

export default function ThankYouPage() {
  return (
    <main className="ty-page">
      <article className="ty-card">
        <Link href="/" className="ty-logo" aria-label="MoneyMind home">
          <img src="/assets/logos/moneymind-white.svg?v=5" alt="MoneyMind" />
        </Link>

        <span className="ty-icon" aria-hidden="true">
          <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12.5l4.5 4.5L20 7"/>
          </svg>
        </span>

        <p className="ty-eyebrow">Request received</p>

        <h1>
          Thank you for your <em>demo request.</em>
        </h1>

        <p>
          A member of the MoneyMind team has been notified and will reach out
          shortly. In the meantime, check your inbox — we&apos;ve sent through the
          MoneyMind demonstration link and an overview of what to expect next.
        </p>

        <div className="ty-actions">
          <a href="https://mail.google.com" target="_blank" rel="noopener" className="mm-btn mm-btn-primary mm-btn-lg">Check your inbox</a>
          <Link href="/" className="mm-btn mm-btn-ghost mm-btn-lg">Back to home</Link>
        </div>

        <div className="ty-meta">
          Need to reach us sooner? Email <a href="mailto:info@moneymindprofile.com">info@moneymindprofile.com</a>
        </div>
      </article>
    </main>
  );
}
