import LegalLayout from '../../../components/LegalLayout';
import Link from 'next/link';

export const metadata = {
  title: 'Sub-Processors List — MoneyMind',
  description: 'MoneyMind Profile Sub-Processors List — third-party processors engaged in handling personal data.',
  alternates: { canonical: '/legal/subprocessors' },
};

export default function SubprocessorsPage() {
  return (
    <LegalLayout
      title="Sub-Processors List"
      meta="<strong>Effective Date:</strong> 26 January 2026"
    >
      <p>Below is a current list of Sub-Processors engaged by MoneyMind Profile.</p>

      <p>The list includes:</p>
      <ol type="a">
        <li>The name of each Sub-Processor;</li>
        <li>A description of the Processing activities performed by the Sub-Processor;</li>
        <li>The date the Sub-Processor was authorized.</li>
      </ol>

      <h2>MoneyMind Profile&apos;s Sub-Processors</h2>

      <ul className="lp-subproc-list">
        <li>
          <h3>Amazon Web Services <span className="lp-subproc-year">(2024)</span></h3>
          <p>Is an &ldquo;Infrastructure-as-a-Service&rdquo; (IaaS) — one of the world&apos;s most comprehensive and broadly adopted cloud platforms, providing on-demand computing power, database storage, security, and AI services.</p>
        </li>
        <li>
          <h3>GitHub <span className="lp-subproc-year">(2024)</span></h3>
          <p>Is a Git repository hosting service that enables developers to store, manage, and collaborate on software code.</p>
        </li>
        <li>
          <h3>Supabase <span className="lp-subproc-year">(2025)</span></h3>
          <p>&ldquo;Backend-as-a-Service&rdquo; (BaaS) platform built on top of the PostgreSQL database. It provides developers with instant APIs, authentication, real-time subscriptions, file storage, and edge functions, enabling rapid application development.</p>
        </li>
        <li>
          <h3>Vercel <span className="lp-subproc-year">(2025)</span></h3>
          <p>Is a cloud platform focused on frontend development, providing infrastructure and tools to build, preview, and ship web applications with high performance.</p>
        </li>
      </ul>

      <div className="lp-callout">
        <strong>Notification of new sub-processors.</strong> MoneyMind Profile will provide at least thirty (30) days&apos; prior written notice before authorizing any new Sub-Processor or replacing an existing Sub-Processor. See Section 7 of the <Link href="/legal/data-processing-agreement">Data Processing Agreement</Link> for full notification and objection procedures.
      </div>

      <p className="lp-doc-version"><strong>Effective Date:</strong> 26 January 2026</p>
    </LegalLayout>
  );
}
