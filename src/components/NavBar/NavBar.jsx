import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = props => {
  let nav = props.user ? (
    <div>
      <Link to='/' className='NavBar-link'>
        HOME
      </Link>
      &nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
      <Link to='/search' className='NavBar-link'>
        SEARCH
      </Link>
      &nbsp;&nbsp;|&nbsp;&nbsp;
      <Link to='/submit' className='NavBar-link'>
        SUBMIT
      </Link>
      &nbsp;&nbsp;|&nbsp;&nbsp;
      <Link to='' className='NavBar-link' onClick={props.handleLogout}>
        LOG OUT
      </Link>
    </div>
  ) : (
    <div>
      <Link to='/search' className='NavBar-link'>
        SEARCH
      </Link>
      &nbsp;&nbsp;|&nbsp;&nbsp;
      <Link to='/login' className='NavBar-link'>
        LOG IN
      </Link>
      &nbsp;&nbsp;|&nbsp;&nbsp;
      <Link to='/signup' className='NavBar-link'>
        SIGN UP
      </Link>
    </div>
  );

  return <div className='NavBar navbar navbar-light bg-light'>{nav}</div>;
};

export default NavBar;
