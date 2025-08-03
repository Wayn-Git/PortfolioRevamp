import React, { useState, useEffect } from 'react';
import { Menu, X, Download, Moon, Sun } from 'lucide-react';
import { personalInfo } from '../data/mock';
import { useTheme } from '../context/ThemeContext';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { isDark, toggleTheme } = useTheme();
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (isMobileMenuOpen) {
      setIsMenuVisible(true);
      setIsAnimating(true);
    } else {
      setIsAnimating(false);
      const timer = setTimeout(() => setIsMenuVisible(false), 300);
      return () => clearTimeout(timer);
    }
  }, [isMobileMenuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
      if (isMobileMenuOpen) setIsMobileMenuOpen(false);  // Close mobile menu on scroll
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isMobileMenuOpen]);

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
    <header className={`fixed top-0 w-full z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl border-b border-gray-100 dark:border-gray-800 shadow-sm'
        : 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl border-b border-gray-100 dark:border-gray-800 shadow-sm'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14 sm:h-16">
          {/* Logo */}
          <div 
            className="font-semibold text-lg sm:text-xl cursor-pointer transition-all duration-300 hover:scale-105 group"
            onClick={() => scrollToSection('hero')}
          >
            <span className="text-gray-900 dark:text-gray-100 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300">Bilal</span>
            <span className="text-gray-600 dark:text-gray-400 ml-1 group-hover:text-purple-500 dark:group-hover:text-purple-500 transition-colors duration-300">Rukundi</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-all duration-300 font-medium relative group py-2 text-sm lg:text-base"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-600 dark:bg-purple-400 transition-all duration-300 group-hover:w-full"></span>
              </button>
            ))}
            
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-1.5 sm:p-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-all duration-300 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
              aria-label="Toggle theme"
            >
              {isDark ? <Sun size={18} className="sm:w-5 sm:h-5" /> : <Moon size={18} className="sm:w-5 sm:h-5" />}
            </button>
            
            {/* CV Download Button */}
            <button
              onClick={handleCVDownload}
              className="flex items-center space-x-1.5 sm:space-x-2 bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg hover:bg-gray-800 dark:hover:bg-gray-200 transition-all duration-300 hover:scale-105 hover:shadow-lg text-sm sm:text-base"
            >
              <Download size={14} className="sm:w-4 sm:h-4" />
              <span>CV</span>
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-1 sm:space-x-2">
            <button
              onClick={toggleTheme}
              className="p-1.5 sm:p-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
              aria-label="Toggle theme"
            >
              {isDark ? <Sun size={18} className="sm:w-5 sm:h-5" /> : <Moon size={18} className="sm:w-5 sm:h-5" />}
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-1.5 sm:p-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
            >
              {isMobileMenuOpen ? <X size={20} className="sm:w-6 sm:h-6" /> : <Menu size={20} className="sm:w-6 sm:h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuVisible && (
          <div 
            className={`md:hidden fixed top-14 sm:top-16 left-0 right-0 transition-all duration-300 ease-in-out ${
              isAnimating ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
            }`}
          >
            <nav className="bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl border-b border-gray-100 dark:border-gray-800 shadow-lg">
              <div className="max-w-7xl mx-auto px-4 py-3">
                <div className="flex flex-col space-y-1">
                  {navItems.map((item, index) => (
                    <button
                      key={item.id}
                      onClick={() => {
                        scrollToSection(item.id);
                        setIsMobileMenuOpen(false);
                      }}
                      className={`w-full text-left px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg text-gray-700 dark:text-gray-300 
                        hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-200 
                        font-medium text-base sm:text-lg opacity-0 animate-fadeIn`}
                      style={{ animationDelay: `${index * 50}ms` }}
                    >
                      {item.label}
                    </button>
                  ))}
                  
                  <button
                    onClick={handleCVDownload}
                    className={`w-full mt-2 flex items-center justify-center space-x-2 
                      bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 
                      px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg hover:bg-gray-800 dark:hover:bg-gray-200 
                      transition-all duration-200 opacity-0 animate-fadeIn text-sm sm:text-base`}
                    style={{ animationDelay: `${navItems.length * 50}ms` }}
                  >
                    <Download size={16} className="sm:w-4.5 sm:h-4.5" />
                    <span>Download CV</span>
                  </button>
                </div>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;