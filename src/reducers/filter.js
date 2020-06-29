import { SET_FILTER } from '../actions/filter';

export const filter = (state = [], action) => {
  switch (action.type) {
    case SET_FILTER:
      return [ action.payload ];
    default:
      return state;
  }
};