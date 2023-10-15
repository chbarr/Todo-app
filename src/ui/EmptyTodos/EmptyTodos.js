import React from 'react'
import './EmptyTodos.css'
import emptyFolder from '../../assets/icons/empty.png'; 

function EmptyTodos() {
    return (
        <section className='emptyTodos'>
            <img src={emptyFolder} alt='Image of an empty folder'/>
            <h3>
                no tasks yet
                <span className=" loading-text dot">.</span>
                <span className=" loading-text dot">.</span>
                <span className=" loading-text dot">.</span>
            </h3>
        </section>
    )
}

export { EmptyTodos } 