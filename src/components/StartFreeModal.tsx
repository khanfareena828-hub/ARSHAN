import { useState, type FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Sparkles, Check, ArrowRight, ShieldCheck } from 'lucide-react';

interface StartFreeModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigateToDemo: (planName?: string) => void;
  initialPlan?: string;
}

export function StartFreeModal({
  isOpen,
  onClose,
  onNavigateToDemo,
  initialPlan = 'Professional'
}: StartFreeModalProps) {
  const [step, setStep] = useState<'plan' | 'success'>('plan');
  const [workspaceName, setWorkspaceName] = useState('');
  const [userEmail, setUserEmail] = useState('');

  if (!isOpen) return null;

  const handleQuickStart = (e: FormEvent) => {
    e.preventDefault();
    if (!userEmail) return;
    setStep('success');
  };

  return (
    <AnimatePresence>
      <div 
        id="start-free-modal-overlay"
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-lg p-8 rounded-3xl bg-white shadow-2xl border border-slate-100 overflow-hidden"
        >
          {/* Close button */}
          <button
            id="close-start-free-modal"
            type="button"
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>

          {step === 'plan' ? (
            <div className="space-y-6">
              <div className="space-y-2">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#4F7CFF]/10 text-[#4F7CFF] text-xs font-bold">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>14-DAY FULL-FEATURED TRIAL</span>
                </div>
                <h3 className="text-2xl font-extrabold text-[#0B1020]">
                  Get Started with Launchly
                </h3>
                <p className="text-sm text-slate-600 font-normal">
                  Create your team workspace in less than 60 seconds. No credit card required.
                </p>
              </div>

              <form onSubmit={handleQuickStart} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">
                    Workspace or Company Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Apex Dynamics"
                    value={workspaceName}
                    onChange={(e) => setWorkspaceName(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-[#4F7CFF] focus:ring-2 focus:ring-[#4F7CFF]/20"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">
                    Work Email Address
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="you@company.com"
                    value={userEmail}
                    onChange={(e) => setUserEmail(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-[#4F7CFF] focus:ring-2 focus:ring-[#4F7CFF]/20"
                  />
                </div>

                <div className="p-3.5 rounded-2xl bg-[#F7F8FC] border border-slate-200/80 space-y-2 text-xs text-slate-600">
                  <div className="font-semibold text-slate-800">
                    Selected Plan: <span className="text-[#4F7CFF] font-bold">{initialPlan}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-emerald-500" />
                    <span>Includes full team collaboration & dashboard access</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-emerald-500" />
                    <span>Instant invite links for up to 20 teammates</span>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 px-6 rounded-xl font-bold text-white bg-gradient-to-r from-[#4F7CFF] to-[#3A67F0] hover:from-[#436FEA] hover:to-[#2F59DF] shadow-md shadow-[#4F7CFF]/25 flex items-center justify-center gap-2 transition-all cursor-pointer"
                >
                  <span>Launch Workspace</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>

              <div className="pt-2 text-center">
                <button
                  type="button"
                  onClick={() => {
                    onClose();
                    onNavigateToDemo(initialPlan);
                  }}
                  className="text-xs font-bold text-[#4F7CFF] hover:underline"
                >
                  Prefer a guided team demo? Request a demo walkthrough →
                </button>
              </div>
            </div>
          ) : (
            <div className="text-center py-4 space-y-4">
              <div className="w-16 h-16 rounded-3xl bg-emerald-50 text-emerald-500 flex items-center justify-center mx-auto border-2 border-emerald-100">
                <Check className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-extrabold text-[#0B1020]">
                Workspace Created!
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Welcome to <strong>{workspaceName || 'Launchly Workspace'}</strong>. An activation link and login instructions have been sent to <strong>{userEmail}</strong>.
              </p>
              <div className="pt-4">
                <button
                  type="button"
                  onClick={onClose}
                  className="w-full py-3 px-6 rounded-xl font-bold text-white bg-[#4F7CFF] hover:bg-[#436FEA] transition-colors"
                >
                  Enter Workspace
                </button>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
