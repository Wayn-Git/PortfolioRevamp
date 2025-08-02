import React, { useState } from 'react';
import { Github, ExternalLink, Calendar, TrendingUp } from 'lucide-react';
import { projects } from '../data/mock';

const ProjectCard = ({ project, isExpanded, onToggle }) => {
  const openLink = (url, event) => {
    event.stopPropagation();
    if (url) {
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div 
      className={`bg-white rounded-2xl border border-gray-100 hover:border-gray-200 transition-all duration-300 hover:shadow-lg cursor-pointer ${
        isExpanded ? 'col-span-full' : ''
      }`}
      onClick={onToggle}
    >
      {/* Project Image */}
      <div className="aspect-[16/10] rounded-t-2xl overflow-hidden bg-gray-100">
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Project Content */}
      <div className="p-6">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div>
            <div className="flex items-center space-x-2 mb-2">
              <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                project.status === 'Completed' 
                  ? 'bg-green-100 text-green-800' 
                  : 'bg-blue-100 text-blue-800'
              }`}>
                {project.status}
              </span>
              <span className="px-3 py-1 rounded-full text-sm font-medium bg-gray-100 text-gray-700">
                {project.category}
              </span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              {project.title}
            </h3>
          </div>

          {/* Action Buttons */}
          <div className="flex space-x-2">
            {project.githubUrl && (
              <button
                onClick={(e) => openLink(project.githubUrl, e)}
                className="p-2 text-gray-600 hover:text-gray-900 transition-colors"
                aria-label="View on GitHub"
              >
                <Github size={20} />
              </button>
            )}
            {project.demoUrl && (
              <button
                onClick={(e) => openLink(project.demoUrl, e)}
                className="p-2 text-gray-600 hover:text-gray-900 transition-colors"
                aria-label="View live demo"
              >
                <ExternalLink size={20} />
              </button>
            )}
          </div>
        </div>

        {/* Description */}
        <p className="text-gray-600 leading-relaxed mb-4">
          {isExpanded ? project.longDescription : project.description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.techStack.map((tech, index) => (
            <span 
              key={index}
              className="px-3 py-1 bg-gray-50 text-gray-700 rounded-lg text-sm font-medium border border-gray-100"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Results - Show when expanded */}
        {isExpanded && (
          <div className="mt-6 p-4 bg-gray-50 rounded-lg">
            <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
              <TrendingUp size={18} className="mr-2" />
              Key Results
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {Object.entries(project.results).map(([key, value]) => (
                <div key={key} className="text-center">
                  <div className="text-2xl font-bold text-gray-900">{value}</div>
                  <div className="text-sm text-gray-600 capitalize">
                    {key.replace(/_/g, ' ')}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Expand/Collapse Indicator */}
        <div className="mt-4 pt-4 border-t border-gray-100 text-center">
          <span className="text-sm text-gray-500">
            {isExpanded ? 'Click to collapse' : 'Click to read more'}
          </span>
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const [expandedProject, setExpandedProject] = useState(null);

  const toggleProject = (projectId) => {
    setExpandedProject(expandedProject === projectId ? null : projectId);
  };

  return (
    <section id="projects" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-light text-gray-900 mb-6">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            A collection of machine learning projects that demonstrate my passion for 
            solving real-world problems with intelligent algorithms and clean code.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              isExpanded={expandedProject === project.id}
              onToggle={() => toggleProject(project.id)}
            />
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <button 
            onClick={() => window.open('https://github.com/bilalrukundi', '_blank')}
            className="inline-flex items-center space-x-2 bg-gray-900 text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition-colors duration-200"
          >
            <Github size={18} />
            <span>View All Projects on GitHub</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;