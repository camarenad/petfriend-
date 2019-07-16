import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = props => {
  let nav = props.user ? (
    <nav className='navbar navbar-expand-lg justify-content-center'>
     <a style={{margin:'2vh 50%',fontSize:'3rem'}} class="navbar-brand center-text" href="#">Friendslist</a>
      <Link to='/' className='nav-link'>
        HOME
      </Link>
      &nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
      <Link to='/search' className='nav-link'>
        SEARCH
      </Link>
      &nbsp;&nbsp;|&nbsp;&nbsp;
      <Link to='/animals' className='nav-link'>
       ANIMALS
      </Link>
      &nbsp;&nbsp;|&nbsp;&nbsp;
      <Link to='/submit' className='nav-link'>
        SUBMIT
      </Link>
      &nbsp;&nbsp;|&nbsp;&nbsp;
      <Link to='' className='nav-link' onClick={props.handleLogout}>
        LOG OUT
      </Link>
    </nav>
  ) : (
    <div>
    <nav className='navbar navbar-expand-lg justify-content-center'>
    <Link to='/login' className='nav-link'>
        LOG IN
      </Link>
      &nbsp;&nbsp;|&nbsp;&nbsp;
      <Link to='/signup' className='nav-link'>
        SIGN UP
      </Link>
    </nav>
    </div>
  );

  return <>{nav}</>
};

export default NavBar;
