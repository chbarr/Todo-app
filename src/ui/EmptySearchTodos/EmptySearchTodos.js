import React from 'react'
import './EmptySearchTodos.css'

function EmptySearchTodos(props) {
    return (
        <p className='notFoundMessage'>No tasks found for '{props.searchValue}'</p>
    )
}

export { EmptySearchTodos }