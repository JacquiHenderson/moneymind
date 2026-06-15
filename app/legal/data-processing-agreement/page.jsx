import LegalLayout from '../../../components/LegalLayout';
import Link from 'next/link';

export const metadata = {
  title: 'Data Processing Agreement — MoneyMind',
  description: 'MoneyMind Profile Data Processing Agreement — governing the processing of personal data on behalf of customers.',
  alternates: { canonical: '/legal/data-processing-agreement' },
};

export default function DataProcessingAgreementPage() {
  return (
    <LegalLayout
      title="Data Processing Agreement"
      meta="<strong>Version 1.0</strong> · Effective Date: 20 January 2026 · Applies in Australia, the United Kingdom, the European Economic Area, and the United States"
    >
      <nav className="lp-toc">
        <p className="lp-toc-title">Table of contents</p>
        <ol>
          <li><a href="#p-1">Introduction and Scope</a></li>
          <li><a href="#p-2">Definitions</a></li>
          <li><a href="#p-3">Roles and Responsibilities</a></li>
          <li><a href="#p-4">Details of Processing</a></li>
          <li><a href="#p-5">Customer Instructions</a></li>
          <li><a href="#p-6">Processor Obligations</a></li>
          <li><a href="#p-7">Sub-Processors</a></li>
          <li><a href="#p-8">Security Measures</a></li>
          <li><a href="#p-9">Data Subject Rights</a></li>
          <li><a href="#p-10">Data Breach Notification</a></li>
          <li><a href="#p-11">Data Protection Impact Assessments</a></li>
          <li><a href="#p-12">Audits and Inspections</a></li>
          <li><a href="#p-13">Deletion and Return of Data</a></li>
          <li><a href="#p-14">CCPA and US State Privacy Laws</a></li>
          <li><a href="#p-15">Australian Privacy Principles</a></li>
          <li><a href="#p-16">Liability and Indemnification</a></li>
          <li><a href="#p-17">Term and Termination</a></li>
          <li><a href="#p-18">General Provisions</a></li>
          <li><a href="#p-annex1">Annex 1 — EU Standard Contractual Clauses (2021/914)</a></li>
          <li><a href="#p-annex1a">Annex 1-A — List of Parties and Description of Transfer</a></li>
          <li><a href="#p-annex2">Annex 2 — Sub-Processors List</a></li>
          <li><a href="#p-annex3">Annex 3 — Technical and Organizational Security Measures</a></li>
        </ol>
      </nav>

      <h2 id="p-1">1. Introduction and Scope</h2>
      <h3>1.1 Purpose</h3>
      <p>This Data Processing Agreement (&ldquo;DPA&rdquo;) forms part of and is an addendum to the Master Services Agreement, Terms of Use, or other written or electronic agreement between <strong>MoneyMind Profile Pty Ltd</strong> (&ldquo;MoneyMind Profile,&rdquo; &ldquo;Processor,&rdquo; &ldquo;Service Provider,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) and the Customer (&ldquo;Customer,&rdquo; &ldquo;Controller,&rdquo; &ldquo;Business,&rdquo; &ldquo;you,&rdquo; or &ldquo;your&rdquo;) for the provision of the MoneyMind Profile software platform and related services (the &ldquo;Services&rdquo;) (the &ldquo;Agreement&rdquo;).</p>

      <h3>1.2 Application</h3>
      <p>This DPA applies when and to the extent that MoneyMind Profile Processes Personal Data on behalf of Customer in the course of providing the Services. This DPA reflects the Parties&apos; agreement with regard to the Processing of Personal Data in accordance with applicable Data Protection Laws and Regulations.</p>

      <h3>1.3 Incorporation</h3>
      <p>This DPA is incorporated into and forms an integral part of the Agreement. In the event of any conflict or inconsistency between this DPA and the Agreement regarding the Processing of Personal Data, this DPA shall prevail to the extent of such conflict or inconsistency.</p>

      <h3>1.4 Authorized Affiliates</h3>
      <p>This DPA shall also apply to any Authorized Affiliates of Customer who have executed an Order Form or are otherwise authorized to use the Services pursuant to the Agreement. Each such Authorized Affiliate shall be deemed a separate &ldquo;Customer&rdquo; for purposes of this DPA.</p>

      <h3>1.5 Pre-Signed Addendum</h3>
      <p>This DPA has been pre-signed on behalf of MoneyMind Profile. Customer may execute this DPA by: (a) signing and returning a Master Services Agreement; (b) accepting this DPA electronically through the Platform during account setup; or (c) executing the Agreement, which incorporates this DPA by reference. Upon execution or acceptance by Customer, this DPA becomes legally binding between the Parties.</p>

      <h2 id="p-2">2. Definitions</h2>
      <h3>2.1 Defined Terms</h3>
      <p>The following terms have the meanings set forth below. Capitalized terms not otherwise defined in this DPA have the meanings given to them in the Agreement.</p>
      <ul>
        <li><strong>&ldquo;Agreement&rdquo;</strong> — the Master Services Agreement, Terms of Use, or other written or electronic agreement between MoneyMind Profile and Customer for the provision of Services.</li>
        <li><strong>&ldquo;Authorized Affiliate&rdquo;</strong> — any Affiliate of Customer which: (a) is subject to Data Protection Laws and Regulations; (b) is permitted to use the Services pursuant to the Agreement; and (c) has executed an Order Form or been authorized by Customer to access the Services.</li>
        <li><strong>&ldquo;Business&rdquo;</strong> — has the meaning given in the CCPA and means Customer in its capacity as an entity that determines the purposes and means of the Processing of Personal Information.</li>
        <li><strong>&ldquo;CCPA&rdquo;</strong> — the California Consumer Privacy Act of 2018, as amended by the California Privacy Rights Act of 2020 (Proposition 24), Cal. Civ. Code § 1798.100 et seq., and any implementing regulations.</li>
        <li><strong>&ldquo;Controller&rdquo;</strong> — the entity which, alone or jointly with others, determines the purposes and means of the Processing of Personal Data. For the purposes of this DPA, Customer is the Controller.</li>
        <li><strong>&ldquo;Data Protection Laws and Regulations&rdquo;</strong> — all applicable laws, regulations, and other legal requirements relating to privacy, data protection, and data security, including: (a) The EU General Data Protection Regulation 2016/679 (&ldquo;GDPR&rdquo;); (b) The UK GDPR and the Data Protection Act 2018 (UK); (c) The Australian Privacy Act 1988 (Cth) and the Australian Privacy Principles (&ldquo;APPs&rdquo;); (d) The CCPA and other US state privacy laws (Virginia VCDPA, Colorado CPA, Connecticut CTDPA, Utah UCPA); (e) Any other applicable national, federal, state, provincial or other data protection laws, regulations, and guidance.</li>
        <li><strong>&ldquo;Data Subject&rdquo;</strong> — an identified or identifiable natural person to whom Personal Data relates.</li>
        <li><strong>&ldquo;Data Subject Request&rdquo;</strong> — a request by a Data Subject to exercise their rights under applicable Data Protection Laws and Regulations, including rights of access, rectification, erasure, restriction, portability, objection, or rights related to automated decision-making.</li>
        <li><strong>&ldquo;EEA&rdquo;</strong> — the European Economic Area.</li>
        <li><strong>&ldquo;End Client&rdquo;</strong> — a natural person who receives financial advice or wealth management services from Customer (or Customer&apos;s Authorized Users) and whose Personal Data is Processed through the Services.</li>
        <li><strong>&ldquo;EU Standard Contractual Clauses&rdquo;</strong> or <strong>&ldquo;SCCs&rdquo;</strong> — the standard contractual clauses for the transfer of personal data to third countries approved by European Commission Implementing Decision (EU) 2021/914 of 4 June 2021, as may be amended or replaced from time to time.</li>
        <li><strong>&ldquo;Personal Data&rdquo;</strong> or <strong>&ldquo;Personal Information&rdquo;</strong> — any information relating to an identified or identifiable natural person, as defined under applicable Data Protection Laws and Regulations, that is Processed by MoneyMind Profile on behalf of Customer in the course of providing the Services. Personal Data includes End Client Personal Data and Authorized User Personal Data.</li>
        <li><strong>&ldquo;Processing&rdquo;</strong> or <strong>&ldquo;Process&rdquo;</strong> — any operation or set of operations performed on Personal Data or sets of Personal Data, whether or not by automated means, such as collection, recording, organization, structuring, storage, adaptation or alteration, retrieval, consultation, use, disclosure by transmission, dissemination or otherwise making available, alignment or combination, restriction, erasure, or destruction.</li>
        <li><strong>&ldquo;Processor&rdquo;</strong> or <strong>&ldquo;Service Provider&rdquo;</strong> — an entity which Processes Personal Data on behalf of the Controller. For the purposes of this DPA, MoneyMind Profile is the Processor.</li>
        <li><strong>&ldquo;Security Incident&rdquo;</strong> — any confirmed accidental or unlawful destruction, loss, alteration, unauthorized disclosure of, or access to, Personal Data transmitted, stored, or otherwise Processed by MoneyMind Profile in connection with the provision of the Services. Security Incidents exclude unsuccessful attempts that do not compromise the security of Personal Data.</li>
        <li><strong>&ldquo;Sensitive Personal Data&rdquo;</strong> — Personal Data revealing racial or ethnic origin, political opinions, religious or philosophical beliefs, trade union membership, genetic data, biometric data, health data, or data concerning a natural person&apos;s sex life or sexual orientation. Under some Data Protection Laws (e.g., CCPA), Sensitive Personal Information also includes Social Security numbers, financial account information, precise geolocation, and content of communications.</li>
        <li><strong>&ldquo;Sub-Processor&rdquo;</strong> — any Processor engaged by MoneyMind Profile to Process Personal Data on behalf of Customer in connection with the Services.</li>
        <li><strong>&ldquo;UK GDPR&rdquo;</strong> — the GDPR as it forms part of the law of England and Wales, Scotland and Northern Ireland by virtue of section 3 of the European Union (Withdrawal) Act 2018, as amended.</li>
      </ul>

      <h3>2.2 Interpretation</h3>
      <p>Unless the context otherwise requires: defined terms in the singular include the plural and vice versa; references to sections, annexes, and schedules are to sections of and annexes and schedules to this DPA; &ldquo;Including&rdquo; and similar terms mean &ldquo;including without limitation&rdquo;; headings are for convenience only and do not affect interpretation.</p>

      <h2 id="p-3">3. Roles and Responsibilities</h2>
      <h3>3.1 Controller-Processor Relationship</h3>
      <p>The Parties acknowledge and agree that: (a) Customer is the Controller (or Business under CCPA) which determines the purposes and means of Processing Personal Data; (b) MoneyMind Profile is the Processor (or Service Provider under CCPA) which Processes Personal Data on behalf of and upon the instructions of Customer; and (c) this DPA establishes the respective obligations of the Controller and the Processor.</p>

      <h3>3.2 Customer as Controller</h3>
      <p>Customer, as Controller, shall: ensure that Customer&apos;s instructions comply with all applicable Data Protection Laws and Regulations; obtain and maintain all necessary consents, authorizations, and legal bases for the collection and Processing of Personal Data; ensure the accuracy, quality, and legality of Personal Data; remain solely responsible for responding to Data Subject Requests and handling complaints; implement and maintain appropriate technical and organizational measures to secure Personal Data; and not Process Sensitive Personal Data through the Services unless Customer has obtained appropriate consents under applicable law.</p>

      <h3>3.3 MoneyMind Profile as Processor</h3>
      <p>MoneyMind Profile, as Processor, shall: Process Personal Data only in accordance with Customer&apos;s documented instructions; ensure that persons authorized to Process Personal Data have committed themselves to confidentiality; implement and maintain appropriate technical and organizational measures as described in Section 8 and Annex 3; respect the conditions for engaging Sub-Processors as described in Section 7; assist Customer in responding to Data Subject Requests as described in Section 9; assist Customer in ensuring compliance with security, breach notification, impact assessment, and prior consultation obligations; at Customer&apos;s election, delete or return all Personal Data after the end of the provision of Services; make available all information reasonably necessary to demonstrate compliance with this DPA; and immediately inform Customer if an instruction from Customer infringes applicable Data Protection Laws and Regulations.</p>

      <h2 id="p-4">4. Details of Processing</h2>
      <h3>4.1 Subject Matter and Duration</h3>
      <p><strong>Subject Matter:</strong> Provision of the MoneyMind Profile software-as-a-service platform and related services to enable Customer to conduct financial advisory services, including client behavior profiling, risk tolerance assessment, and client relationship management.</p>
      <p><strong>Duration:</strong> Processing will continue for the Term of the Agreement plus any period reasonably necessary to delete or return Personal Data in accordance with Section 13.</p>

      <h3>4.2 Nature and Purpose of Processing</h3>
      <p>MoneyMind Profile will Process Personal Data by hosting, storing, managing, and enabling Customer and Authorized Users to access, input, modify, analyze, import, and export Personal Data through the Services — to enable Customer to conduct behavior profiling and risk tolerance assessments of End Clients, manage client relationships through CRM functionality, and comply with regulatory and professional record-keeping obligations.</p>

      <h3>4.3 Types of Personal Data</h3>
      <p><strong>End Client Personal Data:</strong> identity information (names, dates of birth, contact details), financial information (income, assets, liabilities, net worth, investment portfolio asset allocation), behavioral data (risk tolerance responses, financial goals, investment preferences), professional and demographic information (employment, occupation, family status, life stage), advisor and client reports (behavioral and risk profile analysis), and communication records (emails, notes, meeting summaries).</p>
      <p><strong>Authorized User Personal Data:</strong> identity information (names, contact details), professional information (job title, credentials, licenses), account and authentication information (usernames, login activity), and usage data (features accessed, documents created, activity logs).</p>
      <p><strong>Sensitive Personal Data (if authorized by Customer):</strong> information revealing racial or ethnic origin, religious beliefs, or other special categories (only if provided by Customer).</p>

      <h3>4.4 Categories of Data Subjects</h3>
      <ul>
        <li>End Clients (individuals receiving financial advice from Customer)</li>
        <li>Authorized Users (Customer&apos;s employees, contractors, and authorized representatives)</li>
        <li>Prospective clients (individuals in Customer&apos;s CRM)</li>
      </ul>

      <h2 id="p-5">5. Customer Instructions</h2>
      <h3>5.1 Scope of Instructions</h3>
      <p>Customer instructs MoneyMind Profile to Process Personal Data: to provide the Services in accordance with the Agreement (including hosting, storing, enabling access, generating outputs, providing support, performing backups, maintaining security and integrity); as necessary to comply with applicable laws and regulations; to create Aggregated Data in accordance with the <Link href="/legal/data-aggregation">Data Aggregation and De-Identification Policy</Link> and the terms set forth in Section 9 of the Agreement; and as otherwise documented in writing by Customer through Order Forms, support tickets, or other written communications.</p>

      <h3>5.2 Compliance with Instructions</h3>
      <p>MoneyMind Profile shall Process Personal Data only in accordance with Customer&apos;s documented instructions unless Processing is required by EU or Member State law, UK law, Australian law, US federal or state law, or other applicable law (in which case MoneyMind Profile shall inform Customer before Processing unless prohibited by law); or Processing is necessary to provide the Services requested by Customer (e.g., routine system maintenance, backup processes).</p>

      <h3>5.3 Objection to Instructions</h3>
      <p>If MoneyMind Profile becomes aware that Customer&apos;s instructions infringe applicable Data Protection Laws and Regulations, MoneyMind Profile shall immediately inform Customer in writing of the suspected infringement and suspend Processing of Personal Data in accordance with the suspected unlawful instruction until Customer confirms the instruction has been modified or withdrawn, or provides legal justification for the instruction. MoneyMind Profile shall not be liable for any failure to comply with instructions that MoneyMind Profile reasonably believes to be unlawful.</p>

      <h3>5.4 Additional Instructions</h3>
      <p>Customer may issue additional written instructions regarding the Processing of Personal Data, provided that such instructions are consistent with the terms of this DPA and the Agreement, MoneyMind Profile has agreed in writing to the additional instructions, and Customer pays any additional fees agreed upon for Processing pursuant to such instructions.</p>

      <h2 id="p-6">6. Processor Obligations</h2>
      <h3>6.1 Confidentiality</h3>
      <p>MoneyMind Profile shall ensure that any person authorized to Process Personal Data is subject to a contractual or statutory obligation of confidentiality, has received appropriate training on data protection and privacy obligations, and Processes Personal Data only as necessary to perform their duties in connection with providing the Services.</p>

      <h3>6.2 Security Measures</h3>
      <p>MoneyMind Profile shall implement and maintain appropriate technical and organizational measures to ensure a level of security appropriate to the risk of Processing Personal Data, as further described in Section 8 and Annex 3.</p>

      <h3>6.3 Sub-Processing</h3>
      <p>MoneyMind Profile shall engage Sub-Processors only in accordance with Section 7 of this DPA.</p>

      <h3>6.4 Assistance with Data Subject Rights</h3>
      <p>MoneyMind Profile shall provide reasonable assistance to Customer in fulfilling Customer&apos;s obligation to respond to Data Subject Requests, as described in Section 9.</p>

      <h3>6.5 Assistance with Security and Compliance</h3>
      <p>MoneyMind Profile shall assist Customer in ensuring compliance with security obligations under Data Protection Laws and Regulations, with data breach notifications (Section 10), and with data protection impact assessments and prior consultations with supervisory authorities (Section 11).</p>

      <h3>6.6 Deletion or Return of Personal Data</h3>
      <p>At the end of the provision of Services, MoneyMind Profile shall delete or return Personal Data in accordance with Section 13.</p>

      <h3>6.7 Audit and Information Provision</h3>
      <p>MoneyMind Profile shall make available to Customer all information reasonably necessary to demonstrate compliance with this DPA, and allow for and contribute to audits and inspections as described in Section 12.</p>

      <h3>6.8 Record of Processing Activities</h3>
      <p>MoneyMind Profile shall maintain written records of all categories of Processing activities carried out on behalf of Customer, in accordance with Article 30(2) of the GDPR and equivalent provisions in other Data Protection Laws and Regulations.</p>

      <h3>6.9 Data Protection Officer</h3>
      <p>MoneyMind Profile has designated a Data Protection Officer (&ldquo;DPO&rdquo;) who may be contacted at <a href="mailto:dpo@moneymindprofile.com">dpo@moneymindprofile.com</a> for matters related to the Processing of Personal Data under this DPA.</p>

      <h2 id="p-7">7. Sub-Processors</h2>
      <h3>7.1 Authorization to Use Sub-Processors</h3>
      <p>Customer provides general authorization for MoneyMind Profile to engage Sub-Processors to Process Personal Data on Customer&apos;s behalf, subject to the conditions in this Section 7.</p>

      <h3>7.2 Current Sub-Processors</h3>
      <p>A current list of Sub-Processors engaged by MoneyMind Profile is published and maintained at <Link href="/legal/subprocessors">moneymindprofile.com/legal/subprocessors</Link>. As of the Effective Date of this DPA, MoneyMind Profile&apos;s Sub-Processors include:</p>
      <ul>
        <li>Amazon Web Services, Inc.</li>
        <li>GitHub</li>
        <li>Supabase</li>
        <li>Vercel</li>
      </ul>

      <h3>7.3 New Sub-Processors</h3>
      <p>MoneyMind Profile shall provide Customer with at least thirty (30) days&apos; prior written notice before authorizing any new Sub-Processor or replacing an existing Sub-Processor, via email to Customer&apos;s primary contact and update to the Sub-Processor list. Customer may object on reasonable data protection grounds within fourteen (14) days. If MoneyMind Profile is unable to make available a change within a reasonable period (not to exceed ninety (90) days), Customer may terminate the affected Services and receive a pro-rata refund of prepaid Fees.</p>

      <h3>7.4 Sub-Processor Obligations</h3>
      <p>MoneyMind Profile shall enter into an agreement with each Sub-Processor imposing data protection obligations no less protective than those imposed on MoneyMind Profile under this DPA, including Processing only on documented instructions, confidentiality obligations, appropriate security measures, assistance with Data Subject Requests and security obligations, deletion or return of Personal Data, and audit rights. MoneyMind Profile shall remain fully liable to Customer for the performance of each Sub-Processor&apos;s obligations.</p>

      <h3>7.5 Sub-Processor Access to Contracts</h3>
      <p>Upon Customer&apos;s request, MoneyMind Profile shall provide Customer with a copy of the Sub-Processor agreement (redacted to remove confidential commercial information not relevant to data protection obligations) or a summary thereof.</p>

      <h2 id="p-8">8. Security Measures</h2>
      <h3>8.1 Security Obligations</h3>
      <p>MoneyMind Profile shall implement and maintain appropriate technical and organizational measures to protect Personal Data against Security Incidents and to ensure a level of security appropriate to the risk of Processing, taking into account the state of the art, the costs of implementation, the nature, scope, context, and purposes of Processing, and the risks to the rights and freedoms of Data Subjects.</p>

      <h3>8.2 Technical and Organizational Measures</h3>
      <p><strong>(a) Encryption:</strong> Data in transit encrypted using TLS 1.2 or higher; data at rest encrypted using AES-256 or equivalent; database encryption and encrypted backups.</p>
      <p><strong>(b) Access Controls:</strong> Multi-factor authentication (MFA) for all administrative access; role-based access control (RBAC) limiting access based on job function; principle of least privilege; regular access reviews and revocations.</p>
      <p><strong>(c) Network Security:</strong> Firewalls and intrusion detection/prevention systems; network segmentation and isolation; DDoS protection and mitigation; regular vulnerability scanning and penetration testing.</p>
      <p><strong>(d) Application Security:</strong> Secure software development lifecycle (SDLC); code reviews and security testing; input validation and output encoding; protection against OWASP Top 10 vulnerabilities.</p>
      <p><strong>(e) Personnel Security:</strong> Background checks for employees with access to Personal Data; confidentiality agreements for all personnel; regular security awareness training; separation of duties.</p>
      <p><strong>(f) Physical Security:</strong> Secure data centers with access controls (via third-party hosting providers); 24/7 monitoring and surveillance; environmental controls (power, cooling, fire suppression).</p>
      <p><strong>(g) Monitoring and Incident Response:</strong> Security information and event management (SIEM); 24/7 security monitoring; incident response plan and procedures; regular security drills and tabletop exercises.</p>

      <h3>8.3 Security Certifications and Audits</h3>
      <p>MoneyMind Profile maintains or is working toward SOC 2 Type II (in progress) and ISO/IEC 27001:2013 (planned) certifications. Upon Customer&apos;s reasonable request (not more than annually), MoneyMind Profile will provide a summary of security measures and controls, copies of current security certifications, and summary of penetration test results (redacted for security).</p>

      <h3>8.4 Updates to Security Measures</h3>
      <p>MoneyMind Profile may update or modify its security measures from time to time, provided that such updates and modifications do not result in the degradation of the overall security of the Services.</p>

      <h3>8.5 Customer Security Responsibilities</h3>
      <p>Customer is responsible for implementing strong password policies and enforcing MFA; managing Authorized User accounts and access permissions; promptly revoking access for terminated users; reporting suspected security incidents to <a href="mailto:support@moneymindprofile.com">support@moneymindprofile.com</a>; maintaining security of Customer&apos;s own systems and networks; and regularly backing up and exporting Personal Data.</p>

      <h2 id="p-9">9. Data Subject Rights</h2>
      <h3>9.1 Assistance Obligation</h3>
      <p>Taking into account the nature of the Processing, MoneyMind Profile shall provide reasonable assistance to Customer to enable Customer to respond to Data Subject Requests, including requests for access, rectification, erasure (&ldquo;right to be forgotten&rdquo;), restriction of Processing, data portability, objection to Processing, and rights related to automated decision-making and profiling.</p>

      <h3>9.2 Data Subject Request Procedures</h3>
      <p>If MoneyMind Profile receives a Data Subject Request directly from a Data Subject, MoneyMind Profile shall promptly forward the request to Customer (within 2 Business Days) and not respond to the Data Subject directly without Customer&apos;s prior written authorization. If Customer requests MoneyMind Profile&apos;s assistance, MoneyMind Profile shall provide the requested assistance within ten (10) Business Days and provide access to relevant Personal Data through the Platform&apos;s export functionality or other means.</p>
      <p>MoneyMind Profile&apos;s assistance is included in the Fees for the Services, except that MoneyMind Profile may charge reasonable fees for assistance with Data Subject Requests that are manifestly unfounded or excessive, or require significant custom development or engineering effort.</p>

      <h3>9.3 Limitations</h3>
      <p>MoneyMind Profile is not required to assist with Data Subject Requests to the extent that Customer has the ability to address the request through use of the Platform&apos;s functionality, the request relates to Personal Data for which Customer (not MoneyMind Profile) is responsible, or complying with the request would violate applicable law or legal obligations to which MoneyMind Profile is subject.</p>

      <h3>9.4 Automated Decision-Making</h3>
      <p>Customer acknowledges that the Services provide tools and analytics to assist Customer in making decisions, but the Services do not make automated decisions that produce legal effects or similarly significantly affect Data Subjects. Customer remains responsible for all decisions made regarding End Clients.</p>

      <h2 id="p-10">10. Data Breach Notification</h2>
      <h3>10.1 Notification to Customer</h3>
      <p>MoneyMind Profile shall notify Customer without undue delay after becoming aware of a Security Incident: within seventy-two (72) hours for UK/EU/EEA customers (to meet GDPR requirements); within seventy-two (72) hours for Australian customers (to meet Privacy Act requirements); and within the timeframes required by applicable US state law (24&ndash;72 hours) for US customers.</p>

      <h3>10.2 Notification Content</h3>
      <p>The notification shall include, to the extent available: description of the nature of the Security Incident including categories and approximate number of affected Data Subjects and Personal Data records; name and contact details of MoneyMind Profile&apos;s DPO or other contact point; description of the likely consequences of the Security Incident; description of measures taken or proposed to address the Security Incident; and timeline of events and discovery of the incident.</p>

      <h3>10.3 Notification Method</h3>
      <p>Notification will be delivered via email to primary contact email address on file, in-Platform alert (if accessible), and phone call to primary contact (for critical incidents).</p>

      <h3>10.4 Investigation and Remediation</h3>
      <p>MoneyMind Profile shall promptly investigate the Security Incident, take reasonable steps to contain and remediate it, cooperate with Customer in investigating it, provide timely updates (at least weekly for ongoing incidents), and implement measures to prevent similar Security Incidents in the future.</p>

      <h3>10.5 Customer Obligations</h3>
      <p>Customer is responsible for determining whether the Security Incident requires notification to Data Subjects, supervisory authorities, or other parties under applicable Data Protection Laws and Regulations. MoneyMind Profile&apos;s notification to Customer does not constitute an acknowledgment of fault or liability. MoneyMind Profile will not notify Data Subjects, supervisory authorities, or third parties on Customer&apos;s behalf without Customer&apos;s prior written consent (except where required by law).</p>

      <h3>10.6 Exclusions</h3>
      <p>The notification obligations do not apply to incidents that do not result in accidental or unlawful destruction, loss, alteration, unauthorized disclosure of, or access to Personal Data; are caused solely by Customer or Authorized Users; or consist of unsuccessful attempts that do not compromise Personal Data.</p>

      <h2 id="p-11">11. Data Protection Impact Assessments</h2>
      <h3>11.1 Assistance with DPIAs</h3>
      <p>MoneyMind Profile shall provide reasonable assistance to Customer if Customer is required to conduct a Data Protection Impact Assessment (&ldquo;DPIA&rdquo;) under Article 35 of the GDPR or equivalent provisions in other Data Protection Laws and Regulations.</p>

      <h3>11.2 Information Provision</h3>
      <p>Upon Customer&apos;s reasonable request, MoneyMind Profile shall provide description of the Processing operations, information about security measures implemented (see Annex 3), information about Sub-Processors, information about data retention and deletion practices, and other information reasonably necessary for Customer to complete the DPIA.</p>

      <h3>11.3 Prior Consultation</h3>
      <p>If Customer is required to consult with a supervisory authority following a DPIA, MoneyMind Profile shall provide reasonable assistance and cooperation, including providing additional information or clarification as requested by the supervisory authority through Customer.</p>

      <h3>11.4 Limitation</h3>
      <p>MoneyMind Profile&apos;s assistance does not include conducting the DPIA on Customer&apos;s behalf (this is Customer&apos;s responsibility as Controller), making decisions about whether a DPIA is required, or providing legal or compliance advice regarding the DPIA.</p>

      <h2 id="p-12">12. Audits and Inspections</h2>
      <h3>12.1 Customer&apos;s Audit Rights</h3>
      <p>Customer (or Customer&apos;s independent third-party auditor) may, upon reasonable advance written notice to MoneyMind Profile and subject to the conditions in this Section 12, audit MoneyMind Profile&apos;s compliance with its obligations under this DPA.</p>

      <h3>12.2 Audit Frequency and Scope</h3>
      <p>Customer may conduct audits no more than once per twelve (12) month period (except if required by a supervisory authority, in response to a Security Incident, or if Customer has reasonable grounds to believe MoneyMind Profile is not complying with this DPA). Customer shall provide at least thirty (30) days&apos; advance written notice specifying the proposed scope, duration, date(s), and identity of any third-party auditors.</p>

      <h3>12.3 Third-Party Auditors</h3>
      <p>If Customer engages a third-party auditor, the auditor must be independent, reputable, and bound by confidentiality obligations no less protective than those in the Agreement; must be approved by MoneyMind Profile (such approval not to be unreasonably withheld); and may not be a competitor of MoneyMind Profile.</p>

      <h3>12.4 Audit Procedures</h3>
      <p>Audits shall be conducted during normal business hours (9:00 AM &ndash; 5:00 PM local time, Monday&ndash;Friday, excluding public holidays), at MoneyMind Profile&apos;s facilities or remotely via secure connection at MoneyMind Profile&apos;s discretion, in a manner that does not unreasonably disrupt MoneyMind Profile&apos;s operations or those of other customers, and subject to MoneyMind Profile&apos;s reasonable security policies and procedures.</p>

      <h3>12.5 Alternative to Audit</h3>
      <p>In lieu of an on-site audit, MoneyMind Profile may provide copies of relevant security certifications (SOC 2 Type II, ISO 27001) obtained within the preceding twelve (12) months, summary reports of internal or third-party audits, completed third-party audit questionnaires (e.g., SIG, CAIQ), or other information sufficient to verify compliance with this DPA. If Customer accepts such alternative verification, no on-site audit is required.</p>

      <h3>12.6 Audit Reports</h3>
      <p>Customer shall provide MoneyMind Profile with a draft audit report and allow MoneyMind Profile at least ten (10) Business Days to comment on the accuracy of factual findings before finalizing the report. Audit reports are Confidential Information of MoneyMind Profile. If an audit identifies non-compliance, MoneyMind Profile shall acknowledge the findings within ten (10) Business Days, prepare a remediation plan within thirty (30) days, and implement corrective measures within a reasonable timeframe agreed with Customer.</p>

      <h3>12.7 Costs</h3>
      <p>Each Party shall bear its own costs related to audits.</p>

      <h2 id="p-13">13. Deletion and Return of Data</h2>
      <h3>13.1 Deletion or Return</h3>
      <p>Upon termination or expiration of the Agreement, or upon Customer&apos;s written request, MoneyMind Profile shall, at Customer&apos;s election, either delete all Personal Data in accordance with Section 13.2, or return all Personal Data to Customer in a commercially reasonable format in accordance with Section 13.3.</p>

      <h3>13.2 Deletion</h3>
      <p>MoneyMind Profile shall delete Personal Data within thirty (30) days after termination or expiration of the Agreement, or promptly upon Customer&apos;s written request during the Agreement, to the extent feasible while continuing to provide the Services. Deletion shall be carried out using secure deletion methods that render Personal Data unrecoverable, including overwriting or cryptographic erasure of primary storage and deletion from backups in accordance with MoneyMind Profile&apos;s standard backup retention schedule (backups are retained for up to ninety (90) days, after which they are securely deleted). Upon Customer&apos;s request, MoneyMind Profile shall provide written certification that Personal Data has been deleted.</p>

      <h3>13.3 Return</h3>
      <p>If Customer elects return of Personal Data, MoneyMind Profile shall return the data in a structured, commonly used, machine-readable format (e.g., CSV, JSON, XML) or via the Platform&apos;s standard export functionality, via secure electronic transfer or other secure method agreed upon by the Parties. Return shall be completed within thirty (30) days of Customer&apos;s request. After returning Personal Data to Customer, MoneyMind Profile shall delete all copies of Personal Data in accordance with Section 13.2(b).</p>

      <h3>13.4 Exceptions</h3>
      <p>MoneyMind Profile may retain Personal Data to the extent required by applicable law, provided that MoneyMind Profile shall inform Customer of any legal requirement to retain Personal Data; retained Personal Data shall be subject to confidentiality obligations and shall not be Processed for any purpose other than compliance with the legal requirement; and MoneyMind Profile shall delete the retained Personal Data as soon as the legal requirement expires.</p>

      <h3>13.5 Aggregated Data</h3>
      <p>The deletion and return obligations in this Section 13 do not apply to Aggregated Data (as defined in the Agreement and <Link href="/legal/data-aggregation">Data Aggregation and De-Identification Policy</Link>) that has been properly de-identified and anonymized such that it no longer constitutes Personal Data under applicable Data Protection Laws and Regulations.</p>

      <h2 id="p-14">14. CCPA and US State Privacy Laws</h2>
      <h3>14.1 Application</h3>
      <p>This Section 14 applies to the extent that MoneyMind Profile Processes Personal Information (as defined in the CCPA) on behalf of Customer, and Customer is subject to the CCPA or other US state privacy laws (Virginia VCDPA, Colorado CPA, Connecticut CTDPA, Utah UCPA, etc.).</p>

      <h3>14.2 Service Provider Status</h3>
      <p>The Parties acknowledge and agree that Customer is a Business (as defined in the CCPA) that determines the purposes and means of Processing Personal Information; MoneyMind Profile is a Service Provider (as defined in the CCPA) that Processes Personal Information on behalf of Customer; and Personal Information is disclosed by Customer to MoneyMind Profile solely for the Business Purpose of providing the Services as described in the Agreement.</p>

      <h3>14.3 Service Provider Obligations</h3>
      <p>MoneyMind Profile certifies that it understands the restrictions in CCPA Section 1798.140(v) and agrees that it shall not sell or share (as those terms are defined in the CCPA) Personal Information received from Customer or collected on Customer&apos;s behalf; shall not retain, use, or disclose Personal Information for any purpose other than for the specific Business Purpose of performing the Services specified in the Agreement or as permitted by the CCPA for Service Providers; and shall not combine Personal Information received from Customer with Personal Information received from or on behalf of another person or persons, or collected from MoneyMind Profile&apos;s own interactions with consumers, except as permitted by the CCPA.</p>

      <h3>14.4 Consumer Rights Assistance</h3>
      <p>MoneyMind Profile shall provide reasonable assistance to Customer in responding to verified consumer requests under the CCPA, including requests to know what Personal Information is being collected, delete Personal Information, correct inaccurate Personal Information, opt-out of sale or sharing (not applicable as MoneyMind Profile does not sell or share), and limit use of Sensitive Personal Information (to the extent applicable).</p>

      <h3>14.5 Sensitive Personal Information</h3>
      <p>To the extent MoneyMind Profile Processes Sensitive Personal Information (as defined under CCPA and other US state laws), MoneyMind Profile shall use and disclose such Sensitive Personal Information only to perform the Services, as necessary for security and integrity purposes, for short-term, transient use, and as permitted under CCPA Section 1798.121(a) and equivalent provisions in other US state laws.</p>

      <h3>14.6 Other US State Privacy Laws</h3>
      <p>The obligations in this Section 14 apply mutatis mutandis to Customer&apos;s and MoneyMind Profile&apos;s respective obligations under Virginia VCDPA, Colorado CPA, Connecticut CTDPA, Utah UCPA, and other substantially similar US state privacy laws.</p>

      <h2 id="p-15">15. Australian Privacy Principles</h2>
      <h3>15.1 Application</h3>
      <p>This Section 15 applies to the extent that MoneyMind Profile Processes Personal Information (as defined under the Australian Privacy Act 1988) on behalf of Customer, and Customer is subject to the Privacy Act and Australian Privacy Principles (APPs).</p>

      <h3>15.2 Compliance with APPs</h3>
      <p>MoneyMind Profile agrees to comply with the APPs to the extent applicable to MoneyMind Profile as a Processor, including APP 1 (Open and Transparent Management — maintaining this DPA and making information about privacy practices available), APP 8 (Cross-border Disclosure — taking reasonable steps to ensure overseas recipients do not breach the APPs), and APP 11 (Security — taking reasonable steps to protect Personal Information from misuse, interference, loss, unauthorized access, modification, or disclosure).</p>

      <h3>15.3 Notifiable Data Breaches</h3>
      <p>In the event of an Eligible Data Breach (as defined under Part IIIC of the Privacy Act 1988), MoneyMind Profile shall notify Customer as soon as practicable and in any event within seventy-two (72) hours; provide Customer with sufficient information to enable Customer to assess whether notification to the OAIC and affected individuals is required; and cooperate with Customer in Customer&apos;s assessment and notification obligations.</p>

      <h3>15.4 OAIC Complaints</h3>
      <p>If a complaint is made to the OAIC regarding MoneyMind Profile&apos;s handling of Personal Information, MoneyMind Profile shall notify Customer promptly, cooperate with Customer and the OAIC in investigating the complaint, and provide information and assistance as reasonably requested.</p>

      <h3>15.5 Australian Data Hosting</h3>
      <p>Upon Customer&apos;s request, MoneyMind Profile may offer the option to host Customer&apos;s Personal Data exclusively in Australian data centers (AWS ap-southeast-2 region), subject to availability of the feature, additional fees as specified in an Order Form, and execution of an addendum specifying data residency requirements.</p>

      <h2 id="p-16">16. Liability and Indemnification</h2>
      <h3>16.1 Liability</h3>
      <p>Each Party&apos;s liability under this DPA is subject to the limitation of liability provisions in the Agreement. Notwithstanding the limitation of liability, neither Party limits or excludes its liability for gross negligence or willful misconduct in the Processing of Personal Data; breach of confidentiality obligations regarding Personal Data; fraud or fraudulent misrepresentation; or liabilities that cannot be limited or excluded under applicable Data Protection Laws and Regulations.</p>

      <h3>16.2 Indemnification by Customer</h3>
      <p>Customer shall indemnify, defend, and hold harmless MoneyMind Profile from and against any claims, losses, liabilities, damages, costs, and expenses (including reasonable attorneys&apos; fees) arising from or relating to Customer&apos;s violation of applicable Data Protection Laws and Regulations; Customer&apos;s failure to obtain necessary consents or provide required notices to Data Subjects; Customer&apos;s Processing of Personal Data in violation of this DPA or applicable law; and inaccurate, unlawful, or fraudulent information provided by Customer or Authorized Users.</p>

      <h3>16.3 Indemnification by MoneyMind Profile</h3>
      <p>MoneyMind Profile shall indemnify, defend, and hold harmless Customer from and against any claims, losses, liabilities, damages, costs, and expenses (including reasonable attorneys&apos; fees) arising from or relating to MoneyMind Profile&apos;s material breach of its obligations under this DPA; MoneyMind Profile&apos;s gross negligence or willful misconduct in the Processing of Personal Data; and MoneyMind Profile&apos;s violation of applicable Data Protection Laws and Regulations in the performance of its obligations as Processor (excluding violations caused by Customer&apos;s instructions).</p>

      <h3>16.4 Allocation of Responsibility</h3>
      <p>Customer (as Controller) is solely responsible for: determining the lawfulness of Processing; obtaining consents and providing notices to Data Subjects; determining retention periods; responding to Data Subject Requests (except to the extent MoneyMind Profile must assist); notifying supervisory authorities and Data Subjects of data breaches; conducting Data Protection Impact Assessments; and ensuring accuracy and lawfulness of Personal Data provided to MoneyMind Profile.</p>
      <p>MoneyMind Profile (as Processor) is solely responsible for: Processing Personal Data only on instructions; implementing appropriate security measures; engaging Sub-Processors in accordance with this DPA; assisting Customer with Data Subject Requests, security obligations, and DPIAs; notifying Customer of Security Incidents; and deleting or returning Personal Data.</p>

      <h2 id="p-17">17. Term and Termination</h2>
      <h3>17.1 Term</h3>
      <p>This DPA shall become effective on the Effective Date and shall remain in effect for so long as MoneyMind Profile Processes Personal Data on behalf of Customer, including during the term of the Agreement and for such additional period as is necessary for MoneyMind Profile to delete or return Personal Data in accordance with Section 13.</p>

      <h3>17.2 Termination</h3>
      <p>This DPA shall automatically terminate upon the earlier of: termination or expiration of the Agreement, or completion of MoneyMind Profile&apos;s deletion or return of all Personal Data in accordance with Section 13.</p>

      <h3>17.3 Survival</h3>
      <p>The following provisions shall survive termination of this DPA: Section 8 (Security Measures) with respect to any Personal Data retained pursuant to Section 13.4; Section 10 (Data Breach Notification) with respect to any Security Incidents occurring before termination; Section 13 (Deletion and Return of Data); Section 16 (Liability and Indemnification); and Section 18 (General Provisions).</p>

      <h2 id="p-18">18. General Provisions</h2>
      <h3>18.1 Governing Law and Jurisdiction</h3>
      <p>This DPA shall be governed by and construed in accordance with the laws specified in the Agreement for Customer&apos;s jurisdiction: New South Wales, Australia (for Australian customers); England and Wales (for UK customers); or State of New York, United States (for US customers). Disputes arising from this DPA shall be resolved in accordance with the dispute resolution provisions in the Agreement.</p>

      <h3>18.2 Order of Precedence</h3>
      <p>In the event of any conflict or inconsistency between the documents forming the relationship between the Parties, the following order of precedence applies (highest to lowest): this Data Processing Agreement (for data protection matters only), EU Standard Contractual Clauses (Annex 1), the Master Services Agreement or other Agreement, and Order Forms and Statements of Work. In the event of any conflict between the main body of this DPA and the Annexes, the Annexes shall prevail with respect to the specific matters they govern.</p>

      <h3>18.3 Entire Agreement</h3>
      <p>This DPA, together with the Agreement, constitutes the entire agreement between the Parties with respect to the Processing of Personal Data and supersedes all prior agreements, understandings, and representations (whether written or oral) relating to such Processing.</p>

      <h3>18.4 Amendments</h3>
      <p>This DPA may only be amended or modified by mutual written agreement of the Parties, or by MoneyMind Profile where required to comply with changes in Data Protection Laws and Regulations, provided that MoneyMind Profile provides Customer with at least ninety (90) days&apos; advance written notice of the amendment, the amendment does not materially reduce Customer&apos;s rights or increase Customer&apos;s obligations, and if Customer objects on reasonable data protection grounds, Customer may terminate the Agreement.</p>

      <h3>18.5 Severability</h3>
      <p>If any provision of this DPA is held to be invalid, illegal, or unenforceable, the validity, legality, and enforceability of the remaining provisions shall not be affected or impaired. The Parties shall negotiate in good faith to replace the invalid provision with a valid provision that achieves the same or similar objective.</p>

      <h3>18.6 Waiver</h3>
      <p>No failure or delay by either Party in exercising any right under this DPA shall operate as a waiver, nor shall any single or partial exercise of any right preclude any other or further exercise of that or any other right.</p>

      <h3>18.7 Assignment</h3>
      <p>Neither Party may assign or transfer this DPA without the prior written consent of the other Party, except that MoneyMind Profile may assign this DPA in connection with a merger, acquisition, or sale of all or substantially all of its assets, provided that the assignee agrees in writing to be bound by the terms of this DPA.</p>

      <h3>18.8 Third-Party Beneficiaries</h3>
      <p>Except as expressly provided in the EU Standard Contractual Clauses (Annex 1), this DPA does not confer any rights upon any person or entity other than the Parties.</p>

      <h3>18.9 Notices</h3>
      <p>All notices under this DPA shall be provided in accordance with the notice provisions in the Agreement. For DPA-specific notices, contact: <strong>MoneyMind Profile — Email: <a href="mailto:info@moneymindprofile.com">info@moneymindprofile.com</a>, Attn: Data Protection Officer, Legal Department, or Privacy Officer.</strong></p>

      <h3>18.10 General Interpretation</h3>
      <p>This DPA is executed in English. If translated into any other language, the English version shall prevail in the event of any conflict or inconsistency. This DPA may be executed in counterparts with electronic signatures having the same legal effect as original signatures. To the extent that the EU Standard Contractual Clauses conflict with any provision of this DPA, the SCCs or UK IDTA (as applicable) shall prevail with respect to transfers of Personal Data to which they apply. In the event of any ambiguity or uncertainty, the interpretation most favorable to the protection of Personal Data and the rights of Data Subjects shall apply. Neither Party shall be liable for any failure or delay in performance due to causes beyond its reasonable control, except this provision does not excuse Customer&apos;s payment obligations, MoneyMind Profile&apos;s security obligations under Section 8, or MoneyMind Profile&apos;s data breach notification obligations under Section 10.</p>

      <div className="lp-callout"><strong>Note:</strong> This DPA may be executed by Customer by: accepting electronically through the MoneyMind Profile Platform during account setup; OR executing the Master Services Agreement, which incorporates this DPA by reference.</div>

      <p className="lp-doc-version"><strong>Version 1.0</strong> · Effective Date: January 20, 2026</p>

      <h2 id="p-annex1">Annex 1 — EU Standard Contractual Clauses (2021/914)</h2>
      <h3>Application</h3>
      <p>This Annex 1 applies to transfers of Personal Data from the European Economic Area (EEA) to countries not recognized by the European Commission as providing an adequate level of data protection.</p>

      <h3>Section I — Purpose and Scope</h3>
      <p><strong>Clause 1 — Purpose.</strong> The purpose of these standard contractual clauses is to ensure compliance with the requirements of Regulation (EU) 2016/679 of the European Parliament and of the Council of 27 April 2016 on the protection of natural persons with regard to the processing of personal data and on the free movement of such data (General Data Protection Regulation) for the transfer of personal data to a third country.</p>
      <p><strong>Clause 2 — Invariability of the Clauses.</strong> The Parties undertake not to modify the Clauses. This does not preclude the Parties from adding clauses on business-related issues where required as long as they do not contradict the Clause.</p>
      <p><strong>Clause 3 — Interpretation.</strong> (a) Where these Clauses use terms that are defined in Regulation (EU) 2016/679, those terms shall have the same meaning as in that Regulation. (b) These Clauses shall be read and interpreted in the light of the provisions of Regulation (EU) 2016/679. (c) These Clauses shall not be interpreted in a way that conflicts with rights and obligations provided for in Regulation (EU) 2016/679.</p>
      <p><strong>Clause 4 — Hierarchy.</strong> In the event of a contradiction between these Clauses and the provisions of related agreements between the Parties, existing at the time these Clauses are agreed or entered into thereafter, these Clauses shall prevail.</p>

      <h3>Module Two — Controller to Processor</h3>
      <p>The following clauses apply where the data exporter is a controller and the data importer is a processor:</p>

      <h3>Section II — Obligations of the Parties</h3>
      <p><strong>Clause 8 — Data protection safeguards.</strong> The data importer shall implement appropriate technical and organisational measures to ensure a level of security appropriate to the risk (as described in Annex 3 to this DPA).</p>
      <p><strong>Clause 9 — Use of sub-processors.</strong> (a) The data importer has the data exporter&apos;s general authorisation for the engagement of sub-processors from the list published at <Link href="/legal/subprocessors">moneymindprofile.com/legal/subprocessors</Link>. The data importer shall specifically inform the data exporter in writing of any intended changes to that list at least 30 days in advance, thereby giving the data exporter sufficient time to be able to object to such changes prior to the engagement of the sub-processor(s). (b) Where the data importer engages a sub-processor to carry out specific processing activities (on behalf of the data exporter), it shall do so by way of a written contract that provides for the same data protection obligations as those binding the data importer under these Clauses. (c) The data importer shall remain fully responsible to the data exporter for the performance of the sub-processor&apos;s obligations under its contract with the data importer.</p>
      <p><strong>Clause 10 — Data subject rights.</strong> The data importer shall assist the data exporter in responding to requests by data subjects to exercise their rights under Regulation (EU) 2016/679, as described in Section 9 of the main DPA.</p>
      <p><strong>Clause 11 — Redress.</strong> (a) The data importer shall inform data subjects in a transparent and easily accessible format of a contact point authorised to handle complaints. The contact point is: <a href="mailto:dpo@moneymindprofile.com">dpo@moneymindprofile.com</a>. (b) In case of a dispute between a data subject and one of the Parties as regards compliance with these Clauses, that Party shall use its best efforts to resolve the issue amicably in a timely fashion.</p>
      <p><strong>Clause 12 — Liability.</strong> (a) Each Party shall be liable to the other Party/ies for any damages it causes the other Party/ies by any breach of these Clauses. (b) The data importer shall be liable to the data subject, and the data subject shall be entitled to receive compensation, for any material or non-material damages the data importer or its sub-processor causes the data subject by breaching the third-party beneficiary rights under these Clauses. (c) The Parties agree that if the data exporter is held liable under paragraph (b) for damages caused by the data importer (or its sub-processor), it shall be entitled to claim back from the data importer that part of the compensation corresponding to the data importer&apos;s responsibility for the damage.</p>
      <p><strong>Clause 13 — Supervision.</strong> (a) The supervisory authority with responsibility for ensuring compliance by the data exporter with Regulation (EU) 2016/679 as regards the data transfer shall act as competent supervisory authority. (b) The data importer agrees to submit itself to the jurisdiction of and cooperate with the competent supervisory authority in any procedures aimed at ensuring compliance with these Clauses.</p>

      <h3>Section III — Local Laws and Obligations in case of Access by Public Authorities</h3>
      <p><strong>Clause 14 — Local laws and practices affecting compliance with the Clauses.</strong> (a) The Parties warrant that they have no reason to believe that the laws and practices in the third country of destination applicable to the processing of the personal data by the data importer, including any requirements to disclose personal data or measures authorising access by public authorities, prevent the data importer from fulfilling its obligations under these Clauses. (b) The Parties agree that the documentation listed in Annex 1-A demonstrates that the data importer has conducted a Transfer Impact Assessment and implemented supplementary measures as needed.</p>
      <p><strong>Clause 15 — Obligations of the data importer in case of access by public authorities.</strong> (a) The data importer agrees to notify the data exporter and, where possible, the data subject promptly if it receives a legally binding request from a public authority for disclosure of personal data, or becomes aware of any direct access by public authorities to personal data. (b) The data importer agrees to challenge the request if it concludes that there are reasonable grounds to consider that the request is unlawful under the laws of the country of destination.</p>

      <h2 id="p-annex1a">Annex 1-A — List of Parties and Description of Transfer</h2>
      <p><strong>Data exporter(s):</strong></p>
      <ul>
        <li>Name: NA (Customer, as identified in the Agreement)</li>
        <li>Contact person: NA (as specified in the Agreement)</li>
        <li>Role: Controller</li>
      </ul>
      <p><strong>Data importer(s):</strong></p>
      <ul>
        <li>Name: MoneyMind Profile Pty Ltd</li>
        <li>Contact person: Data Protection Officer, <a href="mailto:info@moneymindprofile.com">info@moneymindprofile.com</a></li>
        <li>Role: Processor</li>
      </ul>
      <p><strong>Description of transfer:</strong></p>
      <ul>
        <li>Categories of data subjects: End Clients, Authorized Users (as described in Section 4.4 of DPA)</li>
        <li>Categories of personal data: As described in Section 4.3 of DPA</li>
        <li>Sensitive data: As described in Section 4.3 of DPA (if applicable)</li>
        <li>Frequency of transfer: Continuous during provision of Services</li>
        <li>Nature of processing: Hosting, storage, management as described in Section 4.2 of DPA</li>
        <li>Purpose of transfer: Provision of Services as described in Section 4.2 of DPA</li>
        <li>Retention period: As described in Section 13 of DPA</li>
        <li>Sub-processors: As listed at <Link href="/legal/subprocessors">moneymindprofile.com/legal/subprocessors</Link></li>
      </ul>
      <p><strong>Competent supervisory authority:</strong> The supervisory authority in the data exporter&apos;s jurisdiction (e.g., CNIL for France, ICO for UK, etc.)</p>

      <h2 id="p-annex2">Annex 2 — Sub-Processors List</h2>
      <p>The current list of Sub-Processors engaged by MoneyMind Profile is maintained at <Link href="/legal/subprocessors">moneymindprofile.com/legal/subprocessors</Link>.</p>

      <h2 id="p-annex3">Annex 3 — Technical and Organizational Security Measures</h2>
      <p>A summary of MoneyMind Profile&apos;s technical and organizational security measures is provided in Section 8 of this DPA. The full Technical and Organizational Security Measures document is provided upon request to Customers under NDA. Contact <a href="mailto:info@moneymindprofile.com">info@moneymindprofile.com</a> to request a copy.</p>
    </LegalLayout>
  );
}
