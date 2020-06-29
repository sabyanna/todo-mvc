import { ADD_TODO, EDIT_TODO, DELETE_TODO } from '../actions/todos';

export const todos = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, { id: state.length, name: action.payload, isDone: false } ];
    case EDIT_TODO:
      const index = state.findIndex(todo =>
        todo.id === action.payload.id);
      return [
        ...state.slice(0, index),
        action.payload,
        ...state.slice(index + 1, state.length)
      ];
    case DELETE_TODO:
      return state.filter(todo => todo.id !== action.payload);
    default:
      return state;
  }
};