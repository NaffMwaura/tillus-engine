// src/pages/dashboards/ITAdminDashboard.tsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import {  Server,  History, LogOut, Cpu,  CheckCircle2 } from 'lucide-react';

export const ITAdminDashboard: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#030812] text-slate-100">
      
      {/* Navbar Header */}
      <header className="sticky top-0 z-40 flex items-center justify-between border-b border-purple-900/30 bg-[#030812]/90 px-6 py-3 backdrop-blur-md">
        <div className="flex items-center gap-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-purple-500/10 text-purple-400 ring-1 ring-purple-500/30">
            <Server className="h-5 w-5" />
          </div>
          <div>
            <span className="text-base font-black text-white">TILLUS ADMIN PORTAL</span>
            <span className="ml-2 text-xs text-purple-400 font-bold">• IT & INTEGRATIONS</span>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 rounded-full border border-purple-500/30 bg-purple-950/40 px-3 py-1 text-xs text-purple-300">
            <Cpu className="h-3.5 w-3.5 text-purple-400" />
            <span>Kenyatta National Hospital Node</span>
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
        
        {/* Integrations Health Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="rounded-xl border border-slate-800 bg-slate-950 p-4">
            <span className="text-xs text-slate-400">Epic EHR FHIR API</span>
            <p className="text-lg font-bold text-emerald-400 flex items-center gap-1.5 mt-1">
              <CheckCircle2 className="h-4 w-4" /> Connected
            </p>
          </div>
          <div className="rounded-xl border border-slate-800 bg-slate-950 p-4">
            <span className="text-xs text-slate-400">CT PACS DICOM Router</span>
            <p className="text-lg font-bold text-emerald-400 flex items-center gap-1.5 mt-1">
              <CheckCircle2 className="h-4 w-4" /> Connected
            </p>
          </div>
          <div className="rounded-xl border border-slate-800 bg-slate-950 p-4">
            <span className="text-xs text-slate-400">Stroke AI Webhook Ingestion</span>
            <p className="text-lg font-bold text-emerald-400 flex items-center gap-1.5 mt-1">
              <CheckCircle2 className="h-4 w-4" /> Listening
            </p>
          </div>
          <div className="rounded-xl border border-slate-800 bg-slate-950 p-4">
            <span className="text-xs text-slate-400">Pyxis Cabinet Controller</span>
            <p className="text-lg font-bold text-emerald-400 flex items-center gap-1.5 mt-1">
              <CheckCircle2 className="h-4 w-4" /> Active
            </p>
          </div>
        </div>

        {/* Audit Logs Table */}
        <div className="rounded-2xl border border-slate-800 bg-slate-950 p-6 backdrop-blur-xl">
          <div className="flex items-center justify-between border-b border-slate-800 pb-4">
            <h3 className="text-sm font-bold text-white flex items-center gap-2">
              <History className="h-4 w-4 text-purple-400" /> Immutable Audit Ledger Log
            </h3>
            <span className="text-xs text-purple-400 font-medium">HIPAA Compliant Record</span>
          </div>

          <div className="mt-4 space-y-2 text-xs">
            <div className="flex justify-between p-3 rounded-lg bg-slate-900/60 border border-slate-800 text-slate-300">
              <span>16:15:20 — Physician Signed Medication Order (Dr. Administrator)</span>
              <span className="text-slate-500 font-mono">HASH: 8f9a2b...</span>
            </div>
            <div className="flex justify-between p-3 rounded-lg bg-slate-900/60 border border-slate-800 text-slate-300">
              <span>16:14:10 — Automated Safety Checks Passed (100% Match)</span>
              <span className="text-slate-500 font-mono">HASH: 3c4d5e...</span>
            </div>
            <div className="flex justify-between p-3 rounded-lg bg-slate-900/60 border border-slate-800 text-slate-300">
              <span>16:13:02 — Stroke AI LVO Webhook Trigger Received</span>
              <span className="text-slate-500 font-mono">HASH: 11a22b...</span>
            </div>
          </div>
        </div>

      </main>
    </div>
  );
};