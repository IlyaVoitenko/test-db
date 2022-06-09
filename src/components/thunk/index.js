import {
  loadTransactionsClient,
  loadClientByNumberPhone,
  loadDetailTransaction,
} from '../API';
import {
  getNameClient,
  getClientByIdUser,
  getSelectedTransactionAction,
} from '../../store/createActions';

export function getTransactionsClients(numberPhoneClient) {
  return (dispatch) => {
    return loadTransactionsClient(numberPhoneClient).then((data) => {
      return dispatch(getClientByIdUser(data));
    });
  };
}
export function getClientByNumberPhone(numberPhone) {
  return (dispatch) => {
    loadClientByNumberPhone(numberPhone)
      .then((data) => {
        dispatch(getNameClient(data));
        dispatch(getTransactionsClients(data.id));
      })
      .catch((err) => console.warn(err));
  };
}

export function getDetailTransaction(id) {
  return (dispatch) => {
    loadDetailTransaction(id).then((data) =>
      dispatch(getSelectedTransactionAction(data.value))
    );
  };
}
