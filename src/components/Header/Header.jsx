import React from 'react'
import { NavLink } from "react-router-dom";
import './Header.css'
const Header = () => {
  return (
    <header>
        <div className='logo'>SPORTS <span>BET</span></div>
        <nav>
          <NavLink  to="/">Sports</NavLink>
          <NavLink>Casino</NavLink>
          <NavLink>Crash</NavLink>
          <NavLink>Mines</NavLink>
          <NavLink>Dice</NavLink>
          <NavLink>Coinflip</NavLink>
        </nav>

        <div className='auth-btn'>
          <button>Login</button>
          <button className='register'>Register</button>
        </div>
    </header>
  )
}

export default Header