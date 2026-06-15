import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { pageMeta, SITE_URL } from '../../lib/seo';

export const metadata = pageMeta({
  title: 'Watch the Demo — MoneyMind',
  description: "See MoneyMind's AI behavioural intelligence in action. Watch how we give financial advisors a psychological blueprint of how clients make financial decisions.",
  path: '/demo',
});

const videoSchema = {
  '@context': 'https://schema.org',
  '@type': 'VideoObject',
  name: 'MoneyMind product demo',
  description:
    'See how MoneyMind decodes how each client really handles money — saving, spending, retirement, investing, and market swings.',
  thumbnailUrl: 'https://i.ytimg.com/vi/EVCVjWLilpA/maxresdefault.jpg',
  embedUrl: 'https://www.youtube-nocookie.com/embed/EVCVjWLilpA',
  contentUrl: 'https://www.youtube.com/watch?v=EVCVjWLilpA',
  // TODO: set to the video's real publish date.
  uploadDate: '2025-01-01',
  publisher: { '@type': 'Organization', name: 'MoneyMind', url: SITE_URL },
};

export default function DemoPage() {
  return (
    <div className="mm-page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(videoSchema) }}
      />
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
                loading="lazy"
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
