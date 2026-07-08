'use client';
import { useState, useMemo } from 'react';

// domain | name | source instrument | stops [left, mid, right] | type (dir/cal/pref) | target stop index (or null) | verbatim meaning
const DATA = [
  // Saving
  ['Saving', 'Discipline', 'Financial Decision Making', ['Building', 'Steady', 'Strong'], 'dir', 2,
    'Ability to delay gratification for future benefit. Strong, consistent self-control sustains saving habits (Strong) vs frequent impulsive decisions undermine saving plans (Building).'],
  ['Saving', 'Action Orientation', 'Financial Decision Making', ['Building', 'Steady', 'Strong'], 'dir', 2,
    'Decisive, translates saving intentions into action without hesitation (Strong) vs delays or avoids saving decisions despite knowing what to do (Building).'],
  ['Saving', 'Financial Acumen', 'Financial Foundations', ['Building', 'Steady', 'Strong'], 'dir', 2,
    'Strong across financial capability, confidence, knowledge, and experience (Strong) vs limited financial acumen across capability, confidence, knowledge, and experience (Building).'],
  ['Saving', 'Time Orientation', 'Financial Decision Making', ['Present-Bias', 'Moderate', 'Future-Bias'], 'dir', 2,
    'Naturally defers gratification for greater future saving reward (Future-Bias) vs immediate rewards consistently override future saving goals and under-saving (Present-Bias).'],
  ['Saving', 'Abundance', 'Financial Decision Making', ['Building', 'Steady', 'Strong'], 'dir', 2,
    'Approach money from sufficiency, which frees thinking for confident, proactive saving decisions (Strong) vs scarcity mindset narrows saving decisions and overlooks existing resources (Building).'],

  // Spending
  ['Spending', 'Impulse Control', 'Financial Decision Making', ['Building', 'Steady', 'Strong'], 'dir', 2,
    'Strong self-control when spending opportunities arise, and social spending pressure has little effect (Strong) vs frequent reactive purchasing with saving plan abandonment (Building).'],
  ['Spending', 'Spending Attitude', 'Financial Decision Making', ['Underspend', 'Balanced', 'Overspend'], 'cal', 1,
    'Holds back from spending, under-invests in life quality, including on purchases that would benefit them (Underspend) vs spends more than intended - compulsive-buying, lifestyle inflation absorbing income, debt accumulation (Overspend).'],
  ['Spending', 'Emotional Spending', 'Financial Decision Making', ['Frequent', 'Balanced', 'Occasional'], 'dir', 2,
    'Emotional state rarely drives unplanned expenditure, strong emotional regulation (Occasional) vs spending is a primary coping mechanism for emotional regulation (Frequent).'],

  // Retirement Planning
  ['Retirement Planning', 'Future Self-Connection', 'Financial Decision Making', ['Building', 'Steady', 'Strong'], 'dir', 2,
    'Strong, vivid connection to future-self, anchors retirement planning in concrete goals and vision (Strong) vs weak connection to future self makes retirement feel abstract and distant (Building).'],
  ['Retirement Planning', 'Optimism', 'Financial Decision Making', ['Pessimistic', 'Optimistic', 'Realistic'], 'cal', 2,
    'Well-calibrated optimism drives strong, sustained retirement planning (Realistic) vs an overly optimistic (too ambitious) or pessimistic (weak belief) negatively impacts retirement (Optimistic & Pessimistic).'],
  ['Retirement Planning', 'Return Expectations', 'Financial Foundations', ['Unrealistic', 'Approximate', 'Realistic'], 'dir', 2,
    'Realistic return expectations aligned with long-term averages support sound retirement projections (Realistic) vs unrealistic return expectations (below 2% or above 12%) distort retirement projections (Unrealistic).'],
  ['Retirement Planning', 'Financial Acumen', 'Financial Foundations', ['Building', 'Steady', 'Strong'], 'dir', 2,
    'Strong financial capability, confidence, and knowledge support informed retirement decisions (Strong) vs limited financial acumen weakens confidence in retirement decisions (Building).'],
  ['Retirement Planning', 'Certainty', 'Financial Decision Making', ['Certainty-Seeking', 'Growth-Seeking', 'Balanced'], 'pref', null,
    'Strong preference for income certainty, knowing what arrives each month, matters more than potential upside (Certainty-Seeking) vs low preference for income certainty, comfortable with growth and market variability (Growth-Seeking).'],
  ['Retirement Planning', 'Legacy Orientation', 'Financial Foundations', ['Present-Focused', '', 'Legacy-Focused'], 'pref', null,
    'Strongly legacy-motivation in retirement. Leave a legacy pool (Legacy-Focused) vs present-focused motivation in retirement. Spending over leaving a legacy (Present-Focused).'],

  // Market Response
  ['Market Response', 'Discipline', 'Financial Decision Making', ['Building', 'Steady', 'Strong'], 'dir', 2,
    'Strong discipline under market pressure prevents panic-driven decisions (Strong) vs limited self-control under market pressure increases risk of panic-driven selling (Building).'],
  ['Market Response', 'Financial Anxiety', 'Financial Foundations', ['High-Anxiety', 'Moderate-Anxiety', 'Low-Anxiety'], 'dir', 2,
    'low anxiety allows clear-headed decision-making without emotional interference (Low-Anxiety) vs high anxiety impairs sleep, mood, and financial decision-making capacity (High-Anxiety).'],
  ['Market Response', 'Abundance', 'Financial Decision Making', ['Building', 'Steady', 'Strong'], 'dir', 2,
    'Abundance mindset prevents market losses from feeling existentially threatening (Strong) vs scarcity mindset amplifies emotional weight of market losses and may trigger panic (Building).'],
  ['Market Response', 'Resilience', 'Financial Foundations', ['Building', 'Steady', 'Strong'], 'dir', 2,
    'High capacity with strong recovery confidence across financial challenges (Strong) vs setbacks severely impair financial functioning and recovery confidence is low (Building).'],
  ['Market Response', 'Optimism', 'Financial Decision Making', ['Pessimistic', 'Optimistic', 'Realistic'], 'cal', 2,
    'Well-calibrated optimism maintains rational market perspective (Realistic) vs an overly optimistic (ignoring red flags) or pessimistic (amplified threats) negatively impacts response (Optimistic & Pessimistic).'],
  ['Market Response', 'Investment Experience', 'Financial Foundations', ['Building', 'Steady', 'Strong'], 'dir', 2,
    'Experience with market volatility provides tested emotional resilience (Strong) vs limited experience with market volatility means untested reactions to real losses (Building).'],
  ['Market Response', 'Overconfidence', 'Financial Foundations', ['Sub-Optimal', 'Moderate', 'Optimal'], 'cal', 2,
    'Reads market signals with well-calibrated confidence, responds to information without over-conviction or dismissing contrary evidence (Optimal) vs strong conviction about market direction causes dismissal of contrary signals and over-trading on noise (Sub-Optimal).'],

  // Investment
  ['Investment', 'Financial Confidence', 'Financial Foundations', ['Building', 'Steady', 'Strong'], 'dir', 2,
    'Confident, capable, and actively engaged in investment decisions (Strong) vs low financial confidence leads to investment avoidance (Building).'],
  ['Investment', 'Adaptability', 'Financial Decision Making', ['Consistent', 'Balanced', 'Flexible'], 'dir', 2,
    'Highly flexible and responsive to investment strategy changes (Flexible) vs rigid approach to investment strategy changes, risks staying in underperforming allocations too long (Consistent).'],
  ['Investment', 'Motivation', 'Financial Decision Making', ['Security-Driven', 'Balanced', 'Growth-Driven'], 'pref', null,
    'Reward and opportunity focused, pursues investment growth (Growth-Driven) vs prevention and security focused, prioritises protecting capital over growing it (Security-Driven).'],
  ['Investment', 'Regret-Aversion', 'Risk Profile', ['Regret-Sensitive', 'Balanced', 'Regret-Tolerant'], 'dir', 2,
    'Makes investment decisions without excessive fear of regret (Regret-Tolerant) vs fear of making wrong investment decisions causes paralysis (Regret-Sensitive).'],
  ['Investment', 'Ownership (Locus of Control)', 'Financial Decision Making', ['Building', 'Steady', 'Strong'], 'dir', 2,
    'Believe their own research and decisions drive investment outcomes (Strong) vs investment outcomes are determined by luck or market forces beyond their control (Building).'],
].map(([domain, name, source, stops, type, target, meaning]) => ({ domain, name, source, stops, type, target, meaning }));

