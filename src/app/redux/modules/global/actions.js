export const loadUsers = data => {
  return async dispatch => {
    return dispatch({
      type: 'USERS_LOAD_COMPLETED',
      payload: data,
    });
  };
};
