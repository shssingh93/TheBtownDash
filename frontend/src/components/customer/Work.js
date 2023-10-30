import React from "react";
import PickMeals from "../../images/pick-meals-image.jpg";
import ChooseMeals from "../../images/choose-image.png";
import DeliveryMeals from "../../images/delivery-image.png";

const Work = () => {
  const workInfoData = [
    {
      image: PickMeals,
      title: "Choose Package",
      text: "Pick the package you wish to be delivered",
    },
    {
      image: ChooseMeals,
      title: "Schedule Delivery",
      text: "Decide when you want your package delivered",
    },
    {
      image: DeliveryMeals,
      title: "Fast Deliveries",
      text: "Leave the rest on us!",
    },
  ];
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Work</p>
        <h1 className="primary-heading">How It Works</h1>
        <p className="primary-text">
        B-Town Dash streamlines the delivery process for businesses in the United States. 
        Businesses or individual customers can easily place orders through our platform, which automatically optimizes the delivery route for efficiency. 
        Real-time tracking and automated delivery updates keep the recipients informed about delivery status. 
        Our system records proof of delivery for added security. 
        We also offer integration with other services and excellent customer support.
        </p>
      </div>
      <div className="work-section-bottom">
        {workInfoData.map((data) => (
          <div className="work-section-info" key={data.title}>
            <div className="info-boxes-img-container">
              <img src={data.image} alt="" />
            </div>
            <h2>{data.title}</h2>
            <p>{data.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;