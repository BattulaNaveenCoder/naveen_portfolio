import React from 'react';
import { SEO } from '../seo/SEO.jsx';
import AboutSection from '../sections/About.jsx';

const About = () => (
  <main className="pt-16">
    <SEO title="About" description="Learn more about Naveen Battula — experience, values, and background." />
    <AboutSection />
  </main>
);

export default About;
