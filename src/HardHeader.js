import React from "react";
import logo from "./images/logo-bonus.svg";
import Score from "./score";
const HardHeader = () => {
  return (
    <div className="header">
      <div className="logo">
        <img src={logo} alt="logo"></img>
        <Score />
      </div>
    </div>
  );
};

export default HardHeader;
