import React from 'react'
import scissors from "./../images/icon-scissors.svg";

const ScissorsDiv = (props) => {
  return (
    
      <div className="scissors" onClick={props.onclick}>
        <img src={scissors} alt="" />
      </div>
  );
}

export default ScissorsDiv
