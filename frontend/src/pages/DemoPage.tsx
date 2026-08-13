import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Navbar } from '../components/landing/Navbar';
import { Footer } from '../components/landing/Footer';
import { Brain, Play,  ArrowRight } from 'lucide-react';

export const DemoPage: React.FC = () => {
  const navigate = useNavigate();
  const [simStep, setSimStep] = useState(0);

  const steps = [
    { title: 'CT Scan Completed', desc: 'DICOM brain CT ingested automatically from PACS.', time: '00:00' },
    { title: 'AI LVO Alert Ingested', desc: 'Right MCA occlusion detected (98.2% confidence).', time: '00:45' },
    { title: 'Safety Criteria Verified', desc: 'EHR lab records checked; zero contraindications found.', time: '01:10' },
    { title: 'Dosage Formulated', desc: 'Tenecteplase 0.25 mg/kg calculated for 82kg patient.', time: '01:30' },
    { title: 'Physician E-Signature', desc: 'Order signed by attending neurologist.', time: '02:05' },
    { title: 'Pyxis Cabinet Unlocked', desc: 'Dispense signal delivered to ER nursing station.', time: '02:15' }
  ];

  return (
    <div className="min-h-screen bg-[#030812] text-slate-100">
      <Navbar />
      
      <main className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-950/40 px-3.5 py-1.5 text-xs font-semibold text-cyan-300">
            <Brain className="h-3.5 w-3.5 text-cyan-400" />
            <span>INTERACTIVE CLINICAL SIMULATION</span>
          </div>
          <h1 className="mt-4 text-3xl font-black text-white sm:text-5xl">
            Experience the <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-cyan-400 bg-clip-text text-transparent">TILLUS Engine</span> in Action
          </h1>
          <p className="mt-3 text-sm text-slate-400">
            Simulate a real-time acute stroke alert workflow from initial CT acquisition to automated cabinet release.
          </p>
        </div>

        {/* Interactive Simulation Console */}
        <div className="mt-12 rounded-2xl border border-cyan-500/30 bg-slate-950/80 p-6 sm:p-8 backdrop-blur-xl shadow-[0_0_50px_rgba(0,186,255,0.1)]">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-6">
            <div>
              <span className="text-xs font-bold text-cyan-400">SIMULATED PATIENT ID: #DEMO-2026-X</span>
              <h3 className="text-xl font-bold text-white">Acute Ischemic Stroke Workflow</h3>
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={() => setSimStep((prev) => (prev < steps.length ? prev + 1 : 0))}
                className="flex items-center gap-2 rounded-xl bg-cyan-500 px-4 py-2.5 text-xs font-bold text-slate-950 hover:bg-cyan-400 transition-all shadow-[0_0_15px_rgba(0,210,255,0.4)]"
              >
                <Play className="h-4 w-4 fill-current" />
                <span>{simStep === 0 ? 'Start Simulation' : simStep >= steps.length ? 'Restart Demo' : 'Advance Next Step'}</span>
              </button>
            </div>
          </div>

          {/* Stepper Grid */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
            {steps.map((step, idx) => (
              <div
                key={idx}
                className={`rounded-xl border p-4 transition-all duration-300 ${
                  idx < simStep
                    ? 'border-emerald-500/40 bg-emerald-950/20 text-slate-200'
                    : idx === simStep
                    ? 'border-cyan-400 bg-cyan-950/40 shadow-[0_0_20px_rgba(0,186,255,0.2)]'
                    : 'border-slate-800/80 bg-slate-900/30 text-slate-600'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold tracking-wider uppercase text-slate-400">STEP 0{idx + 1}</span>
                  <span className="text-xs font-mono font-bold text-cyan-400">{step.time}</span>
                </div>
                <h4 className="mt-2 text-sm font-bold text-white">{step.title}</h4>
                <p className="mt-1 text-xs text-slate-400 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 rounded-xl border border-slate-800 bg-slate-900/50 p-4 text-xs">
            <span className="text-slate-300">Ready to deploy TILLUS in your emergency center?</span>
            <button
              onClick={() => navigate('/login')}
              className="flex items-center gap-2 rounded-lg bg-gradient-to-r from-blue-600 to-cyan-500 px-4 py-2 font-bold text-white hover:from-blue-500 hover:to-cyan-400"
            >
              <span>Access Clinical Portal</span>
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};