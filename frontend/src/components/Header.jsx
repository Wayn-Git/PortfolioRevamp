import React, { useState, useEffect } from 'react';
import { Menu, X, Download } from 'lucide-react';
import { personalInfo } from '../data/mock';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
    setIsMobileMenuOpen(false);
  };

  const handleCVDownload = () => {
    // Mock CV download - in real implementation, this would download actual CV
    const link = document.createElement('a');
    link.href = personalInfo.cvUrl;
    link.download = 'Bilal_Rukundi_CV.pdf';
    link.click();
  };

  const navItems = [
    { label: 'Home', id: 'hero' },
    { label: 'About', id: 'about' },
    { label: 'Projects', id: 'projects' },
    { label: 'Skills', id: 'skills' },
    { label: 'Contact', id: 'contact' }
  ];

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/90 backdrop-blur-md border-b border-gray-100 shadow-sm' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div 
            className="font-semibold text-xl cursor-pointer transition-transform hover:scale-105"
            onClick={() => scrollToSection('hero')}
          >
            <span className="text-gray-900">Bilal</span>
            <span className="text-gray-600 ml-1">Rukundi</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-gray-600 hover:text-gray-900 transition-colors duration-200 font-medium"
              >
                {item.label}
              </button>
            ))}
            
            {/* CV Download Button */}
            <button
              onClick={handleCVDownload}
              className="flex items-center space-x-2 bg-gray-900 text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors duration-200"
            >
              <Download size={16} />
              <span>CV</span>
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-gray-600 hover:text-gray-900 transition-colors"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 py-4">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-left text-gray-600 hover:text-gray-900 transition-colors duration-200 font-medium px-2 py-1"
                >
                  {item.label}
                </button>
              ))}
              
              <button
                onClick={handleCVDownload}
                className="flex items-center space-x-2 bg-gray-900 text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors duration-200 w-fit mt-2"
              >
                <Download size={16} />
                <span>Download CV</span>
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;