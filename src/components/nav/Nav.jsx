import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/logo.png';

import './Nav.css';

const Nav = () => {
  const links = [
    {
      path: 'profile',
      text: 'My Profile',
    },
  ];

  return (
    <nav className="navBar">
      <img src={logo} alt="Cool logo." width={60} height={60} />
      <h1>Space Travelers&apos; Hub</h1>
      <ul className="navUl">
        {links.map((link) => (
          <li key={link.path}>
            <NavLink to={link.path}>
              <span>{link.text.toUpperCase()}</span>
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
