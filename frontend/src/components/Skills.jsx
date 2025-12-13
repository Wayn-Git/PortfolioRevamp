import React, { useState, useEffect, useRef } from 'react';
import { Code, Database, Brain, Sparkles, Cpu, Terminal, Globe, Zap, GitBranch } from 'lucide-react';
import { skills } from '../data/mock';

/* --- Helper Components --- */

const TechBadge = ({ skill, index }) => {
  return (
    <div 
      className="
        group relative flex items-center gap-2 px-3 py-2 
        bg-white dark:bg-gray-900/50 
        border border-gray-200 dark:border-gray-700 
        rounded-lg cursor-default
        transition-all duration-300 ease-out
        hover:border-emerald-500/50 hover:shadow-[0_0_15px_rgba(16,185,129,0.15)] hover:-translate-y-1 hover:bg-gray-50 dark:hover:bg-gray-800
      "
      style={{ transitionDelay: `${index * 50}ms` }}
    >
      {/* "Level" Indicator Dot */}
      <div className={`
        w-1.5 h-1.5 rounded-full 
        ${skill.level >= 90 ? 'bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.6)]' : 
          skill.level >= 80 ? 'bg-blue-500' : 'bg-gray-400'}
        group-hover:scale-125 transition-transform duration-300
      `} />
      
      <span className="text-sm font-medium text-gray-700 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white transition-colors">
        {skill.name}
      </span>
      
      {/* Hover Scan Effect */}
      <div className="absolute inset-0 rounded-lg overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-[200%] h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1s_infinite]" />
      </div>
    </div>
  );
};

const SkillGroup = ({ title, skillList, icon: Icon, delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.unobserve(entry.target);
      }
    }, { threshold: 0.1 });

    if (domRef.current) observer.observe(domRef.current);
    return () => observer.disconnect();
  }, []);

  // Calculate average proficiency for the "System Load" bar
  const avgLevel = skillList.reduce((acc, curr) => acc + curr.level, 0) / skillList.length;

  return (
    <div 
      ref={domRef}
      className={`
        relative flex flex-col p-6 sm:p-8 rounded-3xl overflow-hidden
        bg-white/40 dark:bg-gray-900/40 backdrop-blur-md
        border border-gray-100 dark:border-gray-800
        transition-all duration-1000 ease-premium will-change-transform
        hover:border-gray-300 dark:hover:border-gray-700 hover:shadow-2xl hover:shadow-emerald-500/5
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}
      `}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {/* Decorative Background Grid inside card */}
      <div className="absolute inset-0 bg-grid-slate-200 dark:bg-grid-slate-800 [mask-image:linear-gradient(to_bottom,white,transparent)] opacity-[0.05] pointer-events-none" />

      <div className="relative z-10 mb-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white border border-gray-200 dark:border-gray-700">
            <Icon size={20} />
          </div>
          <h3 className="text-xl font-bold text-gray-900 dark:text-white">{title}</h3>
        </div>
        
        {/* "System Load" Indicator */}
        <div className="flex items-center gap-2">
           <span className="text-xs font-mono text-gray-400">PWR</span>
           <div className="w-16 h-1.5 bg-gray-200 dark:bg-gray-800 rounded-full overflow-hidden">
             <div 
               className="h-full bg-emerald-500 transition-all duration-1500 ease-out" 
               style={{ width: isVisible ? `${avgLevel}%` : '0%' }}
             />
           </div>
        </div>
      </div>
      
      <div className="relative z-10 flex flex-wrap gap-2">
        {skillList.map((skill, index) => (
          <TechBadge 
            key={index} 
            skill={skill} 
            index={index}
          />
        ))}
      </div>
    </div>
  );
};

