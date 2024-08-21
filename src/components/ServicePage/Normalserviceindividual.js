import React from "react";
import { Link, useParams } from "react-router-dom";
import "./Normalserviceindividual.css";

import { normalserviceindividual } from "../../utils/normal-service-individual";

// Import default image or placeholder if needed
// import defaultImage from "../../assets/defaultImage.jpg"; // Ensure this path is correct

const Normalserviceindividual = () => {
  const { id, title } = useParams();
  const decodedTitle = decodeURIComponent(title);

  const service = normalserviceindividual.find(
    (svc) => svc.id === parseInt(id)
  );

  const detailIndex = service?.details.titles.indexOf(decodedTitle);

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
              src={service.details.images[detailIndex]}
              alt={decodedTitle}
              className="individual-image"
            />
            <div className="main-details">
              <h1>{detail.heading}</h1>
              {detail.paras.map((para, index) => (
                <p key={index}>{para}</p>
              ))}
            </div>
          </div>
          <div className="extra-details">
            <div>
              <h2>{detail.ques}</h2>
              <div className="answers">
                {detail.answers.map((answer, index) => (
                  <p key={index}>{answer}</p>
                ))}
              </div>
            </div>
            <div>
              <h2>{detail?.treatment?.title}</h2>
              <div className="answers">
                {detail?.treatment?.para.map((para, index) => (
                  <p key={index}>{para}</p>
                ))}
              </div>
            </div>
            <p className="conclusions">{detail.conclusion}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Normalserviceindividual;
