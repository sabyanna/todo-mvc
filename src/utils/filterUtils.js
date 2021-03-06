const setTodoListByFilter = (todos, filter) => {
  switch(filter[0]) {
    case 'done':
      return todos.filter(todo => todo.isDone);
    case 'active':
      return todos.filter(todo => !todo.isDone);
    default:
      return todos
  }
};

module.exports = {
  setTodoListByFilter
};