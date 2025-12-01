import React from 'react';
import { ArrowRight } from 'lucide-react';

const MidCta = () => (
  <section className="py-12">
    <div className="max-w-7xl mx-auto px-6">
      <div className="rounded-2xl border border-purple-500/30 bg-gradient-to-r from-purple-600/20 to-pink-600/20 p-8 text-center">
        <h3 className="text-2xl font-bold text-white mb-3">Have an idea in mind? Let’s build it together.</h3>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <a href="/contact" className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-full font-semibold inline-flex items-center gap-2 hover:scale-105 transition">
            Start a Project <ArrowRight size={18} />
          </a>
          <a href="/contact" className="border border-purple-400 text-purple-300 px-6 py-3 rounded-full font-semibold hover:bg-purple-400 hover:text-black transition">
            Schedule a Call
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default MidCta;
