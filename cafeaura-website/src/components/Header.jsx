import React from "react";
import "./Header.css"; // Import the CSS file

const Header = () => {
  return (
    <header>
      <div className="logo">CafeAura</div>
      <nav>
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Features</a>
        <a href="#">Contact</a>
        <a href="">Login/Download</a>
      </nav>
    </header>
  );
};

export default Header;
