import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header>
      <div className="logo-section">
        <img src="cafe_aura_logo.png" alt="CafeAura Logo" className="logo-img" />
        {/* <span className="logo-text">CafeAura</span> */}
      </div>

      <nav className="main-nav">
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Features</a>
        <a href="#">Contact</a>
      </nav>
      <div className="auth-buttons">
        <a href="#" className="login-btn">Login/Download</a>
      </div>
    </header>
  );
};

export default Header;
