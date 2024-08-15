import React from "react";
import { Link, useParams } from "react-router-dom";
import "./Normalserviceindividual.css";

import { normalserviceindividual } from "../../utils/normal-service-individual";

const Normalserviceindividual = () => {
  const { id, title } = useParams();
  const decodedTitle = decodeURIComponent(title);
  const image = normalserviceindividual.find((img) => img.id === parseInt(id));
  const imageIndex = image?.details.titles.indexOf(decodedTitle);

  console.log(image);

  return (
    <div className="normalserviceindividual-container">
      <div
        className="inner-container"
        style={{
          minHeight: "500px",
        }}
      >
        <p className="normalservice-breadcrumbs">
          <Link to="/services/normal">Normal Services</Link> {">"}{" "}
          <Link to={`/services/normal/${id}`}>
            <span>{image?.title}</span>
          </Link>{" "}
          {">"} <span>{decodedTitle}</span>
        </p>
        <div className="content-container">
          {imageIndex !== -1 ? (
            <div className="content">
              <img
                src={image.details.images[imageIndex]}
                alt={decodedTitle}
                className="individual-image"
              />
              <div>
                {/* {description.detail.map((detail, index) => (
                <h1>{detail.}</h1>
              ))} */}
                {/* <h1>{decodedTitle}</h1> */}

                {/* <p>{image.details.description[imageIndex]}</p> */}
              </div>
            </div>
          ) : (
            <p>Details not found</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Normalserviceindividual;
