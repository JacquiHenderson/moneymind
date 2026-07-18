import { pageMeta } from '../../lib/seo';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Logos from '../../components/Logos';
import DemoForm from '../../components/DemoForm';
import DemoTestimonials from '../../components/DemoTestimonials';

export const metadata = pageMeta({
  title: 'Request a demo — MoneyMind',
  description:
    'See how MoneyMind gives financial advisors an expert read on every client — a discovery process worth talking about. Request a demo.',
  path: '/request-demo',
});

const HERO_CHECKS = [
  {
    lead: 'Win trust faster.',
    rest: 'Accelerate trust and lift advice-acceptance rates.',
  },
  {
    lead: 'Differentiate at scale.',
    rest: "As AI takes on an advisor's workload, lead on what it can't replicate — human understanding.",
  },
  {
    lead: 'Turn every touchpoint into top-of-funnel.',
    rest: 'Warm, engaged, organic leads at any stage.',
  },
  {
    lead: 'Know how clients will react before markets move.',
    rest: 'Cohort-level insights, built in.',
  },
  {
    lead: 'Keep clients for generations.',
    rest: 'A profile the whole family shares — so relationships pass down, not away.',
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
              behavioral finance degree required. Adapts to your advice workflow.
            </p>
            <ul className="rd-checklist">
              {HERO_CHECKS.map((c) => (
                <li key={c.lead}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                    strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                  <span>
                    <strong>{c.lead}</strong> {c.rest}
                  </span>
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

      <Logos />

      <Footer />
    </div>
  );
}
