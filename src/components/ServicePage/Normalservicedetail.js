import React from "react";
import { useParams } from "react-router-dom";

import image1 from "../../assets/images/Specialservice1.jpg";
import image2 from "../../assets/images/Specialservice2.jpg";
import image3 from "../../assets/images/Specialservice3.jpg";
import image4 from "../../assets/images/Specialservice4.jpg";
import image5 from "../../assets/images/Specialservice5.jpg";
import image6 from "../../assets/images/Specialservice6.jpg";

const images = [
  {
    id: 1,
    src: image1,
    alt: "Laser Hair Reduction",
    details: "Details about image 1",
  },
  {
    id: 2,
    src: image2,
    alt: "Photofacial",
    details: "Details about image 2",
  },
  {
    id: 3,
    src: image3,
    alt: "Aquafacial",
    details: "Details about image 3",
  },
  {
    id: 4,
    src: image4,
    alt: "Carbon Facial",
    details: "Details about image 4",
  },
  {
    id: 5,
    src: image5,
    alt: "PRP",
    details: "Details about image 5",
  },
  {
    id: 6,
    src: image6,
    alt: "Skin Tightening",
    details: "Details about image 6",
  },
];

function Normalservicedetail() {
  const { id } = useParams();
  const image = images.find((img) => img.id === parseInt(id));

  return (
    <div className="normalservicedetail-container">
      {image ? (
        <div className="normal-service-content">
          <h1>{image.alt}</h1>
          <img src={image.src} alt={image.alt} />
          <p>{image.details}</p>
        </div>
      ) : (
        <p>Image not found</p>
      )}
    </div>
  );
}

export default Normalservicedetail;
