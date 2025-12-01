import React, { useState } from 'react';
import { Phone, Mail, Linkedin, ExternalLink, Send } from 'lucide-react';

const Contact = () => (
  <section id="contact" className="py-20 relative">
    <div className="max-w-7xl mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-5xl font-bold text-white mb-4">Get In Touch</h2>
        <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto rounded-full" />
        <p className="text-xl text-gray-400 mt-6 max-w-2xl mx-auto">
          Ready to bring your next project to life? Let's collaborate and create something amazing together!
        </p>
      </div>

      <div className="max-w-4xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white bg-opacity-5 backdrop-blur-xl rounded-2xl p-8 border border-white border-opacity-10 hover:bg-opacity-10 transition-all duration-300 hover:scale-105 text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full flex items-center justify-center mx-auto mb-4">
              <Phone size={24} className="text-white" />
            </div>
            <h4 className="text-white font-semibold mb-2">Phone</h4>
            <p className="text-gray-400">+91-7997879186</p>
          </div>

          <div className="bg-white bg-opacity-5 backdrop-blur-xl rounded-2xl p-8 border border-white border-opacity-10 hover:bg-opacity-10 transition-all duration-300 hover:scale-105 text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full flex items-center justify-center mx-auto mb-4">
              <Mail size={24} className="text-white" />
            </div>
            <h4 className="text-white font-semibold mb-2">Email</h4>
            <p className="text-gray-400">battulanaveen9640@gmail.com</p>
          </div>

          <div className="bg-white bg-opacity-5 backdrop-blur-xl rounded-2xl p-8 border border-white border-opacity-10 hover:bg-opacity-10 transition-all duration-300 hover:scale-105 text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full flex items-center justify-center mx-auto mb-4">
              <Linkedin size={24} className="text-white" />
            </div>
            <h4 className="text-white font-semibold mb-2">LinkedIn</h4>
            <a
              href="https://www.linkedin.com/in/naveen-battula-30575a151/"
              className="text-gray-400 hover:text-purple-400 transition-colors"
            >
              Connect with me
            </a>
          </div>
        </div>

        {/* Quick inquiry form */}
        <InquiryForm />

        <div className="text-center mt-8">
          <a
            href="mailto:battulanaveen9640@gmail.com"
            className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-12 py-4 rounded-full font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 hover:scale-105 inline-flex items-center space-x-2"
          >
            <span>Let's Collaborate</span>
            <ExternalLink size={18} />
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default Contact;

// Small form component (no backend) — logs submission for now
const InquiryForm = () => {
  const [form, setForm] = useState({ name: '', email: '', type: 'Web App', budget: 'Under $2k', message: '' });

  const submit = (e) => {
    e.preventDefault();
    // In a real app, post to an API or email service
    console.log('Inquiry:', form);
    alert('Thanks! I will get back to you soon.');
    setForm({ name: '', email: '', type: 'Web App', budget: 'Under $2k', message: '' });
  };

  return (
    <form onSubmit={submit} className="mt-12 bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10">
      <h4 className="text-white font-semibold mb-4">Quick Project Inquiry</h4>
      <div className="grid md:grid-cols-2 gap-4">
        <input
          required
          placeholder="Your Name"
          className="bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />
        <input
          required
          type="email"
          placeholder="Email"
          className="bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />
        <select
          className="bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
          value={form.type}
          onChange={(e) => setForm({ ...form, type: e.target.value })}
        >
          <option className="bg-black">Web App</option>
          <option className="bg-black">Mobile App</option>
          <option className="bg-black">API/Backend</option>
          <option className="bg-black">Consulting</option>
        </select>
        <select
          className="bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
          value={form.budget}
          onChange={(e) => setForm({ ...form, budget: e.target.value })}
        >
          <option className="bg-black">Under $2k</option>
          <option className="bg-black">$2k–$5k</option>
          <option className="bg-black">$5k–$10k</option>
          <option className="bg-black">$10k+</option>
        </select>
      </div>
      <textarea
        placeholder="Briefly describe your idea or requirement"
        className="mt-4 w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white min-h-[120px] focus:outline-none focus:ring-2 focus:ring-purple-500"
        value={form.message}
        onChange={(e) => setForm({ ...form, message: e.target.value })}
      />
      <button type="submit" className="mt-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-full font-semibold inline-flex items-center gap-2 hover:scale-105 transition">
        Send Inquiry <Send size={16} />
      </button>
    </form>
  );
};
