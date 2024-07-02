'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

interface ProjectSectionProps {
  title: string;
  description: string;
  githubLink: string;
  imageUrl: string;
}

const ProjectSection: React.FC<ProjectSectionProps> = ({ title, description, githubLink, imageUrl }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}
      className="bg-gray-800 p-6 rounded-lg shadow-lg text-center hover:bg-gray-700 transition-colors duration-300 w-full sm:w-1/2 lg:w-1/3"
      style={{ minHeight: '400px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}
    >
      <div>
        <img src={imageUrl} alt={title} className="mb-4 rounded-lg object-cover h-48 w-full" />
        <h3 className="text-2xl font-semibold mb-2 text-white">{title}</h3>
        <p className="text-gray-300 mb-4">{description}</p>
      </div>
      <a
        href={githubLink}
        target="_blank"
        rel="noopener noreferrer"
        className="text-orange-500 hover:text-orange-700 transition-colors duration-300 mt-auto"
      >
        Ver no GitHub
      </a>
    </motion.div>
  );
};

interface ProjectsSectionProps {
  projects: ProjectSectionProps[];
}

const ProjectsSection: React.FC<ProjectsSectionProps> = ({ projects }) => {
  return (
    <section className="flex flex-col items-center py-16 bg-black text-white">
      <h2 className="text-4xl font-semibold text-center mb-12">Projetos Pessoais</h2>
      <div className="flex flex-wrap justify-center max-w-6xl mx-auto gap-8">
        {projects.map((project, index) => (
          <ProjectSection
            key={index}
            title={project.title}
            description={project.description}
            githubLink={project.githubLink}
            imageUrl={project.imageUrl}
          />
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
