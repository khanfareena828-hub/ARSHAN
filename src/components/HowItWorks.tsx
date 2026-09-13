import { useState } from 'react';
import { motion } from 'motion/react';
import { 
  FolderPlus, 
  Users2, 
  TrendingUp, 
  CheckCircle2, 
  ArrowRight,
  Sparkles,
  Layers,
  Zap
} from 'lucide-react';

export function HowItWorks() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      number: '01',
      title: 'Create',
      tagline: 'Set up in seconds',
      description: 'Create projects and organize your tasks.',
      details: [
        'Organize workflows with ready-made project templates',
        'Assign custom statuses, due dates, and priority tiers',
        'Set up automated milestones and subtask checklists'
      ],
      icon: FolderPlus,
      color: 'from-[#4F7CFF] to-blue-600',
      previewBadge: 'Smart Workspace Setup'
    },
    {
      number: '02',
      title: 'Collaborate',
      tagline: 'Real-time synchronization',
      description: 'Bring your team together and work efficiently.',
      details: [
        'Shared task discussions and inline document previews',
        'Instant notifications and role-based permissions',
        'Team workload distribution with zero bottlenecks'
      ],
      icon: Users2,
      color: 'from-[#8B5CF6] to-purple-600',
      previewBadge: 'Synchronous Team Flow'
    },
    {
      number: '03',
      title: 'Grow',
      tagline: 'Continuous velocity gains',
      description: 'Use analytics and insights to improve productivity.',
      details: [
        'Automated sprint velocity and burndown charts',
        'Identify completion roadblocks before they occur',
        'Export high-level reports for founders & investors'
      ],
      icon: TrendingUp,
      color: 'from-emerald-500 to-teal-600',
      previewBadge: 'Actionable Productivity ROI'
    }
  ];

  return (
    <section id="how-it-works" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#4F7CFF]/10 text-[#4F7CFF] text-xs font-bold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>SIMPLE 3-STEP WORKFLOW</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0B1020] tracking-tight">
            How Launchly Works
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            A frictionless path from scattered to-do lists to an orchestrated, high-performing team workspace.
          </p>
        </div>

        {/* Connected Steps Grid / Timeline */}
        <div className="relative">
          {/* Connecting Line behind steps (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-[15%] right-[15%] h-0.5 bg-gradient-to-r from-[#4F7CFF]/30 via-[#8B5CF6]/30 to-emerald-500/30 -translate-y-8 z-0" />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-10 relative z-10">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              const isActive = activeStep === idx;

              return (
                <motion.div
                  key={step.number}
                  id={`step-${step.number}`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: idx * 0.15 }}
                  onMouseEnter={() => setActiveStep(idx)}
                  className={`relative p-8 rounded-3xl transition-all duration-300 bg-[#F7F8FC] border ${
                    isActive 
                      ? 'border-[#4F7CFF] shadow-xl shadow-[#4F7CFF]/10 bg-white ring-1 ring-[#4F7CFF]/20 -translate-y-1'
                      : 'border-slate-200/80 hover:border-slate-300 hover:bg-white'
                  }`}
                >
                  {/* Step Header with Number */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <span className="text-3xl font-black text-slate-300 font-mono tracking-tighter">
                        {step.number}
                      </span>
                      <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                        Step
                      </span>
                    </div>

                    <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${step.color} text-white flex items-center justify-center shadow-md`}>
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>

                  {/* Title & Tagline */}
                  <div className="mb-3">
                    <h3 className="text-2xl font-extrabold text-[#0B1020]">
                      {step.title}
                    </h3>
                    <span className="text-xs font-semibold text-[#4F7CFF]">
                      {step.tagline}
                    </span>
                  </div>

                  {/* Required Description */}
                  <p className="text-base text-slate-700 font-semibold mb-6">
                    {step.description}
                  </p>

                  {/* Bullet checklist */}
                  <ul className="space-y-2.5 pt-4 border-t border-slate-200/70">
                    {step.details.map((item, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-xs text-slate-600 leading-relaxed">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Interactive Status Footer */}
                  <div className="mt-6 pt-3 flex items-center justify-between text-[11px] font-bold text-slate-400">
                    <span className="px-2.5 py-1 rounded-md bg-white border border-slate-200">
                      {step.previewBadge}
                    </span>
                    <span className="text-[#4F7CFF] flex items-center gap-1">
                      Ready in 2 min <ArrowRight className="w-3 h-3" />
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
