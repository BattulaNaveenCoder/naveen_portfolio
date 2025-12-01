// Plain data for projects; icons are mapped in the section component
export const projects = [
  {
    title: 'Agaman - Job Portal Application',
    role: 'Full Stack Developer',
    description:
      'Full-featured job portal platform allowing users to register, upload resumes, apply for jobs, and get tailored resume descriptions using AI based on job descriptions.',
    technologies: ['ReactJS', 'ASP.NET Core', 'MySQL', 'Bootstrap', 'OpenAI API'],
    icon: 'briefcase',
    color: 'from-green-500 to-lime-500',
    features: [
      'User & employer dashboards',
      'Resume upload & parsing',
      'AI-powered tailoring of resume based on JD',
      'Job search with filters and tracking',
      'Admin panel for managing postings'
    ]
  },
  {
    title: 'A2Z - Azure Learning Mobile App',
    role: 'Lead Developer',
    description:
      'Comprehensive mobile application for Azure learning with mock exams, progress tracking, and certification preparation.',
    technologies: ['.NET MAUI', 'ASP.NET Core', 'SQL Server', 'MVVM'],
    icon: 'cloud',
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
    icon: 'graduationCap',
    color: 'from-purple-500 to-pink-500',
    features: [
      'Video tutorials',
      'Live classes',
      'Interactive content',
      'Progress tracking'
    ]
  }
];
