import React, { useState } from 'react';
import './testimonialCarousel.css'; 

const TestimonialCarousel = ({ testimonials }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  return (
    <div className="testimonial-carousel">
      <button className="prevButton" onClick={prevSlide}>⇽</button>
      <div className="testimonial">
      <img className="testimonialImage" src={testimonials[currentSlide].image} alt="testimonials" />
        <p className="testimonialQuote">{testimonials[currentSlide].quote}</p>
        <p className="testimonialAuthor">- {testimonials[currentSlide].author}</p>
        <p className="testimonialOccupation">{testimonials[currentSlide].occupation}</p>
      </div>
      <button className="nextButton" onClick={nextSlide}>⇾</button>
    </div>
  );
};

export default TestimonialCarousel;
