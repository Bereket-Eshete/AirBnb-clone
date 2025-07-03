import React from "react";
import "../index.css";
import airbnb from "../assets/airbnb-logo.png";
function Navbar() {
  return (
    <nav className="nav-bar">
      <img src={airbnb} alt="" className="logo" />
    </nav>
  );
}

export default Navbar;
