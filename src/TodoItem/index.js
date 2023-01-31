import React from 'react';
import './TodoItem.css';
import { CompleteIcon } from '../TodoIcon/CompleteIcon';
import { DeleteIcon } from '../TodoIcon/DeleteIcon';

function TodoItem(props){

  // const onComplete = () => {
  //   alert(`Ya completaste el todo ${props.text}`);
  // }

  // const onDelete = () => {
  //   alert(`Borraste el todo ${props.text}`);
  // }

  return (
    <li className="TodoItem">
      {/* <span className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}
      onClick = {props.onComplete}>
        {props.completed ? '√' : '-' }
      </span>
      <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>
        {props.text}
      </p>
      <span className="Icon Icon-delete"
      onClick = {props.onDelete}>
        X
      </span> */}

      <CompleteIcon
      completed={props.completed}
      onCompleted={props.onCompleted}
      />
      <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>
        {props.text}
      </p>
      <DeleteIcon
      onDelete={props.onDelete}
      />

    </li>
  );
}

export { TodoItem };