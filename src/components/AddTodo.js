import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../actions/todos';

const AddTodo = () => {
  const [ todoName, setTodoName ] = useState('');

  const dispatch = useDispatch();

  const handleAdd = () => {
    dispatch(addTodo(todoName));
    setTodoName('');
  }

  return (
    <div style={{display: "flex", flexDirection: 'row'}}>
      <input
        type="text"
        placeholder='What to do?'
        value={ todoName }
        onChange={ e => setTodoName(e.target.value) }
      ></input>
      <button onClick={ handleAdd }>Add</button>
    </div>
  );
};

export default AddTodo;
