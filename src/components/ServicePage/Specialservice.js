import React from "react";
import { Link } from "react-router-dom";
import "./Specialservice.css";
import { specialservices } from "../../utils/special-service";
import { FaAngleRight } from "react-icons/fa";

function Specialservice() {
  return (
    <>
      <div className="specialservice-container">
        <div
          className="specialservice-inner-conatiner"
          style={{
            minHeight: "500px",
          }}
        >
          <h1 className="specialservice-heading">Special Services</h1>
          <div className="image-grid">
            {specialservices.map((image) => (
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
