import React from 'react';
import { Navbar } from '../components/landing/Navbar';
import { HowItWorks } from '../components/landing/HowItWorks';
import { ProblemSolution } from '../components/landing/ProblemSolution';
import { Footer } from '../components/landing/Footer';

export const WorkflowPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#030812] text-slate-100">
      <Navbar />
      <main className="py-8">
        <ProblemSolution />
        <HowItWorks />
      </main>
      <Footer />
    </div>
  );
};