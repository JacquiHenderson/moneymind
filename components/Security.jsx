import { IconLock, IconShield, IconAudit, IconUsers, IconGlobe, IconCheck } from './Icons';

const POLICIES = [
  {
    icon: <IconLock size={18} />,
    title: 'Bank-grade encryption',
    body: 'Every profile is encrypted end-to-end between client and advisor.'
  },
  {
    icon: <IconShield size={18} />,
    title: 'Local data residency',
    body: 'Client data stays on-shore in local regions (Australia, UK, and US), hosted with certified infrastructure.'
  },
  {
    icon: <IconAudit size={18} />,
    title: 'Audit-ready by design',
    body: 'Every action is logged, every consent is timestamped, every report is exportable. Built around the regulatory reality advisors actually live with.'
  },
  {
    icon: <IconUsers size={18} />,
    title: 'Advisor-controlled access',
    body: "Only your practice sees your clients' profiles. Role-based permissions, single sign-on, and per-client revocation in one click."
  },
  {
    icon: <IconGlobe size={18} />,
    title: 'Privacy Act + GDPR aligned',
    body: 'Aligned to Global Privacy Principles and GDPR. Subject access, right-to-erase and data-portability requests are handled inside the app.'
  },
  {
    icon: <IconCheck size={18} />,
    title: 'Data protection',
    body: 'Sensitive client data is redacted before any aggregate analytics. Anonymised cohorts power the Personas layer — never identifiable people.'
  },
];

export default function Security() {
  return (
    <section className="mm-security" id="security" data-screen-label="Security">
      <div className="mm-container">
        <span className="eyebrow" style={{ display: 'block', marginBottom: 24 }}>
          Security &amp; privacy
        </span>
        <h2>Your client data deserves the highest protection.</h2>
        <p className="mm-security-lead">
          MoneyMind handles the most sensitive thing in advice: how a person actually
          feels about money. We&apos;ve built the platform around that responsibility from
          the first commit.
        </p>

        <div className="mm-security-grid">
          {POLICIES.map((p, i) => (
            <article className="mm-security-card" key={i}>
              <span className="icon">{p.icon}</span>
              <h4>{p.title}</h4>
              <p>{p.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
