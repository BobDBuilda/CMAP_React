import {createContext} from 'react';

interface SidebarContextType {
    isSidebarOpen: boolean;
    toggleDisplay: () => void;
}

export const SidebarContext = createContext<SidebarContextType | null>(null);



