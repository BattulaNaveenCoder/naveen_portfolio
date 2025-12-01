import React from 'react';
import { Code2, Layers, Server, Smartphone, Database } from 'lucide-react';
import { skills as skillsData } from '../data/skills';

const iconMap = {
  code: (size = 24) => <Code2 size={size} />,
  layers: (size = 24) => <Layers size={size} />,
  server: (size = 24) => <Server size={size} />,
  smartphone: (size = 24) => <Smartphone size={size} />,
  database: (size = 24) => <Database size={size} />,
};

const Skills = () => (
  <section id="skills" className="py-20 relative">
    <div className="max-w-7xl mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-5xl font-bold text-white mb-4">Technical Skills</h2>
        <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto rounded-full" />
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {skillsData.map((skill) => (
          <div
            key={skill.name}
            className="bg-white bg-opacity-5 backdrop-blur-xl rounded-2xl p-6 border border-white border-opacity-10 hover:bg-opacity-10 transition-all duration-300 hover:scale-105"
          >
            <div className="flex items-center justify-between mb-4">
              <div className={`p-2 rounded-lg bg-gradient-to-r ${skill.color} text-white`}>
                {iconMap[skill.icon]?.(24)}
              </div>
              <span className="text-2xl font-bold text-white">{skill.level}%</span>
            </div>

            <h4 className="text-white font-semibold mb-3">{skill.name}</h4>

            <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
              <div
                className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out`}
                style={{ width: `${skill.level}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Skills;
