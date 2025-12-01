import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, Code2, Database, Smartphone, ChevronDown, ArrowRight, Linkedin, Mail, Globe, MapPin, BadgeCheck, Server } from 'lucide-react';

const Hero = () => {
  const [currentText, setCurrentText] = useState(0);
  const texts = ['Full Stack Developer', 'Mobile App Specialist', 'React Expert', '.NET Developer'];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % texts.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-black to-pink-900 opacity-50" />

      <div className="max-w-7xl mx-auto px-6 z-10 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="flex items-center space-x-2 text-purple-400">
                <Sparkles size={20} />
                <span className="text-sm uppercase tracking-widest">Welcome to my portfolio</span>
              </div>

              <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight">
                Hi, I'm{' '}
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Naveen</span>
              </h1>

              <div className="text-2xl lg:text-3xl text-purple-400 h-12 flex items-center">{texts[currentText]}</div>

              {/* Status/availability and location badges */}
              <div className="flex flex-wrap gap-3 pt-2">
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/20 text-green-300 border border-green-500/30">
                  <BadgeCheck size={14} /> Open to Work
                </span>
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/30">
                  <Globe size={14} /> Serving Global Clients
                </span>
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 border border-blue-500/30">
                  <MapPin size={14} /> India | Remote
                </span>
              </div>

              <p className="text-xl text-gray-300 max-w-lg leading-relaxed">
                Crafting innovative digital solutions with 3+ years of expertise in React, .NET MAUI, and ASP.NET Core
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 hover:scale-105 inline-flex items-center space-x-2"
              >
                <span>Get In Touch</span>
                <ArrowRight size={18} />
              </Link>

              <Link
                to="/projects"
                className="border border-purple-400 text-purple-400 px-8 py-4 rounded-full font-semibold hover:bg-purple-400 hover:text-black transition-all duration-300 hover:scale-105"
              >
                View Projects
              </Link>
            </div>

            {/* Quick tech icons */}
            <div className="flex items-center gap-5 pt-4 text-purple-200/80" aria-label="quick-tech-icons">
              <Code2 size={24} />
              <Server size={24} />
              <Smartphone size={24} />
              <Database size={24} />
              <Globe size={24} />
            </div>

            <div className="flex space-x-6 pt-4">
              <a
                href="https://www.linkedin.com/in/naveen-battula-30575a151/"
                className="text-gray-400 hover:text-purple-400 transition-colors hover:scale-110 transform"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="mailto:battulanaveen9640@gmail.com"
                className="text-gray-400 hover:text-purple-400 transition-colors hover:scale-110 transform"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="w-80 h-80 mx-auto">
              <div className="w-full h-full bg-gradient-to-br from-purple-500 to-pink-500 rounded-3xl relative overflow-hidden hover:scale-105 transition-transform duration-500">
                <div className="absolute inset-4 bg-black bg-opacity-20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                  <div className="text-center space-y-4 text-white">
                    <div className="w-20 h-20 bg-white bg-opacity-10 rounded-full flex items-center justify-center mx-auto">
                      <Code2 size={40} />
                    </div>
                    <div>
                      <div className="text-3xl font-bold">3+</div>
                      <div className="text-sm opacity-80">Years Experience</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold">5+</div>
                      <div className="text-sm opacity-80">Projects Completed</div>
                    </div>
                  </div>
                </div>

                <div className="absolute top-4 right-4 w-12 h-12 bg-white bg-opacity-10 rounded-lg flex items-center justify-center animate-bounce">
                  <Database size={20} className="text-white" />
                </div>
                <div className="absolute bottom-4 left-4 w-12 h-12 bg-white bg-opacity-10 rounded-lg flex items-center justify-center animate-pulse">
                  <Smartphone size={20} className="text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown size={32} className="text-purple-400" />
      </div>
    </section>
  );
};

export default Hero;
