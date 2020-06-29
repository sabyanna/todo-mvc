import React from 'react';
import { setFilter } from '../actions/filter';
import { useDispatch, useSelector } from 'react-redux';

const Filters = () => {
  const filter = useSelector(state => state.filter[0] || 'all');
  const dispatch = useDispatch();

  const handleFilter = filter => {
    dispatch(setFilter(filter));
  }

  return (
    <>
      <button onClick={ () => handleFilter('all')} style={{ border: filter === 'all' || typeof filter === 'undefined' ? 'red' : 'black' }}>All</button>
      <button onClick={ () => handleFilter('active')} style={{ border: filter === 'active' ? 'red' : 'black' }}>Active</button>
      <button onClick={ () => handleFilter('done')} style={{ border: filter === 'done' ? 'red' : 'black' }}>Done</button>
    </>
  );
};

export default Filters;
