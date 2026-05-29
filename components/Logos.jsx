const Lockup = ({ width, height = 60, children, label }) => (
  <svg viewBox={`0 0 ${width} ${height}`} width={width} height={height} role="img" aria-label={label}>
    {children}
  </svg>
);

const LogoCaboodle = () => (
  <Lockup width={200} label="caboodle">
    <text x="100" y="44" textAnchor="middle" fill="currentColor"
      fontFamily='"Recoleta", "DM Serif Display", "Playfair Display", Georgia, serif'
      fontStyle="normal" fontWeight="700" fontSize="42" letterSpacing="-0.015em">caboodle</text>
  </Lockup>
);

const LogoGetwise = () => (
  <Lockup width={150} label="getWise">
    <g fill="currentColor">
      {[0,1,2,3,4,5,6].map(i => {
        const a = -Math.PI/2 - 0.7 + (i * 1.4 / 6);
        const x = 75 + Math.cos(a) * 32;
        const y = 28 + Math.sin(a) * 18;
        return <circle key={i} cx={x} cy={y} r="1.6" />;
      })}
    </g>
    <text x="75" y="48" textAnchor="middle" fill="currentColor"
      fontFamily="Inter, sans-serif" fontWeight="400" fontSize="30" letterSpacing="-0.02em">
      get<tspan fontWeight="500">Wise</tspan>
    </text>
  </Lockup>
);

const LogoWealthyer = () => (
  <Lockup width={180} label="wealthyer">
    <g fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
      <path d="M 132 14 Q 138 6 144 14" />
      <path d="M 138 12 Q 144 4 150 12" />
      <path d="M 140 16 L 140 22" />
    </g>
    <text x="90" y="44" textAnchor="middle" fill="currentColor"
      fontFamily="Inter, sans-serif" fontWeight="700" fontSize="30" letterSpacing="-0.03em">
      wealthy<tspan fontWeight="500">er</tspan>
    </text>
  </Lockup>
);

const LogoPlanningIQ = () => (
  <Lockup width={170} label="PlanningIQ">
    <text x="0" y="38" fill="currentColor"
      fontFamily="Inter, sans-serif" fontWeight="400" fontSize="26" letterSpacing="-0.02em">
      Planning<tspan fontWeight="700" letterSpacing="-0.04em">IQ</tspan>
    </text>
    <circle cx="156" cy="31" r="11" fill="none" stroke="currentColor" strokeWidth="1.4" />
  </Lockup>
);

const LogoTouchpoint = () => (
  <Lockup width={240} label="Touchpoint Financial">
    <text x="120" y="34" textAnchor="middle" fill="currentColor"
      fontFamily="Georgia, serif" fontWeight="500" fontSize="22" letterSpacing="3.5">TOUCHPOINT</text>
    <text x="120" y="50" textAnchor="middle" fill="currentColor"
      fontFamily="Inter, sans-serif" fontWeight="500" fontSize="9" letterSpacing="4.5">FINANCIAL</text>
  </Lockup>
);

const LogoTruwealth = () => (
  <Lockup width={250} label="TruWealth">
    <g>
      <circle cx="28" cy="30" r="22" fill="none" stroke="currentColor" strokeWidth="1.6"/>
      <path d="M 28 18 L 28 42 M 28 22 Q 18 28 22 38 M 28 22 Q 38 28 34 38" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
    </g>
    <text x="60" y="32" fill="currentColor" fontFamily="Inter, sans-serif" fontSize="22" letterSpacing="-0.02em">
      <tspan fontWeight="400">Tru</tspan><tspan fontWeight="700">Wealth</tspan>
    </text>
    <line x1="60" y1="40" x2="178" y2="40" stroke="currentColor" strokeWidth="0.8" opacity="0.7"/>
    <text x="60" y="54" fill="currentColor"
      fontFamily="Inter, sans-serif" fontWeight="600" fontSize="11" letterSpacing="0.04em">Your Personal CFO</text>
  </Lockup>
);

const LogoThrive = () => (
  <Lockup width={200} label="Thrive Financial">
    <text x="100" y="30" textAnchor="middle" fill="currentColor"
      fontFamily="Inter, sans-serif" fontWeight="300" fontSize="24" letterSpacing="0.18em">THRIVE</text>
    <text x="100" y="52" textAnchor="middle" fill="currentColor"
      fontFamily="Georgia, serif" fontStyle="italic" fontWeight="400" fontSize="22">Financial</text>
  </Lockup>
);

const LogoEka = () => (
  <Lockup width={210} label="EKA Wealth">
    <g fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round">
      <circle cx="30" cy="30" r="22" />
      {[0,1,2,3,4,5].map(i => {
        const a = (i * Math.PI) / 3;
        return (
          <path key={i}
            d={`M 30 30 Q ${30 + Math.cos(a) * 8} ${30 + Math.sin(a) * 8 - 6} ${30 + Math.cos(a) * 18} ${30 + Math.sin(a) * 18}`}
            transform={`rotate(${i * 60} 30 30)`}
          />
        );
      })}
    </g>
    <text x="68" y="28" fill="currentColor"
      fontFamily="Inter, sans-serif" fontWeight="400" fontSize="20" letterSpacing="0.08em">EKA</text>
    <text x="68" y="50" fill="currentColor"
      fontFamily="Inter, sans-serif" fontWeight="400" fontSize="20" letterSpacing="0.08em">WEALTH</text>
  </Lockup>
);

