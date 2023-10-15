import { useLocalStorge } from './useLocalStorage'
import React from 'react';

function useTodos() {
    const {
        item: todos,
        saveItem: saveTodos,
        loading,
        error,
        sincronizeItem: sincronizeTodos
    } = useLocalStorge('TODOS_V2', []);

    const [searchValue, setSearchValue] = React.useState('');
    const searchedTodos = todos.filter(todo =>
        todo.text.toLocaleLowerCase().
            includes(searchValue.toLocaleLowerCase())
    );

    const completeTodo = (id) => {
        const newTodos = [...todos];
        const foundTodo = newTodos.find(todo => todo.id == id);
        foundTodo.completed = !foundTodo.completed;
        saveTodos(newTodos);
    }

    const deleteTodo = (id) => {
        let newTodos = [...todos];
        newTodos = newTodos.filter(todo => todo.id !== id);
        saveTodos(newTodos);
    }

    const makeTodo = (text) => {
        const id = newTodoId(todos);
        const newTodos = [...todos];
        newTodos.push(
            {
                text: text,
                completed: false,
                id
            }
        )
        saveTodos(newTodos);
    }

    const editTodo = (id, text) => {
        const todoIndex = todos.findIndex(todo => todo.id === id);
        const newTodos = [...todos];
        newTodos[todoIndex].text = text;
        saveTodos(newTodos);
    }

    const getTodo = (id) => {
        return todos.find(todo => todo.id === id);
    }

    const [openModal, setOpenModal] = React.useState(true);
    const [makerValue, setMakerValue] = React.useState('');

    return (
        {
            todos,
            completeTodo,
            deleteTodo,
            editTodo,
            getTodo,
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

function newTodoId(todoList) {
    let todoIds = todoList.map(todo => todo.id);
    return Math.max(todoList.length === 0 ? 0 : [...todoIds]) + 1;
}
export { useTodos }