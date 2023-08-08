import React from 'react'
import './TodoSearch.css'
import { TodoContext } from '../TodoContext/TodoContext';
function TodoSearch() {
    const {searchValue, setSearchValue} = React.useContext(TodoContext);
    return (
        <div className='searchField'>
            <input
                placeholder="Search..."
                value = {searchValue}
                onChange={(event) => {
                    setSearchValue(event.target.value);
                }}
            />
            <button></button>
        </div>
    )
}

export { TodoSearch }