const LogoEmu = () => (
  <Lockup width={210} label="EMU Wealth">
    <g fill="currentColor">
      <path d="M 28 8 L 32 28 L 52 30 L 32 32 L 28 52 L 24 32 L 4 30 L 24 28 Z" opacity="0.95"/>
    </g>
    <text x="124" y="26" textAnchor="middle" fill="currentColor"
      fontFamily="Georgia, serif" fontWeight="600" fontSize="20" letterSpacing="0.06em">EMU</text>
    <text x="124" y="44" textAnchor="middle" fill="currentColor"
      fontFamily="Georgia, serif" fontWeight="600" fontSize="20" letterSpacing="0.06em">WEALTH</text>
    <text x="124" y="56" textAnchor="middle" fill="currentColor"
      fontFamily="Inter, sans-serif" fontWeight="500" fontSize="6.5" letterSpacing="0.22em">INDEPENDENT FINANCIAL PLANNER</text>
  </Lockup>
);

const LogoFuturum = () => (
  <Lockup width={220} label="Futurum financial planning">
    <path d="M 32 10 A 22 22 0 1 0 32 54" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
    <text x="40" y="40" fill="currentColor"
      fontFamily="Georgia, serif" fontStyle="italic" fontWeight="400" fontSize="34">futurum</text>
    <text x="42" y="54" fill="currentColor"
      fontFamily="Inter, sans-serif" fontWeight="400" fontSize="10" letterSpacing="0.05em" opacity="0.9">financial planning</text>
  </Lockup>
);

const LogoGuidedWealth = () => (
  <Lockup width={220} label="Guided Wealth">
    <g>
      <text x="110" y="26" textAnchor="middle" fill="currentColor"
        fontFamily="Georgia, serif" fontWeight="600" fontSize="22" letterSpacing="0.04em">GW</text>
      <path d="M 125 14 L 132 8 L 132 14 M 132 8 L 125 8"
        fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
    </g>
    <text x="110" y="50" textAnchor="middle" fill="currentColor"
      fontFamily="Georgia, serif" fontWeight="500" fontSize="18" letterSpacing="0.12em">GUIDED WEALTH</text>
  </Lockup>
);

const LogoLci = () => (
  <Lockup width={200} label="LCI Partners">
    <g>
      <rect x="14" y="14" width="32" height="32" transform="rotate(45 30 30)" fill="none" stroke="currentColor" strokeWidth="1.6"/>
      <rect x="22" y="22" width="16" height="16" transform="rotate(45 30 30)" fill="currentColor" opacity="0.55"/>
    </g>
    <text x="66" y="30" fill="currentColor"
      fontFamily="Inter, sans-serif" fontWeight="700" fontSize="22" letterSpacing="0.04em">LCI</text>
    <text x="66" y="50" fill="currentColor"
      fontFamily="Inter, sans-serif" fontWeight="700" fontSize="16" letterSpacing="0.14em">PARTNERS</text>
  </Lockup>
);

const LogoLinea = () => (
  <Lockup width={200} label="Linea Private Wealth">
    <g fill="none" stroke="currentColor" strokeWidth="1.2">
      <circle cx="100" cy="14" r="8"/>
      <path d="M 100 8 L 100 22 M 100 14 Q 104 16 100 22" strokeLinecap="round"/>
    </g>
    <text x="100" y="44" textAnchor="middle" fill="currentColor"
      fontFamily="Georgia, serif" fontWeight="500" fontSize="22" letterSpacing="0.12em">LINEA</text>
    <text x="100" y="56" textAnchor="middle" fill="currentColor"
      fontFamily="Inter, sans-serif" fontWeight="500" fontSize="8.5" letterSpacing="0.28em">PRIVATE WEALTH</text>
  </Lockup>
);

const LOGOS = [
  LogoCaboodle, LogoGetwise, LogoWealthyer, LogoPlanningIQ, LogoTouchpoint,
  LogoTruwealth, LogoThrive, LogoEka, LogoEmu, LogoFuturum,
  LogoGuidedWealth, LogoLci, LogoLinea,
];

export default function Logos() {
  const items = [...LOGOS, ...LOGOS];
  return (
    <section className="mm-logos" data-screen-label="Customer logos">
      <p className="mm-logos-label">Trusted by advisors across the globe</p>
      <div className="mm-marquee">
        <div className="mm-marquee-track">
          {items.map((LogoComp, i) => (
            <div className="mm-marquee-item mm-logo-item" key={i}>
              <LogoComp />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
