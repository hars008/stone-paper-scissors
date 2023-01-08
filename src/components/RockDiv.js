import React from 'react'
import rock from "./../images/icon-rock.svg";
const RockDiv = (props) => {
  return (
    <div className="rock" onClick={props.onclick}>
      <img src={rock} alt="" />
    </div>
  );
}

export default RockDiv