const DOMAINS = ['Saving', 'Spending', 'Retirement Planning', 'Market Response', 'Investment'];

// Split a verbatim meaning at " vs ", using the trailing (bracket word) as each pole heading.
function splitPoles(meaning, stops, target, type) {
  const idx = meaning.indexOf(' vs ');
  if (idx === -1) return [{ label: null, body: meaning.trim(), role: 'neutral' }];
  const parts = [meaning.slice(0, idx), meaning.slice(idx + 4)];
  const targetLabel = target !== null && target !== undefined ? stops[target] : null;
  return parts.map((part) => {
    const m = part.match(/^([\s\S]*)\(([^()]*)\)\s*\.?\s*$/);
    let label = null;
    let body = part.trim();
    if (m) { body = m[1].trim(); label = m[2].trim(); }
    body = body.replace(/[.\s]+$/, '');
    if (body) body = body.charAt(0).toUpperCase() + body.slice(1) + '.';
    let role;
    if (type === 'pref' || targetLabel === null) role = 'neutral';
    else role = label === targetLabel ? 'hi' : 'lo';
    return { label, body, role };
  });
}

function Construct({ c }) {
  const poles = splitPoles(c.meaning, c.stops, c.target, c.type);
  // Fill to the target position on the low→high axis (directional → high end,
  // calibrated → balanced middle, preference → neutral centre).
  const fillPct = c.target != null ? (c.target / (c.stops.length - 1)) * 100 : 50;
  const lowLabel = c.stops[0];
  const highLabel = c.stops[c.stops.length - 1];
  return (
    <article className="bd-card">
      <div className="bd-card-top">
        <div>
          <div className="bd-cname">{c.name}</div>
          <div className="bd-tags">
            <span className="bd-tag">{c.domain}</span>
            <span className="bd-tag">Section Source: {c.source}</span>
          </div>
        </div>
      </div>

      <div className="bd-meter">
        <div className="bd-bar">
          <span className="bd-bar-fill" style={{ width: `${fillPct}%` }} />
        </div>
        <div className="bd-bar-labels">
          <span className="bd-bar-label">{lowLabel}</span>
          <span className="bd-bar-label">{highLabel}</span>
        </div>
      </div>

      <div className="bd-meaning">
        <div className="bd-meaning-label">Meaning</div>
        <div className="bd-poles">
          {poles.map((pl, i) => (
            <div className="bd-pole" key={i}>
              {pl.label && (
                <div className={`bd-pole-h bd-pole-h--${pl.role}${pl.label === 'Regret-Sensitive' ? ' bd-pole-h--danger' : ''}`}>
                  {pl.label}
                </div>
              )}
              <div className="bd-pole-b">{pl.body}</div>
            </div>
          ))}
        </div>
      </div>
    </article>
  );
}

