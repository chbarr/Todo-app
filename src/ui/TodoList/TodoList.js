import React from 'react'
import './TodoList.css'

function TodoList(props) {
    if (props.error) {
        return (
            <section className="todoList-container">
                {props.onError()}
            </section>
        )
    } else if (props.loading) {
        return (
            <section className="todoList-container">
                {props.onLoading()}
            </section>
        )
    } else if (!props.loading && props.todos.length === 0) {
        return (
            <section className="todoList-container">
                {props.onEmptyTodos()}
            </section>
        )
    } else if (!props.loading && props.todos.length !== 0 && props.searchedTodos.length === 0) {
        return (
            <section className="todoList-container">
                {props.onEmptySearchTodos(props.searchValue)}
            </section>
        )
    } else {
        return (
            <section className="todoList-container">
                <ul className="todoList">
                    {props.searchedTodos.map(props.render ? props.render() : props.children)}
                </ul>
            </section>
        )
    }
}

export { TodoList }