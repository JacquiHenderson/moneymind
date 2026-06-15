import { pageMeta } from '../../lib/seo';

export const metadata = pageMeta({
  title: 'For Fund Providers — MoneyMind',
  description:
    'The behavioural intelligence layer for every investor record. MoneyMind helps fund providers predict investor decisions, prevent churn, and personalise communications at scale across product, distribution, and retention.',
  path: '/for-fund-providers',
});

export default function ForFundProvidersLayout({ children }) {
  return children;
}
