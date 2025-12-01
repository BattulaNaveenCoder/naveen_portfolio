import React from 'react';
import { Quote } from 'lucide-react';
import { testimonials } from '../../data/testimonials';

const TestimonialsPreview = () => (
  <section className="py-12">
    <div className="max-w-7xl mx-auto px-6">
      <h3 className="text-xl font-semibold text-white mb-4">What People Say</h3>
      <div className="grid md:grid-cols-2 gap-4">
        {testimonials.map((t, i) => (
          <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition">
            <div className="flex items-start gap-3">
              <div className="p-2 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 text-white">
                <Quote size={18} />
              </div>
              <div>
                <p className="text-gray-200">“{t.quote}”</p>
                <div className="text-sm text-purple-300 mt-3">{t.name} • {t.role}{t.company ? `, ${t.company}` : ''}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsPreview;
