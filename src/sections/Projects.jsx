import React from 'react';
import { Briefcase, Cloud, GraduationCap, Star } from 'lucide-react';
import { projects as projectsData } from '../data/projects';

const iconMap = {
  briefcase: (size = 40) => <Briefcase size={size} />,
  cloud: (size = 40) => <Cloud size={size} />,
  graduationCap: (size = 40) => <GraduationCap size={size} />,
};

const Projects = () => (
  <section id="projects" className="py-20 relative">
    <div className="max-w-7xl mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-5xl font-bold text-white mb-4">Featured Projects</h2>
        <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto rounded-full" />
      </div>

      <div className="space-y-8">
        {projectsData.map((project, index) => (
          <div
            key={project.title}
            className={`grid lg:grid-cols-2 gap-8 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}
          >
            <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
              <div className="bg-white bg-opacity-5 backdrop-blur-xl rounded-3xl p-8 border border-white border-opacity-10 hover:bg-opacity-10 transition-all duration-300 hover:scale-105">
                <div className="flex items-center space-x-4 mb-6">
                  <div className={`p-3 rounded-xl bg-gradient-to-r ${project.color} bg-opacity-20`}>
                    <div className="text-white">{iconMap[project.icon]?.(40)}</div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                    <p className="text-purple-400 font-semibold">{project.role}</p>
                  </div>
                </div>

                <p className="text-gray-300 text-lg leading-relaxed mb-6">{project.description}</p>

                <div className="mb-6">
                  <h4 className="text-white font-semibold mb-3">Key Features:</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {project.features.map((feature, i) => (
                      <div key={i} className="flex items-center space-x-2">
                        <Star size={14} className="text-purple-400" />
                        <span className="text-gray-400 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-sm rounded-full bg-purple-500 bg-opacity-20 text-purple-300 border border-purple-500 border-opacity-30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className={`${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
              <div className="relative">
                <div className={`w-full h-64 bg-gradient-to-br ${project.color} rounded-3xl relative overflow-hidden hover:scale-105 transition-transform duration-300`}>
                  <div className="absolute inset-4 bg-black bg-opacity-20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                    <div className="text-center text-white">
                      <div className="mb-4">{iconMap[project.icon]?.(40)}</div>
                      <div className="text-xl font-bold">{project.title}</div>
                      <div className="text-sm opacity-80 mt-2">{project.role}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Projects;
