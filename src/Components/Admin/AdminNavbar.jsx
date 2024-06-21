import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';

const AdminNavbar = ({Toggle}) => {
    return (
        <Navbar bg="dark" variant="dark" className="w-100">
            <Container>
            <button className='hamburger-menu' onClick={Toggle}>
                ☰
            </button>
                
                <Navbar.Brand>ITS</Navbar.Brand>
                <Nav className="ms-auto">

                    <Nav.Link >Welcome Admin</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
};

export default AdminNavbar;
