// src/pages/Landing.tsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
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
  const navigate = useNavigate();

  const handleLogin = () => {
    if (onLoginClick) onLoginClick();
    else navigate('/login');
  };

  const handleGetStarted = () => {
    if (onGetStartedClick) {
      onGetStartedClick();
    } else {
      navigate('/demo');
    }
  };

  const handlePlanSelection = (planName: string) => {
    if (onSelectPlan) {
      onSelectPlan(planName);
    } else {
      navigate(`/login?plan=${encodeURIComponent(planName)}`);
    }
  };

  return (
    <div className="min-h-screen bg-[#030812] text-slate-100 selection:bg-cyan-500 selection:text-slate-950">
      <Navbar onLoginClick={handleLogin} onGetStartedClick={handleGetStarted} />
      <main>
        <Hero onGetStartedClick={handleGetStarted} />
        <ProblemSolution />
        <HowItWorks />
        <Features />
        <Pricing onSelectPlan={handlePlanSelection} />
      </main>
      <Footer />
    </div>
  );
};