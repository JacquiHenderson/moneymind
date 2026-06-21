import Header from '../components/Header';
import { Hero } from '../components/Hero';
import Logos from '../components/Logos';
import Platform from '../components/Platform';
import AudienceSplit from '../components/AudienceSplit';
import Features from '../components/Features';
import Stats from '../components/Stats';
import Team from '../components/Team';
import Security from '../components/Security';
import Faq from '../components/Faq';
import CtaBand from '../components/CtaBand';
import Footer from '../components/Footer';
import { pageMeta } from '../lib/seo';

export const metadata = pageMeta({
  title: 'MoneyMind — AI Behavioral Intelligence for Financial Advisors',
  description: "The behavioral layer your risk profile is missing — a psychological blueprint of how your clients save, spend, invest, and react when markets get messy.",
  path: '/',
});

export default function HomePage() {
  return (
    <div className="mm-page">
      <Header currentPage="home" />
      <Hero />
      <Logos />
      <Platform />
      <AudienceSplit />
      <Features />
      <Stats />
      <Team />
      <Security />
      <Faq />
      <CtaBand />
      <Footer />
    </div>
  );
}
