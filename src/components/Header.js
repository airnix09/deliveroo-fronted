import React from "react";
import logo from "../assets/img/deliveroo-logo.jpg";
import "./Header.css";

const Header = () => {
  return (
    <div className="Header">
      <div className="container">
        <img src={logo} alt="Logo Deliveroo" />
      </div>
    </div>
  );
};

export default Header;
