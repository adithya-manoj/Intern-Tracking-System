import React, { useEffect, useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import TrainerSiderbar from './TrainerSiderbar';
import TrainerNavigation from './TrainerNavigation';
import axios from 'axios';

const TrainerNav = () => {
    const [isCollapsed, setIsCollapsed] = useState(true);
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


    const ToggleSide = () => {
        setIsCollapsed(!isCollapsed)
    }

    return (
        <div>
            <div className='top-navbar w-100 fixed'>
                <TrainerNavigation Toggle={ToggleSide} />
            </div>


            <div className={`d-flex ${isCollapsed ? 'collapsed' : ''}`}>

                <div className='Sidebar'>
                    <TrainerSiderbar/>
                </div>
                <div className='flex-grow-1'>
                    <Outlet />
                </div>
                
            </div>
        </div>
    )
}

export default TrainerNav