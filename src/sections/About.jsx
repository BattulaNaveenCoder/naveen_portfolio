import React from 'react';
import { Smartphone, Globe, Server, Database, Award } from 'lucide-react';

const About = () => (
  <section id="about" className="py-20 relative">
    <div className="max-w-7xl mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-5xl font-bold text-white mb-4">About Me</h2>
        <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto rounded-full" />
      </div>

      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <div className="bg-white bg-opacity-5 backdrop-blur-xl rounded-3xl p-8 border border-white border-opacity-10 hover:bg-opacity-10 transition-all duration-300">
            <p className="text-xl text-gray-300 leading-relaxed mb-6">
              Passionate Full Stack Developer with 3+ years of experience at DeccanSoft Software Services, specializing in creating robust mobile and web applications that deliver exceptional user experiences.
            </p>

            <p className="text-lg text-gray-400 leading-relaxed mb-6">
              Expert in developing cross-platform mobile applications using .NET MAUI and Xamarin Forms, with strong proficiency in building scalable backend services and designing responsive web applications.
            </p>

            <div className="flex items-center space-x-2 text-purple-400">
              <Award size={20} />
              <span className="font-semibold">B.Tech from JNT University, Kakinada</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6">
          <div className="bg-purple-500 bg-opacity-10 backdrop-blur-xl rounded-2xl p-6 border border-purple-500 border-opacity-20 hover:scale-105 transition-transform duration-300">
            <Smartphone size={40} className="text-purple-400 mb-4" />
            <h4 className="text-white font-semibold mb-2">Mobile Development</h4>
            <p className="text-gray-400 text-sm">React Native,.NET MAUI, Xamarin Forms, Cross-platform solutions</p>
          </div>

          <div className="bg-pink-500 bg-opacity-10 backdrop-blur-xl rounded-2xl p-6 border border-pink-500 border-opacity-20 hover:scale-105 transition-transform duration-300">
            <Globe size={40} className="text-pink-400 mb-4" />
            <h4 className="text-white font-semibold mb-2">Web Development</h4>
            <p className="text-gray-400 text-sm">React, Angular, Modern frameworks</p>
          </div>

          <div className="bg-blue-500 bg-opacity-10 backdrop-blur-xl rounded-2xl p-6 border border-blue-500 border-opacity-20 hover:scale-105 transition-transform duration-300">
            <Server size={40} className="text-blue-400 mb-4" />
            <h4 className="text-white font-semibold mb-2">Backend Services</h4>
            <p className="text-gray-400 text-sm">ASP.NET Core, RESTful APIs</p>
          </div>

          <div className="bg-green-500 bg-opacity-10 backdrop-blur-xl rounded-2xl p-6 border border-green-500 border-opacity-20 hover:scale-105 transition-transform duration-300">
            <Database size={40} className="text-green-400 mb-4" />
            <h4 className="text-white font-semibold mb-2">Database Design</h4>
            <p className="text-gray-400 text-sm">SQL Server, Entity Framework</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default About;
