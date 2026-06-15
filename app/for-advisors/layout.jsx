import { pageMeta } from '../../lib/seo';

export const metadata = pageMeta({
  title: 'For Financial Advisors — MoneyMind',
  description:
    'The new standard for profiling clients. MoneyMind maps how your clients save, spend, plan for retirement, respond to markets, and invest — so you build trust faster, accelerate advice acceptance, and protect AUM.',
  path: '/for-advisors',
});

export default function ForAdvisorsLayout({ children }) {
  return children;
}
