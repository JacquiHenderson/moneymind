import LegalLayout from '../../../components/LegalLayout';
import Link from 'next/link';

export const metadata = {
  title: 'Privacy Policy — MoneyMind',
  description: 'MoneyMind Profile Privacy Policy — how we collect, use, and protect your personal information.',
  alternates: { canonical: '/legal/privacy-policy' },
};

export default function PrivacyPolicyPage() {
  return (
    <LegalLayout
      title="Privacy Policy"
      meta="<strong>Document version 2.0</strong> · Effective Date: 20 January 2026"
    >
      <nav className="lp-toc">
        <p className="lp-toc-title">Table of contents</p>
        <ol>
          <li><a href="#sec-1">Introduction</a></li>
          <li><a href="#sec-2">Scope and Application</a></li>
          <li><a href="#sec-3">Definitions</a></li>
          <li><a href="#sec-4">Our Role and Your Data Controller</a></li>
          <li><a href="#sec-5">Personal Information We Collect</a></li>
          <li><a href="#sec-6">How We Collect Personal Information</a></li>
          <li><a href="#sec-7">How We Use Personal Information</a></li>
          <li><a href="#sec-8">Legal Bases for Processing</a></li>
          <li><a href="#sec-9">How We Share and Disclose</a></li>
          <li><a href="#sec-10">International Data Transfers</a></li>
          <li><a href="#sec-11">Aggregated and De-Identified Data</a></li>
          <li><a href="#sec-12">Data Security</a></li>
          <li><a href="#sec-13">Data Retention</a></li>
          <li><a href="#sec-14">Your Privacy Rights</a></li>
          <li><a href="#sec-15">Cookies and Tracking</a></li>
          <li><a href="#sec-16">Third-Party Links and Services</a></li>
          <li><a href="#sec-17">Children&apos;s Privacy</a></li>
          <li><a href="#sec-18">Data Breach Notification</a></li>
          <li><a href="#sec-19">Changes to This Policy</a></li>
          <li><a href="#sec-20">Jurisdiction-Specific Info</a></li>
        </ol>
      </nav>

      <h2 id="sec-1">1. Introduction</h2>
      <p>MoneyMind Profile Pty Ltd ABN 33 672 152 073 (&ldquo;MoneyMind Profile,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) values the privacy of everyone who visits our website and uses our software and services. We are committed to protecting your Personal Information and being transparent about our data practices.</p>
      <p>This Privacy Policy explains:</p>
      <ul>
        <li>What Personal Information we collect and why</li>
        <li>How we use, share, and protect that information</li>
        <li>Your rights regarding your Personal Information</li>
        <li>How to contact us with privacy questions or concerns</li>
      </ul>
      <p>We operate globally, serving customers in Australia, the United Kingdom, and the United States. This Privacy Policy is designed to comply with applicable data protection laws in all jurisdictions where we operate, including:</p>
      <ul>
        <li><strong>Australia:</strong> Privacy Act 1988 (Cth) and the Australian Privacy Principles (APPs)</li>
        <li><strong>United Kingdom:</strong> UK General Data Protection Regulation (UK GDPR) and Data Protection Act 2018</li>
        <li><strong>United States:</strong> California Consumer Privacy Act (CCPA/CPRA), Virginia Consumer Data Protection Act (VCDPA), Colorado Privacy Act (CPA), and other applicable state privacy laws</li>
      </ul>

      <h2 id="sec-2">2. Scope and Application</h2>
      <h3>2.1 What This Policy Covers</h3>
      <p>This Privacy Policy applies to Personal Information we collect, use, and disclose when you visit our websites, use our MoneyMind Profile software and services, communicate with us, attend our events, or enter into a business relationship with us.</p>
      <h3>2.2 Our Business Model</h3>
      <p>We provide MoneyMind Profile software and related support services to organizations such as financial advisory firms, wealth management companies, and individual financial advisors (&ldquo;Customers&rdquo; or &ldquo;Subscribing Organizations&rdquo;). These Customers use our Services to conduct behavior profiling of their clients, perform risk profile analysis, generate financial planning reports, and manage client relationships.</p>
      <h3>2.3 Important Distinction: Controller vs. Processor</h3>
      <p><strong>When We Are a Data Processor (Service Provider):</strong> When a Subscribing Organization uses our Services to process Personal Information about their clients (End-Users), that organization is the data controller. We act as a data processor on their behalf, processing End-User Personal Information only on the Subscribing Organization&apos;s documented instructions.</p>
      <p><strong>When We Are a Data Controller (Business):</strong> We act as a data controller for Personal Information of our Customers, website visitors, newsletter subscribers, event attendees, marketing contacts, and prospective customers.</p>
      <h3>2.4 Who This Policy Does NOT Cover</h3>
      <p>If you are a client (End-User) of a financial advisor or organization that uses our Services, your Personal Information is controlled by that organization. Please contact your financial advisor for questions about how they handle your Personal Information.</p>

      <h2 id="sec-3">3. Definitions</h2>
      <p>For purposes of this Privacy Policy, key terms include: <strong>&ldquo;Applicable Data Protection Laws&rdquo;</strong> means all applicable data protection and privacy laws; <strong>&ldquo;Controller&rdquo;</strong> means the entity that determines the purposes and means of processing Personal Information; <strong>&ldquo;Customer&rdquo;</strong> or <strong>&ldquo;Subscribing Organization&rdquo;</strong> means the financial advisory firm or advisor that subscribes to our Services; <strong>&ldquo;End-User&rdquo;</strong> means a client of a Subscribing Organization; <strong>&ldquo;Personal Information&rdquo;</strong> means any information that identifies or is reasonably capable of being associated with an identified natural person; and <strong>&ldquo;Services&rdquo;</strong> means our MoneyMind Profile software platform and related services.</p>

      <h2 id="sec-4">4. Our Role and Your Data Controller</h2>
      <p>We are the data controller for Customer Personnel who use our Services, and for Direct Contacts who interact with us as website visitors, newsletter subscribers, event attendees, or business contacts.</p>
      <p>When Subscribing Organizations use our Services to process their clients&apos; Personal Information, we act as a processor — processing Personal Information only on the Subscribing Organization&apos;s documented instructions, not for our own purposes.</p>
      <p>If you are a client of a financial advisor using our Services, please contact them directly regarding your Personal Information.</p>

      <h2 id="sec-5">5. Personal Information We Collect</h2>
      <h3>5.1 Information We Collect About Customer Personnel</h3>
      <p>When you register for an account or use our Services as a representative of a Subscribing Organization, we may collect identity and contact information (name, email, phone, business address, job title), account and authentication information (username, password, MFA credentials), usage and activity information (login history, features accessed, device information), and communications and billing information (support requests, payment method details processed by our third-party payment processor).</p>
      <h3>5.2 Information We Collect From Website Visitors</h3>
      <p>When you visit our website, we may automatically collect IP address and approximate geolocation, browser type and version, operating system, referring website, pages visited, and links clicked. We also collect information you provide through contact forms, newsletter subscriptions, demo or trial requests, and event registrations.</p>
      <h3>5.3 Information From Third Parties</h3>
      <p>We may receive Personal Information from service providers and integration partners, publicly available sources such as professional licensing databases and LinkedIn, and Subscribing Organizations who provide your information to set up your account.</p>
      <h3>5.4 Sensitive Personal Information</h3>
      <div className="lp-callout"><strong>Important:</strong> Our Services are designed to minimize the collection of Sensitive Personal Information. Financial advisors using our Services may input Sensitive Personal Information about their clients. When Subscribing Organizations input such information, they remain the controller and are responsible for obtaining appropriate consents and complying with applicable laws.</div>

      <h2 id="sec-6">6. How We Collect Personal Information</h2>
      <p>We collect Personal Information directly (when you provide it through registration, forms, surveys, or communications), automatically (through cookies, web server logs, and analytics tools), and from third-party sources (service providers, Subscribing Organizations, and publicly available sources).</p>

      <h2 id="sec-7">7. How We Use Personal Information</h2>
      <p>We use Personal Information to provide and maintain the Services (account management, authentication, customer support, backups), improve and develop the Services (usage analytics, feature development, research), for business operations (payment processing, accounting, vendor management), for communication and marketing (transactional emails, newsletters with consent, event invitations), for security and fraud prevention, and for compliance with legal obligations. You may opt out of marketing communications at any time.</p>

      <h2 id="sec-8">8. Legal Bases for Processing (International Users)</h2>
      <p>For users in jurisdictions requiring a legal basis for processing (such as the UK and EU under GDPR), we rely on contract performance, legitimate interests (improving Services, marketing, fraud prevention — we conduct balancing tests), legal obligations, consent (which may be withdrawn at any time), and vital interests in rare emergency circumstances.</p>

      <h2 id="sec-9">9. How We Share and Disclose Personal Information</h2>
      <p><strong>We do not sell, rent, or lease Personal Information to third parties.</strong> We share Personal Information with service providers and subprocessors bound by contractual obligations (for infrastructure, payment processing, analytics, security, and marketing); within the MoneyMind Profile organization for administration and business operations; in connection with business transfers (merger, acquisition, asset sale) with prior notice; and as required by law or to defend legal claims. We may share aggregated, anonymized, or de-identified information that cannot identify individuals.</p>

      <h2 id="sec-10">10. International Data Transfers</h2>
      <p>MoneyMind Profile may transfer Personal Information to Australia (primary operations), the United States (cloud hosting infrastructure), the United Kingdom (offices), and other countries where our service providers operate. When transferring to countries not recognized as providing adequate protection, we implement Standard Contractual Clauses (SCCs), the UK International Data Transfer Agreement (IDTA), and supplementary measures including encryption in transit and at rest, strict access controls, and data minimization.</p>

      <h2 id="sec-11">11. Aggregated and De-Identified Data</h2>
      <p>We create aggregated, anonymized, and de-identified data to improve Services, conduct research, and generate industry benchmarks. We remove all direct identifiers, apply statistical techniques to prevent re-identification, and ensure the data cannot reasonably be linked back to individuals. We apply our <Link href="/legal/data-aggregation">Data Aggregation and De-Identification Policy</Link>.</p>

      <h2 id="sec-12">12. Data Security</h2>
      <p>We implement comprehensive administrative, technical, and physical safeguards including: encryption (TLS 1.2+ in transit, industry-standard encryption at rest), access controls (MFA, RBAC, least privilege, regular access reviews), network security (firewalls, intrusion detection, DDoS protection, penetration testing), and application security (secure SDLC, code reviews, OWASP Top 10 protection). Our infrastructure is hosted in secure, certified data centers with 24/7 monitoring.</p>
      <div className="lp-callout"><strong>No absolute security.</strong> Despite our efforts, no security measures are perfect. We cannot guarantee absolute security of Personal Information. Internet transmissions are never completely private or secure.</div>

      <h2 id="sec-13">13. Data Retention</h2>
      <p>We retain Personal Information only as long as necessary. Active accounts are retained for the subscription duration plus up to 30 days after termination. Terminated accounts are deleted or anonymized within 30 days (backups retained for an additional 90 days). Financial and transaction records are retained for 7 years. Support tickets for 3 years. Server logs for 90 days. Analytics data (aggregated and anonymized) may be retained indefinitely. You may request deletion of your Personal Information at any time, subject to legal obligations.</p>

      <h2 id="sec-14">14. Your Privacy Rights</h2>
      <h3>14.1 Rights Under Australian Privacy Law</h3>
      <p>If you are in Australia, you have the right to access the Personal Information we hold about you, request correction of inaccurate information, and lodge a complaint with us about our handling of your Personal Information.</p>
      <h3>14.2 Rights Under UK GDPR</h3>
      <p>If you are in the UK or EU, you have the right to access, rectification, erasure, restriction of processing, data portability, objection to processing, and to lodge a complaint with the Information Commissioner&apos;s Office (ICO).</p>
      <h3>14.3 Rights Under US Privacy Laws</h3>
      <p>If you are in California, Virginia, Colorado, or another state with consumer privacy rights, you have the right to know what Personal Information we collect, request deletion, request correction, opt out of sale/sharing (note: we do not sell or share), limit use of Sensitive Personal Information, and non-discrimination.</p>
      <h3>14.4 How to Exercise Your Rights</h3>
      <p>To exercise any of these rights, please contact us at <a href="mailto:support@moneymindprofile.com">support@moneymindprofile.com</a>.</p>

      <h2 id="sec-15">15. Cookies and Tracking Technologies</h2>
      <p>We use essential cookies (necessary for Services to function — cannot be disabled), performance and analytics cookies (Google Analytics, error tracking), functionality cookies (preferences, A/B testing), and marketing and advertising cookies (campaign tracking, retargeting). You can manage cookies through your browser settings or our Cookie Preference Center. Our Services do not currently respond to Do Not Track signals.</p>

      <h2 id="sec-16">16. Third-Party Links and Services</h2>
      <p>Our Services may contain links to third-party websites not operated or controlled by MoneyMind Profile. We are not responsible for the privacy practices or content of external sites. When you click on a third-party link, their privacy policy applies. We encourage you to read their privacy policy before providing Personal Information.</p>

      <h2 id="sec-17">17. Children&apos;s Privacy</h2>
      <p>Our Services are not directed to children under the age of 18. If we become aware that we have collected Personal Information from a child under 18 without parental consent, we will delete the information, terminate any associated account, and prevent future collection. If you are a parent or guardian and believe your child has provided Personal Information to us, please contact us at <a href="mailto:support@moneymindprofile.com">support@moneymindprofile.com</a> with subject &ldquo;Children&apos;s Privacy Concern.&rdquo;</p>

      <h2 id="sec-18">18. Data Breach Notification</h2>
      <p>In the event of a data breach affecting Personal Information, we are committed to transparency and prompt action. Our incident response process covers detection and verification, containment and mitigation, assessment of affected individuals and compromised information, notification as required by law, and remediation to prevent recurrence.</p>
      <p>Notification timing: UK/EU GDPR — ICO within 72 hours; Australia — OAIC as soon as practicable and within 72 hours; United States — state attorneys general as required by state breach notification laws (typically 30–90 days). To report a security vulnerability, contact <a href="mailto:support@moneymindprofile.com">support@moneymindprofile.com</a> with subject &ldquo;Security Incident Report.&rdquo;</p>

      <h2 id="sec-19">19. Changes to This Privacy Policy</h2>
      <p>For material changes, we will provide prominent notice through email notification to registered users at least 30 days before the effective date, a prominent banner on our website, and an in-app notification. By continuing to use our Services after changes become effective, you accept the updated Privacy Policy. If you disagree with changes, you may stop using the Services or close your account.</p>

      <h2 id="sec-20">20. Jurisdiction-Specific Information</h2>
      <h3>20.1 Australia</h3>
      <p>Our data practices comply with the Privacy Act 1988 (Cth) and the Australian Privacy Principles. The Australian Privacy Commissioner is the Office of the Australian Information Commissioner (OAIC) — <a href="https://www.oaic.gov.au" target="_blank" rel="noopener">oaic.gov.au</a>. We comply with the Notifiable Data Breaches (NDB) scheme.</p>
      <h3>20.2 United Kingdom</h3>
      <p>Our data practices comply with the UK GDPR and the EU GDPR. The supervisory authority is the Information Commissioner&apos;s Office (ICO) — <a href="https://ico.org.uk" target="_blank" rel="noopener">ico.org.uk</a>. When transferring Personal Data outside the UK/EEA, we use Standard Contractual Clauses (SCCs) and supplementary measures.</p>
      <h3>20.3 United States</h3>
      <p>We comply with the CCPA (as amended by the CPRA), Virginia CDPA, Colorado Privacy Act, and other applicable state privacy laws. We do not sell or share Personal Information as defined by the CCPA/CPRA. You may designate an authorized agent and appeal our decisions by contacting <a href="mailto:privacy@moneymindprofile.com">privacy@moneymindprofile.com</a>.</p>
      <h3>20.4 Other Jurisdictions</h3>
      <p>We comply with PIPEDA and applicable provincial privacy laws in Canada, the Privacy Act 2020 in New Zealand, and applicable local data protection laws in other countries. Contact us for jurisdiction-specific information.</p>
    </LegalLayout>
  );
}
