import React from "react";
import { Link } from "react-router-dom";
import "./Normalservice.css";

import image1 from "./../../assets/images/servicepage2.jpg";
import image2 from "./../../assets/images/servicapage8.jpg";
import image3 from "./../../assets/images/servicedk1.jpeg";
import image4 from "./../../assets/images/Specialservice4.jpg";
import image5 from "./../../assets/images/servicepage5.jpg";
import image6 from "./../../assets/images/servicepage1.jpg";
import image7 from "./../../assets/images/servicepage1.jpg";

import { FaAngleRight } from "react-icons/fa";

function Normalservice() {
  const images = [
    {
      id: 1,
      src: image1,
      alt: "Image 1",
      title: "Skin Care",
      details:
        "Achieve smooth, hair-free skin with our advanced laser hair reduction treatments.",
    },
    {
      id: 2,
      src: image2,
      alt: "Image 2",
      title: "Hair Care",
      details:
        "Rejuvenate and brighten your complexion with our non-invasive photofacial therapy.",
    },
    {
      id: 3,
      src: image3,
      alt: "Image 3",
      title: "Common Skin Problems",
      details:
        "Refresh and hydrate your skin with our deep-cleansing aquafacial treatments.",
    },
    {
      id: 4,
      src: image4,
      alt: "Image 4",
      title: "Skin Rejuvenation",
      details:
        "Experience a radiant glow and clear pores with our innovative carbon facial.",
    },
    {
      id: 5,
      src: image5,
      alt: "Image 5",
      title: "Pediatric Skin Problems",
      details:
        "Boost your skin's natural rejuvenation with our Platelet-Rich Plasma (PRP) therapy.",
    },
    {
      id: 6,
      src: image6,
      alt: "Image 6",
      title: "Mesotherapy",
      details:
        "Firm and lift your skin with our effective non-surgical skin tightening solutions.",
    },
    {
      id: 7,
      src: image7,
      alt: "Image 7",
      title: "Old age skin problems",
      details:
        "Firm and lift your skin with our effective non-surgical skin tightening solutions.",
    },
  ];

  return (
    <>
      <div className="normalservice-container">
        <div className="normalservice-inner-container">
          <h1 className="normalservice-heading">Normal Services</h1>
          <div className="image-grid">
            {images.map((image) => (
              <div key={image.id} className="image-card">
                <img src={image.src} alt={image.alt} className="image" />
                <div className="details-overlay">
                  <h2 className="details-text">{image.title}</h2>
                  <p>{image.details}</p>
                  <Link to={`/services/normal/${image.id}`}>
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

export default Normalservice;
