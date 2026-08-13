import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Brain, ArrowLeft, ShieldAlert, Home } from 'lucide-react';

export const NotFoundPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-[#030812] px-4 text-center text-slate-100">
      {/* Ambient Glows */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/10 blur-[140px]" />
      <div className="pointer-events-none absolute left-1/3 top-1/3 -z-10 h-[300px] w-[300px] rounded-full bg-blue-600/10 blur-[100px]" />

      <div className="w-full max-w-md rounded-2xl border border-cyan-500/30 bg-slate-950/80 p-8 shadow-[0_0_50px_rgba(0,186,255,0.15)] backdrop-blur-xl">
        {/* Glowing Brain Icon */}
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-400 text-slate-950 shadow-[0_0_25px_rgba(0,210,255,0.4)]">
          <Brain className="h-9 w-9 text-[#030812]" />
        </div>

        {/* Status Code */}
        <div className="mt-6 flex items-center justify-center gap-2">
          <ShieldAlert className="h-5 w-5 text-amber-400" />
          <span className="text-4xl font-black tracking-widest text-white">404</span>
        </div>

        <h1 className="mt-2 text-xl font-bold text-white">Clinical Route Not Found</h1>
        
        <p className="mt-3 text-xs leading-relaxed text-slate-400">
          The endpoint or workspace path you are attempting to access does not exist within the TILLUS Stroke Orchestration Engine.
        </p>

        {/* Action Buttons */}
        <div className="mt-8 flex flex-col gap-3">
          <button
            onClick={() => navigate('/')}
            className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-700 via-blue-600 to-cyan-500 py-3 text-sm font-bold text-white shadow-[0_0_20px_rgba(0,186,255,0.3)] transition-all hover:from-blue-600 hover:to-cyan-400 active:scale-95"
          >
            <Home className="h-4 w-4" />
            <span>Return to Landing Page</span>
          </button>

          <button
            onClick={() => navigate('/login')}
            className="flex w-full items-center justify-center gap-2 rounded-xl border border-slate-800 bg-slate-900/60 py-2.5 text-xs font-semibold text-slate-300 transition-colors hover:bg-slate-800 hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Go to Portal Login</span>
          </button>
        </div>

        {/* Footer Identifier */}
        <div className="mt-6 border-t border-slate-800/80 pt-4 text-[10px] font-mono text-slate-500">
          ERR_ROUTE_UNDEFINED • TILLUS CORE v2.4
        </div>
      </div>
    </div>
  );
};