import React, { useState } from 'react'
import { Outlet } from 'react-router-dom';
import InternSidebar from './InternSidebar';
import InternNavigation from './InternNavigation';


const InternNav = () => {

    const [isCollapsed, setIsCollapsed] = useState(true);

    const ToggleSide = () => {
        setIsCollapsed(!isCollapsed)
    }

    return (
        <div>
            <div className='top-navbar w-100 fixed'>
                <InternNavigation Toggle={ToggleSide} />
            </div>


            <div className={`d-flex ${isCollapsed ? 'collapsed' : ''}`}>

                <div className='Sidebar'>
                    <InternSidebar/>
                </div>
                <div className='flex-grow-1'>
                    <Outlet />
                </div>
                
            </div>
        </div>
    )
}

export default InternNav