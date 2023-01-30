import React from 'react'
import { NavLink } from 'react-router-dom'
const NavBar = () => {
  return (
    <nav>
        <NavLink to="/">Easy</NavLink>
        <NavLink to="/hard">Hard</NavLink>

    </nav>
  )
}

export default NavBar
