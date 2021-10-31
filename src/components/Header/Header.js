import React from 'react';

import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Header.css'

const Header = () => {
    const { user, logOut } = useAuth()
    console.log(user)
    return (

        <>
            <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
                <Container>
                    <Navbar.Brand >
                        <img className="img-fluid" src="https://i.ibb.co/qxXrQpY/SR-Online-2-removebg-preview.png" alt="" style={{ width: "60px" }} />
                    </Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">

                        <Nav.Link as={Link} to="/home">Home</Nav.Link>
                        <Nav.Link as={Link} to="/myEvent">My Event</Nav.Link>
                        <Nav.Link as={Link} to="/bookingEvent">Event</Nav.Link>
                        <Nav.Link as={Link} to="/addEvent">Event Add</Nav.Link>
                        <Nav.Link as={Link} to="/manageAdmin">Manage Admin</Nav.Link>
                        {user.displayName && <span className=" text-white fs-5 p-2">Hello {user.displayName}</span>}

                        {user.displayName ?
                            <Navbar.Text onClick={logOut}
                                style={{
                                    cursor: "pointer",
                                    color: 'red'
                                }}
                            >Log Out</Navbar.Text>
                            :
                            <Nav.Link as={Link} to="/login">Login </Nav.Link>}
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;