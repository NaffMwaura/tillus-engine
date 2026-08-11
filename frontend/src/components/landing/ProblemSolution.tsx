import React from 'react';
import { 
  XCircle, 
  CheckCircle2, 
  Clock, 
  Zap, 
  AlertTriangle,
  Cpu
} from 'lucide-react';

export const ProblemSolution: React.FC = () => {
  return (
    <section id="problem" className="relative overflow-hidden bg-[#030812] py-20 lg:py-28 border-t border-slate-800/60">
      {/* Background Ambient Glow */}
      <div className="pointer-events-none absolute right-0 top-1/2 -z-10 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-cyan-500/5 blur-[120px]" />
      <div className="pointer-events-none absolute left-0 bottom-0 -z-10 h-[400px] w-[400px] rounded-full bg-blue-600/5 blur-[100px]" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-950/40 px-3.5 py-1.5 text-xs font-semibold text-cyan-300">
            <Clock className="h-3.5 w-3.5 text-cyan-400" />
            <span>THE DOOR-TO-NEEDLE GAP</span>
          </div>
          <h2 className="mt-4 text-3xl font-black tracking-tight text-white sm:text-4xl lg:text-5xl">
            Manual steps cost <span className="text-red-400">20 to 60 minutes</span>.
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-emerald-400 bg-clip-text text-transparent">
              TILLUS cuts it to under 20.
            </span>
          </h2>
          <p className="mt-4 text-base text-slate-400 sm:text-lg">
            During an acute ischemic stroke, every minute without treatment loses 1.9 million brain cells. 
            TILLUS replaces fragmented phone calls and manual data lookup with automated API orchestration.
          </p>
        </div>

        {/* Comparison Grid */}
        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-2">
          
          {/* Card 1: Traditional Workflow (The Problem) */}
          <div className="relative rounded-2xl border border-red-500/20 bg-slate-950/60 p-6 sm:p-8 backdrop-blur-md shadow-lg">
            <div className="flex items-center justify-between border-b border-red-500/20 pb-5">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-red-500/10 text-red-400 ring-1 ring-red-500/30">
                  <AlertTriangle className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">Traditional Hospital Workflow</h3>
                  <p className="text-xs text-red-400 font-medium">Manual • Fragmented • Delay-Prone</p>
                </div>
              </div>
              <span className="rounded-lg bg-red-500/10 px-3 py-1 text-xs font-bold text-red-400 ring-1 ring-red-500/30">
                20 – 60 MINS
              </span>
            </div>

            <ul className="mt-6 space-y-4">
              <li className="flex items-start gap-3 text-sm text-slate-300">
                <XCircle className="h-5 w-5 shrink-0 text-red-400 mt-0.5" />
                <div>
                  <strong className="text-white">Manual Scan Review & Phone Calls:</strong>
                  <p className="text-xs text-slate-400 mt-0.5">Staff manually wait for radiology reports and phone the neurologist on-call.</p>
                </div>
              </li>

              <li className="flex items-start gap-3 text-sm text-slate-300">
                <XCircle className="h-5 w-5 shrink-0 text-red-400 mt-0.5" />
                <div>
                  <strong className="text-white">Fragmented Chart Navigation:</strong>
                  <p className="text-xs text-slate-400 mt-0.5">Clinicians open the EHR, cross-reference lab results, and manually check allergy histories.</p>
                </div>
              </li>

              <li className="flex items-start gap-3 text-sm text-slate-300">
                <XCircle className="h-5 w-5 shrink-0 text-red-400 mt-0.5" />
                <div>
                  <strong className="text-white">Manual Dose Calculation & Order Entry:</strong>
                  <p className="text-xs text-slate-400 mt-0.5">Weight-based formulas are computed manually on paper and re-typed into order forms.</p>
                </div>
              </li>

              <li className="flex items-start gap-3 text-sm text-slate-300">
                <XCircle className="h-5 w-5 shrink-0 text-red-400 mt-0.5" />
                <div>
                  <strong className="text-white">Dispensing Cabinet Delays:</strong>
                  <p className="text-xs text-slate-400 mt-0.5">Orders sit in pharmacy review queues before dispensing drawers are manually unlocked.</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Card 2: TILLUS Orchestration (The Solution) */}
          <div className="relative rounded-2xl border border-cyan-500/40 bg-slate-950/80 p-6 sm:p-8 backdrop-blur-xl shadow-[0_0_40px_rgba(0,186,255,0.1)]">
            {/* Top Accent Line */}
            <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent" />

            <div className="flex items-center justify-between border-b border-cyan-500/20 pb-5">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-400 ring-1 ring-cyan-500/30">
                  <Zap className="h-5 w-5 animate-pulse" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">TILLUS Autonomous Engine</h3>
                  <p className="text-xs text-cyan-300 font-medium">Real-Time API Orchestration</p>
                </div>
              </div>
              <span className="rounded-lg bg-emerald-500/10 px-3 py-1 text-xs font-extrabold text-emerald-400 ring-1 ring-emerald-500/30">
                &lt; 20 MINS TARGET
              </span>
            </div>

            <ul className="mt-6 space-y-4">
              <li className="flex items-start gap-3 text-sm text-slate-300">
                <CheckCircle2 className="h-5 w-5 shrink-0 text-cyan-400 mt-0.5" />
                <div>
                  <strong className="text-white">Instant Webhook Trigger:</strong>
                  <p className="text-xs text-slate-400 mt-0.5">Stroke AI signals LVO detection instantly to TILLUS, bypassing phone tag completely.</p>
                </div>
              </li>

              <li className="flex items-start gap-3 text-sm text-slate-300">
                <CheckCircle2 className="h-5 w-5 shrink-0 text-cyan-400 mt-0.5" />
                <div>
                  <strong className="text-white">Automated FHIR Safety Checks:</strong>
                  <p className="text-xs text-slate-400 mt-0.5">Pulls weight, vitals, active blood thinners, and allergies from EHR in under 1 second.</p>
                </div>
              </li>

              <li className="flex items-start gap-3 text-sm text-slate-300">
                <CheckCircle2 className="h-5 w-5 shrink-0 text-cyan-400 mt-0.5" />
                <div>
                  <strong className="text-white">1-Tap Physician E-Signature:</strong>
                  <p className="text-xs text-slate-400 mt-0.5">Neurologist reviews a single structured card and approves pre-calculated doses in seconds.</p>
                </div>
              </li>

              <li className="flex items-start gap-3 text-sm text-slate-300">
                <CheckCircle2 className="h-5 w-5 shrink-0 text-cyan-400 mt-0.5" />
                <div>
                  <strong className="text-white">Automated Cabinet Release:</strong>
                  <p className="text-xs text-slate-400 mt-0.5">Signed order posts to EHR and unlocks medication cabinets (Pyxis/Omnicell) instantly.</p>
                </div>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Banner: Brain Cells Saved Statistic */}
        <div className="mt-12 rounded-2xl border border-cyan-500/30 bg-gradient-to-r from-blue-950/40 via-cyan-950/30 to-slate-950/60 p-6 sm:p-8 backdrop-blur-md">
          <div className="flex flex-col items-center justify-between gap-6 text-center md:flex-row md:text-left">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-cyan-500/10 text-cyan-400 ring-1 ring-cyan-500/30">
                <Cpu className="h-6 w-6" />
              </div>
              <div>
                <h4 className="text-base font-bold text-white sm:text-lg">TILLUS connect, not replace.</h4>
                <p className="text-xs text-slate-400 sm:text-sm">
                  It acts as a digital traffic controller—connecting CT, AI, EHR, Physician, and Dispensing Cabinet.
                </p>
              </div>
            </div>
            
            <div className="shrink-0 rounded-xl bg-slate-900/80 px-4 py-2 border border-slate-800">
              <span className="text-xs text-slate-400 block">Preserved per minute saved</span>
              <span className="text-lg font-black text-emerald-400">~1.9 Million Brain Cells</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};