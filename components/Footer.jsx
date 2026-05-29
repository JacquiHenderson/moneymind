import Link from 'next/link';
import { IconLinkedIn, IconInstagram, IconFacebook } from './Icons';

export default function Footer() {
  return (
    <footer className="mm-footer">
      <div className="mm-container">
        <div className="mm-footer-grid">
          <div className="mm-footer-brand">
            <img src="/assets/logos/moneymind-white.svg?v=5" alt="MoneyMind" />
            <p>
              AI behavioural intelligence for financial advisors and fund providers.
              Decoding the psychology behind how clients actually make financial decisions.
            </p>
          </div>

          <div className="mm-footer-col">
            <h5>Resources</h5>
            <ul>
              <li><Link href="/legal/privacy-policy">Privacy Policy</Link></li>
              <li><Link href="/legal/terms-of-use">Terms of Use</Link></li>
              <li><Link href="/legal/acceptable-use-policy">Acceptable Use Policy</Link></li>
              <li><Link href="/legal/data-aggregation">Data Aggregation &amp; De-Identification</Link></li>
              <li><Link href="/legal/data-processing-agreement">Data Processing Agreement</Link></li>
              <li><Link href="/legal/subprocessors">Sub-processors List</Link></li>
              <li><Link href="/legal/repeat-infringer-policy">Repeat Infringer Policy</Link></li>
            </ul>
          </div>

          <div className="mm-footer-col">
            <h5>Follow us</h5>
            <div className="mm-footer-socials">
              <a href="https://www.linkedin.com/in/jacqui-henderson1" target="_blank" rel="noopener noreferrer" aria-label="MoneyMind on LinkedIn"><IconLinkedIn size={26} /></a>
              <a href="https://www.instagram.com/moneymind_profile/" target="_blank" rel="noopener noreferrer" aria-label="MoneyMind on Instagram"><IconInstagram size={26} /></a>
              <a href="https://www.facebook.com/people/MoneyMind/61577449349777/" target="_blank" rel="noopener noreferrer" aria-label="MoneyMind on Facebook"><IconFacebook size={26} /></a>
            </div>
          </div>
        </div>

        <div className="mm-footer-bottom">
          <span>© 2026 MoneyMind Profile · ABN 33 672 152 073</span>
          <div className="legal">
            <a href="mailto:support@moneymindprofile.com">support@moneymindprofile.com</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
