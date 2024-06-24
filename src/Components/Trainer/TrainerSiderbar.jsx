import React from 'react';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';

const TrainerSiderbar = () => {
    return (
        <div className='rightNav bg-dark text-light h-100 p-3'>
            <Nav defaultActiveKey="TrainerInterns" className="flex-column">
                <Nav.Item><Link to='TrainerInterns' className='text-decoration-none'>Interns</Link></Nav.Item>
                <Nav.Item><Link to='TrainerTasks' className='text-decoration-none'>Tasks</Link></Nav.Item>

            </Nav>
        </div>
    );
}

export default TrainerSiderbar