export default function BehaviouralDesk() {
  // Always show one domain at a time — the page never lands on the full set.
  const [domain, setDomain] = useState(DOMAINS[0]);
  const [query, setQuery] = useState('');

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    return DATA.filter((c) => {
      if (c.domain !== domain) return false;
      if (q && !(`${c.name} ${c.meaning}`.toLowerCase().includes(q))) return false;
      return true;
    });
  }, [domain, query]);

  return (
    <div className="bd-desk">
      <div className="bd-controls">
        <div className="bd-search-row">
          <div className="bd-search">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <circle cx="11" cy="11" r="7" /><path d="m21 21-4.3-4.3" />
            </svg>
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search a construct — e.g. anxiety, regret, discipline…"
              aria-label="Search constructs"
            />
          </div>
          <div className="bd-count"><b>{results.length}</b> {domain} construct{results.length === 1 ? '' : 's'}</div>
        </div>
        <div className="bd-chip-group">
          <span className="bd-chip-label">Domain</span>
          {DOMAINS.map((d) => (
            <button
              key={d}
              type="button"
              className={`bd-chip${domain === d ? ' is-active' : ''}`}
              onClick={() => setDomain(d)}
            >
              {d}
            </button>
          ))}
        </div>
      </div>

      {results.length ? (
        <div className="bd-grid">
          {results.map((c) => <Construct key={`${c.domain}-${c.name}`} c={c} />)}
        </div>
      ) : (
        <div className="bd-empty">No constructs match — try clearing a filter or the search.</div>
      )}
    </div>
  );
}
