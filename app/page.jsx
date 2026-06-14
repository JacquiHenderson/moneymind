import Header from '../../components/Header';
import Footer from '../../components/Footer';

export const metadata = {
  title: 'Watch the Demo — MoneyMind',
  description: "See MoneyMind's AI behavioural intelligence in action. Watch how we give financial advisors a psychological blueprint of how clients make financial decisions.",
};

export default function DemoPage() {
  return (
    <div className="mm-page">
      <Header currentPage="demo" />

      <section className="mm-demo-hero">
        <div className="mm-container">
          <p className="eyebrow">Product Demo</p>
          <h1>See MoneyMind in action</h1>
          <p className="mm-demo-sub">
            Watch how MoneyMind decodes how each client really handles money — saving, spending,
            retirement, investing, and market swings — so you design advice for the person,
            earn trust faster, and keep clients through volatile moments.
          </p>
        </div>
      </section>

      <section className="mm-demo-video-wrap">
        <div className="mm-container">
          <div className="mm-demo-video-frame">
            <div className="mm-demo-video-chrome">
              <div className="mm-platform-dot" />
              <div className="mm-platform-dot" />
              <div className="mm-platform-dot" />
            </div>
            <div className="mm-demo-embed">
              <iframe
                src="https://www.youtube-nocookie.com/embed/EVCVjWLilpA?rel=0&modestbranding=1&color=white"
                title="MoneyMind product demo"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </section>

      <section className="mm-demo-cta">
        <div className="mm-container">
          <h2>Ready to try it yourself?</h2>
<div className="mm-demo-cta-actions">
            <a href="https://auth.moneymindprofile.com/#signup" className="mm-btn mm-btn-primary mm-btn-lg">
              Start 14-day trial
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
