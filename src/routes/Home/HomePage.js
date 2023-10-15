import { useNavigate } from 'react-router-dom';
import { useTodos } from './../useTodos';
import { TodoCounter } from '../../ui/TodoCounter/TodoCounter';
import { TodoSearch } from '../../ui/TodoSearch/TodoSearch';
import { TodoList } from '../../ui/TodoList/TodoList';
import { TodoItem } from '../../ui/TodoItem/TodoItem';
import { TodoMaker } from '../../ui/TodoMaker/TodoMaker';
import { TodoLoading } from '../../ui/TodoLoading/TodoLoading';
import { TodoError } from '../../ui/TodoError/TodoError';
import { EmptyTodos } from '../../ui/EmptyTodos/EmptyTodos';
import React from 'react';
import { EmptySearchTodos } from '../../ui/EmptySearchTodos/EmptySearchTodos';
import { StorageChangeAlertWithListener } from '../../ui/StorageChangeAlert/StorageChangeAlert';

function HomePage() {
    const {
        todos,
        completeTodo,
        deleteTodo,
        searchedTodos,
        loading,
        error,
        searchValue,
        setSearchValue,
        makeTodo,
        makerValue,
        setMakerValue,
        sincronizeTodos
    } = useTodos();

    const navigate = useNavigate();

    return (
        <React.Fragment>
            <TodoMaker makeTodo={makeTodo} makerValue={makerValue} setMakerValue={setMakerValue} />
            <section className='taskContainer'>
                <TodoCounter todos={todos} loading={loading} />
                <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} loading={loading} />
                <TodoList
                    todos={todos}
                    error={error}
                    loading={loading}
                    searchedTodos={searchedTodos}
                    searchValue={searchValue}
                    onError={() => <TodoError />}
                    onLoading={() => (
                        <>
                            <TodoLoading />
                            <TodoLoading />
                            <TodoLoading />
                        </>
                    )}
                    onEmptyTodos={() => <EmptyTodos />}
                    onEmptySearchTodos={() => <EmptySearchTodos searchValue={searchValue} />}
                    render={() => todo => (
                        <TodoItem key={todo.id}
                            text={todo.text}
                            completed={todo.completed}
                            onComplete={() => completeTodo(todo.id)}
                            onDelete={() => deleteTodo(todo.id)}
                            onEdit={() => navigate(`/edit/${todo.id}`, { state: { todoText: todo.text } })}
                        />)}
                >

                    {
                        todo => (
                            <TodoItem key={todo.text}
                                text={todo.text}
                                completed={todo.completed}
                                onComplete={() => completeTodo(todo.id)}
                                onDelete={() => deleteTodo(todo.id)}
                                onEdit={() => navigate(`/edit/${todo.id}`, { state: { todoText: todo.text } })}
                            />)
                    }
                </TodoList>
            </section>
            <StorageChangeAlertWithListener
                sincronize={sincronizeTodos}
            />
        </React.Fragment>
    );
}


export { HomePage };
