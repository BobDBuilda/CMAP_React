//importm { useState }p from 'react'o
//import reactLogo from './assets/react.svg'r
//import viteLogo from '/vite.svg't
import './App.css'
import MapComponent from './Components/MapComponent';
import Navbar from './Components/Navbar'
import Searchbar from './Components/Searchbar';
import Menubutton from './Components/Menubutton';
import MapProviderExports from './Context/MapContext';
// import Sidebar from './Components/Sidebar';
//import { MapProvider } from './Context/MapContext';
//import { SidebarProvider } from './Providers/SidebarProvider';

const { MapProvider } = MapProviderExports;

const App = () => {
  return (
    <> 
      <MapProvider >
        <Navbar>
          <Searchbar />
          <Menubutton />
        </Navbar>
        <MapComponent/> 
      </MapProvider>
    </>
  )
}

export default App
