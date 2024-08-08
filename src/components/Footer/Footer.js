import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>SK DERMIQE</h3>
          <p>Skin Hair & Laser Clinic</p>
          <p>Your trusted partner for skincare solutions.</p>
        </div>
        <div className="footer-section">
          <h3>Useful Links</h3>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li class="dropdown">
              <a href="/about/doctor" class="dropbtn">About Doctor</a>
              <div class="dropdown-content">
                <a href="/about/clinic">About Clinic</a>
              </div>
            </li>
            <li class="dropdown">
              <div class="dropdown-content">
                <a href="/services/normal">Normal Services</a>
              </div>
              <div>
                <a href="/services/special">Special Services</a>
              </div>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Social Media</h3>
          <ul className="social-media-links">
            <li>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook />
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter />
              </a>
            </li>
            <li>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram />
              </a>
            </li>
            <li>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin />
              </a>
            </li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Contact Us</h3>
          <p>
            <FaPhone /> +91 9818831106
          </p>
          <p>
            <FaEnvelope /> skdurmiqe@gmail.com
          </p>
          <p>Plot No B 56 BPTP,</p>
          <p>Sector 88, Greater Faridabad</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
