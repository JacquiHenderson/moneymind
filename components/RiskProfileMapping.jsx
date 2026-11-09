// Risk Profile Asset Allocation Mapping — how MoneyMind's five risk categories
// line up against the Morningstar scale, matched by growth-asset allocation.
// Static reference table; no client-side state needed.

const ROWS = [
  {
    mm: 'Conservative',
    mmGrowth: '0–20%',
    mmDefensive: '80–100%',
    ms: 'Ultra Conservative / Conservative',
    msGrowth: '~15%',
    msDefensive: '~85%',
    horizon: 'Short term',
    align: 'Strong',
    note: 'Both put capital preservation first. Morningstar splits this band into two categories; MoneyMind uses one.',
  },
  {
    mm: 'Moderate',
    mmGrowth: '20–40%',
    mmDefensive: '60–80%',
    ms: 'Moderate (lower end)',
    msGrowth: '~30–50%',
    msDefensive: '~50–70%',
    horizon: 'Short to medium',
    align: 'Partial',
    note: 'Morningstar’s Moderate starts higher (~30%) and runs into MoneyMind’s Balanced band.',
  },
  {
    mm: 'Balanced',
    mmGrowth: '40–60%',
    mmDefensive: '40–60%',
    ms: 'Balanced (and upper Moderate)',
    msGrowth: '~50%',
    msDefensive: '~50%',
    horizon: '5+ years',
    align: 'Strong',
    note: 'Both centre on a 50/50 split.',
  },
  {
    mm: 'Growth',
    mmGrowth: '60–80%',
    mmDefensive: '20–40%',
    ms: 'Assertive / Growth',
    msGrowth: '~70%',
    msDefensive: '~30%',
    horizon: '7+ years',
    align: 'Strong',
    note: 'Morningstar’s ~70% point sits in the middle of MoneyMind’s band.',
  },
  {
    mm: 'High Growth',
    mmGrowth: '80–100%',
    mmDefensive: '0–20%',
    ms: 'Aggressive',
    msGrowth: '~90–100%',
    msDefensive: '~0–10%',
    horizon: '9+ years',
    align: 'Strong',
    note: 'Morningstar sits in the upper half of MoneyMind’s band.',
  },
];

const POINTS = [
  {
    term: 'Range vs point:',
    body:
      'MoneyMind uses continuous 20-point bands with no gaps. Most of the Morningstar figures are single targets. That makes MoneyMind easier to map from, but a client at 30–40% growth could fall into either Moderate or Balanced on the Morningstar side.',
  },
  {
    term: 'Number of categories:',
    body:
      'MoneyMind has five categories; the Morningstar scale has six, because it separates Ultra Conservative from Conservative. A MoneyMind Conservative client could map to either one.',
  },
];

// Growth and defensive shares, each labelled so the cell reads without the header.
function Split({ growth, defensive }) {
  return (
    <span className="rpm-split">
      <span className="rpm-split-row">
        <span className="rpm-split-label rpm-split-label--growth">Growth</span>
        <span className="rpm-split-val">{growth}</span>
      </span>
      <span className="rpm-split-row">
        <span className="rpm-split-label rpm-split-label--defensive">Defensive</span>
        <span className="rpm-split-val">{defensive}</span>
      </span>
    </span>
  );
}

export default function RiskProfileMapping() {
  return (
    <div className="pa-doc">
      <div className="pa-block">
        <div className="pa-table-wrap">
          <table className="pa-table pa-table--rpm">
            <thead>
              <tr>
                <th>MoneyMind category</th>
                <th>MoneyMind growth / defensive</th>
                <th>Morningstar equivalent</th>
                <th>Morningstar growth / defensive</th>
                <th>Typical horizon</th>
                <th>How well they align</th>
              </tr>
            </thead>
            <tbody>
              {ROWS.map((r) => (
                <tr key={r.mm}>
                  <td className="pa-td-dim">{r.mm}</td>
                  <td><Split growth={r.mmGrowth} defensive={r.mmDefensive} /></td>
                  <td>{r.ms}</td>
                  <td><Split growth={r.msGrowth} defensive={r.msDefensive} /></td>
                  <td className="rpm-alloc">{r.horizon}</td>
                  <td>
                    <span
                      className={`pa-role ${
                        r.align === 'Strong' ? 'pa-role--primary' : 'pa-role--boundary'
                      }`}
                    >
                      {r.align}
                    </span>
                    <span className="rpm-align-note">{r.note}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="pa-block">
        <h2 className="pa-h pa-h--accent">Points to keep in mind</h2>
        <ul className="pa-science">
          {POINTS.map((p) => (
            <li key={p.term}>
              <strong>{p.term}</strong> {p.body}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
