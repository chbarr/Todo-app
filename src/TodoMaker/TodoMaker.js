import React from 'react'
import './TodoMaker.css'

function TodoMaker({ makeTodo, makerValue, setMakerValue }) {
    return (
        <section className='todoMaker'>
            <h2>Create new task</h2>
            <span>Task name</span>
            <textarea placeholder="Become a creative kraken"
                value={makerValue}
                onChange={(event) => {
                    setMakerValue(event.target.value);
                    event.currentTarget.style.height = 'auto';
                    event.currentTarget.style.height = (event.currentTarget.scrollHeight) + 'px';
                }}></textarea>
            <button onClick={() => {
                makeTodo(makerValue);
                setMakerValue('');
            }}>Create task</button>
        </section>
    )
}

export { TodoMaker }