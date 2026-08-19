// Radial "constellation" of the integrations MoneyMind connects to, around a
// central MoneyMind hub. Positions are % of the diagram box, measured from the
// reference so the layout matches exactly. Used on the request-demo and
// for-advisors pages.

const INT_BASE = '/assets/logos/integrations';
const INT_HUB = { x: 49, y: 49.5 };
// w = logo width as a % of the diagram (matches the reference's 1168px scale).
const INTEGRATIONS = [
  { name: 'Xplan', img: 'iress.png', x: 13, y: 18.5, w: 6.1 },
  { name: 'Conquest', img: 'conquest.png', x: 31, y: 18.5, w: 12.6 },
  { name: 'intelliflo', img: 'intelliflo.png', x: 22, y: 31.5, w: 8.0 },
  { name: 'Advyzon', img: 'advyzon.png', x: 67, y: 18.5, w: 7.9 },
  { name: 'Wealthbox', img: 'wealthbox.png', x: 85, y: 18.5, w: 9.4 },
  { name: 'Salesforce', img: 'salesforce.png', x: 76, y: 31.5, w: 9.3 },
  { name: 'Claras', img: 'claras.png', x: 13, y: 65.5, w: 8.3 },
  { name: 'Fabyl', img: 'fabyl.png', x: 31, y: 65.5, w: 6.2 },
  { name: 'Paradina', img: 'paradina.png', x: 22, y: 79, w: 12.5 },
  { name: 'Catchlight', img: 'catchlight.png', x: 67, y: 65.5, w: 9.0 },
  { name: 'HubSpot', img: 'hubspot.png', x: 85, y: 65.5, w: 7.7 },
  { name: 'Mailchimp', img: 'mailchimp.png', x: 76, y: 79, w: 9.0 },
];
const INT_LABELS = [
  { text: 'Planning software', x: 11, y: 4 },
  { text: 'CRM', x: 67, y: 4 },
  { text: 'AI tools', x: 14, y: 95 },
  { text: 'Marketing & lead gen', x: 63, y: 95 },
];
const MOBILE_GROUPS = [
  { label: 'Planning software', names: ['Xplan', 'Conquest', 'intelliflo'] },
  { label: 'CRM', names: ['Advyzon', 'Wealthbox', 'Salesforce'] },
  { label: 'AI tools', names: ['Claras', 'Fabyl', 'Paradina'] },
  { label: 'Marketing & lead gen', names: ['Catchlight', 'HubSpot', 'Mailchimp'] },
];

export default function IntegrationDiagram() {
  return (
    <>
      <div className="rd-int-diagram">
        {/* Connector lines from the hub out to each logo */}
        <svg className="rd-int-lines" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
          {INTEGRATIONS.map((it) => (
            <line key={it.name} x1={INT_HUB.x} y1={INT_HUB.y} x2={it.x} y2={it.y} />
          ))}
        </svg>

        {INT_LABELS.map((l) => (
          <span key={l.text} className="rd-int-label" style={{ left: `${l.x}%`, top: `${l.y}%` }}>
            {l.text}
          </span>
        ))}

        {INTEGRATIONS.map((it) => (
          <span
            key={it.name}
            className="rd-int-logo"
            style={{ left: `${it.x}%`, top: `${it.y}%`, width: `${it.w}%` }}
          >
            <img src={`${INT_BASE}/${it.img}`} alt={it.name} loading="lazy" />
          </span>
        ))}

        <div className="rd-int-hub" style={{ left: `${INT_HUB.x}%`, top: `${INT_HUB.y}%` }}>
          <span className="rd-int-hub-icon" aria-hidden="true">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2c.4 3.7 2.3 5.6 6 6-3.7.4-5.6 2.3-6 6-.4-3.7-2.3-5.6-6-6 3.7-.4 5.6-2.3 6-6Z" />
              <path d="M18.5 13.5c.2 1.9 1.1 2.8 3 3-1.9.2-2.8 1.1-3 3-.2-1.9-1.1-2.8-3-3 1.9-.2 2.8-1.1 3-3Z" opacity="0.7" />
            </svg>
          </span>
          <span className="rd-int-hub-label">MoneyMind</span>
        </div>
      </div>

      {/* Mobile fallback: stacked category lists */}
      <div className="rd-int-mobile" aria-hidden="true">
        {MOBILE_GROUPS.map((g) => (
          <div className="rd-int-mgroup" key={g.label}>
            <span className="rd-int-mlabel">{g.label}</span>
            <div className="rd-int-mlogos">
              {g.names.map((n) => {
                const it = INTEGRATIONS.find((x) => x.name === n);
                return (
                  <span className="rd-int-mlogo" key={n}>
                    <img src={`${INT_BASE}/${it.img}`} alt={it.name} loading="lazy" />
                  </span>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
