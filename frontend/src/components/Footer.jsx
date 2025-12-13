import React from 'react';
import { Github, Linkedin, Mail, Heart, Sparkles, ArrowUp, Command, Terminal } from 'lucide-react';
import { personalInfo } from '../data/mock';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const openLink = (url) => window.open(url, '_blank', 'noopener,noreferrer');
  const openEmail = () => window.location.href = `mailto:${personalInfo.email}`;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const navLinks = [
    { label: 'Home', id: 'hero' },
    { label: 'About', id: 'about' },
    { label: 'Projects', id: 'projects' },
    { label: 'Skills', id: 'skills' },
    { label: 'Contact', id: 'contact' }
  ];

  return (
    <footer className="relative bg-white dark:bg-[#0a0a0a] text-gray-900 dark:text-white transition-colors duration-300 overflow-hidden">
      
      {/* --- BLENDING & ATMOSPHERE --- */}
      <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-white via-white/50 to-transparent dark:from-[#0a0a0a] dark:via-[#0a0a0a]/50 dark:to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-0 bg-grid-slate-200 dark:bg-grid-slate-800 [mask-image:linear-gradient(to_bottom,transparent,white_10%,white_90%,transparent)] pointer-events-none opacity-30" />
      
      {/* Ambient Orb at bottom right */}
      <div className="absolute bottom-[-20%] right-[-10%] w-[50vw] h-[50vh] bg-emerald-500/5 dark:bg-emerald-500/5 blur-[120px] rounded-full pointer-events-none" />


      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 z-20">
        
        {/* Main Footer Content */}
        <div className="py-20 grid lg:grid-cols-4 gap-12 lg:gap-8 border-b border-gray-100 dark:border-gray-800">
          
          {/* Brand & Identity */}
          <div className="lg:col-span-2 space-y-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="p-2.5 bg-emerald-50 dark:bg-emerald-900/20 rounded-xl border border-emerald-100 dark:border-emerald-800/50">
                  <Terminal size={24} className="text-emerald-600 dark:text-emerald-400" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold tracking-tight">Bilal Rukundi</h3>
                  <p className="text-emerald-600 dark:text-emerald-400 font-mono text-sm">Machine Learning Engineer</p>
                </div>
              </div>
              <p className="text-gray-500 dark:text-gray-400 leading-relaxed max-w-md text-base">
                Architecting intelligent systems that bridge the gap between data and decision-making. 
                Focused on scalable ML pipelines and secure AI applications.
              </p>
            </div>
            
            {/* Social Matrix */}
            <div className="flex gap-3">
              {[
                { icon: Github, action: () => openLink(personalInfo.github), label: 'GitHub' },
                { icon: Linkedin, action: () => openLink(personalInfo.linkedin), label: 'LinkedIn' },
                { icon: Mail, action: openEmail, label: 'Email' }
              ].map(({ icon: Icon, action, label }) => (
                <button
                  key={label}
                  onClick={action}
                  className="group relative p-3 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:border-emerald-500/50 dark:hover:border-emerald-500/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-emerald-500/10"
                  aria-label={label}
                >
                  <Icon size={20} className="text-gray-600 dark:text-gray-400 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors" />
                </button>
              ))}
            </div>
          </div>

          {/* Navigation Links */}
          <div className="lg:pl-8">
            <h4 className="font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
              <Command size={16} className="text-emerald-500" /> Navigation
            </h4>
            <nav className="space-y-3">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="block text-gray-500 dark:text-gray-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors duration-300 text-sm font-medium hover:translate-x-1"
                >
                  {link.label}
                </button>
              ))}
            </nav>
          </div>

          {/* System Status / Contact Info */}
          <div>
            <h4 className="font-bold text-gray-900 dark:text-white mb-6">System Status</h4>
            <div className="space-y-4">
              <div className="p-4 rounded-2xl bg-gray-50 dark:bg-gray-800/50 border border-gray-100 dark:border-gray-700/50">
                <div className="flex items-center gap-2 mb-2">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                  </span>
                  <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">Operational</span>
                </div>
                <p className="text-xs text-gray-500 dark:text-gray-400 mb-2">
                  Currently available for new projects and collaborations.
                </p>
                <p className="text-xs font-mono text-gray-400 dark:text-gray-500">
                  Res Time: &lt; 24hrs
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs sm:text-sm text-gray-500 dark:text-gray-400">
          
          <div className="flex items-center gap-2">
            <span>© {currentYear} Bilal Rukundi</span>
            <span className="hidden sm:inline">•</span>
            <span className="flex items-center gap-1">
              Made with <Heart size={12} className="text-red-500 fill-red-500 animate-pulse" /> & Code
            </span>
          </div>

          <div className="flex items-center gap-4">
             {/* Tech Stack Pills */}
             <div className="flex gap-2">
                {['React', 'Tailwind', 'Motion'].map(tech => (
                  <span key={tech} className="px-2 py-1 rounded-md bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-xs font-mono">
                    {tech}
                  </span>
                ))}
             </div>

             {/* Scroll to Top Button */}
             <button 
               onClick={scrollToTop}
               className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-emerald-500 hover:text-white transition-all duration-300 group"
               title="Back to Top"
             >
               <ArrowUp size={16} className="group-hover:-translate-y-0.5 transition-transform" />
             </button>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;