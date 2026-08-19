// Sample MoneyMind financial plan — "David H." — reproduced as a page.
// A one-off document; content is inline rather than data-driven.

function Table({ head, rows, total }) {
  return (
    <div className="fp-table-wrap">
      <table className="fp-table">
        <thead>
          <tr>{head.map((h) => <th key={h}>{h}</th>)}</tr>
        </thead>
        <tbody>
          {rows.map((r, i) => (
            <tr key={i} className={total && i === rows.length - 1 ? 'total' : undefined}>
              {r.map((c, j) => <td key={j} className={j > 0 ? 'num' : undefined}>{c}</td>)}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function Persona({ eyebrow, name, pattern, roadblocks }) {
  return (
    <div className="fp-persona">
      <span className="fp-persona-eyebrow">{eyebrow}</span>
      <h4>{name}</h4>
      <div className="fp-persona-sub">Pattern</div>
      <p>{pattern}</p>
      <div className="fp-persona-sub">Potential roadblocks</div>
      <p>{roadblocks}</p>
    </div>
  );
}

function Mile({ date, title, sub, val }) {
  return (
    <div className="fp-mile">
      {date && <div className="fp-mile-date">{date}</div>}
      {title && <div className="fp-mile-title">{title}</div>}
      {sub && <div className="fp-mile-sub">{sub}</div>}
      {val && <div className="fp-mile-val">{val}</div>}
    </div>
  );
}

export default function FinancialPlan() {
  return (
    <div className="fp-doc">
      <div className="fp-topline">
        <span>David H. · 18 Aug 2026</span>
        <span>MoneyMind insights woven into your plans</span>
      </div>

      {/* Cover */}
      <header className="fp-cover">
        <span className="fp-cover-kicker">MoneyMind insights woven into your plans</span>
        <h1>Your Financial Plan</h1>
        <p className="fp-cover-sub">Prepared for David H.</p>
        <div className="fp-tags">
          {['Strong Saver', 'Controlled Spender', 'Cautious Investor', 'Composed-Responder', 'Retirement-Ready'].map((t) => (
            <span className="fp-tag" key={t}>{t}</span>
          ))}
        </div>
        <div className="fp-meta">
          <div>
            <span className="fp-meta-label">Based on</span>
            <span className="fp-meta-val">MoneyMind Client Report, 18 Aug 2026</span>
          </div>
          <div>
            <span className="fp-meta-label">Age and horizon</span>
            <span className="fp-meta-val">57 · 10 years to retirement</span>
          </div>
          <div>
            <span className="fp-meta-label">Risk profile</span>
            <span className="fp-meta-val">Balanced · high tolerance, moderate capacity</span>
          </div>
        </div>
      </header>

      {/* How to read */}
      <section className="fp-sec">
        <div className="fp-howto">
          <div className="fp-howto-copy">
            <h3 className="fp-h3">How to read this plan</h3>
            <p>
              Seven parts: where you are now, what you want, your cash flow, your debt and wealth
              strategy, your investments, your retirement, and your estate. Your MoneyMind profile
              runs through all of them — each section opens with the patterns and roadblocks it
              found, and the behavioral actions that follow.
            </p>
          </div>
          <div className="fp-toc">
            <span className="fp-toc-label">The seven parts</span>
            <ol className="fp-toc-list">
              {[
                'Where you are now',
                'What you want, and by when',
                'Your cash flow and budget',
                'Debt and building wealth',
                'Your investment strategy',
                'Your retirement strategy',
                'Your estate plan',
                'What happens next',
              ].map((t, i) => (
                <li key={t}><span className="fp-toc-num">{i + 1}</span>{t}</li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* 01 */}
      <section className="fp-sec">
        <div className="fp-sec-head"><span className="fp-sec-num">01</span><h2>Where you are now</h2></div>
        <p>The starting picture. Your income, assets, and time horizon.</p>
        <div className="fp-stats">
          <div><span className="fp-stat-num">$1.44m</span><div className="fp-stat-label">Business income, before tax</div></div>
          <div><span className="fp-stat-num">$66,300</span><div className="fp-stat-label">Take-home a month, estimated</div></div>
          <div><span className="fp-stat-num">$23.5m</span><div className="fp-stat-label">Investable assets, net of debt</div></div>
          <div><span className="fp-stat-num">$6.9m</span><div className="fp-stat-label">Future earnings, today's money</div></div>
        </div>
        <div className="fp-flow">
          <div className="fp-flow-rows">
            <div className="fp-flow-row"><span className="k">In, after tax</span><span className="v">$66,300</span></div>
            <div className="fp-flow-row"><span className="k">Out</span><span className="v">$28,000</span></div>
          </div>
          <div className="fp-leftover">
            <span className="k">Left over each month</span>
            <span className="v">$38,300</span>
            <span className="s">$459,600 a year, currently undirected</span>
          </div>
        </div>
        <h3 className="fp-h3">What goes out</h3>
        <p>Estimated. Three months of real transaction data replaces this — it is the first action in §8.</p>
        <Table
          head={['Category', 'Monthly', 'Yearly']}
          total
          rows={[
            ['Home running costs, rates and insurance', '$4,200', '$50,400'],
            ['Living — food, utilities, phone, household', '$6,500', '$78,000'],
            ['Vehicles and transport', '$2,300', '$27,600'],
            ['Health and insurance premiums', '$3,400', '$40,800'],
            ['Discretionary — travel, social, recreation', '$9,000', '$108,000'],
            ['Family support, currently ad hoc', '$2,600', '$31,200'],
            ['Total', '$28,000', '$336,000'],
          ]}
        />
        <h3 className="fp-h3">What you own and what you owe</h3>
        <Table
          head={['Item', 'Value', 'Note']}
          rows={[
            ['Home, net of debt', '$13,500,000', 'Lifestyle asset. Not counted toward any goal in this plan.'],
            ['Other assets, net of debt', '$23,475,000', 'Recorded as one figure. Needs itemising into liquid, illiquid and business interest — action 1 in §8.'],
            ['Retirement accounts', 'To be separated', 'Currently inside the figure above. It matters, because the tax treatment differs.'],
            ['Business interest', 'To be confirmed', 'Your largest single concentration, and the reason §5 holds fewer domestic shares than usual.'],
            ['Recorded liabilities', 'Nil', 'Asset values above are already net of debt.'],
          ]}
        />
      </section>

      {/* 02 */}
      <section className="fp-sec">
        <div className="fp-sec-head"><span className="fp-sec-num">02</span><h2>What you want, and by when</h2></div>
        <p>
          Three recorded goals, aligned to your financial life priorities. One goal recorded, and
          two more this plan makes explicit. The ambition is reasonable. What is not reasonable is
          the way the recorded goal is currently funded — which is to say, not at all.
        </p>
        <Table
          head={['Goal', 'Timeframe', 'Allocated now', 'What the timeframe needs']}
          rows={[
            ["Daughters' income stream", '$9,000,000 in 5 years', 'Nil — nothing allocated to it yet', '$150,000'],
            ['Your own retirement income', 'From age 67 · not recorded as a goal', 'Existing capital covers it — the work is structure, not saving (§6).', '—'],
            ['Structured enjoyment', '$120,000 a year, spent not saved', 'Nil — currently unplanned discretionary', '$10,000'],
          ]}
        />
        <div className="fp-profile">
          <span className="fp-profile-label">From your MoneyMind profile</span>
          <p>
            You are &ldquo;a strategic, big-picture thinker&rdquo; who thinks &ldquo;in decades, not
            months&rdquo; — and who &ldquo;may be sacrificing current joy for future impact&rdquo;.
          </p>
        </div>
        <h3 className="fp-h3">Your financial life priorities</h3>
        <p>
          Four things you rated as mattering to you. They are not goals in their own right — they
          are the reasons some of the choices later in this plan are made the way they are.
        </p>
        <div className="fp-priorities">
          {[
            ['Giving back — family', 8, 'The $9,000,000 structure, plus $2,600 a month planned rather than reactive'],
            ['Financial safety', 6, 'This document is the long-term plan you asked for, plus a $168,000 cash reserve'],
            ['Life enjoyment', 3, '$10,000 a month to a Purpose account, spent not saved — rated low, which is the point'],
            ['Time freedom', 2, 'Every payment automatic, all mechanics delegated, review dates already set'],
          ].map(([name, score, note]) => (
            <div className="fp-prio" key={name}>
              <span className="fp-prio-name">{name}</span>
              <span className="fp-prio-score">{score}</span>
              <div className="fp-prio-bar"><span style={{ width: `${score * 10}%` }} /></div>
              <p className="fp-prio-note">{note}</p>
            </div>
          ))}
        </div>
        <h3 className="fp-h3">Your goals, restated so they can be funded</h3>
        <Table
          head={['Goal', 'What you recorded', 'What we recommend instead', 'Monthly']}
          rows={[
            ["1 · Daughters' income stream", '$9,000,000 by Aug 2031, from a starting value of $0 — a required return of 170.2% a year', 'Same amount, same date, funded properly: $5,050,000 seeded from existing capital, then $336,000 a year added. At 7% it reaches $9,017,000 by Aug 2031.', '$28,000, plus the seed'],
            ['2 · Your retirement', 'Not recorded as a goal. 10 years to retirement, 7% expected return.', 'A two-layer income structure, not a savings target — a guaranteed floor of $250,000 a year indexed, with the rest drawn flexibly (§6).', '$2,500 pre-tax, to the cap'],
            ['3 · Structured enjoyment', 'Not recorded. Life Enjoyment rated 3; work-life balance named as a priority.', '$120,000 a year with explicit permission to spend it. In the plan, not squeezed around it.', '$10,000'],
          ]}
        />
        <div className="fp-darkgrid">
          <div className="fp-dark">
            <span className="fp-dark-label">Cash reserve</span>
            <div className="fp-dark-num">$168,000</div>
            <p>
              Six months of outgoings, in cash, funded immediately from existing liquidity. Not a
              goal in its own right — the floor everything else stands on. Six months rather than
              three because your income is a business drawing, not a salary.
            </p>
          </div>
          <div className="fp-dark">
            <span className="fp-dark-label">The number this plan hangs on</span>
            <div className="fp-dark-num">$5,050,000</div>
            <p>
              The capital seeded into your daughters' structure, from the $23,475,000 you already
              hold. It is the one decision that turns an impossible goal into a funded one, and it
              is entirely within your control. Everything else in §2 is a consequence of it.
            </p>
          </div>
        </div>
        <h3 className="fp-h3">The order they happen in</h3>
        <p>
          The reserve first, then the seed, then contributions running underneath for five years.
          Your profile says you &ldquo;gather enough to feel confident, then act&rdquo; — so the
          sequence is short and every step has a date attached rather than a condition.
        </p>
        <div className="fp-timeline">
          <Mile date="Sep 2026" title="Cash reserve" sub="From existing liquidity" val="$168,000" />
          <Mile date="Oct 26 – Oct 27" title="Structure seeded" sub="Three tranches, fixed dates" val="$5,050,000" />
          <Mile date="Aug 2028" title="Two years in" sub="Contributions at $28,000" val="$6,478,000" />
          <Mile date="Aug 2030" title="Four years in" sub="Income structure drafted" val="$8,113,000" />
          <Mile date="Aug 2031" title="Target reached" sub="Income begins to the three" val="$9,017,000" />
        </div>
        <p>
          At $9,017,000 a sustainable 4.5% draw produces about $405,000 a year — roughly $135,000
          each, or about $119,000 each in today's money. That is the sentence the whole goal was
          always about, and it was not answerable while the starting value sat at zero.
        </p>
      </section>

      {/* 03 */}
      <section className="fp-sec">
        <div className="fp-sec-head"><span className="fp-sec-num">03</span><h2>Your cash flow and budget</h2></div>
        <div className="fp-personas">
          <Persona eyebrow="Saving" name="Strong Saver"
            pattern="You are a steady saver by nature, with strong self-discipline and a real gift for thinking ahead, but bigger money decisions can still make you pause."
            roadblocks="The sticking point is not commitment. It is getting stuck when the saving step feels larger or less clear." />
          <Persona eyebrow="Spending" name="Controlled Spender"
            pattern="You have steady self-control and you do not get thrown off by stress, but spending can still feel easy enough that your money needs clear rails to stay pointed at what matters most."
            roadblocks="The risk is not a weak moment under pressure. It is that spending runs ahead of your goals unless the guardrails are set before you start buying." />
        </div>
        <h3 className="fp-h3">Your discipline is your strength.</h3>
        <p>
          Your profile rates your discipline Strong and your impulse control Strong, and describes
          you as someone who will not raid investments for short-term wants. What it also finds is
          that translating intention into habit is the weakest reading in your whole report. Money
          that is not sent somewhere on the day it arrives becomes money you could spend — and when
          you draw a variable income from your own business, that effect is stronger, not weaker.
        </p>
        <blockquote className="fp-quote">
          &ldquo;Translating financial intentions into consistent habits is currently a challenge…
          Put simply, automatic systems can remove the need for willpower entirely.&rdquo;
        </blockquote>
        <p>So nothing below tells you what you can and cannot buy. All of it is about where the money goes before you ever see it.</p>
        <h3 className="fp-h3">Automate First</h3>
        <p>
          Your drawings get fixed at the same amount every month, and divided the day they land.
          Take-home is about $65,000 after the pre-tax retirement contribution is paid from the
          business.
        </p>
        <Table
          head={['Where it goes', 'To Aug 2031', 'From Sep 2031', 'What it does']}
          rows={[
            ['Retirement contributions', '$2,500 pre-tax', '$2,500 pre-tax', 'Paid from the business before you draw, to the concessional cap. Costs about $1,325 of take-home.'],
            ['Bills account', '$16,400', '$16,400', 'Home costs, living, transport, premiums. Paid automatically. You never look at it.'],
            ['Family goal account', '$28,000', 'Redirected', 'The daughters' + '’' + ' structure. The only line that changes, and it changes once — in Sep 2031.'],
            ['Planned family support', '$2,600', '$2,600', 'Planned rather than reactive. Separate from the structure, which is for later.'],
            ['Purpose account', '$10,000', '$10,000', '$120,000 a year. Spend it. Do not let it accumulate.'],
            ['Spending account', 'about $8,000', 'about $8,000', 'No tracking, no categories, no explaining. It is yours, and it does not shrink.'],
          ]}
        />
        <span className="fp-label">Put a date on it</span>
        <p>
          Every larger decision leaves the room with a date and a check-in attached. Your patience
          is a strength until it becomes deferral, and deferral is the roadblock your report names
          most often.
        </p>
        <span className="fp-label">Pause bigger buys</span>
        <p>
          Anything over $25,000 outside the Purpose account gets written down and left a day. Not a
          restriction — a gap for your own judgement to catch up.
        </p>
        <span className="fp-label">The good-quarter rule</span>
        <p>
          When the business has a strong quarter, half of the excess goes to the goal account
          before it reaches the spending account. Decided once.
        </p>
        <h3 className="fp-h3">Find The Gap — the reserve in four markers</h3>
        <p>
          $168,000 is not a stretch for you; it is simply not there yet. It gets funded from
          existing liquidity in one step, and then held. The markers matter less than the fact that
          the number is specific — your profile is clear that &ldquo;a clear number is more
          motivating than a general sense of progress&rdquo;.
        </p>
        <div className="fp-timeline">
          <Mile val="$0" sub="Today — no named reserve" />
          <Mile val="$84,000" sub="Three months covered" />
          <Mile val="$126,000" sub="Four and a half months" />
          <Mile val="$168,000" sub="Sep 2026 — complete" />
        </div>
        <span className="fp-label">Why the Purpose account is in the plan</span>
        <p>
          You rated Life Enjoyment 3 out of 10 and named better work-life balance as a priority in
          the same report. Your profile says you &ldquo;prioritise leaving a legacy… over living
          your life now&rdquo; and may be &ldquo;sacrificing current joy for future impact&rdquo;. A
          plan that only funds the next generation is a plan that quietly costs you this one. The
          $10,000 a month is structured permission, and it is deliberately generous.
        </p>
      </section>

      {/* 04 */}
      <section className="fp-sec">
        <div className="fp-sec-head"><span className="fp-sec-num">04</span><h2>Debt and building wealth</h2></div>
        <h3 className="fp-h3">You have no recorded debt. That changes what this section is for.</h3>
        <p>
          Your home and other assets are both recorded net of debt, and no liabilities are listed.
          So there is no repayment strategy to design. The question in your position is the opposite
          one: what is the highest-value use of the next dollar, when the constraint is not money
          but time and liquidity.
        </p>
        <p>
          Ten years to retirement is the number that governs everything here. It is enough time to
          keep growth in the plan and not enough to recover comfortably from a serious mistake,
          which is why the ordering below is strict rather than a preference.
        </p>
        <h3 className="fp-h3">The liquidity question inside the $23,475,000</h3>
        <p>
          The seed for your daughters' structure comes out of this figure, so we need to know what
          part of it can actually be moved, at what tax cost, and over what period. If a meaningful
          share is business interest or property, the three-tranche schedule in §5 stops being a
          behavioral choice and becomes a practical necessity.
        </p>
        <p>
          One real caution: your home at $13,500,000 is 36% of your net position and produces no
          income. It is not a problem — it is a fact worth naming, because it means the income side
          of your plan rests on a smaller base than the headline suggests.
        </p>
        <h3 className="fp-h3">Where each dollar goes, and in what order</h3>
        <ol className="fp-order">
          {[
            ['Cash reserve to $168,000', 'Six months, in cash, because your income is a drawing. You rated Financial Safety 6 out of 10 and asked for a long-term plan.'],
            ['Insurance and estate documents in place', 'The two items your profile says are most likely to be deferred, and the two that cost the most when they are missing. Dated, not intended.'],
            ['Seed the daughters' + '’' + ' structure, $5,050,000', 'Three tranches over twelve months. The goal you actually recorded, finally funded from the capital that can fund it.'],
            ['Secure your own retirement floor', '$250,000 a year indexed, from guaranteed or lifetime income. Bought before the growth sleeve is extended, not after.'],
            ['Growth sleeve, philanthropy and opportunities', 'Where your high tolerance gets properly used — once 1 to 4 are done, and sized to capacity rather than appetite.'],
          ].map(([h, b]) => (
            <li key={h}><div><div className="fp-order-h">{h}</div><div className="fp-order-b">{b}</div></div></li>
          ))}
        </ol>
        <div className="fp-box">
          <span className="fp-box-label">One firm rule — nothing speculative comes out of the daughters' capital</span>
          <p>
            Your capacity supports significant risk, and your profile calls your risk tolerance a
            genuine long-term advantage. But that capital has a date on it — August 2031 — and a
            five-year goal cannot carry a ten-year risk. Speculative positions, concentrated bets
            and anything geared belong in the growth sleeve, funded from surplus, where a bad
            outcome costs you upside rather than the goal. The rule is not never; it is not here.
          </p>
        </div>
      </section>

      {/* 05 */}
      <section className="fp-sec">
        <div className="fp-sec-head"><span className="fp-sec-num">05</span><h2>Your investment strategy</h2></div>
        <div className="fp-personas">
          <Persona eyebrow="Investment" name="Cautious Investor"
            pattern="You are a hands-on growth seeker, comfortable with risk, confident in your choices and happy to stay involved — so your starting point is energy rather than caution."
            roadblocks="The trap is not fear but leaning too hard on confidence: growth can look brighter than the downside, and changes sit better when you have had time with them first." />
          <Persona eyebrow="Market response" name="Composed-Responder"
            pattern="You are a calm and steady market responder, with the discipline and the real-world experience to stay with your plan when others feel shaken."
            roadblocks="The catch is that occasional anxiety and self-doubt can make things feel riskier than they are, and hold you back at exactly the moment clear action would help." />
        </div>
        <h3 className="fp-h3">Willingness, capacity, and experience</h3>
        <div className="fp-personas">
          <div className="fp-box"><span className="fp-box-label">Risk tolerance</span><div className="fp-order-h">Very high</div><p>How much volatility you are willing to live with. Your profile calls it a genuine long-term advantage.</p></div>
          <div className="fp-box"><span className="fp-box-label">Risk capacity</span><div className="fp-order-h">Moderate</div><p>Substantial capital, with ten working years left. Time to recover — is the constraint. This is what shapes this section.</p></div>
        </div>
        <div className="fp-box"><span className="fp-box-label">Investment experience</span><div className="fp-order-h">Established</div><p>Multiple asset classes, held through real volatility. Our work here is optimisation.</p></div>
        <blockquote className="fp-quote">
          &ldquo;Your comfort with risk is not the same as financial capacity to absorb loss, so
          ensure these two things are properly aligned.&rdquo;
        </blockquote>
        <p>
          That sentence from your own report is the most important line in this document. A
          high-growth portfolio can reasonably fall 35% to 40% from its peak. On $5,050,000 that is
          a paper loss around $1,900,000, and if it lands in 2030 the goal date does not move to
          accommodate it. You would very likely hold through it — your market-response reading says
          so. The goal simply cannot afford for you to have to. So the strategy is built to your
          capacity and your date, and your tolerance gets its proper outlet in the growth sleeve
          instead.
        </p>
        <h3 className="fp-h3">Ask for time — the three-tranche seed</h3>
        <div className="fp-timeline">
          <Mile date="Tranche 1 · Oct 2026" val="$1,700,000" />
          <Mile date="Tranche 2 · Apr 2027" val="$3,400,000" />
          <Mile date="Tranche 3 · Oct 2027" val="$5,050,000" />
        </div>
        <p>
          The tranches happen on fixed dates, not on how markets are behaving. &ldquo;We'll put the
          rest in once things settle down&rdquo; turns into market timing — and your report flags
          that your confidence &ldquo;can creep into overconfidence after a stretch of good
          outcomes&rdquo;. A date cannot be argued with, including by us. It also gives you the
          processing time your profile asks for, and spreads the entry price across a year.
        </p>
        <h3 className="fp-h3">Where the money goes — the goal portfolio</h3>
        <Table
          head={['Asset class', 'Target', 'Range', 'What it is doing']}
          rows={[
            ['International shares', '24%', '20–30%', 'Growth, and spreading you away from the economy your business already sits in'],
            ['Domestic shares', '16%', '12–20%', 'Core growth. Deliberately lower than usual — see below'],
            ['Listed property and infrastructure', '12%', '8–16%', 'Real assets, some inflation protection, income along the way'],
            ['Alternatives', '8%', '5–12%', 'Returns that do not move with shares. Sized small because the goal date is fixed'],
            ['Global bonds and credit', '25%', '20–30%', 'What we sell from to buy shares when markets fall, and the ballast a five-year date requires'],
            ['Cash', '15%', '10–20%', 'Rising toward 40% across the final two years, so the target is not exposed at the finish. Separate from your reserve'],
          ]}
        />
        <span className="fp-label">Why growth is lower than your tolerance would allow</span>
        <p>
          Your income, your business, your property and the local economy are the same bet, and
          $13,500,000 of your net position is a house. A client with an identical psychological
          profile and a salary can carry more domestic and more growth exposure than you can,
          because their income is not connected to it and their money is not needed on a date. Two
          things constrain this portfolio: the August 2031 deadline, and ten years to retirement.
          Neither is about your appetite for risk.
        </p>
        <div className="fp-tags">
          {['Your business income', 'Your business interest', 'Your home', 'The local market'].map((t) => (
            <span className="fp-tag" key={t} style={{ color: '#1D4A75', background: '#EAF1F7', borderColor: 'rgba(60,122,168,0.35)' }}>{t}</span>
          ))}
        </div>
        <h3 className="fp-h3">Set it early — your downturn page</h3>
        <p>
          One page, written by you, signed and dated before anything happens, and re-read at every
          review. Your own report puts it plainly: decide the important rules while you feel
          settled, not in the middle of a market wobble.
        </p>
        <Table
          head={['If it falls', 'What I will do', 'What I will not do']}
          rows={[
            ['10%', 'Nothing. Contributions keep going. Read the recovery path, not the headlines.', 'Add risk because it looks cheap'],
            ['20%', 'Nothing to the strategy. Rebalance into shares as planned. Re-read this page.', 'Reduce or pause contributions'],
            ['30%', 'Nothing to the strategy. Check the reserve is intact and stress-test the Aug 2031 date together.', 'Move to cash. Change the strategy.'],
            ['40%+', 'Meet before doing anything. If the date has to move, it moves — the amount does not get cut.', 'Act the same day I decide to'],
          ]}
        />
        <span className="fp-label">Sleep on it</span>
        <p>
          Any strategy change or commitment over $250,000 gets written down and left 48 hours — 72
          if markets moved more than 5% that week. You asked for reasons in advance; this is the
          same principle applied to yourself.
        </p>
        <span className="fp-label">The four questions</span>
        <p>
          Has something changed in my life or only in the market? Would I want this if the last
          three months had gone the other way? Is this a solid decision or a run of good luck? Is it
          in the plan?
        </p>
      </section>

      {/* 06 */}
      <section className="fp-sec">
        <div className="fp-sec-head"><span className="fp-sec-num">06</span><h2>Your retirement strategy</h2></div>
        <div className="fp-persona" style={{ marginBottom: 18 }}>
          <span className="fp-persona-eyebrow">Retirement planning</span>
          <h4>Retirement-Ready</h4>
          <div className="fp-persona-sub">Pattern</div>
          <p>You have a steady, well-prepared retirement mindset, with strong skills, realistic expectations, and a clear wish to look after both your own life and the legacy you leave behind.</p>
          <div className="fp-persona-sub">Potential roadblocks</div>
          <p>The challenge is keeping your future self vivid enough that the plan keeps its pull, while making sure your confidence stays grounded with a clear floor and a backup path.</p>
          <div className="fp-persona-sub">Readings</div>
          <p>Future self-connection Steady · Optimism Optimistic · Return expectations Realistic · Financial acumen Optimal · Certainty Certainty-Seeking · Legacy Legacy-Focused</p>
        </div>
        <h3 className="fp-h3">Funding your retirement is not your problem. Structuring it is.</h3>
        <p>
          You did not record a retirement goal, and on the numbers that is understandable — there is
          no savings gap to close. After seeding your daughters' structure you still hold roughly
          $18,400,000 of investable capital, and ten years at your own 7% expectation takes that to
          about $36,200,000, or $28,300,000 in today's money. At a sustainable 4.5% draw that is
          roughly $1,273,000 a year in today's money, against current outgoings of $336,000. The
          risk in your plan is not running out. It is an unstructured, untested position meeting a
          fixed retirement date.
        </p>
        <div className="fp-stats" style={{ gridTemplateColumns: 'repeat(3, 1fr)' }}>
          <div><span className="fp-stat-num">7%</span><div className="fp-stat-label">a year · rated Realistic. We model 6.5%, deliberately below it</div></div>
          <div><span className="fp-stat-num">$36.2m</span><div className="fp-stat-label">Capital at 67, after the seed · $28.3m in today's money</div></div>
          <div><span className="fp-stat-num">$250,000</span><div className="fp-stat-label">a year, indexed, guaranteed — the floor under your essentials</div></div>
        </div>
        <p>
          Your certainty reading is the reason this is shaped as a floor. Your report flags your
          preference for guaranteed versus variable retirement income as sitting at one end of the
          spectrum, and names that as sub-optimal — leaning heavily either way leaves part of the
          plan exposed. Two layers is the answer to that specific finding: certainty where it buys
          peace, growth where it buys upside, and no need to choose between them.
        </p>
        <h3 className="fp-h3">How it works</h3>
        <ol className="fp-order">
          {[
            ['Contributions to the concessional cap, from the business', '$2,500 a month before you draw, wherever your structure allows, so it never reaches an account you could spend from.'],
            ['The floor bought in stages from age 62', 'Not in one transaction at 67. Staging it removes the risk of committing the whole floor at a single set of rates.'],
            ['Modelled at 4.5%, stress-tested at 4.5%', 'Your plan is built on returns 0.5% below your own expectation, and checked against a decade delivering 2–3% less. It holds either way.'],
            ['A concentration check at every review', 'Your business interest and your home are your two largest positions, which is why §5 holds fewer domestic shares than usual.'],
          ].map(([h, b]) => (
            <li key={h}><div><div className="fp-order-h">{h}</div><div className="fp-order-b">{b}</div></div></li>
          ))}
        </ol>
        <h3 className="fp-h3">Build the floor — retirement income in two layers</h3>
        <div className="fp-layers">
          <div className="fp-layer"><span className="fp-layer-tag">Layer two</span><h4>The upside</h4><p>Travel, the extras, philanthropy, gifts to the family in your lifetime — drawn flexibly from the growth portfolio. It moves with markets, and that is fine, because your essentials are already covered.</p></div>
          <div className="fp-layer fp-layer--floor"><span className="fp-layer-tag">Layer one</span><h4>The floor</h4><p>$250,000 a year indexed, from guaranteed or lifetime income — housing costs, living, health, premiums. Fixed, predictable, does not move with markets.</p></div>
        </div>
        <p>
          And the backup path your report asks for: if the next decade underdelivers, the floor is
          already bought and the flexible layer absorbs the difference. Nothing about your lifestyle
          depends on markets cooperating.
        </p>
        <span className="fp-label">Bring it back</span>
        <p>
          At the first meeting we spend fifteen minutes on one question — how vividly can you
          describe your retirement: where you are, what a normal week looks like, who is with you.
          You write the answer down, it goes at the front of your file, and we read it again every
          year. Your future self-connection reads Steady rather than Strong, which means motivation
          can be uneven — vivid in good periods, distant in uncertain ones. A written picture is
          what makes the plan hold its pull regardless of mood.
        </p>
      </section>

      {/* 07 */}
      <section className="fp-sec">
        <div className="fp-sec-head"><span className="fp-sec-num">07</span><h2>Your estate plan</h2></div>
        <span className="fp-label">Life vs legacy · leave a legacy</span>
        <p>
          &ldquo;You seem to prioritise leaving a legacy through your will and financial decisions
          over living your life now.&rdquo; Legacy orientation reads Legacy-Focused, Giving Back —
          family — is rated 8 out of 10, and your one recorded goal is a $9,000,000 income stream
          for your three daughters. For most clients the estate section is the last one. For you it
          is arguably the whole plan.
        </p>
        <p>
          Which is why §2 funds the structure while you are alive rather than leaving it to your
          will. An income stream you set up, explain and can adjust is a fundamentally better
          instrument than a bequest: your daughters receive it with your reasoning attached, and you
          get to see it working. The documents below are what protect that intention if something
          happens before 2031.
        </p>
        <Table
          head={['Document', 'Where you are', 'Why it matters at 57, with $37m and three daughters']}
          rows={[
            ['Will', 'To be confirmed', 'Without a current one the law decides, and your business interest is the hardest thing for anyone to unwind. At this size, an out-of-date will is as costly as none.'],
            ['Testamentary trust structure', 'To be scoped', 'The vehicle that carries the income stream if it is not fully funded in your lifetime. Also where asset protection for your daughters lives.'],
            ['Enduring power of attorney', 'To be prepared', 'Someone must be able to run the business, pay suppliers and lodge returns from day one. This is the document most often missing at your stage.'],
            ['Advance care directive', 'To be prepared', 'Medical decisions. Nothing to do with money.'],
            ['Beneficiary designations', 'To be checked', 'These override your will. A stale nomination can send retirement assets somewhere your will explicitly does not.'],
            ['Business succession', 'To be scoped', 'Ten years to retirement means the exit is now a planning horizon, not a someday. It is also the largest single funding event in your future.'],
          ]}
        />
        <p>
          These cost one afternoon and a legal fee that is immaterial at your scale, and they are
          the clearest example of the roadblock your report names: patience becoming deferral on
          decisions that need making today. One question worth answering deliberately before we
          instruct anyone: equal shares to the three, or shares that reflect different
          circumstances? There is no wrong answer, but there is a wrong time to decide it, and that
          is later.
        </p>
      </section>

      {/* 08 */}
      <section className="fp-sec">
        <div className="fp-sec-head"><span className="fp-sec-num">08</span><h2>What happens next</h2></div>
        <p>
          In order of what matters, not what is easiest. Your profile describes someone who gathers
          enough to feel confident and then acts — so each item below has a date rather than a
          condition, and the first meeting is designed to clear most of them in one sitting.
        </p>
        <Table
          head={['#', 'What', 'Who', 'By when']}
          rows={[
            ['1', 'Itemise the $23,475,000 — liquid, illiquid, business interest, retirement accounts — so §1 is real rather than estimated', 'You, with your accountant', '31 Aug 2026'],
            ['2', 'Send three months of business and personal transaction data', 'You', '31 Aug 2026'],
            ['3', "Define the daughters' income stream properly — amount each, start date, duration, conditions", 'You, with us', 'First meeting'],
            ['4', 'Approve the $5,050,000 seed and the three-tranche schedule', 'You, with us', 'First meeting'],
            ['5', 'Fund the $168,000 cash reserve and fix your monthly drawings', 'Us', '7 Sep 2026'],
            ['6', 'Set up the pay-day split — bills, goal, family, purpose, spending', 'Us', '7 Sep 2026'],
            ['7', 'Insurance review — cover, ownership and adequacy against a $37m position', 'Us', '30 Sep 2026'],
            ['8', 'Place tranche 1 and diarise tranches 2 and 3', 'Us', '31 Oct 2026'],
            ['9', 'Write and sign your downturn page; set the guardrails in writing', 'You, with us', 'First meeting'],
            ['10', 'Describe your retirement in writing — fifteen minutes', 'You', 'First meeting'],
            ['11', 'Will, testamentary trust, power of attorney, care directive, beneficiary nominations, business succession', 'You, with our instructions to your lawyer', '30 Nov 2026'],
          ]}
        />
        <h3 className="fp-h3">When we will talk</h3>
        <Table
          head={['When', 'How', 'What we cover']}
          rows={[
            ['Sep 2026', 'In person, 90 minutes, written pack sent first', 'Setting everything up. All of the above, in one session.'],
            ['Dec 2026', 'Written summary plus a 20-minute call', 'Is it all running? Tranche 1 placed, reserve held, split working?'],
            ['Apr 2027', 'Written pack, call if you want one', 'Tranche 2. Estate documents signed off. Insurance in place.'],
            ['Sep 2027', 'In person, an hour', 'The important one. Tranche 3, first full year of contributions, the Aug 2031 date re-tested. Re-sign your downturn page.'],
            ['Quarterly', 'Written report, one page first', 'Progress against $9,000,000, and nothing you have to chase.'],
            ['If markets fall', 'A written note within five business days', 'Any time the portfolio is down more than 10% from its peak: where things stand, what changed, what we are doing.'],
            ['If life changes', 'A full review', "A business sale or partner, a health event, a daughter's circumstances changing, or income moving more than 20%."],
          ]}
        />
        <p>
          Everything comes to you in writing first — structured documents and written summaries,
          because that is how your profile says you engage best. Every pack opens with a single page
          you can read in two minutes, and the detail sits behind it for when you want it. You rated
          Time Freedom 2 out of 10 and named delegating as a priority, so the dates above are
          already in the diary and do not depend on you remembering to book them.
        </p>
        <h3 className="fp-h3">The assumptions behind the numbers</h3>
        <Table
          head={['Assumption', 'What we used', 'Why']}
          rows={[
            ['Goal portfolio return', '7.0% a year after fees', 'Your own recorded expectation, which your profile rates Realistic. The five-year figures in §2 use it directly'],
            ['Long-term return', '6.5% a year after fees', 'Deliberately below your expectation for the ten-year retirement projection — the safe direction for any error to run'],
            ['Inflation', '2.5% a year', 'Used for every "in today\'s money" figure'],
            ['Take-home income', '$66,300 a month', 'Estimated from $1,436,496 before tax at top marginal rates. Must be replaced with your actual position'],
            ['Retirement age', '67', 'Ten years, per your profile'],
            ['Drawdown at retirement', '4.5%', 'Illustrative, and used for the daughters' + '’' + ' income figure too. The two-layer structure in §6 gets modelled properly closer to the time'],
          ]}
        />
        <div className="fp-box fp-box--warn">
          <span className="fp-box-label">Important</span>
          <p>
            This document has been prepared to show how a MoneyMind profile fits into a standard
            financial plan. It is not personal financial advice and it is not a Statement of Advice.
          </p>
          <p style={{ marginTop: 12 }}>
            The behavioral content comes from the MoneyMind Client Report dated 18 August 2026.
            Income, home value, other assets, years to retirement, return expectations and the
            recorded goal are taken from that report. The client's name has been changed for
            anonymity. Spending, liabilities, the seed amount, the portfolio and all other figures
            have been constructed for illustration and must be replaced with actual data before any
            advice is given.
          </p>
          <p style={{ marginTop: 12 }}>
            Projections are estimates, not promises. Real returns will vary and can be negative.
            Tax, social security, superannuation and estate rules change over time and differ
            between jurisdictions. Anything acted on must be prepared under the licensing and
            disclosure rules of the relevant country.
          </p>
        </div>
      </section>
    </div>
  );
}
