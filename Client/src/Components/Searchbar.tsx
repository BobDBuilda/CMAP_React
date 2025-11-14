import { FaSearch } from 'react-icons/fa';
import { search } from '../utils';
import { useRef } from 'react';
import MapProviderExports from '../Context/MapContext';

const Searchbar = () => {
    const inputRef = useRef<HTMLInputElement>(null);
    const { addMarker } = MapProviderExports.useMapContext();

    const handleSearch = async (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        const query = inputRef.current?.value?.trim();
        console.log("search button clicked");
        try{
            const result: {name:string, lat: number, lng: number} | null = await search(query);
            const data = result['data'];
            console.log(data);
            addMarker(data);
        }catch(error){
            console.error("search error: ", error);
        }
    }

    return(
        <>
            <input ref={inputRef} type='text' placeholder="Ml4, LT3 ..."/>
            <button onClick={handleSearch}><FaSearch/></button>
        </>
    )
}

export default Searchbar;