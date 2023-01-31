import React from 'react';
import { TodoContext } from '../TodoContext';
import './TodoCounter.css';

// const styles = {
//   color: 'red',
//   backgroundColor: 'yellow',
// };
function TodoCounter(){

  const {totalTodos, completedTodos} = React.useContext(TodoContext)
  // const {totalTodos, completedTodos} = props;
  return (
    // <h2 style={styles}>Has completado 2 de 3 Todos.</h2>
    <h2 className='TodoCounter'>Has completado {completedTodos} de {totalTodos} Todos.</h2>
  );
}

export { TodoCounter };