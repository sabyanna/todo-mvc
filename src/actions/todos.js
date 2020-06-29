export const ADD_TODO = 'cx-ray/TODOS/ADD';
export const EDIT_TODO = 'cx-ray/TODOS/EDIT';
export const DELETE_TODO = 'cx-ray/TODOS/DELETE';

export function addTodo(todo) {
  return dispatch => {
    dispatch({
      type: ADD_TODO,
      payload: todo
    });
  };
};

export function editTodo(todo) {
  return dispatch => {
    dispatch({
      type: EDIT_TODO,
      payload: todo
    });
  };
};

export function deleteTodo(id) {
  return dispatch => {
    dispatch({
      type: DELETE_TODO,
      payload: id
    });
  };
};
