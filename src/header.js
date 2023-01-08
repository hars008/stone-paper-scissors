import React from 'react'
import logo from './logo.svg';
import Score from './score';
const header = () => {
  return (
    <div className='header'>
      <div className="logo">
        <img src={logo} alt="logo" ></img>
        <Score />
      </div>
    </div>
  )
}

export default header
