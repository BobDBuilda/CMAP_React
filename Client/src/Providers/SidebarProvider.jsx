import { useContext, useState } from 'react';
import { SidebarContext } from '../Context/Context';

export const SidebarProvider = ({children}) => {
    const [ display, setDisplay ] = useState('none');

    const togglePosition = () => {
        setPosition(() => {
            if(position === 'none') setPosition('block');
        })
    }

    return(
        <SidebarContext.Provider>
            {children}
        </SidebarContext.Provider>
    )
}

export default SidebarProvider