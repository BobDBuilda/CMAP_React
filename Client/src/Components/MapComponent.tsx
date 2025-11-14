import { useState, useEffect } from 'react'
import { MapContainer, Marker, Popup, TileLayer} from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import type { LatLngBoundsExpression } from 'leaflet'
import MapProviderExports  from '../Context/MapContext';

import L from 'leaflet'
//import UserOutOfBounds from './UserOutOfBounds'

const MAP_BOUNDS: LatLngBoundsExpression = [
  [13.129465, -59.638307], // SW corner (lat, lng)
  [13.139465, -59.618307], // NE corner (lat, lng)
]

const interactiveOptions = {
    dragging: true,
    touchZoom: true,
    scrollWheelZoom: true,  
    doubleClickZoom: true,
    boxZoom: true,
    keyboard: true,
    maxZoom: 20,
    minZoom: 16.5,
    zoom: 16.5,
}

const useUserLocation = () => {
    const [location, setLocation] = useState<[number, number] | null>(null);

    useEffect(() => {
        navigator.geolocation.watchPosition((position) => {
            setLocation([position.coords.latitude, position.coords.longitude]);
        },
        (error) => console.error("geolocation error:", error));
    }, []);
    return location;
}
    

const MapComponent = () => {
    const userLocation = useUserLocation();
    const [isInsideBounds, setIsInsideBounds] = useState<boolean | null>(null);
    const { markers } = MapProviderExports.useMapContext();
    //console.log(markers);

    //this tests whether the user is within the bounds of the map
    useEffect(() => {
        if (!userLocation) {
            setIsInsideBounds(null);
            return;
        }
        // create a LatLngBounds from your MAP_BOUNDS and test
        const bounds = L.latLngBounds(MAP_BOUNDS);
        const inside = bounds.contains(L.latLng(userLocation[0], userLocation[1]));
        setIsInsideBounds(inside);
    }, [userLocation]);

    return(
        <>
        {/* Is the user within the bounds, if not render this message*/}
        {/*
        {isInsideBounds === false && (
            <UserOutOfBounds/>
        )}
        */}

        <MapContainer center={[13.134465, -59.628307]} 
        style={{ height: '95vh', width: '100%' }} 
        maxBounds={MAP_BOUNDS}
        maxBoundsViscosity={1}
        {...interactiveOptions}>
            <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution="&copy; OpenStreetMap contributors"
            />
            
            {/*if user location exists show user locATION USING THE MARKER*/}
            {/*userLocation && isInsideBounds !== false && <Marker position={userLocation} /> */}

            {
                markers.map((marker) => {
                    <Marker position={[marker.lat, marker.lng]}>
                        <Popup>{marker.name}</Popup>
                    </Marker>
                })
            }        
            {/* { add the 'UserOutOfBounds' component here } */}
            {/* <Marker position={[13.134500, -59.628000]}>
                <Popup>You</Popup>
            </Marker> */}
        </MapContainer>
    </>
    )

}

export default MapComponent;