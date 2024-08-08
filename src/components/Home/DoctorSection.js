import React from "react";
import "./DoctorSection.css";
import doctorImage from "../../assets/images/Doctorpic.png";
import { Link } from "react-router-dom";

const DoctorSection = () => {
  return (
    <div className="doctor-section-page">
      <h1 className="doctor-section-heading">About Doctor</h1>
      <div className="doctor-section-content">
        <div className="doctor-section-image">
          <img
            src={doctorImage}
            alt="doctor"
            className="doctor-section-image-img"
          />
        </div>
        <div className="doctor-section-text">
          <h2>Dr. Shweta Kesarwani</h2>
          <p>
            Dr. Shweta Kesarwani, a top dermatologist in Greater Faridabad, has
            20 years of experience in dermatology and cosmetology. She completed
            her post-graduation at LLRM Medical College, Meerut, and has served
            at Asian Hospital and QRG Hospital in Faridabad. Renowned for her
            expertise and continuous learning, Dr. Kesarwani regularly attends
            conferences to stay updated on dermatological advancements. Her
            holistic approach ensures comprehensive, personalized treatments.
            Dr. Kesarwani's dedication to patient care makes her an excellent
            choice for top-quality dermatological and cosmetic treatments in
            Greater Faridabad.
          </p>
          <Link to="/about/doctor" className="doctor-section-know-more">
            Know More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DoctorSection;
