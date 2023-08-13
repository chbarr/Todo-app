import React from 'react';
import './TodoCounter.css';

function TodoCounter({ todos, loading }) {
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
                    todos.length === 0 ? 'Create your first task!' :
                        todos.length === completedTodos ? ('You rock!!') : (`Completed ${completedTodos} out of ${todos.length}`)
                }
            </h2>
        </div>
    )
}

export { TodoCounter };
