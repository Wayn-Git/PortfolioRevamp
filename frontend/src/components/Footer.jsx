import React from 'react';
import { Github, Linkedin, Mail, Heart, Sparkles } from 'lucide-react';
import { personalInfo } from '../data/mock';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const openLink = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const openEmail = () => {
    window.location.href = `mailto:${personalInfo.email}`;
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
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
    <footer className="bg-gray-900 dark:bg-gray-950 text-white transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Main Footer Content */}
        <div className="py-20 grid lg:grid-cols-4 gap-12">
          
          {/* Brand & Description */}
          <div className="lg:col-span-2 space-y-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-purple-600/20 rounded-lg">
                  <Sparkles size={24} className="text-purple-400" />
                </div>
                <div>
                  <h3 className="text-3xl font-semibold">Bilal Rukundi</h3>
                  <p className="text-gray-400 text-lg">Machine Learning Developer</p>
                </div>
              </div>
            </div>
            
            <p className="text-gray-300 leading-relaxed max-w-md text-lg">
              Passionate about building intelligent solutions that solve real-world problems. 
              Always learning, always coding, always improving.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              {[
                { icon: Github, action: () => openLink(personalInfo.github), label: 'GitHub' },
                { icon: Linkedin, action: () => openLink(personalInfo.linkedin), label: 'LinkedIn' },
                { icon: Mail, action: openEmail, label: 'Email' }
              ].map(({ icon: Icon, action, label }) => (
                <button
                  key={label}
                  onClick={action}
                  className="p-4 bg-gray-800 dark:bg-gray-900 rounded-xl hover:bg-gray-700 dark:hover:bg-gray-800 transition-all duration-300 hover:scale-110 hover:shadow-lg group border border-gray-700 dark:border-gray-800"
                  aria-label={label}
                >
                  <Icon size={24} className="text-gray-400 group-hover:text-purple-400 transition-colors duration-300" />
                </button>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-semibold mb-8 text-white">Quick Links</h4>
            <nav className="space-y-4">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="block text-gray-300 hover:text-white transition-all duration-300 text-left text-lg hover:translate-x-2 group"
                >
                  <span className="border-b border-transparent group-hover:border-purple-400 transition-colors duration-300">
                    {link.label}
                  </span>
                </button>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-semibold mb-8 text-white">Contact</h4>
            <div className="space-y-6">
              <div>
                <p className="text-gray-400 text-sm uppercase tracking-wide mb-2">Email</p>
                <button
                  onClick={openEmail}
                  className="text-gray-300 hover:text-white transition-colors duration-300 hover:underline"
                >
                  {personalInfo.email}
                </button>
              </div>
              <div>
                <p className="text-gray-400 text-sm uppercase tracking-wide mb-2">Availability</p>
                <p className="text-gray-300">Open for opportunities</p>
              </div>
              <div>
                <p className="text-gray-400 text-sm uppercase tracking-wide mb-2">Response Time</p>
                <p className="text-gray-300">Within 24 hours</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 dark:border-gray-900 py-10">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-6 sm:space-y-0">
            
            {/* Copyright */}
            <div className="flex items-center space-x-3 text-gray-400">
              <span>© {currentYear} Bilal Rukundi. All rights reserved.</span>
              <Heart size={16} className="text-red-500 animate-pulse" />
            </div>

            {/* Tech Stack Credit */}
            <div className="flex items-center space-x-3">
              <span className="text-gray-400">Built with</span>
              <div className="flex space-x-2">
                {['React', 'Tailwind', 'FastAPI'].map((tech) => (
                  <span 
                    key={tech}
                    className="px-3 py-1 bg-gray-800 dark:bg-gray-900 text-gray-300 rounded-lg text-sm border border-gray-700 dark:border-gray-800"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;