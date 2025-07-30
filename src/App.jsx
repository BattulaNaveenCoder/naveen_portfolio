import React, { useState, useEffect } from 'react';
import { 
  Code2, 
  Smartphone, 
  Server, 
  Database, 
  Globe, 
  Mail, 
  Phone, 
  Linkedin, 
  ExternalLink,
  ChevronDown,
  Menu,
  X,
  Layers,
  Cloud,  
  GraduationCap,
  Utensils,
  Award,
  ArrowRight,
  Star,
  Sparkles
} from 'lucide-react';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const Navigation = () => (
    <nav className="fixed top-0 w-full z-50 bg-black bg-opacity-20 backdrop-blur-xl border-b border-white border-opacity-10">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Naveen Battula
          </div>
          
          <div className="hidden md:flex space-x-8">
            {['home', 'about', 'skills', 'projects', 'contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className={`capitalize transition-all duration-300 hover:text-purple-400 ${
                  activeSection === item ? 'text-purple-400' : 'text-white'
                }`}
              >
                {item}
              </button>
            ))}
          </div>

          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-2">
            {['home', 'about', 'skills', 'projects', 'contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="block w-full text-left capitalize py-2 text-white hover:text-purple-400 transition-colors"
              >
                {item}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );

  const FloatingParticles = () => (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          className="absolute w-2 h-2 bg-purple-400 rounded-full opacity-20 animate-pulse"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 3}s`,
            animationDuration: `${3 + Math.random() * 2}s`
          }}
        />
      ))}
    </div>
  );

  const HeroSection = () => {
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
                  <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                    Naveen
                  </span>
                </h1>
                
                <div className="text-2xl lg:text-3xl text-purple-400 h-12 flex items-center">
                  {texts[currentText]}
                </div>
                
                <p className="text-xl text-gray-300 max-w-lg leading-relaxed">
                  Crafting innovative digital solutions with 3+ years of expertise in React, .NET MAUI, and ASP.NET Core
                </p>
              </div>

              <div className="flex flex-wrap gap-4">
                <button
                  onClick={() => scrollToSection('contact')}
                  className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 hover:scale-105 flex items-center space-x-2"
                >
                  <span>Get In Touch</span>
                  <ArrowRight size={18} />
                </button>
                
                <button
                  onClick={() => scrollToSection('projects')}
                  className="border border-purple-400 text-purple-400 px-8 py-4 rounded-full font-semibold hover:bg-purple-400 hover:text-black transition-all duration-300 hover:scale-105"
                >
                  View Projects
                </button>
              </div>

              <div className="flex space-x-6 pt-4">
                <a href="https://www.linkedin.com/in/naveen-battula-30575a151/" className="text-gray-400 hover:text-purple-400 transition-colors hover:scale-110 transform">
                  <Linkedin size={24} />
                </a>
                <a href="mailto:battulanaveen9640@gmail.com" className="text-gray-400 hover:text-purple-400 transition-colors hover:scale-110 transform">
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

  const AboutSection = () => (
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
                Passionate Full Stack Developer with 3+ years of experience at DeccanSoft Software Services, 
                specializing in creating robust mobile and web applications that deliver exceptional user experiences.
              </p>
              
              <p className="text-lg text-gray-400 leading-relaxed mb-6">
                Expert in developing cross-platform mobile applications using .NET MAUI and Xamarin Forms, 
                with strong proficiency in building scalable backend services and designing responsive web applications.
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
              <p className="text-gray-400 text-sm">.NET MAUI, Xamarin Forms, Cross-platform solutions</p>
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

  const SkillsSection = () => {
    const skills = [
      { name: 'ReactJS', level: 90, icon: <Code2 size={24} />, color: 'bg-gradient-to-r from-blue-400 to-cyan-400' },
      { name: 'Angular', level: 85, icon: <Layers size={24} />, color: 'bg-gradient-to-r from-red-400 to-pink-400' },
      { name: 'ASP.NET Core', level: 92, icon: <Server size={24} />, color: 'bg-gradient-to-r from-purple-400 to-blue-400' },
      { name: 'C#', level: 90, icon: <Code2 size={24} />, color: 'bg-gradient-to-r from-green-400 to-blue-400' },
      { name: '.NET MAUI', level: 85, icon: <Smartphone size={24} />, color: 'bg-gradient-to-r from-purple-400 to-pink-400' },
      { name: 'Xamarin Forms', level: 88, icon: <Smartphone size={24} />, color: 'bg-gradient-to-r from-orange-400 to-red-400' },
      { name: 'SQL Server', level: 87, icon: <Database size={24} />, color: 'bg-gradient-to-r from-yellow-400 to-orange-400' },
      { name: 'Entity Framework', level: 88, icon: <Database size={24} />, color: 'bg-gradient-to-r from-teal-400 to-green-400' }
    ];

    return (
      <section id="skills" className="py-20 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-white mb-4">Technical Skills</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto rounded-full" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <div
                key={skill.name}
                className="bg-white bg-opacity-5 backdrop-blur-xl rounded-2xl p-6 border border-white border-opacity-10 hover:bg-opacity-10 transition-all duration-300 hover:scale-105"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-2 rounded-lg ${skill.color} text-white`}>
                    {skill.icon}
                  </div>
                  <span className="text-2xl font-bold text-white">{skill.level}%</span>
                </div>
                
                <h4 className="text-white font-semibold mb-3">{skill.name}</h4>
                
                <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
                  <div
                    className={`h-full ${skill.color} rounded-full transition-all duration-1000 ease-out`}
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };

  const ProjectsSection = () => {
    const projects = [
  {
    title: 'Agaman - Job Portal Application',
    role: 'Full Stack Developer',
    description:
      'End-to-end job portal enabling user registration, resume upload, job applications, and admin management.',
    technologies: ['ReactJS', 'ASP.NET Core', 'MySQL', 'Bootstrap'],
    icon: <Briefcase size={40} />, // Make sure you import 'Briefcase' from lucide-react
    color: 'from-green-500 to-lime-500',
    features: [
      'User & employer dashboards',
      'Resume parsing & uploads',
      'Job search & filters',
      'Admin panel for job management'
    ]
  },
  {
    title: 'A2Z - Azure Learning Mobile App',
    role: 'Lead Developer',
    description:
      'Comprehensive mobile application for Azure learning with mock exams, progress tracking, and certification preparation.',
    technologies: ['.NET MAUI', 'ASP.NET Core', 'SQL Server', 'MVVM'],
    icon: <Cloud size={40} />,
    color: 'from-blue-500 to-cyan-500',
    features: [
      'Cross-platform development',
      'Mock exams system',
      'Progress tracking',
      'Certification prep'
    ]
  },
  {
    title: 'BITC - E-Learning Platform',
    role: 'Software Developer',
    description:
      'Educational platform offering technology courses with video tutorials, study materials, and interactive learning.',
    technologies: ['ReactJS', 'ASP.NET Core', 'Bootstrap', 'SQL Server'],
    icon: <GraduationCap size={40} />,
    color: 'from-purple-500 to-pink-500',
    features: [
      'Video tutorials',
      'Live classes',
      'Interactive content',
      'Progress tracking'
    ]
  }
];


    return (
      <section id="projects" className="py-20 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-white mb-4">Featured Projects</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto rounded-full" />
          </div>

          <div className="space-y-8">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className={`grid lg:grid-cols-2 gap-8 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}
              >
                <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div className="bg-white bg-opacity-5 backdrop-blur-xl rounded-3xl p-8 border border-white border-opacity-10 hover:bg-opacity-10 transition-all duration-300 hover:scale-105">
                    <div className="flex items-center space-x-4 mb-6">
                      <div className={`p-3 rounded-xl bg-gradient-to-r ${project.color} bg-opacity-20`}>
                        <div className={`text-white`}>
                          {project.icon}
                        </div>
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                        <p className="text-purple-400 font-semibold">
                          {project.role}
                        </p>
                      </div>
                    </div>
                    
                    <p className="text-gray-300 text-lg leading-relaxed mb-6">
                      {project.description}
                    </p>
                    
                    <div className="mb-6">
                      <h4 className="text-white font-semibold mb-3">Key Features:</h4>
                      <div className="grid grid-cols-2 gap-2">
                        {project.features.map((feature, i) => (
                          <div key={i} className="flex items-center space-x-2">
                            <Star size={14} className="text-purple-400" />
                            <span className="text-gray-400 text-sm">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 text-sm rounded-full bg-purple-500 bg-opacity-20 text-purple-300 border border-purple-500 border-opacity-30"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className={`${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                  <div className="relative">
                    <div className={`w-full h-64 bg-gradient-to-br ${project.color} rounded-3xl relative overflow-hidden hover:scale-105 transition-transform duration-300`}>
                      <div className="absolute inset-4 bg-black bg-opacity-20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                        <div className="text-center text-white">
                          <div className="mb-4">
                            {project.icon}
                          </div>
                          <div className="text-xl font-bold">{project.title}</div>
                          <div className="text-sm opacity-80 mt-2">{project.role}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };

  const ContactSection = () => (
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
              <a href="https://www.linkedin.com/in/naveen-battula-30575a151/" className="text-gray-400 hover:text-purple-400 transition-colors">
                Connect with me
              </a>
            </div>
          </div>

          <div className="text-center mt-12">
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-purple-900 text-white overflow-x-hidden">
      <FloatingParticles />
      <Navigation />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
    </div>
  );
};

export default Portfolio;