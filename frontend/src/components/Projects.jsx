import React, { useState, useEffect } from 'react';
import { Github, ExternalLink, TrendingUp, Sparkles } from 'lucide-react';
import { projects } from '../data/mock';

const ProjectCard = ({ project, isExpanded, onToggle, delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [animationType, setAnimationType] = useState('');
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById(`project-${project.id}`);
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, [project.id, delay]);

  const handleToggle = () => {
    const willExpand = !isExpanded;
    
    if (willExpand) {
      setAnimationType('expand');
      setIsAnimating(true);
      setIsClosing(false);
      onToggle();
      setTimeout(() => {
        setIsAnimating(false);
        setAnimationType('');
      }, 800);
    } else {
      setAnimationType('collapse');
      setIsAnimating(true);
      setIsClosing(true);
      
      setTimeout(() => {
        onToggle();
        setIsAnimating(false);
        setAnimationType('');
        setIsClosing(false);
      }, 500);
    }
  };

  const openLink = (url, event) => {
    if (url) {
      event.stopPropagation();
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div
      id={`project-${project.id}`}
      className={`bg-gray-100 dark:bg-gray-800 rounded-3xl border border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 transition-all duration-600 ease-out cursor-pointer group hover:-translate-y-2 ${
        isExpanded ? 'lg:col-span-2 scale-102 shadow-xl' : ''
      } ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      } ${isAnimating ? (animationType === 'expand' ? 'animate-zoom-in-expand' : 'animate-zoom-out-collapse') : ''}`}
      onClick={handleToggle}
    >
      {/* Project Image */}
      <div className={`overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-600 relative transition-all duration-600 ease-out ${
        isExpanded ? 'aspect-[21/9] rounded-t-2xl' : 'aspect-[16/10] rounded-t-3xl'
      }`}>
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-800 ease-out"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent group-hover:from-black/30 transition-colors duration-600 ease-out"></div>
      </div>

      {/* Project Content */}
      <div className="p-4 sm:p-6">
        {/* Header */}
        <div className="mb-3 sm:mb-4">
          {/* Title and Action Buttons - Stack on mobile, side by side on desktop */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4 mb-3">
            <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-900 dark:text-gray-100 line-clamp-2 order-1 sm:order-1">
              {project.title}
            </h3>
            
                         {/* Action Buttons */}
             <div className="flex items-center justify-center sm:justify-end space-x-2 order-2 sm:order-2 flex-shrink-0 w-full sm:w-auto">
               {project.githubUrl && (
                 <button
                   onClick={(e) => openLink(project.githubUrl, e)}
                   className="flex items-center justify-center p-2.5 sm:p-3 bg-white dark:bg-gray-700 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-600 transition-all duration-300 hover:scale-110 group min-w-[44px] min-h-[44px] border border-gray-200 dark:border-gray-600"
                   aria-label="View on GitHub"
                 >
                   <Github size={18} className="sm:w-4 sm:h-4 text-gray-700 dark:text-gray-300 group-hover:text-emerald-600 dark:group-hover:text-emerald-400" />
                 </button>
               )}
               {project.demoUrl && (
                 <button
                   onClick={(e) => openLink(project.demoUrl, e)}
                   className="flex items-center justify-center p-2.5 sm:p-3 bg-white dark:bg-gray-700 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-600 transition-all duration-300 hover:scale-110 group min-w-[44px] min-h-[44px] border border-gray-200 dark:border-gray-600"
                   aria-label="View Demo"
                 >
                   <ExternalLink size={18} className="sm:w-4 sm:h-4 text-gray-700 dark:text-gray-300 group-hover:text-emerald-600 dark:group-hover:text-emerald-400" />
                 </button>
               )}
             </div>
          </div>
          
          {/* Status and Category Tags */}
          <div className="flex items-center justify-center sm:justify-start space-x-2 sm:space-x-3">
            <span className={`px-2.5 sm:px-3 py-1 text-xs sm:text-sm font-medium rounded-full ${
              project.status === 'Completed' 
                ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 border border-green-200 dark:border-green-800'
                : 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-400 border border-yellow-200 dark:border-yellow-800'
            }`}>
              {project.status}
            </span>
            <span className="px-2.5 sm:px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs sm:text-sm font-medium rounded-full border border-gray-200 dark:border-gray-600">
              {project.category}
            </span>
          </div>
        </div>

        {/* Description */}
        <div className={`text-gray-600 dark:text-gray-400 leading-relaxed mb-3 sm:mb-4 text-sm sm:text-base transition-all duration-600 ease-out ${
          (isExpanded || isClosing) ? 'scale-100 opacity-100' : 'scale-95 opacity-90'
        }`}>
          {(isExpanded || isClosing) ? (
            <div
              className="animate-fade-in-up"
              dangerouslySetInnerHTML={{ __html: project.longDescription }}
            />
          ) : (
            <p className="line-clamp-3">{project.description}</p>
          )}
        </div>

        {/* Tech Stack */}
        <div className={`flex flex-wrap gap-2 mb-3 sm:mb-4 transition-all duration-600 ease-out ${
          (isExpanded || isClosing) ? 'scale-100 opacity-100' : 'scale-95 opacity-90'
        }`}>
          {project.techStack.map((tech, index) => (
            <span
              key={index}
              className="px-2 sm:px-3 py-1 sm:py-1.5 bg-gray-50 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg font-medium border border-gray-100 dark:border-gray-600 hover:bg-emerald-50 dark:hover:bg-emerald-900/20 hover:text-emerald-700 dark:hover:text-emerald-400 hover:border-emerald-200 dark:hover:border-emerald-700 transition-all duration-300 text-xs sm:text-sm"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Results - Show when expanded */}
        {(isExpanded || isClosing) && (
          <div className="mt-4 sm:mt-6 p-3 sm:p-4 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-800 rounded-2xl border border-gray-100 dark:border-gray-600 animate-fade-in-up transition-all duration-600 ease-out">
            <div className="flex items-center space-x-2 mb-3">
              <TrendingUp size={16} className="text-green-600 dark:text-green-400" />
              <h4 className="font-semibold text-gray-900 dark:text-gray-100 text-sm sm:text-base">Key Results</h4>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {Object.entries(project.results).map(([key, value]) => (
                <div key={key} className="text-center p-2 sm:p-3 bg-white dark:bg-gray-800 rounded-xl border border-gray-100 dark:border-gray-600">
                  <div className="text-lg sm:text-xl font-bold text-gray-900 dark:text-gray-100 mb-1">
                    {value}
                  </div>
                  <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 capitalize">
                    {key.replace(/_/g, ' ')}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Expand/Collapse Indicator */}
        <div className="mt-3 sm:mt-4 pt-3 sm:pt-4 border-t border-gray-100 dark:border-gray-700 text-center">
          <span className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors duration-300">
            {(isExpanded || isClosing) ? 'Click to collapse' : 'Click to read more'}
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
    <section id="projects" className="py-16 sm:py-20 lg:py-24 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <div className="inline-flex items-center space-x-2 bg-white dark:bg-gray-800 px-4 sm:px-6 py-2 rounded-full border border-gray-200 dark:border-gray-700 mb-4 sm:mb-6 hover:shadow-md transition-all duration-300">
            <Sparkles size={16} className="text-emerald-600 dark:text-emerald-400 animate-pulse" />
            <span className="text-gray-600 dark:text-gray-400 font-medium text-sm sm:text-base">Featured Work</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-gray-900 dark:text-gray-100 mb-4 sm:mb-6 animate-fade-in-up">
            My Projects
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed px-4">
            A collection of machine learning projects showcasing my expertise in building intelligent solutions 
            that solve real-world problems.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              isExpanded={expandedProject === project.id}
              onToggle={() => toggleProject(project.id)}
              delay={index * 200}
            />
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 sm:mt-20 lg:mt-24">
          <div className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-3xl border border-gray-100 dark:border-gray-700 p-6 sm:p-8 lg:p-12 max-w-4xl mx-auto hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-900 dark:text-gray-100 mb-4 sm:mb-6">
              Have a Project in Mind?
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-base sm:text-lg mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed">
              I'm always interested in new challenges and opportunities to apply machine learning 
              to solve complex problems. Let's discuss how we can work together.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center space-x-3 bg-emerald-600 dark:bg-emerald-500 text-white dark:text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl hover:bg-emerald-700 dark:hover:bg-emerald-600 transition-all duration-300 hover:scale-105 hover:shadow-xl font-medium text-base sm:text-lg"
            >
              <span>Let's Talk</span>
              <ExternalLink size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;