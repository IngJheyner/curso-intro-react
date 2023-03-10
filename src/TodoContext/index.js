import React from 'react';
import { useLocalStorage } from './useLocalStorage';

const TodoContext = React.createContext();

function TodoProvider(props) {

  const {
    item: todos,
    saveItem: saveTodos,
    loading,
    error,
  } = useLocalStorage('TODOS_V1', []);

  const [search, setSearch] = React.useState('');
  const [openModal, setOpenModal] = React.useState(false);

  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;

  let searchTodos = [];

  if(!search.length >= 1){
    searchTodos = todos;
  } else {

    searchTodos = todos.filter(todo => {

      const todoText = todo.text.toLowerCase();
      const searchText = search.toLocaleLowerCase();
      return todoText.includes(searchText);
    });

  }

  const addTodo = (text) => {

    const newTodos = [...todos];
    newTodos.push({
      completed: true,
      text: text,
    });
    saveTodos(newTodos);
    // todos[todoIndex] = {
    //   text: todos[todoIndex].text,
    //   completed: true,
    // };
  }

  const completeTodo = (text) => {

    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];
    newTodos[todoIndex].completed = true;
    saveTodos(newTodos);
    // todos[todoIndex] = {
    //   text: todos[todoIndex].text,
    //   completed: true,
    // };
  }

  const deleteTodo = (text) => {

    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
    // todos[todoIndex] = {
    //   text: todos[todoIndex].text,
    //   completed: true,
    // };
  }
  return (
    <TodoContext.Provider value={{
      loading,
      error,
      totalTodos,
      addTodo,
      completedTodos,
      search,
      setSearch,
      searchTodos,
      completeTodo,
      deleteTodo,
      openModal,
      setOpenModal
    }}>

      {props.children}

    </TodoContext.Provider>
  );
}

export { TodoContext, TodoProvider}