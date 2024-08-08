import React, { useRef } from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import './BlogSection.css';
import blogImage1 from "../../assets/images/blog1.png";
import blogImage2 from "../../assets/images/blog2.png";
import blogImage3 from "../../assets/images/blog3.png";

const BlogSection = () => {
    const carouselRef = useRef(null);

    const blogs = [
        { img: blogImage1, desc: 'Discover the secrets to radiant skin with our top 10 skin care tips that every expert swears by.', link: '/blog1' },
        { img: blogImage2, desc: 'Learn how to combat dry skin effectively with these tried-and-tested hydration techniques.', link: '/blog2' },
        { img: blogImage3, desc: 'Find out the best anti-aging practices that will help you maintain youthful skin.', link: '/blog3' },
    ];

    const items = blogs.map((blog, index) => (
        <div className="blog-section-card" key={index}>
            <img src={blog.img} alt={`Blog ${index + 1}`} className="blog-section-card-image" />
            <div className="blog-section-card-content">
                <p>{blog.desc}</p>
                <a href={blog.link} className="blog-section-read-more-button">Read More</a>
            </div>
        </div>
    ));

    const slidePrev = () => {
        carouselRef.current.slidePrev();
    };

    const slideNext = () => {
        carouselRef.current.slideNext();
    };

    return (
        <div className="blog-section-page">
            <h1>BLOG</h1>
            <div className="blog-section-skin-care-tips">
                <h2>Skin Care Tips</h2>
            </div>
            <div className="blog-section-carousel-wrapper">
                <FaChevronLeft className="blog-section-carousel-button blog-section-prev-button" onClick={slidePrev} />
                <AliceCarousel
                    ref={carouselRef}
                    items={items}
                    autoPlay
                    autoPlayInterval={3000}
                    infinite
                    disableButtonsControls
                    disableDotsControls
                    responsive={{
                        0: { items: 1 },
                        576: { items: 2 },
                        768: { items: 3 },
                        1024: { items: 3 },
                    }}
                />
                <FaChevronRight className="blog-section-carousel-button blog-section-next-button" onClick={slideNext} />
            </div>
        </div>
    );
};

export default BlogSection;
