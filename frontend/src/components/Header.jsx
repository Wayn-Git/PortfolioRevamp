import React, { useState, useEffect } from 'react';
import { Menu, X, Download, Moon, Sun } from 'lucide-react';
import { personalInfo, experience } from '../data/mock';
import { useTheme } from '../context/ThemeContext';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { isDark, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 20 && !isScrolled) setIsScrolled(true);
      if (scrollPosition < 20 && isScrolled) setIsScrolled(false);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isScrolled]);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  const scrollToSection = (sectionId) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      setTimeout(() => {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 300);
    }
  };

  const navItems = [
    { label: 'Home', id: 'hero' },
    { label: 'Experience', id: 'experience'},
    { label: 'Projects', id: 'projects' },
    { label: 'Skills', id: 'skills' },
    { label: 'Contact', id: 'contact' }
  ];

  return (
    <>
      {/* Container Wrapper:
        - Fixed at top.
        - Flex center to ensure the inner 'pill' stays perfectly centered during width changes.
        - Animates padding-top to give the "detach" effect.
      */}
      <header 
        className={`fixed top-0 left-0 right-0 z-50 flex justify-center transition-all duration-700 cubic-bezier(0.16, 1, 0.3, 1) ${isScrolled ? 'pt-4' : 'pt-0'}`}
      >
        <div 
          className={`
            relative flex items-center justify-between
            transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]
            ${isScrolled 
              ? 'w-[90%] md:w-[70%] lg:max-w-4xl bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl rounded-full border border-gray-200/50 dark:border-gray-700/50 shadow-lg px-6 h-14 md:h-16' 
              : 'w-full max-w-7xl bg-transparent border-transparent px-6 md:px-8 h-20 md:h-24' 
            }
          `}
        >
          
          {/* Logo */}
          <div 
            className="flex items-center gap-2 cursor-pointer group z-50"
            onClick={() => scrollToSection('hero')}
          >
            <div className={`
              flex items-center justify-center w-8 h-8 rounded-full font-bold text-sm transition-colors duration-500
              ${isScrolled 
                ? 'bg-gray-900 dark:bg-white text-white dark:text-gray-900' 
                : 'bg-gray-900 dark:bg-white text-white dark:text-gray-900 md:bg-transparent md:dark:bg-transparent md:text-gray-900 md:dark:text-white'
              }
            `}>
              B
            </div>
            <span className={`font-medium tracking-tight transition-opacity duration-500 ${isScrolled ? 'opacity-100' : 'opacity-0 md:opacity-100'}`}>
              Rukundi
            </span>
          </div>

          {/* Desktop Nav - Always Visible now */}
          <nav className="hidden md:flex items-center gap-1 absolute left-1/2 -translate-x-1/2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`
                  px-4 py-1.5 text-sm font-medium transition-colors duration-300
                  ${isScrolled 
                    ? 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white' 
                    : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'
                  }
                `}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Right Actions */}
          <div className="hidden md:flex items-center gap-3">
             <button
              onClick={toggleTheme}
              className={`p-2 rounded-full transition-colors ${isScrolled ? 'hover:bg-gray-100 dark:hover:bg-gray-800' : 'hover:bg-white/10'}`}
            >
              {isDark ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <button
              onClick={() => window.open(personalInfo.cvUrl, '_blank')}
              className={`
                flex items-center gap-2 px-5 py-2 rounded-full text-sm font-medium transition-all duration-300
                ${isScrolled
                  ? 'bg-gray-900 dark:bg-white text-white dark:text-gray-900 hover:opacity-90'
                  : 'bg-gray-900 dark:bg-white text-white dark:text-gray-900 shadow-sm hover:shadow-md hover:-translate-y-0.5'
                }
              `}
            >
              <span>Resume</span>
              <Download size={14} />
            </button>
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden flex items-center gap-3 z-50">
             <button onClick={toggleTheme} className="text-gray-600 dark:text-gray-400">
               {isDark ? <Sun size={20} /> : <Moon size={20} />}
             </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-1 text-gray-900 dark:text-white"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div 
        className={`
          fixed inset-0 z-40 bg-white dark:bg-gray-950 flex flex-col pt-32 px-8
          transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]
          ${isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'}
        `}
      >
        <div className="flex flex-col space-y-6">
          {navItems.map((item, idx) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`
                text-4xl font-light text-left tracking-tight text-gray-900 dark:text-white
                transition-all duration-700 ease-out
                ${isMobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}
              `}
              style={{ transitionDelay: `${100 + (idx * 50)}ms` }}
            >
              {item.label}
            </button>
          ))}
          
          <div className={`
            h-px bg-gray-200 dark:bg-gray-800 my-4 w-full
            transition-all duration-700 delay-300
            ${isMobileMenuOpen ? 'scale-x-100 opacity-100' : 'scale-x-0 opacity-0'}
          `} />
          
          <button 
            onClick={() => window.open(personalInfo.cvUrl, '_blank')}
            className={`
              text-xl font-medium text-gray-600 dark:text-gray-400 flex items-center gap-3
              transition-all duration-700 delay-500
              ${isMobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}
            `}
          >
            Download Resume <Download size={20} />
          </button>
        </div>
      </div>
    </>
  );
};

export default Header;