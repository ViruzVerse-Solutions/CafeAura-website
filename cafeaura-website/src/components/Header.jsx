import React, { useState } from "react";
import "./Header.css";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header>
      <div className="logo-section">
        <img
          src="cafe_aura_logo.png"
          alt="CafeAura Logo"
          className="logo-img"
        />
      </div>

      <button 
        className="hamburger-menu"
        onClick={toggleMenu}
        aria-label="Toggle menu"
        aria-expanded={isMenuOpen}
      >
        <span className={`hamburger-line ${isMenuOpen ? 'active' : ''}`}></span>
        <span className={`hamburger-line ${isMenuOpen ? 'active' : ''}`}></span>
        <span className={`hamburger-line ${isMenuOpen ? 'active' : ''}`}></span>
      </button>

      <nav className={`main-nav ${isMenuOpen ? 'open' : ''}`}>
        <a href="#home" onClick={closeMenu}>Home</a>
        <a href="#about" onClick={closeMenu}>About</a>
        <a href="#features" onClick={closeMenu}>Features</a>
        <a href="#contact" onClick={closeMenu}>Contact</a>
      </nav>

      <div className={`auth-buttons ${isMenuOpen ? 'open' : ''}`}>
        <a href="#" className="login-btn" onClick={closeMenu}>
          Login/Download
        </a>
      </div>
    </header>
  );
};

export default Header;
