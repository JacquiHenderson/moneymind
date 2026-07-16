import { pageMeta } from '../../lib/seo';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import DemoForm from '../../components/DemoForm';
import DemoTestimonials from '../../components/DemoTestimonials';
import HowItWorksSteps from '../../components/HowItWorksSteps';

export const metadata = pageMeta({
  title: 'Request a demo — MoneyMind',
  description:
    'See how MoneyMind gives financial advisors an expert read on every client — a discovery process worth talking about. Request a demo.',
  path: '/request-demo',
});

const HERO_CHECKS = [
  'Replace your outdated risk questionnaire with real insights, not just a score',
  'Know how clients will react before markets get messy',
  'Turn every touchpoint into your top-of-funnel for warm, engaged leads',
  'Build intergenerational client relationships with a profile families share',
];

const IMPACT = [
  {
    stat: '87%',
    statLabel: 'of what really drives client decisions, a risk score misses',
    title: 'Accelerate trust & differentiate at scale',
    body: 'Know how each client saves, spends, invests, and reacts. Advice tailored to what drives clients emotionally earns trust faster — so they commit sooner and stay longer.',
    source: 'Journal of Behavioral & Experimental Finance, 2024',
  },
  {
    stat: '7%',
    statLabel: "of an advisor's time goes to organically winning new clients",
    title: 'Turn top-of-funnel prospects into committed clients',
    body: 'Ignite organic growth and turn every touchpoint into an entry point. One embed link across your website, portal, and socials — invites warm, engaged leads.',
    source: 'Cerulli U.S. RIA Marketplace, 2025',
  },
  {
    stat: '27%',
    statLabel: "of heirs keep their parents' advisor — the rest walk",
    title: 'Keep clients across generations',
    body: "The $84 trillion wealth transfer is a retention cliff. Understand the whole family's dynamics, so the relationship transfers before the wealth does.",
    source: 'Cerulli, 2025',
  },
];

export default function RequestDemoPage() {
  return (
    <div className="rd-page">
      <Header currentPage="request-demo" />

      {/* Hero + form */}
      <section className="rd-hero">
        <div className="rd-hero-inner">
          <div className="rd-hero-copy">
            <span className="eyebrow">For financial advisors</span>
            <h1>Give your clients a discovery process worth talking about.</h1>
            <p className="rd-lede">
              From understanding how your clients make financial decisions to compliant
              risk profiling, you&apos;ll have an expert read on every client — no
              behavioral finance degree required.
            </p>
            <p className="rd-emph">Adapts to your own advice process.</p>
            <ul className="rd-checklist">
              {HERO_CHECKS.map((c) => (
                <li key={c}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                    strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                  {c}
                </li>
              ))}
            </ul>
          </div>

          <div className="rd-form-card" id="rd-form">
            <span className="eyebrow">Get started</span>
            <h2>Request a demo</h2>
            <DemoForm />
          </div>
        </div>
      </section>

      {/* Founder intro video */}
      <section className="rd-video">
        <div className="mm-container">
          <div className="rd-shead">
            <span className="eyebrow">Founder intro</span>
            <h2>The most powerful, all-in-one solution for client discovery.</h2>
          </div>
          <div className="mm-demo-video-frame">
            <div className="mm-demo-video-chrome">
              <div className="mm-platform-dot" />
              <div className="mm-platform-dot" />
              <div className="mm-platform-dot" />
            </div>
            <div className="mm-demo-embed">
              <iframe
                src="https://www.youtube-nocookie.com/embed/Iz9MEqnuriY?rel=0&modestbranding=1&color=white"
                title="MoneyMind founder introduction"
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="rd-testimonials">
        <div className="mm-container">
          <DemoTestimonials />
        </div>
      </section>

      {/* Impact stats */}
      <section className="rd-impact">
        <div className="mm-container">
          <div className="mm-impact-trio">
            <div className="mm-steps mm-steps-eyebrowless">
              {IMPACT.map((c) => (
                <div className="mm-step" key={c.title}>
                  <p className="mm-step-stat"><span className="mm-stat-inline">{c.stat}</span> {c.statLabel}</p>
                  <h4>{c.title}</h4>
                  <p>{c.body}</p>
                  <p className="mm-step-source">Source: {c.source}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="rd-how">
        <div className="mm-container">
          <div className="rd-shead">
            <span className="eyebrow">How it works</span>
            <h2>From onboarding to insight in three steps.</h2>
          </div>
          <HowItWorksSteps />
        </div>
      </section>

      <Footer />
    </div>
  );
}
