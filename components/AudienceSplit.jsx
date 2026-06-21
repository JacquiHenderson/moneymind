import Link from 'next/link';

export default function AudienceSplit() {
  return (
    <section className="mm-section mm-audience" id="audiences" data-screen-label="Two audiences">
      <div className="mm-container">
        <div className="mm-section-head center">
          <span className="eyebrow">Who it&apos;s for</span>
          <h2>Two audiences. One platform.</h2>
        </div>

        <div className="mm-audience-grid">
          <article className="mm-aud mm-aud-adviser" data-screen-label="For advisers">
            <header className="mm-aud-head">
              <span className="mm-aud-eyebrow">For practices</span>
              <h3>Financial Advisors</h3>
              <p className="mm-aud-tag">Decode insights. Guide action. Share success.</p>
            </header>
            <div className="mm-aud-body">
              <p>
                MoneyMind is the starting point for everything in your advice process —
                and the reason prospective clients move from curious to committed. The
                more you know about your client, the less work you have to do to win
                them over.
              </p>
              <p>
                Replace your outdated risk questionnaire for a tool that uncovers
                deeper behavioral insights, works as a powerful lead magnet, and
                accelerates client trust.
              </p>
            </div>
            <Link href="/for-advisors" className="mm-cta-pill mm-cta-pill-light" aria-label="Financial advisor — learn more">
              <span>Financial Advisor</span>
              <svg width="40" height="14" viewBox="0 0 40 14" fill="none" aria-hidden="true">
                <path d="M1 7h36M30 1l7 6-7 6" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          </article>

          <article className="mm-aud mm-aud-fund" data-screen-label="For fund providers">
            <header className="mm-aud-head">
              <span className="mm-aud-eyebrow on-blue">For investment platforms</span>
              <h3>Fund Providers</h3>
              <p className="mm-aud-tag on-blue">Predict decisions. Prevent churn. Drive growth.</p>
            </header>
            <div className="mm-aud-body on-blue">
              <p>
                MoneyMind is an AI behavioral intelligence platform that can predict
                investor financial patterns across cohorts. Unlock a new dimension of
                investor data — go beyond demographics and account balances — capture
                the psychological drivers behind your investors&apos; financial decisions.
              </p>
              <p>
                Expand your data lake with behavioral insights across your entire
                investor base — personalize products and services at scale, anticipate
                churn, and protect AUM.
              </p>
            </div>
            <Link href="/for-fund-providers" className="mm-cta-pill mm-cta-pill-yellow" aria-label="Fund provider — learn more">
              <span>Fund Provider</span>
              <svg width="40" height="14" viewBox="0 0 40 14" fill="none" aria-hidden="true">
                <path d="M1 7h36M30 1l7 6-7 6" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          </article>
        </div>
      </div>
    </section>
  );
}
