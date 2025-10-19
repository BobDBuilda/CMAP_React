import { useState, useRef, useEffect } from 'react';
import { MapContext } from '../Context/MapContext';
import type { Marker } from '../Context/MapContext';

export const MapProvider = ({children}: React.PropsWithChildren) => {
    const [markers, setMarkers] = useState<Marker[]>([]);
    const [zoom, setZoom] = useState(13);
    const [center, setCenter] = useState<[number, number]>([51.505, -0.09]);
    const mapRef = useRef<L.Map | null>(null);
    const [dragging, setDragging] = useState<boolean>(false);

    const addMarker = (id: string, position: [number, number], title: string) => {
        setMarkers(prev => [...prev, {id, position, title}]);
    }

    const removeMarker = (id: string) => {
        setMarkers(prev => prev.filter(marker => marker.id !== id));
    }

    useEffect(() => {
        const map = mapRef.current;
        if (!map) return;

        const handleZoom = () => {
            const currentZoom = map.getZoom();
            setZoom(currentZoom);
            setDragging(currentZoom > 17.5);
        }

        map.on('zoomend', handleZoom);
        return () => map.off('zoomend', handleZoom);
    })

    return(
        <MapContext.Provider value={{ mapRef, center, zoom, markers, setCenter, setZoom, addMarker, removeMarker, setMap}}>
            {children}
        </MapContext.Provider>
    )
    
}

export default MapProvider