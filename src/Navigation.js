import React from 'react';
import { Navbar } from 'react-bootstrap';
import { NavMenu } from 'react-bootstrap';
import { NavLink } from 'react-bootstrap';


const Navigation = (props) => {
    return (
        <Navbar>
                <NavLink to="/about">
                    About
                </NavLink>
                <NavLink to="/playgrounds">
                    Playgrounds
                </NavLink>
        </Navbar>
    );
}

export default Navigation;