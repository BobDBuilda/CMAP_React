//import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './App.css'
import Map from './Components/Map'
import Navbar from './Components/Navbar'
import Sidebar from './Components/Sidebar';
import { MapProvider } from './Providers/MapProvider';
import { SidebarProvider } from './Providers/SidebarProvider';


const App = () => {
  return (
    <>
      <MapProvider>
        <SidebarProvider>
          <Navbar />
          <Map />
          <Sidebar />
        </SidebarProvider>
      </MapProvider>
    </>
  )
}

export default App
