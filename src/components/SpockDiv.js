import React from 'react'
import spock from '../images/icon-spock.svg'
const SpockDiv = (props) => {
  return (
    <div className="spock" onClick={props.onclick}>
      <img src={spock} alt="" />
    </div>
  );
}

export default SpockDiv
