import React from 'react'
import './TodoSearch.css'
function TodoSearch({ searchValue, setSearchValue, loading}) {
    return (
        <div className='searchField'>
            <input
                placeholder="Search..."
                value={searchValue}
                onChange={(event) => {
                    setSearchValue(event.target.value);
                }}
                disabled={loading}
            />
            <button></button>
        </div>
    )
}

export { TodoSearch }