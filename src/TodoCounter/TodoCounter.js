import React from 'react';
import './TodoCounter.css';
import { TodoContext } from '../TodoContext/TodoContext';

function TodoCounter() {
    const { todos, loading } = React.useContext(TodoContext)
    const completedTodos = todos.filter(todo => todo.completed).length
    return (
        <div className='todoCounterHeader'>
            <h1>My tasks</h1>

            <h2>
                {loading ?
                    <>
                        Loading tasks
                        <span className=" loading-text dot">.</span>
                        <span className=" loading-text dot">.</span>
                        <span className=" loading-text dot">.</span>
                    </> :
                    todos.length === completedTodos ? ('You rock!!')
                        : (`Completed ${completedTodos} out of ${todos.length}`)
                }
            </h2>
        </div>
    )
}

export { TodoCounter };
