import Link from 'next/link';

export default function CtaBand() {
  return (
    <section className="mm-cta-band" id="demo" data-screen-label="CTA band">
      <div className="mm-container">
        <div className="mm-cta-card">
          <h2>See it for yourself. Use it with your clients. Watch what happens.</h2>
          <p className="lead">
            Stop guessing how your clients will react. Start knowing. Give yourself the
            most powerful client-discovery tool in the advice industry.
          </p>
          <div className="mm-hero-actions">
            <a href="https://auth.moneymindprofile.com/#signup" className="mm-btn mm-btn-primary mm-btn-lg">Try for free</a>
            <Link href="/demo-request" className="mm-btn mm-btn-ghost mm-btn-lg">Request demo</Link>
          </div>
          <div className="mm-cta-trial">Demo it · Trial it · Transform it · 14 days on us</div>
        </div>
      </div>
    </section>
  );
}
