import { createContext, useContext } from "react";
import L from "leaflet";

export interface Marker {
    id: string;
    position: [number, number];
    title: string;
}   

export interface MapContextType{
    center: [number, number];
    zoom: number;
    setCenter: (coords: [number, number]) => void;
    setZoom: (level: number) => void;

    markers: Array<{ id: string; position: [number, number]; title: string }>;
    addMarker: ( id: string, position: [number, number], title: string ) => void;
    removeMarker: ( id: string ) => void;
}

export const MapContext = createContext<MapContextType | null>(null);

export const useMapContext = () => {
    const context = useContext(MapContext);
    if (!context) {
        throw new Error("useMapContext must be used within a MapProvider");
    }
    return context;
}