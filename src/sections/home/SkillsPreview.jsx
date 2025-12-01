import React from 'react';
import { Code2, Layers, Server, Smartphone, Database, Cloud } from 'lucide-react';

const chips = [
  { label: 'React', Icon: Code2 },
  { label: 'Angular', Icon: Layers },
  { label: 'ASP.NET Core', Icon: Server },
  { label: '.NET MAUI', Icon: Smartphone },
  { label: 'SQL Server', Icon: Database },
  { label: 'Azure', Icon: Cloud },
];

const SkillsPreview = () => (
  <section className="py-12">
    <div className="max-w-7xl mx-auto px-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-semibold text-white">Core Skills</h3>
        <a href="/skills" className="text-purple-300 hover:text-white">All Skills →</a>
      </div>
      <div className="flex flex-wrap gap-3">
        {chips.map(({ label, Icon }) => (
          <span
            key={label}
            className="inline-flex items-center gap-2 px-3 py-2 rounded-full bg-white/5 border border-white/10 text-gray-200 hover:bg-white/10 hover:scale-105 transition"
          >
            <Icon size={16} /> {label}
          </span>
        ))}
      </div>
    </div>
  </section>
);

export default SkillsPreview;
