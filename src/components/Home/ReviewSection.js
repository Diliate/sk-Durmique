import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import './ReviewSection.css';
import userImage1 from '../../assets/images/User1.png'; // Update the path as necessary
import userImage2 from '../../assets/images/User2.png';
import userImage3 from '../../assets/images/User3.png';

const ReviewSection = () => {
    const navigate = useNavigate();
    const [hoveredIndex, setHoveredIndex] = useState(null);

    const reviews = [
        {
            title: "Effective Acne Treatment",
            desc: "I went to the clinic for an acne treatment. The results are noticeable.",
            img: userImage1,
            name: "Samantha Lee",
            date: "July 10, 2024",
        },
        {
            title: "Healthy Hair Growth",
            desc: "After trying various hair treatments, I finally found success at this clinic. My hair feels stronger and healthier. The treatment was worth it.",
            img: userImage2,
            name: "Michael Brown",
            date: "August 5, 2024",
        },
        {
            title: "Great Facial Service",
            desc: "I had a facial at the clinic and it was a great experience. My skin feels clean and refreshed. The staff were professional and attentive.",
            img: userImage3,
            name: "Olivia Davis",
            date: "September 12, 2024",
        }
    ];

    const handleCardHover = (index) => {
        setHoveredIndex(index);
    };

    const items = reviews.map((review, index) => (
        <div
            className={`review-card ${hoveredIndex === index ? 'hovered' : ''}`}
            key={index}
            onMouseEnter={() => handleCardHover(index)}
            onMouseLeave={() => handleCardHover(null)}
        >
            <div className="review-card-header">
                <img src={review.img} alt={`User ${index + 1}`} className="review-user-image" />
                <div className="review-user-info">
                    <p className="review-user-name">{review.name}</p>
                </div>
            </div>
            <div className="review-card-body">
                <h4 className="review-title">{review.title}</h4>
                <p className="review-desc">{review.desc}</p>
            </div>
            <div className="review-card-footer">
                <p className="review-date">{review.date}</p>
            </div>
        </div>
    ));

    const handleReviewClick = () => {
        alert("Leave a review in the contact form");
        navigate("/contact");
    };

    return (
        <section className="review-section">
            <div className="review-header">
                <div className="review-intro">
                    <h1>WHAT OUR CLIENTS SAY</h1>
                    <p>"Top-notch service and genuine concern for patient well-being. Highly recommend"</p>
                    <button className="review-button" onClick={handleReviewClick}>Leave a Review</button>
                </div>
            </div>
            <AliceCarousel
                items={items}
                autoPlay
                autoPlayInterval={3000}
                infinite
                disableDotsControls
                renderPrevButton={() => (
                    <button className="carousel-button prev-button">‹</button>
                )}
                renderNextButton={() => (
                    <button className="carousel-button next-button">›</button>
                )}
                responsive={{
                    0: { items: 1 },
                    576: { items: 2 },
                    768: { items: 3 },
                }}
            />
        </section>
    );
};

export default ReviewSection;
