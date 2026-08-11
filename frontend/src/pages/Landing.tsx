// src/pages/Landing.tsx
import React from 'react';
import { Navbar } from '../components/landing/Navbar';
import { Hero } from '../components/landing/Hero';
import { ProblemSolution } from '../components/landing/ProblemSolution';
import { HowItWorks } from '../components/landing/HowItWorks';
import { Features } from '../components/landing/Features';
import { Pricing } from '../components/landing/Pricing';
import { Footer } from '../components/landing/Footer';

interface LandingProps {
  onLoginClick?: () => void;
  onGetStartedClick?: () => void;
  onSelectPlan?: (planName: string) => void;
}

export const Landing: React.FC<LandingProps> = ({
  onLoginClick,
  onGetStartedClick,
  onSelectPlan,
}) => {
  return (
    <div className="min-h-screen bg-[#030812] text-slate-100 selection:bg-cyan-500 selection:text-slate-950">
      <Navbar onLoginClick={onLoginClick} onGetStartedClick={onGetStartedClick} />
      <main>
        <Hero onGetStartedClick={onGetStartedClick} />
        <ProblemSolution />
        <HowItWorks />
        <Features />
        <Pricing onSelectPlan={onSelectPlan} />
      </main>
      <Footer />
    </div>
  );
};