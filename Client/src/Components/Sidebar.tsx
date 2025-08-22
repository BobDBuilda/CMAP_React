import './styles/sidebar.css';
import { Link } from 'react-router-dom';
import { FaCog, FaUsers, FaChevronLeft } from 'react-icons/fa';
import { MdLocationPin } from 'react-icons/md';
import { SidebarContext } from '../Context/Context';
import { useContext } from 'react';

const Sidebar = () => {
    const {display} = useContext(SidebarContext);

    //how can i render the sidebar based on what i click
    return(
        <div className='sidebar' style={{display: display}}>
            <div className='sidebar-close-btn'> 
                <FaChevronLeft size={26}/>
            </div>
            <div>
                <Link to='' className='sidebar-item'>
                    <div className='sidebar-img-container'><FaCog size={50}/></div>
                    <div>Settings</div>
                </Link>
                <Link to='' className='sidebar-item'>
                    <div className='sidebar-img-container'><MdLocationPin size={50}/></div>
                    <div>Events</div>
                </Link>
                <Link to='' className='sidebar-item'>
                    <div className='sidebar-img-container'><FaUsers size={50}/></div>
                    <div>Clubs</div>
                </Link>
            </div>
        </div>
    )
}

export default Sidebar