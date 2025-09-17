'use client';

import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { useAnimation, motion } from 'framer-motion';
import { FaCloud, FaServer, FaCogs, FaCode, FaShieldAlt, FaRocket } from 'react-icons/fa';

const ServicesSection = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const variants = {
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    hover: { scale: 1.05, transition: { duration: 0.3 }, cursor: 'pointer' },
  };

  const services = [
    {
      icon: <FaServer className="text-orange-500" />,
      title: 'Microservices Architecture',
      description: 'Design and implementation of scalable microservices using Java, Spring Boot, and RESTful APIs for enterprise-grade applications.',
    },
    {
      icon: <FaCloud className="text-orange-500" />,
      title: 'Cloud Solutions & AWS',
      description: 'AWS cloud infrastructure setup, migration strategies, and optimization for high-availability applications with cost-effective scaling.',
    },
    {
      icon: <FaCogs className="text-orange-500" />,
      title: 'DevOps & CI/CD Implementation',
      description: 'Complete DevOps pipeline setup with Docker, Kubernetes, Jenkins, and automated deployment strategies for continuous delivery.',
    },
    {
      icon: <FaCode className="text-orange-500" />,
      title: 'Full-Stack Development',
      description: 'End-to-end application development with Java/Spring backend and React/Next.js frontend, ensuring seamless integration and performance.',
    },
    {
      icon: <FaShieldAlt className="text-orange-500" />,
      title: 'System Migration & Modernization',
      description: 'Legacy system modernization, migrating from monolithic to microservices architecture with zero-downtime deployment strategies.',
    },
    {
      icon: <FaRocket className="text-orange-500" />,
      title: 'Performance Optimization',
      description: 'Application performance tuning, database optimization, and scalability improvements for high-traffic enterprise systems.',
    },
  ];

  return (
    <section id='services' className="flex flex-col items-center py-16 bg-black text-white">
      <motion.h2
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={controls}
        variants={variants}
        className="text-4xl font-semibold text-center mb-12"
      >
        Services
      </motion.h2>
      <div className="flex flex-wrap justify-center max-w-6xl mx-auto">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={controls}
            whileHover="hover"
            variants={variants}
            className="w-full sm:w-1/2 lg:w-1/3 p-4"
          >
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center hover:bg-gray-700 transition-colors duration-300 min-h-[250px] flex flex-col justify-between">
              <div>
                <div className="text-6xl mb-4">{service.icon}</div>
                <h3 className="text-2xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-300">{service.description}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;