//import { FaUser } from "react-icons/fa"
//mport { MdPerson } from "react-icons/md";
//import { HiOutlineUser } from "react-icons/hi";
//import { BsPerson } from "react-icons/bs";
import { SidebarContext } from '../Context/SidebarContext';
import { useContext } from 'react';


const Menubutton = () => {
    const context = useContext(SidebarContext);
    if (!context) {
        throw new Error('Menubutton must be used within a SidebarProvider');
    }

    const { toggleDisplay } = context

    return(
        <button className='menu-btn' onClick={ toggleDisplay }>
            Button
        </button>
    )
}

export default Menubutton;