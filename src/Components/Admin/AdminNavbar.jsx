import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Dropdown from 'react-bootstrap/Dropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import dp from '../../images/trainer_dp.jpg';

const AdminNavbar = ({ Toggle }) => {
    return (
        <Navbar bg="dark" variant="dark" className="w-100">
            <Container>
                <button className='hamburger-menu' onClick={Toggle}>
                    ☰
                </button>

                <Navbar.Brand>ITS</Navbar.Brand>
                <Nav className="ms-auto">

                    <Nav.Link >Welcome Admin</Nav.Link>
                    <Dropdown align="end">

                        <Dropdown.Toggle as="a" className="nav-link p-0" style={{ cursor: 'pointer' }}>
                            <img src={dp} alt="Profile" style={{ width: '30px' }} className='rounded-pill' />
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item href="/profile">Profile</Dropdown.Item>
                            <Dropdown.Item href="/login"><div onClick={() => {localStorage.removeItem('token');localStorage.removeItem('id');
                            }}>Logout</div></Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </Nav>
            </Container>
        </Navbar>
    );
};

export default AdminNavbar;
