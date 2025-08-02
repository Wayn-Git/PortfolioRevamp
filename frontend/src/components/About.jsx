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
      className={`text-center p-8 bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 hover:border-gray-200 dark:hover:border-gray-600 transition-all duration-500 hover:shadow-xl hover:-translate-y-2 group ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <div className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-3 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300">
        {stat.value}
      </div>
      <div className="text-gray-600 dark:text-gray-400 font-medium">{stat.label}</div>
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
      className={`bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 p-8 hover:border-gray-200 dark:hover:border-gray-600 transition-all duration-500 hover:shadow-xl hover:-translate-y-1 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <div className="flex items-start justify-between mb-6">
        <div>
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-2">{exp.title}</h3>
          <p className="text-gray-600 dark:text-gray-400 font-medium text-lg">{exp.company}</p>
        </div>
        <span className="px-4 py-2 bg-gradient-to-r from-purple-100 to-blue-100 dark:from-purple-900/30 dark:to-blue-900/30 text-purple-700 dark:text-purple-300 rounded-lg text-sm font-medium border border-purple-200 dark:border-purple-700">
          {exp.period}
        </span>
      </div>
      
      <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed text-lg">{exp.description}</p>
      
      <div className="space-y-3">
        {exp.achievements.map((achievement, index) => (
          <div key={index} className="flex items-start space-x-3 group">
            <div className="p-1 bg-green-100 dark:bg-green-900/30 rounded-full mt-1">
              <TrendingUp size={14} className="text-green-600 dark:text-green-400" />
            </div>
            <p className="text-gray-600 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-gray-300 transition-colors duration-200">
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
    <section id="about" className="py-24 bg-white dark:bg-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-gray-50 dark:bg-gray-700 px-6 py-2 rounded-full border border-gray-200 dark:border-gray-600 mb-6 hover:shadow-md transition-all duration-300">
            <Sparkles size={20} className="text-purple-600 dark:text-purple-400 animate-pulse" />
            <span className="text-gray-600 dark:text-gray-400 font-medium">About Me</span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl font-light text-gray-900 dark:text-gray-100 mb-6 animate-fade-in-up">
            About Me
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Passionate about transforming data into insights and building intelligent systems 
            that make a difference.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, index) => (
            <StatCard key={index} stat={stat} delay={index * 100} />
          ))}
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-16 mb-20">
          
          {/* About Text */}
          <div className="space-y-8">
            <div className="flex items-center space-x-4 mb-8">
              <div className="p-3 bg-gradient-to-br from-purple-100 to-blue-100 dark:from-purple-900/30 dark:to-blue-900/30 rounded-xl">
                <User size={28} className="text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="text-3xl font-semibold text-gray-900 dark:text-gray-100">My Journey</h3>
            </div>
            
            <div className="prose prose-lg text-gray-600 dark:text-gray-400 leading-relaxed space-y-6">
              {aboutText.split('\n\n').map((paragraph, index) => (
                <p key={index} className="text-lg leading-relaxed">
                  {paragraph.trim()}
                </p>
              ))}
            </div>
          </div>

          {/* Philosophy */}
          <div className="space-y-8">
            <div className="flex items-center space-x-4 mb-8">
              <div className="p-3 bg-gradient-to-br from-purple-100 to-blue-100 dark:from-purple-900/30 dark:to-blue-900/30 rounded-xl">
                <Target size={28} className="text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="text-3xl font-semibold text-gray-900 dark:text-gray-100">My Approach</h3>
            </div>
            
            <div className="space-y-6">
              {[
                { icon: Code, title: 'Clean Code', description: 'Writing maintainable, well-documented code that others can understand and build upon.' },
                { icon: TrendingUp, title: 'Data-Driven', description: 'Making decisions based on evidence and metrics, not assumptions or gut feelings.' },
                { icon: User, title: 'Continuous Learning', description: 'Staying current with the latest developments in ML/AI and constantly improving my skills.' }
              ].map(({ icon: Icon, title, description }, index) => (
                <div key={title} className="group p-6 bg-gray-50 dark:bg-gray-700 rounded-2xl hover:bg-gray-100 dark:hover:bg-gray-600 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                  <div className="flex items-center space-x-4 mb-3">
                    <div className="p-2 bg-white dark:bg-gray-800 rounded-lg group-hover:scale-110 transition-transform duration-300">
                      <Icon size={20} className="text-purple-600 dark:text-purple-400" />
                    </div>
                    <h4 className="font-semibold text-gray-900 dark:text-gray-100 text-lg">{title}</h4>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    {description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Experience Section */}
        <div>
          <h3 className="text-4xl font-semibold text-gray-900 dark:text-gray-100 text-center mb-16">Experience</h3>
          <div className="grid lg:grid-cols-2 gap-8">
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