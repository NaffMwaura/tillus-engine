import React, { useState } from 'react';
import { 
  UserPlus, 
  Brain, 
  Fingerprint, 
  Database, 
  ShieldCheck, 
  Calculator, 
  FileSignature, 
  FileCheck, 
  Unlock, 
  History,
  Zap,
  ChevronRight,
} from 'lucide-react';

interface StepItem {
  num: string;
  title: string;
  subtitle: string;
  desc: string;
  icon: React.ElementType;
  badge: string;
  badgeColor: string;
}

export const HowItWorks: React.FC = () => {
  const [activeStepIndex, setActiveStepIndex] = useState<number>(1); // Default to Step 2 AI Detection

  const steps: StepItem[] = [
    {
      num: '01',
      title: 'Patient Arrival',
      subtitle: 'Emergency Triage',
      desc: 'Patient presents with sudden focal neurological deficits. Emergency team suspects stroke and sends patient for immediate non-contrast CT imaging.',
      icon: UserPlus,
      badge: 'Time 0:00',
      badgeColor: 'border-slate-700 bg-slate-900 text-slate-300'
    },
    {
      num: '02',
      title: 'AI Stroke Detection',
      subtitle: 'Imaging Inference',
      desc: 'Stroke AI analyzes CT DICOM slices within seconds, identifies Large Vessel Occlusion (LVO), calculates ASPECTS score, and fires a webhook to TILLUS.',
      icon: Brain,
      badge: '< 5 Seconds',
      badgeColor: 'border-red-500/30 bg-red-500/10 text-red-400'
    },
    {
      num: '03',
      title: 'Patient Resolution',
      subtitle: 'Identifier Matching',
      desc: 'TILLUS ingests the notification payload (Patient ID, Accession Number, Hospital MRN) to establish unambiguous patient matching.',
      icon: Fingerprint,
      badge: 'Instant',
      badgeColor: 'border-cyan-500/30 bg-cyan-950/50 text-cyan-300'
    },
    {
      num: '04',
      title: 'Retrieve EHR Record',
      subtitle: 'FHIR / HL7 Ingestion',
      desc: 'TILLUS queries hospital Electronic Health Records via secure FHIR APIs to pull demographics, weight, lab results, active blood thinners, and allergies.',
      icon: Database,
      badge: '< 1 Second',
      badgeColor: 'border-cyan-500/30 bg-cyan-950/50 text-cyan-300'
    },
    {
      num: '05',
      title: 'Automated Safety Checks',
      subtitle: 'Clinical Rules Engine',
      desc: 'Executes rule checks against clinical protocols: active anticoagulation, recent major surgery or bleeding, platelets, and uncontrolled hypertension.',
      icon: ShieldCheck,
      badge: '100% Automated',
      badgeColor: 'border-emerald-500/30 bg-emerald-500/10 text-emerald-400'
    },
    {
      num: '06',
      title: 'Dose Calculation',
      subtitle: 'Weight-Based Engine',
      desc: 'Applies exact dosing protocols (e.g., Tenecteplase 0.25 mg/kg max 25mg or Alteplase 0.9 mg/kg max 90mg) customized to verified weight.',
      icon: Calculator,
      badge: 'Precision Dose',
      badgeColor: 'border-cyan-500/30 bg-cyan-950/50 text-cyan-300'
    },
    {
      num: '07',
      title: 'Physician Sign-Off',
      subtitle: 'Structured Summary',
      desc: 'On-call neurologist receives high-priority alert, reviews structured summary card (AI findings + safety checks + dose), and signs electronically.',
      icon: FileSignature,
      badge: 'Human Oversight',
      badgeColor: 'border-blue-500/30 bg-blue-500/10 text-blue-400'
    },
    {
      num: '08',
      title: 'EHR Documentation',
      subtitle: 'Bidirectional Sync',
      desc: 'Upon electronic signature, TILLUS writes finalized medication order and diagnostic notes back to the hospital EHR automatically.',
      icon: FileCheck,
      badge: '< 2 Seconds',
      badgeColor: 'border-cyan-500/30 bg-cyan-950/50 text-cyan-300'
    },
    {
      num: '09',
      title: 'Medication Dispensing',
      subtitle: 'Cabinet Release',
      desc: 'Integrated medication management systems (Pyxis / Omnicell) receive verified order signal and immediately release cabinet drawer for nursing.',
      icon: Unlock,
      badge: 'Instant Unlock',
      badgeColor: 'border-emerald-500/30 bg-emerald-500/10 text-emerald-400'
    },
    {
      num: '10',
      title: 'Complete Audit Trail',
      subtitle: 'Cryptographic Log',
      desc: 'Every timestamped action—from AI trigger to drug release—is recorded in an immutable ledger for quality improvement and regulatory audit.',
      icon: History,
      badge: 'Fully Traceable',
      badgeColor: 'border-purple-500/30 bg-purple-500/10 text-purple-400'
    }
  ];

  const activeStep = steps[activeStepIndex];

  return (
    <section id="workflow" className="relative overflow-hidden bg-[#030812] py-20 lg:py-28 border-t border-slate-800/60">
      {/* Background Radial Glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-600/5 blur-[140px]" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-950/40 px-3.5 py-1.5 text-xs font-semibold text-cyan-300">
            <Zap className="h-3.5 w-3.5 text-cyan-400 fill-cyan-400" />
            <span>10-STEP ORCHESTRATION PIPELINE</span>
          </div>
          <h2 className="mt-4 text-3xl font-black tracking-tight text-white sm:text-4xl lg:text-5xl">
            How TILLUS eliminates delays{' '}
            <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-cyan-400 bg-clip-text text-transparent">
              end-to-end
            </span>
          </h2>
          <p className="mt-4 text-base text-slate-400 sm:text-lg">
            From raw CT scanner DICOM acquisition to medication cabinet release—every step is coordinated in real time.
          </p>
        </div>

        {/* Desktop Pipeline Interactive Step Bar */}
        <div className="mt-14 hidden lg:grid lg:grid-cols-10 gap-2 p-2 rounded-2xl border border-slate-800 bg-slate-950/80 backdrop-blur-xl">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            const isActive = idx === activeStepIndex;
            return (
              <button
                key={step.num}
                onClick={() => setActiveStepIndex(idx)}
                className={`flex flex-col items-center rounded-xl p-3 text-center transition-all duration-300 ${
                  isActive 
                    ? 'bg-gradient-to-b from-blue-900/60 to-cyan-950/80 border border-cyan-500/50 shadow-[0_0_20px_rgba(0,210,255,0.2)]' 
                    : 'hover:bg-slate-900/60 text-slate-400'
                }`}
              >
                <span className={`text-[10px] font-black tracking-wider ${isActive ? 'text-cyan-400' : 'text-slate-500'}`}>
                  STEP {step.num}
                </span>
                <div className={`mt-2 flex h-9 w-9 items-center justify-center rounded-lg ${
                  isActive ? 'bg-cyan-500 text-slate-950 ring-2 ring-cyan-400' : 'bg-slate-900 text-slate-300'
                }`}>
                  <Icon className="h-4 w-4" />
                </div>
                <span className={`mt-2 text-[11px] font-bold line-clamp-1 ${isActive ? 'text-white' : 'text-slate-400'}`}>
                  {step.title}
                </span>
              </button>
            );
          })}
        </div>

        {/* Selected Step Detailed Card (Interactive View) */}
        <div className="mt-8 hidden lg:block">
          <div className="relative rounded-2xl border border-cyan-500/30 bg-slate-950 p-8 shadow-[0_0_40px_rgba(0,210,255,0.1)]">
            <div className="grid grid-cols-12 gap-8 items-center">
              
              <div className="col-span-8">
                <div className="flex items-center gap-3">
                  <span className="text-3xl font-black text-cyan-400">Step {activeStep.num}</span>
                  <span className={`rounded-full border px-3 py-1 text-xs font-bold ${activeStep.badgeColor}`}>
                    {activeStep.badge}
                  </span>
                </div>

                <h3 className="mt-3 text-2xl font-bold text-white">{activeStep.title}</h3>
                <p className="text-sm font-semibold text-cyan-400/90 mt-0.5">{activeStep.subtitle}</p>
                <p className="mt-4 text-slate-300 text-base leading-relaxed">{activeStep.desc}</p>

                <div className="mt-6 flex items-center gap-4">
                  <button 
                    disabled={activeStepIndex === 0}
                    onClick={() => setActiveStepIndex((prev) => Math.max(0, prev - 1))}
                    className="rounded-lg border border-slate-800 px-4 py-2 text-xs font-semibold text-slate-300 disabled:opacity-40 hover:bg-slate-900"
                  >
                    Previous Step
                  </button>
                  <button 
                    disabled={activeStepIndex === steps.length - 1}
                    onClick={() => setActiveStepIndex((prev) => Math.min(steps.length - 1, prev + 1))}
                    className="flex items-center gap-1.5 rounded-lg bg-cyan-500 px-4 py-2 text-xs font-bold text-slate-950 disabled:opacity-40 hover:bg-cyan-400 shadow-[0_0_15px_rgba(0,210,255,0.3)]"
                  >
                    <span>Next Step</span>
                    <ChevronRight className="h-4 w-4" />
                  </button>
                </div>
              </div>

              <div className="col-span-4 flex justify-center">
                <div className="flex h-32 w-32 items-center justify-center rounded-3xl bg-gradient-to-br from-blue-900/40 to-cyan-500/20 text-cyan-400 ring-1 ring-cyan-500/40 shadow-[0_0_30px_rgba(0,210,255,0.2)]">
                  {React.createElement(activeStep.icon, { className: 'h-16 w-16' })}
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Mobile & Tablet Full Timeline Stack */}
        <div className="mt-12 space-y-4 lg:hidden">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div 
                key={step.num}
                className="rounded-xl border border-slate-800 bg-slate-950/80 p-5 backdrop-blur-md"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-cyan-500/10 text-cyan-400 ring-1 ring-cyan-500/30">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <span className="text-[10px] font-extrabold text-cyan-400 uppercase tracking-widest">
                        STEP {step.num}
                      </span>
                      <h4 className="text-base font-bold text-white">{step.title}</h4>
                    </div>
                  </div>
                  <span className={`rounded-full border px-2.5 py-0.5 text-[10px] font-bold ${step.badgeColor}`}>
                    {step.badge}
                  </span>
                </div>
                <p className="mt-3 text-xs text-slate-300 leading-relaxed">{step.desc}</p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};