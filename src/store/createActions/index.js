import {
  GET_CLIENTS,
  AUTH_CLIENT,
  GET_SELECTED_TRANSACTION,
} from '../createTypes';

export function getClientsAction(payload) {
  return { type: GET_CLIENTS, payload };
}
export function isAuthClientAction(payload) {
  return { type: AUTH_CLIENT, payload };
}
export function getSelectedTransactionAction(payload) {
  return { type: GET_SELECTED_TRANSACTION, payload };
}
