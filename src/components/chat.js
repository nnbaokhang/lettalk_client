import React from 'react';
import {Navbar, NavItem, Nav,NavLink} from 'react-bootstrap';
import {Link} from 'react-router-dom'

function Chat() {

    return (
        <div>
            <Navbar>
                <Nav className="mr-auto" navbar>
                    <NavItem>
                        <Link to="/signup">signup</Link>
                    </NavItem>
                    <NavItem>
                        <Link to="/room">room</Link>
                    </NavItem>
                    <NavItem>
                        <Link to="/online">online</Link>
                    </NavItem>
                </Nav>
            </Navbar>
        </div>

        );
}


export default (Chat)
