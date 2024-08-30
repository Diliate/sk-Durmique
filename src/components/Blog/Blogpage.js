import React from "react";
import "./Blogpage.css";
import { Link } from "react-router-dom";

import { blogData } from "../../utils/blog-data";

function Blogpage() {
  console.log(blogData);
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
        <div className="blog-inner-container">
          <section className="blog-content">
            {blogData.map((blog, index) => (
              <article key={index} className="blog-post">
                <div className="blog-image-container">
                  <img src={blog.image} alt={blog.alt} className="image" />
                </div>
                <div className="blog-details">
                  <div>
                    <h2>{blog.title}</h2>
                    <p className="text-limit">{blog.description}</p>
                  </div>
                  <Link to={`/blog/${index}`} className="read-more">
                    Read more
                  </Link>
                </div>
              </article>
            ))}
          </section>
        </div>
      </div>
    </>
  );
}

export default Blogpage;
