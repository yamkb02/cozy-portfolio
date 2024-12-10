import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import '../styles/Navbar.css';

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);  // Collapse navbar after scrolling 50px
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = () => {
    setIsMenuOpen(false); // Close the menu after link click
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <ul className={isMenuOpen ? 'open' : ''}>
        <li><a href="#home" onClick={handleLinkClick}>Welcome</a></li>
        <li><a href="#about" onClick={handleLinkClick}>Who I Am</a></li>
        <li><a href="#projects" onClick={handleLinkClick}>What I Do</a></li>
        <li><a href="#contact" onClick={handleLinkClick}>Let's Connect</a></li>
      </ul>
      <button className="menu-toggle" onClick={toggleMenu}>
        <FontAwesomeIcon 
          icon={isMenuOpen ? faTimes : faBars} 
          className={isMenuOpen ? 'close-icon' : 'hamburger-icon'} 
        />
      </button>
    </nav>
  );
}

export default Navbar;
