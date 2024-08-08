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
      date: "August 5, 2024",
      image: skincareTipsImage,
      alt: "Skincare Tips",
      description:
        "Discover the top 5 skincare tips to keep your skin healthy and glowing.",
      url: "/blog1",
    },
    {
      title: "Understanding Different Skin Types",
      date: "July 28, 2024",
      image: skinTypesImage,
      alt: "Skin Types",
      description:
        "Learn about the different skin types and how to tailor your skincare routine.",
      url: "/blog2",
    },
    {
      title: "The Benefits of Regular Facials",
      date: "July 15, 2024",
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
        <aside className="sidebar">
          <h3>About Our Clinic</h3>
          <p>
            Our skincare clinic offers a range of services to help you achieve
            and maintain healthy, beautiful skin. From facials and peels to
            advanced treatments, our experts are here to provide personalized
            care.
          </p>
          <h3>Categories</h3>
          <ul>
            <li>
              <a href="/">Skincare Tips</a>
            </li>
            <li>
              <a href="/">Treatments</a>
            </li>
            <li>
              <a href="/">Product Reviews</a>
            </li>
            <li>
              <a href="/">Clinic News</a>
            </li>
          </ul>
          <h3>Follow Us</h3>
          <div className="social-media-links">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </div>
        </aside>
        <footer className="blogpage-footer">
          <p>&copy; 2024 Skincare Clinic. All rights reserved.</p>
        </footer>
      </div>
    </>
  );
}

export default Blogpage;
