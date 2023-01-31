// import logo from './logo.svg';
// import './App.css';
import React from 'react';
import { AppUI } from './AppUI';
import {TodoProvider} from '../TodoContext';

// const defaultTodos = [
//   { text: 'Cortar Cebolla', completed: true },
//   { text: 'Cortar Tomates', completed: false },
//   { text: 'LLorar con la llorona', completed: false },
// ]


function App() {

  // React.useEffect(() => {

  // }, [totalTodos]);

  return (
    <TodoProvider>
      <AppUI/>
    </TodoProvider>
  );
}

export default App;
