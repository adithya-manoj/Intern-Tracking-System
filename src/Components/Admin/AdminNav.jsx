import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import AdminNavbar from './AdminNavbar'
import RightNavigation from './RightNavigation'
import './AdminNav.css'

const AdminNav = () => {

    const [isCollapsed, setIsCollapsed] = useState(true);

    const ToggleSide = () => {
        setIsCollapsed(!isCollapsed)
    }

    return (
        <div>
            <div className='admin-navbar w-100 fixed'>
                <AdminNavbar Toggle={ToggleSide} />
            </div>


            <div className={`d-flex ${isCollapsed ? 'collapsed' : ''}`}>

                <div className='right-navigation'>
                    <RightNavigation />
                </div>
                <div className='flex-grow-1'>
                    <Outlet />
                </div>
                
            </div>
        </div>
    )
}

export default AdminNav