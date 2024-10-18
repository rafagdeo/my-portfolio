import React from 'react';
import { FaReact, FaNodeJs, FaWordpress } from 'react-icons/fa';
import { SiTailwindcss, SiElixir, SiPhoenixframework, SiTypescript } from 'react-icons/si';

const Skills = () => {
  return (
    <div className="flex flex-col items-center justify-center p-6 " id='skills'>
      <h2 className="text-4xl font-bold text-gray-800 mb-16">Minhas Skills</h2>
      <div className="grid grid-cols-4 gap-8 max-w-7xl md:grid-cols-7">
        <div className="flex flex-col items-center">
          <FaReact size={48} className="text-blue-500 mb-2" />
          <p className="text-ls font-semibold text-gray-700">React</p>
        </div>

        <div className="flex flex-col items-center">
          <SiTypescript  size={48} className="text-blue-500 mb-2" />
          <p className="text-ls font-semibold text-gray-700">TypeScript</p>
        </div>

        <div className="flex flex-col items-center">
          <SiTailwindcss size={48} className="text-teal-500 mb-2" />
          <p className="text-ls font-semibold text-gray-700">Tailwind CSS</p>
        </div>

        <div className="flex flex-col items-center">
          <FaNodeJs size={48} className="text-green-500 mb-2" />
          <p className="text-ls font-semibold text-gray-700">Node.js</p>
        </div>

        <div className="flex flex-col items-center">
          <SiElixir size={48} className="text-purple-500 mb-2" />
          <p className="text-ls font-semibold text-gray-700">Elixir</p>
        </div>

        <div className="flex flex-col items-center">
          <SiPhoenixframework size={48} className="text-orange-500 mb-2" />
          <p className="text-ls font-semibold text-gray-700">Phoenix</p>
        </div>

        <div className="flex flex-col items-center">
          <FaWordpress size={48} className="text-blue-700 mb-2" />
          <p className="text-ls font-semibold text-gray-700">WordPress</p>
        </div>

      </div>
    </div>
  );
};

export default Skills;
