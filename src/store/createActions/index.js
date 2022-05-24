import {
  IS_QUERY,
  GET_CLIENTS,
  GET_CLIENT_DATA,
  IS_AUTH_MANAGER,
  GET_SELECTED_TRANSACTION,
  GET_CLIENT_BY_PHONE_NUMBER,
} from '../createTypes';

export function getClientsAction(payload) {
  return { type: GET_CLIENTS, payload };
}
export function isAuthClientAction(payload) {
  return { type: GET_CLIENT_DATA, payload };
}
export function getSelectedTransactionAction(payload) {
  return { type: GET_SELECTED_TRANSACTION, payload };
}
export function isAuthManagerAction() {
  return { type: IS_AUTH_MANAGER };
}
export function isQuerySendAction() {
  return { type: IS_QUERY };
}
export function getClientByPhoneNumber(payload) {
  return { type: GET_CLIENT_BY_PHONE_NUMBER, payload };
}
