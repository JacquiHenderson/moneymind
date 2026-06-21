import LegalLayout from '../../../components/LegalLayout';
import Link from 'next/link';

export const metadata = {
  title: 'Acceptable Use Policy — MoneyMind',
  description: 'MoneyMind Profile Acceptable Use Policy — governing the permitted and prohibited uses of our services.',
  alternates: { canonical: '/legal/acceptable-use-policy' },
};

export default function AcceptableUsePolicyPage() {
  return (
    <LegalLayout
      title="Acceptable Use Policy"
      meta="<strong>Document version 2.0</strong> · Effective Date: 20 January 2026"
    >
      <h2>1. Introduction and Scope</h2>
      <p>This Acceptable Use Policy (&ldquo;AUP&rdquo; or &ldquo;Policy&rdquo;) governs the use of the Services provided by MoneyMind Profile (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;Company&rdquo;). The Services include our software platform, applications, tools, features, and related services designed for financial service professionals to conduct client behavior profiling and risk profiling analysis, related to financial advisory activities.</p>
      <p>This Policy applies to all users of the Services, including financial advisory firms, individual financial advisors, administrators, and any other authorized users (collectively, &ldquo;Users&rdquo; or &ldquo;you&rdquo;). By accessing or using the Services, you agree to comply with this Policy and all applicable laws and regulations.</p>
      <div className="lp-callout"><strong>Important.</strong> A violation of this Policy constitutes a material breach of your agreement with us and may result in immediate suspension or termination of your access to the Services, with or without notice.</div>

      <h2>2. Permitted Uses</h2>
      <p>The Services are designed exclusively for legitimate financial advisory purposes, including:</p>
      <ul>
        <li>Conducting client behavior profiling and risk profiling assessments</li>
        <li>Servicing client relationships and advisory workflows</li>
        <li>Generating client profiling reports</li>
        <li>Maintaining records in compliance with applicable financial services regulations</li>
        <li>Collaborating with authorized colleagues within your organization</li>
        <li>Accessing educational resources and platform support materials</li>
      </ul>
      <p>Users must ensure all use of the Services complies with applicable financial services regulations in Australia, the United Kingdom, and the United States, including ASIC requirements; FCA regulations (UK); SEC and FINRA rules (US); AML and KYC obligations; and data protection laws including GDPR, CCPA, and the Australian Privacy Principles.</p>

      <h2>3. Prohibited Activities</h2>
      <h3>3.1 Illegal and Unauthorized Activities</h3>
      <p>You must not use the Services to engage in or facilitate any illegal, fraudulent, or deceptive activities; violate any applicable laws, regulations, or regulatory guidance in any jurisdiction; infringe upon intellectual property rights; violate privacy rights or misappropriate personal or confidential information; facilitate money laundering, terrorist financing, or other financial crimes; or process transactions involving sanctioned individuals or entities.</p>
      <p><strong>Unauthorized access and misuse:</strong> Access or attempt to access accounts, data, or systems you are not authorized to access; share login credentials or provide access to unauthorized individuals; use another person&apos;s account without their explicit authorization; circumvent, disable, or interfere with security features; probe, scan, or test the vulnerability of the Services; breach or attempt to breach any security or authentication measures.</p>

      <h3>3.2 Data Protection and Client Information Violations</h3>
      <p><strong>Prohibited data practices:</strong> Collect, process, store, or transmit client personal data beyond what is necessary for legitimate advisory purposes; use client data for purposes other than those explicitly authorized; share, sell, or disclose client information to unauthorized third parties; fail to implement appropriate security measures; store regulated financial data in violation of applicable data protection standards including PCI DSS where applicable; upload or process data belonging to individuals who have not provided appropriate consent; retain client data longer than permitted by applicable regulations.</p>
      <p><strong>Client privacy violations:</strong> Use the Services in a manner that violates client confidentiality obligations; access or view client information for purposes unrelated to providing advisory services; fail to comply with client data subject rights requests (access, deletion, portability, etc.); transfer client data across borders in violation of applicable data protection laws.</p>

      <h3>3.3 Content and Communication Violations</h3>
      <p>You must not use the Services to create, upload, transmit, display, or distribute content that: is defamatory, libelous, threatening, harassing, abusive, or hateful; contains malware, viruses, worms, Trojan horses, time bombs, or other harmful code; violates the rights of any third party; contains false, misleading, or deceptive statements; promotes discrimination based on race, ethnicity, national origin, religion, gender, sexual orientation, disability, age, or other protected characteristics; contains adult content or content inappropriate for a professional financial services context; or misrepresents your qualifications, regulatory status, or authorization to provide financial advice.</p>

      <h3>3.4 Platform Integrity and Performance</h3>
      <p><strong>System interference:</strong> Disrupt, interfere with, or degrade the performance, security, or availability of the Services; use automated systems (bots, scrapers, crawlers) to access the Services without authorization; overload, flood, or spam the Services; introduce content designed to interrupt, destroy, or limit functionality; reverse engineer, decompile, or disassemble the Services; create derivative works; remove, obscure, or alter any proprietary notices.</p>
      <p><strong>Resource abuse:</strong> Use the Services in a manner that consumes excessive computational resources; store, process, or transmit data unrelated to legitimate advisory activities; use the Services for cryptocurrency mining; deploy the Services for purposes of competing with or benchmarking against our platform.</p>

      <h3>3.5 Professional and Ethical Misconduct</h3>
      <p><strong>Advisory practice violations:</strong> Provide financial advice beyond the scope of your professional qualifications or regulatory authorization; make unsuitable recommendations inconsistent with a client&apos;s risk profile or objectives; fail to conduct appropriate due diligence or suitability assessments; engage in churning, unauthorized trading, or other prohibited sales practices; make guarantees of investment performance or returns; provide advice while subject to undisclosed conflicts of interest.</p>
      <p><strong>Misrepresentation:</strong> Misrepresent your credentials, licenses, registrations, or professional affiliations; make false or misleading claims about investment products or strategies; claim endorsement by or affiliation with regulatory bodies without authorization; impersonate another adviser, firm, or entity; use the Services to facilitate pump-and-dump schemes, market manipulation, or insider trading.</p>

      <h3>3.6 Spam and Unsolicited Communications</h3>
      <p>You must not use the Services to generate or facilitate unsolicited commercial email (spam) or bulk communications; send communications to individuals who have not provided appropriate consent; engage in or facilitate phishing, spoofing, or social engineering attacks; distribute chain letters, pyramid schemes, or multi-level marketing solicitations; or harvest email addresses or other contact information without authorization.</p>

      <h3>3.7 Third-Party Services and Integrations</h3>
      <p>When using third-party integrations or connected services: you must comply with the terms of service and acceptable use policies of such third parties; you must not use integrations to circumvent restrictions or limitations in this Policy; you are responsible for evaluating the security and compliance of third-party services; you must not use our Services to access third-party services in violation of their terms.</p>

      <h3>3.8 Prohibited AI Activities</h3>
      <p><strong>AI training &amp; development:</strong> You must not use the Platform or any data accessed through it to train, develop, or improve artificial intelligence models, machine learning algorithms, or large language models; extract data for purposes of creating embeddings, vector databases, or AI-powered knowledge bases; or reverse engineer Platform AI features or algorithms.</p>
      <p><strong>Third-party AI tools:</strong> You must not input client data, personal information, or confidential business information into ChatGPT, Claude, Bard/Gemini, Copilot, or similar AI chatbots; use AI-powered browser extensions or plugins that transmit Platform data to external services; or upload Platform data to cloud-based AI services without proper data protection agreements.</p>
      <p><strong>Automated extraction:</strong> You must not deploy bots, scrapers, crawlers, or automated tools to extract data; use API access to bulk download data for non-operational purposes; or systematically copy large portions of Platform content.</p>
      <p><strong>Approved AI use cases:</strong> Use MoneyMind Profile&apos;s built-in AI features as intended.</p>

      <h2>4. Data Security and Compliance Obligations</h2>
      <h3>4.1 Security Requirements</h3>
      <p>Users must maintain strong, unique passwords and enable multi-factor authentication where available; immediately report any suspected security incidents, data breaches, or unauthorized access; implement appropriate organizational and technical security measures for client data; ensure all devices used to access the Services have up-to-date security software; encrypt sensitive client data both in transit and at rest where technically feasible; and limit access to the Services to authorized personnel on a need-to-know basis.</p>
      <h3>4.2 Regulatory Compliance</h3>
      <p>Users are solely responsible for maintaining all required licenses, registrations, and authorizations; complying with all applicable financial services regulations in jurisdictions where they operate; maintaining adequate professional indemnity insurance; implementing and maintaining AML and CTF programs; conducting KYC and customer due diligence procedures; maintaining appropriate records; filing required regulatory reports; and responding to regulatory inquiries and examinations.</p>
      <h3>4.3 Client Consent and Authorization</h3>
      <p>Before using the Services to collect or process client data, you must obtain appropriate consent from clients; provide clients with clear privacy notices explaining how their data will be used; ensure clients understand the nature and purpose of behavior profiling and risk profiling assessments; maintain records of client consent and authorization; and honor client requests to access, correct, or delete their personal information.</p>

      <h2>5. Monitoring and Enforcement</h2>
      <h3>5.1 Our Rights</h3>
      <p>We reserve the right to monitor use of the Services to ensure compliance with this Policy and detect violations; investigate suspected violations; access, preserve, and disclose account information and content where necessary to comply with legal obligations; remove or disable access to content that violates this Policy; and implement technical measures to prevent or mitigate prohibited activities.</p>
      <div className="lp-callout">While we reserve these rights, we are not obligated to monitor all use of the Services and cannot guarantee detection or prevention of all policy violations. You remain solely responsible for your use of the Services.</div>

      <h3>5.2 Consequences of Violations</h3>
      <p><strong>Progressive enforcement:</strong></p>
      <ul>
        <li><strong>First violation (minor):</strong> Written warning and requirement to cease prohibited activity immediately.</li>
        <li><strong>Subsequent or serious violations:</strong> Temporary suspension of account access (typically 7-30 days).</li>
        <li><strong>Repeated or severe violations:</strong> Permanent termination of account and access to Services.</li>
      </ul>
      <p><strong>Immediate actions for severe violations:</strong> We may immediately suspend or terminate access without prior notice for activities that pose immediate risk to security, integrity, or availability; violations of law or regulations (including financial crimes); serious data protection violations or security breaches; activities that harm or risk harm to other users or their clients; and fraud, impersonation, or material misrepresentation.</p>
      <p><strong>Additional consequences:</strong> Removal of content and data; reporting to law enforcement or regulatory authorities as required; cooperation with investigations; pursuit of legal remedies including claims for damages; forfeiture of fees paid (no refunds for terminated accounts); prohibition from creating new accounts.</p>

      <h3>5.3 User Reporting</h3>
      <p>If you become aware of any violation of this Policy by another user, please report it immediately to <a href="mailto:support@moneymindprofile.com">support@moneymindprofile.com</a>. We investigate all reports and take appropriate action.</p>

      <h2>6. Disclaimers and Limitations</h2>
      <h3>6.1 No Professional Advice from Company</h3>
      <p>The Services are tools to assist you in providing financial advice to your clients. We do not provide financial, legal, tax, or investment advice. You are solely responsible for the accuracy and appropriateness of advice provided to clients; ensuring advice is suitable for each client&apos;s individual circumstances; complying with all professional and regulatory obligations; and the interpretation and application of risk profiles and behavior assessments.</p>
      <h3>6.2 Third-Party Content and Services</h3>
      <p>The Services may contain or provide access to third-party data, content, tools, or services. We do not endorse, warrant, or guarantee the accuracy, reliability, or completeness of third-party content; the performance or availability of third-party services; the compliance of third-party services with applicable regulations; or the security or privacy practices of third-party providers.</p>
      <h3>6.3 Service Availability</h3>
      <p>While we strive to maintain high availability, we do not guarantee uninterrupted or error-free access to the Services. We may suspend or restrict access for maintenance, upgrades, or security reasons. We are not liable for any loss or damage resulting from service interruptions.</p>

      <h2>7. Changes to This Policy</h2>
      <p>We may modify this Policy at any time. We will provide notice of material changes by posting the updated Policy on our website with a new &ldquo;Last Updated&rdquo; date, sending email notification to the primary contact for your account, or displaying an in-platform notification upon your next login. Your continued use of the Services after the effective date of changes constitutes acceptance of the revised Policy.</p>

      <h2>8. Relationship to Other Agreements</h2>
      <p>This Policy is incorporated into and forms part of your Master Subscription Agreement or other governing agreement with us. You must also comply with our <Link href="/legal/privacy-policy">Privacy Policy</Link>, our <Link href="/legal/repeat-infringer-policy">Repeat Infringer Policy</Link>, any industry-specific terms or requirements applicable to your jurisdiction, and all applicable laws and regulations.</p>

      <h2>9. Jurisdictional Considerations</h2>
      <p>As we operate in Australia, the United Kingdom, and the United States, users must ensure compliance with the most stringent applicable requirements across these jurisdictions. Users should be aware of and comply with:</p>
      <h3>Australia</h3>
      <ul>
        <li>ASIC Regulatory Guides (particularly RG 175, RG 244, RG 146)</li>
        <li>Corporations Act 2001</li>
        <li>Australian Privacy Principles under the Privacy Act 1988</li>
        <li>AML/CTF Act 2006</li>
      </ul>
      <h3>United Kingdom</h3>
      <ul>
        <li>FCA Handbook and Principles for Businesses</li>
        <li>Senior Managers and Certification Regime (SM&amp;CR)</li>
        <li>UK GDPR and Data Protection Act 2018</li>
        <li>Money Laundering, Terrorist Financing and Transfer of Funds Regulations 2017</li>
      </ul>
      <h3>United States</h3>
      <ul>
        <li>Investment Advisers Act of 1940</li>
        <li>Securities Exchange Act of 1934</li>
        <li>Gramm-Leach-Bliley Act (GLBA)</li>
        <li>SEC rules and FINRA regulations</li>
        <li>State-specific regulations for registered investment advisers</li>
        <li>Bank Secrecy Act and USA PATRIOT Act requirements</li>
      </ul>

      <h2>10. Contact Information</h2>
      <p>For questions about this Policy, to report violations, or to request clarification on permitted uses: <a href="mailto:support@moneymindprofile.com">support@moneymindprofile.com</a>.</p>

      <h2>11. Severability</h2>
      <p>If any provision of this Policy is found to be invalid, illegal, or unenforceable, the remaining provisions shall continue in full force and effect. The invalid provision shall be modified to the minimum extent necessary to make it valid and enforceable while preserving the original intent.</p>

      <h2>12. Governing Law and Dispute Resolution</h2>
      <p>This Policy and any disputes arising from it shall be governed by the laws specified in your Master Subscription Agreement. Any disputes shall be resolved in accordance with the dispute resolution provisions of that Agreement.</p>

      <div className="lp-callout"><strong>Acknowledgment.</strong> By using the Services, you acknowledge that you have read, understood, and agree to be bound by this Acceptable Use Policy. You represent that you have the authority to bind your organization to this Policy if you are using the Services on behalf of a firm or entity.</div>
    </LegalLayout>
  );
}
