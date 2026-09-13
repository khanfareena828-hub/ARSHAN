import { Sparkles, ArrowRight, ShieldCheck, Zap, Star } from 'lucide-react';
import { motion } from 'motion/react';
import { ProductVisual3D } from './ProductVisual3D';

interface HeroProps {
  onStartFree: () => void;
  onExploreFeatures: () => void;
}

export function Hero({ onStartFree, onExploreFeatures }: HeroProps) {
  return (
    <section 
      id="home" 
      className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-gradient-to-b from-[#F7F8FC] via-white to-[#F7F8FC]"
    >
      {/* Background radial glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-gradient-to-br from-[#4F7CFF]/15 via-[#8B5CF6]/10 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-10 right-10 w-96 h-96 bg-[#4F7CFF]/10 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Grid Pattern overlay */}
      <div 
        className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none -z-10"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Hero Content */}
          <motion.div 
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="lg:col-span-6 space-y-6 text-center lg:text-left"
          >
            {/* Top pill badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200 shadow-xs text-xs font-semibold text-slate-700">
              <span className="flex h-2 w-2 rounded-full bg-[#4F7CFF] animate-pulse" />
              <span className="text-[#4F7CFF] font-bold">New:</span> Launchly 3.0 with Smart AI Workspaces
              <Sparkles className="w-3.5 h-3.5 text-purple-500" />
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#0B1020] leading-[1.12]">
              Manage Projects.{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4F7CFF] via-[#7B52F4] to-[#8B5CF6]">
                Empower Your Team.
              </span>
            </h1>

            {/* Description */}
            <p className="text-lg sm:text-xl text-slate-600 max-w-xl mx-auto lg:mx-0 leading-relaxed font-normal">
              Launchly helps modern teams organize projects, manage tasks and work together from one powerful workspace.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <button
                id="hero-cta-start-free"
                onClick={onStartFree}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-2xl text-base font-bold text-white bg-gradient-to-r from-[#4F7CFF] to-[#3A67F0] hover:from-[#436FEA] hover:to-[#2F59DF] shadow-lg shadow-[#4F7CFF]/30 hover:shadow-xl hover:shadow-[#4F7CFF]/40 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 cursor-pointer"
              >
                <span>Start Free</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                id="hero-cta-explore-features"
                onClick={onExploreFeatures}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-2xl text-base font-bold text-slate-700 bg-white hover:bg-slate-50 border border-slate-200/90 shadow-sm hover:shadow hover:border-slate-300 transition-all duration-200 cursor-pointer"
              >
                <span>Explore Features</span>
              </button>
            </div>

            {/* Social Trust & Guarantees */}
            <div className="pt-4 border-t border-slate-200/70 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs text-slate-500">
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-500" />
                <span>14-day free trial</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Zap className="w-4 h-4 text-[#4F7CFF]" />
                <span>No credit card required</span>
              </div>
              <div className="flex items-center gap-1.5">
                <div className="flex text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-current" />
                  ))}
                </div>
                <span className="font-semibold text-slate-700">4.9/5</span>
                <span>(1.2k+ reviews)</span>
              </div>
            </div>

          </motion.div>

          {/* Right Hero Visual */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="lg:col-span-6"
          >
            <ProductVisual3D />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
