import React from 'react';
import treatmentImage from "./Group 7.png"; // Import your image file
import "./treatment.css"; // Import your CSS file
const treatment = () => {
  return (
    <div className="treatment-container">
      <div className="treatment-image">
        <img src={treatmentImage} alt="treatment" /> {/* Add your image here */}
      </div>
    </div>
  )
}

export default treatment
