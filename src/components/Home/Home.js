import React from "react";
import { Link } from "react-router-dom";
import homepic1 from "../../assets/images/Home-pic1.png";

import "./Home.css";
import DoctorSection from "./DoctorSection";
import AboutSection from "./AboutSection";
import ServiceSection from "./ServiceSection";
import BlogSection from "./BlogSection";
import ReviewSection from "./ReviewSection";
import FAQ from "../FAQ-page/Faq";
import { faqData } from "../FAQ-page/faqData";

function Home() {
  return (
    <>
      <div className="home-container">
        <div className="home-image-section">
          <img src={homepic1} alt="image1" className="image-zigzag" />
        </div>
        <div className="home-text">
          <div className="home-text-content">
            <h3 className="home-text-h3">
              We care for healthier skin and hair
            </h3>
            <h1>
              Get the Best Skin & Hair <br /> Treatment
            </h1>
            <p>
              Revitalize Your Beauty, Naturally. Transform Your Skin, Elevate
              Your Hair. Unleash the Radiance Within You.
            </p>
            <div className="home-button">
              <Link to="/login" className="home-appointment-button">
                Book Appointment
              </Link>
            </div>
          </div>
        </div>
      </div>
      <AboutSection />
      <ServiceSection />
      <DoctorSection />
      <BlogSection />
      <ReviewSection />
      <div className="faq-container">
        <FAQ data={faqData} />
      </div>
    </>
  );
}

export default Home;
