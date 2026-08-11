import React from 'react';
import { 
  Tv, 
  ShieldCheck, 
  Calculator, 
  History,  
  Layers,  
  CheckCircle2, 
  Lock, 
  FileCheck2,
  BarChart3
} from 'lucide-react';

export const Features: React.FC = () => {
  return (
    <section id="features" className="relative overflow-hidden bg-[#030812] py-20 lg:py-28 border-t border-slate-800/60">
      {/* Background Lighting */}
      <div className="pointer-events-none absolute right-1/4 top-1/3 -z-10 h-[500px] w-[500px] rounded-full bg-blue-600/10 blur-[130px]" />
      <div className="pointer-events-none absolute left-10 bottom-10 -z-10 h-[400px] w-[400px] rounded-full bg-cyan-500/10 blur-[110px]" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-950/40 px-3.5 py-1.5 text-xs font-semibold text-cyan-300">
            <Layers className="h-3.5 w-3.5 text-cyan-400" />
            <span>MODULAR PLATFORM ARCHITECTURE</span>
          </div>
          <h2 className="mt-4 text-3xl font-black tracking-tight text-white sm:text-4xl lg:text-5xl">
            Engineered for speed, safety, and{' '}
            <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-cyan-400 bg-clip-text text-transparent">
              seamless integration
            </span>
          </h2>
          <p className="mt-4 text-base text-slate-400 sm:text-lg">
            TILLUS brings dedicated clinical modules together into a unified Progressive Web App, keeping every stakeholder informed and in control.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="mt-16 grid grid-cols-1 gap-6 lg:grid-cols-12">
          
          {/* Module 1: Stroke Command Center (Large 8-col card) */}
          <div className="group relative overflow-hidden rounded-2xl border border-cyan-500/30 bg-slate-950/80 p-6 sm:p-8 backdrop-blur-xl lg:col-span-8 shadow-[0_0_30px_rgba(0,186,255,0.05)] hover:border-cyan-500/60 transition-all duration-300">
            <div className="flex items-center justify-between">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-400 ring-1 ring-cyan-500/30">
                <Tv className="h-6 w-6" />
              </div>
              <span className="rounded-full border border-cyan-500/30 bg-cyan-950/60 px-3 py-1 text-xs font-bold text-cyan-300">
                MODULE 01
              </span>
            </div>

            <h3 className="mt-6 text-xl font-bold text-white sm:text-2xl">Stroke Command Center Dashboard</h3>
            <p className="mt-2 text-sm text-slate-300 leading-relaxed max-w-2xl">
              High-density, real-time visual workstation providing a centralized live stroke queue, Door-to-Needle countdown timers, streaming vitals telemetry, and DICOM brain CT slice viewers.
            </p>

            <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4 border-t border-slate-800/80">
              <div className="flex items-center gap-2 text-xs text-slate-300">
                <CheckCircle2 className="h-4 w-4 text-cyan-400 shrink-0" />
                <span>Live Active Case Queue</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-300">
                <CheckCircle2 className="h-4 w-4 text-cyan-400 shrink-0" />
                <span>DICOM Image Viewport</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-300">
                <CheckCircle2 className="h-4 w-4 text-cyan-400 shrink-0" />
                <span>Telemetry Telemetry Feed</span>
              </div>
            </div>
          </div>

          {/* Module 2: Safety & Contraindication Engine (4-col card) */}
          <div className="group relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-950/80 p-6 sm:p-8 backdrop-blur-xl lg:col-span-4 hover:border-cyan-500/40 transition-all duration-300">
            <div className="flex items-center justify-between">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-400 ring-1 ring-emerald-500/30">
                <ShieldCheck className="h-6 w-6" />
              </div>
              <span className="rounded-full border border-slate-800 bg-slate-900 px-3 py-1 text-xs font-bold text-slate-400">
                MODULE 02
              </span>
            </div>

            <h3 className="mt-6 text-xl font-bold text-white">Clinical Safety Engine</h3>
            <p className="mt-2 text-sm text-slate-300 leading-relaxed">
              Automated evaluation of EHR labs, active blood thinners, surgical history, and BP thresholds to flag contraindications instantly.
            </p>

            <div className="mt-6 space-y-2 pt-4 border-t border-slate-800/80 text-xs text-slate-300">
              <div className="flex items-center justify-between">
                <span>Allergy & Anticoagulation</span>
                <span className="text-emerald-400 font-bold">Passed</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Hemorrhage Verification</span>
                <span className="text-emerald-400 font-bold">Clear</span>
              </div>
            </div>
          </div>

          {/* Module 3: Protocol Dose Calculator (4-col card) */}
          <div className="group relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-950/80 p-6 sm:p-8 backdrop-blur-xl lg:col-span-4 hover:border-cyan-500/40 transition-all duration-300">
            <div className="flex items-center justify-between">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400 ring-1 ring-blue-500/30">
                <Calculator className="h-6 w-6" />
              </div>
              <span className="rounded-full border border-slate-800 bg-slate-900 px-3 py-1 text-xs font-bold text-slate-400">
                MODULE 03
              </span>
            </div>

            <h3 className="mt-6 text-xl font-bold text-white">Weight-Based Dose Engine</h3>
            <p className="mt-2 text-sm text-slate-300 leading-relaxed">
              Configurable clinical algorithms automatically calculate bolus and infusion dosages for thrombolytics (Tenecteplase / Alteplase) based on verified patient weight.
            </p>

            <div className="mt-6 rounded-xl border border-blue-500/20 bg-blue-950/30 p-3 text-xs text-slate-300">
              <div className="flex items-center justify-between font-bold text-white">
                <span>Tenecteplase (TNK)</span>
                <span className="text-cyan-400">0.25 mg/kg</span>
              </div>
              <p className="mt-1 text-[11px] text-slate-400">Max dose cap enforced automatically at 25mg.</p>
            </div>
          </div>

          {/* Module 4: Audit & EHR Integration Service (8-col card) */}
          <div className="group relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-950/80 p-6 sm:p-8 backdrop-blur-xl lg:col-span-8 hover:border-cyan-500/40 transition-all duration-300">
            <div className="flex items-center justify-between">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-500/10 text-purple-400 ring-1 ring-purple-500/30">
                <History className="h-6 w-6" />
              </div>
              <span className="rounded-full border border-slate-800 bg-slate-900 px-3 py-1 text-xs font-bold text-slate-400">
                MODULE 04
              </span>
            </div>

            <h3 className="mt-6 text-xl font-bold text-white sm:text-2xl">Cryptographic Audit Trail & EHR Gateway</h3>
            <p className="mt-2 text-sm text-slate-300 leading-relaxed max-w-2xl">
              Every system boundary transition—from AI alert ingestion to physician e-signature and dispensing cabinet release—is cryptographically recorded with millisecond precision for compliance and quality improvement.
            </p>

            <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4 border-t border-slate-800/80 text-xs">
              <div className="flex items-center gap-2 text-slate-300">
                <Lock className="h-4 w-4 text-purple-400 shrink-0" />
                <span>FHIR R4 / HL7 v2 Compliant</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <FileCheck2 className="h-4 w-4 text-purple-400 shrink-0" />
                <span>100% Traceable Event Logs</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <BarChart3 className="h-4 w-4 text-purple-400 shrink-0" />
                <span>D2N Performance Analytics</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};