import {
  IS_QUERY,
  GET_CLIENTS,
  GET_CLIENT_DATA,
  IS_FIND_CLIENT,
  IS_AUTH_MANAGER,
  IS_CHECK_DETAIL_INFO,
  GET_SELECTED_TRANSACTION,
  GET_CLIENT_BY_PHONE_NUMBER,
} from '../createTypes';

const initialState = {
  clients: [],
  clientData: null,
  isAuthManager: false,
  clientByPhoneNumber: null,
  isQuerySend: false,
  isCheckDetailInfo: false,
  isFindClient: false,
  selectedTransaction: {},
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CLIENTS:
      return { ...state, clients: [...action.payload] };
    case IS_CHECK_DETAIL_INFO:
      return { ...state, isCheckDetailInfo: action.payload };
    case IS_FIND_CLIENT:
      return { ...state, isFindClient: action.payload };
    case IS_AUTH_MANAGER:
      return { ...state, isAuthManager: true };
    case GET_CLIENT_BY_PHONE_NUMBER:
      return {
        ...state,
        clientByPhoneNumber: state.clients.find(
          (item) => item.phoneNumber === action.payload
        ),
      };
    case IS_QUERY:
      return { ...state, isQuerySend: true };
    case GET_CLIENT_DATA:
      return {
        ...state,
        clientData: state.clients.find(
          (data) =>
            data.auth.login === action.payload.login &&
            data.auth.password === action.payload.password
        ),
      };
    case GET_SELECTED_TRANSACTION:
      return {
        ...state,
        selectedTransaction: state.clientByPhoneNumber.transactions.find(
          (item) => item.idTransactions === action.payload
        ),
      };
    default:
      return state;
  }
};
export default reducer;
