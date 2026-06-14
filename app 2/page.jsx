import Header from '../components/Header';
import { Hero } from '../components/Hero';
import Logos from '../components/Logos';
import Platform from '../components/Platform';
import AudienceSplit from '../components/AudienceSplit';
import Features from '../components/Features';
import Stats from '../components/Stats';
import Team from '../components/Team';
import Security from '../components/Security';
import CtaBand from '../components/CtaBand';
import Footer from '../components/Footer';

export const metadata = {
  title: 'MoneyMind — AI Behavioural Intelligence for Financial Advisors',
  description: "MoneyMind's AI behavioural intelligence gives financial advisory firms a psychological blueprint of how their clients make financial decisions.",
};

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
      <CtaBand />
      <Footer />
    </div>
  );
}
