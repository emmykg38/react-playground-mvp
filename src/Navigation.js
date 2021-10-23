import React from 'react';
import { Navbar } from 'react-bootstrap';
import { NavMenu } from 'react-bootstrap';
import { NavLink } from 'react-bootstrap';


const Navigation = (props) => {
    return (
        <Navbar sticky="top" variant="dark" bg="dark">
            <NavLink to="/home">
                Home
            </NavLink>
            <NavLink to="/about">
                About
            </NavLink>
            <NavLink to="/playgrounds">
                Playgrounds
            </NavLink>
            <NavLink to="/search">
                Search
            </NavLink>
        </Navbar>
    );
}

export default Navigation;