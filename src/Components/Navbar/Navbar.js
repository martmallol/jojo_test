import { Link } from 'react-router-dom';
import logo from '../../img/jojo-logo.jpg';
import './Navbar.css';
import React from 'react';

const Navbar = () => {
  return (
    <nav className='navbar'>
      <Link to='/' className='navbar-logo'>
        <img src={logo} className="navbar-logo" height={40}/>
      </Link>
      <ul className='navbar-menu'>
        <li className='navbar-item'>
          <Link to="/" className='navbar-link'>
            Home
          </Link>
        </li>
        <li className='navbar-item'>
          <Link to="/quiz" className='navbar-link'>
            Quiz
          </Link>
        </li>
        <li className='navbar-item'>
          <Link to="/results" className='navbar-link'>
            Results
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
