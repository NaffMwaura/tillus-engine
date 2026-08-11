import React, { useState } from 'react';
import { ShieldCheck, Menu, X, Brain,  } from 'lucide-react';

interface NavbarProps {
  onLoginClick?: () => void;
  onGetStartedClick?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onLoginClick, onGetStartedClick }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Smooth scroll handler for anchor links
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    
    if (targetId === 'top') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-cyan-900/30 bg-[#030812]/90 backdrop-blur-md transition-all duration-300">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2.5 sm:px-6 lg:px-8">
        
        {/* Brand Logo & Typography (Replaces image with vector/text logo) */}
        <div className="flex items-center gap-3">
          <a 
            href="#" 
            onClick={(e) => handleNavClick(e, 'top')}
            className="flex items-center gap-2.5 group focus:outline-none"
          >
            {/* Glowing Icon Badge */}
            <div className="relative flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 via-blue-500 to-cyan-400 p-0.5 shadow-[0_0_15px_rgba(0,210,255,0.3)] transition-transform duration-300 group-hover:scale-105">
              <div className="flex h-full w-full items-center justify-center rounded-[10px] bg-[#030812]">
                <Brain className="h-5 w-5 text-cyan-400 transition-colors group-hover:text-cyan-300" />
              </div>
            </div>

            {/* Logo Text */}
            <div className="flex flex-col">
              <div className="flex items-center gap-1">
                <span className="text-xl font-black tracking-wider text-white transition-colors group-hover:text-cyan-300">
                  TILLUS
                </span>
                <span className="text-[10px] font-bold text-cyan-400">®</span>
              </div>
              <span className="text-[9px] font-extrabold uppercase tracking-widest text-slate-400 -mt-1">
                Stroke Engine
              </span>
            </div>
          </a>
        </div>

        {/* Live System Status Badge */}
        <div className="hidden items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-950/40 px-3 py-1 text-xs text-cyan-300 md:flex shadow-[0_0_15px_rgba(0,186,255,0.15)]">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-75"></span>
            <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-400"></span>
          </span>
          <ShieldCheck className="h-3.5 w-3.5 text-cyan-400" />
          <span className="font-medium tracking-wide text-[11px]">SYSTEM OPERATIONAL • HIPAA COMPLIANT</span>
        </div>

        {/* Desktop Navigation Links with Smooth Hover & Transition */}
        <nav className="hidden items-center gap-8 md:flex">
          <a 
            href="#problem" 
            onClick={(e) => handleNavClick(e, 'problem')}
            className="text-sm font-medium text-slate-300 transition-all duration-200 hover:text-cyan-400 hover:translate-y-[-1px]"
          >
            Workflow
          </a>
          <a 
            href="#features" 
            onClick={(e) => handleNavClick(e, 'features')}
            className="text-sm font-medium text-slate-300 transition-all duration-200 hover:text-cyan-400 hover:translate-y-[-1px]"
          >
            Modules
          </a>
          <a 
            href="#pricing" 
            onClick={(e) => handleNavClick(e, 'pricing')}
            className="text-sm font-medium text-slate-300 transition-all duration-200 hover:text-cyan-400 hover:translate-y-[-1px]"
          >
            Pricing
          </a>
        </nav>

        {/* Action Buttons */}
        <div className="hidden items-center gap-4 md:flex">
          <button
            onClick={onLoginClick}
            className="text-sm font-medium text-slate-300 transition-colors hover:text-white"
          >
            Sign In
          </button>
          <button
            onClick={onGetStartedClick}
            className="rounded-lg bg-gradient-to-r from-blue-700 via-blue-600 to-cyan-500 px-4 py-2 text-sm font-semibold text-white shadow-[0_0_20px_rgba(0,186,255,0.3)] transition-all duration-300 hover:from-blue-600 hover:to-cyan-400 hover:shadow-[0_0_25px_rgba(0,186,255,0.5)] active:scale-95 focus:outline-none focus:ring-2 focus:ring-cyan-400"
          >
            Request Access
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="text-slate-400 transition-colors hover:text-white md:hidden"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Animated Mobile Drawer */}
      <div 
        className={`overflow-hidden transition-all duration-300 ease-in-out md:hidden ${
          mobileMenuOpen ? 'max-h-80 opacity-100 border-b border-cyan-900/30' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-[#030812] px-4 pb-6 pt-2">
          <nav className="flex flex-col gap-4">
            <a
              href="#problem"
              onClick={(e) => handleNavClick(e, 'problem')}
              className="text-sm font-medium text-slate-300 transition-colors hover:text-cyan-400"
            >
              Workflow
            </a>
            <a
              href="#features"
              onClick={(e) => handleNavClick(e, 'features')}
              className="text-sm font-medium text-slate-300 transition-colors hover:text-cyan-400"
            >
              Modules
            </a>
            <a
              href="#pricing"
              onClick={(e) => handleNavClick(e, 'pricing')}
              className="text-sm font-medium text-slate-300 transition-colors hover:text-cyan-400"
            >
              Pricing
            </a>
            <div className="mt-2 flex flex-col gap-3 border-t border-slate-800 pt-4">
              <button
                onClick={() => { setMobileMenuOpen(false); onLoginClick?.(); }}
                className="w-full rounded-lg border border-slate-700 py-2 text-center text-sm font-medium text-slate-300 transition-colors hover:bg-slate-900"
              >
                Sign In
              </button>
              <button
                onClick={() => { setMobileMenuOpen(false); onGetStartedClick?.(); }}
                className="w-full rounded-lg bg-gradient-to-r from-blue-700 to-cyan-500 py-2 text-center text-sm font-semibold text-white transition-all hover:from-blue-600 hover:to-cyan-400"
              >
                Request Access
              </button>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};