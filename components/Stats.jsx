const StatsCurve = () => (
  <svg className="mm-stats-curve" viewBox="0 0 1920 400" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
    <defs>
      <linearGradient id="stats-curve" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%" stopColor="#5298BF" stopOpacity="0"/>
        <stop offset="45%" stopColor="#5298BF" stopOpacity="0.45"/>
        <stop offset="100%" stopColor="#5298BF" stopOpacity="0"/>
      </linearGradient>
    </defs>
    <path
      d="M -200 360 Q 600 -120 1300 220 T 2200 80"
      fill="none"
      stroke="url(#stats-curve)"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

export default function Stats() {
  return (
    <section className="mm-stats-band mm-stats-quote" data-screen-label="Quote — Jason Zweig">
      <StatsCurve />
      <div className="mm-stats-band-inner mm-container">
        <figure className="mm-zweig">
          <svg className="mm-zweig-mark" viewBox="0 0 80 60" fill="none" aria-hidden="true">
            <path d="M0 60V36C0 16 12 4 32 0v12c-10 4-16 12-16 24h16v24H0Zm48 0V36C48 16 60 4 80 0v12c-10 4-16 12-16 24h16v24H48Z" fill="currentColor"/>
          </svg>
          <blockquote>
            Investing isn&apos;t about beating others at their game.<br/>
            It&apos;s about <em>controlling yourself</em> at your own game.
          </blockquote>
          <figcaption>
            <span className="mm-zweig-name">Jason Zweig</span>
            <span className="mm-zweig-role">Investment columnist · <em>The Wall Street Journal</em></span>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
