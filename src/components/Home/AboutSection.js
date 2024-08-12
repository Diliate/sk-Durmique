import React, { Suspense, lazy } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import "./AboutSection.css";

const LazyVideo = lazy(() => import("./LazyVideo"));

function AboutSection() {
  return (
    <section className="about-page">
      <Helmet>
        <title>About Us - SK Durmiq Clinic</title>
        <meta name="description" content="Learn more about SK Durmiq Clinic, where we believe true beauty begins with healthy skin and hair. Explore our mission and values." />
        <meta property="og:title" content="About Us - SK Durmiq Clinic" />
        <meta property="og:description" content="At SK Durmiq Clinic, we empower individuals to look and feel their best with premium skincare and haircare solutions." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.yourwebsite.com/about" />
        <meta property="og:image" content="https://www.yourwebsite.com/path-to-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About Us - SK Durmiq Clinic" />
        <meta name="twitter:description" content="Explore SK Durmiq Clinic's commitment to enhancing natural beauty and promoting overall well-being." />
      </Helmet>

      <h1 className="about-heading">About Us</h1>
      <div className="about-content">
        <div className="video-section">
          <Suspense fallback={<div>Loading video...</div>}>
            <LazyVideo />
          </Suspense>
        </div>
        <div className="text-section">
          <h2>Welcome to our Clinic</h2>
          <p>
            At SK Durmiq Clinic, we believe that true beauty begins with healthy skin and hair. Our mission is to empower individuals to look and feel their best by offering a carefully curated selection of premium skincare and haircare products. We are dedicated to providing solutions that enhance your natural beauty, boost your confidence, and promote overall well-being.
            Our approach is rooted in the belief that every person deserves to feel confident and radiant in their skin. That's why we have meticulously designed our treatments and products to address a wide range of skin and hair concerns, from hydration and anti-aging to revitalization and repair. Whether you're seeking to restore your skin's youthful glow, strengthen and nourish your hair, or simply maintain your current beauty regimen, we have the expertise and resources to support your journey.
            
          </p>
          <Link to="/about/clinic" aria-label="Learn more about our clinic and offerings">
            <button className="know-more">Learn More About Our Clinic</button>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
