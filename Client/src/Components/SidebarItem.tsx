import { Link } from 'react-router-dom';
import { FaCog } from 'react-icons/fa';

export interface SidebarItemProps{
    name: string;
    dest: string;
}

const SidebarItem = (name: string, dest: string) => {
    return(
        <Link to={dest} className='sidebar-item'>
            <div className='display-icon'>
                <FaCog size={24}/>
            </div>
            <div>{name}</div>
        </Link>
    )
}

export default SidebarItem;