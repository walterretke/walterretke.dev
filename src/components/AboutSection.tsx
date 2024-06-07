'use client';

import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { useAnimation, motion } from 'framer-motion';

const SobreMimSection = () => {
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
        Sobre mim
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
            Olá, sou <span className="text-orange-500">Walter</span>, um desenvolvedor apaixonado por criar soluções inovadoras e funcionais. Tenho experiência em várias tecnologias e sempre busco aprender mais. Minha missão é tornar a tecnologia acessível e útil para todos. 🚀
          </p>
          <p className="text-lg text-gray-300 mb-4">
            Destaco-me em <span className="text-orange-500">PHP</span> e <span className="text-orange-500">Vue.js</span>. Meu trabalho é focado em criar interfaces de usuário limpas e eficientes.
          </p>
          <p className="text-lg text-gray-300 mb-4">
            Além disso, tenho experiência com <span className="text-orange-500">JavaScript</span>, <span className="text-orange-500">React</span> e <span className="text-orange-500">Next.js</span>. Possuo amplo conhecimento e experiência no desenvolvimento de software, contribuindo para a criação de plataformas importantes no mercado brasileiro.
          </p>
          <p className="text-lg text-gray-300">
            Como engenheiro de software, busco constantemente me aprimorar e aprender novas habilidades. Meu objetivo é continuar desenvolvendo soluções que tornem a tecnologia mais acessível e eficiente para todos. 💻
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default SobreMimSection;
