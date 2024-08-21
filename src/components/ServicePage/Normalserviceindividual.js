import React from "react";
import { Link, useParams } from "react-router-dom";
import "./Normalserviceindividual.css";

import { normalserviceindividual } from "../../utils/normal-service-individual";

// Import default image or placeholder if needed
// import defaultImage from "../../assets/defaultImage.jpg"; // Ensure this path is correct

const Normalserviceindividual = () => {
  const { id, title } = useParams();
  const decodedTitle = decodeURIComponent(title);

  // Find the selected service based on ID
  const service = normalserviceindividual.find(
    (svc) => svc.id === parseInt(id)
  );

  // Check if service exists and get the index of the selected title
  const detailIndex = service?.details.titles.indexOf(decodedTitle);

  // Ensure we have a valid detail index
  if (
    !service ||
    detailIndex === -1 ||
    !service.details.description[detailIndex]?.detail[0]
  ) {
    return <p>Details not found</p>;
  }

  const detail = service.details.description[detailIndex]?.detail[0];

  return (
    <div className="normalserviceindividual-container">
      <div className="inner-container" style={{ minHeight: "500px" }}>
        <p className="normalservice-breadcrumbs">
          <Link to="/services/normal">Normal Services</Link> {">"}{" "}
          <Link to={`/services/normal/${id}`}>
            <span>{service.title}</span>
          </Link>{" "}
          {">"} <span>{decodedTitle}</span>
        </p>
        <div className="content-container">
          <div className="content">
            <img
              src={service.details.images[detailIndex]} // Fallback to default image if index is invalid
              alt={decodedTitle}
              className="individual-image"
            />
            <div>
              <h1>{detail.heading}</h1>
              {detail.paras.map((para, index) => (
                <p key={index}>{para}</p>
              ))}
              <h2>{detail.ques}</h2>
              <ul>
                {detail.answers.map((answer, index) => (
                  <li key={index}>{answer}</li>
                ))}
              </ul>
              <p>{detail.conclusion}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Normalserviceindividual;
