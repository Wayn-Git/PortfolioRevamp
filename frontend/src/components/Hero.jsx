import React from 'react';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import { personalInfo } from '../data/mock';

const Hero = () => {
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
    <section id="hero" className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
        
        {/* Main Content */}
        <div className="space-y-8">
          {/* Greeting */}
          <div className="space-y-2">
            <p className="text-gray-600 text-lg font-light tracking-wide">
              Hello, I'm
            </p>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extralight text-gray-900 tracking-tight">
              {personalInfo.name}
            </h1>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light text-gray-700 tracking-wide mt-4">
              {personalInfo.title}
            </h2>
          </div>

          {/* Subtitle */}
          <p className="text-xl sm:text-2xl text-gray-600 font-light max-w-3xl mx-auto leading-relaxed">
            {personalInfo.subtitle}
          </p>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 pt-8">
            <button
              onClick={() => openLink(personalInfo.github)}
              className="p-3 bg-white border border-gray-200 rounded-full hover:bg-gray-50 hover:border-gray-300 transition-all duration-200 hover:scale-110"
              aria-label="GitHub"
            >
              <Github size={24} className="text-gray-700" />
            </button>
            <button
              onClick={() => openLink(personalInfo.linkedin)}
              className="p-3 bg-white border border-gray-200 rounded-full hover:bg-gray-50 hover:border-gray-300 transition-all duration-200 hover:scale-110"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} className="text-gray-700" />
            </button>
            <button
              onClick={openEmail}
              className="p-3 bg-white border border-gray-200 rounded-full hover:bg-gray-50 hover:border-gray-300 transition-all duration-200 hover:scale-110"
              aria-label="Email"
            >
              <Mail size={24} className="text-gray-700" />
            </button>
          </div>

          {/* CTA Button */}
          <div className="pt-8">
            <button
              onClick={scrollToProjects}
              className="inline-flex items-center space-x-2 bg-gray-900 text-white px-8 py-4 rounded-lg hover:bg-gray-800 transition-all duration-200 hover:scale-105 font-medium"
            >
              <span>View My Work</span>
              <ArrowDown size={18} />
            </button>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-1/4 left-1/4 w-24 h-24 bg-gradient-to-br from-gray-100 to-gray-200 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute top-1/3 right-1/4 w-16 h-16 bg-gradient-to-br from-gray-200 to-gray-300 rounded-full opacity-20 animate-pulse delay-1000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-20 h-20 bg-gradient-to-br from-gray-100 to-gray-200 rounded-full opacity-20 animate-pulse delay-2000"></div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-300 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;