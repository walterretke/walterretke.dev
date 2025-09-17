'use client';

import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { useAnimation, motion } from 'framer-motion';

const Loco = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: false,
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [controls, inView]);

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section className="flex flex-col items-center py-16 bg-black text-white">
      <motion.h2
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={variants}
        className="text-4xl font-semibold text-center mb-12"
      >
        About me
      </motion.h2>
      <motion.div
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={variants}
        className="flex flex-col md:flex-row items-center max-w-6xl mx-auto"
      >
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={variants}
          className="w-full md:w-1/2 flex justify-center md:justify-end mb-8 md:mb-0"
        >
          <img src="/images/Walter.png" alt="Walter" className="w-50 h-50 md:w-50 md:h-50 rounded-full" />
        </motion.div>
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={variants}
          className="w-full md:w-1/2 md:pl-12 px-4"
        >
          <p className="text-lg text-gray-300 mb-4">
            Hello, I'm <span className="text-orange-500">Walter</span>, a developer passionate about building innovative and functional solutions. I have experience across various technologies and I am always eager to learn more. My mission is to make technology accessible and useful for everyone. 🚀
          </p>
          <p className="text-lg text-gray-300 mb-4">
            I specialize in <span className="text-orange-500">Java</span> and <span className="text-orange-500">Spring Boot</span>. My work focuses on building robust backends and clean, efficient user interfaces.
          </p>
          <p className="text-lg text-gray-300 mb-4">
            I also have experience with <span className="text-orange-500">JavaScript</span>, <span className="text-orange-500">React</span> and <span className="text-orange-500">Next.js</span>. I have extensive knowledge and experience in software development, contributing to building important platforms in the Brazilian market.
          </p>
          <p className="text-lg text-gray-300">
            As a software engineer, I constantly seek to improve myself and learn new skills. My goal is to continue developing solutions that make technology more accessible and efficient for everyone. 💻
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Loco;
