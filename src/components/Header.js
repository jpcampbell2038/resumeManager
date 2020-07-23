import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
    <header>
        <h1>Resume Manager</h1>
        <NavLink to="/" activeClassName="is-active" exact={true}>Dashboard</NavLink>
        <NavLink to="/add" activeClassName="is-active">AddResume</NavLink>        
    </header>
);

export default Header; 