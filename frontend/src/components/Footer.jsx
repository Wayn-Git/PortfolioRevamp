import React from 'react';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';
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
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Main Footer Content */}
        <div className="py-16 grid lg:grid-cols-4 gap-12">
          
          {/* Brand & Description */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <h3 className="text-2xl font-semibold mb-2">Bilal Rukundi</h3>
              <p className="text-gray-400">Machine Learning Developer</p>
            </div>
            <p className="text-gray-300 leading-relaxed mb-6 max-w-md">
              Passionate about building intelligent solutions that solve real-world problems. 
              Always learning, always coding, always improving.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              <button
                onClick={() => openLink(personalInfo.github)}
                className="p-3 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors"
                aria-label="GitHub"
              >
                <Github size={20} />
              </button>
              <button
                onClick={() => openLink(personalInfo.linkedin)}
                className="p-3 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </button>
              <button
                onClick={openEmail}
                className="p-3 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors"
                aria-label="Email"
              >
                <Mail size={20} />
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <nav className="space-y-3">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="block text-gray-300 hover:text-white transition-colors text-left"
                >
                  {link.label}
                </button>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact</h4>
            <div className="space-y-3">
              <div>
                <p className="text-gray-400 text-sm">Email</p>
                <button
                  onClick={openEmail}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  {personalInfo.email}
                </button>
              </div>
              <div>
                <p className="text-gray-400 text-sm">Availability</p>
                <p className="text-gray-300">Open for opportunities</p>
              </div>
              <div>
                <p className="text-gray-400 text-sm">Response Time</p>
                <p className="text-gray-300">Within 24 hours</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 py-8">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            
            {/* Copyright */}
            <div className="flex items-center space-x-2 text-gray-400 text-sm">
              <span>© {currentYear} Bilal Rukundi. All rights reserved.</span>
              <Heart size={16} className="text-red-500" />
            </div>

            {/* Tech Stack Credit */}
            <div className="text-gray-400 text-sm">
              <span>Built with React, Tailwind CSS & FastAPI</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;