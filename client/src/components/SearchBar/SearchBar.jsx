import React from 'react'
import { HiLocationMarker } from 'react-icons/hi'

const SearchBar = () => {
    return (
        <div className="search-bar">
            <HiLocationMarker size={25} color="var(--blue)" />
            <input type="text" />
            <button className="button">Search</button>
        </div>
    )
}

export default SearchBar