import React from 'react'
import './TodoList.css'

function TodoList(props) {
    return (
        <section className="TodoList-container">
            {props.error && props.onError()}
            {props.loading && props.onLoading()}
            {(!props.loading && props.searchedTodos.length === 0) && props.onEmptyTodos()}
            <ul className="todoList">
                {props.searchedTodos.map(props.render())}
            </ul>
        </section>
    )
}

export { TodoList }