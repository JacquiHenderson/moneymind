import { pageMeta } from '../../lib/seo';

export const metadata = pageMeta({
  title: 'Request a Demo — MoneyMind',
  description:
    'See MoneyMind in action with a guided walkthrough from our team. Tell us about your firm and we will be in touch within the hour.',
  path: '/demo-request',
});

export default function DemoRequestLayout({ children }) {
  return children;
}
