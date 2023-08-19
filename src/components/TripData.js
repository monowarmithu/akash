import React from "react";
import "./TripStyles.css";

function TripData(props) {
  return (
    <div className="t-card">
      <div className="t-image">
        <img src={props.image} alt="" />
      </div>
      <h4>{props.heading}</h4>
      <p>{props.text}</p>
      {/* Add the price tag here */}
      <div className="price-tag">Price: ৳{props.price}</div>
      {/* Add a button with CSS class */}
      <button className="book-btn">Book Now</button>
    </div>
  );
}

export default TripData;
