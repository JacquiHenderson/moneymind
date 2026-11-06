'use client';
import { useState, useMemo, useRef, useEffect } from 'react';

// Seven Client Archetypes — complete methodology document.
// Faithful reproduction of the MoneyMind Archetypes reference as a data-driven page,
// laid out like the MoneyPattern guide: sticky search + "Jump to" chips, sections
// that flow down the page with an active chip that tracks scroll position.

const ARCHETYPES = [
  {
    num: '01',
    name: 'The Security Seeker',
    genPop: '20–25%',
    advisory: '22–28%',
    pattern:
      'Security Seekers save consistently, motivation is fear of loss, not growth ambition. They systematically under-invest in equities, favouring cash, bonds, term deposits, and guaranteed income products.',
    roadblocks:
      'Under-investment in growth assets. Hold losing positions too long while selling profitable ones prematurely. High risk of reactive selling that crystallises losses at the worst time. Have a compounding financial cost of insufficient equity participation over long horizons.',
    optimise: [
      { h: 'Bucket strategy first', body: 'Create a visible “security foundation” bucket.' },
      { h: 'Prevention-focus translation', body: 'Reframe growth as inflation risk reduction, “not growing = losing purchasing power.” Works with their psychology, not against it.' },
      { h: 'Recovery evidence', body: 'Show historical drawdown-and-recovery data. More persuasive for prevention-focused clients than forward-looking return projections.' },
      { h: 'Do not educate away the loss aversion', body: 'The emotional cost of uncertainty genuinely outweighs the mathematical benefit of higher expected returns. Accept this and work within it.' },
    ],
    keywords: ['Security', 'Protection', 'Capital preservation', 'Certainty', 'Safety floor', 'Never at risk', 'Protecting purchasing power', 'Evidence of recovery'],
    signature: [
      ['Loss Aversion', 'High (3–9)', 'PRIMARY DRIVER'],
      ['Motivation', 'Prevention & Security', 'PRIMARY DRIVER'],
      ['Financial Anxiety', 'Low → Moderate', 'BOUNDARY MARKER'],
      ['Resilience', 'Moderate → High', 'BOUNDARY MARKER'],
      ['Discipline', 'Moderate → Disciplined', 'SECONDARY'],
      ['Time Orientation', 'Balanced → Present Bias', 'SECONDARY'],
      ['Risk Tolerance', 'Very Low → Low', 'CONFIRMATORY'],
      ['Optimism', 'Balanced → Pessimistic', 'CONFIRMATORY'],
      ['Locus of Control', 'Mixed → External', 'CONFIRMATORY'],
      ['Future Confidence', 'Moderate', 'MODIFIER'],
      ['Mindset', 'Scarcity → Balanced', 'MODIFIER'],
    ],
    science: [
      { term: 'Loss Aversion — Tier 1:', body: 'Kahneman & Tversky (1979, Nobel 2002). Brown et al. (2020) — meta-analysis of 607 empirical estimates from 150 articles, mean λ=1.8–2.1. Cross-disciplinary replication across economics, psychology, and neuroscience.' },
      { term: 'Prevention Regulatory Focus — Tier 3:', body: 'Higgins (1997); Crowe & Higgins (1997). Prevention-focused individuals energised by avoiding negative outcomes — saving motivated by fear of failure, not growth ambition. Every financial decision filtered through "what could go wrong?"' },
      { term: 'Regret Aversion — Tier 3:', body: 'Kumar et al. (2024) meta-analysis, 31 studies, r=0.401. Drives disposition effect (holding losers too long, selling winners too early) and status quo bias.' },
      { term: 'Certainty Preference — Tier 4:', body: 'Duke et al. (2017); Lim et al. (2019); Donnelly et al. (2022). Stable preference for a certain outcome over a higher expected-value risky one. Primary driver of guaranteed income product preference.' },
    ],
    primaryRisk:
      'Under-investment in growth assets. The compounding cost of excessive conservatism over long horizons is often larger than the risk they are protecting against.',
    moneyPattern: {
      intro:
        "Strongest in Saving and Spending, held back in Investment and Market Response — safety comes first, sometimes at the cost of growth.",
      rows: [
        ["Saving", "Saves consistently; builds large cash buffers", "Discipline — saving is a habit, not a struggle", "Holds more cash than the plan needs", "Set a target buffer (e.g. 6 months); sweep the excess to goals"],
        ["Spending", "Careful, value-conscious, rarely overspends", "Lives within means without effort", "Under-spends on things that matter; guilt when spending", "Pre-approve a guilt-free spending allocation"],
        ["Retirement Planning", "Plans early and values certainty", "Takes the future seriously", "Favours guaranteed outcomes over adequate ones", "Show the inflation gap in dollars at retirement age"],
        ["Market Response", "Loss-sensitive; unsettled by drawdowns", "Won’t chase hype or bubbles", "Reactive selling in downturns crystallises losses", "Share recovery evidence before volatility, not during"],
        ["Investment", "Favours cash, bonds and guaranteed products", "Protects capital", "Under-invests in growth assets; disposition effect (holds losers, sells winners early)", "Security foundation bucket first; frame growth as protection against inflation"],
      ],
      headline:
        "Your safety net is a strength — the next step is letting part of it grow.",
    },
  },
  {
    num: '02',
    name: 'The Confident Grower',
    genPop: '9–13%',
    advisory: '12–16%',
    pattern:
      'The Confident Grower saves consistently, invests broadly, holds through market volatility, engages proactively with retirement planning, rarely makes emotionally driven portfolio changes.',
    roadblocks:
      'Overconfidence. High self-efficacy can shade into overestimation of financial skill. Optimism bias produces return overestimation. Tail risks: insurance gaps, concentration risk, sequence-of-returns risk, systematically under-weighted.',
    optimise: [
      { h: 'Co-strategist engagement', body: "Advisor's role shifts from motivator to co-strategist to stress-test thinking. Relationship should feel like a board conversation." },
      { h: 'Evidence-based return calibration', body: 'Ground projections in realistic benchmarks. Build plans that hold up if the next decade.' },
      { h: 'Structured blind spot review', body: 'Review whether confidence is calibrated against actual performance, risk exposure, and protective planning gaps.' },
      { h: 'Full planning breadth appropriate', body: 'Estate planning, tax-effective structures, and multi-generational wealth conversations.' },
    ],
    keywords: ['Growth', 'Strategy', 'Optimisation', 'Ambitious goals', 'Compounding', 'Evidence-based', 'Performance', 'Legacy', 'Co-strategist'],
    signature: [
      ['Loss Aversion', 'Low (18–21)', 'PRIMARY DRIVER'],
      ['Discipline', 'Disciplined (21–28)', 'PRIMARY DRIVER'],
      ['Time Orientation', 'Future Bias (score 3)', 'SECONDARY'],
      ['Motivation', 'Opportunity & Rewards (Promotion)', 'SECONDARY'],
      ['Risk Tolerance', 'High → Very High', 'CONFIRMATORY'],
      ['Future Confidence', 'High', 'CONFIRMATORY'],
      ['Locus of Control', 'Internal', 'CONFIRMATORY'],
      ['Optimism', 'Optimistic', 'MODIFIER'],
      ['Mindset', 'Abundance', 'MODIFIER'],
      ['Resilience', 'High', 'MODIFIER'],
    ],
    science: [
      { term: 'Future Time Perspective — Tier 2:', body: 'Kooij et al. (2018, 407 citations) — k=212 studies. FTP directly predicts retirement planning above and beyond Big Five personality. Baird et al. (2020, 378 studies, 91 citations) confirms self-regulatory mediation.' },
      { term: 'Self-Regulation / Discipline — Tier 1–2:', body: 'Baumeister; Mischel longitudinal. Sekscinska et al. (2021, N=1,468, 3 studies) — self-control positively predicts investment propensity. de Ridder et al. (2011, N=32,648).' },
      { term: 'Promotion Regulatory Focus — Tier 3:', body: 'Higgins (1997). Intrinsically self-sustaining motivation — does not require fear of loss to maintain financial commitment.' },
      { term: 'Future Self-Connection — Tier 3–4:', body: 'Hershfield et al. VR studies — direct causal effect on retirement contribution rates. Marques et al. (2018). Saving feels like investing in themselves, not sacrifice.' },
      { term: 'Internal Locus of Control — Tier 2:', body: 'Rotter (1966); 70+ years cross-cultural replication. Internal LOC drives proactive financial engagement, independent research, and consistent plan execution.' },
    ],
    primaryRisk:
      'Overconfidence. High self-efficacy can shade into overestimation of financial skill (Bandura, 1986). Optimism bias produces return overestimation of 10–15%. Tail risks — insurance gaps, concentration risk, sequence-of-returns risk — systematically under-weighted.',
    moneyPattern: {
      intro:
        "Strong across most domains — the gaps are tail risk and the less visible domains, like spending drift and retirement income.",
      rows: [
        ["Saving", "Saves steadily as part of a wider plan", "Treats saving as fuel for growth", "May run a thin emergency buffer because “the portfolio is liquid”", "Keep a dedicated cash buffer outside the portfolio"],
        ["Spending", "Comfortable spending; lifestyle rises with success", "Enjoys money without anxiety", "Lifestyle creep goes unnoticed", "Review spending annually against long-term goals"],
        ["Retirement Planning", "Engaged and ambitious about the future", "Thinks in decades", "Assumes optimistic returns; under-plans for sequence and longevity risk", "Stress-test the plan with evidence-based return assumptions"],
        ["Market Response", "Holds through volatility", "Calm under pressure — doesn’t panic sell", "Overconfident in timing or recovery", "Pre-agree what would change the strategy"],
        ["Investment", "Invests broadly across growth assets", "Long-term ownership mindset", "Concentration and under-weighted tail risks", "Co-strategist role; review concentration and downside scenarios"],
      ],
      headline:
        "You build wealth with confidence — the next step is protecting it from the risks you don’t see.",
    },
  },
  {
    num: '03',
    name: 'The Quiet Worrier',
    genPop: '15–20%',
    advisory: '10–14%',
    pattern:
      'This is a psychological state, not a financial one. The self-reinforcing loop: financial anxiety triggers avoidance → avoidance prevents the actions that reduce anxiety → anxiety increases. Scarcity mindset narrows cognitive bandwidth to immediate threats, making retirement planning and investment decisions inaccessible when anxiety is highest.',
    roadblocks:
      'The self-reinforcing loop creates the financial shortfalls - deferred decisions and under-saving. Avoidance produces genuine vulnerability, which amplifies anxiety. The loop must be broken with one small, visible win before any strategy conversation.',
    optimise: [
      { h: 'One small win before any strategy', body: 'Single simplest action with a visible positive result within 30 days. One automated contribution. One goal written down.' },
      { h: 'Automate everything', body: 'Contributions that run regardless of how the client feels. Most important structural protection.' },
      { h: 'Radical simplification', body: 'One decision per meeting. Plain language for every element. Every meeting ends with one specific next action, not a list.' },
      { h: 'Trust before strategy', body: 'Do not lead with complexity. Distinguish anxiety source: inexperience, past negative events, or trait anxiety, each requires a different initial approach.' },
    ],
    keywords: ['Safe', 'Simple', 'One step', 'Protected', 'Automatic', 'Nothing to worry about', "You don't have to figure this out alone"],
    signature: [
      ['Financial Anxiety', 'Moderate → High', 'DECISIVE — PRIORITY 1'],
      ['Resilience', 'Low → Moderate', 'DECISIVE — PRIORITY 1'],
      ['Loss Aversion', 'High → Very High', 'SECONDARY'],
      ['Mindset', 'Scarcity', 'SECONDARY'],
      ['Future Confidence', 'Low', 'SECONDARY'],
      ['Time Orientation', 'Present Bias', 'SECONDARY'],
      ['Discipline', 'Low → Moderate', 'SECONDARY'],
      ['Motivation', 'Prevention (extreme)', 'CONFIRMATORY'],
      ['Locus of Control', 'External', 'CONFIRMATORY'],
      ['Vulnerability Score', 'Moderate → High', 'CONFIRMATORY'],
      ['Action Orientation', 'Deliberative (paralysed)', 'CONFIRMATORY'],
    ],
    science: [
      { term: 'Financial Anxiety — Tier 3:', body: 'Archuleta et al. (2013) — validated scales specific to financial threat appraisal. Financial anxiety and avoidance independently predict under-saving above and beyond income or knowledge level.' },
      { term: 'Resilience as boundary marker:', body: 'Connor-Davidson Resilience Scale. The joint signal of low resilience with financial anxiety discriminates from Archetype 6: anxiety without resilience produces avoidance loops; anxiety with adequate resilience does not.' },
      { term: 'Scarcity Mindset — Tier 5:', body: 'Mullainathan & Shafir (2013) — scarcity imposes a cognitive bandwidth tax. Tunnelling produces intense focus on immediate threats that crowds out long-term thinking.' },
      { term: 'Present Bias — Tier 1:', body: 'Imai et al. (2019) — 220 estimates from 28 articles. Amplified by anxiety into complete avoidance of future-oriented financial thinking.' },
      { term: 'External Locus of Control — Tier 2:', body: 'Rotter (1966). External LOC reinforces avoidance: "what’s the point of planning when I can’t control what happens anyway?"' },
    ],
    note:
      'Critical principle: This is a psychological state, not a financial one. A high-income, high-net-worth client can present with Archetype 3. Wealth and income do not determine this archetype. Anxiety and resilience level do.',
    primaryRisk:
      'The self-reinforcing loop creates the financial shortfalls it fears. Avoidance produces genuine vulnerability, which amplifies anxiety. The loop must be broken with one small, visible win before any strategy conversation.',
    moneyPattern: {
      intro:
        "A state, not a wealth level — anxiety and avoidance can show up in every domain, so progress starts with one small, visible win.",
      rows: [
        ["Saving", "Wants to save but avoids checking balances", "Cares deeply about getting it right", "Avoidance means no consistent system", "Automate one small transfer on payday"],
        ["Spending", "Spending feels stressful; scarcity thinking even when comfortable", "Highly aware of money’s impact", "Stress spending or avoiding statements altogether", "One weekly 10-minute check-in, not a full budget"],
        ["Retirement Planning", "The future feels overwhelming, so it’s put off", "Takes long-term security seriously", "Avoidance loop — the bigger it feels, the less it’s touched", "One decision per meeting; break the goal into a first step"],
        ["Market Response", "News and drawdowns heighten worry", "Cautious — unlikely to take reckless risks", "May avoid looking, or act on fear", "Limit check frequency; agree a plan before markets move"],
        ["Investment", "Hesitant to start; accepts unsuitable defaults rather than choosing", "Open to guidance when it feels safe", "Inaction — money sits idle", "Start with a simple default option and automate contributions"],
      ],
      headline:
        "Your care about money is real — the next step is one small win that makes it feel lighter.",
    },
  },
  {
    num: '04',
    name: 'The Avid Optimist',
    genPop: '9–13%',
    advisory: '10–14%',
    pattern:
      'Highly financially engaged, monitors markets actively, acts on opportunities quickly. Overconfidence combined with action orientation produces excess trading that underperforms passive strategies.',
    roadblocks:
      'Each reactive portfolio move, selling low, buying at peak enthusiasm, carries direct financial cost. Low loss aversion reverses sharply when actual losses materialise, producing panic selling at market lows. FOMO-driven investment decisions and salary-matched lifestyle inflation are characteristic.',
    optimise: [
      { h: 'Mandatory pause protocol', body: 'Structured 48–72 hour cooling-off period before any significant financial decision. Pre-agreed in writing before it is needed.' },
      { h: 'Pre-agreed change criteria', body: 'Written checklist a strategy change must satisfy before implementation. Channels decisiveness toward genuinely warranted actions.' },
      { h: 'Automate before engaging', body: 'Contributions and savings automated before money reaches the spending account. Removes the need for impulse override entirely.' },
      { h: 'Identify specific trigger patterns', body: 'Curiosity, FOMO, news cycles, market volatility. Build targeted guardrails around exactly those moments.' },
    ],
    keywords: ['Structure', 'Precision', 'Pre-agreed', 'Before markets move', 'Automated', 'Channelling your energy', 'Protecting your gains'],
    signature: [
      ['Discipline', 'Impulsive (4–11)', 'PRIMARY DRIVER'],
      ['Loss Aversion', 'Low (18–21)', 'PRIMARY DRIVER'],
      ['Motivation', 'Opportunity & Rewards (Promotion)', 'SECONDARY'],
      ['Action Orientation', 'Action-Oriented', 'SECONDARY'],
      ['Optimism', 'Optimistic', 'SECONDARY'],
      ['Risk Tolerance', 'High', 'CONFIRMATORY'],
      ['Time Orientation', 'Present-leaning', 'CONFIRMATORY'],
      ['Locus of Control', 'Mixed → Internal (overconfident)', 'CONFIRMATORY'],
      ['Future Confidence', 'Moderate → High', 'MODIFIER'],
    ],
    science: [
      { term: 'Self-Control Failure — Tier 2:', body: 'Uhr et al. (2021, N=13,644 brokerage clients) — self-control failure directly predicts higher portfolio turnover and exacerbates overconfidence in live trading.' },
      { term: 'Overconfidence — Tier 3:', body: 'Kumar et al. (2024) meta-analysis, 31 studies, r=0.346. Barber & Odean — excess trading and lower net returns. The Barber-Odean effect is the central academic description of this archetype.' },
      { term: 'Optimism Bias — Tier 3:', body: 'Scheier & Carver dispositional optimism. Return overestimation of 10–15%. Harmful when combined with impulsive execution.' },
      { term: 'Lifestyle Inflation:', body: 'de Ridder et al. (2011); Baumeister; Mischel. Impulsiveness is a strong predictor of irregular saving and salary-matched lifestyle inflation.' },
    ],
    primaryRisk:
      'Each reactive portfolio move — selling low, buying at peak enthusiasm — carries direct financial cost. Cumulative across a full market cycle, impact is substantial and hard to recover from.',
    moneyPattern: {
      intro:
        "Energy and engagement are high in every domain — the work is putting a pause between impulse and action, especially in Spending and Market Response.",
      rows: [
        ["Saving", "Saves in bursts, then redirects to the next opportunity", "Motivated by goals and momentum", "Savings get raided for new ideas", "Automate saving before money reaches the spending account"],
        ["Spending", "Quick decisions; enjoys experiences and new things", "Generous and decisive", "Impulse purchases and salary-matched lifestyle inflation", "A 48-hour pause rule for non-essential spends over a set amount"],
        ["Retirement Planning", "Optimistic the future will work out", "Positive, future-ready mindset", "Assumes it will be fine without checking the numbers", "Show the gap in dollars; set auto-escalating contributions"],
        ["Market Response", "Reacts fast to news and trends", "Stays engaged when others switch off", "Excess trading; panic selling at lows when real losses hit", "Mandatory pause protocol; pre-agreed change criteria"],
        ["Investment", "Drawn to themes, tips and fast-moving assets", "Willing to back growth", "Concentration and chasing performance", "Core-satellite: automated core, small capped “explore” allocation"],
      ],
      headline:
        "Your energy moves things forward — the next step is a pause that lets your best ideas win.",
    },
  },
  {
    num: '05',
    name: 'The Informed Analyst',
    genPop: '5–8%',
    advisory: '8–12%',
    pattern:
      'The Informed Analyst brings genuine analytical depth. Researches thoroughly before committing, asks probing questions, scrutinises fees and product detail, rarely makes emotionally driven portfolio changes. This means they take personal responsibility for outcomes, producing both the strength (via preparation) and the vulnerability (analysis not feeling complete enough).',
    roadblocks:
      'Under-implementation. The cost of failing to act on sound strategies because the analysis never feels complete. On time-sensitive decisions, thoroughness works against them. The compounding cost of delayed decisions accumulates in ways that are hard to recover from.',
    optimise: [
      { h: 'Hard decision dates', body: 'Explicit deadlines: 48 hours for routine administration, one week for moderate complexity, one month maximum for major strategic decisions. A specific date transforms “still gathering information” into “ready to decide.”' },
      { h: 'Provide the analytical depth they need', body: "Do not oversimplify. This client's financial literacy means they can engage with, and need to engage with, complexity before committing." },
      { h: 'Quick-win actions first', body: '3–5 financial actions that are clearly beneficial and require the least analysis. Implement immediately. Builds evidence that action is safe.' },
      { h: 'Frame as performance enhancement', body: 'Internal ownership means highly receptive to “here\'s how to optimise what you\'re doing.” Not receptive to “you need to take more action.”' },
    ],
    keywords: ['Evidence', 'Research', 'Analysis', 'Optimise', 'Specific', 'Comprehensive', 'Performance', 'Calibrate', 'Benchmark'],
    signature: [
      ['Locus of Control', 'Internal', 'PRIMARY DRIVER'],
      ['Financial Understanding', 'Strong', 'PRIMARY DRIVER'],
      ['Loss Aversion', 'Moderate (10–17)', 'SECONDARY'],
      ['Discipline', 'Disciplined (21–28)', 'SECONDARY'],
      ['Action Orientation', 'Deliberative', 'SECONDARY'],
      ['Financial Experience', 'Intermediate → Experienced', 'CONFIRMATORY'],
      ['Financial Confidence', 'Moderate → High', 'CONFIRMATORY'],
      ['Motivation', 'Balanced', 'CONFIRMATORY'],
      ['Risk Tolerance', 'Moderate → High', 'CONFIRMATORY'],
      ['Time Orientation', 'Balanced', 'MODIFIER'],
      ['Big Picture Style', 'Detail-Oriented', 'MODIFIER'],
    ],
    science: [
      { term: 'Internal Locus of Control — Tier 2:', body: 'Rotter (1966); 70+ years cross-cultural replication across 40+ countries. Internal LOC drives proactive financial engagement, research behavior, and consistent plan execution. This is the root cause of deliberative behavior — because they believe their choices determine outcomes, they invest heavily in getting those choices right.' },
      { term: 'Financial Acumen — Tier 2:', body: 'Lusardi & Mitchell — 40+ country research programme. Goyal et al. (2020, 791 citations) — 502-article systematic review. Financial knowledge predicts saving rates and retirement contributions. Strongest in composite with self-regulation and LOC.' },
      { term: 'Goal Specificity — Tier 3:', body: 'Gollwitzer implementation intentions (400+ studies); Locke & Latham goal-setting theory. Without implementation deadlines, deliberation converts to delay.' },
      { term: 'State Orientation — Tier 4:', body: 'Kuhl (1985) — state-oriented individuals excel at decision quality but are vulnerable to under-implementation.' },
      { term: 'Cognitive Reflection — Tier 4:', body: 'Frederick CRT (2005). Consistently engages System 2 (analytical) processing. Inverse relationship with impulsive risk-taking.' },
    ],
    primaryRisk:
      'Under-implementation. The cost of failing to act on sound strategies because the analysis never feels complete. On time-sensitive decisions, thoroughness works against them. The compounding cost of delayed decisions accumulates in ways that are hard to recover from.',
    moneyPattern: {
      intro:
        "Knows the most and acts the least in some domains — the gap is between analysis and implementation, across all five.",
      rows: [
        ["Saving", "Knows the optimal savings rate; may not have set it up", "Clear on the numbers", "Optimising the plan delays starting it", "Pick a “good enough” rate now; refine later"],
        ["Spending", "Tracks and analyses spending in detail", "Strong awareness of where money goes", "Tracking replaces changing", "Choose one category to act on this month"],
        ["Retirement Planning", "Models scenarios thoroughly", "Internal locus of control — owns the outcome", "Endless modelling, no decision", "Hard decision dates for each milestone"],
        ["Market Response", "Researches before reacting", "Rational, evidence-led under volatility", "Over-analysis can miss rebalancing windows", "Rules-based rebalancing set in advance"],
        ["Investment", "Researches products and allocations deeply", "Makes informed choices", "Under-implementation — cash waits for the perfect option", "Quick-win actions; deep analytical content as support, not a gate"],
      ],
      headline:
        "Your research is a strength — the next step is turning it into action on a date.",
    },
  },
  {
    num: '06',
    name: 'The Present Explorer',
    genPop: '13–18%',
    advisory: '14–18%',
    pattern:
      'Not distressed by money, simply not thinking about the financial future with sufficient vividness or urgency. When the future self does not feel real, saving for retirement is neurologically similar to giving money to a stranger.',
    roadblocks:
      'The compounding retirement gap. This client typically has adequate income, the gap is behavioral, not financial. Consistent lifestyle inflation captures salary increases before they reach the spending account. Wealth creation consistently lags income growth and insufficient retirement savings.',
    optimise: [
      { h: 'Future self visualisation', body: 'Describe retirement life vividly, not the finances, just the life. Brief future-self visualisation measurably increases saving intentions.' },
      { h: 'Fresh-start framing', body: 'Link contribution increases or automation to a personally meaningful upcoming date. New beginning framing rather than sacrifice framing.' },
      { h: 'Automate before everything', body: 'Contributions running before money reaches the spending account. Capture every salary increase with a contribution increase.' },
      { h: 'Build present-spending allocation into the plan', body: 'Explicit guilt-free spending allocation alongside automated savings. When present enjoyment is funded and protected, future savings automation feels less like restriction.' },
    ],
    keywords: ['Your future self', 'What your life looks like', 'Automatic', 'Already done', 'Before you see it', 'Your next birthday', 'Fresh start'],
    signature: [
      ['Time Orientation', 'Present Bias (score 0)', 'PRIMARY — DECISIVE'],
      ['Resilience', 'Moderate → High', 'BOUNDARY MARKER (NOT ARCHETYPE 3)'],
      ['Financial Anxiety', 'Low → Moderate', 'BOUNDARY MARKER (NOT ARCHETYPE 3)'],
      ['Future Confidence', 'Low → Moderate', 'SECONDARY'],
      ['Discipline', 'Moderate (12–20)', 'SECONDARY'],
      ['Loss Aversion', 'Moderate (10–17)', 'SECONDARY'],
      ['Motivation', 'Balanced', 'CONFIRMATORY'],
      ['Locus of Control', 'Mixed → External', 'CONFIRMATORY'],
      ['Mindset', 'Balanced → Scarcity', 'MODIFIER'],
      ['Risk Tolerance', 'Moderate', 'MODIFIER'],
    ],
    science: [
      { term: 'Present Bias — Tier 1:', body: 'Imai et al. (2019) — meta-analysis of 220 present-bias estimates from 28 articles; the most replicated barrier to saving. The primary distinguishing dimension separating Archetype 6 from Archetypes 5 and 7.' },
      { term: 'Future Time Perspective — Tier 2 (inverse):', body: 'Kooij et al. (2018, k=212 studies) — FTP directly predicts retirement outcomes above and beyond Big Five. This client scores low on FTP — retirement feels abstract and distant.' },
      { term: 'Future Self-Continuity — Tier 3–4 (deficit):', body: 'Hershfield et al. VR studies — without a vivid future self, saving for retirement is neurologically similar to giving money to a stranger.' },
      { term: 'Fresh-Start Effect — Tier 4:', body: 'Beshears et al. (2021, N=6,082 field experiment) — linking financial commitments to a personally meaningful upcoming date significantly increases uptake. Highest-efficacy direct intervention for present bias.' },
      { term: 'Implementation Intentions — Tier 3:', body: 'Gollwitzer (400+ studies). Good intentions without specific when/where/how plans fail to convert to action.' },
    ],
    primaryRisk:
      'The compounding retirement gap. This client typically has adequate income — the gap is behavioral, not financial. Without automation that captures salary increases before they reach the spending account, wealth creation consistently lags income growth regardless of earnings.',
    moneyPattern: {
      intro:
        "Comfortable with money today, loosely connected to the future — Retirement Planning and Saving carry the risk; Spending carries the joy.",
      rows: [
        ["Saving", "Saves what’s left over, if anything", "Relaxed, not anxious about money", "No system — saving is an afterthought", "Pay-yourself-first automation on payday"],
        ["Spending", "Spends on experiences and the present", "Knows how to enjoy life", "Lifestyle inflation captures pay rises before they’re saved", "Keep a present-spending allocation so saving doesn’t feel like loss"],
        ["Retirement Planning", "The future self feels distant", "Open and flexible about what’s ahead", "Compounding retirement gap", "Future-self visualisation; fresh-start framing (birthdays, new job, new year)"],
        ["Market Response", "Largely unbothered by market moves", "Doesn’t panic", "Disengaged — may not notice when action is needed", "Annual review nudge tied to a fresh-start date"],
        ["Investment", "Low engagement; defaults or nothing", "No emotional baggage about investing", "Starts late; misses compounding years", "Automated default allocation; show the cost of waiting one year"],
      ],
      headline:
        "You know how to live well now — the next step is inviting your future self to the party.",
    },
  },
  {
    num: '07',
    name: 'The Pragmatic Realist',
    genPop: '18–25%',
    advisory: '16–22%',
    pattern:
      'Manages money adequately without being exceptional at it. Makes reasonable financial decisions at a moderate pace. Saves inconsistently. Has moderate retirement engagement, thinks about it but without urgency or specificity. Responds positively to professional advice when prompted but does not seek it proactively.',
    roadblocks:
      'The primary failure mode is under-optimisation across all dimensions. No single catastrophic decision, or something visibly wrong, but consistent small gaps in savings rates, insurance adequacy, retirement contributions, or investment diversification.',
    optimise: [
      { h: 'Make the invisible cost visible', body: 'Show the compounding gap between current trajectory and an optimised one, specifically in retirement dollars. Concrete numbers create urgency where general advice does not.' },
      { h: 'Automate all foundational behaviors', body: 'Emergency fund to target level. Retirement contributions at recommended rate. Debt repayments. Strong response to automation because there is no dominant psychological resistance.' },
      { h: 'Goal specificity as the activation mechanism', body: 'Specific implementation intentions convert moderate intentions to action. Vague goals stay vague; concrete plans with dates and amounts get executed.' },
      { h: 'Dual framing', body: 'Present strategies with both positive framing and loss framing. Because neither motivation is dominant, dual framing captures both dimensions.' },
    ],
    keywords: ["Here's what your trajectory looks like", "Here's the gap", "Let's set that up automatically", 'Specific goal', 'Concrete date', 'Structured review on [date]'],
    signature: [
      ['Loss Aversion', 'Moderate (10–17)', 'PRIMARY'],
      ['Discipline', 'Moderate (12–20)', 'PRIMARY'],
      ['Time Orientation', 'Balanced (score 1–2)', 'DECISIVE DIFFERENTIATOR FROM ARCHETYPE 6'],
      ['Motivation', 'Balanced', 'SECONDARY'],
      ['Locus of Control', 'Mixed', 'SECONDARY'],
      ['Financial Anxiety', 'Low → Moderate', 'CONFIRMATORY'],
      ['Resilience', 'Moderate', 'CONFIRMATORY'],
      ['Risk Tolerance', 'Moderate', 'CONFIRMATORY'],
      ['Optimism', 'Balanced', 'MODIFIER'],
      ['Future Confidence', 'Moderate', 'MODIFIER'],
      ['Financial Understanding', 'Developing → Strong', 'MODIFIER'],
    ],
    science: [
      { term: 'Statistical modality:', body: 'Brüggen et al. (2017); Netemeyer et al. (2018 — Financial Well-Being Scale). Academic clustering literature consistently identifies a large "middle" cluster scoring near the median on most financial psychology dimensions. This population is empirically real and large — not a residual category.' },
      { term: 'Balanced Regulatory Focus — Tier 3:', body: 'Higgins (1997); Crowe & Higgins (1997). Roughly 15–20% of the population shows genuinely balanced regulatory focus — neither growth ambition nor loss fear dominant.' },
      { term: 'Mixed Temporal Orientation — Tier 1–2:', body: 'Frederick et al. (2002) confirm mixed intertemporal preferences (score 1–2) are empirically distinct from both present bias and future bias. A stable profile, not a transitional state.' },
      { term: 'Moderate Self-Control — Tier 2:', body: 'de Ridder et al. (2011, N=32,648) — self-control distributes approximately normally. The modal outcome is moderate self-control.' },
      { term: 'Mixed Locus of Control — Tier 2:', body: 'Rotter (1966). Mixed LOC (∼35–40% of population) is the modal outcome. Produces situationally variable engagement rather than consistent proactive or passive behavior.' },
    ],
    note:
      'Critical insight: This is the most malleable archetype. With no dominant psychological resistance, the Pragmatic Realist responds well to all standard interventions. The gap between their current trajectory and an optimised trajectory is large — and the interventions to close it are straightforward. This is the highest advisor value-add opportunity in the entire archetype system.',
    primaryRisk:
      'The compounding cost of "good enough" versus optimised over 30 years. No single dramatic failure mode. The greatest risk is that neither the client nor their advisor identifies this as urgent, because nothing is visibly wrong in the short term.',
    moneyPattern: {
      intro:
        "Adequate in every domain, outstanding in none — the opportunity is the quiet compounding cost of “good enough” across all five.",
      rows: [
        ["Saving", "Saves, but inconsistently", "Balanced and level-headed", "Irregular amounts; no clear target", "Automate emergency fund to target, then a fixed amount; name the goal it’s for"],
        ["Spending", "Generally sensible; occasional drift", "No extreme habits to unwind", "Small leaks go unexamined", "One spending review per quarter, focused on the top 3 categories"],
        ["Retirement Planning", "Has a rough idea, not a specific plan", "Realistic expectations", "Vague goals mean under-saving", "Goal specificity — a target amount and date"],
        ["Market Response", "Steady; rarely reacts strongly", "Emotionally even under volatility", "May miss rebalancing or opportunities", "Calendar-based rebalancing"],
        ["Investment", "Invested, but rarely reviewed", "Already in the market", "Fees, allocation and cash drag go unchecked", "Make the gap visible in dollars; dual framing (gain and avoided loss)"],
      ],
      headline:
        "You’re doing fine — the next step is seeing what “fine” is costing you.",
    },
  },
];

