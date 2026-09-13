import { useState, useRef, useEffect } from 'react';
import { 
  CheckCircle2, 
  Clock, 
  TrendingUp, 
  Users, 
  Layers, 
  Bell, 
  Search, 
  Plus, 
  Sparkles,
  Zap,
  ShieldCheck
} from 'lucide-react';
import { motion } from 'motion/react';

export function ProductVisual3D() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      setMousePos({ x, y });
    };

    const handleMouseEnter = () => setIsHovered(true);
    const handleMouseLeave = () => {
      setIsHovered(false);
      setMousePos({ x: 0, y: 0 });
    };

    container.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('mouseenter', handleMouseEnter);
    container.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      container.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('mouseenter', handleMouseEnter);
      container.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  // Compute smooth 3D tilt angles
  const rotateX = isHovered ? -mousePos.y * 14 : -4;
  const rotateY = isHovered ? mousePos.x * 16 : 6;

  return (
    <div 
      ref={containerRef}
      id="product-mockup-3d-wrapper"
      className="relative w-full max-w-2xl mx-auto lg:max-w-none perspective-1200 py-6"
    >
      {/* Ambient background glows */}
      <div className="absolute -top-12 -left-12 w-72 h-72 bg-[#4F7CFF]/20 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute -bottom-10 -right-10 w-80 h-80 bg-[#8B5CF6]/20 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Floating geometric 3D elements */}
      <motion.div 
        animate={{ 
          y: [0, -12, 0],
          rotate: [0, 8, 0]
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-6 -right-2 z-30 hidden sm:flex items-center gap-2.5 px-4 py-2.5 rounded-2xl bg-white/90 backdrop-blur-md shadow-xl border border-white/60"
        style={{
          transform: `translateZ(60px) translate3d(${mousePos.x * 25}px, ${mousePos.y * 25}px, 0)`
        }}
      >
        <div className="w-8 h-8 rounded-xl bg-emerald-500/10 text-emerald-600 flex items-center justify-center">
          <CheckCircle2 className="w-4 h-4" />
        </div>
        <div>
          <div className="text-xs font-bold text-slate-800">Sprint Goal Achieved</div>
          <div className="text-[10px] text-emerald-600 font-semibold">+18.4% velocity this week</div>
        </div>
      </motion.div>

      <motion.div 
        animate={{ 
          y: [0, 14, 0],
          rotate: [0, -6, 0]
        }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute -bottom-6 -left-3 z-30 hidden sm:flex items-center gap-3 px-4 py-3 rounded-2xl bg-[#0B1020]/90 backdrop-blur-md shadow-2xl border border-white/10 text-white"
        style={{
          transform: `translateZ(70px) translate3d(${-mousePos.x * 30}px, ${-mousePos.y * 30}px, 0)`
        }}
      >
        <div className="flex -space-x-2">
          <img className="w-8 h-8 rounded-full border-2 border-[#0B1020]" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80" alt="Team member" />
          <img className="w-8 h-8 rounded-full border-2 border-[#0B1020]" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80" alt="Team member" />
          <img className="w-8 h-8 rounded-full border-2 border-[#0B1020]" src="https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&auto=format&fit=crop&q=80" alt="Team member" />
          <div className="w-8 h-8 rounded-full bg-[#4F7CFF] border-2 border-[#0B1020] flex items-center justify-center text-[10px] font-bold">
            +9
          </div>
        </div>
        <div>
          <div className="text-xs font-bold text-slate-100 flex items-center gap-1.5">
            Active Collaborators
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          </div>
          <div className="text-[10px] text-slate-400">12 team members online</div>
        </div>
      </motion.div>

      {/* Main 3D Floating Dashboard Container */}
      <div 
        className="relative transition-transform duration-200 ease-out preserve-3d"
        style={{
          transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`
        }}
      >
        {/* Soft shadow base */}
        <div className="absolute inset-4 rounded-3xl bg-slate-900/20 blur-2xl transform translate-y-8 -z-10" />

        {/* Outer Dashboard Shell */}
        <div className="relative rounded-3xl bg-white/90 backdrop-blur-xl border border-white/80 shadow-[0_25px_60px_-15px_rgba(15,23,42,0.18)] overflow-hidden">
          {/* Mockup Header Bar */}
          <div className="px-5 py-3.5 bg-slate-50/90 border-b border-slate-200/80 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-rose-400/90" />
              <div className="w-3 h-3 rounded-full bg-amber-400/90" />
              <div className="w-3 h-3 rounded-full bg-emerald-400/90" />
              <span className="ml-3 text-xs font-semibold text-slate-500 hidden sm:inline-block">launchly.app / workspace / sprint-42</span>
            </div>
            <div className="flex items-center gap-2.5">
              <div className="hidden sm:flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-white border border-slate-200 text-xs text-slate-400">
                <Search className="w-3.5 h-3.5" />
                <span>Search tasks or docs...</span>
              </div>
              <div className="w-7 h-7 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-slate-500">
                <Bell className="w-3.5 h-3.5" />
              </div>
              <div className="w-7 h-7 rounded-full bg-gradient-to-tr from-[#4F7CFF] to-[#8B5CF6] text-white flex items-center justify-center text-xs font-bold">
                L
              </div>
            </div>
          </div>

          {/* Mockup Body Content */}
          <div className="p-5 sm:p-6 space-y-5 bg-gradient-to-b from-white to-[#F7F8FC]/60">
            {/* Top Workspace Bar */}
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <div className="flex items-center gap-2">
                  <h4 className="text-base sm:text-lg font-bold text-[#0B1020]">Q3 Growth & Launch Sprint</h4>
                  <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-[#4F7CFF]/10 text-[#4F7CFF]">On Track</span>
                </div>
                <p className="text-xs text-slate-500 mt-0.5">8 sprints completed • 14 days remaining in cycle</p>
              </div>
              <div className="flex items-center gap-2">
                <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#4F7CFF] text-white text-xs font-semibold shadow-xs">
                  <Plus className="w-3.5 h-3.5" />
                  <span>New Task</span>
                </button>
              </div>
            </div>

            {/* Metric widgets row */}
            <div className="grid grid-cols-3 gap-3">
              <div className="p-3.5 rounded-2xl bg-white border border-slate-200/80 shadow-xs">
                <div className="flex items-center justify-between text-slate-400 mb-1">
                  <span className="text-[11px] font-medium">Task Velocity</span>
                  <Zap className="w-3.5 h-3.5 text-[#4F7CFF]" />
                </div>
                <div className="text-lg font-extrabold text-[#0B1020]">94.2%</div>
                <div className="text-[10px] text-emerald-600 font-semibold mt-0.5">↑ 12% vs last cycle</div>
              </div>

              <div className="p-3.5 rounded-2xl bg-white border border-slate-200/80 shadow-xs">
                <div className="flex items-center justify-between text-slate-400 mb-1">
                  <span className="text-[11px] font-medium">Total Tasks</span>
                  <Layers className="w-3.5 h-3.5 text-[#8B5CF6]" />
                </div>
                <div className="text-lg font-extrabold text-[#0B1020]">128 / 140</div>
                <div className="text-[10px] text-slate-500 font-medium mt-0.5">91% resolved</div>
              </div>

              <div className="p-3.5 rounded-2xl bg-white border border-slate-200/80 shadow-xs">
                <div className="flex items-center justify-between text-slate-400 mb-1">
                  <span className="text-[11px] font-medium">Work Time Saved</span>
                  <Clock className="w-3.5 h-3.5 text-amber-500" />
                </div>
                <div className="text-lg font-extrabold text-[#0B1020]">42.5 hrs</div>
                <div className="text-[10px] text-emerald-600 font-semibold mt-0.5">Automated sync</div>
              </div>
            </div>

            {/* Layered Interactive Task Cards */}
            <div className="space-y-2.5">
              <div className="flex items-center justify-between text-xs font-bold text-slate-700 px-1">
                <span>Priority Deliverables</span>
                <span className="text-[11px] text-[#4F7CFF] font-semibold cursor-pointer">View Kanban →</span>
              </div>

              {/* Task item 1 */}
              <div className="group p-3 rounded-2xl bg-white border border-slate-200/80 hover:border-[#4F7CFF]/50 transition-all flex items-center justify-between shadow-xs">
                <div className="flex items-center gap-3">
                  <div className="w-7 h-7 rounded-lg bg-emerald-500/10 text-emerald-600 flex items-center justify-center">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-slate-800">Finalize Cloud Storage Architecture</div>
                    <div className="text-[10px] text-slate-400 flex items-center gap-2 mt-0.5">
                      <span className="font-medium text-purple-600 bg-purple-50 px-1.5 py-0.5 rounded">Engineering</span>
                      <span>Due today</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="hidden sm:inline-block text-[10px] font-semibold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">Completed</span>
                  <img className="w-6 h-6 rounded-full border border-white" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=60&auto=format&fit=crop&q=80" alt="Assignee" />
                </div>
              </div>

              {/* Task item 2 */}
              <div className="group p-3 rounded-2xl bg-white border border-slate-200/80 hover:border-[#4F7CFF]/50 transition-all flex items-center justify-between shadow-xs">
                <div className="flex items-center gap-3">
                  <div className="w-7 h-7 rounded-lg bg-[#4F7CFF]/10 text-[#4F7CFF] flex items-center justify-center">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-slate-800">Customer Feedback Synthesis & Review</div>
                    <div className="text-[10px] text-slate-400 flex items-center gap-2 mt-0.5">
                      <span className="font-medium text-blue-600 bg-blue-50 px-1.5 py-0.5 rounded">Product Ops</span>
                      <span>In progress</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="hidden sm:inline-block text-[10px] font-semibold text-blue-600 bg-blue-50 px-2 py-0.5 rounded-full">In Review</span>
                  <img className="w-6 h-6 rounded-full border border-white" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60&auto=format&fit=crop&q=80" alt="Assignee" />
                </div>
              </div>

              {/* Progress bar */}
              <div className="p-3 rounded-2xl bg-slate-50 border border-slate-200/70">
                <div className="flex items-center justify-between text-xs font-semibold text-slate-700 mb-1.5">
                  <span className="flex items-center gap-1.5">
                    <TrendingUp className="w-3.5 h-3.5 text-[#4F7CFF]" />
                    Overall Sprint Completion
                  </span>
                  <span className="text-[#4F7CFF] font-bold">88%</span>
                </div>
                <div className="w-full h-2 rounded-full bg-slate-200/80 overflow-hidden">
                  <div className="h-full rounded-full bg-gradient-to-r from-[#4F7CFF] via-[#8B5CF6] to-emerald-400 w-[88%]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
