import React from 'react';
import { TodoContext } from '../TodoContext';
import './TodoSearch.css';

function TodoShearch(){
  const {search, setSearch} = React.useContext(TodoContext);
  // const [search, setSearch] = React.useState('');

  const onSearchValueChange = (event) => {
    //console.log(event.target.value);
    setSearch(event.target.value);
  };

  return [
    <input className="TodoSearch" placeholder="Cebolla"
    onChange={onSearchValueChange}
    value = {search}/>,
    // <p>{search}</p>
  ];
}

export { TodoShearch };