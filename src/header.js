import React from 'react'
import logo from './logo.svg';
import Score from './score';
import Body from './body';
const { useContext} = React;
const header = () => {
  
  return (
    <div className='header'>
      <div className="logo">
        <img src={logo} alt="logo" ></img>
        <Score score/>
      </div>
    </div>
  )
}

export default header
