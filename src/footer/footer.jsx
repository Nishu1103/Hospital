// import React from 'react';
import footerImage from './Footer.png'; // Import your image file
import './footer.css'; // Import your CSS file

const footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-image">
        <img src={footerImage} alt="Footer" /> {/* Add your image here */}
      </div>
    </div>
  );
}

export default footer;
