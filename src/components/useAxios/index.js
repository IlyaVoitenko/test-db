import axios from 'axios';
import { getClientsAction } from '../../store/createActions';

export function getClients() {
  return (dispatch) => {
    return axios
      .get(`http://localhost:4001/clients`)
      .then(({ data }) => dispatch(getClientsAction(data)));
  };
}
