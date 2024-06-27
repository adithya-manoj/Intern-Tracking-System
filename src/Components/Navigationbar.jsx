import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Dropdown from 'react-bootstrap/Dropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './Navigationbar.css'; 
import brandlogo from '../images/blueSlogo.svg';

const Navigationbar = () => {
    const navigate = useNavigate();

    const handleSelect = (eventKey) => {
        if (eventKey === 'Trainer') {
            navigate('/TrainerRegister');
        } else if (eventKey === 'Intern') {
            navigate('/InternRegister');
        }
    };

    return (
        <Navbar expand="lg" bg="dark" variant="dark" className="custom-navbar">
            <Container>
                <Navbar.Brand href="/">
                    <img src={brandlogo} alt="Brand Logo" className="brand-logo"/>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Item>
                            <Link to='/login' className="nav-link">
                                <button className='btn btn-black  text-white rounded-3 px-4 border-white'>Login</button>
                            </Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Dropdown onSelect={handleSelect}>
                                <Dropdown.Toggle variant="black" id="dropdown-custom-components" className="custom-dropdown text-white rounded-3 border-white">
                                    Register
                                </Dropdown.Toggle>
                                <Dropdown.Menu className='dropdown-menu'>
                                    <Dropdown.Item eventKey="Trainer">Trainer</Dropdown.Item>
                                    <Dropdown.Item eventKey="Intern">Intern</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </Nav.Item>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Navigationbar;
