import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Dropdown from 'react-bootstrap/Dropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';
import './Navigationbar.css'; 


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
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">ITS</Navbar.Brand>
                <Nav className="ms-auto">
                    <Dropdown onSelect={handleSelect}>
                        <Dropdown.Toggle variant="dark" id="dropdown-custom-components" className="custom-dropdown">
                            Register
                        </Dropdown.Toggle>

                        <Dropdown.Menu className='px-0'>
                            <Dropdown.Item eventKey="Trainer">Trainer</Dropdown.Item>
                            <Dropdown.Item eventKey="Intern">Intern</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </Nav>
            </Container>
        </Navbar>
    );
};

export default Navigationbar;
