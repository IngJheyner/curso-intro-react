import React from 'react';
import { TodoCounter } from '../TodoCounter';
import { TodoShearch } from '../TodoShearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { CreateTodoButton } from '../CreateTodoButton';
import { TodoContext } from '../TodoContext';
import { Modal } from '../Modal';
import { TodoForm } from '../TodoForm';
import { TodosError } from '../TodosError';
import { TodosLoading } from '../TodosLoading';
import { EmptyTodos } from '../EmptyTodos';

const AppUI = () => {

  const { error, loading, searchTodos, completeTodo, deleteTodo, openModal, setOpenModal} = React.useContext(TodoContext);

  return (
    <>
      <TodoCounter />
      {/* <h2>Has completado 2 de 3 Todos.</h2> */}

      <TodoShearch />
      {/* <input placeholder="Cebolla"/> */}

      <TodoList>

        {error && <TodosError error={error} />}
        {loading && <TodosLoading />}
        {(!loading && !searchTodos.length) && <EmptyTodos />}

        {searchTodos.map(todo => (
          <TodoItem
          key={todo.text}
          text={todo.text}
          completed={todo.completed}
          onComplete={() => completeTodo(todo.text)}
          onDelete={() => deleteTodo(todo.text)}/>
        ))}
      </TodoList>

      { !!openModal && (
        <Modal>
         <TodoForm />
        </Modal>
      )}

      <CreateTodoButton
        setOpenModal={setOpenModal}
        openModal={openModal}
      />
      {/* <button>+</button> */}
    </>
  );
}


export { AppUI };
