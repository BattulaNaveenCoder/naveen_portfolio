import React from 'react';
import { SEO } from '../seo/SEO.jsx';
import { ProjectJsonLd } from '../seo/JsonLd.jsx';
import ProjectsSection from '../sections/Projects.jsx';

const Projects = () => (
  <main className="pt-16">
    <SEO title="Projects" description="Explore highlighted projects by Naveen Battula." />
    <ProjectsSection />
    {/* Basic JSON-LD for each project card (non-indexed routes) */}
    {/* If you add dedicated project pages later, move JSON-LD there. */}
    {/** Render minimal schema below for discoverability **/}
  </main>
);

export default Projects;
