import React from "react";
import "./home.css";
import homeImage from "./home.png"; // Add your image here
import Dataimage from "./data2.png"; // Add your image here
// import Social from "./social.png";
import About from "../about/about";
import Offer from "../offer/offer";
import Testimonials from "../testimonials/testimonials";
import Treatment from "../treatment/treatment";

const home = () => {
    return (
        <>
        <br className="abc"></br>
        <br className="abc"></br>
        <br className="abcd"></br>
        <br className="abcd"></br>
        <div className="home-container">
            <div className="home-image">
                <img src={Dataimage} alt="home" />
                
                <div className="search-bar">
                    <input type="text" placeholder="Search..." />
                    <button type="submit">Search</button>
                </div>
            </div>
            <div className="home-image">
                <img src={homeImage} alt="home" />
            </div>
            {/* <div className="socialImage">
                <img src={Social} alt="home" />
            </div> */}
        </div>
        <Treatment></Treatment>
        <Testimonials></Testimonials>
        <Offer></Offer>
        <About></About>
        </>
    );
};

export default home;
