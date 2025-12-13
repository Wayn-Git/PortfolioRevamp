import React, { useEffect, useState } from 'react';
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';
import { personalInfo } from '../data/mock';

const Hero = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white dark:bg-[#0a0a0a]">
      
      {/* 1. Background Grid */}
      <div className="absolute inset-0 bg-grid-slate-200 dark:bg-grid-slate-800 [mask-image:linear-gradient(to_bottom,white_60%,transparent_100%)] pointer-events-none opacity-40" />
      
      {/* 2. Floating Ambient Spotlights (Alive Background) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Top Blob */}
        <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[80vw] h-[40vh] bg-emerald-500/10 dark:bg-emerald-500/10 blur-[100px] rounded-full animate-float-slow" />
        {/* Bottom Blob (Bridge) */}
        <div className="absolute bottom-[-10%] left-1/2 -translate-x-1/2 w-[60vw] h-[30vh] bg-emerald-500/10 dark:bg-emerald-500/10 blur-[80px] rounded-full animate-float-medium" />
      </div>

      {/* 3. Vignette Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-white via-white/50 to-transparent dark:from-[#0a0a0a] dark:via-[#0a0a0a]/50 dark:to-transparent z-10 pointer-events-none" />

      <div className="relative z-20 max-w-5xl mx-auto px-6 text-center">
        
        {/* Status Badge - Bouncy Entrance */}
        <div className={`flex justify-center mb-8 transition-all duration-1000 ease-premium ${mounted ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-12 scale-90'}`}>
          <div className="group relative inline-flex items-center px-4 py-1.5 rounded-full border border-emerald-100 dark:border-emerald-800/50 bg-emerald-50 dark:bg-emerald-900/20 text-emerald-700 dark:text-emerald-400 text-xs font-medium tracking-wide overflow-hidden cursor-default transition-transform hover:scale-105 duration-300">
            <span className="relative flex h-2 w-2 mr-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="relative z-10">OPEN TO WORK</span>
            {/* Shimmer on hover */}
            <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent z-0" />
          </div>
        </div>

        {/* Main Typography - Deep Staggered Reveal */}
        <div className="space-y-4 mb-8">
          <div className="overflow-hidden p-2">
            <h1 className={`text-5xl sm:text-7xl md:text-8xl font-bold text-gray-900 dark:text-white tracking-tight ${mounted ? 'reveal-text' : 'reveal-text-hidden'}`}>
              {personalInfo.name}
            </h1>
          </div>
          <div className="overflow-hidden p-1">
            <h2 className={`text-2xl sm:text-3xl md:text-4xl font-light text-gray-500 dark:text-gray-400 pb-2 transition-all duration-1000 delay-200 ease-premium ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
              {personalInfo.title}
            </h2>
          </div>
        </div>

        {/* Subtitle */}
        <p className={`max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-10 transition-all duration-1000 delay-300 ease-premium ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {personalInfo.subtitle}
        </p>

        {/* Action Buttons - Playful Hovers */}
        <div className={`flex flex-col sm:flex-row items-center justify-center gap-4 transition-all duration-1000 delay-500 ease-premium ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <button 
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-full bg-gray-900 dark:bg-white px-8 font-medium text-white dark:text-gray-900 transition-all duration-300 hover:w-48 hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl hover:shadow-emerald-500/10"
          >
            <span className="mr-2">View Work</span>
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
          </button>
          
          <div className="flex items-center gap-4 px-6">
            {[
              { Icon: Github, href: personalInfo.github },
              { Icon: Linkedin, href: personalInfo.linkedin },
              { Icon: Mail, href: `mailto:${personalInfo.email}` }
            ].map(({ Icon, href }, i) => (
              <a
                key={i}
                href={href}
                target="_blank"
                rel="noreferrer"
                className="p-3 text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-all duration-300 hover:scale-125 hover:-rotate-6 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full active:scale-90"
                style={{ transitionDelay: `${i * 50}ms` }}
              >
                <Icon size={22} strokeWidth={1.5} />
              </a>
            ))}
          </div>
        </div>

      </div>

      {/* 4. Active Scroll Indicator 
          - A track with a moving bead inside
      */}
      <div className={`absolute bottom-0 left-1/2 -translate-x-1/2 transition-opacity duration-1000 delay-1000 z-30 ${mounted ? 'opacity-100' : 'opacity-0'}`}>
        <div className="w-[1px] h-24 bg-gray-200 dark:bg-gray-800 overflow-hidden relative">
           <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-transparent to-emerald-500/50 animate-scroll-drop" />
        </div>
      </div>
    </section>
  );
};

export default Hero;