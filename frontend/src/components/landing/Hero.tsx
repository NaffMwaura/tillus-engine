import React from 'react';
import { 
  Clock, 
  Zap, 
  ShieldAlert, 
  ArrowRight, 
  Play, 
  Brain, 
  CheckCircle2, 
  Activity,
  FileCheck2,
  Syringe
} from 'lucide-react';

interface HeroProps {
  onGetStartedClick?: () => void;
  onWatchDemoClick?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onGetStartedClick, onWatchDemoClick }) => {
  return (
    <section className="relative overflow-hidden bg-[#030812] pb-20 pt-12 md:pb-32 md:pt-20">
      {/* Background Gradient Orbs / Medical Glow Effects */}
      <div className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[600px] w-[800px] -translate-x-1/2 rounded-full bg-gradient-to-tr from-blue-900/20 via-cyan-600/15 to-transparent blur-[120px]" />
      <div className="pointer-events-none absolute -left-40 top-1/3 -z-10 h-[400px] w-[400px] rounded-full bg-cyan-500/10 blur-[100px]" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-8">
          
          {/* Left Column: Value Proposition & CTAs */}
          <div className="flex flex-col items-start lg:col-span-7">
            
            {/* Live System Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-950/50 px-3.5 py-1.5 text-xs font-semibold text-cyan-300 backdrop-blur-sm shadow-[0_0_15px_rgba(0,210,255,0.15)]">
              <Zap className="h-3.5 w-3.5 text-cyan-400 fill-cyan-400" />
              <span>AUTONOMOUS STROKE CARE ENGINE</span>
            </div>

            {/* Main Headline */}
            <h1 className="mt-6 text-4xl font-black tracking-tight text-white sm:text-5xl md:text-6xl lg:leading-[1.1]">
              Every minute counts when{' '}
              <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-cyan-400 bg-clip-text text-transparent">
                Time is Brain.
              </span>
            </h1>

            {/* Subheading */}
            <p className="mt-6 text-lg leading-relaxed text-slate-300 sm:text-xl">
              TILLUS connects CT scanners, Stroke AI, EHRs, and dispensing cabinets into one seamless pipeline. Automate safety checks, calculate exact drug doses, and slash Door-to-Needle times from 60 minutes down to under 20.
            </p>

            {/* Action Buttons */}
            <div className="mt-8 flex w-full flex-col gap-4 sm:w-auto sm:flex-row sm:items-center">
              <button
                onClick={onGetStartedClick}
                className="group flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-700 via-blue-600 to-cyan-500 px-6 py-3.5 text-base font-bold text-white shadow-[0_0_25px_rgba(0,186,255,0.4)] transition-all duration-300 hover:from-blue-600 hover:to-cyan-400 hover:shadow-[0_0_35px_rgba(0,186,255,0.6)] focus:outline-none focus:ring-2 focus:ring-cyan-400"
              >
                <span>Start Free Trial / Request Access</span>
                <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </button>

              <button
                onClick={onWatchDemoClick}
                className="flex items-center justify-center gap-2 rounded-xl border border-slate-700 bg-slate-900/80 px-6 py-3.5 text-base font-semibold text-slate-200 transition-all hover:border-cyan-500/50 hover:bg-slate-800 hover:text-white"
              >
                <Play className="h-4 w-4 text-cyan-400 fill-cyan-400" />
                <span>Watch Workflow Demo</span>
              </button>
            </div>

            {/* Metric Highlights Strip */}
            <div className="mt-12 grid w-full grid-cols-3 gap-4 border-t border-slate-800/80 pt-8">
              <div>
                <p className="text-2xl font-black text-cyan-400 sm:text-3xl">&lt; 20 min</p>
                <p className="mt-1 text-xs font-medium text-slate-400 sm:text-sm">Target Door-to-Needle</p>
              </div>
              <div>
                <p className="text-2xl font-black text-emerald-400 sm:text-3xl">100%</p>
                <p className="mt-1 text-xs font-medium text-slate-400 sm:text-sm">Automated Safety Checks</p>
              </div>
              <div>
                <p className="text-2xl font-black text-blue-400 sm:text-3xl">Zero</p>
                <p className="mt-1 text-xs font-medium text-slate-400 sm:text-sm">Manual Phone Delays</p>
              </div>
            </div>

          </div>

          {/* Right Column: Live Clinical Workspace Mock Card */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl border border-cyan-500/30 bg-slate-950/80 p-5 shadow-[0_0_50px_rgba(0,186,255,0.15)] backdrop-blur-xl">
              
              {/* Card Header */}
              <div className="flex items-center justify-between border-b border-slate-800/80 pb-4">
                <div className="flex items-center gap-2.5">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-red-500/10 text-red-400 ring-1 ring-red-500/30">
                    <ShieldAlert className="h-4 w-4 animate-pulse" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-white">LIVE STROKE ALERT</h3>
                    <p className="text-[11px] text-slate-400">MRN: KNH-2026-007891 • John Mwangi (67Y)</p>
                  </div>
                </div>
                <span className="rounded-full bg-red-500/20 px-2.5 py-0.5 text-[10px] font-bold tracking-wide text-red-400 ring-1 ring-red-500/40">
                  CRITICAL LVO
                </span>
              </div>

              {/* Live Timer & AI Verdict Row */}
              <div className="mt-4 grid grid-cols-2 gap-3">
                <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-3">
                  <div className="flex items-center gap-1.5 text-xs text-slate-400">
                    <Clock className="h-3.5 w-3.5 text-cyan-400" />
                    <span>D2N Elapsed</span>
                  </div>
                  <p className="mt-1 text-xl font-black text-cyan-400">14m 25s</p>
                  <p className="text-[10px] text-emerald-400">Target: &lt; 20 min</p>
                </div>

                <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-3">
                  <div className="flex items-center gap-1.5 text-xs text-slate-400">
                    <Brain className="h-3.5 w-3.5 text-blue-400" />
                    <span>AI Detection</span>
                  </div>
                  <p className="mt-1 text-sm font-bold text-white">Right MCA M1 LVO</p>
                  <p className="text-[10px] text-slate-400">Confidence: 98.2%</p>
                </div>
              </div>

              {/* Safety Checks Pipeline */}
              <div className="mt-4 rounded-xl border border-slate-800 bg-slate-900/40 p-3">
                <div className="mb-2 flex items-center justify-between text-xs font-semibold text-slate-300">
                  <span>Automated Safety Screening</span>
                  <span className="text-emerald-400">4 / 4 Passed</span>
                </div>
                <div className="space-y-1.5 text-xs">
                  <div className="flex items-center justify-between text-slate-300">
                    <span className="flex items-center gap-2">
                      <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" />
                      No Anticoagulants Detected
                    </span>
                    <span className="text-[10px] text-slate-500">EHR Check</span>
                  </div>
                  <div className="flex items-center justify-between text-slate-300">
                    <span className="flex items-center gap-2">
                      <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" />
                      No Recent Hemorrhage / Surgery
                    </span>
                    <span className="text-[10px] text-slate-500">CT Scan Clear</span>
                  </div>
                </div>
              </div>

              {/* Calculated Dose & Order Box */}
              <div className="mt-4 rounded-xl border border-cyan-500/30 bg-gradient-to-r from-cyan-950/40 to-blue-950/40 p-3.5">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Syringe className="h-4 w-4 text-cyan-400" />
                    <span className="text-xs font-bold text-white">Tenecteplase Recommended Dose</span>
                  </div>
                  <span className="text-xs font-black text-cyan-300">82 kg</span>
                </div>
                <div className="mt-2 flex items-baseline justify-between">
                  <p className="text-2xl font-extrabold text-cyan-400">20.5 mg <span className="text-xs font-normal text-slate-400">(0.25 mg/kg IV)</span></p>
                  <button className="rounded-lg bg-cyan-500 px-3 py-1.5 text-xs font-bold text-slate-950 transition-all hover:bg-cyan-400 shadow-[0_0_12px_rgba(0,210,255,0.4)]">
                    Approve & Dispense
                  </button>
                </div>
              </div>

              {/* Bottom Telemetry Status */}
              <div className="mt-4 flex items-center justify-between text-[11px] text-slate-400 border-t border-slate-800/60 pt-3">
                <div className="flex items-center gap-1.5">
                  <Activity className="h-3.5 w-3.5 text-emerald-400 animate-pulse" />
                  <span>Vitals: BP 164/96 | HR 92 bpm</span>
                </div>
                <div className="flex items-center gap-1">
                  <FileCheck2 className="h-3.5 w-3.5 text-blue-400" />
                  <span>EHR Sync Ready</span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};