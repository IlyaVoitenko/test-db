import axios from 'axios';
import { getClientsAction, getNamesClients } from '../../store/createActions';

export function getClients() {
  return (dispatch) => {
    return axios
      .get(`http://localhost:4001/clients`)
      .then(({ data }) => dispatch(getClientsAction(data)));
  };
}
export function getDataClients() {
  return (dispatch) => {
    return axios
      .get(`http://localhost:4001/NamesClients`)
      .then(({ data }) => dispatch(getNamesClients(data)));
  };
}
