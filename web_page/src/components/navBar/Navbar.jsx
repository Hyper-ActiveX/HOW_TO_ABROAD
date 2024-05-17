import React, { useState } from 'react';
import { Link  } from 'react-router-dom';
import './Navbar.css';
import Dropdown from './Dropdown.jsx';
import logo from '../../images/logo.jpg'


function Navbar() {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  // const history = useHistory();

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };

  // const handleLoginClick = () => {
  //   history.push('/log-in');
  //   // Show the modal
  //   const loginModal = document.getElementById('loginModal');
  //   if (loginModal) {
  //     loginModal.style.display = 'block';
  //   }
  // };

  // const handleModalClose = () => {
  //   history.goBack();
  //   // Hide the modal
  //   const loginModal = document.getElementById('loginModal');
  //   if (loginModal) {
  //     loginModal.style.display = 'none';
  //   }
  // };

  return (
    <>
      <nav className='navbar'>
        <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
          <img className='navlogo' src={logo} alt=''></img>
        </Link>
        <div className='menu-icon' onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
        <li className='nav-item'>
            <Link to='/' 
            className='nav-links' onClick={closeMobileMenu}>
              Home
            </Link>
          </li>
          
          <li className='nav-item'>
            <Link
              to='/search-course'
              className='nav-links'
              // target="_blank"
              onClick={closeMobileMenu}
            >
              Search Course
            </Link>
          </li>
          
          
          <li className='nav-item'>
            <Link
              to='/log-in'
              className='nav-links'
              // target="_blank"
              onClick={closeMobileMenu}
              data-toggle="modal" data-target="#loginModal"
              // onClick={handleLoginClick}
            >
              Login
            </Link>
            
          </li>
          <li
            className='nav-item'
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <Link
              to='/'
              className='nav-links'
              target="_blank"
              onClick={closeMobileMenu}
            >
              Portal <i className='fas fa-caret-down' />
            </Link>
            {dropdown && <Dropdown />}
          </li>
          
          
          
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
