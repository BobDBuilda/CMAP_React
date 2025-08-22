import { useContext, useState } from 'react';
import { MapContext } from '../Context/Context';

export const MapProvider = ({children}) => {
    const [ markers, setMarkers ] = useState([]);

    navigator.geolocation.watchPosition((position) => {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;
        setMarkers([{lat: lat, lon: lon, title: 'you'}]);
    },
    {
        enableHighAccuracy: True,
        Timeout: 1000,
        maximumAge: 0
    });

    //a marker is described by lat, lon, and a title
    const addMarker = (marker) => {
        setMarkers((marker) => {
            markers.push(marker);
        })
    }

    const removeMarker = () => {
        setMarkers((marker) => {
            markers.pop();
        })
    }

    return(
        <MapContext.Provider>
            {children}
        </MapContext.Provider>
    )
}

export default MapProvider