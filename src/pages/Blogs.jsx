import React from 'react';
import { SEO } from '../seo/SEO.jsx';
import BlogsSection from '../sections/Blogs.jsx';

const Blogs = () => (
  <main className="pt-16">
    <SEO title="Blogs" description="Read articles and notes by Naveen Battula." />
    <BlogsSection />
  </main>
);

export default Blogs;
