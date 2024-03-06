 
import aboutImage from "./Section.png";
import "./about.css";
const about = () => {
  return (
    <div className="about-container">
      <div className="about-image">
        <img src={aboutImage} alt="about" /> {/* Add your image here */}
      </div>
    </div>
  )
}

export default about
