import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";
import logo from "../../assets/images/logo.jpg";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showAboutMenu, setShowAboutMenu] = useState(false);
  const [showServicesMenu, setShowServicesMenu] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleAboutMouseEnter = () => setShowAboutMenu(true);
  const handleAboutMouseLeave = () => setShowAboutMenu(false);
  const handleServicesMouseEnter = () => setShowServicesMenu(true);
  const handleServicesMouseLeave = () => setShowServicesMenu(false);

  useEffect(() => {
    setIsOpen(false);
    setShowAboutMenu(false);
    setShowServicesMenu(false);
  }, [location]);

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="Durmiqe" />
          </Link>
        </div>
      </div>
      <div className={`navbar-links ${isOpen ? "open" : ""}`}>
        <ul>
          <li>
            <Link to="/" onClick={() => setIsOpen(false)}>
              Home
            </Link>
          </li>
          <li
            onMouseEnter={handleAboutMouseEnter}
            onMouseLeave={handleAboutMouseLeave}
          >
            <div onClick={(e) => e.preventDefault()} className="no-link">
              About
            </div>
            {showAboutMenu && (
              <ul className="submenu">
                <li>
                  <Link to="/about/doctor" onClick={() => setIsOpen(false)}>
                    About Doctor
                  </Link>
                </li>
                <li>
                  <Link to="/about/clinic" onClick={() => setIsOpen(false)}>
                    About Clinic
                  </Link>
                </li>
              </ul>
            )}
          </li>
          <li
            onMouseEnter={handleServicesMouseEnter}
            onMouseLeave={handleServicesMouseLeave}
          >
            <div onClick={(e) => e.preventDefault()} className="no-link">
              Services
            </div>
            {showServicesMenu && (
              <ul className="submenu">
                <li>
                  <Link to="/services/special" onClick={() => setIsOpen(false)}>
                    Special Services
                  </Link>
                </li>
                <li>
                  <Link to="/services/normal" onClick={() => setIsOpen(false)}>
                    Normal Services
                  </Link>
                </li>
              </ul>
            )}
          </li>
          <li>
            <Link to="/contact" onClick={() => setIsOpen(false)}>
              Contact
            </Link>
          </li>
          <li>
            <Link to="/blog" onClick={() => setIsOpen(false)}>
              Blog
            </Link>
          </li>
        </ul>
      </div>
      <div className="navbar-right">
        <Link
          to="/appointment"
          className="appointment-link"
          onClick={() => setIsOpen(false)}
        >
          Appointment
        </Link>
        <div className="menu-toggle" onClick={toggleMenu}>
          &#9776;
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
