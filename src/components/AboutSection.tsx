"use client";

import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useAnimation, motion } from "framer-motion";

const SobreMimSection = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: false,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section 
    id="about"
    className="flex flex-col items-center px-4 py-4 bg-black text-white">
      <motion.div 
      className="min-h-10 min-w-10 bg-gray-900 flex sm:flex-row flex-col p-5 rounded-md border border-gray-800"
      >
        <div>
          <img
            src="/images/Walter.png"
            alt="Walter"
            className="w-96 h-96 object-cover rounded-lg"
          />
        </div>
        <div className="flex flex-col justify-start p-5 gap-3">
          <h1 className="text-orange-500 font-medium">Quem sou</h1>
          <h2 className="font-light text-4xl">Walter M. Retke</h2>
          <label className="text-sm font-light">Fullstack Developer</label>
          <p className="max-w-2xl">
            Olá, sou Walter, um desenvolvedor apaixonado por criar soluções
            inovadoras e funcionais. Tenho experiência em várias tecnologias e
            sempre busco aprender mais. Minha missão é tornar a tecnologia
            acessível e útil para todos. 🚀 Destaco-me em PHP e Vue.js. Meu
            trabalho é focado em criar interfaces de usuário limpas e
            eficientes. Além disso, tenho experiência com JavaScript, React e
            Next.js. Possuo amplo conhecimento e experiência no desenvolvimento
            de software, contribuindo para a criação de plataformas importantes
            no mercado brasileiro. Como engenheiro de software, busco
            constantemente me aprimorar e aprender novas habilidades. Meu
            objetivo é continuar desenvolvendo soluções que tornem a tecnologia
            mais acessível e eficiente para todos. 💻
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default SobreMimSection;
