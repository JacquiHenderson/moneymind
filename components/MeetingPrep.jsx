// Pre-Meeting Prep overlay — "Marcus Delaney" — reproduced as a page.
// A one-off document; content is inline.

const MM = () => <span className="mp-src mp-src--mm">◈ MoneyMind</span>;
const Src = ({ children }) => <span className="mp-src">{children}</span>;

function Table({ head, rows }) {
  return (
    <div className="fp-table-wrap">
      <table className="fp-table">
        <thead><tr>{head.map((h) => <th key={h}>{h}</th>)}</tr></thead>
        <tbody>
          {rows.map((r, i) => (
            <tr key={i}>{r.map((c, j) => <td key={j} className={j > 0 && j < r.length - 1 ? 'num' : undefined}>{c}</td>)}</tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function Pillar({ eyebrow, name, pattern, roadblocks, optimise }) {
  return (
    <div className="mp-pillar">
      <div className="mp-pillar-head">
        <span className="mp-pillar-eyebrow">{eyebrow}</span>
        <span className="mp-pillar-name">{name}</span>
      </div>
      <div className="mp-sub">Pattern</div>
      <p className="fp-p">{pattern}</p>
      <div className="mp-sub">Potential roadblocks</div>
      <p className="fp-p">{roadblocks}</p>
      <div className="mp-sub">Optimise your client</div>
      <ul className="mp-optimise">{optimise.map((o) => <li key={o}>{o}</li>)}</ul>
    </div>
  );
}

const FOUNDATIONS = [
  ['Understanding', 'Knowledgeable', 'good'],
  ['Experience', 'Limited', 'watch'],
  ['Confidence', 'Unsure', 'watch'],
  ['Capability', 'Ineffective', 'bad'],
  ['Resilience', 'High', 'good'],
  ['Anxiety', 'Moderate', 'watch'],
  ['Vulnerability', 'Assured', 'good'],
];
const FLAGS = [
  ['Impulsive market responder', 'Elevated', 'elevated'],
  ['Anxiety', 'Watch', 'watch'],
  ['Avoidance disengagement', 'Watch', 'watch'],
  ['Decision deliberation', 'Watch', 'watch'],
  ['Plan abandonment', 'Low', 'low'],
  ['Impulsive spender', 'Low', 'low'],
];
const PRIORITIES = [
  ['Financial Safety', '3/10', 'Build an emergency fund'],
  ['Life Enjoyment', '8/10', 'New purpose — hobby, sport, arts'],
  ['Time Freedom', '4/10', 'Delegating tasks'],
  ['Giving Back', '7/10', 'Family'],
];

export default function MeetingPrep() {
  return (
    <div className="fp-doc mp-doc">
      <div className="fp-topline">
        <span>Client psychology overlay</span>
        <span>Marcus Delaney — Initial Strategy Meeting</span>
      </div>

      <p className="mp-crumb">Meet › Pre-Meeting Prep › Marcus Delaney — Initial Strategy Meeting</p>
      <h1 className="mp-title">Pre-Meeting Prep — Marcus Delaney</h1>
      <p className="mp-meta">
        Initial Strategy Meeting · Tue 25 Aug 2026, 10:00 CT · Advisor: Dana Whitfield ·
        7 blocks · 11 sources cited
      </p>

      {/* AI-generated client story */}
      <section className="fp-sec" style={{ paddingTop: 8 }}>
        <span className="fp-label" style={{ marginTop: 0 }}>AI-generated client story</span>
        <p className="fp-p">
          Marcus is a 27-year-old business owner with an unusual combination: the financial capacity
          of someone much further along, and the market experience of someone just starting. He earns
          $150,000, holds $1,000,000 of home equity net of debt, and has forty years of earning
          horizon ahead of him — a very high risk capacity by any measure. <Src>CRM · Portfolio</Src>
          What he does not yet have is any retirement plan structure, or an emergency fund. <MM />
        </p>
        <p className="fp-p">
          Behaviorally he is decisive and self-directed. His financial acumen is Optimal — he
          understands interest, inflation and diversification well enough to skip the fundamentals —
          and he acts on decisions rather than circling them. His appetite for risk is Very High and
          his loss response is tolerant. But his confidence is still catching up with his capability,
          his investment experience is Building with no lived downturn behind it, and knowledge is not
          yet translating into consistent habit. <MM />
        </p>
        <p className="fp-p">
          His own priorities point at the gap. Financial Safety is his lowest-scoring life domain at
          3/10, and the action he chose himself was build an emergency fund. Time Freedom scores
          4/10, with delegation named as the fix — a planning question for an owner-operator. Life
          Enjoyment (8/10) and Giving Back (7/10) are both strong, and he is Present-Focused: legacy
          currently sits outside the frame. <MM />
        </p>
        <p className="fp-p">
          His goals tell the same story. Retirement at $800,000 over forty years needs a return well
          inside his Realistic expectations. A $40,000 home deposit in two years is a contribution
          question. A $115,000 truck in twelve months from a $3,000 start would need a 686.8% return.
          <MM /> <Src>CRM · Goals</Src>
        </p>
        <p className="fp-p">
          The relationship works when the advisor treats him as a peer, gives his decisiveness a
          filter, automates habits rather than assigning them, and presents visually. It breaks when
          he is lectured on fundamentals, guilt-framed about present spending, or left without
          pre-agreed rules when the first drawdown arrives.
        </p>
      </section>

      {/* Meeting approach */}
      <section className="fp-sec">
        <div className="fp-sec-head"><h2>Meeting approach</h2></div>
        <div className="mp-approach">
          {[
            ['Communication style', 'Diagrams, video, audio', 'Charts and a recorded walkthrough, not a written pack.'],
            ['Tone', 'Ambitious, evidence-led', 'No guilt framing on present-spending goals.'],
            ['Action orientation', 'Decisive', 'Can make decisions quickly. Close in the room, with the reflection rule above threshold.'],
            ['Fee vs value sensitive', 'Value-oriented, not fee-sensitive', 'Not screening on price, but he will ask what he is paying for — lead with the work and itemise it.'],
          ].map(([label, val, desc]) => (
            <div className="mp-approach-item" key={label}>
              <div className="mp-approach-label">{label}</div>
              <div className="mp-approach-val">{val}</div>
              <div className="mp-approach-desc">{desc}</div>
            </div>
          ))}
        </div>

        <div className="mp-cols">
          <div>
            <span className="fp-label">Financial foundations · Peer-level</span>
            <div className="mp-tiles">
              {FOUNDATIONS.map(([k, v, tone]) => (
                <div className="mp-tile" key={k}>
                  <span className="mp-tile-k">{k}</span>
                  <span className={`mp-rate mp-rate--${tone}`}>{v}</span>
                </div>
              ))}
            </div>
            <p className="fp-p" style={{ marginTop: 14 }}>
              Acumen is Optimal — go straight to strategy, skip fundamentals. Resilience is high,
              anxiety moderate, and no vulnerabilities.
            </p>
          </div>
          <div>
            <span className="fp-label">Churn flags</span>
            <div className="mp-flag-tally">1 elevated · 3 watch · 2 low</div>
            <div className="mp-flags">
              {FLAGS.map(([name, label, tone]) => (
                <div className="mp-flag" key={name}>
                  <span>{name}</span>
                  <span className={`mp-flag-badge mp-flag-badge--${tone}`}>{label}</span>
                </div>
              ))}
            </div>
            <p className="fp-p" style={{ marginTop: 14 }}>
              Decisive with no lived downturn behind him — pre-agree the holding rules. Automate open
              items rather than assigning them.
            </p>
          </div>
        </div>
      </section>

      {/* Where you are now */}
      <section className="fp-sec">
        <div className="fp-sec-head"><h2>Where they are now</h2></div>

        <span className="fp-label">What comes in</span>
        <Table
          head={['Item', 'Amount', 'Note']}
          rows={[
            ['Business income', '$150,000 a year, before tax', 'You own the business. That means your income is variable, and nothing is deducted for you automatically.'],
            ['Estimated take-home', '~$108,000 a year, or $9,000 a month', 'After tax. To be confirmed against your actual drawings.'],
            ['Retirement contributions', 'Whatever you choose to make', 'There is no employer paying these on your behalf. If you do not direct them, they do not happen.'],
          ]}
        />

        <span className="fp-label">What goes out</span>
        <Table
          head={['Category', 'Monthly', 'Yearly']}
          rows={[
            ['Rent', '$2,150', '$25,800'],
            ['Living — food, utilities, phone, household', '$1,400', '$16,800'],
            ['Personal vehicle running costs', '$400', '$4,800'],
            ['Vehicle and equipment finance', '$620', '$7,440'],
            ['Discretionary — social, travel, recreation', '$830', '$9,960'],
            ['Total', '$5,400', '$64,800'],
          ]}
        />
      </section>

      {/* What you own and what you owe */}
      <section className="fp-sec">
        <div className="fp-sec-head"><h2>What you own and what you owe</h2></div>
        <Table
          head={['Item', 'Value', 'Note']}
          rows={[
            ['Retirement account (super / 401(k))', '$20,000', ''],
            ['Other assets, net of debt', '$50,000', 'Assumed to be roughly $35,000 of business plant and vehicle, plus $15,000 in cash. Worth itemising — the cash part gives your emergency fund a head start.'],
            ['Property recorded in your profile, net of debt', '$1,000,000', 'See the note below'],
            ['Vehicle and equipment finance', '$28,000 at 7.9%', '$620 a month, clears in about 54 months'],
            ['Credit cards', 'Nil', ''],
          ]}
        />
      </section>

      {/* MoneyMind insights */}
      <section className="fp-sec">
        <div className="fp-sec-head"><h2>MoneyMind insights</h2></div>

        <span className="fp-label" style={{ marginTop: 0 }}>Financial Life Satisfaction</span>
        <div className="mp-sat" />
        <div className="mp-sat-axis"><span>Life Have</span><span>Life Want</span></div>
        <p className="fp-note">Source: MoneyMind Profile — 17 Aug 2026 — Financial Life Satisfaction</p>

        <span className="fp-label">Financial Life Priorities</span>
        <div className="mp-prio">
          {PRIORITIES.map(([name, score, action]) => (
            <div className="mp-prio-card" key={name}>
              <div className="mp-prio-name">{name}</div>
              <div className="mp-prio-score">{score}</div>
              <div className="mp-prio-action">Chosen action: {action}</div>
            </div>
          ))}
        </div>
        <p className="fp-note">Source: MoneyMind Profile, 17 Aug 2026 — Financial Life Decisions</p>

        <h3 className="fp-h3">Goals</h3>
        <Table
          head={['Goal', 'Start', 'Target', 'Horizon', 'Required return', 'Status']}
          rows={[
            ['Retirement', '$20,000', '$800,000', '40 yrs', 'Well within range', <span className="mp-status mp-status--good">Achievable</span>],
            ['First home purchase', '$1,000', '$40,000', '2 yrs', '7.5%', <span className="mp-status mp-status--watch">Needs contribution plan</span>],
            ['New truck', '$3,000', '$115,000', '1 yr', '686.8%', <span className="mp-status mp-status--bad">Not fundable</span>],
          ]}
        />
        <p className="fp-p">
          Three goals across three horizons. The retirement goal's required return sits comfortably
          inside evidence-based assumptions; the first home purchase needs 7.5%; the truck 686.8%. The
          last figure is the flag — as stated it is a savings-rate question, not an investment one.
        </p>
        <p className="fp-note">Source: MoneyMind Profile — 17 Aug 2026 — Financial Goals</p>
      </section>

      {/* Money Pattern — five pillars */}
      <section className="fp-sec">
        <div className="fp-sec-head"><h2>MoneyPattern™ — five pillars</h2></div>
        <div className="mp-pillars">
          <Pillar eyebrow="Saving" name="Steady Saver"
            pattern="Your client is a capable, steady saver who tends to stay on track when the plan is simple and visible, but can wobble when pressure rises or the future feels less real."
            roadblocks="The main friction is inconsistency in the gaps. A few pressure points, some uneven money foundations, and mixed feelings about what is available can interrupt otherwise good saving habits."
            optimise={['Automate First — contributions leave before they can be spent', 'Map The Wobbles — name the moments saving slips, build one rule for each', 'Use Visible Goals — clear milestones, progress kept on show']} />
          <Pillar eyebrow="Spending" name="Considered Spender"
            pattern="Your client is broadly steady with spending, and the main story is not loose control but a few predictable moments where pressure, mood, or context can tip them off course."
            roadblocks="The risk is that those small slips feel harmless in the moment, then gather into an unhelpful pattern if the same triggers keep catching them without a pause or a clear limit."
            optimise={['Spot the trigger — name the few situations that nudge extra spending', 'Add a pause — a short gap between the feeling and the purchase', 'Set a soft guardrail — one discretionary limit for the moments that run hot']} />
          <Pillar eyebrow="Retirement planning" name="Retirement-Ready"
            pattern="Your client has a clear, life-led retirement picture, with strong optimism and practical confidence keeping the plan moving forward while leaving legacy goals largely outside the frame for now."
            roadblocks="The main friction is not lack of ability, but that the plan can drift if the retirement vision is not revisited and if the balance between steady income and flexible spending is not made explicit."
            optimise={['Refresh the vision — revisit yearly, tie plan changes back to it', 'Set the floor — guaranteed income for essentials, flexible spending above', 'Name the legacy — ask directly; if it matters, build it in early']} />
          <Pillar eyebrow="Market response" name="Composed-Responder"
            pattern="Your client is generally steady in markets, with a calm loss response, measured optimism, and enough discipline to stay engaged, but their confidence can wobble when pressure drags on and the picture feels unclear."
            roadblocks="The main friction is that sustained downturns, mixed financial anxiety, and limited live experience can make them second-guess themselves, avoid updates, or hesitate when a clear plan would help most."
            optimise={['Pre-agree the line — set the holding rules now, while things feel calm', 'Use plain check-ins — reach out early in volatility, short and clear', 'Rehearse the drop — walk fall scenarios on their actual portfolio']} />
          <Pillar eyebrow="Investment" name="Confident Investor"
            pattern="Your client shows a steady, self-directed style with a high appetite for risk, but their confidence is still catching up, so they want to understand the plan before they fully lean into it."
            roadblocks="The main friction is not fear of risk itself, but hesitation when decisions feel too abstract or too fast, which can lead to avoiding action or second-guessing even a sound portfolio."
            optimise={['Use Their Holdings — start the discussion with what they already own', 'Show It Early — share changes ahead of time, reasons in plain language', 'Build The Rule — same evidence-based rule for every allocation change']} />
        </div>
      </section>

      {/* Risk profile */}
      <section className="fp-sec">
        <div className="fp-sec-head"><h2>Risk profile</h2></div>
        <div className="mp-risk">
          <div className="mp-risk-card">
            <div className="mp-risk-label">Risk tolerance</div>
            <div className="mp-risk-val">Very High</div>
            <div className="mp-risk-cap">Psychological appetite for risk</div>
            <div className="mp-risk-desc">Loss-Tolerant · Regret-Tolerant · Ownership Strong. He can sit with variability — on the questionnaire.</div>
          </div>
          <div className="mp-risk-card">
            <div className="mp-risk-label">Risk capacity</div>
            <div className="mp-risk-val">Very High</div>
            <div className="mp-risk-cap">Financial ability to absorb loss</div>
            <div className="mp-risk-desc">$150,000 income · $1,000,000 home equity net of debt · $50,000 other assets · 40 years to retirement · business owner. Very high human capital and very high capacity for loss.</div>
          </div>
          <div className="mp-risk-card">
            <div className="mp-risk-label">Overall risk profile · Derived</div>
            <div className="mp-risk-val">High — behaviorally capped</div>
            <div className="mp-risk-cap">Recommended working profile</div>
            <div className="mp-risk-desc">Tolerance and capacity both sit at the top of the range, but Investment Experience is Building, Financial Anxiety is Moderate and Overconfidence is episodic. Recommend below the theoretical ceiling until experience catches up.</div>
          </div>
        </div>
        <div className="mp-sub">Pattern — risk capacity</div>
        <p className="fp-p">Your client has a very high risk capacity. This is calculated by combining Financial Capital and Human Capital indicators.</p>
        <div className="mp-sub">Optimise your client</div>
        <p className="fp-p">Your client has very high human capital, an exceptionally strong earning base built on extensive experience, highly sought-after skills, and top-tier education. Job market positioning is excellent and salary ceiling is high. With many years ahead, that earning power compounds further.</p>
        <p className="fp-p">Your client has a very high capacity for loss, even a substantial market correction wouldn't affect their standard of living or long-term security. Maximum investment flexibility is available, supporting growth-oriented, alternative, or higher-volatility strategies where appropriate.</p>
        <p className="fp-p">Capacity sets the ceiling, not the instruction, the recommended strategy must still reflect psychological risk tolerance, time horizon, and specific financial goals.</p>
        <p className="fp-note">Source: MoneyMind Profile — 17 Aug 2026 — Risk Profile</p>
      </section>

      {/* Conflicts & gaps */}
      <section className="fp-sec">
        <div className="fp-sec-head"><h2>Conflicts &amp; gaps flagged</h2></div>
        <div className="mp-conflict mp-conflict--blocker">
          <span className="mp-conflict-tag">Blocker</span>
          <h4>Truck goal cannot be funded as stated — reset before anything else</h4>
          <p className="fp-p">
            $3,000 to $115,000 in 12 months implies a 686.8% return. <Src>CRM · Goals</Src> A
            savings-rate question, not an investment question. <MM /> Reframe as a timeline, never as
            a refusal.
          </p>
        </div>
        <div className="mp-conflict mp-conflict--gap">
          <span className="mp-conflict-tag">Gap</span>
          <h4>No retirement plan structure — 40-year runway unused</h4>
          <p className="fp-p">
            Business owner, $150,000 income, no 401(k) recorded. <Src>Portfolio feed</Src> A Solo
            401(k) or SEP IRA is the highest-leverage item on the table, and the required return on
            the $800,000 retirement goal is entirely achievable once contributions are structured and
            tax-advantaged.
          </p>
        </div>
        <div className="mp-conflict mp-conflict--gap">
          <span className="mp-conflict-tag">Gap</span>
          <h4>No emergency fund — against his own lowest satisfaction score</h4>
          <p className="fp-p">
            <MM /> Financial Safety scores 3/10 and he has named the fix himself. Emergency savings
            and diversification are the two strongest resilience predictors, and neither is
            established.
          </p>
        </div>
        <div className="mp-conflict mp-conflict--watch">
          <span className="mp-conflict-tag">Watch</span>
          <h4>Optimism bias — pressure-test the assumptions</h4>
          <p className="fp-p">
            <MM /> Return Expectations read as Realistic, which is a genuine strength — but Optimism
            is high, and optimists tend to underweight tail risk and resist stress-testing. Show a
            below-average decade explicitly.
          </p>
        </div>
      </section>
    </div>
  );
}
