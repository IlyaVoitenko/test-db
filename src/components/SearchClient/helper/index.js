import {
  isQuerySendAction,
  isCheckDetailInfoAction,
  isFoundClient,
} from '../../../store/createActions';
import { getClientByNumberPhone } from '../../thunk';

export function CheckPhoneNumber(numberPhone) {
  let r = /([0-9])+/g,
    arr = numberPhone.match(r),
    res,
    str = arr.join('');
  if (numberPhone.substr(0, 1) === '+') {
    res = '+' + str;
  } else if (str.substr(0, 1) === '8') {
    res = '+7' + str.substr(1);
  } else {
    res = str;
  }
  return res;
}

export function SearchClientByPhoneNumber(clientByIdUser, numberPhoneClient) {
  return (dispatch) => {
    dispatch(isCheckDetailInfoAction(false));
    dispatch(isFoundClient(false));
    dispatch(isQuerySendAction(true));
    dispatch(getClientByNumberPhone(CheckPhoneNumber(numberPhoneClient)));
    if (clientByIdUser !== null) {
      return dispatch(isFoundClient(true));
    }
  };
}
