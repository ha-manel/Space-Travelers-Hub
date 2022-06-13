const ADD_ALL_ROCKETS = 'spacehub/rockets/ADD_ALL_ROCKETS';

export default function rockets(state = [], action = {}) {
  switch (action.type) {
    case ADD_ALL_ROCKETS:
      return [...action.payload];
    default:
      return state;
  }
}

export const getRockets = async (dispatch) => {
  const books = [];
  dispatch({ type: ADD_ALL_ROCKETS, payload: books });
};
