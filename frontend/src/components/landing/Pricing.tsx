import React, { useState } from 'react';
import { 
  Check, 
  X,
  Building2,
  ArrowRight
} from 'lucide-react';

interface PricingTier {
  name: string;
  badge?: string;
  priceKsh: string;
  period: string;
  description: string;
  highlighted?: boolean;
  ctaText: string;
  ctaVariant: 'outline' | 'primary' | 'secondary';
  freemiumTag?: string;
  features: { text: string; included: boolean; note?: string }[];
}

export const Pricing: React.FC<{ onSelectPlan?: (planName: string) => void }> = ({ onSelectPlan }) => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('monthly');

  const tiers: PricingTier[] = [
    {
      name: 'Freemium / Trial',
      freemiumTag: 'Free Tier',
      priceKsh: 'KSh 0',
      period: 'forever',
      description: 'Ideal for individual clinicians, medical students, and ED teams testing manual tools and workflows.',
      ctaText: 'Start Free Sandbox',
      ctaVariant: 'outline',
      features: [
        { text: 'Manual Weight-Based Dose Calculator', included: true },
        { text: 'Static Mock Stroke Queue & Simulations', included: true },
        { text: 'Standard NIHSS & ASPECTS Reference Guides', included: true },
        { text: 'Single-User Clinical Dashboard', included: true },
        { text: 'Live AI Webhook Ingestion', included: false, note: 'Requires Pro' },
        { text: 'Bidirectional EHR Sync (FHIR / HL7)', included: false, note: 'Requires Pro' },
        { text: 'Automated Dispensing Cabinet Integration', included: false },
        { text: '24/7 Emergency Technical Support', included: false },
      ]
    },
    {
      name: 'Emergency Center Pro',
      badge: 'MOST POPULAR',
      priceKsh: billingCycle === 'annual' ? 'KSh 125,000' : 'KSh 150,000',
      period: 'per facility / month',
      description: 'Full autonomous orchestration for emergency clinics and stand-alone stroke centers.',
      highlighted: true,
      ctaText: 'Upgrade to Pro',
      ctaVariant: 'primary',
      features: [
        { text: 'All Freemium Features Included', included: true },
        { text: 'Real-Time Stroke AI Ingestion (Vis.ai / RapidAI)', included: true },
        { text: 'Automated Safety Screening Rules Engine', included: true },
        { text: 'Real-Time Door-to-Needle Countdown Alerts', included: true },
        { text: 'Up to 15 Neurologist & Nurse User Seats', included: true },
        { text: 'Standard EHR Export (PDF & FHIR Payload)', included: true },
        { text: 'Automated Dispensing Cabinet Release', included: false, note: 'Enterprise Only' },
        { text: 'Priority Clinical Desk Support', included: true },
      ]
    },
    {
      name: 'Hospital Network Enterprise',
      priceKsh: billingCycle === 'annual' ? 'KSh 380,000' : 'KSh 450,000',
      period: 'per network / month',
      description: 'Complete multi-hospital orchestration with deep EHR integration and custom SLAs.',
      ctaText: 'Contact Enterprise Sales',
      ctaVariant: 'secondary',
      features: [
        { text: 'Unlimited Clinical & Administrative User Seats', included: true },
        { text: 'Bidirectional FHIR R4 & HL7 v2 EHR Integration', included: true },
        { text: 'Direct Cabinet Integration (Pyxis / Omnicell)', included: true },
        { text: 'Custom Clinical Rule & Dosage Protocol Builder', included: true },
        { text: 'Immutable Cryptographic Audit Trail & Analytics', included: true },
        { text: 'Dedicated Healthcare Integration Engineer', included: true },
        { text: '99.9% Operational Uptime SLA', included: true },
        { text: '24/7 On-Call Technical Assistance', included: true },
      ]
    }
  ];

  return (
    <section id="pricing" className="relative overflow-hidden bg-[#030812] py-20 lg:py-28 border-t border-slate-800/60">
      {/* Background Lighting */}
      <div className="pointer-events-none absolute left-1/2 top-1/3 -z-10 h-[600px] w-[700px] -translate-x-1/2 rounded-full bg-gradient-to-tr from-blue-900/20 via-cyan-500/10 to-transparent blur-[140px]" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-950/40 px-3.5 py-1.5 text-xs font-semibold text-cyan-300">
            <Building2 className="h-3.5 w-3.5 text-cyan-400" />
            <span>TRANSPARENT HOSPITAL SUBSCRIPTIONS</span>
          </div>
          <h2 className="mt-4 text-3xl font-black tracking-tight text-white sm:text-4xl lg:text-5xl">
            Simple pricing built for{' '}
            <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-cyan-400 bg-clip-text text-transparent">
              healthcare scale
            </span>
          </h2>
          <p className="mt-4 text-base text-slate-400 sm:text-lg">
            Start with our Freemium sandbox to test workflows, then upgrade your facility to unlock live AI alerts, EHR integration, and automated dispensing.
          </p>

          {/* Billing Cycle Toggle */}
          <div className="mt-8 inline-flex items-center gap-3 rounded-full border border-slate-800 bg-slate-950 p-1.5 backdrop-blur-md">
            <button
              onClick={() => setBillingCycle('monthly')}
              className={`rounded-full px-4 py-2 text-xs font-bold transition-all ${
                billingCycle === 'monthly'
                  ? 'bg-cyan-500 text-slate-950 shadow-[0_0_15px_rgba(0,210,255,0.4)]'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Monthly Billing
            </button>
            <button
              onClick={() => setBillingCycle('annual')}
              className={`flex items-center gap-1.5 rounded-full px-4 py-2 text-xs font-bold transition-all ${
                billingCycle === 'annual'
                  ? 'bg-cyan-500 text-slate-950 shadow-[0_0_15px_rgba(0,210,255,0.4)]'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <span>Annual Billing</span>
              <span className="rounded-full bg-emerald-500/20 px-2 py-0.5 text-[10px] text-emerald-400 ring-1 ring-emerald-500/40">
                SAVE 15%
              </span>
            </button>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-3 lg:items-stretch">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`relative flex flex-col justify-between rounded-2xl p-6 sm:p-8 backdrop-blur-xl transition-all duration-300 ${
                tier.highlighted
                  ? 'border-2 border-cyan-400 bg-slate-950/90 shadow-[0_0_40px_rgba(0,186,255,0.2)] lg:-translate-y-2'
                  : 'border border-slate-800 bg-slate-950/60 hover:border-slate-700'
              }`}
            >
              {/* Badge for Popular or Freemium */}
              {tier.badge && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 px-3.5 py-1 text-[11px] font-black tracking-wider text-white shadow-lg uppercase">
                  {tier.badge}
                </div>
              )}

              <div>
                {/* Header */}
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold text-white">{tier.name}</h3>
                  {tier.freemiumTag && (
                    <span className="rounded-md bg-slate-800 px-2.5 py-1 text-[10px] font-bold text-cyan-300 border border-slate-700">
                      {tier.freemiumTag}
                    </span>
                  )}
                </div>

                <p className="mt-3 text-xs text-slate-400 leading-relaxed min-h-[36px]">
                  {tier.description}
                </p>

                {/* Price Display */}
                <div className="mt-6 border-b border-slate-800/80 pb-6">
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl font-black text-white sm:text-4xl">{tier.priceKsh}</span>
                    <span className="text-xs font-semibold text-slate-400">/ {tier.period}</span>
                  </div>
                  {billingCycle === 'annual' && tier.priceKsh !== 'KSh 0' && (
                    <p className="mt-1 text-[11px] text-emerald-400 font-medium">Billed annually in KSh</p>
                  )}
                </div>

                {/* Feature List */}
                <ul className="mt-6 space-y-3">
                  {tier.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3 text-xs">
                      {feature.included ? (
                        <Check className="h-4 w-4 shrink-0 text-cyan-400 mt-0.5" />
                      ) : (
                        <X className="h-4 w-4 shrink-0 text-slate-600 mt-0.5" />
                      )}
                      <span className={feature.included ? 'text-slate-200' : 'text-slate-500 line-through'}>
                        {feature.text}
                      </span>
                      {feature.note && (
                        <span className="ml-auto text-[10px] text-slate-500 shrink-0">
                          {feature.note}
                        </span>
                      )}
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA Button */}
              <div className="mt-8 pt-4 border-t border-slate-800/80">
                <button
                  onClick={() => onSelectPlan && onSelectPlan(tier.name)}
                  className={`w-full flex items-center justify-center gap-2 rounded-xl py-3 text-sm font-bold transition-all ${
                    tier.ctaVariant === 'primary'
                      ? 'bg-gradient-to-r from-blue-700 via-blue-600 to-cyan-500 text-white shadow-[0_0_20px_rgba(0,186,255,0.4)] hover:from-blue-600 hover:to-cyan-400'
                      : tier.ctaVariant === 'secondary'
                      ? 'bg-slate-900 border border-cyan-500/40 text-cyan-300 hover:bg-slate-800 hover:text-white'
                      : 'border border-slate-700 bg-slate-900/60 text-slate-300 hover:bg-slate-800 hover:text-white'
                  }`}
                >
                  <span>{tier.ctaText}</span>
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* Enterprise Integration Note */}
        <div className="mt-12 rounded-2xl border border-slate-800 bg-slate-950/60 p-6 text-center text-xs text-slate-400 max-w-3xl mx-auto backdrop-blur-md">
          <p>
            <strong className="text-white">Need local MPESA / Bank Transfer Invoicing for Kenyan Healthcare Networks?</strong>
            <br />
            Our billing engine supports both local KSh invoicing (MPESA, Bank Wire) and automated Stripe credit card payments for international healthcare facilities.
          </p>
        </div>

      </div>
    </section>
  );
};