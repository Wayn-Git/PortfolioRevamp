import React, { useState, useEffect } from 'react';
import { Menu, X, Download, Moon, Sun } from 'lucide-react';
import { personalInfo } from '../data/mock';
import { useTheme } from '../context/ThemeContext';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { isDark, toggleTheme } = useTheme();

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
<header className={`fixed top-0 w-full z-50 transition-all duration-500 ${
  isScrolled 
    ? 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl border-b border-gray-100 dark:border-gray-800 shadow-sm'
    : 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl border-b border-gray-100 dark:border-gray-800 shadow-sm'
}`}>
<div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
    <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div 
            className="font-semibold text-xl cursor-pointer transition-all duration-300 hover:scale-105 group"
            onClick={() => scrollToSection('hero')}
          >
            <span className="text-gray-900 dark:text-gray-100 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300">Bilal</span>
            <span className="text-gray-600 dark:text-gray-400 ml-1 group-hover:text-purple-500 dark:group-hover:text-purple-500 transition-colors duration-300">Rukundi</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-all duration-300 font-medium relative group py-2"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-600 dark:bg-purple-400 transition-all duration-300 group-hover:w-full"></span>
              </button>
            ))}
            
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-all duration-300 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
              aria-label="Toggle theme"
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            
            {/* CV Download Button */}
            <button
              onClick={handleCVDownload}
              className="flex items-center space-x-2 bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 px-4 py-2 rounded-lg hover:bg-gray-800 dark:hover:bg-gray-200 transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              <Download size={16} />
              <span>CV</span>
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2">
            <button
              onClick={toggleTheme}
              className="p-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
              aria-label="Toggle theme"
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

         {/* Mobile Navigation */}
    {isMobileMenuOpen && (
      <div
        className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800 py-4 shadow-lg transition-all duration-300 transform animate-slide-down"
        style={{ borderRadius: '0 0 1rem 1rem' }}
      >
        <nav className="flex flex-col space-y-2">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="text-left text-gray-700 dark:text-gray-300 hover:text-purple-700 dark:hover:text-purple-400 transition-colors duration-200 font-medium px-2 py-2 text-base rounded-md"
            >
              {item.label}
            </button>
          ))}
          <button
            onClick={handleCVDownload}
            className="flex items-center space-x-2 bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 px-3 py-2 rounded-md hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors duration-200 w-fit mt-2 text-sm"
          >
            <Download size={14} />
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