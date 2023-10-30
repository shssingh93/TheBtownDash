import React from "react";
import AboutBackground from "../../images/about-background.png";
import AboutBackgroundImage from "../../images/aboutbackgroundimage.jpg";
import { BsFillPlayCircleFill } from "react-icons/bs";

const About = () => {
  return (
    <div className="about-section-container">
      <div className="about-background-image-container">
        <img src={AboutBackground} alt="" />
      </div>
      <div className="about-section-image-container">
        <img src={AboutBackgroundImage} alt="" />
      </div>
      <div className="about-section-text-container">
        <p className="primary-subheading">About</p>
        <h1 className="primary-heading">
          B-TOWN DASH
        </h1>
        <p className="primary-text">
        Welcome to our delivery management service! 
        We help businesses improve delivery process, increase efficiency, and reduce costs. 
        Our service operates in United States. We provide excellent customer support through phone, email, and online chat. 
        </p>
        
      </div>
    </div>
  );
};

export default About;