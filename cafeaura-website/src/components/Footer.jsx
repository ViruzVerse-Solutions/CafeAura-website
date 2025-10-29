import React from "react";
import "./Footer.css";
import { FaInstagram, FaTwitter, FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} CafeAura. All Rights Reserved.</p>

      <div className="social">
        <span>Follow us: </span>
        <a href="#" aria-label="Instagram">
          <FaInstagram />
        </a>
        <a href="#" aria-label="Twitter">
          <FaTwitter />
        </a>
        <a href="#" aria-label="Facebook">
          <FaFacebook />
        </a>
      </div>

      <p>
        <a href="#">Privacy</a> | <a href="#">Terms</a>
      </p>

      <p className="built">Built with ❤ by Team CafeAura</p>
    </footer>
  );
};

export default Footer;

