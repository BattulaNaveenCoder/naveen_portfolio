import React from 'react';
import { SEO } from '../seo/SEO.jsx';
import Hero from '../sections/Hero.jsx';
import { PersonJsonLd } from '../seo/JsonLd.jsx';
import AboutSnapshot from '../sections/home/AboutSnapshot.jsx';
import SkillsPreview from '../sections/home/SkillsPreview.jsx';
import ProjectsPreview from '../sections/home/ProjectsPreview.jsx';
import WorkProcess from '../sections/home/WorkProcess.jsx';
import ExperienceSnapshot from '../sections/home/ExperienceSnapshot.jsx';
import TestimonialsPreview from '../sections/home/TestimonialsPreview.jsx';
import BlogsPreview from '../sections/home/BlogsPreview.jsx';
import ToolsEcosystem from '../sections/home/ToolsEcosystem.jsx';
import MidCta from '../sections/home/MidCta.jsx';
import Availability from '../sections/home/Availability.jsx';

const Home = () => (
  <main className="pt-16">{/* offset for fixed nav */}
    <SEO title="Home" description="Welcome to Naveen's portfolio homepage." />
    <PersonJsonLd />
    <Hero />
    <AboutSnapshot />
    <SkillsPreview />
    <ProjectsPreview />
    <WorkProcess />
    <ExperienceSnapshot />
    <TestimonialsPreview />
    <BlogsPreview />
    <ToolsEcosystem />
    <MidCta />
    <Availability />
  </main>
);

export default Home;
