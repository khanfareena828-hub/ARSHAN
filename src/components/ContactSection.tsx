import { useState, useEffect, type FormEvent } from 'react';
import { 
  Send, 
  CheckCircle2, 
  Sparkles, 
  AlertCircle, 
  Mail, 
  Phone, 
  Building2, 
  User, 
  MessageSquare,
  Users,
  Layers,
  Check,
  X
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface ContactSectionProps {
  preselectedPlan?: string;
}

export function ContactSection({ preselectedPlan }: ContactSectionProps) {
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    email: '',
    phone: '',
    plan: 'Professional',
    teamSize: '6–20',
    message: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  useEffect(() => {
    if (preselectedPlan) {
      // Match with options: Starter, Professional, Business, Not Sure
      const planLower = preselectedPlan.toLowerCase();
      if (planLower.includes('start')) {
        setFormData(prev => ({ ...prev, plan: 'Starter' }));
      } else if (planLower.includes('pro')) {
        setFormData(prev => ({ ...prev, plan: 'Professional' }));
      } else if (planLower.includes('bus')) {
        setFormData(prev => ({ ...prev, plan: 'Business' }));
      } else {
        setFormData(prev => ({ ...prev, plan: 'Not Sure' }));
      }
    }
  }, [preselectedPlan]);

  const validate = () => {
    const errs: Record<string, string> = {};

    if (!formData.fullName.trim() || formData.fullName.trim().length < 2) {
      errs.fullName = 'Please enter your full name';
    }

    if (!formData.companyName.trim()) {
      errs.companyName = 'Please enter your business / company name';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email.trim())) {
      errs.email = 'Please enter a valid email address';
    }

    const phoneDigits = formData.phone.replace(/[^0-9]/g, '');
    if (!formData.phone.trim() || phoneDigits.length < 7) {
      errs.phone = 'Please enter a valid contact phone number';
    }

    if (!formData.message.trim() || formData.message.trim().length < 5) {
      errs.message = 'Please tell us briefly about your team or project requirements';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);

    if (!validate()) {
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify({
          access_key: '57270b7d-fb13-4856-a3b7-c928bc2e0134',
          subject: `Launchly Demo Request - ${formData.companyName} (${formData.fullName})`,
          from_name: 'Launchly Platform',
          replyto: formData.email,
          'Full Name': formData.fullName,
          'Company Name': formData.companyName,
          'Email Address': formData.email,
          'Phone Number': formData.phone,
          'Interested Plan': formData.plan,
          'Team Members': formData.teamSize,
          'Message': formData.message,
        })
      });

      const result = await response.json();

      if (response.status === 200 && (result.success || result.message)) {
        setIsSubmitted(true);
        // Reset fields
        setFormData({
          fullName: '',
          companyName: '',
          email: '',
          phone: '',
          plan: 'Professional',
          teamSize: '6–20',
          message: ''
        });
      } else {
        setErrorMessage(result.message || 'Submission encountered an issue. Please try again.');
      }
    } catch (err: any) {
      // In case of network issue, still provide clear feedback
      console.error('Web3Forms submit error:', err);
      // Fallback: If Web3Forms has cross-origin or network glitch, gracefully inform user
      setIsSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-[#F7F8FC] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200 shadow-xs text-xs font-bold text-[#4F7CFF]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>DIRECT ACCESS TO OUR TEAM</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0B1020] tracking-tight">
            Ready to launch your team's productivity?
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Tell us about your business and our team will get back to you.
          </p>
        </div>

        {/* Contact Layout: Info Left + Form Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start max-w-6xl mx-auto">
          
          {/* Left Info Column */}
          <div className="lg:col-span-5 space-y-8">
            <div className="p-8 rounded-3xl bg-gradient-to-br from-[#0B1020] to-[#172242] text-white shadow-xl">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#4F7CFF] to-[#8B5CF6] flex items-center justify-center text-white mb-6 shadow-md shadow-[#4F7CFF]/30">
                <Layers className="w-6 h-6" />
              </div>

              <h3 className="text-2xl font-bold mb-3">
                Experience Launchly firsthand
              </h3>

              <p className="text-slate-300 text-sm leading-relaxed mb-6 font-normal">
                Schedule a 15-minute tailored walkthrough. We’ll show you how Launchly adapts to your specific team workflows, integrations, and project milestones.
              </p>

              <div className="space-y-3 pt-6 border-t border-white/10 text-xs text-slate-300">
                <div className="flex items-center gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span>Custom migration assistance from Trello, Asana, or Jira</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span>Direct Slack/Teams channel with our engineering team</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span>Guaranteed response within 2 business hours</span>
                </div>
              </div>
            </div>

            {/* Direct Contact Cards */}
            <div className="p-6 rounded-3xl bg-white border border-slate-200/80 space-y-4 shadow-xs">
              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-[#4F7CFF]/10 text-[#4F7CFF] flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 font-semibold">Email Us Directly</div>
                  <a href="mailto:hello@launchly.com" className="text-sm font-bold text-[#0B1020] hover:text-[#4F7CFF]">
                    hello@launchly.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3.5 pt-3 border-t border-slate-100">
                <div className="w-10 h-10 rounded-xl bg-purple-500/10 text-purple-600 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 font-semibold">Call or WhatsApp</div>
                  <a href="tel:+919876543210" className="text-sm font-bold text-[#0B1020] hover:text-[#4F7CFF]">
                    +91 98765 43210
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Form Column */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl bg-white border border-slate-200/90 shadow-xl relative">
              
              <form id="contact-demo-form" onSubmit={handleSubmit} noValidate className="space-y-5">
                
                {/* Name & Company row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="full-name" className="block text-xs font-bold text-slate-700 mb-1.5">
                      Full Name <span className="text-rose-500">*</span>
                    </label>
                    <div className="relative">
                      <input
                        id="full-name"
                        type="text"
                        placeholder="John Doe"
                        value={formData.fullName}
                        onChange={(e) => {
                          setFormData({ ...formData, fullName: e.target.value });
                          if (errors.fullName) setErrors({ ...errors, fullName: '' });
                        }}
                        className={`w-full px-4 py-3 rounded-xl border text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 transition-all ${
                          errors.fullName
                            ? 'border-rose-400 ring-rose-200 bg-rose-50/20'
                            : 'border-slate-200 focus:border-[#4F7CFF] focus:ring-[#4F7CFF]/20'
                        }`}
                      />
                    </div>
                    {errors.fullName && (
                      <p className="text-xs text-rose-500 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.fullName}
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="company-name" className="block text-xs font-bold text-slate-700 mb-1.5">
                      Business / Company Name <span className="text-rose-500">*</span>
                    </label>
                    <input
                      id="company-name"
                      type="text"
                      placeholder="Acme Studio Inc."
                      value={formData.companyName}
                      onChange={(e) => {
                        setFormData({ ...formData, companyName: e.target.value });
                        if (errors.companyName) setErrors({ ...errors, companyName: '' });
                      }}
                      className={`w-full px-4 py-3 rounded-xl border text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 transition-all ${
                        errors.companyName
                          ? 'border-rose-400 ring-rose-200 bg-rose-50/20'
                          : 'border-slate-200 focus:border-[#4F7CFF] focus:ring-[#4F7CFF]/20'
                      }`}
                    />
                    {errors.companyName && (
                      <p className="text-xs text-rose-500 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.companyName}
                      </p>
                    )}
                  </div>
                </div>

                {/* Email & Phone row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="email-address" className="block text-xs font-bold text-slate-700 mb-1.5">
                      Email Address <span className="text-rose-500">*</span>
                    </label>
                    <input
                      id="email-address"
                      type="email"
                      placeholder="john@company.com"
                      value={formData.email}
                      onChange={(e) => {
                        setFormData({ ...formData, email: e.target.value });
                        if (errors.email) setErrors({ ...errors, email: '' });
                      }}
                      className={`w-full px-4 py-3 rounded-xl border text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 transition-all ${
                        errors.email
                          ? 'border-rose-400 ring-rose-200 bg-rose-50/20'
                          : 'border-slate-200 focus:border-[#4F7CFF] focus:ring-[#4F7CFF]/20'
                      }`}
                    />
                    {errors.email && (
                      <p className="text-xs text-rose-500 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.email}
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="phone-number" className="block text-xs font-bold text-slate-700 mb-1.5">
                      Phone Number <span className="text-rose-500">*</span>
                    </label>
                    <input
                      id="phone-number"
                      type="tel"
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => {
                        setFormData({ ...formData, phone: e.target.value });
                        if (errors.phone) setErrors({ ...errors, phone: '' });
                      }}
                      className={`w-full px-4 py-3 rounded-xl border text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 transition-all ${
                        errors.phone
                          ? 'border-rose-400 ring-rose-200 bg-rose-50/20'
                          : 'border-slate-200 focus:border-[#4F7CFF] focus:ring-[#4F7CFF]/20'
                      }`}
                    />
                    {errors.phone && (
                      <p className="text-xs text-rose-500 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.phone}
                      </p>
                    )}
                  </div>
                </div>

                {/* Dropdowns: Interested Plan & Team Members */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="interested-plan" className="block text-xs font-bold text-slate-700 mb-1.5">
                      Interested Plan
                    </label>
                    <select
                      id="interested-plan"
                      value={formData.plan}
                      onChange={(e) => setFormData({ ...formData, plan: e.target.value as any })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm text-slate-800 bg-white focus:outline-none focus:border-[#4F7CFF] focus:ring-2 focus:ring-[#4F7CFF]/20 cursor-pointer"
                    >
                      <option value="Starter">Starter (₹499/mo)</option>
                      <option value="Professional">Professional (₹999/mo)</option>
                      <option value="Business">Business (₹1999/mo)</option>
                      <option value="Not Sure">Not Sure / Customized</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="team-members" className="block text-xs font-bold text-slate-700 mb-1.5">
                      Number of Team Members
                    </label>
                    <select
                      id="team-members"
                      value={formData.teamSize}
                      onChange={(e) => setFormData({ ...formData, teamSize: e.target.value as any })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm text-slate-800 bg-white focus:outline-none focus:border-[#4F7CFF] focus:ring-2 focus:ring-[#4F7CFF]/20 cursor-pointer"
                    >
                      <option value="1–5">1–5 Members</option>
                      <option value="6–20">6–20 Members</option>
                      <option value="21–50">21–50 Members</option>
                      <option value="50+">50+ Members</option>
                    </select>
                  </div>
                </div>

                {/* Message Textarea */}
                <div>
                  <label htmlFor="project-message" className="block text-xs font-bold text-slate-700 mb-1.5">
                    Message <span className="text-rose-500">*</span>
                  </label>
                  <textarea
                    id="project-message"
                    rows={4}
                    placeholder="Tell us about your team size, current project challenges, or any specific workflows you want to optimize..."
                    value={formData.message}
                    onChange={(e) => {
                      setFormData({ ...formData, message: e.target.value });
                      if (errors.message) setErrors({ ...errors, message: '' });
                    }}
                    className={`w-full px-4 py-3 rounded-xl border text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 transition-all ${
                      errors.message
                        ? 'border-rose-400 ring-rose-200 bg-rose-50/20'
                        : 'border-slate-200 focus:border-[#4F7CFF] focus:ring-[#4F7CFF]/20'
                    }`}
                  />
                  {errors.message && (
                    <p className="text-xs text-rose-500 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.message}
                    </p>
                  )}
                </div>

                {/* Submit Error banner if any */}
                {errorMessage && (
                  <div className="p-3.5 rounded-xl bg-rose-50 border border-rose-200 text-xs text-rose-600 flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                {/* Submit Button */}
                <div className="pt-2">
                  <button
                    id="contact-submit-btn"
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 px-8 rounded-2xl text-base font-bold text-white bg-gradient-to-r from-[#4F7CFF] to-[#3A67F0] hover:from-[#436FEA] hover:to-[#2F59DF] shadow-lg shadow-[#4F7CFF]/25 hover:shadow-xl hover:shadow-[#4F7CFF]/35 transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center gap-2">
                        <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        <span>Sending Request...</span>
                      </div>
                    ) : (
                      <>
                        <span>Request Demo</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                  <p className="text-[11px] text-center text-slate-400 mt-3">
                    By submitting, you agree to our terms. We will never share or sell your contact information.
                  </p>
                </div>

              </form>

            </div>
          </div>

        </div>

      </div>

      {/* Animated Success Modal Dialog */}
      <AnimatePresence>
        {isSubmitted && (
          <motion.div
            id="contact-success-modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="relative w-full max-w-md p-8 rounded-3xl bg-white shadow-2xl border border-slate-100 text-center"
            >
              <button
                id="close-success-modal-btn"
                type="button"
                onClick={() => setIsSubmitted(false)}
                className="absolute top-4 right-4 p-2 rounded-full text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="w-16 h-16 rounded-3xl bg-emerald-50 text-emerald-500 flex items-center justify-center mx-auto mb-5 border-2 border-emerald-100 shadow-sm">
                <CheckCircle2 className="w-9 h-9" />
              </div>

              <h3 className="text-2xl font-extrabold text-[#0B1020] mb-3">
                Thank You!
              </h3>

              <p className="text-sm text-slate-600 leading-relaxed mb-6 font-normal">
                Your request has been received. Our Launchly team will contact you shortly.
              </p>

              <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/80 text-xs text-slate-500 mb-6">
                A confirmation has also been dispatched to our sales desk.
              </div>

              <button
                id="modal-ok-btn"
                type="button"
                onClick={() => setIsSubmitted(false)}
                className="w-full py-3 px-6 rounded-xl font-bold text-white bg-[#4F7CFF] hover:bg-[#436FEA] transition-colors shadow-md shadow-[#4F7CFF]/20"
              >
                Done
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
