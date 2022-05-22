import { GET_CLIENTS } from '../createTypes';

export function getClientsAction(payload) {
  return { type: GET_CLIENTS, payload };
}
