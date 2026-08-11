import React from 'react';
import { ShieldCheck, Lock, } from 'lucide-react';
import tillusLogo from '../../assets/logo.png'; // Ensure your logo file is placed in src/assets/

export const Footer: React.FC = () => {
  return (
    <footer className="relative overflow-hidden border-t border-cyan-900/30 bg-[#030812] pt-16 pb-12 text-slate-400">
      {/* Background Subtle Ambient Glow */}
      <div className="pointer-events-none absolute bottom-0 left-1/2 -z-10 h-[300px] w-[600px] -translate-x-1/2 rounded-full bg-cyan-600/5 blur-[120px]" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-5">
          
          {/* Brand & Mission Column (Spans 2 cols on lg) */}
          <div className="lg:col-span-2">
            <a href="#" className="inline-block">
              <img 
                src={tillusLogo} 
                alt="TILLUS Autonomous Stroke Engine Logo" 
                className="h-10 w-auto object-contain"
              />
            </a>
            
            <p className="mt-4 text-xs leading-relaxed text-slate-400 max-w-sm">
              TILLUS is an autonomous clinical orchestration engine connecting CT scanners, Stroke AI, EHRs, and dispensing cabinets to compress acute ischemic stroke decision windows.
            </p>

            {/* Badges */}
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <div className="flex items-center gap-1.5 rounded-lg border border-cyan-500/20 bg-cyan-950/30 px-3 py-1.5 text-[11px] font-bold text-cyan-300">
                <ShieldCheck className="h-3.5 w-3.5 text-cyan-400" />
                <span>HIPAA Compliant</span>
              </div>

              <div className="flex items-center gap-1.5 rounded-lg border border-slate-800 bg-slate-900/60 px-3 py-1.5 text-[11px] font-bold text-slate-300">
                <Lock className="h-3.5 w-3.5 text-emerald-400" />
                <span>256-bit Encryption</span>
              </div>
            </div>
          </div>

          {/* Navigation Column 1: Platform */}
          <div>
            <h4 className="text-xs font-black tracking-wider text-white uppercase">Platform</h4>
            <ul className="mt-4 space-y-2.5 text-xs">
              <li>
                <a href="#workflow" className="transition-colors hover:text-cyan-400">10-Step Pipeline</a>
              </li>
              <li>
                <a href="#features" className="transition-colors hover:text-cyan-400">Command Center</a>
              </li>
              <li>
                <a href="#features" className="transition-colors hover:text-cyan-400">Dose Calculator</a>
              </li>
              <li>
                <a href="#features" className="transition-colors hover:text-cyan-400">Clinical Safety Engine</a>
              </li>
              <li>
                <a href="#features" className="transition-colors hover:text-cyan-400">EHR Integration (FHIR)</a>
              </li>
            </ul>
          </div>

          {/* Navigation Column 2: Solutions */}
          <div>
            <h4 className="text-xs font-black tracking-wider text-white uppercase">Solutions</h4>
            <ul className="mt-4 space-y-2.5 text-xs">
              <li>
                <a href="#pricing" className="transition-colors hover:text-cyan-400">Freemium Sandbox</a>
              </li>
              <li>
                <a href="#pricing" className="transition-colors hover:text-cyan-400">Emergency Center Pro</a>
              </li>
              <li>
                <a href="#pricing" className="transition-colors hover:text-cyan-400">Hospital Networks</a>
              </li>
              <li>
                <a href="#pricing" className="transition-colors hover:text-cyan-400">KSh Local Invoicing</a>
              </li>
            </ul>
          </div>

          {/* Navigation Column 3: Trust & Compliance */}
          <div>
            <h4 className="text-xs font-black tracking-wider text-white uppercase">Compliance</h4>
            <ul className="mt-4 space-y-2.5 text-xs">
              <li>
                <a href="#" className="transition-colors hover:text-cyan-400">Security Architecture</a>
              </li>
              <li>
                <a href="#" className="transition-colors hover:text-cyan-400">Audit Trail Integrity</a>
              </li>
              <li>
                <a href="#" className="transition-colors hover:text-cyan-400">Privacy Policy</a>
              </li>
              <li>
                <a href="#" className="transition-colors hover:text-cyan-400">Terms of Service</a>
              </li>
            </ul>
          </div>

        </div>

        {/* Clinical Disclaimer Box */}
        <div className="mt-12 rounded-xl border border-slate-800 bg-slate-950/60 p-4 text-[11px] leading-relaxed text-slate-500">
          <strong className="text-slate-400">Medical Disclaimer:</strong> TILLUS is an autonomous clinical decision support and orchestration platform designed to assist licensed healthcare professionals. It does not replace professional clinical judgment, diagnostic verification, or physician order sign-off. All drug dosages and therapeutic decisions must be verified and authorized by a licensed attending physician according to hospital policy.
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-slate-800/80 pt-8 text-xs text-slate-500 sm:flex-row">
          <p>© 2026 TILLUS Engine Inc. All rights reserved.</p>
          <div className="flex items-center gap-1.5 text-[11px]">
            <span>Engineered with precision for acute stroke teams.</span>
          </div>
        </div>

      </div>
    </footer>
  );
};