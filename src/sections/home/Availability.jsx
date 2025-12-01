import React from 'react';
import { Clock, MapPin, Briefcase } from 'lucide-react';

const Availability = () => (
  <section className="py-12">
    <div className="max-w-7xl mx-auto px-6">
      <h3 className="text-xl font-semibold text-white mb-4">Availability & Engagement</h3>
      <div className="grid md:grid-cols-3 gap-4">
        <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
          <div className="text-white font-semibold mb-1 inline-flex items-center gap-2"><Briefcase size={16} /> Available for</div>
          <div className="text-gray-300">Full-Time • Freelance • Contract</div>
        </div>
        <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
          <div className="text-white font-semibold mb-1 inline-flex items-center gap-2"><MapPin size={16} /> Location</div>
          <div className="text-gray-300">India • Remote-friendly</div>
        </div>
        <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
          <div className="text-white font-semibold mb-1 inline-flex items-center gap-2"><Clock size={16} /> Response Time</div>
          <div className="text-gray-300">Typically within 24 hours</div>
        </div>
      </div>
    </div>
  </section>
);

export default Availability;
