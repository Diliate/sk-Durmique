import React from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { FaAngleRight } from "react-icons/fa";
import "./Normalservicedetail.css";

import { normalservicedetails } from "../../utils/normal-service-details";

function Normalservicedetail() {
  const { id } = useParams();
  const image = normalservicedetails.find((img) => img.id === parseInt(id));

  return (
    <div className="normalservicedetail-container">
      <div
        className="normalservicedetail-inner-container"
        style={{
          minHeight: "500px",
        }}
      >
        <p className="breadcrumbs">
          <Link to="/services/normal">Normal Services</Link> {">"}{" "}
          <span>{image.title}</span>
        </p>
        {image && image ? (
          <div>
            <h1>{image.title}</h1>
            <div className="image-grid">
              {image.details.images.map((img, index) => (
                <div key={index} className="image-card">
                  <img
                    src={img}
                    alt={image.details.titles[index] || "Image"}
                    className="image"
                  />
                  <div className="normal-details-overlay">
                    <h2 className="normal-details-text">
                      {image.details.titles[index] || "No Title"}
                    </h2>
                    <Link
                      to={`/services/normal/${id}/${image.details.titles[index]}`}
                    >
                      <button className="know-more-button">
                        Know more <FaAngleRight />{" "}
                      </button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <p>Image not found</p>
        )}
      </div>
    </div>
  );
}

export default Normalservicedetail;
