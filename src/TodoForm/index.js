import React from 'react';
import { TodoContext } from '../TodoContext';
import './TodoForm.css';

function TodoForm() {

  const [newTodoValue, setNewTodoValue] = React.useState('');
  const {
    addTodo,
    setOpenModal,
  } = React.useContext(TodoContext);

  const onCancel = () => {
    // Todo
    setOpenModal(false);
  }

  const onChange = (event) => {
    // Todo
    setNewTodoValue(event.target.value);
  }

  const onSubmit = (event) => {
    event.preventDefault();
    addTodo(newTodoValue);
    setOpenModal(false);
  }
  return (
    <form onSubmit={onSubmit}>
      <label>Escribe tu nuevo TODO</label>
      <textarea
      placeholder='Cortar la ceboolla...'
      value={newTodoValue}
      onChange={onChange}
      />
      <div className="todoForm-buttonContainer">
        <button
        onClick={onCancel}
        type="button"
        className='TodoForm-button TodoForm-button--cancel'
        >Cancelar</button>
        <button
        type='submit'
        className='TodoForm-button TodoForm-button--add'
        >Agregar</button>
      </div>
    </form>
  );
}

export { TodoForm }