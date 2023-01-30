import React from 'react'
import liz from "./../images/icon-lizard.svg";

const LizDiv = (props) => {
  return (
    <div className="liz" onClick={props.onclick}>
      <img src={liz} alt="" />
    </div>
  );
}

export default LizDiv
