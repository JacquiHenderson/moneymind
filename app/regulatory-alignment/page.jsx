import Link from 'next/link';
import { pageMeta } from '../../lib/seo';

export const metadata = pageMeta({
  title: 'Regulatory Alignment Matrix — MoneyMind',
  description:
    'How the MoneyMind Profile risk-profiling instrument maps to suitability and know-your-client obligations across Australia (ASIC), the United Kingdom (FCA), the United States (SEC / FINRA) and Canada (CSA / CIRO). A due-diligence resource for compliance teams.',
  path: '/regulatory-alignment',
});

const JURISDICTIONS = [
  {
    id: 'australia',
    code: 'AU',
    country: 'Australia',
    regulator: 'ASIC',
    summary:
      "Best-interests-duty regime (Corporations Act Pt 7.7A). DBFO reforms are shifting toward principles and outcomes; the overarching BID is retained. Here, “Supports” means the tool is an input to the adviser's determination.",
    rows: [
      ['Risk tolerance', 'Corporations Act s961B BID; RG 175; RG 244'],
      ['Risk capacity', "s961B BID; client's relevant circumstances"],
      ['Overall risk profile', 's961B BID; RG 175'],
      ['Knowledge & experience', 'RG 175; RG 244'],
      ['Objectives & goals', 's961B BID; RG 175'],
      ['Vulnerability', 'ASIC vulnerability expectations; AFCA; (Consumer Duty equiv. n/a)'],
      ['Best-interest determination', 's961B(1) BID; s961G appropriate advice'],
      ['Design & Distribution (funds)', 'Pt 7.8A; RG 274 (TMD)'],
      ['Suitability documentation', 's961B; record-keeping obligations'],
      ['Ongoing review', 'Ongoing-fee / review arrangements'],
    ],
  },
  {
    id: 'united-kingdom',
    code: 'UK',
    country: 'United Kingdom',
    regulator: 'FCA',
    summary:
      'COBS 9 / 9A suitability + Consumer Duty + FG21/1 vulnerability. FG11/05 speaks directly to risk-profiling tools. Strongest fit on knowledge & experience, vulnerability and triangulated tolerance; capacity-for-loss must be modelled.',
    rows: [
      ['Attitude to risk', 'COBS 9/9A; FG11/05 (risk-tool guidance)'],
      ['Capacity for loss', 'COBS 9A; FG11/05'],
      ['Overall risk profile', 'COBS 9A; FG11/05'],
      ['Knowledge & experience', 'COBS 9A'],
      ['Objectives', 'COBS 9A'],
      ['Vulnerability', 'FG21/1 (in force, reaffirmed Mar 2025); Consumer Duty'],
      ['Consumer understanding', 'Consumer Duty (PRIN 2A) — understanding outcome'],
      ['Foreseeable harm / fair value', 'Consumer Duty — products & value'],
      ['Suitability report', 'COBS 9.4'],
      ['Product governance', 'PROD; Consumer Duty'],
      ['Ongoing suitability', 'COBS 9A (ongoing service)'],
    ],
  },
  {
    id: 'united-states',
    code: 'US',
    country: 'United States',
    regulator: 'SEC / FINRA',
    summary:
      "Reg BI (best interest) + FINRA 2111 suitability / 2090 KYC; IA Act fiduciary for RIAs. The “investment profile” is broad: the tool addresses several profile factors, but Reg BI's process obligations are firm-owned.",
    rows: [
      ['Risk tolerance', 'FINRA Rule 2111; Reg BI (Care)'],
      ['Investment experience', 'FINRA 2111'],
      ['Investment objectives', 'FINRA 2111; Reg BI'],
      ['Age / other investments', 'FINRA 2111'],
      ['Vulnerability / senior investors', 'FINRA 2165; Reg BI care'],
      ['Best-interest obligation', 'Reg BI (Care, Conflict, Disclosure, Compliance)'],
      ['Disclosure / Form CRS', 'Reg BI — Disclosure; Form CRS'],
      ['RIA fiduciary duty (if applicable)', 'Investment Advisers Act 1940; SEC fiduciary interpretation'],
      ['Quantitative suitability', 'FINRA 2111(a)'],
      ['Books & records', 'SEA Rules 17a-3 / 17a-4'],
    ],
  },
  {
    id: 'canada',
    code: 'CA',
    country: 'Canada',
    regulator: 'CSA / CIRO',
    summary:
      'Client Focused Reforms (NI 31-103) under CIRO; Joint CSA/CIRO Staff Notice 31-368 (Dec 2025). Risk profile = tolerance + capacity, assessed separately, defaulting to the lower of the two. The closest conceptual fit to the tool.',
    rows: [
      ['Risk tolerance', 'NI 31-103 (CFRs); CIRO rules; SN 31-368'],
      ['Risk capacity', 'NI 31-103 (CFRs); SN 31-368'],
      ['Overall risk profile', 'NI 31-103 13.2; SN 31-368'],
      ['Investment knowledge', 'NI 31-103 KYC'],
      ['Investment objectives', 'NI 31-103 KYC'],
      ['Personal circumstances', 'NI 31-103 KYC'],
      ['Vulnerability / trusted contact', 'CIRO vulnerable-client guidance; SN 31-368 (temporary holds)'],
      ['KYP', 'NI 31-103 KYP; SN 31-368'],
      ['Suitability determination', 'NI 31-103 13.3 (CFRs)'],
      ['KYC currency', 'NI 31-103 13.2(4.1); SN 31-368'],
      ['Record-keeping', 'NI 31-103 11.5'],
    ],
  },
];

