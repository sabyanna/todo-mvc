import React from 'react';
import AddTodo from './AddTodo';
import TodoList from './TodoList';
import Filters from './Filters';

const MainPage = () => {
  return (
    <>
      <AddTodo/>
      <TodoList/>
      <Filters/>
    </>
  );
};

export default MainPage;
