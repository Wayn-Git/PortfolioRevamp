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
      // Opening: change state immediately, then animate
      setAnimationType('expand');
      setIsAnimating(true);
      setIsClosing(false);
      onToggle();
             setTimeout(() => {
         setIsAnimating(false);
         setAnimationType('');
       }, 800);
    } else {
      // Closing: animate first, then change state
      setAnimationType('collapse');
      setIsAnimating(true);
      setIsClosing(true);
      
      // Wait for animation to complete before changing state
             setTimeout(() => {
         onToggle();
         setIsAnimating(false);
         setAnimationType('');
         setIsClosing(false);
       }, 500); // Slightly shorter to account for the animation
    }
  };

  const openLink = (url, event) => {
    event.stopPropagation();
    if (url) {
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div 
      id={`project-${project.id}`}
      className={`bg-white dark:bg-gray-800 rounded-3xl border border-gray-100 dark:border-gray-700 hover:border-gray-200 dark:hover:border-gray-600 transition-all duration-600 ease-out cursor-pointer group hover:-translate-y-2 ${
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
       <div className="p-6">
                 {/* Header */}
         <div className="flex items-start justify-between mb-4">
          <div>
            <div className="flex items-center space-x-3 mb-3">
              <span className={`px-4 py-1 rounded-full text-sm font-medium border ${
                project.status === 'Completed' 
                  ? 'bg-green-50 dark:bg-green-900/30 text-green-700 dark:text-green-400 border-green-200 dark:border-green-700' 
                  : 'bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 border-blue-200 dark:border-blue-700'
              }`}>
                {project.status}
              </span>
              <span className="px-4 py-1 rounded-full text-sm font-medium bg-gray-50 dark:bg-gray-700 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-600">
                {project.category}
              </span>
            </div>
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-3 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300">
              {project.title}
            </h3>
          </div>

          {/* Action Buttons */}
          <div className="flex space-x-2">
            {project.githubUrl && (
              <button
                onClick={(e) => openLink(project.githubUrl, e)}
                className="p-3 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-all duration-300 bg-gray-50 dark:bg-gray-700 rounded-full hover:bg-gray-100 dark:hover:bg-gray-600 hover:scale-110"
                aria-label="View on GitHub"
              >
                <Github size={20} />
              </button>
            )}
            {project.demoUrl && (
              <button
                onClick={(e) => openLink(project.demoUrl, e)}
                className="p-3 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-all duration-300 bg-gray-50 dark:bg-gray-700 rounded-full hover:bg-gray-100 dark:hover:bg-gray-600 hover:scale-110"
                aria-label="View live demo"
              >
                <ExternalLink size={20} />
              </button>
            )}
          </div>
        </div>

                 {/* Description */}
                   <div className={`text-gray-600 dark:text-gray-400 leading-relaxed mb-4 text-base transition-all duration-600 ease-out ${
          isExpanded ? 'scale-100 opacity-100' : 'scale-95 opacity-90'
        }`}>
          {(isExpanded || isClosing) ? (
            <div 
              className="animate-fade-in-up"
              dangerouslySetInnerHTML={{ __html: project.longDescription }} 
            />
          ) : (
            <p>{project.description}</p>
          )}
        </div>

                 {/* Tech Stack */}
         <div className={`flex flex-wrap gap-2 mb-4 transition-all duration-600 ease-out ${
          (isExpanded || isClosing) ? 'scale-100 opacity-100' : 'scale-95 opacity-90'
        }`}>
          {project.techStack.map((tech, index) => (
                         <span 
               key={index}
               className="px-3 py-1.5 bg-gray-50 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg font-medium border border-gray-100 dark:border-gray-600 hover:bg-purple-50 dark:hover:bg-purple-900/20 hover:text-purple-700 dark:hover:text-purple-400 hover:border-purple-200 dark:hover:border-purple-700 transition-all duration-300 text-sm"
             >
              {tech}
            </span>
          ))}
        </div>

                 {/* Results - Show when expanded */}
         {(isExpanded || isClosing) && (
                       <div className="mt-6 p-4 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-800 rounded-2xl border border-gray-100 dark:border-gray-600 animate-fade-in-up transition-all duration-600 ease-out">
            <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-6 flex items-center text-xl">
              <div className="p-2 bg-purple-100 dark:bg-purple-900/30 rounded-lg mr-3">
                <TrendingUp size={20} className="text-purple-600 dark:text-purple-400" />
              </div>
              Key Results
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {Object.entries(project.results).map(([key, value]) => (
                <div key={key} className="text-center p-4 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-600">
                  <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">{value}</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400 capitalize font-medium">
                    {key.replace(/_/g, ' ')}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

                 {/* Expand/Collapse Indicator */}
         <div className="mt-4 pt-4 border-t border-gray-100 dark:border-gray-700 text-center">
          <span className="text-sm text-gray-500 dark:text-gray-400 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300">
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
    <section id="projects" className="py-24 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-white dark:bg-gray-800 px-6 py-2 rounded-full border border-gray-200 dark:border-gray-700 mb-6 hover:shadow-md transition-all duration-300">
            <Sparkles size={20} className="text-purple-600 dark:text-purple-400 animate-pulse" />
            <span className="text-gray-600 dark:text-gray-400 font-medium">Featured Projects</span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl font-light text-gray-900 dark:text-gray-100 mb-6 animate-fade-in-up">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-4xl mx-auto leading-relaxed">
            A collection of machine learning projects that demonstrate my passion for 
            solving real-world problems with intelligent algorithms and clean code.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
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

        {/* View All Button */}
        <div className="text-center">
          <button 
            onClick={() => window.open('https://github.com/Wayn-Git', '_blank')}
            className="group inline-flex items-center space-x-3 bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 px-8 py-4 rounded-full hover:bg-gray-800 dark:hover:bg-gray-200 transition-all duration-300 hover:scale-105 hover:shadow-2xl font-medium"
          >
            <Github size={20} className="group-hover:rotate-12 transition-transform duration-300" />
            <span>View All Projects on GitHub</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;