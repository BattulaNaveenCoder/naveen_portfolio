import React from 'react';
import { Outlet } from 'react-router-dom';
import FloatingParticles from '../components/FloatingParticles.jsx';
import Navigation from '../components/Navigation.jsx';

const links = [
  { id: 'home', label: 'home', to: '/' },
  { id: 'about', label: 'about', to: '/about' },
  { id: 'skills', label: 'skills', to: '/skills' },
  { id: 'projects', label: 'projects', to: '/projects' },
  { id: 'blogs', label: 'blogs', to: '/blogs' },
  { id: 'contact', label: 'contact', to: '/contact' }
];

const MainLayout = () => (
  <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-purple-900 text-white overflow-x-hidden">
    <FloatingParticles />
    <Navigation links={links} />
    <Outlet />
  </div>
);

export default MainLayout;
