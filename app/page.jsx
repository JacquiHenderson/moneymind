import ForAdvisersPage from './for-advisors/page';
import { pageMeta } from '../lib/seo';

export const metadata = pageMeta({
  title: 'MoneyMind — AI Behavioral Intelligence for Financial Advisors',
  description:
    "The behavioral layer your risk profile is missing — a psychological blueprint of how your clients save, spend, invest, and react when markets get messy.",
  path: '/',
});

// The Financial Advisors page is the MoneyMind home page.
export default function HomePage() {
  return <ForAdvisersPage />;
}
