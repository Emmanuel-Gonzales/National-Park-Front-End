import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
// import LoginButton from "./Login";
import './Nav.css';
// import {useAuth0} from '@auth0/auth0-react';
// import LogoutButton from './Logout';


function Nav() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  console.log(button)
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  // const {isAuthenticated} = useAuth0();

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            NATIONAL PARKS
            <i className='fa fa-tree' />
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/about'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                About
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/myParks'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                My Parks
              </Link>
            </li>

            <li>
              <Link
                to='/login'
                className='nav-links-mobile'
                onClick={closeMobileMenu}
              >
                Login
              </Link>

            </li>
          </ul>
          {/* {button && <LoginButton />} */}
          {/* {isAuthenticated ? <LogoutButton /> : <LoginButton />} */}
        </div>
      </nav>
    </>
  );
}

export default Nav;