'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';

export default function Topbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Toggle menu on mobile
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // Handle scrolling effect
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Add background when scrolled
      if (currentScrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const navLinks = [
    { href: '/#/', label: 'Home' },
    { href: '/#/about', label: 'About Me' },
    { href: '/#/clients', label: 'Clients' },
    { href: '/#/professional-experiences', label: 'Experiences' },
    { href: '/#/projects', label: 'Projects' },
    { href: '/#/posts', label: 'Posts' },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={`fixed w-full top-0 left-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg py-3' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo Section */}
          <a href="/#/" className="flex items-center space-x-3 group">
            <div className={`relative w-10 h-10 sm:w-12 sm:h-12
              ${isScrolled ? 'filter-none' : 'filter brightness-0 invert'}
            `}>
              <Image
                src="/images/logo.jpg"
                alt="My Logo"
                fill
                className="object-contain transition-transform duration-300 group-hover:scale-110"
                priority
              />
            </div>
            <div className="block">
              <div className={`text-sm font-bold transition-colors ${
                isScrolled ? 'text-gray-900' : 'text-white'
              }`}>
                Haikal Rafif
              </div>
              <div className={`text-xs transition-colors ${
                isScrolled ? 'text-gray-600' : 'text-gray-200'
              }`}>
                Personal Website
              </div>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`px-3 lg:px-4 py-2 rounded-lg font-medium text-sm lg:text-base transition-all duration-300 hover:scale-105 ${
                  isScrolled
                    ? 'text-black hover:bg-green-50 hover:text-green-600'
                    : 'text-gray-700 hover:bg-white/10'
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-lg transition-colors text-gray-700 hover:bg-gray-100"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <FaTimes />
            ) : (
              <FaBars />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white border-t border-gray-200 shadow-lg"
            onAnimationComplete={() => {
              if (window.location.hash) {
                const id = window.location.hash.replace('#', '');
                document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            <nav className="px-4 py-4 space-y-2">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="block px-4 py-3 text-gray-700 hover:bg-green-50 hover:text-green-600 rounded-lg font-medium transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </motion.a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
