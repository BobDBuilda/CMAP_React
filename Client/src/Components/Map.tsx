import { useState, useContext, useEffect } from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { Marker as ReactLeafletMarker } from 'react-leaflet';
import { Marker as LeafletMarker } from 'leaflet'
import 'leaflet/dist/leaflet.css'


const Map = () => {
    //markers are composed of coordinate values
    //based on how many are in the array render
    //through a loop into the map
    
    //const [coords, setCoords] = useState<number[]>([0, 0]);
    //const [markers, setMarkers] = useState<typeof ReactLeafletMarker[]>([]);
    /*
    useEffect(() => {
        navigator.geolocation.watchPosition(
            async (position) => {
                await setCoords([position.coords.latitude, position.coords.longitude]);
            },
        ),
        {
            enableHighAccuracy: true,
            timeout: 10000,
            maximumAge: 0
        }
    }, [coords]);

    console.log(coords);
    
    if(coords[0] != 0 && coords[1] != 0){
        return(

            <MapContainer center={coords} zoom={13} style={{ height: '90vh', width: '100vw' }}>
                <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a>'/>
                <Marker position={coords}>
                    <Popup>You</Popup>
                </Marker>
            </MapContainer>
        )
    }
    return(
        <></>
    )*/
    

    
}

export default Map