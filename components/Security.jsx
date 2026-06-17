import { IconLock, IconShield, IconAudit, IconUsers, IconGlobe, IconCheck } from './Icons';

const POLICIES = [
  {
    icon: <IconLock size={18} />,
    title: 'Secure cloud infrastructure',
    body: 'AWS, Vercel, and Supabase security certifications — SOC 2 and ISO 27001. Audit logs, data processing and data residency compliance. Role-based permissions and single sign-on.'
  },
  {
    icon: <IconShield size={18} />,
    title: 'End-to-end encryption',
    body: 'Every profile is encrypted end-to-end between client and advisor. Data is encrypted in transit and at rest using industry-standard TLS 1.2 and AES-256 key management.'
  },
  {
    icon: <IconAudit size={18} />,
    title: 'Local data residency',
    body: "MoneyMind's platform is hosted by region — Australia, US, UK and Canada — so client data stays onshore and sovereign."
  },
  {
    icon: <IconUsers size={18} />,
    title: 'Privacy + GDPR aligned',
    body: "Aligned to Global Privacy Principles and GDPR. Client data is yours to keep, we don't hold PCI data. PII redaction. We retain audit trails and application logging."
  },
  {
    icon: <IconGlobe size={18} />,
    title: 'Data protection',
    body: 'Sensitive client data is redacted before any aggregate analytics. Anonymised cohorts power the Personas layer — never identifiable people.'
  },
  {
    icon: <IconCheck size={18} />,
    title: 'Independently tested',
    body: 'MoneyMind undergoes third-party penetration testing, so the platform stays secure as it scales.'
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
