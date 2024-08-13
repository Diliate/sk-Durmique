// src/faq.js
import React, { useState } from "react";
import "./faq.css";

const AccordionItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="accordion-item">
      <div className="accordion-header" onClick={handleToggle}>
        <h2 className="accordion-question">{question}</h2>
        <span className="accordion-icon">{isOpen ? "-" : "+"}</span>
      </div>
      <div className={`accordion-body ${isOpen ? "open" : ""}`}>
        <p>{answer}</p>
      </div>
    </div>
  );
};

const FAQ = ({ data }) => {
  // Split data into two halves
  const midIndex = Math.ceil(data.length / 2);
  const firstHalf = data.slice(0, midIndex);
  const secondHalf = data.slice(midIndex);

  return (
    <main className="faq-section">
      <header className="faq-header">
        <h1 className="faq-title">Frequently Asked Questions</h1>
      </header>
      <div className="faq-grid">
        <div className="accordion-group">
          {firstHalf.map((item, index) => (
            <AccordionItem
              key={index}
              question={item.question}
              answer={item.answer}
            />
          ))}
        </div>
        <div className="accordion-group">
          {secondHalf.map((item, index) => (
            <AccordionItem
              key={index}
              question={item.question}
              answer={item.answer}
            />
          ))}
        </div>
      </div>
    </main>
  );
};

export default FAQ;
