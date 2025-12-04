import React from 'react';
import { SEO } from '../seo/SEO.jsx';
import ContactSection from '../sections/Contact.jsx';

const Contact = () => (
  <main className="pt-16">
    <SEO title="Contact" description="Get in touch with Naveen Battula." />
    <ContactSection />
  </main>
);

export default Contact;
