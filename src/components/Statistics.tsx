import { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { Users, FolderKanban, ShieldCheck, Award } from 'lucide-react';

export function Statistics() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.3 });

  // State for counting values
  const [usersCount, setUsersCount] = useState(0);
  const [projectsCount, setProjectsCount] = useState(0);
  const [uptimeCount, setUptimeCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    // Animate users to 10
    const duration = 1600;
    const startTime = performance.now();

    const updateCounters = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // easeOutExpo
      const ease = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);

      setUsersCount(Math.floor(ease * 10));
      setProjectsCount(Math.floor(ease * 25));
      setUptimeCount(Number((ease * 99.9).toFixed(1)));

      if (progress < 1) {
        requestAnimationFrame(updateCounters);
      } else {
        setUsersCount(10);
        setProjectsCount(25);
        setUptimeCount(99.9);
      }
    };

    requestAnimationFrame(updateCounters);
  }, [isInView]);

  const stats = [
    {
      id: 'stat-users',
      number: `${usersCount}K+`,
      label: 'Active Users',
      sublabel: 'Empowered across 45+ countries',
      icon: Users,
      color: 'from-blue-500 to-[#4F7CFF]',
    },
    {
      id: 'stat-projects',
      number: `${projectsCount}K+`,
      label: 'Projects Managed',
      sublabel: 'Delivered on time with zero friction',
      icon: FolderKanban,
      color: 'from-[#4F7CFF] to-purple-600',
    },
    {
      id: 'stat-uptime',
      number: `${uptimeCount}%`,
      label: 'Platform Uptime',
      sublabel: 'Enterprise-grade SLA reliability',
      icon: ShieldCheck,
      color: 'from-purple-600 to-indigo-600',
    },
  ];

  const brandLogos = [
    { name: 'Vanguard', category: 'Fintech' },
    { name: 'HyperScale', category: 'Cloud Infrastructure' },
    { name: 'NovaPulse', category: 'AI Analytics' },
    { name: 'OmniFlow', category: 'Operations' },
    { name: 'KiteWorks', category: 'Creative Studio' },
  ];

  return (
    <section 
      id="statistics" 
      ref={containerRef}
      className="py-16 md:py-24 bg-white border-y border-slate-200/80 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Brand partners row */}
        <div className="text-center mb-14">
          <p className="text-xs font-bold uppercase tracking-widest text-slate-600 mb-6">
            Trusted by high-growth startups and fast-moving teams
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12 md:gap-16 opacity-75 grayscale hover:grayscale-0 transition-all duration-300">
            {brandLogos.map((brand) => (
              <div key={brand.name} className="flex items-center gap-2 font-bold text-slate-700 text-lg tracking-tight hover:text-[#4F7CFF] transition-colors">
                <span className="w-2.5 h-2.5 rounded-sm bg-[#4F7CFF]/40" />
                {brand.name}
              </div>
            ))}
          </div>
        </div>

        {/* 3 Main Statistics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.id}
                id={stat.id}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="relative group p-8 rounded-3xl bg-[#F7F8FC] hover:bg-white border border-slate-200/80 hover:border-[#4F7CFF]/40 hover:shadow-xl hover:shadow-[#4F7CFF]/10 transition-all duration-300 text-center md:text-left"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#4F7CFF]/10 to-purple-500/10 text-[#4F7CFF] flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-semibold text-slate-600 bg-white px-2.5 py-1 rounded-full border border-slate-200">
                    Verified Metric
                  </span>
                </div>

                <div className="text-4xl sm:text-5xl font-extrabold tracking-tight text-[#0B1020] mb-2 font-mono">
                  {stat.number}
                </div>

                <div className="text-lg font-bold text-slate-800 mb-1">
                  {stat.label}
                </div>

                <p className="text-sm text-slate-600 font-normal">
                  {stat.sublabel}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
