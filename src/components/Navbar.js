import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import './style/Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About Us' },
    { path: '/services', label: 'Services' },
    { path: '/products', label: 'Products' },
    { path: '/contact', label: 'Contact Us' },
  ];

  return (
    <motion.nav 
      className={`navbar ${scrolled ? 'scrolled' : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container">
        <div className="navbar-content">
          <Link to="/" className="logo" onClick={closeMenu}>
            <motion.div 
              className="logo-icon"
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
            >
              🪚
            </motion.div>
            <div className="logo-text">
              <h1>GAJJAR FURNITURES</h1>
              <span>Modern Wood Artistry</span>
            </div>
          </Link>

          <div className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
            {navItems.map((item, index) => (
              <motion.div
                key={item.path}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <Link 
                  to={item.path} 
                  className={`nav-link ${location.pathname === item.path ? 'active' : ''}`}
                  onClick={closeMenu}
                >
                  {item.label}
                  <span className="nav-link-underline"></span>
                </Link>
              </motion.div>
            ))}
            <motion.button 
              className="btn btn-secondary nav-cta"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                closeMenu();
                window.location.href = '/contact';
              }}
            >
              Get Quote
            </motion.button>
          </div>

          <motion.button 
            className={`menu-toggle ${isMenuOpen ? 'active' : ''}`}
            onClick={toggleMenu}
            whileTap={{ scale: 0.95 }}
          >
            <span></span>
            <span></span>
            <span></span>
          </motion.button>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;