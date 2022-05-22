import {
  GET_CLIENTS,
  AUTH_CLIENT,
  GET_SELECTED_TRANSACTION,
} from '../createTypes';

const initialState = {
  clients: [],
  authClient: null,
  selectedTransaction: {},
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CLIENTS:
      return { ...state, clients: [...action.payload] };
    case AUTH_CLIENT:
      return {
        ...state,
        authClient: state.clients.find(
          (data) =>
            data.auth.login === action.payload.login &&
            data.auth.password === action.payload.password
        ),
      };
    case GET_SELECTED_TRANSACTION:
      return {
        ...state,
        selectedTransaction: state.authClient.transactions.find(
          (item) => item.idTransactions === action.payload
        ),
      };
    default:
      return state;
  }
};
export default reducer;
