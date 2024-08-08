import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import "./Blogpage.css";
import skincareTipsImage from "./../../assets/images/Servicepic5.png";
import skinTypesImage from "./../../assets/images/Servicepic6.png";
import facialsImage from "./../../assets/images/Servicepic7.png";

import { Link } from "react-router-dom";

function Blogpage() {
  const blogData = [
    {
      title: "Top 5 Skincare Tips for Healthy Skin",
      image: skincareTipsImage,
      alt: "Skincare Tips",
      description:
        "Discover the top 5 skincare tips to keep your skin healthy and glowing.",
      url: "/blog1",
    },
    {
      title: "Understanding Different Skin Types",
      image: skinTypesImage,
      alt: "Skin Types",
      description:
        "Learn about the different skin types and how to tailor your skincare routine.",
      url: "/blog2",
    },
    {
      title: "The Benefits of Regular Facials",
      image: facialsImage,
      alt: "Facials",
      description:
        "Find out how facials help in deep cleansing, exfoliation, and rejuvenation.",
      url: "/blog3",
    },
  ];
  return (
    <>
      <div className="blogpage-container">
        <header className="blogpage-header">
          <h1>Welcome to Our Skincare Clinic Blog</h1>
          <p>
            Your source for the latest in skincare tips, treatments, and news.
          </p>
        </header>
        <section className="blog-content">
          {blogData.map((blog, index) => (
            <article className="blog-post" key={index}>
              <h2>{blog.title}</h2>
              <p className="post-date">{blog.date}</p>
              <img
                src={blog.image}
                alt={blog.alt}
                className="post-image"
                loading="lazy"
              />
              <p>{blog.description}</p>
              <Link to={blog.url} className="read-more">
                Read more
              </Link>
            </article>
          ))}
        </section>
      </div>
    </>
  );
}

export default Blogpage;
