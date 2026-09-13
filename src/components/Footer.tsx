import { type MouseEvent } from 'react';
import { Layers, Mail, Phone, ArrowUp, Twitter, Linkedin, Instagram } from 'lucide-react';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (e: MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -80;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <footer id="main-footer" className="bg-[#0B1020] text-white pt-20 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-slate-800/80">
          
          {/* Brand & Slogan Column */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#4F7CFF] to-[#8B5CF6] flex items-center justify-center text-white shadow-md shadow-[#4F7CFF]/20">
                <Layers className="w-5 h-5" />
              </div>
              <span className="text-2xl font-extrabold tracking-tight text-white flex items-center gap-1">
                Launchly
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#4F7CFF]"></span>
              </span>
            </div>

            <p className="text-base text-slate-300 font-semibold pt-1">
              “Manage Projects. Empower Your Team.”
            </p>

            <p className="text-sm text-slate-400 max-w-sm leading-relaxed font-normal">
              The modern, unified workspace built for agile small businesses, startups, and high-velocity development squads.
            </p>

            {/* Social Icons */}
            <div className="pt-2 flex items-center gap-3">
              <a
                id="social-instagram"
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-xl bg-slate-800/80 hover:bg-[#4F7CFF] text-slate-400 hover:text-white flex items-center justify-center transition-colors duration-200"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                id="social-linkedin"
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="w-9 h-9 rounded-xl bg-slate-800/80 hover:bg-[#4F7CFF] text-slate-400 hover:text-white flex items-center justify-center transition-colors duration-200"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                id="social-x"
                href="https://x.com"
                target="_blank"
                rel="noreferrer"
                aria-label="X (formerly Twitter)"
                className="w-9 h-9 rounded-xl bg-slate-800/80 hover:bg-[#4F7CFF] text-slate-400 hover:text-white flex items-center justify-center transition-colors duration-200"
              >
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Product Links */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
              Product
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a 
                  href="#features" 
                  onClick={(e) => scrollToSection(e, 'features')}
                  className="text-slate-300 hover:text-[#4F7CFF] transition-colors"
                >
                  Features
                </a>
              </li>
              <li>
                <a 
                  href="#pricing" 
                  onClick={(e) => scrollToSection(e, 'pricing')}
                  className="text-slate-300 hover:text-[#4F7CFF] transition-colors"
                >
                  Pricing
                </a>
              </li>
              <li>
                <a 
                  href="#product" 
                  onClick={(e) => scrollToSection(e, 'product')}
                  className="text-slate-300 hover:text-[#4F7CFF] transition-colors"
                >
                  Dashboard
                </a>
              </li>
              <li>
                <a 
                  href="#home" 
                  onClick={(e) => scrollToSection(e, 'home')}
                  className="text-slate-300 hover:text-[#4F7CFF] transition-colors flex items-center gap-1.5"
                >
                  <span>Updates</span>
                  <span className="text-[10px] bg-[#4F7CFF]/20 text-[#4F7CFF] px-1.5 py-0.5 rounded font-bold">v3.0</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Company Links */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
              Company
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a 
                  href="#home" 
                  onClick={(e) => scrollToSection(e, 'home')}
                  className="text-slate-300 hover:text-[#4F7CFF] transition-colors"
                >
                  About
                </a>
              </li>
              <li>
                <a 
                  href="#contact" 
                  onClick={(e) => scrollToSection(e, 'contact')}
                  className="text-slate-300 hover:text-[#4F7CFF] transition-colors"
                >
                  Contact
                </a>
              </li>
              <li>
                <a 
                  href="#contact" 
                  onClick={(e) => scrollToSection(e, 'contact')}
                  className="text-slate-300 hover:text-[#4F7CFF] transition-colors flex items-center gap-1.5"
                >
                  <span>Careers</span>
                  <span className="text-[10px] bg-emerald-500/20 text-emerald-400 px-1.5 py-0.5 rounded font-bold">Hiring</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Column */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
              Contact
            </h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-3 text-slate-300">
                <div className="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center text-[#4F7CFF] shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <a href="mailto:hello@launchly.com" className="hover:text-white transition-colors">
                  hello@launchly.com
                </a>
              </li>
              <li className="flex items-center gap-3 text-slate-300">
                <div className="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center text-purple-400 shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <a href="tel:+919876543210" className="hover:text-white transition-colors">
                  +91 98765 43210
                </a>
              </li>
            </ul>
            <div className="p-4 rounded-2xl bg-slate-900/90 border border-slate-800 text-xs text-slate-400 mt-4">
              Headquarters: Cyber Gateway, Hitech City, Hyderabad, India
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p id="copyright-text">
            © 2026 Launchly. All rights reserved.
          </p>

          <div className="flex items-center gap-6">
            <a href="#home" onClick={(e) => scrollToSection(e, 'home')} className="hover:text-slate-200 transition-colors">
              Privacy Policy
            </a>
            <a href="#home" onClick={(e) => scrollToSection(e, 'home')} className="hover:text-slate-200 transition-colors">
              Terms of Service
            </a>
            <button
              id="footer-scroll-top-btn"
              onClick={scrollToTop}
              className="flex items-center gap-1 text-slate-300 hover:text-white transition-colors cursor-pointer"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
