import Searchbar from './Searchbar';
import Menubutton from './Menubutton';
import Sidebar from './Sidebar';
import './styles/navbar.css';
import { useContext } from 'react';

const Navbar = () => {
    //const 

    return(
        <nav className='navbar'>
            <Searchbar />
            <Menubutton />
            <Sidebar />
        </nav>
    )
}

export default Navbar