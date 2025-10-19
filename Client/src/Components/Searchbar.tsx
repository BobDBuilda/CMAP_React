import { FaSearch } from 'react-icons/fa'
import { useState, useRef } from 'react'
import { search } from '../utils.js';
import { MapContext } from '../Context/MapContext';
import { useContext } from 'react';
//import { map } from 'leaflet';

const Searchbar = () => {
    const [query, setQuery] = useState('');
    const searchRef = useRef<HTMLInputElement>(null);

    const context = useContext(MapContext);
    if (!context) {
        throw new Error('Searchbar must be used within a MapProvider');
    }
    return(
        <div className='searchbar'>
            <input ref={searchRef} type='search' placeholder='where to?' />
            <button onClick={ async (e) => {
                e.preventDefault();
                if(!searchRef.current) throw new Error('searchRef is not assigned yet');
                const value = searchRef.current.value.trim();
                setQuery(value);
                const data = await search(query);
                if (!data) throw new Error('No data found from search');

                const addMarker = context.addMarker;
                
                addMarker(data.id, [data.lat, data.lon], data.display_name);
                context.setCenter([data.lat, data.lon]);
                context.setZoom(13);
                //console.log(data);
            }}><FaSearch /></button>
        </div>
    )
}

export default Searchbar