import { useState } from 'react';
import { Check, Sparkles, Zap, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

interface PricingProps {
  onSelectPlan: (planName: string) => void;
}

export function Pricing({ onSelectPlan }: PricingProps) {
  const [isYearly, setIsYearly] = useState(false);

  const plans = [
    {
      id: 'plan-starter',
      name: 'STARTER',
      tagline: 'Ideal for solo entrepreneurs and early projects.',
      monthlyPrice: 499,
      yearlyPrice: 399,
      highlighted: false,
      includes: [
        '3 Projects',
        'Basic Dashboard',
        'Task Management',
        'Email Support'
      ],
      ctaText: 'Start Free Trial',
      ctaColor: 'bg-white text-slate-800 hover:bg-slate-50 border border-slate-200'
    },
    {
      id: 'plan-professional',
      name: 'PROFESSIONAL',
      badge: 'MOST POPULAR',
      tagline: 'Best for fast-growing startups and active teams.',
      monthlyPrice: 999,
      yearlyPrice: 799,
      highlighted: true,
      includes: [
        'Unlimited Projects',
        'Advanced Dashboard',
        'Team Collaboration',
        'Analytics',
        'Priority Support'
      ],
      ctaText: 'Get Started with Pro',
      ctaColor: 'bg-gradient-to-r from-[#4F7CFF] to-[#3A67F0] text-white shadow-lg shadow-[#4F7CFF]/30 hover:from-[#436FEA] hover:to-[#2F59DF]'
    },
    {
      id: 'plan-business',
      name: 'BUSINESS',
      tagline: 'Comprehensive scale and control for organizations.',
      monthlyPrice: 1999,
      yearlyPrice: 1599,
      highlighted: false,
      includes: [
        'Everything in Professional',
        'Advanced Analytics',
        'Unlimited Team Members',
        'Premium Support',
        'Custom Workspace'
      ],
      ctaText: 'Contact Sales',
      ctaColor: 'bg-slate-900 text-white hover:bg-slate-800'
    }
  ];

  return (
    <section id="pricing" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#4F7CFF]/10 text-[#4F7CFF] text-xs font-bold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>TRANSPARENT PRICING</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0B1020] tracking-tight">
            Simple, Predictable Plans for Every Stage
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            No hidden setup fees. Scale seamlessly as your team and projects multiply.
          </p>

          {/* Monthly / Yearly Toggle */}
          <div className="pt-6 flex items-center justify-center gap-3">
            <span className={`text-sm font-bold ${!isYearly ? 'text-[#0B1020]' : 'text-slate-500'}`}>
              Monthly billing
            </span>

            <button
              id="pricing-billing-toggle"
              type="button"
              onClick={() => setIsYearly(!isYearly)}
              className="relative w-14 h-8 bg-slate-200 rounded-full p-1 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#4F7CFF]"
              aria-label="Toggle Monthly or Yearly Billing"
            >
              <div
                className={`w-6 h-6 rounded-full bg-[#4F7CFF] shadow-md transition-transform duration-200 ${
                  isYearly ? 'translate-x-6 bg-[#4F7CFF]' : 'translate-x-0'
                }`}
              />
            </button>

            <span className={`text-sm font-bold flex items-center gap-1.5 ${isYearly ? 'text-[#0B1020]' : 'text-slate-500'}`}>
              Yearly billing
              <span className="text-[11px] font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-full border border-emerald-300">
                Save 20%
              </span>
            </span>
          </div>
        </div>

        {/* 3 Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch pt-4">
          {plans.map((plan) => {
            const price = isYearly ? plan.yearlyPrice : plan.monthlyPrice;

            return (
              <div
                key={plan.id}
                id={plan.id}
                className={`relative flex flex-col justify-between p-8 sm:p-9 rounded-3xl transition-all duration-300 ${
                  plan.highlighted
                    ? 'bg-gradient-to-b from-[#0B1020] to-[#121933] text-white shadow-2xl shadow-[#4F7CFF]/20 ring-2 ring-[#4F7CFF] scale-105 z-10'
                    : 'bg-[#F7F8FC] hover:bg-white text-slate-800 border border-slate-200/90 hover:border-slate-300 hover:shadow-xl'
                }`}
              >
                {/* Top Badge for Professional */}
                {plan.badge && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-[#4F7CFF] to-[#8B5CF6] text-white text-[11px] font-extrabold tracking-wider uppercase shadow-md shadow-[#4F7CFF]/30">
                    {plan.badge}
                  </div>
                )}

                <div>
                  {/* Plan Name & Tagline */}
                  <div className="flex items-center justify-between mb-2">
                    <h3 className={`text-xl font-extrabold tracking-wide ${plan.highlighted ? 'text-white' : 'text-[#0B1020]'}`}>
                      {plan.name}
                    </h3>
                  </div>

                  <p className={`text-xs mb-6 font-normal ${plan.highlighted ? 'text-slate-300' : 'text-slate-500'}`}>
                    {plan.tagline}
                  </p>

                  {/* Price Tag */}
                  <div className="flex items-baseline gap-1.5 mb-2">
                    <span className="text-4xl sm:text-5xl font-extrabold tracking-tight font-mono">
                      ₹{price}
                    </span>
                    <span className={`text-sm font-semibold ${plan.highlighted ? 'text-slate-300' : 'text-slate-500'}`}>
                      /month
                    </span>
                  </div>

                  {isYearly && (
                    <p className={`text-xs font-semibold mb-6 ${plan.highlighted ? 'text-emerald-400' : 'text-emerald-600'}`}>
                      Billed yearly (₹{price * 12}/yr)
                    </p>
                  )}
                  {!isYearly && (
                    <p className={`text-xs font-medium mb-6 ${plan.highlighted ? 'text-slate-400' : 'text-slate-400'}`}>
                      Billed monthly
                    </p>
                  )}

                  {/* Includes List */}
                  <div className="pt-6 border-t border-slate-200/40">
                    <div className={`text-xs font-bold uppercase tracking-wider mb-4 ${plan.highlighted ? 'text-slate-300' : 'text-slate-600'}`}>
                      What's Included:
                    </div>
                    <ul className="space-y-3.5">
                      {plan.includes.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-3 text-sm">
                          <div className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 ${
                            plan.highlighted ? 'bg-[#4F7CFF] text-white' : 'bg-emerald-100 text-emerald-700'
                          }`}>
                            <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                          </div>
                          <span className={plan.highlighted ? 'text-slate-200' : 'text-slate-700'}>
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Card CTA button */}
                <div className="pt-8">
                  <button
                    id={`btn-${plan.id}`}
                    onClick={() => onSelectPlan(plan.name)}
                    className={`w-full py-4 px-6 rounded-2xl text-sm font-bold flex items-center justify-center gap-2 transition-all duration-200 cursor-pointer ${plan.ctaColor}`}
                  >
                    <span>{plan.ctaText}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Guarantee Banner */}
        <div className="mt-14 max-w-2xl mx-auto text-center">
          <p className="text-xs text-slate-500">
            Need a custom enterprise setup for over 100+ team members?{' '}
            <button 
              onClick={() => onSelectPlan('Business')}
              className="text-[#4F7CFF] font-bold hover:underline cursor-pointer"
            >
              Talk to our solutions team
            </button>
          </p>
        </div>

      </div>
    </section>
  );
}
