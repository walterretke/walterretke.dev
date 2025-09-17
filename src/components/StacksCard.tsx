"use client";

import { FaReact, FaDocker, FaAws, FaGitAlt, FaJava } from "react-icons/fa";
import { RiNextjsLine } from "react-icons/ri";
import { SiSpringboot, SiKubernetes, SiPostgresql, SiJenkins, SiTypescript } from "react-icons/si";

const StacksCard = () => {
  return (
    <div className="px-4">
      <div className="my-16 text-center">
        <h2 className="mb-10 text-2xl font-semibold">
          My <span className="font-bold">Tech Stack</span>
        </h2>
        
        {/* Backend & Core */}
        <div className="mb-12">
          <h3 className="text-lg font-medium text-orange-500 mb-6">Backend & Core</h3>
          <div className="flex flex-wrap justify-center gap-8">
            <div className="flex flex-col items-center gap-2">
              <FaJava className="text-5xl text-red-600 hover:text-red-700 hover:cursor-pointer" />
              <p className="text-xs italic">Java 17+</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <SiSpringboot className="text-5xl text-green-600 hover:text-green-700 hover:cursor-pointer" />
              <p className="text-xs italic">Spring Boot</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <SiPostgresql className="text-5xl text-blue-600 hover:text-blue-700 hover:cursor-pointer" />
              <p className="text-xs italic">PostgreSQL</p>
            </div>
          </div>
        </div>

        {/* Frontend */}
        <div className="mb-12">
          <h3 className="text-lg font-medium text-orange-500 mb-6">Frontend</h3>
          <div className="flex flex-wrap justify-center gap-8">
            <div className="flex flex-col items-center gap-2">
              <FaReact className="text-5xl text-blue-500 hover:text-blue-700 hover:cursor-pointer" />
              <p className="text-xs italic">React</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <RiNextjsLine className="text-5xl text-white hover:text-gray-100 hover:cursor-pointer" />
              <p className="text-xs italic">Next.js</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <SiTypescript className="text-5xl text-blue-600 hover:text-blue-700 hover:cursor-pointer" />
              <p className="text-xs italic">TypeScript</p>
            </div>
          </div>
        </div>

        {/* DevOps & Cloud */}
        <div className="mb-12">
          <h3 className="text-lg font-medium text-orange-500 mb-6">DevOps & Cloud</h3>
          <div className="flex flex-wrap justify-center gap-8">
            <div className="flex flex-col items-center gap-2">
              <FaAws className="text-5xl text-orange-500 hover:text-orange-600 hover:cursor-pointer" />
              <p className="text-xs italic">AWS</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <FaDocker className="text-5xl text-blue-500 hover:text-blue-700 hover:cursor-pointer" />
              <p className="text-xs italic">Docker</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <SiKubernetes className="text-5xl text-blue-600 hover:text-blue-700 hover:cursor-pointer" />
              <p className="text-xs italic">Kubernetes</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <SiJenkins className="text-5xl text-blue-600 hover:text-blue-700 hover:cursor-pointer" />
              <p className="text-xs italic">Jenkins</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <FaGitAlt className="text-5xl text-red-600 hover:text-red-700 hover:cursor-pointer" />
              <p className="text-xs italic">Git</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StacksCard;