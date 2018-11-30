import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css';

const NavBar = (props) => {
    let nav = props.user ?
        <nav className='NavBar'>
            <NavLink exact to="/" className='NavBar-link' activeClassName="selected">L U D O</NavLink>{' '}
            <NavLink to='/login' className='NavBar-link' onClick={props.handleLogout}>Logout</NavLink>{' '}
            <p className='NavBar-welcome'>WELCOME, {props.user.name}</p>
        </nav> :
        <nav className='NavBar'>
            <NavLink exact to="/" className='NavBar-link' activeClassName="selected">L U D O</NavLink>{' '}
            <NavLink to='/login' className='NavBar-link'>Log in</NavLink>{' '}
            <NavLink to='/signup' className='NavBar-link'>Sign up</NavLink>
        </nav>;
    return (
        <div>
            {nav}
        </div>
    );
};

export default NavBar;