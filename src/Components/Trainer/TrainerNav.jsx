import React from 'react'
import TrainerSiderbar from './TrainerSiderbar';
import TrainerNavigation from './TrainerNavigation';

const TrainerNav = () => {
    const [isCollapsed, setIsCollapsed] = useState(true);

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