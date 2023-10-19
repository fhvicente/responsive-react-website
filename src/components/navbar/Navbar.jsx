import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import './navbar.css';
import logo from '../../assets/logo.svg';

const Menu = () => (
  <>
  <p><a href='#home'>Home</a></p>
  <p><a href='#wsite'>What is it?</a></p>
  <p><a href='#possibility'>Options</a></p>
  <p><a href='#features'>Case Studies</a></p>
  <p><a href='#blog'>Library</a></p>
  </>
)


// BEM -> Block Element Modifier


const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className='site__navbar'>
      <div className='site__navbar-links'>
        <div className='site__navbar-links_logo'>
          <img src={logo} alt='logo' />
        </div>
        <div className='site__navbar-links_container'>
        <Menu />
        </div>
      </div>
      <div className='site__navbar-sign'>
        <p>Sign in</p>
        <button type='button'>Sign up</button>
      </div>
      <div className='site__navbar-menu'>
        {toggleMenu 
          ? <RiCloseLine color= "#fff" side={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color= "#fff" side={27} onClick={() => setToggleMenu(true)} />
        }
        {toggleMenu && (
          <div className='site__navbar-menu_container scale-up-center'>
            <div className='site__navbar-menu_container-links'>
              <Menu />
              <div className='site__navbar-menu_container-links-sign'>
                <p>Sign in</p>
                <button type='button'>Sign up</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar
