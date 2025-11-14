// import Searchbar from './Searchbar';
// import Menubutton from './Menubutton';
// import Sidebar from './Sidebar';
import './styles/navbar.css';
//import { useMapContext } from '../Context/MapContext';
//import { LatLngBoundsExpression } from 'leaflet';


const Navbar = ({ children }: { children?: React.ReactNode }) => {
    
    return(
        <div className='navbar'>
            {children}
        </div>
    )
}

export default Navbar;