import React from "react";
import { useParams } from "react-router-dom";
import { blogDetails } from "../../utils/blog-details";
import "./BlogDetails.css";

function BlogDetailPage() {
  const { index } = useParams();
  const blog = blogDetails[parseInt(index)];

  if (!blog) {
    return <div>Blog not found!</div>;
  }

  return (
    <div className="blog-detail-container">
      <header className="blog-detail-header">
        <h1>{blog.title}</h1>
        <img src={blog.image} alt={blog.alt} className="detail-image" />
      </header>
      <section
        className="blog-detail-content"
        dangerouslySetInnerHTML={{ __html: blog.content }}
      />
    </div>
  );
}

export default BlogDetailPage;
