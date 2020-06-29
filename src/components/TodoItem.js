import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { editTodo } from '../actions/todos';
import { deleteTodo } from '../actions/todos';

const TodoList = ({ todoItem }) => {
  const [ todo, setTodo ] = useState(todoItem);

  const dispatch = useDispatch();

  const onChangeCheckBox = () => {
    const newTodo = {...todo, isDone: !todo.isDone};
    setTodo(newTodo)
    dispatch(editTodo(newTodo))
  };

  const onDelete = () => {
    dispatch(deleteTodo(todo.id));
  };


  return (
    <div style={{display: "flex", flexDirection: 'row'}}>
      <input type="checkbox" onChange={ onChangeCheckBox } checked={ todo.isDone } ></input>
      { todo.name }
      <button onClick={ onDelete }>X</button>
    </div>
  );
};

export default TodoList;
