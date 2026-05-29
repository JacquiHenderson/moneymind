const Hex = ({ size = 22, fill = 'currentColor', stroke = 'none' }) => (
  <svg width={size} height={size * 1.155} viewBox="0 0 100 115" aria-hidden="true" style={{ display: 'block' }}>
    <polygon points="50,2 96,28.75 96,86.25 50,113 4,86.25 4,28.75" fill={fill} stroke={stroke} strokeWidth="1"/>
  </svg>
);

const HexCluster = () => {
  const tiles = [
    { x: 0,  y: 28, fill: '#A8C8DD' },
    { x: 22, y: 14, fill: '#A8C8DD' },
    { x: 44, y: 0,  fill: 'var(--mm-blue-mid)' },
    { x: 44, y: 28, fill: 'var(--mm-blue-deep)' },
    { x: 66, y: 14, fill: 'transparent', stroke: '#C9D4DC' },
  ];
  return (
    <div className="mm-mq-hex-cluster" aria-hidden="true">
      {tiles.map((t, i) => (
        <span key={i} className="mm-mq-hex-tile" style={{ left: `${t.x}px`, top: `${t.y}px` }}>
          <Hex size={32} fill={t.fill} stroke={t.stroke || 'none'} />
        </span>
      ))}
    </div>
  );
};

const HexWatermark = () => (
  <div className="mm-mq-hex-watermark" aria-hidden="true">
    <span style={{ top: 0,  right: 28 }}><Hex size={56} fill="rgba(82, 152, 191, 0.28)" /></span>
    <span style={{ top: 42, right: 56 }}><Hex size={56} fill="rgba(82, 152, 191, 0.18)" /></span>
    <span style={{ top: 84, right: 14 }}><Hex size={56} fill="rgba(82, 152, 191, 0.22)" /></span>
  </div>
);

const PhoneFrame = ({ tone = 'light', children, label }) => (
  <div className={`mm-mq-phone tone-${tone}`} aria-label={label}>
    <div className="mm-mq-phone-bezel">
      <div className="mm-mq-phone-screen">
        <div className="mm-mq-phone-island"></div>
        {children}
      </div>
    </div>
  </div>
);

const QuizProgressScreen = () => (
  <div className="mm-mq-s1">
    <header className="mm-mq-s1-top">
      <span className="mm-mq-s1-time">10:23</span>
      <span className="mm-mq-streak">4-day streak</span>
      <span className="mm-mq-s1-dot" aria-hidden="true"></span>
    </header>
    <div className="mm-mq-s1-body">
      <span className="mm-mq-s1-eyebrow">PATTERN EMERGING</span>
      <h3 className="mm-mq-s1-title">The MoneyPattern<span className="tm">™</span></h3>
      <HexCluster />
      <div className="mm-mq-s1-counter">
        <div>
          <span className="num">0 of 14 questions</span>
          <span className="lbl">RISK PROFILE · READY</span>
        </div>
        <span className="pct">0<i>%</i></span>
      </div>
      <ul className="mm-mq-stages">
        <li className="mm-mq-stage done">
          <span className="rule"></span>
          <span className="name">Foundations</span>
          <span className="state">COMPLETE</span>
        </li>
        <li className="mm-mq-stage done">
          <span className="rule"></span>
          <span className="name">Decision Making</span>
          <span className="state">COMPLETE</span>
        </li>
        <li className="mm-mq-stage active">
          <span className="rule"></span>
          <span className="name">Risk Profile</span>
          <span className="state">0 / 14<br/><i>READY</i></span>
        </li>
      </ul>
      <div className="mm-mq-s1-insight">
        <span className="mm-mq-s1-insight-dot"></span>
        <p>
          One final section. Your discipline reads unusually high —
          <em> curious how you'll handle a 20% drop.</em>
        </p>
      </div>
      <div className="mm-mq-s1-cta">Begin Risk Profile</div>
      <div className="mm-mq-s1-link">Pause &amp; save</div>
    </div>
  </div>
);

const QuizDiscoveryScreen = () => (
  <div className="mm-mq-s2">
    <div className="mm-mq-s2-progress">
      <span className="seg"></span>
      <span className="seg full"></span>
      <span className="seg full"></span>
    </div>
    <header className="mm-mq-s2-head">
      <span className="mm-mq-s2-eyebrow">FOUNDATIONS · 1 OF 3</span>
      <span className="mm-mq-s2-eyebrow">DISCOVERY · 1 OF 3</span>
    </header>
    <div className="mm-mq-s2-stat">
      <span className="big">1</span>
      <span className="in">in</span>
      <span className="big">4</span>
    </div>
    <span className="mm-mq-s2-stat-sub">people in our research</span>
    <HexWatermark />
    <h3 className="mm-mq-s2-title">
      You're in the rare combination — anxious <em>and</em> disciplined.
    </h3>
    <p className="mm-mq-s2-body">
      Most score high on one or the other. You score high on <strong>both</strong>.
    </p>
    <div className="mm-mq-s2-source">
      This pattern outperformed by <strong>1.8%</strong> annually. Vanguard 2023.
    </div>
    <div className="mm-mq-s2-next">NEXT</div>
  </div>
);

export default function MoneyQuiz() {
  return (
    <div className="mm-mq">
      <div className="mm-mq-stage-row">
        <PhoneFrame tone="light" label="MoneyQuiz progress screen">
          <QuizProgressScreen />
        </PhoneFrame>
        <PhoneFrame tone="dark" label="MoneyQuiz discovery moment">
          <QuizDiscoveryScreen />
        </PhoneFrame>
      </div>
    </div>
  );
}
