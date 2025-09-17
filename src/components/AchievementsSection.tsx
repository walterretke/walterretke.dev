'use client';

import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { useAnimation, motion } from 'framer-motion';
import { FaUsers, FaClock, FaRocket, FaChartLine } from 'react-icons/fa';

const AchievementsSection = () => {
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
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const achievements = [
    {
      icon: <FaUsers className="text-orange-500 text-4xl" />,
      number: "50,000+",
      label: "Users Impacted",
      description: "Successfully migrated enterprise system serving thousands of users with zero downtime"
    },
    {
      icon: <FaClock className="text-orange-500 text-4xl" />,
      number: "80%",
      label: "Deployment Time Reduced",
      description: "Implemented CI/CD pipelines with Docker and Kubernetes, dramatically improving deployment efficiency"
    },
    {
      icon: <FaRocket className="text-orange-500 text-4xl" />,
      number: "60%",
      label: "Performance Improvement",
      description: "Optimized database queries and API responses in critical e-commerce systems"
    },
    {
      icon: <FaChartLine className="text-orange-500 text-4xl" />,
      number: "3+",
      label: "Years Experience",
      description: "Building scalable enterprise solutions with Java, Spring Boot, and cloud technologies"
    }
  ];

  return (
    <section 
      ref={ref}
      className="py-16 bg-gradient-to-r from-gray-900 to-black text-white"
    >
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial="hidden"
          animate={controls}
          variants={variants}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">
            Impact & <span className="text-orange-500">Achievements</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Delivering measurable results through innovative software solutions and modern architecture patterns
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial="hidden"
              animate={controls}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { 
                  opacity: 1, 
                  y: 0, 
                  transition: { duration: 0.5, delay: index * 0.1 } 
                }
              }}
              className="text-center bg-gray-800 p-6 rounded-lg border border-gray-700 hover:border-orange-500 transition-colors duration-300"
            >
              <div className="mb-4 flex justify-center">
                {achievement.icon}
              </div>
              <div className="text-3xl font-bold text-orange-500 mb-2">
                {achievement.number}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">
                {achievement.label}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {achievement.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;