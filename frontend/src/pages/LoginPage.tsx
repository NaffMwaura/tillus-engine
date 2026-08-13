// src/pages/LoginPage.tsx
import React, { useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { Brain, ArrowLeft, ShieldCheck, Eye, EyeOff, AlertCircle } from 'lucide-react';

export const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const selectedPlan = searchParams.get('plan') || 'Free Trial';

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleLoginSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    const cleanEmail = email.trim().toLowerCase();

    // 1. Password Length Check (Minimum 8 Characters)
    if (password.length < 8) {
      setErrorMessage('Password must be at least 8 characters long.');
      return;
    }

    // 2. Email Role Rule Check
    let targetRoute = '';
    if (cleanEmail.includes('doctor')) {
      targetRoute = '/dashboard/doctor';
    } else if (cleanEmail.includes('nurse')) {
      targetRoute = '/dashboard/nurse';
    } else if (cleanEmail.includes('it')) {
      targetRoute = '/dashboard/it';
    } else {
      setErrorMessage("Access Denied: Email must be a doctor, nurse or IT");
      return;
    }

    // 3. Simulated Authentication (Ready for Supabase integration)
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      navigate(targetRoute);
    }, 600);
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#030812] px-4 py-12 text-slate-100">
      <div className="w-full max-w-md rounded-2xl border border-cyan-500/30 bg-slate-950/90 p-8 shadow-[0_0_50px_rgba(0,186,255,0.15)] backdrop-blur-xl">
        
        {/* Back Link */}
        <button
          onClick={() => navigate('/')}
          className="flex items-center gap-2 text-xs font-semibold text-slate-400 transition-colors hover:text-cyan-400"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>Back to Landing</span>
        </button>

        {/* Header */}
        <div className="mt-6 flex flex-col items-center text-center">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-400 text-slate-950 shadow-[0_0_20px_rgba(0,210,255,0.4)]">
            <Brain className="h-7 w-7 text-[#030812]" />
          </div>
          <h1 className="mt-4 text-2xl font-black text-white">TILLUS Portal</h1>
          <p className="mt-1 text-xs text-slate-400">
            Selected Tier: <span className="font-bold text-cyan-400">{selectedPlan}</span>
          </p>
        </div>

        {/* Validation Error Alert */}
        {errorMessage && (
          <div className="mt-6 flex items-start gap-2.5 rounded-xl border border-red-500/40 bg-red-950/40 p-3.5 text-xs text-red-300">
            <AlertCircle className="h-4 w-4 shrink-0 text-red-400 mt-0.5" />
            <span>{errorMessage}</span>
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleLoginSubmit} className="mt-6 space-y-4">
          <div>
            <label className="block text-xs font-semibold text-slate-300">Hospital Email</label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="e.g. doctor.smith@hospital.org"
              className="mt-1.5 w-full rounded-xl border border-slate-800 bg-slate-900/80 px-4 py-2.5 text-sm text-white placeholder-slate-500 focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400"
            />
            <p className="mt-1 text-[10px] text-slate-500">Must include 'doctor', 'nurse', or 'it' to establish role.</p>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-300">Password</label>
            <div className="relative mt-1.5">
              <input
                type={showPassword ? 'text' : 'password'}
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Minimum 8 characters"
                className="w-full rounded-xl border border-slate-800 bg-slate-900/80 px-4 py-2.5 pr-10 text-sm text-white placeholder-slate-500 focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white"
                aria-label="Toggle password visibility"
              >
                {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
              </button>
            </div>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full rounded-xl bg-gradient-to-r from-blue-700 via-blue-600 to-cyan-500 py-3 text-sm font-bold text-white shadow-[0_0_20px_rgba(0,186,255,0.3)] transition-all hover:from-blue-600 hover:to-cyan-400 disabled:opacity-50"
          >
            {isLoading ? 'Authenticating...' : 'Sign In to Portal'}
          </button>
        </form>

        <div className="mt-8 flex items-center justify-center gap-2 border-t border-slate-800/80 pt-4 text-[11px] text-slate-500">
          <ShieldCheck className="h-3.5 w-3.5 text-emerald-400" />
          <span>Protected by HIPAA-compliant 256-bit encryption</span>
        </div>

      </div>
    </div>
  );
};