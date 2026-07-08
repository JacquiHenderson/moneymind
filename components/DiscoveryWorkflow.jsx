// Presentational dark-mode mock of the MoneyMind "Discovery Workflow" scheduling
// popup — built in the app's dark UI kit for the /send-profile guide.

const IconClose = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
    <path d="M6 6l12 12M18 6L6 18" />
  </svg>
);
const IconPencil = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M12 20h9" /><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4Z" />
  </svg>
);
const IconInfo = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
    <circle cx="12" cy="12" r="9" /><path d="M12 11v5M12 8h.01" strokeLinecap="round" />
  </svg>
);
const IconSend = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M22 2 11 13M22 2l-7 20-4-9-9-4Z" />
  </svg>
);
const IconLink = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M10 13a5 5 0 0 0 7.5.5l3-3a5 5 0 0 0-7-7L14 5" /><path d="M14 11a5 5 0 0 0-7.5-.5l-3 3a5 5 0 0 0 7 7L11 19" />
  </svg>
);
const Grip = () => (
  <span className="sp-grip" aria-hidden="true"><span /><span /><span /></span>
);

const PHASES = [
  {
    name: 'Pre-Discovery',
    date: '08/07/2026',
    time: '09:00',
    sections: [
      { title: 'Financial Decision Making', desc: 'How your client makes financial decisions and takes action.', dur: '2 min' },
      { title: 'Financial Foundations', desc: 'How well your client understands money and how it works.', dur: '2 min' },
    ],
  },
  {
    name: 'Risk Profile',
    date: '11/07/2026',
    time: '09:00',
    sections: [
      { title: 'Risk Profile', desc: 'How much risk your client can live with — and afford.', dur: '2-3 min', on: false },
    ],
  },
  {
    name: 'Discovery Meeting',
    date: '15/07/2026',
    time: '09:00',
    sections: [
      { title: 'Financial Satisfaction', desc: "A quick snapshot of your client's financial life satisfaction.", dur: '1 min', on: false },
      { title: 'Goal Setting', desc: 'Map out goals and what success looks like.', dur: null, on: false },
    ],
  },
];

export default function DiscoveryWorkflow() {
  return (
    <div className="sp-modal" role="img" aria-label="MoneyMind Discovery Workflow popup — schedule profile sections across the pre-discovery, risk profile and discovery-meeting phases">
      <div className="sp-modal-head">
        <div>
          <h3>Discovery Workflow</h3>
          <p>Select and schedule profile sections. Drag to reorder or move between phases.</p>
        </div>
        <span className="sp-modal-x" aria-hidden="true"><IconClose /></span>
      </div>

      <div className="sp-modal-body">
        <div className="sp-note">
          <span className="sp-note-text"><IconInfo /> If sending a profile to yourself, use a different email address to your login.</span>
          <span className="sp-add">+ Add section</span>
        </div>

        {PHASES.map((phase) => (
          <div className="sp-phase" key={phase.name}>
            <div className="sp-phase-name">
              <span className="sp-phase-dot" aria-hidden="true" />
              {phase.name}
              <span className="sp-phase-edit" aria-hidden="true"><IconPencil /></span>
            </div>

            <div className="sp-sched">
              <div className="sp-field">
                <label>Date</label>
                <span className="sp-input">{phase.date}</span>
              </div>
              <div className="sp-field">
                <label>Time</label>
                <span className="sp-input">{phase.time}</span>
              </div>
              <span className="sp-btn sp-btn--primary"><IconSend /> Schedule</span>
              <span className="sp-btn sp-btn--ghost"><IconLink /> Copy link</span>
            </div>

            {phase.sections.map((s) => (
              <div className="sp-sec" key={s.title}>
                <div className="sp-sec-main">
                  <div className="sp-sec-title">{s.title}</div>
                  <div className="sp-sec-desc">{s.desc}</div>
                </div>
                {s.dur && <span className="sp-badge">{s.dur}</span>}
                <span className={`sp-toggle${s.on === false ? '' : ' is-on'}`} aria-hidden="true"><span className="sp-knob" /></span>
                <Grip />
              </div>
            ))}
          </div>
        ))}
      </div>

      <div className="sp-modal-foot">
        <span className="sp-foot-note"><b>5 sections</b> · 3 phases ready to schedule</span>
        <span className="sp-btn sp-btn--ghost">Cancel</span>
      </div>
    </div>
  );
}
