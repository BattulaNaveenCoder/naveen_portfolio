import React from 'react';
import { projects } from '../../data/projects';
import { ArrowRight } from 'lucide-react';

const ProjectsPreview = () => {
  const top = projects.slice(0, 2);

  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-semibold text-white">Featured Projects</h3>
          <a href="/projects" className="text-purple-300 hover:text-white">All Projects →</a>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {top.map((p) => (
            <div key={p.title} className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition">
              <div className="flex items-center justify-between mb-2">
                <h4 className="text-white font-semibold">{p.title}</h4>
                <span className="text-sm text-purple-300">{p.role}</span>
              </div>
              <p className="text-gray-300 text-sm mb-3">{p.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {p.technologies.slice(0, 4).map((t) => (
                  <span key={t} className="text-xs px-2 py-1 rounded-full bg-purple-500/20 text-purple-200 border border-purple-500/30">{t}</span>
                ))}
              </div>
              <div className="flex items-center gap-3">
                <a href="/projects" className="inline-flex items-center gap-2 text-purple-300 hover:text-white">
                  View Case Study <ArrowRight size={16} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsPreview;
