import React from 'react'
import testimonialsImage from "./Group 3.png"; // Import your image file
import "./testimonials.css"; // Import your CSS file

const testimonials = () => {
  return (
    <div className="testimonials-container">
      <div className="testimonials-image">
        <img src={testimonialsImage} alt="Footer" /> {/* Add your image here */}
      </div>
    </div>
  )
}

export default testimonials
