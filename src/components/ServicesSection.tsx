'use client';

import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { useAnimation, motion } from 'framer-motion';
import { FaMobileAlt, FaGlobe, FaWordpress, FaCode, FaShoppingCart } from 'react-icons/fa';

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
      icon: <FaMobileAlt className="text-orange-500" />,
      title: 'Desenvolvedor de Aplicativos',
      description: 'Desenvolvimento de Aplicativos para Celulares Android e iOS (iPhone).',
    },
    {
      icon: <FaGlobe className="text-orange-500" />,
      title: 'Criação de Sites',
      description: 'Desenvolvedor de Sites, HotSites, especialista em HTML, CSS, JavaScript, PHP, MySql.',
    },
    {
      icon: <FaWordpress className="text-orange-500" />,
      title: 'WordPress / Blog',
      description: 'Especialista WordPress e Programador PHP, criação de Blogs e Plugins.',
    },
    {
      icon: <FaCode className="text-orange-500" />,
      title: 'Desenvolvedor Front-End',
      description: 'Especialista em HTML5, JavaScript, CSS, jQuery, BootStrap, AngularJS, Vue.js...',
    },
    {
      icon: <FaShoppingCart className="text-orange-500" />,
      title: 'Loja Virtual / Ecommerce',
      description: 'Criação de Loja Online, venda produtos ou receba pagamentos através da Internet.',
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
        Serviços
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
