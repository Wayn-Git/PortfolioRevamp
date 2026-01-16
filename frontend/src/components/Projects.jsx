import React, { useState, useEffect, useRef } from 'react';
import {
  Github,
  ExternalLink,
  TrendingUp,
  Code,
  ArrowRight,
  ChevronDown
} from 'lucide-react';
import { projects } from '../data/mock';

/* =========================
   STATUS BADGE
========================= */

const StatusBadge = ({ status }) => {
  const completed = status === 'Completed';

  return (
    <div
      className={`
        inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono uppercase tracking-wider border
        ${
          completed
            ? 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20'
            : 'bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20'
        }
      `}
    >
      <span
        className={`h-1.5 w-1.5 rounded-full ${
          completed ? 'bg-emerald-500' : 'bg-amber-500 animate-pulse'
        }`}
      />
      {status}
    </div>
  );
};

/* =========================
   PROJECT CARD
========================= */

const ProjectCard = ({ project, index, expanded, onToggle }) => {
  const cardRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  /* Reveal once */
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.15 }
    );

    if (cardRef.current) observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, []);

  /* Smooth focus on expand */
  useEffect(() => {
    if (expanded && cardRef.current) {
      setTimeout(() => {
        cardRef.current.scrollIntoView({
          behavior: 'smooth',
          block: 'center'
        });
      }, 400);
    }
  }, [expanded]);

  const openLink = (url, e) => {
    e.stopPropagation();
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div
      ref={cardRef}
      onClick={onToggle}
      style={{ transitionDelay: `${index * 100}ms` }}
      className={`
        group relative flex flex-col overflow-hidden rounded-3xl cursor-pointer
        bg-white dark:bg-[#0f0f0f]
        border border-gray-200 dark:border-gray-800
        transition-all duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)]
        ${
          expanded
            ? 'lg:col-span-2 shadow-2xl ring-1 ring-emerald-500/20 z-20'
            : 'hover:-translate-y-1 hover:shadow-xl hover:border-emerald-500/30'
        }
        ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}
      `}
    >
      {/* IMAGE HEADER */}
      <div
        className={`
          relative overflow-hidden bg-gray-100 dark:bg-gray-900
          transition-all duration-700
          ${expanded ? 'h-64 sm:h-96' : 'h-56'}
        `}
      >
        {!imageLoaded && (
          <div className="absolute inset-0 bg-gray-200 dark:bg-gray-800 animate-pulse" />
        )}

        <img
          src={project.image}
          alt={project.title}
          loading="lazy"
          onLoad={() => setImageLoaded(true)}
          className={`
            w-full h-full object-cover
            transition-transform duration-[1400ms] ease-out
            ${imageLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-105'}
            ${!expanded && 'group-hover:scale-[1.08]'}
          `}
        />

        {/* DARK + EMERALD OVERLAYS */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-black/10" />
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 via-transparent to-teal-500/10" />

        {/* CATEGORY */}
        <span className="absolute top-4 left-4 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-emerald-300 bg-black/40 backdrop-blur-lg rounded-full border border-emerald-500/20">
          {project.category}
        </span>

        {/* EXPAND ICON */}
        <div
          className={`
            absolute top-4 right-4 p-2 rounded-full
            bg-black/40 backdrop-blur-lg border border-white/10 text-white
            transition-transform duration-500
            ${expanded && 'rotate-180'}
          `}
        >
          <ChevronDown size={20} />
        </div>

        {/* TITLE */}
        <div className="absolute bottom-0 p-6 sm:p-8">
          <h3 className="text-2xl sm:text-4xl font-bold text-white">
            {project.title}
          </h3>
          {!expanded && (
            <p className="mt-1 text-emerald-400 text-sm uppercase tracking-wide opacity-0 group-hover:opacity-100 transition">
              View details →
            </p>
          )}
        </div>
      </div>

      {/* CONTENT */}
      <div className="flex-1">
        <div className="h-[2px] bg-gray-100 dark:bg-gray-800">
          <div
            className={`h-full bg-emerald-500 transition-all duration-1000 ${
              expanded ? 'w-full' : 'w-0'
            }`}
          />
        </div>

        <div className="p-6 sm:p-8">
          {/* HEADER */}
          <div className="flex flex-wrap justify-between gap-4 mb-6">
            <StatusBadge status={project.status} />

            <div className="flex gap-2">
              {project.githubUrl && (
                <button
                  onClick={(e) => openLink(project.githubUrl, e)}
                  className="flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold uppercase bg-gray-100 dark:bg-gray-800 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition"
                >
                  <Github size={16} /> Code
                </button>
              )}
              {project.demoUrl && (
                <button
                  onClick={(e) => openLink(project.demoUrl, e)}
                  className="flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold uppercase bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 hover:bg-emerald-500 hover:text-white transition"
                >
                  <ExternalLink size={16} /> Live
                </button>
              )}
            </div>
          </div>

          {/* DESCRIPTION */}
          <div className="text-gray-600 dark:text-gray-400 mb-8">
            {expanded ? (
              <div
                className="prose dark:prose-invert max-w-none"
                dangerouslySetInnerHTML={{
                  __html: project.longDescription
                }}
              />
            ) : (
              <p className="line-clamp-3">{project.description}</p>
            )}
          </div>

          {/* EXPANDED */}
          <div
            className={`
              grid gap-6 overflow-hidden transition-all duration-700
              ${expanded ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}
            `}
          >
            {/* METRICS */}
            <div className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-black rounded-2xl p-6 border hover:ring-1 hover:ring-emerald-500/20 transition">
              <div className="flex items-center gap-2 mb-4 text-sm font-bold uppercase text-emerald-500">
                <TrendingUp size={16} /> Key Metrics
              </div>

              <div className="grid sm:grid-cols-3 gap-4">
                {Object.entries(project.results).map(([key, value]) => (
                  <div
                    key={key}
                    className="bg-white dark:bg-gray-900 p-4 rounded-xl border"
                  >
                    <div className="text-2xl font-bold">{value}</div>
                    <div className="text-xs uppercase text-gray-500">
                      {key.replace('_', ' ')}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* TECH STACK */}
            <div>
              <div className="flex items-center gap-2 mb-4 text-sm font-bold uppercase text-gray-500">
                <Code size={16} /> Technologies
              </div>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 text-xs font-mono rounded-lg bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 hover:border-emerald-500/40 transition"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* COLLAPSED PREVIEW */}
          {!expanded && (
            <div className="mt-6 pt-6 border-t">
              <div className="text-xs text-gray-500 font-mono">
                {project.techStack.slice(0, 3).join(', ')} +{' '}
                {project.techStack.length - 3} more
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

/* =========================
   PROJECTS SECTION
========================= */

const Projects = () => {
  const [expandedId, setExpandedId] = useState(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  return (
    <section
      id="projects"
      className="relative py-24 sm:py-32 bg-white dark:bg-[#0a0a0a]"
    >
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* HEADER */}
        <div className="text-center mb-24">
          <span className="text-sm font-mono uppercase tracking-widest text-emerald-500">
            System Logs / Projects
          </span>
          <h2
            className={`text-5xl sm:text-6xl font-bold mt-6 ${
              mounted ? 'reveal-text' : 'reveal-text-hidden'
            }`}
          >
            Architecting{' '}
            <span className="bg-gradient-to-r from-emerald-500 to-teal-400 bg-clip-text text-transparent">
              Intelligence
            </span>
          </h2>
        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
          {projects.map((project, i) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={i}
              expanded={expandedId === project.id}
              onToggle={() =>
                setExpandedId(expandedId === project.id ? null : project.id)
              }
            />
          ))}
        </div>

        {/* CTA */}
        <div className="mt-32 text-center">
          <button
            onClick={() =>
              window.open('https://github.com/Wayn-Git', '_blank')
            }
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold bg-black text-white dark:bg-white dark:text-black hover:scale-105 transition"
          >
            Explore GitHub <ArrowRight />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
