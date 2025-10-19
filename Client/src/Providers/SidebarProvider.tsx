import { useState } from 'react';
import { SidebarContext } from '../Context/SidebarContext';

export const SidebarProvider = ( {children} : React.PropsWithChildren) => {
    const [ isSidebarOpen, setIsSidebarOpen ] = useState(false);

    const toggleDisplay = () => {
        setIsSidebarOpen(prev => !prev);
    };

    return(
        <SidebarContext.Provider value={{ isSidebarOpen, toggleDisplay }}>
            {children}
        </SidebarContext.Provider>
    )
}

export default SidebarProvider