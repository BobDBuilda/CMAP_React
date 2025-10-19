import { useState, useEffect, useRef } from 'react'
import  MapController  from './MapController'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import { map, Map } from 'leaflet'

const interactionOptions = {
    zoomControl: true,
    doubleClickZoom: true,
    closePopupOnClick: false,
    dragging: false,
    trackResize: true,
    touchZoom: true,
    scrollWheelZoom: true
};

const MapComponent = () => {
    //const [coords, setCoords] = useState<[number, number]>([0, 0]);
    const mapRef = useRef<Map | null>(null);
    const [zoom, setZoom] = useState<number>(17.5);

    const handleMapReady = (mapInstance: Map) => {
        mapRef.current = mapInstance;
        console.log("Map instance received in MapComponent:", mapInstance);
        mapRef.current.on('zoomend', () => {
            setZoom(mapRef.current?.getZoom());
            console.log("zoom lvl:", zoom);
            if(zoom === 17){
                mapRef.current?.dragging.enable();
                console.log("Dragging enabled");
            } else {
                mapRef.current?.dragging.disable();
                console.log("Dragging disabled");
            }
        });
    }


    // useEffect(() => {
    //     const watchId = navigator.geolocation.watchPosition(
    //         (position) => {
    //             setCoords([position.coords.latitude, position.coords.longitude]);
    //         },
    //         (error) => console.error(error),
    //         {
    //             enableHighAccuracy: true,
    //             timeout: 10000,
    //             maximumAge: 0
    //         }
    //     );
    //     return () => navigator.geolocation.clearWatch(watchId);
    // }, []);


    return (
        <MapContainer center={[13.134465, -59.628307]} 
        zoom={17.5} 
        style={{ height: '90vh', width: '100%' }} {...interactionOptions}
        >
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />  
            <MapController onMapReady={handleMapReady} />
        </MapContainer>
    );
}
export default MapComponent