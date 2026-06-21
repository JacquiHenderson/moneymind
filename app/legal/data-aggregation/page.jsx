import LegalLayout from '../../../components/LegalLayout';
import Link from 'next/link';

export const metadata = {
  title: 'Data Aggregation & De-Identification Policy — MoneyMind',
  description: 'MoneyMind Profile Data Aggregation and De-Identification Policy — standards and safeguards for aggregated data.',
  alternates: { canonical: '/legal/data-aggregation' },
};

export default function DataAggregationPage() {
  return (
    <LegalLayout
      title="Data Aggregation &amp; De-Identification Policy"
      meta="<strong>Document version 1.0</strong> · Effective Date: 30 January 2026 · Applies in Australia, the United Kingdom, and the United States"
    >
      <nav className="lp-toc">
        <p className="lp-toc-title">Table of contents</p>
        <ol>
          <li><a href="#d-1">Introduction and Purpose</a></li>
          <li><a href="#d-2">Scope and Application</a></li>
          <li><a href="#d-3">Definitions</a></li>
          <li><a href="#d-4">Our Commitment to Privacy</a></li>
          <li><a href="#d-5">Types of Data Processing</a></li>
          <li><a href="#d-6">De-Identification Standards and Techniques</a></li>
          <li><a href="#d-7">Aggregation Methodologies</a></li>
          <li><a href="#d-8">Use Cases for Aggregated Data</a></li>
          <li><a href="#d-9">Governance and Oversight</a></li>
          <li><a href="#d-10">Technical and Organizational Safeguards</a></li>
          <li><a href="#d-11">Data Quality and Validation</a></li>
          <li><a href="#d-12">Transparency and Disclosure</a></li>
          <li><a href="#d-13">Third-Party Sharing and Commercial Use</a></li>
          <li><a href="#d-14">Rights and Limitations</a></li>
          <li><a href="#d-15">Compliance and Legal Framework</a></li>
          <li><a href="#d-16">Review and Updates</a></li>
          <li><a href="#d-17">Contact Information</a></li>
          <li><a href="#d-glossary">Appendix — Glossary of Key Terms</a></li>
        </ol>
      </nav>

      <h2 id="d-1">1. Introduction and Purpose</h2>
      <h3>1.1 Purpose of This Policy</h3>
      <p>This Data Aggregation and De-Identification Policy (&ldquo;Policy&rdquo;) establishes the standards, processes, and safeguards <strong>MoneyMind Profile Pty Ltd ABN 33 672 152 073</strong> (&ldquo;MoneyMind Profile,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) employs when creating, using, and sharing aggregated and de-identified data derived from our Services.</p>

      <h3>1.2 Our Commitment</h3>
      <p>MoneyMind Profile is committed to:</p>
      <ul>
        <li><strong>Privacy by Design</strong> — Building privacy protections into our data aggregation processes from the outset</li>
        <li><strong>Data Minimization</strong> — Collecting and processing only the data necessary for legitimate purposes</li>
        <li><strong>Transparency</strong> — Being clear about what data we aggregate, how we use it, and with whom we share it</li>
        <li><strong>Strong De-Identification</strong> — Applying rigorous technical measures to prevent re-identification</li>
        <li><strong>Continuous Improvement</strong> — Regularly reviewing and enhancing our practices to reflect evolving privacy standards</li>
      </ul>

      <h3>1.3 Strategic Value</h3>
      <p>Aggregated and de-identified data provides significant value to:</p>
      <ul>
        <li><strong>Our Business</strong> — Enabling product improvements, research, and innovation</li>
        <li><strong>The Industry</strong> — Contributing to better understanding of financial behavior and risk profiling</li>
        <li><strong>Society</strong> — Advancing financial literacy and evidence-based policy development</li>
        <li><strong>Our Customers</strong> — Providing benchmarking insights and industry comparisons</li>
      </ul>
      <p>This value must be balanced against the fundamental right to privacy, which this Policy is designed to protect.</p>

      <h2 id="d-2">2. Scope and Application</h2>
      <h3>2.1 What This Policy Covers</h3>
      <p>This Policy applies to all aggregated and de-identified data created from:</p>
      <ul>
        <li><strong>End-User Data</strong> — Personal information about clients of Subscribing Organizations (financial advisors&apos; clients) that is processed through our Services</li>
        <li><strong>Customer Data</strong> — Information about our Subscribing Organizations and their authorized users</li>
        <li><strong>Usage Data</strong> — Information about how the Services are used</li>
        <li><strong>Generated Data</strong> — Outputs, analyses, and insights created through our Services</li>
      </ul>

      <h3>2.2 What This Policy Does NOT Cover</h3>
      <p>This Policy does not govern:</p>
      <ul>
        <li><strong>Personal Information in Identifiable Form</strong> — Governed by our <Link href="/legal/privacy-policy">Privacy Policy</Link> and <Link href="/legal/data-processing-agreement">Data Processing Agreement</Link></li>
        <li><strong>Confidential Business Information</strong> — Governed by confidentiality agreements</li>
        <li><strong>Internal Operations Data</strong> — Not intended for external use or commercialization</li>
      </ul>

      <h3>2.3 Relationship to Other Policies</h3>
      <p>This Policy should be read in conjunction with:</p>
      <ul>
        <li>MoneyMind Profile <Link href="/legal/privacy-policy">Privacy Policy</Link></li>
        <li><Link href="/legal/terms-of-use">Terms of Use</Link> (Section 12: Data Aggregation)</li>
        <li><Link href="/legal/data-processing-agreement">Data Processing Agreement</Link></li>
        <li>Information Security Policy</li>
        <li><Link href="/legal/acceptable-use-policy">Acceptable Use Policy</Link></li>
      </ul>
      <p>In the event of any conflict, the Terms of Use and Data Processing Agreement shall prevail, except where this Policy imposes more stringent privacy protections.</p>

      <h3>2.4 Geographic Scope</h3>
      <p>This Policy applies to data aggregation activities in all jurisdictions where we operate:</p>
      <ul>
        <li><strong>Australia</strong> — Complies with the Privacy Act 1988 (Cth) and Australian Privacy Principles</li>
        <li><strong>United Kingdom</strong> — Complies with UK GDPR and Data Protection Act 2018</li>
        <li><strong>United States</strong> — Complies with CCPA/CPRA and applicable state privacy laws</li>
      </ul>

      <h2 id="d-3">3. Definitions</h2>
      <ul>
        <li><strong>&ldquo;Aggregated Data&rdquo;</strong> — data that has been combined from multiple sources or individuals and presented in summary form such that individual data subjects cannot be identified. Aggregated Data is considered non-personal information under applicable privacy laws.</li>
        <li><strong>&ldquo;Anonymization&rdquo;</strong> — the process of irreversibly transforming Personal Information such that individuals can no longer be identified, directly or indirectly, by any means reasonably likely to be used.</li>
        <li><strong>&ldquo;Data Controller&rdquo;</strong> (or &ldquo;Business&rdquo;) — an entity that determines the purposes and means of processing Personal Information.</li>
        <li><strong>&ldquo;Data Minimization&rdquo;</strong> — the principle of collecting and processing only the Personal Information that is adequate, relevant, and limited to what is necessary for specified purposes.</li>
        <li><strong>&ldquo;De-Identified Data&rdquo;</strong> — data from which all direct identifiers have been removed and to which technical safeguards have been applied to prevent re-identification. De-identified data may include pseudonymized data.</li>
        <li><strong>&ldquo;Direct Identifier&rdquo;</strong> — any data element that directly identifies an individual, including but not limited to: full name, email address, phone number, physical address, Social Security number, driver&apos;s license number, account number, IP address (in some contexts), device identifiers linked to personal information.</li>
        <li><strong>&ldquo;End-User&rdquo;</strong> — a client of a Subscribing Organization whose Personal Information is processed through our Services.</li>
        <li><strong>&ldquo;Indirect Identifier&rdquo;</strong> (or &ldquo;Quasi-Identifier&rdquo;) — data that, when combined with other data, could potentially identify an individual, such as: age, gender, occupation, geographic region, dates (birth, transaction, activity), demographic characteristics.</li>
        <li><strong>&ldquo;Personal Information&rdquo;</strong> (or &ldquo;Personal Data&rdquo;) — any information that identifies, relates to, describes, is reasonably capable of being associated with, or could reasonably be linked, directly or indirectly, with an identified or identifiable natural person.</li>
        <li><strong>&ldquo;Pseudonymization&rdquo;</strong> — the processing of Personal Information such that it can no longer be attributed to a specific individual without the use of additional information (the &ldquo;key&rdquo;), which is kept separately and subject to technical and organizational measures to prevent re-identification.</li>
        <li><strong>&ldquo;Re-Identification&rdquo;</strong> — the process of matching de-identified or pseudonymized data back to the specific individual to whom it relates.</li>
        <li><strong>&ldquo;Sensitive Personal Information&rdquo;</strong> — includes Personal Information revealing: racial or ethnic origin, political opinions, religious or philosophical beliefs, trade union membership, genetic data, biometric data, health information, sex life or sexual orientation, and in some jurisdictions, financial account information, Social Security numbers, and precise geolocation.</li>
        <li><strong>&ldquo;Services&rdquo;</strong> — MoneyMind Profile software, applications, tools, and related services.</li>
        <li><strong>&ldquo;Statistical Disclosure Control&rdquo;</strong> — techniques applied to data to prevent the disclosure of information about individuals while preserving data utility.</li>
        <li><strong>&ldquo;Subscribing Organization&rdquo;</strong> — a financial advisory firm, wealth management company, or individual financial advisor that uses our Services to profile and serve their clients.</li>
      </ul>

      <h2 id="d-4">4. Our Commitment to Privacy</h2>
      <h3>4.1 Privacy-First Approach</h3>
      <p>We design our data aggregation processes with privacy as a foundational principle, following the framework of &ldquo;Privacy by Design and by Default&rdquo;:</p>
      <p><strong>Privacy by Design:</strong></p>
      <ul>
        <li>Privacy protections are embedded into our systems and processes from the outset</li>
        <li>We anticipate privacy risks and build safeguards proactively</li>
        <li>Privacy is a core business requirement, not an afterthought</li>
      </ul>
      <p><strong>Privacy by Default:</strong></p>
      <ul>
        <li>The strictest privacy settings apply automatically</li>
        <li>No action is required by individuals to protect their privacy</li>
        <li>Only necessary data is processed for each specific purpose</li>
      </ul>

      <h3>4.2 Data Minimization Principle</h3>
      <p>We adhere strictly to data minimization:</p>
      <ul>
        <li>We collect only the minimum data necessary for aggregation purposes</li>
        <li>We retain source data only as long as necessary for de-identification and aggregation</li>
        <li>We delete source Personal Information promptly after aggregation is complete</li>
        <li>We limit the granularity of aggregated data to what is necessary for its intended purpose</li>
      </ul>

      <h3>4.3 Purpose Limitation</h3>
      <p>Aggregated data is used only for the purposes disclosed in this Policy, our Privacy Policy, our Terms of Use (Section 12), and specific disclosures to Subscribing Organizations. We do not use aggregated data for purposes incompatible with these disclosures without obtaining appropriate consent or providing additional notice.</p>

      <h3>4.4 Accountability and Responsibility</h3>
      <p>We take full responsibility for ensuring de-identification techniques are effective, preventing re-identification of individuals, maintaining the security of aggregation processes, training personnel on privacy requirements, and conducting regular audits and assessments.</p>

      <h2 id="d-5">5. Types of Data Processing</h2>
      <h3>5.1 When We Act as Data Controller</h3>
      <p>We are the data controller (business) for aggregated data created from Customer usage and activity data (how Subscribing Organizations use our Services) and aggregate industry research conducted with explicit participant consent. In these scenarios, we determine the purposes and means of aggregation and are responsible for compliance with applicable privacy laws.</p>

      <h3>5.2 When We Act as Data Processor</h3>
      <p>When Subscribing Organizations use our Services to profile their clients, we act as a data processor (service provider) for End-User Personal Information. In this role, we may aggregate End-User data only as permitted by our <Link href="/legal/data-processing-agreement">Data Processing Agreement</Link>. Subscribing Organizations retain primary control over their clients&apos; data. Our Terms of Use (Section 12.1&ndash;12.3) provide contractual authorization to aggregate End-User data across multiple Subscribing Organizations, use de-identified aggregated data for service improvement, research, and product development, and share aggregated data with third parties (subject to this Policy&apos;s protections).</p>

      <h3>5.3 Source Data Categories</h3>
      <p>We aggregate data from behavior profile data (questionnaire responses, financial personality assessments, behavioral traits, decision-making patterns), risk profile data (risk capacity assessments, risk tolerance scores, financial goals), demographic data (age ranges, geographic regions, occupation categories, income and asset bands, life stage indicators), financial data (portfolio asset allocation data, asset class preferences), and usage and interaction data (feature utilization, questionnaire completion rates, report generation frequency).</p>
      <div className="lp-callout">
        <strong>Important.</strong> We do NOT include in aggregated data: full names, email addresses, or contact information; specific account numbers or financial account identifiers; Social Security numbers or government identifiers; precise geolocation data; health information; or any data that would allow individual identification.<br /><br />
        In the Software we do NOT capture social security numbers, tax file numbers, national insurance numbers, driver&apos;s license numbers and passport numbers, financial account numbers (bank account, investment account, or credit card numbers), vehicle identification numbers (VINs).
      </div>

      <h2 id="d-6">6. De-Identification Standards and Techniques</h2>
      <h3>6.1 De-Identification Framework</h3>
      <p>We employ a multi-layered de-identification framework based on industry best practices. Our approach follows the &ldquo;De-Identification Triangle&rdquo; principle: <strong>Remove Direct Identifiers</strong> (strip all data elements that directly identify individuals) and <strong>Generalize Indirect Identifiers</strong> (transform quasi-identifiers to reduce specificity).</p>

      <h3>6.2 Removal of Direct Identifiers</h3>
      <p>Before any aggregation, we remove all direct identifiers including full names, email addresses, phone numbers, physical addresses, account identifiers and user IDs, IP addresses, device identifiers (MAC addresses, IMEI, advertising IDs), biometric data, web cookies or persistent identifiers linked to personal information, and any other unique identifiers that could directly identify individuals. Mandatory deletion occurs before data enters aggregation processes, with audit logs to verify complete removal.</p>

      <h3>6.3 Generalization of Indirect Identifiers</h3>
      <p>Indirect identifiers (quasi-identifiers) are generalized to prevent re-identification through combination. Specific ages are converted to age ranges (e.g., 25&ndash;34, 35&ndash;44, 45&ndash;54). Geographic data is reduced to metropolitan area, state, or region, with city-level data only for cities with population &gt; 100,000. Specific dates of birth are reduced to month/year or year only. Income and asset values are converted to broad bands (e.g., $50,000&ndash;$100,000), with top-coding applied to highest values to prevent identification of high-net-worth individuals.</p>

      <h3>6.4 Advanced De-Identification Techniques</h3>
      <p>The following techniques may be used depending on the use case and data sets being aggregated:</p>
      <p><strong>Noise Addition (Differential Privacy):</strong> Random statistical noise added to datasets to prevent inference attacks, calibrated to maintain data utility while protecting privacy, ensuring inclusion or exclusion of any single individual does not significantly affect results.</p>
      <p><strong>Data Suppression:</strong> Rare or unique combinations of attributes are suppressed entirely; outliers removed to prevent identification of exceptional cases.</p>
      <p><strong>Data Swapping:</strong> Values of sensitive attributes swapped between records to break linkages; applied selectively to maintain overall statistical properties.</p>
      <p><strong>Rounding and Binning:</strong> Continuous variables rounded to reduce precision; values grouped into bins or categories; applied consistently across all records.</p>
      <p><em>Pseudonymization</em> is used when we need to track entities over time without identifying them. Random identifiers replace direct identifiers, with keys kept separately under strict security controls. Pseudonymized data is still considered Personal Information under GDPR/UK GDPR and is used only for intermediate processing; final aggregated outputs are fully anonymized. <em>Anonymization</em> is irreversible &mdash; aggregated data in its final form is fully anonymized, no longer considered Personal Information under applicable laws, and cannot be reversed using any reasonable means.</p>

      <h2 id="d-7">7. Aggregation Methodologies</h2>
      <h3>7.1 Aggregation Process Overview</h3>
      <p>Our aggregation process follows a rigorous six-stage workflow: (1) Data Extraction — source data identified and extracted with minimal footprint; (2) Pre-Processing — direct identifiers removed immediately, data quality checks performed; (3) De-Identification — techniques from Section 6 applied systematically with automated and manual checks; (4) Aggregation — statistical aggregation with thresholds applied; (5) Validation — re-identification risk assessment and compliance checks; (6) Approval and Release — Privacy Officer or CTO approves, source Personal Information deleted.</p>

      <h3>7.2 Statistical Aggregation Methods</h3>
      <p>We use descriptive statistics (counts, frequencies, means, medians, modes, standard deviations, percentiles, confidence intervals), trend analysis (time-series aggregates — monthly, quarterly, annually), benchmarking (industry averages, percentiles, peer group comparisons, normalized scores), segmentation (cluster analysis, segment profiles), and modeling (predictive models trained on de-identified datasets, with outputs validated to ensure no individual identification).</p>

      <h3>7.3 Geographic Aggregation</h3>
      <p>Geographic data is aggregated at the region/state/postal/ZIP code level as default, or at country level for international comparisons.</p>

      <h3>7.4 Cohort Analysis</h3>
      <p>Cohorts (groups) may be created for analysis, defined by shared characteristics (e.g., &ldquo;self-control or optimism behavioral characteristics&rdquo;). Tracking is at cohort level only, with no individual tracking, and cohort definitions broad enough to prevent identification.</p>

      <h2 id="d-8">8. Use Cases for Aggregated Data</h2>
      <h3>8.1 Internal Business Uses</h3>
      <p>Internal uses include product development and improvement (identifying feature usage, understanding user needs, developing new tools, optimizing user experience), research and innovation (studying financial behavior and decision-making, developing improved risk profiling, creating industry insights), quality assurance (monitoring system performance, benchmarking service delivery), and business analytics (internal reporting, board and investor reporting, financial planning, strategic decision-making).</p>

      <h3>8.2 Customer-Facing Uses</h3>
      <p>Customer-facing uses include benchmarking and insights (providing industry benchmarks to Subscribing Organizations, showing how their clients compare to peer groups, delivering insights to improve business practices), training and education (educating financial advisors on behavior profiling best practices, providing fully anonymized case studies), and marketing and thought leadership (publishing industry reports and white papers, presenting at conferences, demonstrating product value).</p>

      <h3>8.3 Third-Party Commercial Uses</h3>
      <p>Subject to the safeguards in Section 13, we may commercialize aggregated data through licensing to research institutions (academic researchers, think tanks, policy institutes), financial services firms (investment managers, fund managers, wealth management institutions), data analytics companies (market intelligence firms, business intelligence platforms, consulting firms), and media and publishers (financial news organizations, industry publications, educational uses).</p>
      <div className="lp-callout"><strong>Important.</strong> All third-party licenses include contractual prohibitions on attempting to re-identify individuals; combining data with other sources to identify individuals; using data in ways inconsistent with this Policy; and further distribution without approval.</div>

      <h3>8.4 Prohibited Uses</h3>
      <p>We do NOT use aggregated data for discriminatory purposes (making decisions that discriminate based on protected characteristics), targeting individuals, employment decisions (hiring, firing, or promoting based on aggregated data), surveillance (monitoring or tracking specific individuals), or any harmful purposes.</p>

      <h2 id="d-9">9. Governance and Oversight</h2>
      <h3>9.1 Privacy Officer Responsibility</h3>
      <p>Our Privacy Officer has overall responsibility for implementing and maintaining this Policy, approving aggregation projects and methodologies, conducting or overseeing re-identification risk assessments, reviewing third-party data sharing agreements, investigating privacy incidents related to aggregated data, and reporting to senior management on compliance.</p>

      <h3>9.2 Data Aggregation Review Committee</h3>
      <p>For significant aggregation projects, we may convene a Data Aggregation Review Committee comprising the Privacy Officer (Chair), Chief Technology Officer or delegate, Data Scientist or Analytics Lead, and Legal Counsel or Compliance Officer. The Committee reviews proposed aggregation projects, assesses privacy risks and benefits, approves methodologies and techniques, monitors ongoing aggregation activities, and recommends policy updates.</p>

      <h3>9.3 Approval Process</h3>
      <p>Standard aggregation (internal use, low risk) is reviewed and approved by the CTO and Privacy Officer with quarterly reporting to management. Enhanced aggregation (commercial use, third-party sharing) requires formal proposal to the Data Aggregation Review Committee with risk assessment and Committee approval. High-risk or sensitive data requires senior management approval and may require external privacy expert consultation.</p>

      <h3>9.4 Documentation Requirements</h3>
      <p>All aggregation activities must document: purpose, data sources, methodology, risk assessment, approval evidence, safeguards, retention periods, and distribution plans. Documentation is retained for audit and compliance purposes for at least 7 years.</p>

      <h3>9.5 Training and Awareness</h3>
      <p>Personnel involved in data aggregation must complete Privacy Awareness Training (annual), De-Identification Training, Role-Based Training (for data scientists, analysts, and engineers), and Policy Training. Training records are maintained and reviewed annually.</p>

      <h2 id="d-10">10. Technical and Organizational Safeguards</h2>
      <h3>10.1 Access Controls</h3>
      <p>We apply the principle of least privilege (access to source Personal Information limited to personnel with legitimate need, role-based access controls, regular access reviews). Segregation of duties ensures personnel conducting aggregation do not have direct access to identifiable data in production systems, with extraction, de-identification, and approval performed by different individuals. All aggregation activities are logged and monitored, with logs retained for at least 3 years.</p>

      <h3>10.2 Secure Environments</h3>
      <p>Data is encrypted in transit (TLS 1.2+) and at rest with regular key rotation. Source Personal Information is securely deleted after aggregation using multiple overwrite passes to prevent recovery, with certificate of destruction for physical media.</p>

      <h3>10.3 Technical Safeguards in Software</h3>
      <p>We use automated de-identification tools to detect and remove direct identifiers, algorithms to apply generalization, suppression, and noise addition, query logging and monitoring for suspicious patterns, and dynamic data masking for development and testing environments.</p>

      <h3>10.4 Network and Infrastructure Security</h3>
      <p>Security measures include firewalls protecting aggregation systems, intrusion detection and prevention systems, 24/7 security monitoring, SIEM, security scanning and penetration testing, and secure software development lifecycle.</p>

      <h2 id="d-11">11. Data Quality and Validation</h2>
      <h3>11.1 Data Quality Principles</h3>
      <p>High-quality aggregated data requires high-quality source data: accuracy (verified and validated before aggregation), completeness (missing data handled appropriately), consistency (standardized definitions and formats), and timeliness (data aggregated from current, relevant time periods).</p>

      <h3>11.2 Validation Procedures</h3>
      <p>Pre-aggregation validation includes data integrity checks, identification and handling of outliers, detection of duplicate records, and reconciliation with source systems. Post-aggregation validation includes comparison to historical trends and cross-validation with alternative data sources. Privacy validation includes automated scans for residual identifiers, identification risk assessment, and compliance with minimum thresholds.</p>

      <h3>11.3 Handling Data Quality Issues</h3>
      <p>Missing data is handled through exclusion of incomplete records (with documentation) or imputation using statistical methods (if appropriate and disclosed). Outliers are identified using statistical methods and removed or capped to prevent identification. Errors are corrected at source where possible, with documentation of data quality limitations.</p>

      <h3>11.4 Documentation of Limitations</h3>
      <p>Aggregated data products include documentation of data sources and collection methods, time periods, known limitations, and exclusions and filters applied.</p>

      <h2 id="d-12">12. Transparency and Disclosure</h2>
      <h3>12.1 Transparency Commitments</h3>
      <p>This Policy is publicly available on our website. Our Privacy Policy and Terms of Use clearly disclose our aggregation practices to Subscribing Organizations. The Data Processing Agreement specifies permitted aggregation activities. Subscribing Organizations are responsible for notifying their clients via MoneyMind Profile&apos;s inbuilt Privacy Policy feature.</p>

      <h3>12.2 What We Disclose</h3>
      <p>In our Privacy Policy we disclose: general description of aggregation practices, types of data aggregated, purposes for aggregated data use, categories of third-party recipients, and confirmation that aggregated data is de-identified and does not identify individuals. To Subscribing Organizations we provide description of aggregation methodologies, de-identification standards and techniques, examples of aggregated data uses, and how aggregated data benefits the Services and industry. To third-party recipients we provide contractual prohibitions on re-identification, description of permitted and prohibited uses, and technical specifications and data limitations.</p>

      <h3>12.3 Limitations of Disclosure</h3>
      <p>We do NOT disclose proprietary algorithms and methodologies (trade secrets), specific technical implementation details that could enable re-identification, details that would compromise the security of our systems, or information that would reveal individual Subscribing Organizations&apos; data or business practices.</p>

      <h3>12.4 Requests for Information</h3>
      <p>Subscribing Organizations may request additional information about how their data contributes to aggregated datasets, examples of aggregated data products, and confirmation of compliance with this Policy. End-Users should direct questions to their financial advisor, as we process their data only on behalf of Subscribing Organizations. Regulators may request information about our aggregation practices in accordance with applicable law.</p>

      <h2 id="d-13">13. Third-Party Sharing and Commercial Use</h2>
      <h3>13.1 Categories of Third-Party Recipients</h3>
      <p>We may share Aggregated Data with: research institutions (universities, think tanks, industry research firms), financial services firms (investment managers, fund managers, banking and wealth management institutions, financial technology companies), consulting and advisory firms (management consultants, strategy and analytics firms, technology consultants), media and publishers (financial news organizations, industry publications, educational authors), and government and regulatory bodies (where required by law or for policy development and research).</p>

      <h3>13.2 Licensing and Commercial Arrangements</h3>
      <p>Types of arrangements include one-time data licenses, subscription-based access to aggregated datasets, custom aggregation services, and co-development partnerships. Aggregated data may be licensed for fair market value reflecting the value of insights, not underlying Personal Data. All third-party recipients must contractually agree to: use Aggregated Data only for specified purposes, not attempt to re-identify individuals, not combine data with other sources to identify individuals, implement appropriate security measures, not redistribute without consent, acknowledge MoneyMind Profile as the source (where appropriate), and indemnify MoneyMind Profile for any unauthorized use or re-identification attempts.</p>

      <h3>13.3 Prohibited Third-Party Uses</h3>
      <p>Third parties are contractually prohibited from: re-identification (attempting to identify specific individuals or combining datasets to reverse de-identification), harmful uses (discriminating against individuals, making credit/employment/insurance decisions, surveillance), unauthorized distribution (selling or distributing without consent, publishing in forms that could enable re-identification), and competitive use (developing competing products, reverse engineering MoneyMind Profile&apos;s methodologies).</p>

      <h3>13.4 Due Diligence and Vetting</h3>
      <p>Before sharing Aggregated Data we conduct reputation review (assessment of recipient&apos;s data protection practices, review of past incidents, verification of legitimate business purpose), legal and compliance review (privacy policies, applicable data protection law compliance, adequate security measures), contractual framework (execution of data license agreement, use restrictions), and ongoing monitoring (periodic compliance reviews, investigation of suspected misuse, termination of access for violations).</p>

      <h3>13.5 Attribution and Citation</h3>
      <p>When we require attribution for publication of research findings, public presentations, or incorporation into third-party products, the format should read:</p>
      <div className="lp-callout">&ldquo;Data provided by MoneyMind Profile. Analysis and conclusions are the author&apos;s own and do not represent the views of MoneyMind Profile.&rdquo;</div>
      <p>Attribution is waived for internal business use not visible to external parties, background research and analysis, and competitive intelligence (if permitted under license).</p>

      <h2 id="d-14">14. Rights and Limitations</h2>
      <h3>14.1 Individual Rights Regarding Aggregated Data</h3>
      <div className="lp-callout"><strong>Important.</strong> Once data is properly de-identified and aggregated, it is no longer &ldquo;Personal Information&rdquo; under most privacy laws. Individuals therefore have limited rights regarding Aggregated Data.</div>
      <p><strong>Before Aggregation (Personal Information):</strong> End-Users have full rights under applicable privacy laws (GDPR, CCPA, Privacy Act 1988), including rights to access, correct, delete, restrict or object to processing, data portability, and automated decision-making rights.</p>
      <p><strong>After Aggregation (De-Identified Data):</strong> Once data is aggregated and de-identified, it is no longer attributable to specific individuals. Individual rights under privacy laws generally do not apply. Opt-out or deletion requests cannot &ldquo;un-aggregate&rdquo; data already incorporated into Aggregated Data.</p>

      <h3>14.2 Opt-Out Limitations</h3>
      <p>End-Users may request (through their Subscribing Organization) that their future data not be included in aggregation. This request will be honored going forward but cannot retroactively remove already-aggregated data. Once Personal Information has been de-identified and aggregated, it cannot be &ldquo;un-aggregated&rdquo; or removed. Deletion requests apply only to identifiable Personal Information, not Aggregated Data.</p>

      <h3>14.3 Access and Correction Rights</h3>
      <p>End-Users may request access to and correction of their Personal Information through their Subscribing Organization before aggregation. After aggregation, End-Users cannot access Aggregated Data about &ldquo;themselves&rdquo; because Aggregated Data does not identify specific individuals and reflects statistical patterns across many individuals.</p>

      <h3>14.4 Deletion Rights and Limitations</h3>
      <p>Deletion does NOT apply to Aggregated Data because it does not identify specific individuals, removing one individual&apos;s contribution would not materially change the aggregate, de-aggregation is technically infeasible, and Aggregated Data is owned by MoneyMind Profile.</p>
      <p><em>Example:</em> 1,000 End-Users contribute risk tolerance data → Aggregated data shows &ldquo;65% of users aged 45&ndash;54 have moderate risk tolerance&rdquo; → One End-User requests deletion → Their identifiable Personal Information is deleted → Aggregated statistic remains (now based on 999 users, result: &ldquo;65% of users aged 45&ndash;54&hellip;&rdquo;) → No material change to Aggregated Data → No feasible way to identify and remove that one person&apos;s contribution.</p>

      <h3>14.5 Objection and Restriction Rights</h3>
      <p>Under GDPR Article 21, individuals may object to processing based on legitimate interests. However, aggregation is conducted after de-identification when data is no longer Personal Data, and MoneyMind Profile&apos;s legitimate interest in aggregation is balanced against privacy through rigorous de-identification. Objection rights apply to Personal Information processing, not to use of already-de-identified Aggregated Data.</p>

      <h3>14.6 How to Exercise Rights</h3>
      <p><strong>For End-Users:</strong> Contact your financial advisor or the Subscribing Organization that collected your Personal Information; they are responsible for facilitating your privacy rights.</p>
      <p><strong>For Subscribing Organizations:</strong> Contact <a href="mailto:info@moneymindprofile.com">info@moneymindprofile.com</a> to request information about aggregation practices.</p>

      <h2 id="d-15">15. Compliance and Legal Framework</h2>
      <h3>15.1 Applicable Laws and Regulations</h3>
      <p>This Policy is designed to comply with data protection and privacy laws in all jurisdictions where we operate:</p>
      <p><strong>Australia:</strong> Privacy Act 1988 (Cth), Australian Privacy Principles (APPs), Notifiable Data Breaches scheme, and OAIC guidance.</p>
      <p><strong>United Kingdom:</strong> UK General Data Protection Regulation (UK GDPR), Data Protection Act 2018, ICO Anonymization Code of Practice.</p>
      <p><strong>European Union:</strong> General Data Protection Regulation (GDPR) 2016/679, Article 29 Working Party Opinion 05/2014 on Anonymisation Techniques, EDPB guidance.</p>
      <p><strong>United States:</strong> California Consumer Privacy Act (CCPA) as amended by CPRA, other state privacy laws (Virginia VCDPA, Colorado CPA, Connecticut CTDPA, Utah UCPA), FTC guidance on de-identification, and NIST Special Publication 800-188.</p>
      <p><strong>Financial Services Regulations:</strong> ASIC requirements, FCA data protection requirements (UK), and SEC and FINRA guidance on data handling (US).</p>

      <h3>15.2 De-Identification Standards</h3>
      <p>Our de-identification practices meet or exceed standards established by international standards (ISO/IEC 29100:2011, ISO/IEC 29101:2018, ISO/IEC 20889:2018), regulatory guidance (ICO Anonymisation Code of Practice, Article 29 Working Party Opinion, OAIC Guide to De-identification, NIST SP 800-188, HIPAA Safe Harbor), and academic and industry standards (k-anonymity, l-diversity, t-closeness, differential privacy, IAPP and Future of Privacy Forum best practices).</p>

      <h3>15.3 When Data is Considered &ldquo;De-Identified&rdquo;</h3>
      <p><strong>GDPR/UK GDPR (Recital 26):</strong> Data is anonymous if &ldquo;the data subject is not or no longer identifiable&rdquo; and re-identification is &ldquo;not reasonably likely to occur&rdquo; using all means reasonably likely to be used.</p>
      <p><strong>CCPA Section 1798.140(h):</strong> Data is de-identified if it cannot reasonably identify, relate to, describe, be capable of being associated with, or be linked to a particular consumer, and the business has implemented technical safeguards, business processes, and a prohibition on re-identification.</p>
      <p><strong>Privacy Act 1988 (Australia):</strong> Information is de-identified if it is no longer about an &ldquo;identifiable individual&rdquo; — i.e., an individual who is reasonably identifiable.</p>
      <p><strong>Our Standard:</strong> We apply stringent requirements across all jurisdictions to ensure global compliance.</p>

      <h3>15.4 Risk-Based Approach</h3>
      <p>We apply a risk-based approach considering risk factors (sensitivity of underlying Personal Information, availability of external data that could enable re-identification, sophistication of potential attackers, consequences of re-identification) and risk mitigation (higher-risk data receives stronger de-identification, ongoing monitoring of re-identification risks, periodic re-assessment of de-identification effectiveness).</p>

      <h3>15.5 Compliance Monitoring</h3>
      <p>Internal audits conducted annually include review of aggregation processes and data products, testing of de-identification effectiveness, verification of compliance, and assessment of new re-identification risks. Third-party audits include periodic review by privacy and data protection experts, penetration testing, and certification against relevant standards (ISO, SOC 2). We cooperate with data protection authorities (OAIC, ICO, DPAs), respond to regulatory inquiries, and implement recommendations from regulators.</p>

      <h3>15.6 Accountability and Documentation</h3>
      <p>We maintain comprehensive records of aggregation projects and methodologies, de-identification techniques applied, risk assessments and mitigation measures, third-party sharing agreements, complaints and incidents, and changes to this Policy and practices. Records are retained for at least 7 years and are available to regulators upon request.</p>

      <h2 id="d-16">16. Review and Updates</h2>
      <h3>16.1 Policy Review Schedule</h3>
      <p>This Policy is reviewed and updated annually by the Privacy Officer and Data Governance Committee in response to changes in applicable laws or regulations, regulatory guidance or enforcement actions, new re-identification techniques or risks, incidents or complaints, significant changes to aggregation practices, and introduction of new data types or uses.</p>

      <h3>16.2 Notification of Changes</h3>
      <p>For material changes (new uses of Aggregated Data, changes to de-identification standards, new third-party sharing arrangements), we will update this Policy with a revised Effective Date and notify Subscribing Organizations via email to the primary account contact (at least 30 days before effective date), in-platform notification, and notice in monthly newsletter or product updates. Subscribing Organizations are responsible for reviewing changes, updating their own privacy policies if necessary, and notifying End-Users if required by applicable law. Minor updates (clarifications, corrections, formatting) may be made without notice, provided they do not substantively change rights.</p>

      <h3>16.3 Feedback and Complaints</h3>
      <p>To provide feedback or raise concerns, email <a href="mailto:info@moneymindprofile.com">info@moneymindprofile.com</a> with the subject line &ldquo;Data Aggregation Policy Feedback.&rdquo; We commit to acknowledging receipt within 5 Business Days, investigating all complaints thoroughly, and responding substantively within 30 days.</p>
      <p>Complaint process: (1) Email us with details; (2) We confirm receipt; (3) Privacy Officer reviews; (4) Written response with findings; (5) Escalation if unsatisfied to Australia: OAIC (<a href="https://www.oaic.gov.au" target="_blank" rel="noopener">www.oaic.gov.au</a>), UK: ICO (<a href="https://ico.org.uk" target="_blank" rel="noopener">www.ico.org.uk</a>), US: State Attorney General or FTC (<a href="https://www.ftc.gov" target="_blank" rel="noopener">www.ftc.gov</a>).</p>

      <h3>16.4 Continuous Improvement</h3>
      <p>We continuously improve our aggregation and de-identification practices by tracking developments in privacy-enhancing technologies, participating in industry forums and working groups, implementing new de-identification techniques as they emerge, upgrading systems to support stronger privacy protections, and providing regular training for data scientists and analysts.</p>

      <h2 id="d-17">17. Contact Information</h2>
      <p><strong>For Questions About This Policy:</strong></p>
      <p>Attn: Privacy Officer — Data Aggregation<br />
      MoneyMind Profile Pty Ltd<br />
      Email: <a href="mailto:info@moneymindprofile.com">info@moneymindprofile.com</a></p>

      <h2 id="d-glossary">Appendix — Glossary of Key Terms</h2>
      <p>(Comprehensive definitions are provided in Section 3; this glossary offers quick reference.)</p>
      <ul>
        <li><strong>Aggregated Data</strong> — De-identified data combined from multiple sources, not identifying individuals</li>
        <li><strong>Controller / Business</strong> — Entity determining purposes and means of data processing</li>
        <li><strong>Data Subject / Consumer</strong> — Individual whose Personal Data is processed</li>
        <li><strong>De-Identified Data</strong> — Data stripped of direct identifiers and protected against re-identification</li>
        <li><strong>Direct Identifier</strong> — Data element directly identifying an individual (name, email, SSN, etc.)</li>
        <li><strong>End-User</strong> — Client of a Subscribing Organization whose data may be processed</li>
        <li><strong>Indirect Identifier / Quasi-Identifier</strong> — Data that combined with other data could identify someone (age, ZIP code, etc.)</li>
        <li><strong>k-Anonymity</strong> — Each record is indistinguishable from at least k-1 others</li>
        <li><strong>Personal Information / Personal Data</strong> — Information identifying or identifiable to an individual</li>
        <li><strong>Processor / Service Provider</strong> — Entity processing data on behalf of a Controller</li>
        <li><strong>Pseudonymization</strong> — Replacing identifiers with artificial identifiers (reversible with key)</li>
        <li><strong>Re-Identification</strong> — Matching de-identified data back to specific individuals</li>
        <li><strong>Sensitive Personal Information</strong> — Data revealing race, health, religion, sexual orientation, etc.</li>
        <li><strong>Statistical Disclosure Control</strong> — Techniques preventing disclosure about individuals in aggregated data</li>
        <li><strong>Subscribing Organization</strong> — Financial advisory firm licensing MoneyMind Profile Services</li>
      </ul>

      <p className="lp-doc-version"><strong>Document Version 1.0</strong> · Effective Date: 30 January 2026</p>
    </LegalLayout>
  );
}
