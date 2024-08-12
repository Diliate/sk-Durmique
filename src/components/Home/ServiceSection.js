import React from "react";
import "./ServiceSection.css";
import serviceImage1 from "../../assets/images/Servicepic5.png";
import serviceImage2 from "../../assets/images/Servicepic4.png";
import serviceImage3 from "../../assets/images/Servicepic6.png";
import { Link } from "react-router-dom";

const Services = () => {
  const services = [
    {
      img: serviceImage1,
      title: "Aquafacial",
      desc: "Cleanses, exfoliates, and nourishes the skin with the care.",
    },
    {
      img: serviceImage2,
      title: "Photofacial",
      desc: "Uses intense light pulses to penetrate deep into the skin.",
    },
    {
      img: serviceImage3,
      title: "Carbon Facial",
      desc: "Treats acne, open pores, oily skin, and uneven skin tone.",
    },
  ];

  const items = services.map((service, index) => (
    <div className="services-card" key={index}>
      <img
        src={service.img}
        alt={service.title}
        className="services-card-image"
      />
      <div className="services-card-overlay">
        <h3 className="services-card-title">{service.title}</h3>
        <p className="services-card-description">{service.desc}</p>
        <Link to="/services/special">Know More</Link>
      </div>
    </div>
  ));

  return (
    <div className="services-page">
      <section className="services-intro-section">
        <h2>SPECIAL SERVICE</h2>
        <p>
          We offer a range of specialized treatments designed for your
          well-being. Our expert team is dedicated to providing top-notch care
          and personalized service for each of your needs.
        </p>
      </section>
      <div className="services-image-grid">{items}</div>
      <div className="services-know-more-button">
        <Link to="/services/special">
          <button>Know More</button>
        </Link>
      </div>
    </div>
  );
};

export default Services;
