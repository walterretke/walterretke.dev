'use client';

import { useRef } from 'react';
import { motion } from 'framer-motion';

export interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  link?: string;
  imageUrl: string;
  type: 'professional' | 'personal';
  company?: string;
  period?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ 
  title, 
  description, 
  technologies, 
  link, 
  imageUrl, 
  type, 
  company, 
  period 
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}
      className="bg-gray-800 p-6 rounded-lg shadow-lg text-center hover:bg-gray-700 transition-colors duration-300"
      style={{ minHeight: '450px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}
    >
      <div>
        <img src={imageUrl} alt={title} className="mb-4 rounded-lg object-cover h-48 w-full" />
        {company && (
          <div className="mb-2">
            <span className="text-orange-500 text-sm font-medium">{company}</span>
            {period && <span className="text-gray-400 text-xs ml-2">• {period}</span>}
          </div>
        )}
        <h3 className="text-2xl font-semibold mb-2 text-white">{title}</h3>
        <p className="text-gray-300 mb-4 text-sm leading-relaxed">{description}</p>
        <div className="flex flex-wrap gap-2 justify-center mb-4">
          {technologies.map((tech, index) => (
            <span 
              key={index} 
              className="bg-gray-700 text-xs px-2 py-1 rounded-full text-gray-200"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
      {link ? (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-orange-500 hover:text-orange-700 transition-colors duration-300 mt-auto"
        >
          View on GitHub
        </a>
      ) : (
        <span className="text-gray-500 text-sm mt-auto">Enterprise Project</span>
      )}
    </motion.div>
  );
};

interface ProjectsSectionProps {
  projects: ProjectCardProps[];
}

const ProjectsSection: React.FC<ProjectsSectionProps> = ({ projects }) => {
  const professionalProjects = projects.filter(p => p.type === 'professional');
  const personalProjects = projects.filter(p => p.type === 'personal');

  const professionalRef = useRef<HTMLDivElement>(null);
  const personalRef = useRef<HTMLDivElement>(null);

  const scrollByAmount = 340;
  const scroll = (ref: React.RefObject<HTMLDivElement>, direction: -1 | 1) => {
    ref.current?.scrollBy({ left: direction * scrollByAmount, behavior: 'smooth' });
  };

  return (
    <section id='portfolio' className="flex flex-col items-center py-16 bg-black text-white">
      {/* Professional Projects - Featured */}
      <h2 className="text-4xl font-semibold text-center mb-4">Professional Projects</h2>
      <p className="text-gray-400 text-center mb-12 max-w-2xl">
        Enterprise-level projects I've architected and developed in production environments
      </p>
      
      <div className="relative w-full max-w-6xl mx-auto mb-16">
        <button
          aria-label="Scroll left"
          onClick={() => scroll(professionalRef, -1)}
          className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-gray-800/70 hover:bg-gray-700 text-white rounded-full w-10 h-10 items-center justify-center shadow"
        >
          ‹
        </button>
        <div
          ref={professionalRef}
          className="flex flex-nowrap gap-6 overflow-x-auto px-12 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']"
        >
          {professionalProjects.map((project, index) => (
            <div key={`prof-${index}`} className="snap-start shrink-0 w-[320px]">
              <ProjectCard {...project} />
            </div>
          ))}
        </div>
        <button
          aria-label="Scroll right"
          onClick={() => scroll(professionalRef, 1)}
          className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-gray-800/70 hover:bg-gray-700 text-white rounded-full w-10 h-10 items-center justify-center shadow"
        >
          ›
        </button>
      </div>

      {/* Personal Projects - Secondary */}
      {personalProjects.length > 0 && (
        <>
          <div className="w-full max-w-4xl mx-auto border-t border-gray-700 mb-12"></div>
          <h3 className="text-2xl font-medium text-center mb-8 text-gray-300">Personal Projects</h3>
          <div className="relative w-full max-w-4xl mx-auto">
            <button
              aria-label="Scroll left"
              onClick={() => scroll(personalRef, -1)}
              className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-gray-800/70 hover:bg-gray-700 text-white rounded-full w-10 h-10 items-center justify-center shadow"
            >
              ‹
            </button>
            <div
              ref={personalRef}
              className="flex flex-nowrap gap-6 overflow-x-auto px-12 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']"
            >
              {personalProjects.map((project, index) => (
                <div key={`pers-${index}`} className="snap-start shrink-0 w-[300px]">
                  <ProjectCard {...project} />
                </div>
              ))}
            </div>
            <button
              aria-label="Scroll right"
              onClick={() => scroll(personalRef, 1)}
              className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-gray-800/70 hover:bg-gray-700 text-white rounded-full w-10 h-10 items-center justify-center shadow"
            >
              ›
            </button>
          </div>
        </>
      )}
    </section>
  );
};

export default ProjectsSection;