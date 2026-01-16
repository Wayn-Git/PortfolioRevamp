import React, { useState, useEffect, useRef } from 'react';
import {
  Brain,
  Cpu,
  Terminal,
  GitBranch,
  BarChart
} from 'lucide-react';
import { skills } from '../data/mock';

/* --- Helper Components --- */

const TechBadge = ({ skill, index }) => {
  return (
    <div
      className="
        group relative flex items-center gap-2 px-3 py-2
        bg-white dark:bg-gray-900/50
        border border-gray-200 dark:border-gray-700
        rounded-lg cursor-default
        transition-all duration-300 ease-out
        hover:border-emerald-500/50
        hover:shadow-[0_0_12px_rgba(16,185,129,0.15)]
        hover:-translate-y-0.5
        dark:hover:bg-gray-800
      "
      style={{ transitionDelay: `${index * 40}ms` }}
    >
      {/* Level Dot */}
      <div
        className={`
          w-1.5 h-1.5 rounded-full
          ${
            skill.level >= 90
              ? 'bg-emerald-500 shadow-[0_0_6px_rgba(16,185,129,0.6)]'
              : skill.level >= 80
              ? 'bg-emerald-400'
              : 'bg-gray-400'
          }
          transition-transform duration-300 group-hover:scale-125
        `}
      />

      <span className="text-sm font-medium text-gray-700 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white transition-colors">
        {skill.name}
      </span>

      {/* Subtle shimmer */}
      <div className="absolute inset-0 rounded-lg overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-[200%] h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-[shimmer_1.2s_infinite]" />
      </div>
    </div>
  );
};

const SkillGroup = ({ title, skillList, icon: Icon, delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.15 }
    );

    if (domRef.current) observer.observe(domRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={domRef}
      className={`
        relative flex flex-col p-6 sm:p-8 rounded-3xl overflow-hidden
        bg-white/50 dark:bg-gray-900/50 backdrop-blur-md
        border border-gray-100 dark:border-gray-800
        transition-all duration-700 ease-out
        hover:border-gray-300 dark:hover:border-gray-700
        hover:shadow-xl hover:shadow-emerald-500/5
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
      `}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {/* Subtle grid texture */}
      <div className="absolute inset-0 bg-grid-slate-200 dark:bg-grid-slate-800 opacity-[0.04] pointer-events-none" />

      {/* Header */}
      <div className="relative z-10 mb-6 flex items-center gap-3">
        <div className="p-2.5 rounded-xl bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-emerald-600 dark:text-emerald-400">
          <Icon size={20} />
        </div>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
          {title}
        </h3>
      </div>

      {/* Skills */}
      <div className="relative z-10 flex flex-wrap gap-2">
        {skillList.map((skill, index) => (
          <TechBadge key={index} skill={skill} index={index} />
        ))}
      </div>
    </div>
  );
};

const Skills = () => {
  return (
    <section
      id="skills"
      className="relative py-24 sm:py-32 overflow-hidden bg-white dark:bg-[#0a0a0a]"
    >
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 z-30">
        
        {/* Header */}
        <div className="text-center mb-20">
          <span className="inline-block mb-4 text-sm font-mono tracking-widest uppercase text-emerald-600 dark:text-emerald-400">
            Technical Arsenal
          </span>

          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6 tracking-tight">
            Built for <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-500">Real-World Systems</span>
          </h2>

          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
            A focused and production-ready skill set covering machine learning,
            backend engineering, data processing, and modern tooling.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid lg:grid-cols-4 gap-6 sm:gap-8 mb-24">
          <SkillGroup
            title="Core Languages"
            skillList={skills.languages}
            icon={Terminal}
            delay={0}
          />

          <SkillGroup
            title="ML & Frameworks"
            skillList={skills.frameworks}
            icon={Brain}
            delay={100}
          />

          <SkillGroup
            title="Libraries & Data"
            skillList={skills.libraries}
            icon={BarChart}
            delay={200}
          />

          <SkillGroup
            title="Infrastructure & Tools"
            skillList={skills.tools}
            icon={Cpu}
            delay={300}
          />
        </div>

        {/* R&D Lab */}
        <div className="mt-20 text-center">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-gray-100 dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700">
              <GitBranch size={28} className="text-gray-600 dark:text-gray-300" />
            </div>
          </div>

          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
            R&D Lab / Current Focus
          </h3>

          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-6 leading-relaxed">
            Currently exploring agentic AI workflows, Model Context Protocols (MCP),
            and system-level design patterns for building autonomous AI systems.
          </p>

          <div className="flex flex-wrap justify-center gap-3">
            {['Rust', 'WebAssembly', 'MCP', 'Agentic Workflows', 'System Design'].map(
              (tech) => (
                <span
                  key={tech}
                  className="
                    px-4 py-2 rounded-lg
                    bg-white dark:bg-gray-800
                    border border-gray-200 dark:border-gray-700
                    text-sm font-medium text-gray-600 dark:text-gray-300
                    hover:text-emerald-600 dark:hover:text-emerald-400
                    transition-colors
                  "
                >
                  {tech}
                </span>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
