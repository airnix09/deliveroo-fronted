import React from "react";
import "./Restaurant.css";

const Restaurant = props => {
  return (
    <div className="Restaurant">
      <div className="container">
        <div className="restaurant-desc">
          <h1>{props.restaurant.name}</h1>
          <p>{props.restaurant.description}</p>
        </div>
        <div className="restaurant-img">
          <img src={props.restaurant.picture} alt={props.restaurant.name} />
        </div>
      </div>
    </div>
  );
};

export default Restaurant;
