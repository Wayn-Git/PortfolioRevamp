import React from 'react';
import { User, Target, Code, TrendingUp } from 'lucide-react';
import { aboutText, stats, experience } from '../data/mock';

const StatCard = ({ stat }) => (
  <div className="text-center p-6 bg-white rounded-lg border border-gray-100">
    <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
    <div className="text-gray-600 font-medium">{stat.label}</div>
  </div>
);

const ExperienceCard = ({ exp }) => (
  <div className="bg-white rounded-lg border border-gray-100 p-6 hover:border-gray-200 transition-colors">
    <div className="flex items-start justify-between mb-4">
      <div>
        <h3 className="text-xl font-semibold text-gray-900">{exp.title}</h3>
        <p className="text-gray-600 font-medium">{exp.company}</p>
      </div>
      <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-lg text-sm font-medium">
        {exp.period}
      </span>
    </div>
    
    <p className="text-gray-600 mb-4 leading-relaxed">{exp.description}</p>
    
    <div className="space-y-2">
      {exp.achievements.map((achievement, index) => (
        <div key={index} className="flex items-start space-x-2">
          <TrendingUp size={16} className="text-green-600 mt-0.5 flex-shrink-0" />
          <p className="text-sm text-gray-600">{achievement}</p>
        </div>
      ))}
    </div>
  </div>
);

const About = () => {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-light text-gray-900 mb-6">
            About Me
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Passionate about transforming data into insights and building intelligent systems 
            that make a difference.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <StatCard key={index} stat={stat} />
          ))}
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          
          {/* About Text */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3 mb-6">
              <div className="p-2 bg-gray-100 rounded-lg">
                <User size={24} className="text-gray-700" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900">My Journey</h3>
            </div>
            
            <div className="prose prose-lg text-gray-600 leading-relaxed">
              {aboutText.split('\n\n').map((paragraph, index) => (
                <p key={index} className="mb-4">
                  {paragraph.trim()}
                </p>
              ))}
            </div>
          </div>

          {/* Philosophy */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3 mb-6">
              <div className="p-2 bg-gray-100 rounded-lg">
                <Target size={24} className="text-gray-700" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900">My Approach</h3>
            </div>
            
            <div className="space-y-4">
              <div className="p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center space-x-3 mb-2">
                  <Code size={18} className="text-gray-700" />
                  <h4 className="font-semibold text-gray-900">Clean Code</h4>
                </div>
                <p className="text-gray-600 text-sm">
                  Writing maintainable, well-documented code that others can understand and build upon.
                </p>
              </div>
              
              <div className="p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center space-x-3 mb-2">
                  <TrendingUp size={18} className="text-gray-700" />
                  <h4 className="font-semibold text-gray-900">Data-Driven</h4>
                </div>
                <p className="text-gray-600 text-sm">
                  Making decisions based on evidence and metrics, not assumptions or gut feelings.
                </p>
              </div>
              
              <div className="p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center space-x-3 mb-2">
                  <User size={18} className="text-gray-700" />
                  <h4 className="font-semibold text-gray-900">Continuous Learning</h4>
                </div>
                <p className="text-gray-600 text-sm">
                  Staying current with the latest developments in ML/AI and constantly improving my skills.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Experience Section */}
        <div>
          <h3 className="text-3xl font-semibold text-gray-900 text-center mb-12">Experience</h3>
          <div className="grid lg:grid-cols-2 gap-8">
            {experience.map((exp) => (
              <ExperienceCard key={exp.id} exp={exp} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;