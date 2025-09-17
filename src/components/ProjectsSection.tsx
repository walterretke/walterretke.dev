'use client';

import { useState } from 'react';
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
      className="bg-gray-800 p-6 rounded-lg shadow-lg text-center hover:bg-gray-700 transition-colors duration-300 w-full sm:w-1/2 lg:w-1/3"
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

  return (
    <section id='portfolio' className="flex flex-col items-center py-16 bg-black text-white">
      {/* Professional Projects - Featured */}
      <h2 className="text-4xl font-semibold text-center mb-4">Professional Projects</h2>
      <p className="text-gray-400 text-center mb-12 max-w-2xl">
        Enterprise-level projects I&apos;ve architected and developed in production environments
      </p>
      
      <div className="flex flex-wrap justify-center max-w-6xl mx-auto gap-8 mb-16">
        {professionalProjects.map((project, index) => (
          <ProjectCard key={`prof-${index}`} {...project} />
        ))}
      </div>

      {/* Personal Projects - Secondary */}
      {personalProjects.length > 0 && (
        <>
          <div className="w-full max-w-4xl mx-auto border-t border-gray-700 mb-12"></div>
          <h3 className="text-2xl font-medium text-center mb-8 text-gray-300">Personal Projects</h3>
          <div className="flex flex-wrap justify-center max-w-4xl mx-auto gap-6">
            {personalProjects.map((project, index) => (
              <div key={`pers-${index}`} className="transform scale-90">
                <ProjectCard {...project} />
              </div>
            ))}
          </div>
        </>
      )}
    </section>
  );
};

export default ProjectsSection;