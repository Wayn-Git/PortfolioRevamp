import React, { useEffect, useState } from 'react';
import { ArrowDown, Github, Linkedin, Mail, Sparkles } from 'lucide-react';
import { personalInfo } from '../data/mock';

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 500);
    return () => clearTimeout(timer);
  }, []);

  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const openLink = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const openEmail = () => {
    window.location.href = `mailto:${personalInfo.email}`;
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 transition-colors duration-300 overflow-hidden">
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-br from-purple-200/20 to-blue-200/20 dark:from-purple-800/10 dark:to-blue-800/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute top-1/3 right-1/4 w-48 h-48 bg-gradient-to-br from-pink-200/20 to-purple-200/20 dark:from-pink-800/10 dark:to-purple-800/10 rounded-full blur-3xl animate-float-delayed"></div>
        <div className="absolute bottom-1/4 left-1/3 w-56 h-56 bg-gradient-to-br from-blue-200/20 to-cyan-200/20 dark:from-blue-800/10 dark:to-cyan-800/10 rounded-full blur-3xl animate-float-slow"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-center relative z-10">
        
        {/* Main Content */}
        <div className="space-y-8">
          
          {/* Greeting Badge */}
          <div className={`inline-flex items-center space-x-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm px-6 py-2 rounded-full border border-gray-200/50 dark:border-gray-700/50 transition-all duration-1000 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
            <Sparkles size={16} className="text-purple-600 dark:text-purple-400 animate-pulse" />
            <span className="text-gray-600 dark:text-gray-400 font-medium">Hello, I'm</span>
          </div>

          {/* Name */}
          <div className={`space-y-4 transition-all duration-1000 delay-300 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extralight text-gray-900 dark:text-gray-100 tracking-tight">
              <span className="inline-block animate-fade-in-up">{personalInfo.name.split(' ')[0]}</span>{' '}
              <span className="inline-block animate-fade-in-up delay-200">{personalInfo.name.split(' ')[1]}</span>
            </h1>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light text-gray-700 dark:text-gray-300 tracking-wide">
              {personalInfo.title}
            </h2>
          </div>

          {/* Subtitle */}
          <p className={`text-xl sm:text-2xl text-gray-600 dark:text-gray-400 font-light max-w-4xl mx-auto leading-relaxed transition-all duration-1000 delay-500 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            {personalInfo.subtitle}
          </p>

          {/* Social Links */}
          <div className={`flex justify-center space-x-6 pt-8 transition-all duration-1000 delay-700 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            {[
              { icon: Github, action: () => openLink(personalInfo.github), label: 'GitHub' },
              { icon: Linkedin, action: () => openLink(personalInfo.linkedin), label: 'LinkedIn' },
              { icon: Mail, action: openEmail, label: 'Email' }
            ].map(({ icon: Icon, action, label }, index) => (
              <button
                key={label}
                onClick={action}
                className={`p-4 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 rounded-full hover:bg-gray-50 dark:hover:bg-gray-700 hover:border-gray-300 dark:hover:border-gray-600 transition-all duration-300 hover:scale-110 hover:shadow-xl group animate-bounce-in`}
                style={{ animationDelay: `${800 + index * 100}ms` }}
                aria-label={label}
              >
                <Icon size={24} className="text-gray-700 dark:text-gray-300 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300" />
              </button>
            ))}
          </div>

          {/* CTA Button */}
          <div className={`pt-8 transition-all duration-1000 delay-1000 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <button
              onClick={scrollToProjects}
              className="group inline-flex items-center space-x-3 bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 px-8 py-4 rounded-full hover:bg-gray-800 dark:hover:bg-gray-200 transition-all duration-300 hover:scale-105 hover:shadow-2xl font-medium"
            >
              <span>View My Work</span>
              <ArrowDown size={18} className="group-hover:translate-y-1 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-300 dark:border-gray-600 rounded-full flex justify-center backdrop-blur-sm">
          <div className="w-1 h-3 bg-gray-400 dark:bg-gray-500 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;