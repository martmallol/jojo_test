import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../img/jojo-logo.jpg'
import './Navbar.css';


function Navbar() {
  return (
    <nav className='navbar'>
      <Link to='/' className='navbar-logo'> 
        <img src={logo} class="navbar-logo" height={50}/> 
      </Link>
      <ul className='navbar-menu'>
        <li className='navbar-item'>
          <Link to="/" className='navbar-link'>Home</Link>
        </li>
        <li className='navbar-item'>
          <Link to="/results" className='navbar-link'>Results</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar

