import React from "react";
import { Link } from "react-router-dom";
import "./Normalservice.css";
import { FaAngleRight } from "react-icons/fa";

import { normalservices } from "../../utils/normal-service";

function Normalservice() {
  return (
    <>
      <div
        className="normalservice-container"
        style={{
          minHeight: "500px",
        }}
      >
        <div className="normalservice-inner-container">
          <h1 className="normalservice-heading">Normal Services</h1>
          <div className="image-grid">
            {normalservices.map((image) => (
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
