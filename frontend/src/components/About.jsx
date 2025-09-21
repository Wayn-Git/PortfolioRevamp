import React, { useEffect, useState } from 'react';
import { User, Target, Code, TrendingUp, Sparkles } from 'lucide-react';
import { aboutText, stats, experience } from '../data/mock';

const StatCard = ({ stat, delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById(`stat-${stat.label.replace(/\s+/g, '-')}`);
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, [stat.label, delay]);

  return (
    <div 
      id={`stat-${stat.label.replace(/\s+/g, '-')}`}
      className={`text-center p-4 sm:p-6 lg:p-8 bg-gray-100 dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 transition-all duration-500 hover:shadow-xl hover:-translate-y-2 group ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-2 sm:mb-3 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors duration-300">
        {stat.value}
      </div>
      <div className="text-gray-600 dark:text-gray-400 font-medium text-sm sm:text-base">{stat.label}</div>
    </div>
  );
};

const ExperienceCard = ({ exp, delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById(`experience-${exp.id}`);
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, [exp.id, delay]);

  return (
    <div 
      id={`experience-${exp.id}`}
      className={`bg-gray-50 dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 p-6 sm:p-8 hover:border-gray-200 dark:hover:border-gray-600 transition-all duration-500 hover:shadow-xl hover:-translate-y-1 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 sm:gap-6 mb-4 sm:mb-6">
        <div className="flex-1">
          <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-2">{exp.title}</h3>
          <p className="text-gray-600 dark:text-gray-400 font-medium text-base sm:text-lg">{exp.company}</p>
        </div>
        <span className="px-3 sm:px-4 py-1 sm:py-2 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-800 dark:text-emerald-300 rounded-lg text-xs sm:text-sm font-medium border border-emerald-200 dark:border-emerald-700 self-start">
          {exp.period}
        </span>
      </div>
      
      <p className="text-gray-600 dark:text-gray-400 mb-4 sm:mb-6 leading-relaxed text-base sm:text-lg">{exp.description}</p>
      
      <div className="space-y-2 sm:space-y-3">
        {exp.achievements.map((achievement, index) => (
          <div key={index} className="flex items-start space-x-2 sm:space-x-3 group">
            <div className="p-1 bg-emerald-100 dark:bg-emerald-900/30 rounded-full mt-1 flex-shrink-0">
              <TrendingUp size={12} className="sm:w-3.5 sm:h-3.5 text-emerald-600 dark:text-emerald-400" />
            </div>
            <p className="text-gray-600 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-gray-300 transition-colors duration-200 text-sm sm:text-base">
              {achievement}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

const About = () => {
  return (
    <section id="about" className="py-16 sm:py-20 lg:py-24 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <div className="inline-flex items-center space-x-2 bg-gray-100 dark:bg-gray-800 px-4 sm:px-6 py-2 rounded-full border border-gray-200 dark:border-gray-700 mb-4 sm:mb-6 hover:shadow-md transition-all duration-300">
            <Sparkles size={16} className="sm:w-5 sm:h-5 text-emerald-600 dark:text-emerald-400 animate-pulse" />
            <span className="text-gray-600 dark:text-gray-300 font-medium text-sm sm:text-base">About Me</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-gray-900 dark:text-gray-100 mb-4 sm:mb-6 animate-fade-in-up">
            About Me
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed px-4">
            Passionate about transforming data into insights and building intelligent systems 
            that make a difference.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-16 sm:mb-20">
          {stats.map((stat, index) => (
            <StatCard key={index} stat={stat} delay={index * 100} />
          ))}
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 sm:gap-16 mb-16 sm:mb-20">
          
          {/* About Text */}
          <div className="space-y-6 sm:space-y-8">
            <div className="flex items-center space-x-3 sm:space-x-4 mb-6 sm:mb-8">
              <div className="p-2 sm:p-3 bg-slate-100 dark:bg-slate-800 rounded-xl">
                <User size={24} className="sm:w-7 sm:h-7 text-slate-600 dark:text-slate-400" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-semibold text-gray-900 dark:text-gray-100">My Journey</h3>
            </div>
            
            <div className="prose prose-lg text-gray-600 dark:text-gray-400 leading-relaxed space-y-4 sm:space-y-6">
              {aboutText.split('\n\n').map((paragraph, index) => (
                <p key={index} className="text-base sm:text-lg leading-relaxed">
                  {paragraph.trim()}
                </p>
              ))}
            </div>
          </div>

          {/* Philosophy */}
          <div className="space-y-6 sm:space-y-8">
            <div className="flex items-center space-x-3 sm:space-x-4 mb-6 sm:mb-8">
              <div className="p-2 sm:p-3 bg-slate-100 dark:bg-slate-800 rounded-xl">
                <Target size={24} className="sm:w-7 sm:h-7 text-slate-600 dark:text-slate-400" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-semibold text-gray-900 dark:text-gray-100">My Approach</h3>
            </div>
            
            <div className="space-y-4 sm:space-y-6">
              {[
                { icon: Code, title: 'Clean Code', description: 'Writing maintainable, well-documented code that others can understand and build upon.' },
                { icon: TrendingUp, title: 'Data-Driven', description: 'Making decisions based on evidence and metrics, not assumptions or gut feelings.' },
                { icon: User, title: 'Continuous Learning', description: 'Staying current with the latest developments in ML/AI and constantly improving my skills.' }
              ].map(({ icon: Icon, title, description }, index) => (
                <div key={title} className="group p-4 sm:p-6 bg-gray-50 dark:bg-gray-700 rounded-2xl hover:bg-gray-100 dark:hover:bg-gray-600 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                  <div className="flex items-center space-x-3 sm:space-x-4 mb-3">
                    <div className="p-1.5 sm:p-2 bg-gray-50 dark:bg-gray-800 rounded-lg group-hover:scale-110 transition-transform duration-300">
                      <Icon size={18} className="sm:w-5 sm:h-5 text-emerald-600 dark:text-emerald-400" />
                    </div>
                    <h4 className="font-semibold text-gray-900 dark:text-gray-100 text-base sm:text-lg">{title}</h4>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm sm:text-base">
                    {description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Experience Section */}
        <div>
          <h3 className="text-3xl sm:text-4xl font-semibold text-gray-900 dark:text-gray-100 text-center mb-12 sm:mb-16">Experience</h3>
          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8">
            {experience.map((exp, index) => (
              <ExperienceCard key={exp.id} exp={exp} delay={index * 200} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;