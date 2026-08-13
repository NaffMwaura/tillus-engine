// src/pages/dashboards/DoctorDashboard.tsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Brain, Stethoscope,  CheckCircle2, LogOut, Syringe, } from 'lucide-react';

export const DoctorDashboard: React.FC = () => {
  const navigate = useNavigate();
  const [isSigned, setIsSigned] = useState(false);

  return (
    <div className="min-h-screen bg-[#030812] text-slate-100">
      
      {/* Navbar Header */}
      <header className="sticky top-0 z-40 flex items-center justify-between border-b border-cyan-900/30 bg-[#030812]/90 px-6 py-3 backdrop-blur-md">
        <div className="flex items-center gap-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-cyan-500/10 text-cyan-400 ring-1 ring-cyan-500/30">
            <Brain className="h-5 w-5" />
          </div>
          <div>
            <span className="text-base font-black text-white">TILLUS COMMAND CENTER</span>
            <span className="ml-2 text-xs text-cyan-400 font-bold">• NEUROLOGIST WORKSPACE</span>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-950/40 px-3 py-1 text-xs text-cyan-300">
            <Stethoscope className="h-3.5 w-3.5 text-cyan-400" />
            <span>Dr. Administrator (Attending Neurologist)</span>
          </div>
          <button
            onClick={() => navigate('/login')}
            className="flex items-center gap-1.5 text-xs text-slate-400 hover:text-red-400 transition-colors"
          >
            <LogOut className="h-4 w-4" />
            <span>Sign Out</span>
          </button>
        </div>
      </header>

      {/* Main Workspace */}
      <main className="p-6 max-w-7xl mx-auto space-y-6">
        
        {/* Active Patient Card Banner */}
        <div className="rounded-2xl border border-red-500/30 bg-slate-950 p-6 backdrop-blur-xl shadow-[0_0_30px_rgba(239,68,68,0.1)]">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800 pb-4">
            <div className="flex items-center gap-3">
              <span className="flex h-3 w-3 rounded-full bg-red-500 animate-ping" />
              <div>
                <span className="text-xs font-bold text-red-400 uppercase tracking-widest">CRITICAL STROKE ALERT</span>
                <h2 className="text-2xl font-black text-white">John Mwangi (67Y, Male)</h2>
                <p className="text-xs text-slate-400">MRN: KNH-2026-007891 • Weight: 82 kg • Arrival: 16:15</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="rounded-xl border border-slate-800 bg-slate-900/80 p-3 text-right">
                <span className="text-[10px] text-slate-400 block">D2N ELAPSED TIMER</span>
                <span className="text-2xl font-black text-cyan-400">14m 25s</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
            
            {/* CT AI Analysis Box */}
            <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-4">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-bold text-cyan-400">AI RADIOLOGY ANALYSIS</span>
                <span className="text-[10px] bg-cyan-950 text-cyan-300 px-2 py-0.5 rounded border border-cyan-800">98.2% CONFIDENCE</span>
              </div>
              <p className="text-lg font-bold text-white">Right MCA M1 LVO Detected</p>
              <p className="text-xs text-slate-400 mt-1">ASPECTS Score: 8/10 • Hemorrhage: Not Detected</p>
            </div>

            {/* Safety Checks Box */}
            <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-4">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-bold text-emerald-400">AUTOMATED SAFETY SCREENING</span>
                <span className="text-[10px] bg-emerald-950 text-emerald-300 px-2 py-0.5 rounded border border-emerald-800">4/4 PASSED</span>
              </div>
              <ul className="space-y-1 text-xs text-slate-300">
                <li className="flex items-center gap-1.5"><CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" /> No active anticoagulants</li>
                <li className="flex items-center gap-1.5"><CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" /> INR 1.1 (Within range)</li>
                <li className="flex items-center gap-1.5"><CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" /> Platelets: 240,000 /µL</li>
              </ul>
            </div>

            {/* Calculated Dose & Order Sign */}
            <div className="rounded-xl border border-cyan-500/40 bg-gradient-to-br from-cyan-950/40 to-blue-950/40 p-4 flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold text-white flex items-center gap-1.5">
                  <Syringe className="h-4 w-4 text-cyan-400" /> Recommended Thrombolytic Dose
                </span>
                <p className="text-2xl font-black text-cyan-400 mt-2">Tenecteplase 20.5 mg</p>
                <p className="text-[11px] text-slate-400">Formulated for 82 kg (0.25 mg/kg IV IV bolus)</p>
              </div>

              <button
                onClick={() => setIsSigned(true)}
                disabled={isSigned}
                className={`mt-4 w-full py-2.5 rounded-xl font-bold text-xs transition-all ${
                  isSigned 
                    ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40' 
                    : 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-[0_0_15px_rgba(0,210,255,0.4)] hover:from-blue-500 hover:to-cyan-400'
                }`}
              >
                {isSigned ? '✓ ORDER SIGNED & DISPATCHED TO EHR' : 'SIGN & DISPATCH MEDICATION ORDER'}
              </button>
            </div>

          </div>
        </div>

      </main>
    </div>
  );
};