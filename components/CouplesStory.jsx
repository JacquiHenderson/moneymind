// Couple-story design — mirrors ClientStory exactly (same hiw-* layout, font,
// and Playbook steps), with couple-specific copy. Used inside the Platform
// "Couples" tab so it renders identically to the MoneyPattern tab.
const SCENARIOS = [
  {
    tag: 'Briefed on the couple',
    title: 'Before the first meeting',
    body: "The conversation starts with the couple. Jenny and John share the foundations — steady savers who hold steady when markets move, both want to leave a legacy. The tension sits in spending and risk: John's an impulsive spender with a scarcity mindset who acts fast; Jenny's a considered spender and a cautious, certainty-seeking investor.",
    aligned: 'Saving · Market Response · Legacy · 9% return expectations',
    difference: 'Spending · Investment · Certainty · Action Orientation · Anxiety',
  },
  {
    tag: 'Trust in minutes',
    title: 'In the room',
    body: "Advice is framed to both patterns — one shared plan, two ways in. Give John clear actions and quick wins; give Jenny certainty and time to deliberate, then agree a joint spending guardrail together. Trust that used to take months forms in the first conversation, with both of them.",
  },
  {
    tag: 'Panic flagged early',
    title: 'When markets move',
    body: "Both hold steady in a downturn, but John's high anxiety and Jenny's need for certainty surface before markets fall. Timely, pattern-matched nudges for each partner keep them invested — and on the same page.",
  },
  {
    done: true,
    title: 'Between meetings',
    body: "The same insight powers each partner's own MoneyPattern — coaching John's spending and building Jenny's confidence between reviews, so progress compounds together.",
  },
];

export default function CouplesStory() {
  return (
    <div className="hiw-grid hiw-grid-tab">
      <div className="hiw-card">
        <div className="hiw-id">
          <span className="hiw-avatar-couple">
            <span className="hiw-avatar">Je</span>
            <span className="hiw-avatar">Jo</span>
          </span>
          <div>
            <div className="hiw-name">Jenny &amp; John Smith</div>
            <div className="hiw-meta">Ages 50 &amp; 51 · Accountant &amp; CTO</div>
          </div>
        </div>

        <div className="hiw-archetype">
          <span className="hiw-archetype-label">Archetypes</span>
          <span className="hiw-archetype-name">The Quiet Worrier &amp; The Pragmatic Realist</span>
        </div>

        <div className="hiw-mp">
          <span className="hiw-mp-label">Where they align &amp; differ</span>
          <picture>
            <source srcSet="/assets/opt/product/playbook-light.avif?v=9" type="image/avif" />
            <source srcSet="/assets/opt/product/playbook-light.webp?v=9" type="image/webp" />
            <img className="hiw-mp-img" src="/assets/opt/product/playbook-light.png?v=9"
              width="1636" height="1780" loading="lazy" decoding="async"
              alt="Jenny & John Smith combined financial snapshot with behavioral traits marked aligned or different across five dimensions." />
          </picture>
        </div>
      </div>

      <div className="hiw-scenarios">
        <h3 className="hiw-scenarios-title">Playbook</h3>
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
                {(s.aligned || s.difference) && (
                  <div className="hiw-step-chips">
                    {s.aligned && (
                      <p className="hiw-step-chip"><span className="hiw-chip hiw-chip-aligned">Aligned</span>{s.aligned}</p>
                    )}
                    {s.difference && (
                      <p className="hiw-step-chip"><span className="hiw-chip hiw-chip-diff">Difference</span>{s.difference}</p>
                    )}
                  </div>
                )}
              </div>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
