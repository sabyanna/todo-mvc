import React from 'react';
import { setFilter } from '../actions/filter';
import { useDispatch } from 'react-redux';

const Filters = () => {
  const dispatch = useDispatch();

  const handleFilter = filter => {
    dispatch(setFilter(filter));
  }

  return (
    <>
      <button onClick={ () => handleFilter('all') }>All</button>
      <button onClick={ () => handleFilter('active') } >Active</button>
      <button onClick={ () => handleFilter('done') } >Done</button>
    </>
  );
};

export default Filters;
