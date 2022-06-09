import axios from 'axios';

export function loadTransactionsClient(idClient) {
  return axios
    .get(`http://54.195.25.11:8082/zxs2a/api/v1/mng/transbyuserid/${idClient}`)
    .then(({ data }) => {
      return data;
    });
}

export function loadClientByNumberPhone(numberPhoneClient) {
  return axios
    .get(`http://54.195.25.11:8082/zxs2a/api/v1/mng/user/${numberPhoneClient}`)
    .then(({ data }) => data);
}
export function loadDetailTransaction(id) {
  return axios
    .get(`http://54.195.25.11:8082/zxs2a/api/v1/mng/transbytrid/${id}`)
    .then(({ data }) => data)
    .catch((err) => console.warn(err));
}
