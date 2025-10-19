import { useMap } from 'react-leaflet';
import { useEffect } from 'react';

const MapController = ( {onMapReady} ) => {
    const map = useMap();

    useEffect(() => {
        if (map) {
            console.log("Map instance in MapController:", map);
            onMapReady(map);
        }
    }, [map, onMapReady]);

    return null;
}

export default MapController;