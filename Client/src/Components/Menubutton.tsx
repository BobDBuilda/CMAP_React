import { FaUser } from "react-icons/fa"
import { MdPerson } from "react-icons/md";
import { HiOutlineUser } from "react-icons/hi";
import { BsPerson } from "react-icons/bs";
import { SidebarContext } from '../Context/Context';
import { useContext } from 'react';


const Menubutton = () => {
    const { toggleDisplay } = useContext(SidebarContext);

    return(
        <button className='menu-btn' onClick={ toggleDisplay }>
            <BsPerson size={24} />
        </button>
    )
}

export default Menubutton