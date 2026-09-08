'use client';
import { useState, useMemo, useRef, useEffect } from 'react';

// domain | name | source instrument | stops [left, mid, right] | type (dir/cal/pref) | target stop index (or null) | verbatim meaning | description
const DATA = [
  // Saving
  ['Saving', 'Discipline', 'Financial Decision Making', ['Impulsive', 'Sometimes Disciplined', 'Disciplined'], 'dir', 2,
    'Ability to delay gratification for future benefit. Strong, consistent self-control sustains saving habits (Disciplined) vs frequent impulsive decisions undermine saving plans (Impulsive).',
    'The ability to resist impulses and consistently follow through on financial plans.'],
  ['Saving', 'Action Orientation', 'Financial Decision Making', ['Deliberative', 'Balanced', 'Action-Oriented'], 'dir', 2,
    'Decisive, translates saving intentions into action without hesitation (Action-Oriented) vs delays or avoids saving decisions despite knowing what to do (Deliberative).',
    'The tendency to consider and delay financial decisions or move readily into action.'],
  ['Saving', 'Financial Acumen', 'Financial Foundations', ['Building', 'Intermediate', 'Strong'], 'dir', 2,
    'Strong across financial capability, confidence, knowledge, and experience (Strong) vs limited financial acumen across capability, confidence, knowledge, and experience (Building).',
    'Overall financial preparedness across practical habits, confidence, knowledge and investment experience.'],
  ['Saving', 'Time Orientation', 'Financial Decision Making', ['Present-Bias', 'Balanced', 'Future-Bias'], 'dir', 2,
    'Naturally defers gratification for greater future saving reward (Future-Bias) vs immediate rewards consistently override future saving goals and under-saving (Present-Bias).',
    'The balance between prioritising immediate rewards and future financial outcomes.'],
  ['Saving', 'Abundance vs Scarcity', 'Financial Decision Making', ['Scarcity', 'Balanced', 'Abundance'], 'dir', 2,
    'Approach money from sufficiency, which frees thinking for confident, proactive saving decisions (Abundance) vs scarcity mindset narrows saving decisions and overlooks existing resources (Scarcity).',
    'The extent to which financial resources and opportunities feel constrained or available.'],

  // Spending
  ['Spending', 'Impulse Control', 'Financial Decision Making', ['Impulsive', 'Sometimes Disciplined', 'Disciplined'], 'dir', 2,
    'Strong self-control when spending opportunities arise, and social spending pressure has little effect (Disciplined) vs frequent reactive purchasing with saving plan abandonment (Impulsive).',
    'The ability to resist impulses and consistently follow through on financial plans.'],
  ['Spending', 'Spending Attitude', 'Financial Decision Making', ['Underspend', 'Balanced', 'Overspend'], 'cal', 1,
    'Holds back from spending, under-invests in life quality, including on purchases that would benefit them (Underspend) vs spends more than intended - compulsive-buying, lifestyle inflation absorbing income, debt accumulation (Overspend).',
    'The tendency to experience spending as uncomfortable or pleasurable, influencing how readily money is spent.'],
  ['Spending', 'Emotional Spending', 'Financial Decision Making', ['Frequent', 'Occasional', 'Rare'], 'dir', 2,
    'Emotional state rarely drives unplanned expenditure, strong emotional regulation (Rare) vs spending is a primary coping mechanism for emotional regulation (Frequent).',
    'How often spending is used to manage stress, anxiety or low mood.'],

  // Retirement Planning
  ['Retirement Planning', 'Future Self-Connection', 'Financial Decision Making', ['Building', 'Intermediate', 'Strong'], 'dir', 2,
    'Strong, vivid connection to future-self, anchors retirement planning in concrete goals and vision (Strong) vs weak connection to future self makes retirement feel abstract and distant (Building).',
    'How strongly someone connects with their future self and considers their future needs in today’s decisions.'],
  ['Retirement Planning', 'Optimism', 'Financial Decision Making', ['Pessimistic', 'Realistic', 'Optimistic'], 'cal', 1,
    'Well-calibrated optimism drives strong, sustained retirement planning (Realistic) vs an overly optimistic (too ambitious) or pessimistic (weak belief) negatively impacts retirement (Optimistic).',
    'The tendency to expect negative, realistic or positive future outcomes.'],
  ['Retirement Planning', 'Return Expectations', 'Financial Decision Making', ['Unrealistic', 'Approximate', 'Realistic'], 'dir', 2,
    'Realistic return expectations aligned with long-term averages support sound retirement projections (Realistic) vs unrealistic return expectations (below 2% or above 12%) distort retirement projections (Unrealistic).',
    'How closely expected investment returns align with realistic long-term outcomes.'],
  ['Retirement Planning', 'Financial Acumen', 'Financial Foundations', ['Building', 'Intermediate', 'Strong'], 'dir', 2,
    'Strong financial capability, confidence, and knowledge support informed retirement decisions (Strong) vs limited financial acumen weakens confidence in retirement decisions (Building).',
    'Understanding of core financial concepts such as compound interest, inflation and diversification.'],
  ['Retirement Planning', 'Certainty', 'Financial Decision Making', ['Certainty-Seeking', 'Balanced', 'Growth-Seeking'], 'pref', null,
    'Strong preference for income certainty, knowing what arrives each month, matters more than potential upside (Certainty-Seeking) vs low preference for income certainty, comfortable with growth and market variability (Growth-Seeking).',
    'The preference for predictable financial outcomes versus accepting variability for potential growth.'],
  ['Retirement Planning', 'Life vs Legacy', 'Financial Decision Making', ['Live Life', 'Balanced', 'Leave Legacy'], 'pref', null,
    'Strongly legacy-motivation in retirement. Leave a legacy pool (Leave Legacy) vs present-focused motivation in retirement. Spending over leaving a legacy (Live Life).',
    'The balance between using wealth to enjoy life and preserving it for future generations.'],

  // Market Response
  ['Market Response', 'Discipline', 'Financial Decision Making', ['Impulsive', 'Sometimes Disciplined', 'Disciplined'], 'dir', 2,
    'Strong discipline under market pressure prevents panic-driven decisions (Disciplined) vs limited self-control under market pressure increases risk of panic-driven selling (Impulsive).',
    'The ability to resist impulses and consistently follow through on financial plans.'],
  ['Market Response', 'Financial Anxiety', 'Financial Decision Making', ['High-Anxiety', 'Moderate-Anxiety', 'Low-Anxiety'], 'dir', 2,
    'low anxiety allows clear-headed decision-making without emotional interference (Low-Anxiety) vs high anxiety impairs sleep, mood, and financial decision-making capacity (High-Anxiety).',
    'The degree to which financial worry affects wellbeing, attention and decision-making.'],
  ['Market Response', 'Abundance vs Scarcity', 'Financial Decision Making', ['Scarcity', 'Balanced', 'Abundance'], 'dir', 2,
    'Abundance mindset prevents market losses from feeling existentially threatening (Abundance) vs scarcity mindset amplifies emotional weight of market losses and may trigger panic (Scarcity).',
    'The extent to which financial resources and opportunities feel constrained or available.'],
  ['Market Response', 'Resilience', 'Financial Decision Making', ['Building', 'Intermediate', 'Strong'], 'dir', 2,
    'High capacity with strong recovery confidence across financial challenges (Strong) vs setbacks severely impair financial functioning and recovery confidence is low (Building).',
    'The ability to cope with financial stress, recover from setbacks and remain effective under pressure.'],
  ['Market Response', 'Optimism', 'Financial Decision Making', ['Pessimistic', 'Realistic', 'Optimistic'], 'cal', 1,
    'Well-calibrated optimism maintains rational market perspective (Realistic) vs an overly optimistic (ignoring red flags) or pessimistic (amplified threats) negatively impacts response (Optimistic).',
    'The tendency to expect negative, realistic or positive future outcomes.'],
  ['Market Response', 'Investment Experience', 'Financial Foundations', ['Building', 'Intermediate', 'Strong'], 'dir', 2,
    'Experience with market volatility provides tested emotional resilience (Strong) vs limited experience with market volatility means untested reactions to real losses (Building).',
    'Practical familiarity with investing, particularly experiencing market fluctuations and downturns.'],
  ['Market Response', 'Overconfidence', 'Risk Profile', ['Elevated', 'Mostly Calibrated', 'Calibrated'], 'cal', 2,
    'Reads market signals with well-calibrated confidence, responds to information without over-conviction or dismissing contrary evidence (Calibrated) vs strong conviction about market direction causes dismissal of contrary signals and over-trading on noise (Elevated).',
    'How well confidence in financial judgement is matched to knowledge, evidence and uncertainty.'],

  // Investment
  ['Investment', 'Financial Confidence', 'Financial Foundations', ['Building', 'Intermediate', 'Strong'], 'dir', 2,
    'Confident, capable, and actively engaged in investment decisions (Strong) vs low financial confidence leads to investment avoidance (Building).',
    'Trust in one’s ability to understand, manage and make decisions about money.'],
  ['Investment', 'Adaptability', 'Financial Decision Making', ['Consistent', 'Balanced', 'Flexible'], 'dir', 2,
    'Highly flexible and responsive to investment strategy changes (Flexible) vs rigid approach to investment strategy changes, risks staying in underperforming allocations too long (Consistent).',
    'Willingness to adjust a financial approach as circumstances or evidence change.'],
  ['Investment', 'Motivation', 'Financial Decision Making', ['Security-Driven', 'Balanced', 'Growth-Driven'], 'pref', null,
    'Reward and opportunity focused, pursues investment growth (Growth-Driven) vs prevention and security focused, prioritises protecting capital over growing it (Security-Driven).',
    'The balance between protecting existing resources and pursuing growth or opportunity.'],
  ['Investment', 'Regret-Aversion', 'Risk Profile', ['Regret-Sensitive', 'Balanced', 'Regret-Tolerant'], 'dir', 2,
    'Makes investment decisions without excessive fear of regret (Regret-Tolerant) vs fear of making wrong investment decisions causes paralysis (Regret-Sensitive).',
    'How strongly anticipated regret influences financial choices and willingness to act.'],
  ['Investment', 'Ownership (Locus of Control)', 'Financial Decision Making', ['Circumstance-Led', 'Balanced', 'Self-Directed'], 'dir', 2,
    'Believe their own research and decisions drive investment outcomes (Self-Directed) vs investment outcomes are determined by luck or market forces beyond their control (Circumstance-Led).',
    'The extent to which financial outcomes are attributed to external circumstances or personal decisions and actions.'],
].map(([domain, name, source, stops, type, target, meaning, desc]) => ({ domain, name, source, stops, type, target, meaning, desc }));

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
          {c.desc && <p className="bd-cdesc">{c.desc}</p>}
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
  const [query, setQuery] = useState('');
  const [activeDomain, setActiveDomain] = useState(DOMAINS[0]);
  const sectionRefs = useRef({});
  const lockRef = useRef(false);
  const lockTimer = useRef(null);

  // Every domain flows down the page; search narrows across all of them.
  const groups = useMemo(() => {
    const q = query.trim().toLowerCase();
    return DOMAINS.map((d) => ({
      domain: d,
      items: DATA.filter((c) => {
        if (c.domain !== d) return false;
        if (q && !(`${c.name} ${c.desc} ${c.meaning}`.toLowerCase().includes(q))) return false;
        return true;
      }),
    })).filter((g) => g.items.length);
  }, [query]);

  const total = groups.reduce((n, g) => n + g.items.length, 0);

  // Scroll-spy: highlight the chip for whichever domain is currently in view.
  useEffect(() => {
    const sections = groups.map((g) => sectionRefs.current[g.domain]).filter(Boolean);
    if (!sections.length) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (lockRef.current) return; // ignore while a jump is animating
        // At the very bottom of the page the last (often short) section can't
        // reach the active band — pin it explicitly.
        if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4) {
          setActiveDomain(groups[groups.length - 1].domain);
          return;
        }
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) setActiveDomain(visible[0].target.dataset.domain);
      },
      { rootMargin: '-200px 0px -60% 0px', threshold: [0, 0.2, 0.5] }
    );
    sections.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [groups]);

  const jumpTo = (d) => {
    const el = sectionRefs.current[d];
    if (!el) return;
    // Lock the scroll-spy briefly so the smooth-scroll pass-through doesn't
    // steal the highlight from the domain the user actually picked.
    lockRef.current = true;
    clearTimeout(lockTimer.current);
    setActiveDomain(d);
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    lockTimer.current = setTimeout(() => { lockRef.current = false; }, 900);
  };

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
          <div className="bd-count"><b>{total}</b> construct{total === 1 ? '' : 's'}</div>
        </div>
        <div className="bd-chip-group">
          <span className="bd-chip-label">Jump to</span>
          {DOMAINS.map((d) => (
            <button
              key={d}
              type="button"
              className={`bd-chip${activeDomain === d ? ' is-active' : ''}`}
              onClick={() => jumpTo(d)}
            >
              {d}
            </button>
          ))}
        </div>
      </div>

      {groups.length ? (
        groups.map((g) => (
          <section
            key={g.domain}
            className="bd-domain-section"
            data-domain={g.domain}
            ref={(el) => { sectionRefs.current[g.domain] = el; }}
          >
            <div className="bd-domain-head">
              <h2 className="bd-domain-title">{g.domain}</h2>
              <span className="bd-domain-count">{g.items.length} construct{g.items.length === 1 ? '' : 's'}</span>
            </div>
            <div className="bd-grid">
              {g.items.map((c) => <Construct key={`${c.domain}-${c.name}`} c={c} />)}
            </div>
          </section>
        ))
      ) : (
        <div className="bd-empty">No constructs match — try clearing the search.</div>
      )}
    </div>
  );
}
