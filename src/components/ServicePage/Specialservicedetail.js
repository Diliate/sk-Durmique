import React from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import "./Specialservicedetail.css";

import { specialservicedetails } from "../../utils/special-service-details";

function Specialservicedetail() {
  const { id } = useParams();
  const image = specialservicedetails.find((img) => img.id === parseInt(id));

  return (
    <div className="specialservicedetail-container">
      <div
        className="specialservice-inner-container"
        style={{
          minHeight: "500px",
        }}
      >
        <p className="breadcrumbs">
          <Link to="/services/special">Special Services</Link> {">"}{" "}
          <span>{image.alt}</span>
        </p>
        {image ? (
          <div className="special-service-content">
            <div className="special-container">
              <img src={image.src} alt={image.alt} />
              <div>
                <h1>{image.alt}</h1>
                {image.details.map((detail, index) => (
                  <p key={index}>{detail}</p>
                ))}
              </div>
            </div>

            <h3 className="special-service-ques">{image.ques}</h3>
            <div className="special-service-ans-container">
              {image.answers.map((ans, index) => (
                <ul key={index} className="special-service-answers">
                  <li>{ans}</li>
                </ul>
              ))}
            </div>
            <div className="special-service-conclusion">
              <span>***</span>
              <p>{image.conclusion}</p>
              <span>***</span>
            </div>
          </div>
        ) : (
          <p>Image not found</p>
        )}
      </div>
    </div>
  );
}

export default Specialservicedetail;
