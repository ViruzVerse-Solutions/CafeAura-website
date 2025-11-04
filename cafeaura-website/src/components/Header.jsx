import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header>
      <div className="logo-section">
        <img
          src="cafe_aura_logo.png"
          alt="CafeAura Logo"
          className="logo-img"
        />
      </div>

      <nav className="main-nav">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#features">Features</a>
        <a href="#contact">Contact</a>
      </nav>

      <div className="auth-buttons">
        <a href="#" className="login-btn">
          Login/Download
        </a>
      </div>
    </header>
  );
};

export default Header;
