import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css';

const NavBar = (props) => (
    <nav className="NavBar">
        <NavLink exact to="/" className='NavBar-link' activeClassName="selected">Home</NavLink>{' '}
        <NavLink to="/game" className='NavBar-link' activeClassName="selected">Play Game</NavLink>{' '}
        <NavLink to="/instructions" className='NavBar-link' activeClassName="selected">How to play</NavLink>{' '}
        <NavLink to='/login' className='NavBar-link'>Log in</NavLink>{' '}
        <NavLink to='/signup' className='NavBar-link'>Sign up</NavLink>
    </nav>
)

export default NavBar;