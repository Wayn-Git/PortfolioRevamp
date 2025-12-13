import React, { useState, useEffect, useRef } from 'react';
import { Github, ExternalLink, TrendingUp, Code, ArrowRight, ChevronDown } from 'lucide-react';
import { projects } from '../data/mock';

/* --- Helper Components --- */

const StatusBadge = ({ status }) => {
  const isCompleted = status === 'Completed';
  
  return (
    <div className={`
      inline-flex items-center px-3 py-1 rounded-full text-xs font-mono font-medium tracking-wider uppercase border
      ${isCompleted 
        ? 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20' 
        : 'bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20'
      }
    `}>
      <span className={`flex h-1.5 w-1.5 rounded-full mr-2 ${isCompleted ? 'bg-emerald-500' : 'bg-amber-500 animate-pulse'}`} />
      {status}
    </div>
  );
};

const ProjectCard = ({ project, index, isExpanded, onToggle }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const domRef = useRef();

  // --- FIX 1: ONE-TIME ANIMATION TRIGGER ---
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.unobserve(entry.target); // STOP watching once visible
      }
    }, { threshold: 0.1 });
    
    if (domRef.current) observer.observe(domRef.current);
    return () => observer.disconnect();
  }, []);

  // --- FIX 2: SMOOTHER SCROLL FOCUS ---
  useEffect(() => {
    if (isExpanded && domRef.current) {
      setTimeout(() => {
        domRef.current.scrollIntoView({ 
          behavior: 'smooth', 
          block: 'center', // Centers the card instead of snapping to top
          inline: 'nearest'
        });
      }, 400); // Wait for layout shift to finish
    }
  }, [isExpanded]);

  const handleOpenLink = (url, e) => {
    e.stopPropagation();
    if (url) window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div
      ref={domRef}
      onClick={onToggle}
      className={`
        group relative flex flex-col overflow-hidden rounded-3xl cursor-pointer scroll-mt-32
        bg-white dark:bg-[#0f0f0f]
        border border-gray-200 dark:border-gray-800
        will-change-transform
        ${isExpanded 
          ? 'lg:col-span-2 shadow-2xl ring-1 ring-emerald-500/20 z-20' 
          : 'hover:shadow-xl hover:-translate-y-1 hover:border-emerald-500/30'
        }
        transition-all duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)]
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}
      `}
      style={{ transitionDelay: isVisible ? `${index * 100}ms` : '0ms' }}
    >
      {/* --- IMAGE HEADER --- */}
      <div className={`relative w-full overflow-hidden bg-gray-100 dark:bg-gray-800 transition-all duration-700 ease-[cubic-bezier(0.25,0.1,0.25,1)] ${isExpanded ? 'h-64 sm:h-96' : 'h-56'}`}>
        
        {/* Skeleton Loader */}
        <div className={`absolute inset-0 bg-gray-200 dark:bg-gray-700 animate-pulse transition-opacity duration-500 ${imageLoaded ? 'opacity-0' : 'opacity-100'}`} />
        
        <img 
          src={project.image} 
          alt={project.title}
          loading="lazy"
          onLoad={() => setImageLoaded(true)}
          className={`
            w-full h-full object-cover transition-transform duration-1000 ease-out will-change-transform
            ${imageLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-105'}
            ${isExpanded ? 'scale-100' : 'group-hover:scale-105'} 
          `}
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-90" />
        
        {/* Floating Category Badge */}
        <div className="absolute top-4 left-4 z-10">
          <span className="px-3 py-1 bg-white/10 backdrop-blur-md text-xs font-semibold text-white rounded-full border border-white/20 shadow-lg">
            {project.category}
          </span>
        </div>

        {/* Expand/Collapse Icon */}
        <div className="absolute top-4 right-4 z-10">
          <div className={`p-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white transition-transform duration-500 ${isExpanded ? 'rotate-180 bg-white/20' : ''}`}>
             <ChevronDown size={20} />
          </div>
        </div>

        {/* Title Overlay */}
        <div className={`absolute bottom-0 left-0 right-0 p-6 sm:p-8 transition-transform duration-700 ${isExpanded ? 'translate-y-0' : 'translate-y-2'}`}>
           <h3 className="text-2xl sm:text-4xl font-bold text-white mb-2 tracking-tight drop-shadow-lg">
             {project.title}
           </h3>
           {!isExpanded && (
             <p className="text-emerald-400 text-sm font-medium tracking-wide uppercase opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center gap-2">
               View Dossier <ArrowRight size={14} />
             </p>
           )}
        </div>
      </div>

      {/* --- CONTENT BODY --- */}
      <div className="flex-1 bg-white dark:bg-[#0f0f0f] relative">
        
        {/* Progress Bar Animation */}
        <div className="h-[2px] w-full bg-gray-100 dark:bg-gray-800">
          <div className={`h-full bg-emerald-500 transition-all duration-1000 ease-out ${isExpanded ? 'w-full opacity-100' : 'w-0 opacity-0'}`} />
        </div>

        <div className="p-6 sm:p-8">
          {/* Header Row */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
            <StatusBadge status={project.status} />
            
            <div className="flex gap-2">
              {project.githubUrl && (
                <button
                  onClick={(e) => handleOpenLink(project.githubUrl, e)}
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all duration-300 text-xs font-bold uppercase tracking-wide"
                >
                  <Github size={16} /> Code
                </button>
              )}
               {project.demoUrl && (
                <button
                  onClick={(e) => handleOpenLink(project.demoUrl, e)}
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50 dark:bg-emerald-900/20 text-emerald-700 dark:text-emerald-400 hover:bg-emerald-500 hover:text-white transition-all duration-300 text-xs font-bold uppercase tracking-wide"
                >
                  <ExternalLink size={16} /> Live Demo
                </button>
              )}
            </div>
          </div>

          {/* Description - Optimized Transition */}
          <div className={`text-gray-600 dark:text-gray-400 leading-relaxed mb-8 transition-all duration-500 ${isExpanded ? 'line-clamp-none' : 'line-clamp-3'}`}>
             {isExpanded ? (
               <div dangerouslySetInnerHTML={{ __html: project.longDescription }} className="prose dark:prose-invert max-w-none animate-fade-in-up" />
             ) : (
               project.description
             )}
          </div>

          {/* EXPANDED CONTENT - Optimized height transition */}
          <div 
            className={`
              grid gap-6 overflow-hidden transition-[max-height,opacity,margin] duration-700 ease-in-out
              ${isExpanded ? 'max-h-[1000px] opacity-100 mt-6' : 'max-h-0 opacity-0 mt-0'}
            `}
          >
            
            {/* 1. Results Grid */}
            <div className="bg-gray-50 dark:bg-gray-800/50 rounded-2xl p-6 border border-gray-100 dark:border-gray-700/50">
               <div className="flex items-center gap-2 mb-4 text-sm font-bold uppercase tracking-widest text-emerald-600 dark:text-emerald-400">
                  <TrendingUp size={16} /> Key Metrics
               </div>
               <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                 {Object.entries(project.results).map(([key, value], i) => (
                   <div key={i} className="bg-white dark:bg-gray-900 p-4 rounded-xl border border-gray-100 dark:border-gray-800 shadow-sm">
                     <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">{value}</div>
                     <div className="text-xs text-gray-500 uppercase">{key.replace('_', ' ')}</div>
                   </div>
                 ))}
               </div>
            </div>

            {/* 2. Tech Stack */}
            <div>
              <div className="flex items-center gap-2 mb-4 text-sm font-bold uppercase tracking-widest text-gray-500 dark:text-gray-400">
                <Code size={16} /> Technologies
              </div>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech, i) => (
                  <span 
                    key={i}
                    className="px-3 py-1.5 text-xs font-mono font-medium rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 border border-gray-200 dark:border-gray-700"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            
          </div>

          {/* Collapsed Tech Stack Preview - Cross-fades nicely */}
          <div className={`mt-auto pt-6 border-t border-gray-100 dark:border-gray-800 transition-all duration-300 ${isExpanded ? 'opacity-0 h-0 hidden' : 'opacity-100 h-auto block'}`}>
             <div className="flex flex-wrap gap-2">
               {project.techStack.slice(0, 3).map((tech, i) => (
                 <span key={i} className="text-xs text-gray-500 font-mono">{tech}</span>
               ))}
               <span className="text-xs text-emerald-500 font-medium">+ {project.techStack.length - 3} more</span>
             </div>
          </div>

        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const [mounted, setMounted] = useState(false);
  const [expandedId, setExpandedId] = useState(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleToggle = (id) => {
    setExpandedId(prevId => (prevId === id ? null : id));
  };

  return (
    <section id="projects" className="relative py-24 sm:py-32 overflow-hidden bg-white dark:bg-[#0a0a0a]">
      
      {/* --- BLENDING & ATMOSPHERE --- */}
      <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-white via-white/50 to-transparent dark:from-[#0a0a0a] dark:via-[#0a0a0a]/50 dark:to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-0 bg-grid-slate-200 dark:bg-grid-slate-800 [mask-image:linear-gradient(to_bottom,transparent,white_20%,white_80%,transparent)] pointer-events-none opacity-40" />
      
      {/* Ambient Orbs - Slowed down float for less distraction */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[20%] right-[-10%] w-[40vw] h-[40vh] bg-emerald-500/5 dark:bg-emerald-500/5 blur-[120px] rounded-full animate-float-slow" />
        <div className="absolute bottom-[10%] left-[-10%] w-[40vw] h-[40vh] bg-blue-500/5 dark:bg-blue-500/5 blur-[100px] rounded-full animate-float-medium" />
      </div>

      {/* Connecting Scroll Line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-32 bg-gray-200 dark:bg-gray-800 overflow-hidden z-20">
         <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-emerald-500/50 to-transparent animate-scroll-drop" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 z-30">
        
        {/* Header */}
        <div className="text-center mb-24">
          <div className={`inline-flex items-center gap-2 mb-6 transition-all duration-1000 ease-premium ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
             <div className="h-[1px] w-12 bg-emerald-500/50" />
             <span className="text-sm font-mono font-medium tracking-widest uppercase text-emerald-600 dark:text-emerald-400">System Logs / Projects</span>
             <div className="h-[1px] w-12 bg-emerald-500/50" />
          </div>
          
          <h2 className={`text-5xl sm:text-6xl font-bold text-gray-900 dark:text-white mb-6 tracking-tight ${mounted ? 'reveal-text' : 'reveal-text-hidden'}`}>
            Architecting <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-teal-400">Intelligence.</span>
          </h2>
        </div>

        {/* Masonry-style Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {projects.map((project, index) => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              index={index} 
              isExpanded={expandedId === project.id}
              onToggle={() => handleToggle(project.id)}
            />
          ))}
        </div>

        {/* Footer CTA */}
        <div className="mt-32 text-center">
          <button 
            onClick={() => window.open('https://github.com/Wayn-Git', '_blank')}
            className="group relative inline-flex items-center justify-center px-8 py-4 font-bold text-white transition-all duration-300 bg-black dark:bg-white dark:text-black rounded-full hover:scale-105 shadow-lg hover:shadow-emerald-500/20"
          >
            <span className="mr-2">Explore GitHub</span>
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

      </div>
    </section>
  );
};

export default Projects;