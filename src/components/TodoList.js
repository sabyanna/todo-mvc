import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import TodoItem from './TodoItem';
import { setTodoListByFilter } from '../utils/filterUtils'

const TodoList = () => {
  const todos = useSelector(state => state.todos);
  const filter = useSelector(state => state.filter);

  const filteredTodos = setTodoListByFilter(todos, filter);

  const [ isOpen, setIsOpen ] = useState(true)

  return (
    <>
      <button onClick={ () => setIsOpen(!isOpen)}>{isOpen ? 'hide' : 'show' } </button>
      { isOpen &&
          filteredTodos.map(todo => (
            <TodoItem todoItem={ todo } key={ todo.id }/>
      ))}
    </>
  );
};

export default TodoList;
