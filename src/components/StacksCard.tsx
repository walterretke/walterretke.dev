"use client";

import { FaReact, FaNodeJs, FaVuejs, FaLaravel, FaPython } from "react-icons/fa";
import { RiNextjsLine } from "react-icons/ri";
import { SiMysql } from "react-icons/si";

const StacksCard = () => {
  return (
    <div className="px-4">
      <div className="my-16 text-center">
        <h2 className="mb-10 text-2xl font-semibold">
          Minhas <span className="font-bold">tecnologias</span>
        </h2>
        <div className="flex flex-wrap justify-center gap-8">
          <div className="flex flex-col items-center gap-2">
            <FaReact className="text-5xl text-blue-500 hover:text-blue-700 hover:cursor-pointer" />
            <p className="text-xs italic">React.js</p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <FaNodeJs className="text-5xl text-green-500 hover:text-green-700 hover:cursor-pointer" />
            <p className="text-xs italic">Node.js</p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <FaVuejs className="text-5xl text-green-500 hover:text-green-700 hover:cursor-pointer" />
            <p className="text-xs italic">Vue.js</p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <FaLaravel className="text-5xl text-red-500 hover:text-red-700 hover:cursor-pointer" />
            <p className="text-xs italic">Laravel</p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <RiNextjsLine className="text-5xl text-white hover:text-gray-100 hover:cursor-pointer" />
            <p className="text-xs italic">Next.js</p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <SiMysql className="text-5xl text-blue-500 hover:text-blue-700 hover:cursor-pointer" />
            <p className="text-xs italic">MySQL</p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <FaPython className="text-5xl text-blue-500 hover:text-blue-700 hover:cursor-pointer" />
            <p className="text-xs italic">Python</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StacksCard;
