import { pageMeta } from '../../lib/seo';

export const metadata = pageMeta({
  title: 'For Fund Providers — MoneyMind',
  description:
    'The behavioral intelligence layer for every investor record. MoneyMind helps fund providers predict investor decisions, prevent churn, and personalize communications at scale across product, distribution, and retention.',
  path: '/for-fund-providers',
});

export default function ForFundProvidersLayout({ children }) {
  return children;
}
