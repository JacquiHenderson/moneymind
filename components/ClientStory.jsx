// Client-story design (profile card + advice-workflow scenarios).
// Used inside the Platform "MoneyPattern" tab. Styling lives under the
// hiw-* rules in globals.css.
const SCENARIOS = [
  {
    tag: 'Briefed on the person',
    title: 'Before the first meeting',
    body: "The conversation starts with the human, not a fact-find. Sarah's an emotional spender with a scarcity mindset, deliberates on financial decisions, and an impulsive-responder to markets.",
  },
  {
    tag: 'Trust in minutes',
    title: 'In the room',
    body: "Advice is framed to her pattern — small, reassuring steps. Trust that used to take months forms in the first conversation. Advice is accepted, as it's aligned to Sarah.",
  },
  {
    tag: 'Panic flagged early',
    title: 'When markets move',
    body: "Sarah's panic-sell risk surfaces before any downturn. Timely, pattern-matched nudge communications keep her invested — protecting the outcome and the relationship.",
  },
  {
    done: true,
    title: 'Between meetings',
    body: "The same insight powers Sarah's own MoneyPattern — coaches her habits between reviews, so progress compounds.",
  },
];

export default function ClientStory() {
  return (
    <div className="hiw-grid hiw-grid-tab">
      <div className="hiw-card">
        <div className="hiw-id">
          <span className="hiw-avatar">SM</span>
          <div>
            <div className="hiw-name">Sarah Mitchell</div>
            <div className="hiw-meta">Age 38 · GP &amp; new investor</div>
          </div>
        </div>

        <div className="hiw-archetype">
          <span className="hiw-archetype-label">Archetype</span>
          <span className="hiw-archetype-name">The Anxious Avoider</span>
        </div>

        <div className="hiw-mp">
          <span className="hiw-mp-label">Five dimensions</span>
          <picture>
            <source srcSet="/assets/opt/product/moneypattern-card.avif" type="image/avif" />
            <source srcSet="/assets/opt/product/moneypattern-card.webp" type="image/webp" />
            <img className="hiw-mp-img" src="/assets/opt/product/moneypattern-card.png"
              width="782" height="466" loading="lazy" decoding="async"
              alt="Sarah's MoneyPattern across five dimensions: saving (light saver), spending (impulsive spender), retirement planning (retirement-aware), market response (impulsive-responder), and investment (cautious investor)." />
          </picture>
        </div>
      </div>

      <div className="hiw-scenarios">
        <ol className="hiw-steps">
          {SCENARIOS.map((s, i) => (
            <li key={s.title} className="hiw-step">
              <span className={`hiw-step-num${s.done ? ' is-done' : ''}`}>
                {s.done ? (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12.5l4.5 4.5L20 7" /></svg>
                ) : i + 1}
              </span>
              <div className="hiw-step-content">
                <div className="hiw-step-head">
                  <h4>{s.title}</h4>
                  {s.tag && <span className="hiw-step-tag">{s.tag}</span>}
                </div>
                <p>{s.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
