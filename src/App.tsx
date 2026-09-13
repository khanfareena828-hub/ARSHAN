import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Statistics } from './components/Statistics';
import { Features } from './components/Features';
import { HowItWorks } from './components/HowItWorks';
import { ProductShowcase } from './components/ProductShowcase';
import { Pricing } from './components/Pricing';
import { Testimonials } from './components/Testimonials';
import { FAQ } from './components/FAQ';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { StartFreeModal } from './components/StartFreeModal';

export default function App() {
  const [isStartFreeOpen, setIsStartFreeOpen] = useState(false);
  const [selectedPlanForDemo, setSelectedPlanForDemo] = useState<string>('Professional');

  const handleOpenStartFree = (plan?: string) => {
    if (plan) {
      setSelectedPlanForDemo(plan);
    }
    setIsStartFreeOpen(true);
  };

  const handleCloseStartFree = () => {
    setIsStartFreeOpen(false);
  };

  const handleNavigateToDemo = (planName?: string) => {
    if (planName) {
      setSelectedPlanForDemo(planName);
    }
    const contactElement = document.getElementById('contact');
    if (contactElement) {
      const yOffset = -80;
      const y = contactElement.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const handleExploreFeatures = () => {
    const featuresElement = document.getElementById('features');
    if (featuresElement) {
      const yOffset = -80;
      const y = featuresElement.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F7F8FC] text-[#0B1020] font-sans selection:bg-[#4F7CFF]/20 selection:text-[#4F7CFF]">
      {/* Sticky Navbar */}
      <Navbar onOpenStartFree={() => handleOpenStartFree()} />

      {/* Main Content Sections */}
      <main className="flex-grow">
        {/* Hero Section with 3D Product Visual */}
        <Hero 
          onStartFree={() => handleOpenStartFree()} 
          onExploreFeatures={handleExploreFeatures} 
        />

        {/* Statistics and Trust Bar */}
        <Statistics />

        {/* Features Section */}
        <Features />

        {/* How It Works Timeline */}
        <HowItWorks />

        {/* Product Showcase Prototype */}
        <ProductShowcase />

        {/* Pricing with Monthly / Yearly Toggle */}
        <Pricing onSelectPlan={(plan) => handleNavigateToDemo(plan)} />

        {/* Testimonials */}
        <Testimonials />

        {/* FAQ Accordion */}
        <FAQ />

        {/* Contact / Sales Form with Web3Forms */}
        <ContactSection preselectedPlan={selectedPlanForDemo} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Start Free Modal */}
      <StartFreeModal
        isOpen={isStartFreeOpen}
        onClose={handleCloseStartFree}
        onNavigateToDemo={handleNavigateToDemo}
        initialPlan={selectedPlanForDemo}
      />
    </div>
  );
}
