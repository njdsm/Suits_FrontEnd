import React from 'react';
import { NavLink } from 'react-router-dom'
import './NavLinks.css';

const NavLinks = props => {
    return <ul className="nav-links">
        <li>
            <NavLink to="/" exact>Home</NavLink>
        </li>
        <li>
            <NavLink to="/boxes/">Temp</NavLink>
        </li>
        <li>
            <NavLink to="/user/profile">Profile</NavLink>
        </li>
        <li>
            <NavLink to="/auth">Login</NavLink>
        </li>
    </ul>
};

export default NavLinks;