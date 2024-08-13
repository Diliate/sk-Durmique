import React, { useState, memo, useCallback } from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import './faq.css';
import { faqList } from './faqData';

// Memoized component to prevent unnecessary re-renders
const FaqItem = memo(({ faq }) => {
	const [isOpen, setIsOpen] = useState(faq.isActive || false);

	// useCallback to prevent re-creating the toggle function on each render
	const toggleFaq = useCallback(() => {
		setIsOpen(prevIsOpen => !prevIsOpen);
	}, []);

	return (
		<article className={`faq-item ${isOpen ? 'active' : ''}`}>
			<button 
				className="faq-toggle" 
				onClick={toggleFaq} 
				aria-expanded={isOpen}
				aria-controls={`faq-answer-${faq.question.replace(/\s+/g, '-').toLowerCase()}`}
			>
				<span>{faq.question}</span>
				<div className="faq-icon">
					<FontAwesomeIcon icon={isOpen ? faChevronUp : faChevronDown} />
				</div>
			</button>
			<div 
				id={`faq-answer-${faq.question.replace(/\s+/g, '-').toLowerCase()}`} 
				className={`faq-answer ${isOpen ? 'block' : 'hidden'}`}
			>
				<div className="faq-answer-content">
					<p>{faq.answer}</p>
				</div>
			</div>
		</article>
	);
});

FaqItem.propTypes = {
	faq: PropTypes.shape({
		isActive: PropTypes.bool.isRequired,
		question: PropTypes.string.isRequired,
		answer: PropTypes.string.isRequired,
	}).isRequired,
};

// Memoized component to prevent unnecessary re-renders
const FaqsGroup = memo(({ title, faqs }) => (
	<section>
		<h2 className="faq-group-title">{title}</h2>
		{faqs.map((faq, i) => (
			<FaqItem faq={faq} key={i} />
		))}
	</section>
));

FaqsGroup.propTypes = {
	title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
	faqs: PropTypes.arrayOf(PropTypes.shape({
		isActive: PropTypes.bool.isRequired,
		question: PropTypes.string.isRequired,
		answer: PropTypes.string.isRequired,
	})).isRequired,
};

const Faq = () => {
	return (
		<main className="faq-section">
			<div className="faq-container">
				<header className="faq-header">
					<h1 className="faq-title">
						Frequently Asked Questions
					</h1>
				</header>
				<div className="faq-content">
					<div className="faq-column">
						<FaqsGroup faqs={faqList.slice(0, 2)} title="Free Trial" />
						<FaqsGroup faqs={faqList.slice(2, 5)} title="Pricing & Payment" />
					</div>
					<div className="faq-column">
						<FaqsGroup faqs={faqList.slice(5, 9)} title="General" />
					</div>
				</div>
			</div>
		</main>
	);
};

export default memo(Faq);
