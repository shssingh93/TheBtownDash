import React from "react";
import BannerBackground from "../../images/home-banner-background.png";
import BannerImage from "../../images/homebannerimage.jpg";
import CustomerNavbar from "./Navbar";
import { FiArrowRight } from "react-icons/fi";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home-container">
      <CustomerNavbar />
      <div className="home-banner-container">
        <div className="home-bannerImage-container">
          <img src={BannerBackground} alt="" />
        </div>
        <div className="home-text-section">
          <h1 className="primary-heading">
            Your Package Delivered At Your Doorstep
          </h1>
          <p className="primary-text">
            YOU SELECT, WE COLLECT!
          </p>
          <Link to="/customer/place-order" style={{ textDecoration: 'none' }}>
          <button className="secondary-button">
            Place Order <FiArrowRight />{" "}
          </button>
          </Link>
          <div className="about-buttons-container">
          <Link to="/order-search" style={{ textDecoration: "none" }}>
            <button className="secondary-button">Track Order <FiArrowRight />{" "}</button>
          </Link>
          
        </div>
        </div>
        <div className="home-image-section">
          <img src={BannerImage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;