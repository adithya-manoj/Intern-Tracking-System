import React, { useEffect, useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import AdminNavbar from './AdminNavbar'
import RightNavigation from './RightNavigation'
import './AdminNav.css'
import axios from 'axios';


const AdminNav = () => {

    const [isCollapsed, setIsCollapsed] = useState(true);

    const ToggleSide = () => {
        setIsCollapsed(!isCollapsed)
    }

    let navigate = useNavigate();

    useEffect(()=>{
        
        const token = localStorage.getItem('token');
        if(!token){
            navigate('/login')
        }
        let fetchData=async()=>{
        try{
            await axios.get('http://localhost:4000/authentication/authorize',{headers:{Authorization:token}})
        }
        catch(error){
            navigate('/login')
        }
        
    }
    fetchData();
    })

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