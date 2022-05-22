import { GET_CLIENTS } from '../createTypes';

const initialState = {
  clients: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CLIENTS:
      return { ...state, clients: [...action.payload] };
    default:
      return state;
  }
};
export default reducer;
