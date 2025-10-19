import { useState, useEffect, useRef, use } from 'react'
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import L, { map } from 'leaflet';

const interactionOptions = {
    zoomControl: true,
    doubleClickZoom: true,
    closePopupOnClick: false,
    dragging: true,
    zoomSnap: 0,
    zoomDelta: 0,
    trackResize: false,
    touchZoom: false,
    scrollWheelZoom: false
};

const Map = () => {
    const [coords, setCoords] = useState<[number, number]>([0, 0]);

    useEffect(() => {
        const watchId = navigator.geolocation.watchPosition(
            (position) => {
                setCoords([position.coords.latitude, position.coords.longitude]);
            },
            (error) => console.error(error),
            {
                enableHighAccuracy: true,
                timeout: 10000,
                maximumAge: 0
            }
        );
        return () => navigator.geolocation.clearWatch(watchId);
    }, []);

    ////////////////////////////////////////////////////////////////////
    
    if (coords[0] === 0 || coords[1] === 0) {
        return <div>Loading map...</div>;
    }

    return (
        <MapContainer center={[13.134465, -59.628307]} 
        zoom={17.5} 
        style={{ height: '90vh', width: '100%' }}
        >
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            <Marker position={coords}>
                <Popup>You</Popup>
            </Marker>
        </MapContainer>
    );
}
export default Map