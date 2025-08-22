import { Link } from 'react-router-dom';
import { FaCog } from 'react-icons/fa';

const SidebarItem = ({name}) => {
    return(
        <Link to='' className='sidebar-item'>
            <div className='display-icon'>
                <FaCog size={24}/>
            </div>
            <div>{name}</div>
        </Link>
    )
}