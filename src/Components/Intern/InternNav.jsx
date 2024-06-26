import React, { useEffect, useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom';
import InternSidebar from './InternSidebar';
import InternNavigation from './InternNavigation';
import axios from 'axios';


const InternNav = () => {

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