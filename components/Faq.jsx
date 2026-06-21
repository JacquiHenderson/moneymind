// Buyer-intent questions. Answers stay factual and aligned with on-page content so
// they're safe to surface as FAQPage structured data (GEO: citable by AI engines).
const FAQS = [
  {
    q: 'What is MoneyMind?',
    a: "MoneyMind is an AI behavioral intelligence platform that gives financial advisory firms and fund providers a psychological blueprint of how their clients make financial decisions — how they save, spend, plan for retirement, invest, and react when markets get messy. It's the behavioral layer a traditional risk profile is missing.",
  },
  {
    q: 'What is behavioral finance profiling?',
    a: 'Behavioral finance profiling maps the psychology and biases behind a person\'s financial decisions, rather than just their assets or stated risk score. MoneyMind\'s MoneyPattern™ captures this across five dimensions — saving, spending, retirement planning, market response, and investment.',
  },
  {
    q: 'How does MoneyMind work?',
    a: 'A client completes a five-minute profile (Quiz). MoneyMind turns it into their MoneyPattern™ and persona archetype, surfacing their superpowers, roadblocks, and risk behaviors. Advisors and clients access the insights through a dashboard and report download.',
  },
  {
    q: 'How is MoneyMind different from a risk-profile questionnaire?',
    a: 'A traditional risk questionnaire produces a single risk score. MoneyMind maps the full behavioral picture — tolerance, confidence, adaptability, regret aversion, loss response and more — so you can anticipate how a client will actually behave under pressure, not just where they sit on a scale.',
  },
  {
    q: 'Who is MoneyMind for?',
    a: 'MoneyMind is built for financial advisors and advisory firms who want to understand client psychology, and for fund providers who want to predict investor behavior, prevent churn, and personalize communications at scale.',
  },
  {
    q: 'How much does MoneyMind cost?',
    a: 'For advisors, MoneyMind is US$69 per advisor per month with a 14-day free trial and no lock-in contracts. Fund-provider pricing is bespoke and scales with the size of your investor base, integration depth, and data requirements.',
  },
  {
    q: 'Is my client data secure?',
    a: 'Yes. MoneyMind is built with data security and privacy as a foundation, with safeguards around how personal data is collected, processed, aggregated, and de-identified. Refer to the Security section.',
  },
];

export default function Faq() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQS.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };

  return (
    <section className="mm-section mm-faq" id="faq" data-screen-label="FAQ">
      <div className="mm-container">
        <div className="mm-section-head center">
          <span className="eyebrow">FAQ</span>
          <h2>Frequently asked questions</h2>
        </div>
        <div className="mm-faq-list">
          {FAQS.map((f, i) => (
            <details className="mm-faq-item" key={i}>
              <summary>{f.q}</summary>
              <p>{f.a}</p>
            </details>
          ))}
        </div>
      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
    </section>
  );
}
