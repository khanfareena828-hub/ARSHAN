import { Star, Quote, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';

export function Testimonials() {
  const testimonials = [
    {
      id: 'testimonial-aisha',
      name: 'Aisha Khan',
      title: 'Startup Founder',
      company: 'Zenith Health AI',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
      rating: 5,
      testimonial:
        'Launchly eliminated our daily chaos. Our sprint turnaround time dropped by 35% within the first month. The workspace is so natural that our whole 20-person team adopted it on day one without training.',
      highlight: '35% faster sprint delivery'
    },
    {
      id: 'testimonial-rahul',
      name: 'Rahul Mehta',
      title: 'Product Manager',
      company: 'OmniFlow Cloud',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
      rating: 5,
      testimonial:
        'The task management and real-time collaboration features are the best in the SaaS industry. Having projects, tasks, and analytics in one clean view saves us over 6 hours every single week.',
      highlight: '6+ hours saved weekly'
    },
    {
      id: 'testimonial-sara',
      name: 'Sara Thomas',
      title: 'Marketing Lead',
      company: 'Verve Growth Studio',
      avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&auto=format&fit=crop&q=80',
      rating: 5,
      testimonial:
        'Launchly makes cross-functional alignment effortless. We coordinate content launches, social campaigns, and design reviews seamlessly. It is truly the bedrock of our marketing execution.',
      highlight: 'Flawless campaign launches'
    }
  ];

  return (
    <section id="testimonials" className="py-24 bg-[#F7F8FC] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200 shadow-xs text-xs font-bold text-[#4F7CFF]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>COMMUNITY FEEDBACK</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0B1020] tracking-tight">
            Loved by Fast-Moving Teams
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Discover why founders, product managers, and team leaders rely on Launchly every day.
          </p>
        </div>

        {/* Testimonials 3-Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, idx) => (
            <motion.div
              key={item.id}
              id={item.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: idx * 0.12 }}
              className="flex flex-col justify-between p-8 rounded-3xl bg-white border border-slate-200/80 shadow-xs hover:shadow-xl hover:border-[#4F7CFF]/40 transition-all duration-300"
            >
              <div>
                {/* 5-Star Rating */}
                <div className="flex items-center justify-between mb-5">
                  <div className="flex text-amber-400 gap-1">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-slate-200" />
                </div>

                {/* Testimonial Quote */}
                <p className="text-slate-700 text-sm leading-relaxed mb-6 font-normal">
                  "{item.testimonial}"
                </p>
              </div>

              {/* Author & Avatar Section */}
              <div className="pt-6 border-t border-slate-100 flex items-center gap-3.5">
                <img
                  src={item.avatar}
                  alt={item.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-sm shrink-0"
                />
                <div className="min-w-0">
                  <h4 className="text-base font-bold text-[#0B1020] truncate">
                    {item.name}
                  </h4>
                  <p className="text-xs text-slate-500 font-medium truncate">
                    {item.title} • <span className="text-slate-400">{item.company}</span>
                  </p>
                  <div className="text-[11px] font-bold text-[#4F7CFF] mt-0.5">
                    {item.highlight}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
