import React from 'react';
import { Navbar } from '../components/landing/Navbar';
import { Pricing } from '../components/landing/Pricing';
import { Footer } from '../components/landing/Footer';
import { useNavigate } from 'react-router-dom';

export const PricingPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#030812] text-slate-100">
      <Navbar 
        onLoginClick={() => navigate('/login')} 
        onGetStartedClick={() => navigate('/pricing')} 
      />
      <main className="py-10">
        <Pricing onSelectPlan={(plan) => navigate(`/login?plan=${encodeURIComponent(plan)}`)} />
      </main>
      <Footer />
    </div>
  );
};