export default function RegulatoryAlignmentPage() {
  return (
    <div>
      <header className="lp-header">
        <div className="lp-header-inner">
          <Link href="/" className="lp-logo" aria-label="MoneyMind home">
            <img src="/assets/logos/moneymind-white.svg?v=5" alt="MoneyMind" />
          </Link>
          <nav className="lp-nav" aria-label="Primary">
            <Link href="/">Home</Link>
            <Link href="/for-advisors">Financial Advisors</Link>
            <Link href="/for-fund-providers">Fund Providers</Link>
            <Link href="/#security">Security</Link>
          </nav>
          <Link href="/demo-request" className="lp-cta">Request demo</Link>
        </div>
      </header>

      <main className="ram-page">
        <div className="lp-breadcrumbs">
          <Link href="/">Home</Link>
          <span>·</span>
          <span>Regulatory Alignment Matrix</span>
        </div>

        {/* Hero */}
        <section className="ram-hero">
          <span className="lp-eyebrow">Compliance · Due Diligence</span>
          <h1 className="ram-title">Regulatory Alignment Matrix</h1>
          <p className="ram-lede">
            A map of how the MoneyMind&nbsp;Profile risk-profiling instrument and its
            behavioural output align with the regulatory obligations in
            each country jurisdiction — built for your compliance team.
          </p>
          <div className="ram-hero-tags">
            <span className="ram-hero-tag"><b>AU</b> ASIC</span>
            <span className="ram-hero-tag"><b>UK</b> FCA</span>
            <span className="ram-hero-tag"><b>US</b> SEC / FINRA</span>
            <span className="ram-hero-tag"><b>CA</b> CSA / CIRO</span>
          </div>
          <p className="ram-hero-meta">
            <strong>Prepared 17 June 2026.</strong> Risk profiling &amp; behavioural assessment.
          </p>
        </section>

        {/* Jump nav */}
        <nav className="ram-jumpnav" aria-label="Jump to jurisdiction">
          {JURISDICTIONS.map((j) => (
            <a key={j.id} href={`#${j.id}`} className="ram-jump">
              <span className="ram-jump-code">{j.code}</span>
              {j.country}
            </a>
          ))}
        </nav>

        {/* Jurisdiction matrices */}
        {JURISDICTIONS.map((j) => (
          <section key={j.id} id={j.id} className="ram-jur">
            <div className="ram-jur-head">
              <span className="ram-jur-code">{j.code}</span>
              <div>
                <h2 className="ram-jur-country">{j.country}</h2>
                <span className="ram-jur-reg">{j.regulator}</span>
              </div>
            </div>
            <p className="ram-jur-summary">{j.summary}</p>
            <div className="ram-table-wrap">
              <table className="ram-table">
                <thead>
                  <tr>
                    <th scope="col">Requirement area</th>
                    <th scope="col">Regulatory basis</th>
                    <th scope="col" className="ram-col-coverage">Coverage</th>
                  </tr>
                </thead>
                <tbody>
                  {j.rows.map(([area, basis], i) => (
                    <tr key={i}>
                      <th scope="row">{area}</th>
                      <td>{basis}</td>
                      <td className="ram-col-coverage">
                        <span className="ram-stamp">
                          <svg viewBox="0 0 16 16" aria-hidden="true" focusable="false">
                            <path d="M6.4 11.2 3.2 8l1.1-1.1 2.1 2.1 5.2-5.2L12.7 5z" fill="currentColor" />
                          </svg>
                          Strong
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        ))}

        {/* Currency note */}
        <section className="ram-currency">
          <p>
            <strong>Frameworks current as at 17 June 2026.</strong> AU DBFO reforms in progress;
            UK Consumer Duty + FG21/1; US Reg&nbsp;BI / FINRA&nbsp;2111; Canada CFRs (NI&nbsp;31-103)
            under CIRO, Joint CSA/CIRO Staff Notice 31-368 (Dec&nbsp;2025).
          </p>
        </section>

      </main>

      <footer className="lp-footer">
        <div className="lp-footer-inner">
          <div className="lp-footer-brand">
            <img src="/assets/logos/moneymind-white.svg?v=5" alt="MoneyMind" />
            <span className="legal">© 2026 MoneyMind Profile · ABN 33 672 152 073</span>
          </div>
          <div className="lp-footer-links">
            <Link href="/legal/privacy-policy">Privacy Policy</Link>
            <Link href="/legal/terms-of-use">Terms of Use</Link>
            <Link href="/legal/acceptable-use-policy">Acceptable Use</Link>
            <Link href="/legal/data-aggregation">Data Aggregation</Link>
            <Link href="/legal/data-processing-agreement">DPA</Link>
            <Link href="/legal/subprocessors">Sub-processors</Link>
            <Link href="/legal/repeat-infringer-policy">Repeat Infringer</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
