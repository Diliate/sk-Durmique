import React from "react";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import "./SideLogo.css";

const SideLogo = () => {
  return (
    <div className="logo-sticky">
      <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
        <div className="icon-box facebook">
          <FaFacebookF className="icon icon-facebook" />
        </div>
      </a>

      <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
        <div className="icon-box instagram">
          <FaInstagram className="icon icon-instagram" />
        </div>
      </a>
    </div>
  );
};

export default SideLogo;
