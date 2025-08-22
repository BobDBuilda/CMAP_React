import { FaSearch } from 'react-icons/fa'
import { useState, useRef } from 'react'
import { search } from '../utils.js';

const Searchbar = () => {
    const [query, setQuery] = useState('');
    const searchRef = useRef(null);

    return(
        <div className='searchbar'>
            <input ref={searchRef} type='search' placeholder='where to?' />
            <button onClick={ async (e) => {
                e.preventDefault();
                setQuery(searchRef.current.value.trim());
                const data = await search(query);
            }}><FaSearch /></button>
        </div>
    )
}

export default Searchbar