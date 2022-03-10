const initialState = {
  users: {},
};

export const globalReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'USERS_LOAD_COMPLETED':
      return {
        ...state,
        users: action.payload,
      };
    default:
      return state;
  }
};
