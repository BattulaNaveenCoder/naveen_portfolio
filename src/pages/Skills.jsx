import React from 'react';
import { SEO } from '../seo/SEO.jsx';
import SkillsSection from '../sections/Skills.jsx';

const Skills = () => (
  <main className="pt-16">
    <SEO title="Skills" description="Technical skills, tools, and technologies used by Naveen." />
    <SkillsSection />
  </main>
);

export default Skills;