const PRIMARY_COMPARISON = [
  ['1. Security Seeker', 'High', 'Moderate', 'Balanced', 'Mixed', 'Under-investment in growth'],
  ['2. Confident Grower', 'Low', 'Disciplined', 'Future bias', 'Internal', 'Overconfidence, tail risk'],
  ['3. Quiet Worrier', 'Very High', 'Low', 'Present bias', 'External', 'Avoidance loop'],
  ['4. Avid Optimist', 'Low (volatile)', 'Impulsive', 'Present-leaning', 'Mixed', 'Excess trading, lifestyle inflation'],
  ['5. Informed Analyst', 'Moderate', 'Disciplined', 'Balanced', 'Internal', 'Under-implementation'],
  ['6. Present Explorer', 'Moderate', 'Moderate', 'Present bias', 'Mixed', 'Retirement under-saving'],
  ['7. Pragmatic Realist', 'Moderate', 'Moderate', 'Balanced', 'Mixed', 'Chronic under-optimisation'],
];

const COMMS_APPROACH = [
  ['1. Security Seeker', 'Capital protection, security floor, recovery evidence', '"Growth opportunity," performance-first', 'Bucket strategy first; then modest growth within protection frame'],
  ['2. Confident Grower', 'Co-strategist framing, ambitious goals, optimisation', 'Oversimplification, lack of challenge', 'Peer-level discussion; structured challenge questions; full planning breadth'],
  ['3. Quiet Worrier', 'One simple action, trust-building, automation', 'Complexity, lists, multiple decisions', 'One decision maximum; end with one specific next action only'],
  ['4. Avid Optimist', 'Structure, pre-agreed criteria, channelling energy', 'Framing that validates reactive action', 'Establish pause protocol first; direct to high-impact activities'],
  ['5. Informed Analyst', 'Analytical depth, evidence, specific data', 'Oversimplification, "trust me" framing', 'Provide comprehensive analysis; set hard decision date before next meeting'],
  ['6. Present Explorer', 'Future self vivid description, fresh-start date, automation', 'Abstract projections, complex multi-step plans', 'Visualisation exercise; set automation with fresh-start date on the day'],
  ['7. Pragmatic Realist', 'Concrete gap numbers, specific plan, dual framing', 'Vague encouragement, generic "save more" advice', 'Show the gap in dollars; set up automation; schedule structured reviews'],
];

