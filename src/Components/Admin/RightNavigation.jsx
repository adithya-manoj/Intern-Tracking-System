import React, { useState } from 'react';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';
import './RightNavigation.css'

const RightNavigation = () => {

    return (
        <div className='rightNav bg-dark text-light h-100 p-3'>
            <Nav defaultActiveKey="/Trainers" className="flex-column">
                <Nav.Item><Link to='AdminTrainer' className='text-decoration-none'>Trainers</Link></Nav.Item>
                <Nav.Item><Link to='AdminInterns' className='text-decoration-none'>Interns</Link></Nav.Item>
                <Nav.Item><Link to='AdminCourse' className='text-decoration-none'>Course</Link></Nav.Item>
            
            </Nav>
        </div>
    );
}

export default RightNavigation;
