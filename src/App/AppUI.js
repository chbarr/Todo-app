import { TodoCounter } from '../TodoCounter/TodoCounter';
import { TodoSearch } from '../TodoSearch/TodoSearch';
import { TodoList } from '../TodoList/TodoList';
import { TodoItem } from '../TodoItem/TodoItem';
import { TodoMaker } from '../TodoMaker/TodoMaker';
import { TodoLoading } from '../TodoLoading/TodoLoading';
import { TodoError } from '../TodoError/TodoError';
import { EmptyTodos } from '../EmptyTodos/EmptyTodos';
import { TodoContext } from '../TodoContext/TodoContext';
import React from 'react'

function AppUI() {
    const {
        completeTodo,
        deleteTodo,
        searchedTodos,
        loading,
        error
    } = React.useContext(TodoContext);
    return (
        <React.Fragment>
            <TodoMaker />
            <section className='taskContainer'>
                <TodoCounter />
                <TodoSearch />
                <TodoList>
                    {loading && (
                        <>
                            <TodoLoading />
                            <TodoLoading />
                            <TodoLoading />
                        </>
                    )}
                    {error && <TodoError />}
                    {(!loading && searchedTodos.length === 0) && <EmptyTodos />}
                    {searchedTodos.map(todo => (
                        <TodoItem key={todo.text}
                            text={todo.text}
                            completed={todo.completed}
                            onComplete={() => completeTodo(todo.text)}
                            onDelete={() => deleteTodo(todo.text)}
                        />))}
                </TodoList>
            </section>
        </React.Fragment>
    );
}

export { AppUI }