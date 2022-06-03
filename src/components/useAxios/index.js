import axios from 'axios';
import {
  getNameClient,
  getClientByIdUser,
  getSelectedTransactionAction,
} from '../../store/createActions';

export function getTransactionsClients(idClient) {
  return (dispatch) => {
    axios
      .get(
        `http://54.195.25.11:8082/zxs2a/api/v1/mng/transbyuserid/${idClient}`
      )
      .then(({ data }) => {
        return dispatch(getClientByIdUser(data));
      });
  };
}
export function getClientByNumberPhone(numberPhoneClient) {
  return (dispatch) => {
    return axios
      .get(
        `http://54.195.25.11:8082/zxs2a/api/v1/mng/user/${numberPhoneClient}`
      )
      .then(({ data }) => {
        dispatch(getNameClient(data));
        dispatch(getTransactionsClients(data.id));
      })
      .catch((err) => console.warn(err));
  };
}
export function getDetailTransaction(id) {
  return (dispatch) => {
    return axios
      .get(`http://54.195.25.11:8082/zxs2a/api/v1/mng/transbytrid/${id}`)
      .then(({ data }) => dispatch(getSelectedTransactionAction(data.value)))
      .catch((err) => console.warn(err));
  };
}
