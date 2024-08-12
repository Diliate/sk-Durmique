import React from "react";
import aboutVideo from "../../assets/images/skvideo.mp4"; // Ensure the video file is in the correct path
import "./AboutSection.css";
import { Link } from "react-router-dom";

function AboutSection() {
  return (
    <div className="about-page">
      <h2 className="about-heading">ABOUT US</h2>
      <div className="about-content">
        <div className="video-section">
          <video src={aboutVideo} className="about-video" loop autoPlay muted />
        </div>
        <div className="text-section">
          <h3>Welcome to our Clinic</h3>
          <p>
            At SK Durmiqe Clinic, we believe that true beauty begins with
            healthy skin and hair. Our mission is to empower individuals to look
            and feel their best by offering a carefully curated selection of
            premium skincare and haircare products. We are dedicated to
            providing solutions that enhance your natural beauty, boost your
            confidence, and promote overall well-being.
          </p>
          <Link to="/about/clinic">
            <button className="know-more">Know More</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default AboutSection;
