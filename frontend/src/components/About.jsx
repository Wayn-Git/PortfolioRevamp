import React, { useEffect, useState, useRef } from 'react';
import { Target, Code, TrendingUp, Sparkles, Calendar, Briefcase, ArrowUpRight } from 'lucide-react';
import { aboutText, stats, experience } from '../data/mock';

/* --- Helper Components --- */

const StatCard = ({ stat, index }) => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => setIsVisible(entry.isIntersecting));
    });
    if (domRef.current) observer.observe(domRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div 
      ref={domRef}
      className={`
        group relative overflow-hidden p-6 rounded-2xl bg-white dark:bg-gray-800/50 
        border border-gray-100 dark:border-gray-700/50
        transition-all duration-1000 ease-premium
        hover:shadow-2xl hover:shadow-emerald-500/10 hover:-translate-y-2 hover:scale-[1.02]
        ${isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-12 scale-90'}
      `}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-2 tracking-tight group-hover:scale-105 transition-transform duration-500 origin-left">
        {stat.value}
      </div>
      <div className="text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider group-hover:text-emerald-500 transition-colors duration-300">
        {stat.label}
      </div>
      {/* Decorative Blob scales up on hover */}
      <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-emerald-500/5 rounded-full transition-transform duration-700 group-hover:scale-150" />
    </div>
  );
};

