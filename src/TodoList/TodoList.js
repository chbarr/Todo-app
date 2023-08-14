import React, { Children } from 'react'
import './TodoList.css'

function TodoList(props) {
    return (
        <section className="TodoList-container">
            {props.error && props.onError()}
            {props.loading && props.onLoading()}
            {(!props.loading && props.todos.length === 0) && props.onEmptyTodos()}
            {(!props.loading && props.todos.length !== 0 && props.searchedTodos.length === 0) && props.onEmptySearchTodos(props.searchValue)}
            
            <ul className="todoList">
                {props.searchedTodos.map(props.render ? props.render() : props.children)}
            </ul>
        </section>
    )
}

export { TodoList }