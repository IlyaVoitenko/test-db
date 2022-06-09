import {
  isAuthManagerAction,
  isQuerySendAction,
  getClientByIdUser,
  getNameClient,
} from '../../../store/createActions';

export function authManager(login, password, handleClose) {
  return (dispatch) => {
    if (login === 'admin' && password === 'admin') {
      dispatch(isAuthManagerAction(true));
      return handleClose();
    }
    alert("You aren't a manager");
    dispatch(isAuthManagerAction(false));
  };
}

export function LogOutManager() {
  return (dispatch) => {
    dispatch(getNameClient(null));
    dispatch(isAuthManagerAction(false));
    dispatch(isQuerySendAction(false));
    dispatch(getClientByIdUser(null));
  };
}
