export const SET_FILTER = 'cx-ray/FILTER/SET';

export function setFilter(filter) {
  return dispatch => {
    dispatch({
      type: SET_FILTER,
      payload: filter
    });
  };
};
