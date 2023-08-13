import React from 'react'
import './TodoSearch.css'
function TodoSearch({ searchValue, setSearchValue }) {
    return (
        <div className='searchField'>
            <input
                placeholder="Search..."
                value={searchValue}
                onChange={(event) => {
                    setSearchValue(event.target.value);
                }}
            />
            <button></button>
        </div>
    )
}

export { TodoSearch }