import React, { useEffect, useState } from 'react';
import { Code, Database, Brain, Sparkles } from 'lucide-react';
import { skills } from '../data/mock';

const SkillPill = ({ skill, delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div 
      className={`inline-flex items-center space-x-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full hover:border-gray-300 dark:hover:border-gray-600 transition-all duration-300 hover:shadow-md hover:scale-105 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-500 rounded-full animate-pulse"></span>
      <span className="font-medium text-gray-900 dark:text-gray-100 text-sm sm:text-base">{skill.name}</span>
    </div>
  );
};

const SkillCategory = ({ title, skillList, icon: Icon, delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById(`skill-category-${title.toLowerCase()}`);
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, [title]);

  return (
    <div 
      id={`skill-category-${title.toLowerCase()}`}
      className={`bg-white dark:bg-gray-800 rounded-3xl border border-gray-100 dark:border-gray-700 p-6 sm:p-8 hover:border-gray-200 dark:hover:border-gray-600 transition-all duration-500 hover:shadow-xl hover:-translate-y-1 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="flex items-center space-x-2 sm:space-x-3 mb-6 sm:mb-8">
        <div className="p-2 sm:p-3 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-600 rounded-xl group-hover:scale-110 transition-transform duration-300">
          <Icon size={24} className="sm:w-7 sm:h-7 text-gray-700 dark:text-gray-300" />
        </div>
        <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-gray-100">{title}</h3>
      </div>
      
      <div className="flex flex-wrap gap-2 sm:gap-3">
        {skillList.map((skill, index) => (
          <SkillPill 
            key={index} 
            skill={skill} 
            delay={isVisible ? index * 100 : 0}
          />
        ))}
      </div>
    </div>
  );
};

const Skills = () => {
  return (
    <section id="skills" className="py-16 sm:py-20 lg:py-24 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <div className="inline-flex items-center space-x-2 bg-white dark:bg-gray-800 px-4 sm:px-6 py-2 rounded-full border border-gray-200 dark:border-gray-700 mb-4 sm:mb-6 hover:shadow-md transition-all duration-300">
            <Sparkles size={16} className="sm:w-5 sm:h-5 text-purple-600 dark:text-purple-400 animate-pulse" />
            <span className="text-gray-600 dark:text-gray-400 font-medium text-sm sm:text-base">Skills & Technologies</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-gray-900 dark:text-gray-100 mb-4 sm:mb-6 animate-fade-in-up">
            Technical Expertise
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed px-4">
            A comprehensive toolkit for building intelligent systems, from foundational programming 
            languages to advanced machine learning frameworks.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
          
          {/* Programming Languages */}
          <SkillCategory
            title="Languages"
            skillList={skills.languages}
            icon={Code}
            delay={0}
          />
          
          {/* ML Frameworks & Libraries */}
          <SkillCategory
            title="ML & Data Science"
            skillList={skills.frameworks}
            icon={Brain}
            delay={200}
          />
          
          {/* Tools & Technologies */}
          <SkillCategory
            title="Tools & Platforms"
            skillList={skills.tools}
            icon={Database}
            delay={400}
          />
        </div>

        {/* Learning Section */}
        <div className="text-center">
          <div className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-3xl border border-gray-100 dark:border-gray-700 p-6 sm:p-8 lg:p-12 max-w-5xl mx-auto hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
            <div className="flex justify-center mb-4 sm:mb-6">
              <div className="p-3 sm:p-4 bg-gradient-to-br from-purple-100 to-blue-100 dark:from-purple-900/20 dark:to-blue-900/20 rounded-2xl">
                <Brain size={28} className="sm:w-8 sm:h-8 text-purple-600 dark:text-purple-400" />
              </div>
            </div>
            
            <h3 className="text-2xl sm:text-3xl font-semibold text-gray-900 dark:text-gray-100 mb-4 sm:mb-6">
              Always Learning
            </h3>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6 sm:mb-8 text-base sm:text-lg max-w-3xl mx-auto">
              The field of machine learning evolves rapidly, and I'm committed to staying at the 
              forefront of technological advancement. Currently exploring cutting-edge areas in AI and ML.
            </p>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
              {['Transformers', 'MLOps', 'Docker', 'Kubernetes', 'PyTorch', 'FastAPI'].map((tech, index) => (
                <div 
                  key={tech}
                  className="group cursor-pointer"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 px-3 sm:px-4 py-2 sm:py-3 rounded-xl font-medium text-center hover:border-purple-300 dark:hover:border-purple-600 transition-all duration-300 hover:shadow-lg hover:scale-105 group-hover:text-purple-600 dark:group-hover:text-purple-400">
                    <span className="text-gray-700 dark:text-gray-300 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300 text-sm sm:text-base">
                      {tech}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;