import React from 'react';
import { Award, Briefcase, Users, Smartphone } from 'lucide-react';

const stats = [
  { label: 'Years Experience', value: '3+', Icon: Briefcase },
  { label: 'Production Projects', value: '5+', Icon: Award },
  { label: 'Apps Deployed', value: '6+', Icon: Smartphone },
  { label: 'Happy Clients', value: '4+', Icon: Users },
];

const ExperienceSnapshot = () => (
  <section className="py-12">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {stats.map(({ label, value, Icon }) => (
          <div key={label} className="bg-white/5 border border-white/10 rounded-2xl p-5 text-center hover:bg-white/10 transition">
            <div className="inline-flex p-2 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 text-white mb-2">
              <Icon size={18} />
            </div>
            <div className="text-2xl font-bold text-white">{value}</div>
            <div className="text-gray-300 text-sm">{label}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ExperienceSnapshot;
