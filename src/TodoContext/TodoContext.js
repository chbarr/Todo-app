import { useLocalStorge } from './useLocalStorage'
import React from 'react';

const TodoContext = React.createContext();

function TodoProvider({ children }) {
    const {
        item: todos,
        saveItem: saveTodos,
        loading,
        error } = useLocalStorge('TODOS_V1', []);

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
        <TodoContext.Provider value={
            {
                todos,
                completeTodo,
                searchValue,
                setSearchValue,
                searchedTodos,
                loading,
                error,
                openModal,
                setOpenModal,
                makeTodo,
                makerValue,
                setMakerValue
            }
        }>
            {children}
        </TodoContext.Provider>
    );
}

export { TodoContext, TodoProvider }