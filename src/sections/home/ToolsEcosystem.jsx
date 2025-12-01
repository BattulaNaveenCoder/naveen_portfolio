import React from 'react';
import { GitBranch, Github, Wrench, Cloud, Database } from 'lucide-react';

const groups = [
  { title: 'IDEs', items: ['Visual Studio', 'VS Code'], icon: Wrench },
  { title: 'Version Control', items: ['Git', 'GitHub'], icon: GitBranch },
  { title: 'API Tools', items: ['Postman'], icon: Github },
  { title: 'DB Tools', items: ['SQL Server Management Studio'], icon: Database },
  { title: 'Cloud', items: ['Azure'], icon: Cloud },
];

const ToolsEcosystem = () => (
  <section className="py-12">
    <div className="max-w-7xl mx-auto px-6">
      <h3 className="text-xl font-semibold text-white mb-4">Tools & Tech Ecosystem</h3>
      <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
        {groups.map(({ title, items, icon: Icon }) => (
          <div key={title} className="bg-white/5 border border-white/10 rounded-2xl p-5 hover:bg-white/10 transition">
            <div className="flex items-center gap-2 text-white font-semibold mb-2">
              <span className="inline-flex p-2 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 text-white"><Icon size={16} /></span>
              {title}
            </div>
            <ul className="text-gray-300 text-sm list-disc list-inside space-y-1">
              {items.map((i) => (
                <li key={i}>{i}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ToolsEcosystem;