const Skills = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section id="skills" className="relative py-24 sm:py-32 overflow-hidden bg-white dark:bg-[#0a0a0a]">
      
      {/* --- BLENDING ATMOSPHERE --- */}
      <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-white via-white/50 to-transparent dark:from-[#0a0a0a] dark:via-[#0a0a0a]/50 dark:to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-0 bg-grid-slate-200 dark:bg-grid-slate-800 [mask-image:radial-gradient(ellipse_at_top,white_30%,transparent_80%)] pointer-events-none opacity-40" />
      
      {/* Ambient Orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[40%] left-[-20%] w-[50vw] h-[50vh] bg-emerald-500/5 dark:bg-emerald-500/5 blur-[120px] rounded-full animate-float-slow" />
        <div className="absolute bottom-[20%] right-[-20%] w-[50vw] h-[50vh] bg-purple-500/5 dark:bg-purple-500/5 blur-[120px] rounded-full animate-float-medium" />
      </div>

      {/* Connecting Scroll Line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-32 bg-gray-200 dark:bg-gray-800 overflow-hidden z-20">
         <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-emerald-500/50 to-transparent animate-scroll-drop" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 z-30">
        
        {/* Header */}
        <div className="text-center mb-20">
          <div className={`inline-flex items-center gap-2 mb-6 transition-all duration-1000 ease-premium ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
             <div className="h-[1px] w-8 bg-emerald-500" />
             <span className="text-sm font-mono font-medium tracking-widest uppercase text-emerald-600 dark:text-emerald-400">Technical Arsenal</span>
             <div className="h-[1px] w-8 bg-emerald-500" />
          </div>
          
          <h2 className={`text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6 tracking-tight ${mounted ? 'reveal-text' : 'reveal-text-hidden'}`}>
            Engineered for <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-500">Scale & Performance.</span>
          </h2>
          
          <p className={`text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed transition-all duration-1000 delay-300 ease-premium ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            A robust toolkit designed to handle complex ML pipelines, scalable backend systems, and responsive user interfaces.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid lg:grid-cols-3 gap-6 sm:gap-8 mb-20">
          
          <SkillGroup
            title="Core Languages"
            skillList={skills.languages}
            icon={Terminal}
            delay={0}
          />
          
          <SkillGroup
            title="Intelligence & Data"
            skillList={skills.frameworks}
            icon={Brain}
            delay={150}
          />
          
          <SkillGroup
            title="Infrastructure & Tools"
            skillList={skills.tools}
            icon={Cpu}
            delay={300}
          />
        </div>

        {/* "R&D Lab" (Formerly Learning) */}
        <div className="relative mt-24">
           {/* Section Label */}
           <div className="flex items-center justify-center gap-4 mb-10 opacity-60">
             <div className="h-[1px] w-12 bg-gray-300 dark:bg-gray-700" />
             <div className="flex items-center gap-2 text-sm font-mono text-gray-500 dark:text-gray-400 uppercase tracking-widest">
               <Zap size={14} /> R&D Lab / Current Focus
             </div>
             <div className="h-[1px] w-12 bg-gray-300 dark:bg-gray-700" />
           </div>

           {/* Learning Card */}
           <div className="bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-black rounded-3xl border border-dashed border-gray-300 dark:border-gray-700 p-8 sm:p-12 max-w-4xl mx-auto text-center relative overflow-hidden group">
             
             {/* Animated Background Scan */}
             <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent -translate-x-full group-hover:animate-[shimmer_2s_infinite]" />

             <div className="flex justify-center mb-6">
               <div className="p-4 bg-gray-100 dark:bg-gray-800 rounded-2xl animate-pulse-soft">
                 <GitBranch size={32} className="text-gray-600 dark:text-gray-300" />
               </div>
             </div>
             
             <h3 className="text-2xl sm:text-3xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
               Exploring the Frontier
             </h3>
             <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed">
               I am currently deep-diving into <span className="text-emerald-600 dark:text-emerald-400 font-medium">Agentic AI Workflows</span> and <span className="text-emerald-600 dark:text-emerald-400 font-medium">Model Context Protocols (MCP)</span> to build the next generation of autonomous software agents.
             </p>
             
             <div className="flex flex-wrap justify-center gap-3">
               {['Rust', 'WebAssembly', 'MCP', 'Agentic Workflows', 'System Design'].map((tech, index) => (
                 <span 
                   key={tech}
                   className="px-4 py-2 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
                 >
                   {tech}
                 </span>
               ))}
             </div>
           </div>
        </div>

      </div>

      {/* Bottom Vignette */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-white via-white/50 to-transparent dark:from-[#0a0a0a] dark:via-[#0a0a0a]/50 dark:to-transparent z-10 pointer-events-none" />
    </section>
  );
};

export default Skills;