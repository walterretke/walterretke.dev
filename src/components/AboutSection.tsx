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
            src="/images/Walter.jpg"
            alt="Walter"
            className="w-96 h-96 object-cover rounded-lg"
          />
        </div>
        <div className="flex flex-col justify-start p-5 gap-3">
          <h1 className="text-orange-500 font-medium">About Me</h1>
          <h2 className="font-light text-4xl">Walter M. Retke</h2>
          <label className="text-sm font-light">Software Engineer</label>
          <p className="max-w-2xl text-sm leading-relaxed">
            Full Stack Developer with expertise across the Java and JavaScript ecosystems, focused on building microservices, modern web applications, and automating CI/CD pipelines.
          </p>
          <p className="max-w-2xl text-sm leading-relaxed">
            My work is centered around three core pillars:
          </p>
          <div className="max-w-2xl space-y-4">
            <div>
              <h3 className="text-orange-400 font-medium text-sm mb-1">1. Back-End</h3>
              <p className="text-xs leading-relaxed text-gray-300">
                I specialize in engineering robust, scalable RESTful APIs and microservices using Java 17+ and Spring Boot. Proficient in implementing complex business logic, securing endpoints with Spring Security, and integrating with databases like PostgreSQL and MySQL. My focus today is fully on Java and Spring ecosystem.
              </p>
            </div>
            <div>
              <h3 className="text-orange-400 font-medium text-sm mb-1">2. Front-End</h3>
              <p className="text-xs leading-relaxed text-gray-300">
                I develop high-performance, reactive user interfaces with React and Next.js, utilizing TypeScript. My focus is on component-based architecture, state management, and performance optimization to deliver an exceptional user experience.
              </p>
            </div>
            <div>
              <h3 className="text-orange-400 font-medium text-sm mb-1">3. DevOps & Cloud</h3>
              <p className="text-xs leading-relaxed text-gray-300">
                I implement CI/CD pipelines to automate build, testing, and deployment processes. I use Docker for consistent containerized environments and Kubernetes (K8s) for deployment orchestration, ensuring high availability and application scalability.
              </p>
            </div>
          </div>
          <div className="mt-4">
            <p className="max-w-2xl text-sm text-gray-300">
              My continuous focus is on applying sound engineering principles to build robust, high-quality software. Currently pursuing AWS certifications to enhance my cloud expertise. 🚀
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default SobreMimSection;