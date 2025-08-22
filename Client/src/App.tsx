import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Map from './Components/Map'
import Navbar from './Components/Navbar'
import { MapProvider } from './Providers/MapProvider';
import { SidebarProvider } from './Providers/SidebarProvider';


const App = () => {
  return (
    <>
      <SidebarProvider>
        <Navbar />
      </SidebarProvider>
      <MapProvider>
        <Map />
      </MapProvider>
    </>
  )
}

export default App
