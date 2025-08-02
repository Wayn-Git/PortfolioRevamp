import React from 'react';
import { Code, Database, Brain } from 'lucide-react';
import { skills } from '../data/mock';

const SkillBar = ({ skill }) => (
  <div className="mb-6">
    <div className="flex justify-between items-center mb-2">
      <span className="font-medium text-gray-900">{skill.name}</span>
      <span className="text-sm text-gray-600">{skill.level}%</span>
    </div>
    <div className="w-full bg-gray-200 rounded-full h-2">
      <div 
        className="bg-gray-900 h-2 rounded-full transition-all duration-1000 ease-out"
        style={{ width: `${skill.level}%` }}
      ></div>
    </div>
  </div>
);

const SkillCategory = ({ title, skillList, icon: Icon, delay = 0 }) => (
  <div 
    className="bg-white rounded-2xl border border-gray-100 p-8 hover:border-gray-200 transition-all duration-300 hover:shadow-lg"
    style={{ animationDelay: `${delay}ms` }}
  >
    <div className="flex items-center space-x-3 mb-6">
      <div className="p-3 bg-gray-100 rounded-lg">
        <Icon size={24} className="text-gray-700" />
      </div>
      <h3 className="text-2xl font-semibold text-gray-900">{title}</h3>
    </div>
    
    <div className="space-y-4">
      {skillList.map((skill, index) => (
        <SkillBar key={index} skill={skill} />
      ))}
    </div>
  </div>
);

const Skills = () => {
  return (
    <section id="skills" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-light text-gray-900 mb-6">
            Skills & Technologies
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            A comprehensive toolkit for building intelligent systems, from foundational programming 
            languages to advanced machine learning frameworks.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          
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

        {/* Additional Information */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl border border-gray-100 p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Always Learning
            </h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              The field of machine learning evolves rapidly, and I'm committed to staying at the 
              forefront of technological advancement. Currently exploring cutting-edge areas like 
              transformer architectures, reinforcement learning, and MLOps best practices.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {['Transformers', 'MLOps', 'Docker', 'Kubernetes', 'PyTorch', 'FastAPI'].map((tech) => (
                <span 
                  key={tech}
                  className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg font-medium border border-gray-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;