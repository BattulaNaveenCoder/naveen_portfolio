import React from 'react';
import { ClipboardList, Palette, Code2, ShieldCheck, Rocket } from 'lucide-react';

const steps = [
  { icon: ClipboardList, title: 'Requirement Analysis', desc: 'Clarify goals, scope, and success criteria.' },
  { icon: Palette, title: 'UI/UX Planning', desc: 'Wireframes and component structure for usability.' },
  { icon: Code2, title: 'Development', desc: 'Iterative builds with clean, testable code.' },
  { icon: ShieldCheck, title: 'Testing & QA', desc: 'Automated and manual checks for reliability.' },
  { icon: Rocket, title: 'Deployment & Support', desc: 'Ship, monitor, and iterate with confidence.' },
];

const WorkProcess = () => (
  <section className="py-12">
    <div className="max-w-7xl mx-auto px-6">
      <h3 className="text-xl font-semibold text-white mb-4">How I Work</h3>
      <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
        {steps.map(({ icon: Icon, title, desc }) => (
          <div key={title} className="bg-white/5 border border-white/10 rounded-2xl p-5 hover:bg-white/10 transition">
            <div className="inline-flex p-2 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 text-white mb-3">
              <Icon size={18} />
            </div>
            <div className="text-white font-semibold mb-1">{title}</div>
            <div className="text-gray-300 text-sm">{desc}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default WorkProcess;
