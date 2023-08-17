import { useTodos } from './useTodos';
import { TodoCounter } from '../TodoCounter/TodoCounter';
import { TodoSearch } from '../TodoSearch/TodoSearch';
import { TodoList } from '../TodoList/TodoList';
import { TodoItem } from '../TodoItem/TodoItem';
import { TodoMaker } from '../TodoMaker/TodoMaker';
import { TodoLoading } from '../TodoLoading/TodoLoading';
import { TodoError } from '../TodoError/TodoError';
import { EmptyTodos } from '../EmptyTodos/EmptyTodos';
import React from 'react';
import { EmptySearchTodos } from '../EmptySearchTodos/EmptySearchTodos';

function App() {
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
    setMakerValue
  } = useTodos();

  return (
    <React.Fragment>
      <TodoMaker makeTodo={makeTodo} makerValue={makerValue} setMakerValue={setMakerValue} />
      <section className='taskContainer'>
        <TodoCounter todos={todos} loading={loading} />
        <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} loading={loading}/>
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
            <TodoItem key={todo.text}
              text={todo.text}
              completed={todo.completed}
              onComplete={() => completeTodo(todo.text)}
              onDelete={() => deleteTodo(todo.text)}
            />)}
        >

          {
            todo => (
              <TodoItem key={todo.text}
                text={todo.text}
                completed={todo.completed}
                onComplete={() => completeTodo(todo.text)}
                onDelete={() => deleteTodo(todo.text)}
              />)
          }
        </TodoList>
      </section>
    </React.Fragment>
  );
}


export default App;
