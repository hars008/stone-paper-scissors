import React from "react";
import rules from "./images/image-rules-bonus.svg";
import close from "./images/icon-close.svg";
const { useState } = React;

const HardFooter = () => {
  const [ShowRules, SetShowRules] = useState("close");

  if (ShowRules === "showing") {
    return (
      <>
        <div className="rulesPage">
          <div className="rulesimg">
            <button className="close " onClick={() => SetShowRules("close")}>
              <img src={close} alt="mmm" />
            </button>
            <h1> RULES:</h1>
            <hr></hr>
            <br />
            <img className="rulesm" src={rules} alt="hbhb" />
          </div>
        </div>
      </>
    );
  }
  return (
    <>
      <div className="footer">
        <button
          className="rules"
          onClick={() => {
            SetShowRules("showing");
          }}
        >
          RULES
        </button>
      </div>
    </>
  );
};

export default HardFooter;
