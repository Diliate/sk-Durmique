import React from "react";
import "./Blogpage.css";
import { Link } from "react-router-dom";

import { blogData } from "../../utils/blog-data";

function Blogpage() {
  return (
    <>
      <div
        className="blogpage-container"
        style={{
          minHeight: "500px",
        }}
      >
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
