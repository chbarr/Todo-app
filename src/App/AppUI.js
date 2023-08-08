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
import { Modal } from '../Modal/Modal';

function AppUI() {
    const {
        completeTodo,
        searchedTodos,
        loading,
        error,
        openModal,
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
                        />))}
                </TodoList>
            </section>

            {openModal && (
                <Modal>
                    Funcionalidad de agregar TODO
                </Modal>
            )}
        </React.Fragment>
    );
}

export { AppUI }