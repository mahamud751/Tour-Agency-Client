import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Header.css'

const Header = () => {
    const { user, logOut } = useAuth()
    return (
        <>
            <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
                <Container>
                    <Navbar.Brand href="#home">Navbar with text</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">

                        <Nav.Link as={Link} to="/home">Home</Nav.Link>
                        <Nav.Link as={Link} to="/services">My Event</Nav.Link>
                        <Nav.Link as={Link} to="/bookingEvent">Event</Nav.Link>
                        <Nav.Link as={Link} to="/addEvent">Add Event</Nav.Link>
                        {user && <span className=" text-white fs-5 p-2">Hello {user.displayName}</span>}

                        {user ?
                            <button onClick={logOut}>Log Out</button>
                            :
                            <Navbar.Text>
                                Signed in as: <Link to="/login" activeStyle={{
                                    fontWeight: "bold",
                                    color: "red"
                                }}>Log in</Link>
                            </Navbar.Text>}
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;