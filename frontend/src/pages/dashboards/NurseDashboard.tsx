// src/pages/dashboards/NurseDashboard.tsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import {  HeartPulse, Unlock, LogOut, Activity, UserCheck } from 'lucide-react';

export const NurseDashboard: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#030812] text-slate-100">
      
      {/* Navbar Header */}
      <header className="sticky top-0 z-40 flex items-center justify-between border-b border-emerald-900/30 bg-[#030812]/90 px-6 py-3 backdrop-blur-md">
        <div className="flex items-center gap-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-400 ring-1 ring-emerald-500/30">
            <HeartPulse className="h-5 w-5" />
          </div>
          <div>
            <span className="text-base font-black text-white">TILLUS CARE CENTER</span>
            <span className="ml-2 text-xs text-emerald-400 font-bold">• ER NURSE WORKSPACE</span>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-950/40 px-3 py-1 text-xs text-emerald-300">
            <UserCheck className="h-3.5 w-3.5 text-emerald-400" />
            <span>Nurse Station Bay 02</span>
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

      {/* Main Content */}
      <main className="p-6 max-w-7xl mx-auto space-y-6">
        
        {/* Live Vitals & Dispensing Drawer Tracker */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Live Patient Telemetry */}
          <div className="rounded-2xl border border-slate-800 bg-slate-950 p-6 backdrop-blur-xl">
            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <h3 className="text-sm font-bold text-white flex items-center gap-2">
                <Activity className="h-4 w-4 text-emerald-400 animate-pulse" /> Live Patient Vitals (Bed 01)
              </h3>
              <span className="text-xs text-emerald-400 font-medium">Streaming Live</span>
            </div>

            <div className="grid grid-cols-2 gap-4 mt-4">
              <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-4">
                <span className="text-xs text-slate-400">Blood Pressure</span>
                <p className="text-2xl font-black text-red-400">164/96 <span className="text-xs text-slate-500 font-normal">mmHg</span></p>
                <p className="text-[10px] text-amber-400 mt-1">Elevated • Target &lt; 185/110</p>
              </div>

              <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-4">
                <span className="text-xs text-slate-400">Heart Rate</span>
                <p className="text-2xl font-black text-emerald-400">92 <span className="text-xs text-slate-500 font-normal">bpm</span></p>
                <p className="text-[10px] text-emerald-400 mt-1">Normal Sinus Rhythm</p>
              </div>
            </div>
          </div>

          {/* Cabinet Dispense Signal */}
          <div className="rounded-2xl border border-emerald-500/30 bg-slate-950 p-6 backdrop-blur-xl shadow-[0_0_20px_rgba(16,185,129,0.1)]">
            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <h3 className="text-sm font-bold text-white flex items-center gap-2">
                <Unlock className="h-4 w-4 text-emerald-400" /> Pyxis Cabinet Status
              </h3>
              <span className="rounded-full bg-emerald-500/20 px-2.5 py-0.5 text-[10px] font-bold text-emerald-400">DRAWER UNLOCKED</span>
            </div>

            <div className="mt-4 space-y-3">
              <div className="rounded-xl border border-emerald-500/20 bg-emerald-950/20 p-4">
                <p className="text-xs font-bold text-white">Medication Ready for Patient John Mwangi</p>
                <p className="text-lg font-black text-emerald-400 mt-1">Tenecteplase 20.5 mg Bolus</p>
                <p className="text-[11px] text-slate-400 mt-1">Authorized by Dr. Administrator at 16:15:20</p>
              </div>
              <button className="w-full py-2.5 bg-emerald-500 text-slate-950 font-bold rounded-xl text-xs hover:bg-emerald-400">
                Confirm Drug Retrieval & Administration
              </button>
            </div>
          </div>

        </div>

      </main>
    </div>
  );
};