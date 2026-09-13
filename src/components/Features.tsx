import { useState } from 'react';
import { 
  LayoutDashboard, 
  CheckSquare, 
  Users, 
  BarChart3, 
  BellRing, 
  ShieldCheck, 
  ArrowRight,
  Sparkles,
  Layers,
  ChevronRight
} from 'lucide-react';
import { motion } from 'motion/react';

export function Features() {
  const [selectedFeature, setSelectedFeature] = useState<number | null>(null);

  const featuresList = [
    {
      id: 'feature-smart-dashboard',
      icon: LayoutDashboard,
      title: 'Smart Dashboard',
      description: 'Get a clear overview of projects and team activity.',
      accent: 'from-blue-500 to-indigo-600',
      tag: 'Executive Overview',
      highlightDetail: 'Unified command center consolidating project velocity, sprint burn-down, active assignees, and urgent deadlines in a single pane.'
    },
    {
      id: 'feature-task-management',
      icon: CheckSquare,
      title: 'Task Management',
      description: 'Create, organize and track tasks easily.',
      accent: 'from-[#4F7CFF] to-cyan-500',
      tag: 'Kanban & List',
      highlightDetail: 'Intuitive drag-and-drop boards, subtasks, recurring schedules, custom priority labels, and automated status shifts.'
    },
    {
      id: 'feature-team-collaboration',
      icon: Users,
      title: 'Team Collaboration',
      description: 'Help teams communicate and work together efficiently.',
      accent: 'from-purple-500 to-pink-500',
      tag: 'Real-time Sync',
      highlightDetail: 'Contextual task threads, @mentions, file attachments, and synchronous team document editing without switching tools.'
    },
    {
      id: 'feature-analytics',
      icon: BarChart3,
      title: 'Analytics',
      description: 'Understand project performance using useful insights.',
      accent: 'from-emerald-500 to-teal-600',
      tag: 'Deep Insights',
      highlightDetail: 'Actionable productivity metrics, workload balancing heatmaps, time tracking logs, and exportable stakeholder reports.'
    },
    {
      id: 'feature-smart-notifications',
      icon: BellRing,
      title: 'Smart Notifications',
      description: 'Stay updated about important project activities.',
      accent: 'from-amber-500 to-orange-600',
      tag: 'Instant Alerts',
      highlightDetail: 'Intelligent noise-filtered alerts across web, email, and Slack so your team never misses critical milestones or blockers.'
    },
    {
      id: 'feature-secure-workspace',
      icon: ShieldCheck,
      title: 'Secure Workspace',
      description: 'Keep business projects and information organized securely.',
      accent: 'from-violet-600 to-[#0B1020]',
      tag: 'Enterprise Grade',
      highlightDetail: 'Role-based access control, SOC2 compliance standards, 256-bit data encryption at rest and in transit, and granular audit logs.'
    }
  ];

  return (
    <section id="features" className="py-24 bg-[#F7F8FC] relative overflow-hidden">
      {/* Background shapes */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#4F7CFF]/5 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#8B5CF6]/5 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200 shadow-xs text-xs font-bold text-[#4F7CFF]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>POWERFUL CAPABILITIES</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0B1020] tracking-tight">
            Engineered for High-Velocity Teams
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Everything your growing business needs to align workflows, execute projects effortlessly, and scale without administrative chaos.
          </p>
        </div>

        {/* 6 Interactive Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {featuresList.map((feature, index) => {
            const Icon = feature.icon;
            const isSelected = selectedFeature === index;

            return (
              <motion.div
                key={feature.id}
                id={feature.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                onClick={() => setSelectedFeature(isSelected ? null : index)}
                className={`group relative p-7 rounded-3xl bg-white border transition-all duration-300 cursor-pointer ${
                  isSelected 
                    ? 'border-[#4F7CFF] shadow-xl shadow-[#4F7CFF]/15 ring-2 ring-[#4F7CFF]/20 -translate-y-1.5'
                    : 'border-slate-200/80 hover:border-[#4F7CFF]/50 hover:shadow-xl hover:shadow-slate-200/60 hover:-translate-y-1.5'
                }`}
              >
                {/* Top Badge & Icon */}
                <div className="flex items-center justify-between mb-6">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.accent} text-white flex items-center justify-center shadow-md shadow-[#4F7CFF]/20 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300`}>
                    <Icon className="w-7 h-7" />
                  </div>
                  <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider bg-slate-100 px-3 py-1 rounded-full group-hover:bg-[#4F7CFF]/10 group-hover:text-[#4F7CFF] transition-colors">
                    {feature.tag}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-[#0B1020] mb-2 group-hover:text-[#4F7CFF] transition-colors">
                  {feature.title}
                </h3>

                {/* Short Description */}
                <p className="text-sm text-slate-600 leading-relaxed font-normal mb-4">
                  {feature.description}
                </p>

                {/* Expandable/Interactive detail */}
                <div className={`overflow-hidden transition-all duration-300 ${isSelected ? 'max-h-32 opacity-100 mt-3 pt-3 border-t border-slate-100' : 'max-h-0 opacity-0'}`}>
                  <p className="text-xs text-slate-500 bg-slate-50 p-3 rounded-xl border border-slate-200/60">
                    {feature.highlightDetail}
                  </p>
                </div>

                {/* Interactive trigger link */}
                <div className="flex items-center gap-1.5 text-xs font-bold text-[#4F7CFF] pt-2 group-hover:translate-x-1 transition-transform">
                  <span>{isSelected ? 'Collapse details' : 'Explore capability'}</span>
                  <ChevronRight className="w-4 h-4" />
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
