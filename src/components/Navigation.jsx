import React, { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { NavLink } from 'react-router-dom';

// Default links if none provided
const defaultLinks = [
  { id: 'home', label: 'home', to: '/' },
  { id: 'about', label: 'about', to: '/about' },
  { id: 'skills', label: 'skills', to: '/skills' },
  { id: 'projects', label: 'projects', to: '/projects' },
  { id: 'blogs', label: 'blogs', to: '/blogs' },
  { id: 'contact', label: 'contact', to: '/contact' }
];

const Navigation = ({ links = defaultLinks }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-colors duration-300 ${
        isMenuOpen || scrolled
          ? 'bg-gradient-to-r from-purple-900/40 via-black/40 to-pink-900/40 backdrop-blur-xl border-b border-white/10'
          : 'bg-gradient-to-r from-purple-900/10 via-transparent to-pink-900/10 border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-16">
        <div className="flex items-center justify-between h-full">
          <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Naveen Battula
          </div>

          <div className="hidden md:flex space-x-8">
            {links.map((link) => (
              <NavLink
                key={link.id}
                to={link.to}
                className={({ isActive }) =>
                  `capitalize transition-all duration-300 hover:text-purple-400 ${
                    isActive ? 'text-purple-400' : 'text-white'
                  }`
                }
                onClick={closeMenu}
              >
                {link.label}
              </NavLink>
            ))}
          </div>

          <button className="md:hidden text-white" onClick={() => setIsMenuOpen((v) => !v)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-2">
            {links.map((link) => (
              <NavLink
                key={link.id}
                to={link.to}
                className={({ isActive }) =>
                  `block w-full text-left capitalize py-2 transition-colors ${
                    isActive ? 'text-purple-400' : 'text-white hover:text-purple-400'
                  }`
                }
                onClick={closeMenu}
              >
                {link.label}
              </NavLink>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
