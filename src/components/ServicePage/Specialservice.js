import React from "react";
import { Link } from "react-router-dom";
import "./Specialservice.css";

import image1 from "./../../assets/images/Specialservice1.jpg";
import image2 from "./../../assets/images/Specialservice2.jpg";
import image3 from "./../../assets/images/Specialservice3.jpg";
import image4 from "./../../assets/images/Specialservice4.jpg";
import image5 from "./../../assets/images/Specialservice5.jpg";
import image6 from "./../../assets/images/Specialservice6.jpg";

import { FaAngleRight } from "react-icons/fa";

function Specialservice() {
  const images = [
    {
      id: 1,
      src: image1,
      alt: "Image 1",
      title: "Laser Hair Reduction",
      details:
        "Achieve smooth, hair-free skin with our advanced laser hair reduction treatments.",
    },
    {
      id: 2,
      src: image2,
      alt: "Image 2",
      title: "Photofacial",
      details:
        "Rejuvenate and brighten your complexion with our non-invasive photofacial therapy.",
    },
    {
      id: 3,
      src: image3,
      alt: "Image 3",
      title: "Aquafacial",
      details:
        "Refresh and hydrate your skin with our deep-cleansing aquafacial treatments.",
    },
    {
      id: 4,
      src: image4,
      alt: "Image 4",
      title: "Carbon Facial",
      details:
        "Experience a radiant glow and clear pores with our innovative carbon facial.",
    },
    {
      id: 5,
      src: image5,
      alt: "Image 5",
      title: "PRP",
      details:
        "Boost your skin's natural rejuvenation with our Platelet-Rich Plasma (PRP) therapy.",
    },
    {
      id: 6,
      src: image6,
      alt: "Image 6",
      title: "Skin Tightening",
      details:
        "Firm and lift your skin with our effective non-surgical skin tightening solutions.",
    },
  ];

  return (
    <>
      <div className="specialservice-container">
        <div className="specialservice-inner-conatiner">
          <h1 className="specialservice-heading">Special Services</h1>
          <div className="image-grid">
            {images.map((image) => (
              <div key={image.id} className="image-card">
                <img src={image.src} alt={image.alt} className="image" />
                <div className="details-overlay">
                  <h2 className="details-text">{image.title}</h2>
                  <p>{image.details}</p>
                  <Link to={`/services/special/${image.id}`}>
                    <button className="know-more-button">
                      Know more <FaAngleRight />{" "}
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Specialservice;