const TimelineItem = ({ exp, index }) => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) setIsVisible(true);
      });
    }, { threshold: 0.2 });
    if (domRef.current) observer.observe(domRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div 
      ref={domRef}
      className={`
        group relative pl-8 sm:pl-12 py-2 
        transition-all duration-1000 ease-premium
        ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}
      `}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      {/* PREMIUM TRACK DESIGN:
        Instead of a border, we use absolute divs for the Dot and Line 
        to create a "circuit board" feel.
      */}
      
      {/* The Dot (Lights up on hover) */}
      <div className={`
        absolute left-[2px] top-8 w-3 h-3 rounded-full z-20
        border-2 border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900
        transition-all duration-500 ease-out
        group-hover:border-emerald-500 group-hover:scale-125 group-hover:bg-emerald-500
        ${isVisible ? 'scale-100' : 'scale-0'}
      `} />

      {/* The Line (Subtle gradient track) */}
      <div className="absolute left-[7px] top-11 bottom-[-10px] w-[2px] bg-gray-100 dark:bg-gray-800 group-last:hidden" />

      {/* GLASS CARD CONTAINER:
        Encapsulates the experience in a premium "frosted" box
      */}
      <div className={`
        relative p-6 rounded-2xl
        bg-gray-50/50 dark:bg-gray-800/30 backdrop-blur-sm
        border border-gray-100 dark:border-gray-700/50
        hover:bg-white dark:hover:bg-gray-800 hover:border-emerald-500/20 hover:shadow-xl hover:shadow-emerald-500/5
        transition-all duration-500 ease-out group-hover:-translate-y-1
      `}>
        
        {/* Header: Title & Date */}
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
          <div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
              {exp.title}
            </h3>
            <div className="flex items-center gap-2 mt-1 text-gray-600 dark:text-gray-400 font-medium">
              <Briefcase size={14} />
              <span>{exp.company}</span>
            </div>
          </div>
          
          <span className="self-start px-3 py-1 text-xs font-mono font-medium text-emerald-700 dark:text-emerald-300 bg-emerald-100/50 dark:bg-emerald-900/30 rounded-full border border-emerald-200 dark:border-emerald-800/50 whitespace-nowrap">
            {exp.period}
          </span>
        </div>

        <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6 text-sm sm:text-base">
          {exp.description}
        </p>

        {/* Tech Chips */}
        <div className="flex flex-wrap gap-2">
          {exp.achievements.map((tag, i) => (
            <span 
              key={i}
              className="
                px-2.5 py-1 text-xs font-medium rounded-md 
                bg-white dark:bg-gray-900/50 
                text-gray-600 dark:text-gray-300 
                border border-gray-200 dark:border-gray-700 
                group-hover:border-emerald-500/30 group-hover:text-emerald-600 dark:group-hover:text-emerald-400
                transition-colors duration-300 cursor-default
              "
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

const About = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section id="about" className="relative py-24 sm:py-32 overflow-hidden bg-white dark:bg-[#0a0a0a]">
      
      {/* --- TOP BLENDING --- */}
      <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-white via-white/50 to-transparent dark:from-[#0a0a0a] dark:via-[#0a0a0a]/50 dark:to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-0 bg-grid-slate-200 dark:bg-grid-slate-800 [mask-image:radial-gradient(ellipse_at_top,white_30%,transparent_80%)] pointer-events-none opacity-40" />
      
      {/* Top Connecting Line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-32 bg-gray-200 dark:bg-gray-800 overflow-hidden z-20">
         <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-emerald-500/50 to-transparent animate-scroll-drop" />
      </div>

      {/* --- BOTTOM BLENDING (New) --- 
          This ensures the Experience section fades out smoothly into the next page (Projects)
      */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-white via-white/50 to-transparent dark:from-[#0a0a0a] dark:via-[#0a0a0a]/50 dark:to-transparent z-10 pointer-events-none" />


      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 z-30">
        
        {/* Header Section */}
        <div className="max-w-3xl mb-20">
          <div className={`flex items-center gap-2 mb-6 transition-all duration-1000 ease-premium ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <span className="w-8 h-[1px] bg-emerald-500"></span>
            <span className="text-sm font-medium tracking-widest uppercase text-emerald-600 dark:text-emerald-400">About Me</span>
          </div>
          
          <div className="overflow-hidden">
            <h2 className={`text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-8 tracking-tight leading-tight ${mounted ? 'reveal-text' : 'reveal-text-hidden'}`}>
              Turning complex data into <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-500">actionable intelligence.</span>
            </h2>
          </div>
          
          <div className={`text-lg text-gray-600 dark:text-gray-400 leading-relaxed space-y-4 transition-all duration-1000 delay-300 ease-premium ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            {aboutText.split('\n\n').map((paragraph, index) => (
              <p key={index}>{paragraph.trim()}</p>
            ))}
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-24">
          {stats.map((stat, index) => (
            <StatCard key={index} stat={stat} index={index} />
          ))}
        </div>

        {/* Split Layout */}
        <div className="grid lg:grid-cols-12 gap-16">
          
          {/* Approach Cards */}
          <div className="lg:col-span-5 space-y-8">
            <div className="sticky top-32">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-8 flex items-center gap-3">
                <Target className="text-emerald-500" />
                My Approach
              </h3>

              <div className="space-y-4">
                {[
                  { icon: Code, title: 'Clean Architecture', desc: 'Writing scalable, self-documenting code.' },
                  { icon: TrendingUp, title: 'Data First', desc: 'Evidence-based decision making.' },
                  { icon: Sparkles, title: 'User Centric', desc: 'Solving real problems for real people.' }
                ].map((item, idx) => (
                  <div 
                    key={idx}
                    className="group p-4 rounded-xl bg-gray-50 dark:bg-gray-900 border border-gray-100 dark:border-gray-800 
                    hover:border-emerald-500/30 hover:bg-white dark:hover:bg-gray-800 hover:shadow-xl hover:-translate-y-1 hover:scale-[1.02]
                    transition-all duration-300 ease-out cursor-default"
                  >
                    <div className="flex items-start gap-4">
                      <div className="p-2 bg-white dark:bg-gray-800 rounded-lg shadow-sm group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                        <item.icon size={20} className="text-emerald-600 dark:text-emerald-400" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-1">{item.title}</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400">{item.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* New Experience Timeline */}
          <div className="lg:col-span-7">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-8 flex items-center gap-3">
              <Calendar className="text-emerald-500" />
              Experience
            </h3>

            {/* No more left border here; handled by TimelineItem */}
            <div className="space-y-8">
              {experience.map((exp, index) => (
                <TimelineItem key={exp.id} exp={exp} index={index} />
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default About;