import React from 'react';
import "./Header.css"
import { NavLink } from 'react-router';

const Header = () => {
    return (
        <div>
            <h3>This is header</h3>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/laptops">Laptops</NavLink>
            <NavLink to="/mobiles">Mobiles</NavLink>
            <NavLink to="/users">Users</NavLink>
            <NavLink to="/users2">User2</NavLink>
            
        </div>
    );
};

export default Header;