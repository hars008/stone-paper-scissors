import React from 'react'
import paper from "./../images/icon-paper.svg";

function PaperDiv (props) {
  return (
    
      <div className="paper" onClick={props.onclick}>
        <img src={paper} alt="" />
      </div>
    
  );
}

export default PaperDiv
