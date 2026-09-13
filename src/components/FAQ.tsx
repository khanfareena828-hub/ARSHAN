import { useState } from 'react';
import { ChevronDown, HelpCircle, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First open by default

  const faqs = [
    {
      id: 'faq-what-is-launchly',
      question: 'What is Launchly?',
      answer:
        'Launchly is an all-in-one modern SaaS workspace designed specifically for small businesses and fast-growing teams. It unifies project tracking, task management, team collaboration, and real-time analytics into a single intuitive dashboard, eliminating the need to juggle multiple disconnected software tools.'
    },
    {
      id: 'faq-is-there-a-free-trial',
      question: 'Is there a free trial?',
      answer:
        'Yes! Launchly offers a full-featured 14-day free trial on all plans with no credit card required. You can test unlimited projects, invite team members, explore analytics, and experience our complete workflow before making any commitment.'
    },
    {
      id: 'faq-can-i-invite-my-team',
      question: 'Can I invite my team?',
      answer:
        'Absolutely. You can easily invite your teammates via email or shared invite link. Launchly supports customizable role permissions (Admins, Project Leads, Members, and Guest Collaborators) so you maintain full control over confidential data while fostering seamless collaboration.'
    },
    {
      id: 'faq-can-i-cancel-anytime',
      question: 'Can I cancel anytime?',
      answer:
        'Yes, you are never locked into long-term contracts. You can upgrade, downgrade, or cancel your subscription at any time directly from your workspace account settings with a single click. If you cancel, your account remains active until the end of your paid billing cycle.'
    },
    {
      id: 'faq-data-security',
      question: 'How is my business data secured?',
      answer:
        'We adhere to enterprise-grade security standards with SOC2 compliance, 256-bit AES encryption at rest, TLS 1.3 encryption in transit, and continuous daily backups across redundant cloud regions.'
    }
  ];

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-white relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#4F7CFF]/10 text-[#4F7CFF] text-xs font-bold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>FREQUENTLY ASKED QUESTIONS</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0B1020] tracking-tight">
            Got Questions? We Have Answers.
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Everything you need to know about Launchly’s trial, team collaboration, and pricing.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div
                key={faq.id}
                id={faq.id}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen 
                    ? 'border-[#4F7CFF] bg-[#F7F8FC] shadow-sm' 
                    : 'border-slate-200/90 bg-white hover:border-slate-300'
                }`}
              >
                <button
                  id={`accordion-btn-${idx}`}
                  type="button"
                  onClick={() => handleToggle(idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg font-bold text-[#0B1020]">
                    {faq.question}
                  </span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                    isOpen ? 'rotate-180 bg-[#4F7CFF] text-white' : 'bg-slate-100 text-slate-600'
                  }`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`accordion-content-${idx}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: 'easeInOut' }}
                    >
                      <div className="px-6 pb-6 pt-1 text-slate-600 text-sm leading-relaxed border-t border-slate-200/40">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
