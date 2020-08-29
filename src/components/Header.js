import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';

const Header = () => (
  <nav className="navbar navbar-light bg-custom">
    <Link className="navbar-brand" to="/">
      Michael Spikes
    </Link>
    <ul className="navbar-nav flex-row justify-content-end">
      <li className="nav-item mr-3">
        <Link className="nav-link" to="/">
          About
        </Link>
      </li>
      <li className="nav-item mr-3">
        <Link className="nav-link" to="/portfolio">
          Portfolio
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/contact">
          Contact
        </Link>
      </li>
    </ul>
  </nav>
);

export default Header;
