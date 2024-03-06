import React from 'react'
import offerImage from "./offers.png"; // Import your image file
import "./offer.css"; // Import your CSS file

const offer = () => {
  return (
    <div className="offer-container">
      <div className="offer-image">
        <img src={offerImage} alt="offer" /> {/* Add your image here */}
      </div>
    </div>
  )
}

export default offer
