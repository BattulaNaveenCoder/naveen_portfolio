import React from 'react';
import { User } from 'lucide-react';

const AboutSnapshot = () => (
  <section className="py-12">
    <div className="max-w-7xl mx-auto px-6">
      <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition">
        <div className="flex items-start gap-4">
          <div className="p-2 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 text-white">
            <User size={22} />
          </div>
          <div>
            <h3 className="text-xl font-semibold text-white mb-2">About Snapshot</h3>
            <p className="text-gray-300">
              Full Stack Developer with 3+ years building React, ASP.NET Core, and .NET MAUI solutions across job portals, e-learning, and enterprise apps. I focus on clean code, scalability, and performance, delivering maintainable systems and smooth user experiences end-to-end.
            </p>
            <div className="mt-3">
              <a href="/about" className="text-purple-300 hover:text-white transition-colors">Read Full Bio →</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default AboutSnapshot;
