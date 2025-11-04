import React from "react";
import "./Footer.css";
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-section">
          <h3>Company</h3>
          <ul>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Features</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Solutions</h3>
          <ul>
            <li><a href="#">For Students</a></li>
            <li><a href="#">For Cafeteria Admins</a></li>
            <li><a href="#">For Colleges</a></li>
            <li><a href="#">For Partners</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Resources</h3>
          <ul>
            <li><a href="#">Help Center</a></li>
            <li><a href="#">FAQs</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Feedback</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Partners</h3>
          <ul>
            <li><a href="#">Campus Cafeterias</a></li>
            <li><a href="#">Vendors</a></li>
            <li><a href="#">Google Maps</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Legal</h3>
          <ul>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms of Service</a></li>
            <li><a href="#">Cookie Policy</a></li>
          </ul>
        </div>
      </div>

      {/* Social Media Icons */}
      <div className="social-icons">
        <a href="#"><FaFacebookF /></a>
        <a href="#"><FaInstagram /></a>
        <a href="#"><FaTwitter /></a>
        <a href="#"><FaLinkedinIn /></a>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <p>© 2025 CafeAura. All Rights Reserved.</p>
        <p>Built with ❤️ by <strong>Team CafeAura</strong></p>
      </div>
    </footer>
  );
};

export default Footer;
