import { useLocalStorge } from './useLocalStorage'
import React from 'react';

function useTodos() {
    const {
        item: todos,
        saveItem: saveTodos,
        loading,
        error,
        sincronizeItem: sincronizeTodos
    } = useLocalStorge('TODOS_V1', []);

    const [searchValue, setSearchValue] = React.useState('');
    const searchedTodos = todos.filter(todo =>
        todo.text.toLocaleLowerCase().
            includes(searchValue.toLocaleLowerCase())
    );

    const completeTodo = (text) => {
        const newTodos = [...todos];
        const foundTodo = newTodos.find(todo => todo.text == text);
        foundTodo.completed = !foundTodo.completed;
        saveTodos(newTodos);
    }

    const deleteTodo = (text) => {
        let newTodos = [...todos];
        newTodos = newTodos.filter(todo => todo.text !== text);
        saveTodos(newTodos);
    }

    const makeTodo = (text) => {
        const newTodos = [...todos];
        newTodos.push(
            {
                text: text,
                completed: false
            }
        )
        saveTodos(newTodos);
    }

    const [openModal, setOpenModal] = React.useState(true);
    const [makerValue, setMakerValue] = React.useState('');

    return (
        {
            todos,
            completeTodo,
            deleteTodo,
            searchValue,
            setSearchValue,
            searchedTodos,
            loading,
            error,
            openModal,
            setOpenModal,
            makeTodo,
            makerValue,
            setMakerValue,
            sincronizeTodos
        }
    );
}

export { useTodos }