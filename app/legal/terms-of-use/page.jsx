import LegalLayout from '../../../components/LegalLayout';
import Link from 'next/link';

export const metadata = {
  title: 'Terms of Use — MoneyMind',
  description: 'MoneyMind Profile Terms of Use — the legally binding agreement governing your use of our software and services.',
  alternates: { canonical: '/legal/terms-of-use' },
};

export default function TermsOfUsePage() {
  return (
    <LegalLayout
      title="Terms of Use"
      meta="<strong>Document version 2.0 (Global)</strong> · Effective Date: 20 January 2026 · Applies in Australia, the United Kingdom, and the United States"
    >
      <div className="lp-callout">
        <strong>Important notice — please read carefully.</strong> This Agreement contains important provisions regarding your rights and obligations. In particular: for United States users, this Agreement contains an arbitration provision (clause 24) requiring binding individual arbitration of disputes — by agreeing to these Terms you waive the right to participate in class actions and a jury trial. This Agreement contains limitations on our liability (clause 20) and an indemnity from you (clause 21). The Software is a tool to assist financial advisers and is not a substitute for the provision of professional financial advice (clause 9.4). You are responsible for backing up your data (clause 4.4).
      </div>

      <h2>First things first</h2>
      <p>This agreement is a legally binding contract between you and us. It sets out the terms and conditions for the provision of the MoneyMind Profile software (Software) and services supplied with the Software (Services) to you, by us. Please read them carefully. The Software is licensed, not sold, to you for use in accordance with this agreement (Agreement). As part of these Terms of Use, you agree to comply with our <Link href="/legal/acceptable-use-policy">Acceptable Use Policy</Link>, <Link href="/legal/data-processing-agreement">Data Processing Agreement</Link>, <Link href="/legal/data-aggregation">Data Aggregation and De-Identification Policy</Link>, and <Link href="/legal/repeat-infringer-policy">Repeat Infringer Policy</Link>, which are incorporated into these Terms of Use.</p>
      <p>This Agreement is between <strong>MoneyMind Profile Pty Ltd ABN 33 672 152 073</strong>, a company registered in Australia (we, us, our, MoneyMind Profile) and you. Customer means you individually, the entity, or the employer you represent in accepting this Agreement. This Agreement commences on the day you accept this Agreement by completing the Sign-up Registration (Commencement Date) and continues until terminated by either party in accordance with this Agreement (Term).</p>

      <h2>A few ground rules</h2>
      <h3>You must be over the legal age</h3>
      <p>To the extent prohibited by applicable law, the Services are not intended for and should not be used by (a) anyone under the age of eighteen or (b) anyone under the applicable age of majority according to the data protection laws and regulations in your jurisdiction. You represent that you are over the legal age and are the intended recipient of Customer&apos;s invitation to the Services. You may not access or use the Services for any purpose if either of the representations is not true. Without limiting the foregoing, you must be of legal working age.</p>
      <h3>While you&apos;re here, you must follow the rules</h3>
      <p>All Authorised Users must comply with our <Link href="/legal/acceptable-use-policy">acceptable use policy</Link> and <Link href="/legal/repeat-infringer-policy">repeat infringer policy</Link>. If you see inappropriate use, please report it to your primary owner or employer.</p>
      <h3>Limitation of liability</h3>
      <p>If we believe that there is a violation of the Agreement, Terms of Use, the acceptable use policy, or the repeat infringer policy, or we believe that there is a credible risk of harm to us, the Services, Software, Authorised Users or any third parties, we may directly step in and determine appropriate action (including disabling your account) if the Customer does not take appropriate action. We will provide the Services with reasonable skill and care. Subject to clause 20 (Limitation of Liability) and your Non-excludable Rights, we do not make any other warranties or guarantees regarding the Services.</p>
      <p>In no event will MoneyMind Profile or the Customer have any liability to the other for any loss, lost profits or revenues, liability, cost, claim, expense, damage, charge, penalty, outgoing or payment however arising, or for any indirect, special, incidental, consequential, cover or punitive damages however caused, whether in contract, tort or under any other theory of liability, and whether or not the party has been advised of the possibility of such damages.</p>
      <h3>Application of consumer law</h3>
      <p>MoneyMind Profile is a workplace tool intended for use by businesses and organisations and not for consumer purposes. Certain provisions of this Agreement apply only to users in specific jurisdictions. These are identified in the relevant clauses and in Schedule 1 (Jurisdiction-Specific Terms).</p>

      <nav className="lp-toc">
        <p className="lp-toc-title">Table of contents</p>
        <ol>
          <li><a href="#t-1">Definitions</a></li>
          <li><a href="#t-2">Trial Period</a></li>
          <li><a href="#t-3">Services</a></li>
          <li><a href="#t-4">Exclusions &amp; Backup</a></li>
          <li><a href="#t-5">Grant of Licence</a></li>
          <li><a href="#t-6">Term &amp; Auto-Renewal</a></li>
          <li><a href="#t-7">Fees and Payment</a></li>
          <li><a href="#t-8">Taxes</a></li>
          <li><a href="#t-9">Your Use of the Software</a></li>
          <li><a href="#t-10">Restrictions</a></li>
          <li><a href="#t-11">Account Provisions</a></li>
          <li><a href="#t-12">Data Aggregation</a></li>
          <li><a href="#t-13">Third Party Materials</a></li>
          <li><a href="#t-14">Intellectual Property</a></li>
          <li><a href="#t-15">Fair Use Policy</a></li>
          <li><a href="#t-16">Confidential Information</a></li>
          <li><a href="#t-17">Privacy &amp; Data Protection</a></li>
          <li><a href="#t-18">Support</a></li>
          <li><a href="#t-19">Term and Termination</a></li>
          <li><a href="#t-20">Limitation of Liability</a></li>
          <li><a href="#t-21">Indemnity</a></li>
          <li><a href="#t-22">Force Majeure</a></li>
          <li><a href="#t-23">Dispute Resolution (Non-US)</a></li>
          <li><a href="#t-24">Arbitration (US Users)</a></li>
          <li><a href="#t-25">Changes to this Agreement</a></li>
          <li><a href="#t-26">Investigation &amp; Enforcement</a></li>
          <li><a href="#t-27">Copyright Complaints</a></li>
          <li><a href="#t-28">Beta Features</a></li>
          <li><a href="#t-29">General</a></li>
        </ol>
      </nav>

      <h2 id="t-1">1. Definitions and Interpretation</h2>
      <p>In this Agreement, unless the context otherwise requires, capitalised terms have the meanings set out below:</p>
      <ul>
        <li><strong>Aggregated Data</strong> — data that has been de-identified and aggregated in accordance with clause 12.</li>
        <li><strong>Applicable Data Protection Laws</strong> — (i) in Australia, the Privacy Act 1988 (Cth) and the Australian Privacy Principles; (ii) in the United Kingdom, the UK GDPR and the Data Protection Act 2018; (iii) in the United States, applicable federal and state privacy laws including the California Consumer Privacy Act (as amended by the CPRA); (iv) any other applicable data protection or privacy laws.</li>
        <li><strong>Business Day</strong> — a day that is not a Saturday, Sunday or public holiday in: (i) Australia (for Australian users); (ii) England (for UK users); or (iii) United States (for US users).</li>
        <li><strong>CCPA</strong> — the California Consumer Privacy Act of 2018, as amended by the California Privacy Rights Act of 2020.</li>
        <li><strong>Commencement Date</strong> — the date you complete the Sign-up Registration.</li>
        <li><strong>Confidential Information</strong> — has the meaning given in clause 16.1.</li>
        <li><strong>Consumer Laws</strong> — (i) in Australia, the Australian Consumer Law in Schedule 2 of the Competition and Consumer Act 2010 (Cth); (ii) in the United Kingdom, the Consumer Rights Act 2015 and related Acts; (iii) in the United States, applicable federal and state consumer protection laws.</li>
        <li><strong>Controller, Processor, Data Subject, Personal Data, Processing</strong> — have the meanings given in the UK GDPR.</li>
        <li><strong>DMCA</strong> — the Digital Millennium Copyright Act of 1998 (United States).</li>
        <li><strong>Fees</strong> — the fees payable by you as set out in the Sign-Up Registration, My Account portal, or as otherwise agreed in writing.</li>
        <li><strong>Financial Services</strong> — (i) in Australia, a financial service as defined in the Corporations Act 2001 (Cth); (ii) in the United Kingdom, a regulated activity under the Financial Services and Markets Act 2000; (iii) in the United States, financial services as regulated by applicable federal and state laws.</li>
        <li><strong>Force Majeure Event</strong> — has the meaning given in clause 22.1.</li>
        <li><strong>Intellectual Property Rights</strong> — all intellectual property rights worldwide, including patents, copyright, moral rights, rights in circuit layouts, designs, trade marks, trade secrets, know-how, database rights, and confidential information.</li>
        <li><strong>Loss</strong> — any loss, lost profits or revenues, liability, cost, claim, expense, damage, charge, penalty, outgoing or payment however arising.</li>
        <li><strong>Material</strong> — any data, text, photographs, videos, documents or other material uploaded by you or on your behalf using the Software or Services.</li>
        <li><strong>Non-excludable Rights</strong> — any condition, warranty, guarantee, right or remedy implied or imposed by any Consumer Laws or other statute that cannot lawfully be excluded or limited.</li>
        <li><strong>Repeat Infringer</strong> — a user who has been notified of infringing activity more than twice.</li>
        <li><strong>Software</strong> — the MoneyMind Profile software platform.</li>
        <li><strong>Subscription Plan</strong> — the plan selected by you from the Manage Account portal or formal Master Services Agreement.</li>
        <li><strong>Your Jurisdiction</strong> — (i) Australia, if your billing address is in Australia; (ii) the United Kingdom, if your billing address is in the United Kingdom; (iii) the United States, if your billing address is in the United States or any US territory.</li>
      </ul>

      <h2 id="t-2">2. Trial Period</h2>
      <p>We offer a <strong>14-day free trial period</strong> commencing on the Commencement Date, during which you may use the Software to evaluate its features, including sending client profiles, receiving reports, and viewing the Dashboard.</p>
      <p>During the Trial Period, you are limited to sending a maximum of 5 client profiles. You may be required to enter payment information upon Sign-Up. You will not be charged during the Trial Period and you may cancel at any time during the 14 days.</p>
      <p>If you cancel during the Trial Period, your subscription will be deleted automatically at the end of the Trial Period and any client profiles, account, and billing information will be deleted. To cancel, go to <code>Manage Account &gt; Billing</code> and select <code>Cancel Plan</code>.</p>

      <h2 id="t-3">3. Services</h2>
      <p>Subject to the terms of this Agreement, we will provide hosting services that vary based on the Subscription Plan you have purchased and the number of individual user licences you have purchased, the support services described in clause 18, and such other services as may be agreed between the parties in writing from time to time.</p>
      <p>We will use reasonable endeavours to ensure the Software is available <strong>99.5% of the time</strong> in any calendar month, excluding scheduled maintenance windows notified to you in advance, emergency maintenance required to protect the security or integrity of the Software, unavailability caused by factors outside our reasonable control (including Force Majeure Events), and unavailability resulting from your systems, equipment or internet connectivity.</p>
      <p>If we fail to meet the availability target, you may request a service credit equal to 5% of the monthly Fees for that month, up to a maximum of 25%. Service credits are your sole and exclusive remedy for unavailability (except to the extent prohibited by applicable law). You must request service credits in writing within 30 days of the end of the affected month.</p>

      <h2 id="t-4">4. Exclusions and Backup Responsibility</h2>
      <p>You acknowledge and agree that technology systems are not free of faults and downtime may occur. The Software and the Services may become unavailable or we may suspend access due to planned or unplanned maintenance, circumstances beyond our reasonable control, or to comply with third party requirements.</p>
      <div className="lp-callout"><strong>IMPORTANT — BACKUP YOUR DATA.</strong> You are solely responsible for backing up, to your own computer, device or storage system, any important documents, data, Material or other content that you store or access via the Services. We strongly encourage you to maintain regular backups of all important data via our export and download functionality.</div>
      <p>While we will use reasonable skill and care in providing the Services, we do not guarantee or warrant that any Material or content you store or access through the Services will be free from inadvertent damage, corruption, loss, or deletion, whether due to technical failure, cyberattack, human error, or any other cause. Subject to clause 20 and your Non-excludable Rights, we shall not be liable for any loss of, or damage to, your Material or data.</p>

      <h2 id="t-5">5. Grant of Licence</h2>
      <p>Subject to the terms and conditions of this Agreement, we grant to you a <strong>revocable, non-exclusive, non-transferable, non-sublicensable licence</strong> to access and use the Software for the Term, solely for your internal business purposes.</p>
      <p>You may only use the Software for your own use and only for your own internal data processing operations. You must not transfer or sublicense the Software to any third party, in whole or in part, in any form, whether modified or unmodified. Login credentials must only be used by the individual users to whom such credentials are issued. Users must not share their login credentials with any other person.</p>

      <h2 id="t-6">6. Contract Term and Auto-Renewal</h2>
      <div className="lp-callout"><strong>Automatic renewal notice.</strong> Your subscription will automatically renew for successive monthly periods unless you cancel your subscription. You may cancel at any time via your login: <code>Manage Account &gt; Billing &gt; Cancel Plan</code>.</div>

      <h2 id="t-7">7. Fees and Payment</h2>
      <p>From the Commencement Date (or expiry of the Trial Period, if applicable), you must pay us the Fees. The Fees are charged in the currency applicable to Your Jurisdiction (AUD for Australia, GBP for the United Kingdom, USD for the United States) unless otherwise agreed.</p>
      <p>The Fees are direct debited monthly in advance from your nominated payment method. You may increase or decrease the number of user licences or change your Subscription Plan via the Manage Account portal; new Fees will apply from the following month with a pro-rata adjustment where necessary.</p>
      <p>If any payment is not successfully processed, we may in our sole discretion apply 14-day payment terms to rectify the payment. If any payment remains outstanding beyond the payment due date, you will be in breach of this Agreement. On 14 days&apos; written notice we may suspend access, charge interest (7.5% per annum for Australian users; 4% above the Bank of England base rate for UK users; the lesser of 1.5% per month or the maximum rate permitted by applicable law for US users), refer outstanding amounts to a debt collection agency, and/or terminate this Agreement.</p>
      <p>All Fees are subject to annual adjustment on the anniversary of the Commencement Date. We will provide at least 30 days&apos; notice of any fee increase.</p>

      <h2 id="t-8">8. Taxes</h2>
      <p>All Fees are exclusive of applicable taxes. You are responsible for paying all taxes associated with your purchases, including GST (Australia), VAT (United Kingdom), and sales tax (United States), as applicable.</p>

      <h2 id="t-9">9. Your Use of the Software and Services</h2>
      <h3>Your Warranties</h3>
      <p>When you use the Software and/or the Services to store, upload, or create Material, you represent and warrant that any Material uploaded by you, your employees, agents, or on your behalf: is owned by you or you have the necessary rights or consents to upload it; does not infringe the Intellectual Property Rights, privacy rights, or any other rights of any person; to the extent the Material contains photographic images or video footage of people, you have obtained all necessary and valid releases; is not the subject of any infringement claim; does not contain anything that violates any applicable law or is offensive, defamatory, violent, sexually explicit, exploitative, or otherwise objectionable; is not misleading or deceptive; and does not contain any viruses, malware, or other harmful code.</p>
      <h3>Financial Services Acknowledgment</h3>
      <p>You acknowledge that the Software is only a tool used to assist in the provision of services to your clients. You remain solely responsible for the provision of Financial Services to your clients and must hold and maintain all licences, registrations, and authorisations required by applicable law. We do not provide Financial Services and are not authorised, licensed, or registered to do so in any jurisdiction. You indemnify us in accordance with clause 21 with respect to any Loss arising as a result of your provision of Financial Services to your clients.</p>
      <h3>Professional Advice Disclaimer</h3>
      <div className="lp-callout">The Software is a tool to assist appropriately qualified and licensed financial advisors in the delivery of Financial Services to their clients. <strong>The Software is not a substitute for professional financial, legal, tax, or other advice.</strong> Any outputs, reports, profiles, or other content generated by or through the Software are for informational purposes only and should not be relied upon without independent verification by appropriately qualified professionals. You must review and verify all outputs before providing them to, or relying on them in relation to, your clients.</div>
      <h3>Compliance with Laws</h3>
      <p>You are responsible for ensuring that your use of the Software and Services complies with all applicable laws, regulations, and professional standards in Your Jurisdiction, including financial services licensing, anti-money laundering and counter-terrorism financing, privacy and data protection, consumer protection, and professional conduct and ethical standards.</p>

      <h2 id="t-10">10. Restrictions</h2>
      <h3>Prohibited Activities</h3>
      <p>You must not: disassemble, reverse engineer, decompile, modify, or create derivative works of the Software or the Services; rent, lease, lend, sell, transfer, outsource the use of, or grant any rights in the Software/Services to any third party; permit use beyond the number of user licences in your Subscription Plan; use the Software for any unlawful purpose; attempt to gain unauthorised access to systems or data; interfere with or disrupt integrity or performance; transmit unsolicited communications or spam; stalk, harass, threaten, defame, or harm any person; impersonate any person or entity; upload content that exploits, harms, or threatens children; use automated means (bots, scrapers, crawlers) to access or collect data; circumvent or disable security features; or access the Software from any country subject to comprehensive US, UK, EU, or Australian sanctions.</p>
      <h3>Prohibited AI Activities</h3>
      <p>You must not use the Platform or any data accessed through it to train, develop, or improve artificial intelligence models, machine learning algorithms, or large language models; extract data for purposes of creating embeddings, vector databases, or AI-powered knowledge bases; reverse engineer Platform AI features or algorithms; input client data, personal information, or confidential business information into ChatGPT, Claude, Bard/Gemini, Copilot, or similar AI chatbots; use AI-powered browser extensions or plugins that transmit Platform data to external services; upload Platform data to cloud-based AI services without proper data protection agreements; deploy bots, scrapers, crawlers, or automated tools to extract data; or use API access to bulk download data for non-operational purposes. <strong>Approved AI use case:</strong> use MoneyMind Profile&apos;s built-in AI features as intended.</p>

      <h2 id="t-11">11. Account Provisions</h2>
      <p>Your Account is valuable, and you are solely responsible for maintaining its confidentiality and security. You agree to immediately notify us if you suspect your Account has been compromised. The Software is designed for use on an individual basis and you should not share your Account or password with any other person.</p>
      <p>Unless otherwise required by applicable law, your Account is non-transferable and any rights to your Account or content within your Account terminate upon your death. Upon receipt of a certified copy of a death certificate, we may terminate your Account and delete all content within your Account after 30 days&apos; notice to any known estate representative.</p>
      <p>We reserve the right to terminate your Account upon 30 days&apos; prior written notice if your Account has been inactive (no login activity) for a continuous period of 12 months or more; we will send at least two reminder notices, and you may reactivate by logging in during the notice period.</p>

      <h2 id="t-12">12. Data Aggregation</h2>
      <p>You acknowledge that the Services are enhanced through the incorporation of aggregated data from all users and agree that we may incorporate data from your Material in a de-identified and aggregated form into databases containing the data of multiple clients. Such databases and the Aggregated Data contained within them will be owned by us.</p>
      <p>We warrant that the Aggregated Data will be de-identified such that it is no longer Confidential Information of you, does not constitute Personal Information and is not capable of identifying you, your clients, or any individual, and a person with a reasonable level of industry knowledge would not be able to determine whether any Aggregated Data originated from you or any other user. We will keep all source data confidential and comply with all Applicable Data Protection Laws during the aggregation process. Refer to our <Link href="/legal/data-aggregation">Data Aggregation and De-Identification Policy</Link>.</p>

      <h2 id="t-13">13. Third Party Materials and Templates</h2>
      <p>You acknowledge that we use third-party material within the Software and, subject to your Non-excludable Rights, we have no liability for inability or delay to supply, or failures of, these materials. We may change third party suppliers from time to time. The templates included in the Software are for general information purposes only, are designed for use in Australia, the United Kingdom, and the United States but may not address all jurisdiction-specific requirements, and do not constitute Financial Services, financial product advice, legal advice, tax advice, or any other professional advice. You must not rely on the templates without independent verification by appropriately qualified professionals.</p>

      <h2 id="t-14">14. Intellectual Property</h2>
      <h3>Your Intellectual Property</h3>
      <p>You or your licensors retain ownership of all Intellectual Property Rights in any Material that you upload using the Software or the Services. You grant to us, our employees, contractors, officers, affiliates, and subcontractors a non-exclusive, worldwide, royalty-free, sublicensable (to our service providers solely for the purpose of providing the Services) licence to use, reproduce, store, transmit, reformat, display, adapt, and modify your Material solely to the extent necessary to provide, maintain, improve and develop the Services and the Software.</p>
      <h3>Our Intellectual Property</h3>
      <p>We own, or have the necessary grants and licences to use, all Intellectual Property Rights in the Software and the Services, including all updates, modifications, adaptations, enhancements, and derivatives. Nothing in this Agreement transfers any ownership of such Intellectual Property Rights to you. MoneyMind Profile, and our logos are trademarks of MoneyMind Profile Pty Ltd. You are granted no right or licence to use any of our trademarks without our prior written consent. We reserve all rights not expressly granted.</p>

      <h2 id="t-15">15. Fair Use Policy</h2>
      <p>Services may be provided to you for uploading, storing and managing your Material. While no specific limits are applied to the number or size of items uploaded or stored, we reserve the right to apply limits at any time where we reasonably believe that the number or size of items, or the volume of notifications sent, is unreasonable or could degrade the Services for other users. If a limit is applied, we will notify you and provide a reasonable period (not less than 14 days) to reduce usage to acceptable levels.</p>

      <h2 id="t-16">16. Confidential Information</h2>
      <p>Confidential Information means the confidential information of a party which relates to the subject matter of this Agreement, including any information which is marked as confidential or which by its nature would be regarded as confidential, the design, specification and content of the Software and the Services, personnel and business strategies, your Material and your clients&apos; Personal Information, and the commercial terms of this Agreement.</p>
      <p>A party must not, without the prior written approval of the other party, disclose the other party&apos;s Confidential Information except to its officers, contractors, agents, employees, affiliates, professional advisers, auditors, and insurers who have a need to know and are bound by confidentiality obligations, if required by law (with prompt notice where lawful), or with prior written consent. Each party must use the other&apos;s Confidential Information only for the purposes of this Agreement and take reasonable steps to protect it. Upon termination, each party must return or destroy all Confidential Information of the other party.</p>

      <h2 id="t-17">17. Privacy and Data Protection</h2>
      <p>Each party will comply with all Applicable Data Protection Laws in connection with this Agreement. To the extent that we Process Personal Information on your behalf in providing the Services, the parties acknowledge that you are the Controller and we are the Processor.</p>
      <p>As Processor, we will: Process Personal Information only on your documented instructions; ensure that persons authorised to Process Personal Information are subject to appropriate confidentiality obligations; implement and maintain appropriate technical and organisational measures; not engage a sub-processor without your prior written consent; ensure that any sub-processor is bound by data protection obligations no less protective than those in this clause; assist you in responding to Data Subject requests; assist you with security, breach notification, impact assessments, and supervisory authority consultations; at your choice, delete or return all Personal Information to you after the end of the provision of Services; and make available all information necessary to demonstrate compliance and allow for audits.</p>
      <p>We will not transfer Personal Information outside Your Jurisdiction unless the transfer is to a country recognised as providing adequate protection, appropriate safeguards are in place (such as standard contractual clauses, binding corporate rules, or certification mechanisms), a derogation applies, or you have provided prior written consent.</p>
      <p>If we become aware of a Data Breach, we will notify you without undue delay and within 72 hours of becoming aware (for UK users); as soon as practicable and within 72 hours (for Australian users); and within the timeframes required by applicable state law (for US users). We will provide sufficient information to enable you to assess the nature and scope of the breach, take reasonable steps to contain and remediate the Data Breach, and cooperate with you. The provisions of our <Link href="/legal/privacy-policy">Privacy Policy</Link> are part of this Agreement.</p>

      <h2 id="t-18">18. Support</h2>
      <p>We will provide you with the following support for the Software:</p>
      <ul>
        <li><strong>Australian users:</strong> 9:00am to 5:00pm AEST/AEDT, Monday to Friday (excluding NSW and national public holidays).</li>
        <li><strong>UK users:</strong> 9:00am to 5:00pm GMT/BST, Monday to Friday (excluding England public holidays).</li>
        <li><strong>US users:</strong> 9:00am to 5:00pm EST/EDT, Monday to Friday (excluding US federal holidays).</li>
      </ul>
      <p>Queries can be raised via online chat or email to <a href="mailto:support@moneymindprofile.com">support@moneymindprofile.com</a>. A self-service knowledgebase is available at www.moneymindprofile.com/support.</p>
      <p>Escalated issues are categorised as <strong>Highest</strong> (critical system-wide; updates every 2-4 business hours), <strong>High</strong> (significant issues affecting core functionality; updates every half to 1 Business Day), <strong>Medium</strong> (issues with available workarounds; updates every 5-10 Business Days), and <strong>Low</strong> (minor or cosmetic; monthly updates).</p>

      <h2 id="t-19">19. Term and Termination</h2>
      <p>This Agreement begins on the Commencement Date and continues until terminated. Either party may terminate this Agreement by providing at least 30 days&apos; written notice prior to the expiry of the then-current Term.</p>
      <p>We may terminate this Agreement immediately by written notice if you breach any material provision and fail to remedy the breach within 14 days after receiving written notice, become insolvent or enter administration, cease or threaten to cease carrying on business, or fail to pay any amounts due within 30 days of the due date.</p>
      <p>Upon termination: you must immediately cease using the Software; you must return or destroy any Confidential Information; all licences immediately terminate; and you must pay all outstanding Fees within 14 days. 30 days after termination we may permanently delete all copies of your Material; you must export or download your Material before termination if you wish to retain it.</p>

      <h2 id="t-20">20. Limitation of Liability</h2>
      <p>Nothing in this Agreement excludes or limits either party&apos;s liability for death or personal injury caused by negligence, fraud or fraudulent misrepresentation, any liability that cannot lawfully be excluded under applicable law (including your Non-excludable Rights), or a party&apos;s indemnification obligations under clause 21.</p>
      <p>Subject to those carve-outs, <strong>our total aggregate liability to you arising out of or in connection with this Agreement is limited to the greater of: (a) the total amount of Fees paid by you to us in the 12 months immediately preceding the incident; or (b) USD $5,000 (or the equivalent in your local currency).</strong> Neither party will be liable to the other for loss of profits, revenue, savings, business, contracts, or opportunity; loss of data (except where caused by our breach of clause 17); loss of goodwill or reputation; wasted expenditure; or any indirect, incidental, consequential, special, punitive, or exemplary loss or damage.</p>

      <h2 id="t-21">21. Indemnity</h2>
      <p>To the maximum extent permitted by applicable law, you agree to indemnify, defend, and hold harmless us, our affiliates, and our respective directors, officers, employees, contractors and agents from any and all Losses arising from or related to: your breach of any representation, warranty, or obligation in this Agreement; your violation of any applicable law or regulation; your infringement or violation of any third-party right; any claim that your Material infringes any third-party Intellectual Property Rights; your provision of Financial Services to your clients; your failure to comply with applicable financial services licensing or regulatory requirements; and your use of the Software or Services other than in accordance with this Agreement.</p>
      <p>Subject to certain exceptions, we agree to indemnify, defend, and hold harmless you and your directors, officers, employees and agents from any third-party claim that the Software (excluding any Material or third-party materials) infringes any Intellectual Property Rights in Your Jurisdiction.</p>

      <h2 id="t-22">22. Force Majeure</h2>
      <p>A Force Majeure Event means any event beyond a party&apos;s reasonable control, including natural disasters; epidemics, pandemics, or quarantine restrictions; war, terrorism, civil unrest, or armed conflict; acts of government; strikes or industrial disputes; failure of third-party telecommunications, internet, or hosting providers; cyberattacks (provided the affected party maintained reasonable security measures); and power outages or infrastructure failures beyond the affected party&apos;s control. A party will not be liable for failure or delay in performing obligations to the extent caused by a Force Majeure Event. If a Force Majeure Event continues for more than 60 consecutive days, either party may terminate this Agreement on 14 days&apos; written notice. This clause does not apply to any obligation to pay money.</p>

      <h2 id="t-23">23. Dispute Resolution (Non-US Users)</h2>
      <p>This clause applies to all users except those in the United States (who are subject to clause 24). A party claiming a Dispute has arisen must give written notice. Within 14 days, senior representatives of each party must meet and attempt in good faith to resolve the Dispute. If not resolved within 21 days, either party may refer the Dispute to mediation — for Australian users, under the Resolution Institute rules in Sydney; for UK users, under CEDR rules in London. If not resolved within 28 days of referral, either party may commence court proceedings.</p>

      <h2 id="t-24">24. Arbitration and Class Action Waiver (United States Users Only)</h2>
      <div className="lp-callout"><strong>You and MoneyMind Profile agree that any dispute, claim, or controversy arising out of or relating to this Agreement or the Software or Services will be resolved exclusively through binding individual arbitration, rather than in court.</strong> There is no judge or jury in arbitration, and court review of an arbitration award is limited. However, an arbitrator can award on an individual basis the same damages and relief as a court (including statutory damages, attorneys&apos; fees, and costs).</div>
      <p>Arbitration will be conducted by JAMS under its Streamlined Arbitration Rules and Procedures (or, if the claim exceeds $250,000, its Comprehensive Arbitration Rules and Procedures), by a single arbitrator with experience in commercial software disputes, in New York or at another mutually agreed location. The arbitrator will apply the substantive law of the State of New York and the Federal Arbitration Act.</p>
      <p><strong>Class action and jury trial waiver.</strong> You and MoneyMind Profile agree that each may bring claims against the other only in your or its individual capacity and not as a plaintiff or class member in any purported class, consolidated, or representative proceeding. The arbitrator may not consolidate more than one person&apos;s claims and may not preside over any form of class, consolidated, or representative proceeding. You waive any right to a jury trial.</p>
      <p><strong>Opt-out right.</strong> You may opt out of this arbitration provision by sending written notice with the heading &ldquo;Opt-Out Right&rdquo; to <a href="mailto:support@moneymindprofile.com">support@moneymindprofile.com</a> within 30 days of first accepting this Agreement.</p>

      <h2 id="t-25">25. Changes to this Agreement</h2>
      <p>We may amend this Agreement or change the Fees by giving you at least 30 days&apos; notice via email or notification on our website. If you do not agree to the changes, you must advise us in writing within 30 days of our notification, and this Agreement will terminate at the end of the then-current Term (or 30 days from our notification, whichever is later). If you continue to use the Software or Services after 30 days from our notification, you will be deemed to have accepted the changes.</p>
      <p>We will not make any Material Adverse Change to the Services before the end of your current paid Term, unless reasonably necessary to comply with legal, regulatory, or governmental requirements; address user security, privacy, or technical integrity concerns; avoid service disruptions; or address issues resulting from natural disasters or similar events outside our reasonable control. If we make a Material Adverse Change in permitted circumstances, you will have the right to terminate this Agreement within 30 days of our notification and receive a pro-rata refund.</p>

      <h2 id="t-26">26. Investigation and Enforcement</h2>
      <p>We reserve the right to take steps we believe are reasonably necessary to enforce and/or verify compliance with any part of this Agreement. You acknowledge that we may, without liability to you, access, use, preserve and/or disclose your Account information and any Material to law enforcement, government officials, or third parties if legally required, or where we have a good faith belief that such access is reasonably necessary to comply with legal process, enforce this Agreement, detect or prevent security, fraud, or technical issues, or protect rights, property, or safety.</p>

      <h2 id="t-27">27. Copyright and Intellectual Property Complaints</h2>
      <p>We respect the intellectual property rights of others. If you believe that any content on our Services infringes a copyright you own, you may submit a notification pursuant to the DMCA by providing our Copyright Agent with: a physical or electronic signature of a person authorised to act on behalf of the copyright owner; identification of the copyrighted work claimed to have been infringed; identification of the allegedly infringing material; your contact information; a good-faith statement; and a statement under penalty of perjury that the information is accurate.</p>
      <p>Our designated Copyright Agent: MoneyMind Profile Pty Ltd, Attn: Copyright Agent, Email <a href="mailto:support@moneymindprofile.com">support@moneymindprofile.com</a>.</p>
      <p>We have adopted a policy of terminating, in appropriate circumstances, Accounts of users who are deemed to be Repeat Infringers. A user will be deemed a Repeat Infringer if we receive more than two valid notifications of claimed infringement in respect of that user&apos;s Account within any 12-month period. See our <Link href="/legal/repeat-infringer-policy">Repeat Infringer Policy</Link>.</p>

      <h2 id="t-28">28. Beta Features</h2>
      <p>From time to time, we may make available new and/or updated features of the Services on a trial, pilot, or beta basis. Your use of any Beta Features is voluntary. Beta Features are provided &lsquo;as is&rsquo; and &lsquo;as available&rsquo; without warranty of any kind; they may contain errors that could cause failures, corruption, or loss of data; we are not obligated to provide any Beta Features or to make them generally available; we may discontinue, modify, or limit availability at any time without notice or liability; you should back up all data before using any Beta Feature; and your use of Beta Features is at your sole risk.</p>
      <p>Beta Features are confidential and you must not disclose any information about Beta Features to third parties without our prior written consent. By providing feedback regarding Beta Features, you grant us a perpetual, worldwide, royalty-free, non-exclusive, irrevocable licence to use such feedback for any purpose.</p>

      <h2 id="t-29">29. General</h2>
      <p><strong>Governing Law.</strong> This Agreement is governed by: the laws of New South Wales, Australia (for Australian users); the laws of England and Wales (for UK users); the laws of the State of New York, United States (for US users, except that the Federal Arbitration Act governs the interpretation and enforcement of clause 24).</p>
      <p><strong>Other Provisions.</strong> You must not assign this Agreement without our prior written consent. We may assign this Agreement to an affiliate or successor upon written notice. Nothing in this Agreement creates a partnership, joint venture, agency, or employment relationship. This Agreement constitutes the entire agreement between the parties. No waiver is effective unless in writing. If any provision is found unenforceable, it will be modified to the minimum extent necessary or severed. Notices must be in writing and sent to the address or email on file. Except as provided in clause 25, any variation must be in writing and signed by both parties.</p>

      <h2>Schedule 1 — Jurisdiction-Specific Terms</h2>
      <h3>Part A — Australia</h3>
      <p>If the Australian Consumer Law in Schedule 2 of the Competition and Consumer Act 2010 (Cth) applies to you as a &lsquo;consumer&rsquo;, nothing in this Agreement excludes, restricts or modifies any consumer guarantee, right or remedy conferred on you that cannot be excluded. We will comply with the Privacy Act 1988 (Cth), the Australian Privacy Principles, and the Notifiable Data Breaches scheme. All amounts payable are exclusive of GST.</p>
      <h3>Part B — United Kingdom</h3>
      <p>If the Consumer Rights Act 2015 applies to you, nothing in this Agreement affects your statutory rights under that Act. We acknowledge that terms in contracts with consumers may be assessed for fairness under the Consumer Rights Act 2015. We will comply with the UK GDPR and the Data Protection Act 2018 in our Processing of Personal Data. Where Personal Data is transferred outside the UK, we will ensure appropriate safeguards are in place as required by the UK GDPR, including the use of the International Data Transfer Agreement or Addendum published by the UK Information Commissioner. All Fees are exclusive of VAT.</p>
      <h3>Part C — United States</h3>
      <p>To the extent the CCPA applies, we are a &lsquo;service provider&rsquo; under the CCPA and will Process Personal Information only as permitted by the CCPA. Our <Link href="/legal/privacy-policy">Privacy Policy</Link> contains the disclosures required by the CCPA. We do not &lsquo;sell&rsquo; or &lsquo;share&rsquo; Personal Information that we Process on your behalf. Disputes with US users are subject to binding individual arbitration under clause 24 — <strong>you acknowledge that you are waiving the right to participate in a class action and to a jury trial.</strong></p>
      <p>To the maximum extent permitted by applicable law, the Software and Services are provided &lsquo;as is&rsquo; and &lsquo;as available&rsquo; without warranties of any kind, whether express, implied, statutory, or otherwise. Any cause of action or claim arising out of or relating to this Agreement or the Software or Services must be commenced within one (1) year after the cause of action accrues; otherwise, such cause of action or claim is permanently barred.</p>
    </LegalLayout>
  );
}
