'use client';

import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { useAnimation, motion } from 'framer-motion';
import { FaAws, FaCheck, FaClock, FaBullseye } from 'react-icons/fa';

const CertificationsSection = () => {
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

  const certifications = [
    {
      name: "AWS Solutions Architect Associate",
      provider: "Amazon Web Services",
      status: "in-progress",
      icon: <FaAws className="text-5xl text-orange-500" />,
      description: "Designing distributed systems and architectures on AWS platform",
      targetDate: "Q2 2025"
    },
    {
      name: "AWS Developer Associate",
      provider: "Amazon Web Services", 
      status: "planned",
      icon: <FaAws className="text-5xl text-orange-500" />,
      description: "Developing and maintaining applications on AWS platform",
      targetDate: "Q3 2025"
    },
    {
      name: "AWS DevOps Engineer Professional",
      provider: "Amazon Web Services",
      status: "planned", 
      icon: <FaAws className="text-5xl text-orange-500" />,
      description: "Advanced DevOps practices and automation on AWS",
      targetDate: "Q4 2025"
    }
  ];

  const skills = [
    { name: "Java & Spring Boot", level: "Expert", percentage: 95 },
    { name: "Microservices Architecture", level: "Expert", percentage: 90 },
    { name: "Docker & Kubernetes", level: "Proficient", percentage: 85 },
    { name: "AWS Cloud Services", level: "Learning", percentage: 75 },
    { name: "React & Next.js", level: "Proficient", percentage: 80 },
    { name: "CI/CD & DevOps", level: "Proficient", percentage: 85 }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'text-green-500';
      case 'in-progress': return 'text-orange-500';
      case 'planned': return 'text-blue-500';
      default: return 'text-gray-500';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed': return <FaCheck className="text-green-500" />;
      case 'in-progress': return <FaClock className="text-orange-500" />;
      case 'planned': return <FaBullseye className="text-blue-500" />;
      default: return null;
    }
  };

  return (
    <section 
      ref={ref}
      className="py-16 bg-black text-white"
    >
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial="hidden"
          animate={controls}
          variants={variants}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">
            Learning Path & <span className="text-orange-500">Certifications</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Continuous learning journey toward 100% cloud-native expertise with AWS certifications
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Certifications Timeline */}
          <motion.div
            initial="hidden"
            animate={controls}
            variants={variants}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold mb-6 text-center lg:text-left">
              🎯 AWS Certification Roadmap
            </h3>
            
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial="hidden"
                animate={controls}
                variants={{
                  hidden: { opacity: 0, x: -50 },
                  visible: { 
                    opacity: 1, 
                    x: 0, 
                    transition: { duration: 0.5, delay: index * 0.1 } 
                  }
                }}
                className="bg-gray-800 p-6 rounded-lg border border-gray-700 hover:border-orange-500 transition-colors duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    {cert.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h4 className="font-semibold text-lg text-white">
                        {cert.name}
                      </h4>
                      {getStatusIcon(cert.status)}
                    </div>
                    <p className="text-gray-400 text-sm mb-2">
                      {cert.provider}
                    </p>
                    <p className="text-gray-300 text-sm mb-3">
                      {cert.description}
                    </p>
                    <div className="flex justify-between items-center">
                      <span className={`text-sm font-medium ${getStatusColor(cert.status)}`}>
                        {cert.status === 'in-progress' ? 'In Progress' : 
                         cert.status === 'planned' ? 'Planned' : 'Completed'}
                      </span>
                      <span className="text-sm text-gray-400">
                        Target: {cert.targetDate}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Skills Matrix */}
          <motion.div
            initial="hidden"
            animate={controls}
            variants={variants}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold mb-6 text-center lg:text-left">
              💻 Technical Expertise
            </h3>
            
            <div className="space-y-4">
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  initial="hidden"
                  animate={controls}
                  variants={{
                    hidden: { opacity: 0, x: 50 },
                    visible: { 
                      opacity: 1, 
                      x: 0, 
                      transition: { duration: 0.5, delay: index * 0.1 } 
                    }
                  }}
                  className="bg-gray-800 p-4 rounded-lg border border-gray-700"
                >
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium text-white">{skill.name}</span>
                    <span className="text-sm text-orange-500 font-medium">
                      {skill.level}
                    </span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={inView ? { width: `${skill.percentage}%` } : { width: 0 }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                      className="bg-gradient-to-r from-orange-500 to-orange-600 h-2 rounded-full"
                    />
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-8 p-4 bg-gradient-to-r from-orange-900/20 to-orange-800/20 rounded-lg border border-orange-500/30">
              <p className="text-sm text-orange-300 text-center">
                <strong>Goal 2025:</strong> Complete AWS cloud migration expertise and achieve professional-level certifications in cloud architecture and DevOps automation.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;