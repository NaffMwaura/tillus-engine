import React from 'react';
import { Navbar } from '../components/landing/Navbar';
import { Features } from '../components/landing/Features';
import { Footer } from '../components/landing/Footer';

export const ModulesPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#030812] text-slate-100">
      <Navbar />
      <main className="py-8">
        <Features />
      </main>
      <Footer />
    </div>
  );
};