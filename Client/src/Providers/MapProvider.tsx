import { useState, useRef, useEffect } from 'react';
import { MapContext } from '../Context/MapContext';
import type { Marker } from '../Context/MapContext';

export const MapProvider = ({children}: React.PropsWithChildren) => {
    const [markers, setMarkers] = useState<Marker[]>([]);
    const [zoom, setZoom] = useState(13);
    const [center, setCenter] = useState<[number, number]>([51.505, -0.09]);

    const addMarker = (id: string, position: [number, number], title: string) => {
        setMarkers(prev => [...prev, {id, position, title}]);
    }

    const removeMarker = (id: string) => {
        setMarkers(prev => prev.filter(marker => marker.id !== id));
    }

    return(
        <MapContext.Provider value={{ center, zoom, markers, setCenter, setZoom, addMarker, removeMarker}}>
            {children}
        </MapContext.Provider>
    )
}

export default MapProvider