// Map a role label to a colour tier by its leading keyword.
function roleClass(role) {
  const r = role.toLowerCase();
  if (r.startsWith('primary') || r.startsWith('decisive')) return 'pa-role--primary';
  if (r.startsWith('secondary')) return 'pa-role--secondary';
  if (r.startsWith('boundary')) return 'pa-role--boundary';
  if (r.startsWith('modifier')) return 'pa-role--modifier';
  return 'pa-role--confirmatory';
}

const shortName = (name) => name.replace(/^The\s+/, '');

function Archetype({ a, refCb }) {
  return (
    <section
      className="bd-domain-section pa-arch"
      id={`archetype-${a.num}`}
      data-domain={a.name}
      ref={refCb}
    >
      <div className="bd-domain-head">
        <h2 className="bd-domain-title"><span className="pa-arch-num">{a.num}</span> {a.name}</h2>
        <span className="bd-domain-count">{a.genPop} general · {a.advisory} advisory</span>
      </div>

      <div className="pa-stats">
        <div className="pa-stat">
          <span className="pa-stat-label">General population</span>
          <span className="pa-stat-num">{a.genPop}</span>
        </div>
        <div className="pa-stat">
          <span className="pa-stat-label">Advisory client base</span>
          <span className="pa-stat-num">{a.advisory}</span>
        </div>
      </div>

      <div className="pa-block">
        <h3 className="pa-h">Pattern</h3>
        <p className="pa-p">{a.pattern}</p>
        {a.note ? <p className="pa-note">{a.note}</p> : null}
      </div>

      <div className="pa-block">
        <h3 className="pa-h">Roadblocks</h3>
        <p className="pa-p">{a.roadblocks}</p>
      </div>

      <div className="pa-block">
        <h3 className="pa-h pa-h--accent">Optimise</h3>
        <div className="pa-optimise">
          {a.optimise.map((o) => (
            <div className="pa-opt" key={o.h}>
              <div className="pa-opt-h">{o.h}</div>
              <p className="pa-opt-b">{o.body}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="pa-block">
        <h3 className="pa-h">Communication keywords</h3>
        <div className="pa-keywords">
          {a.keywords.map((k) => <span className="pa-kw" key={k}>{k}</span>)}
        </div>
      </div>

      <div className="pa-block pa-mp">
        <h3 className="pa-h pa-h--accent">MoneyPattern — across the five domains</h3>
        <p className="pa-p">{a.moneyPattern.intro}</p>
        <div className="pa-table-wrap">
          <table className="pa-table pa-table--mp">
            <thead>
              <tr>
                <th>Domain</th><th>How it shows up</th><th>Superpower</th><th>Roadblock</th><th>Optimise</th>
              </tr>
            </thead>
            <tbody>
              {a.moneyPattern.rows.map(([domain, shows, superpower, roadblock, optimise]) => (
                <tr key={domain}>
                  <td className="pa-td-dim">{domain}</td>
                  <td>{shows}</td>
                  <td className="pa-td-super">{superpower}</td>
                  <td>{roadblock}</td>
                  <td>{optimise}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="pa-mp-headline">
          <span className="pa-mp-headline-label">MoneyPattern headline</span>
          <p className="pa-mp-headline-text">{a.moneyPattern.headline}</p>
        </div>
      </div>

      <div className="pa-block">
        <h3 className="pa-h">Dimensional signature</h3>
        <div className="pa-table-wrap">
          <table className="pa-table">
            <thead>
              <tr><th>Dimension</th><th>Profile</th><th>Role in assignment</th></tr>
            </thead>
            <tbody>
              {a.signature.map(([dim, prof, role]) => (
                <tr key={dim}>
                  <td className="pa-td-dim">{dim}</td>
                  <td>{prof}</td>
                  <td><span className={`pa-role ${roleClass(role)}`}>{role}</span></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="pa-block">
        <h3 className="pa-h">Scientific foundation</h3>
        <ul className="pa-science">
          {a.science.map((s) => (
            <li key={s.term}><strong>{s.term}</strong> {s.body}</li>
          ))}
        </ul>
      </div>

      <div className="pa-risk">
        <span className="pa-risk-label">Primary risk</span>
        <p className="pa-p">{a.primaryRisk}</p>
      </div>

    </section>
  );
}

// searchable haystack per archetype
function haystack(a) {
  return [
    a.name, a.pattern, a.roadblocks, a.primaryRisk,
    a.keywords.join(' '),
    a.optimise.map((o) => `${o.h} ${o.body}`).join(' '),
    a.note || '',
    a.signature.map((s) => s.join(' ')).join(' '),
    a.moneyPattern.intro, a.moneyPattern.headline,
    a.moneyPattern.rows.map((r) => r.join(' ')).join(' '),
  ].join(' ').toLowerCase();
}

export default function PersonaArchetypes() {
  const [query, setQuery] = useState('');
  const [active, setActive] = useState(ARCHETYPES[0].name);
  const sectionRefs = useRef({});
  const lockRef = useRef(false);
  const lockTimer = useRef(null);

  const shown = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return ARCHETYPES;
    return ARCHETYPES.filter((a) => haystack(a).includes(q));
  }, [query]);

  // Scroll-spy: highlight the chip for whichever archetype is in view.
  useEffect(() => {
    const sections = shown.map((a) => sectionRefs.current[a.name]).filter(Boolean);
    if (!sections.length) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (lockRef.current) return;
        if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4) {
          setActive(shown[shown.length - 1].name);
          return;
        }
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) setActive(visible[0].target.dataset.domain);
      },
      { rootMargin: '-200px 0px -60% 0px', threshold: [0, 0.2, 0.5] }
    );
    sections.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [shown]);

  const jumpTo = (name) => {
    const el = sectionRefs.current[name];
    if (!el) return;
    lockRef.current = true;
    clearTimeout(lockTimer.current);
    setActive(name);
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    lockTimer.current = setTimeout(() => { lockRef.current = false; }, 900);
  };

  return (
    <div className="pa-doc bd-desk">
      <header className="pa-hero">
        <span className="pa-hero-kicker">MoneyMind Profile · Complete methodology document · Version 3.0</span>
        <div className="pa-hero-band">
          <div className="pa-hero-band-item">
            <span className="pa-hero-band-label">Verification</span>
            <span className="pa-hero-band-val">Academically verified across Consensus (200M+ papers) · Scholar Gateway · Peer-reviewed literature</span>
          </div>
          <div className="pa-hero-band-item">
            <span className="pa-hero-band-label">Coverage</span>
            <span className="pa-hero-band-val">Population coverage: 85–90% general population · 88–92% advisory population</span>
          </div>
        </div>
      </header>

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
              placeholder="Search archetypes — e.g. anxiety, retirement, overconfidence…"
              aria-label="Search archetypes"
            />
          </div>
          <div className="bd-count"><b>{shown.length}</b> archetype{shown.length === 1 ? '' : 's'}</div>
        </div>
        <div className="bd-chip-group">
          <span className="bd-chip-label">Jump to</span>
          {ARCHETYPES.map((a) => (
            <button
              key={a.name}
              type="button"
              className={`bd-chip${active === a.name ? ' is-active' : ''}`}
              onClick={() => jumpTo(a.name)}
            >
              {shortName(a.name)}
            </button>
          ))}
        </div>
      </div>

      {shown.length ? (
        shown.map((a) => (
          <Archetype key={a.num} a={a} refCb={(el) => { sectionRefs.current[a.name] = el; }} />
        ))
      ) : (
        <div className="bd-empty">No archetypes match — try clearing the search.</div>
      )}

      <section className="pa-compare bd-domain-section">
        <h2 className="pa-compare-title">Archetype Comparison Tables</h2>

        <h3 className="pa-h pa-h--accent">Primary comparison</h3>
        <div className="pa-table-wrap">
          <table className="pa-table pa-table--compare">
            <thead>
              <tr><th>Archetype</th><th>Loss aversion</th><th>Discipline</th><th>Time orientation</th><th>LOC</th><th>Primary risk</th></tr>
            </thead>
            <tbody>
              {PRIMARY_COMPARISON.map((row) => (
                <tr key={row[0]}>
                  <td className="pa-td-dim">{row[0]}</td>
                  {row.slice(1).map((cell, i) => <td key={i}>{cell}</td>)}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h3 className="pa-h pa-h--accent">Advisor communication approach</h3>
        <div className="pa-table-wrap">
          <table className="pa-table pa-table--compare">
            <thead>
              <tr><th>Archetype</th><th>Lead with</th><th>Avoid</th><th>Optimal meeting structure</th></tr>
            </thead>
            <tbody>
              {COMMS_APPROACH.map((row) => (
                <tr key={row[0]}>
                  <td className="pa-td-dim">{row[0]}</td>
                  {row.slice(1).map((cell, i) => <td key={i}>{cell}</td>)}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
