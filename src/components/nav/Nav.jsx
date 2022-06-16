import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import logo from '../../assets/logo.png';
import './Nav.css';

const Nav = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const toggleMenu = () => {
    setOpenMenu((openMenu) => !openMenu);
  };

  const links = [
    {
      path: 'rockets',
      text: 'Rockets',
    },
    {
      path: 'dragons',
      text: 'Dragons',
    },
    {
      path: 'missions',
      text: 'Missions',
    },
    {
      path: 'profile',
      text: 'My Profile',
    },
  ];

  return (
    <nav className="navBar">
      <div className="logo-container">
        <img src={logo} alt="Cool logo." className="logo-img" width={60} height={60} />
        <h1>Space Travelers&apos; Hub</h1>
      </div>

      {openMenu ? (<AiOutlineClose onClick={() => toggleMenu()} className="menu-icon" />) : (<AiOutlineMenu onClick={() => toggleMenu()} className="menu-icon" />)}

      <ul className="navUl">
        {links.map((link) => (
          <li key={link.path}>
            <NavLink to={link.path} className="nav-link">
              <span>{link.text.toUpperCase()}</span>
            </NavLink>
          </li>
        ))}
      </ul>

      <ul className="mobile-navUl" style={{ transform: openMenu ? 'translateX(0)' : 'translateX(120%)' }}>
        {links.map((link) => (
          <li key={link.path}>
            <NavLink to={link.path} className="nav-link mobile" onClick={() => toggleMenu()}>
              <span>{link.text.toUpperCase()}</span>
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
