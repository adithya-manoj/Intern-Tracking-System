import React, { useState } from 'react';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';


const InternSidebar = () => {

    return (
        <div className='rightNav bg-dark text-light h-100 p-3'>
            <Nav defaultActiveKey="AssignedTasks" className="flex-column">
                <Nav.Item><Link to='AssignedTasks' className='text-decoration-none'>Assigned Tasks</Link></Nav.Item>
                <Nav.Item><Link to='CompletedTasks' className='text-decoration-none'>Completed Tasks</Link></Nav.Item>

            </Nav>
        </div>
    );
}

export default InternSidebar;
