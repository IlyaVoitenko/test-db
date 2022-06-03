import { useState } from 'react';
import { getStateClientByIdUser } from '../MainPage/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { getClientByNumberPhone } from '../useAxios';
import { getStateNameClient } from '../SearchClient/Transactions/selectors';
import {
  isQuerySendAction,
  isCheckDetailInfoAction,
  isFindClient,
} from '../../store/createActions';

const SearchClient = () => {
  const dispatch = useDispatch();
  const clientByIdUser = useSelector(getStateClientByIdUser);
  const [numberPhoneClient, setNumberPhoneClient] = useState('');
  const nameClient = useSelector(getStateNameClient);

  function phone(name) {
    var r = /([0-9])+/g,
      arr = name.match(r),
      res,
      str = arr.join('');
    if (name.substr(0, 1) === '+') {
      res = '+' + str;
    } else if (str.substr(0, 1) === '8') {
      res = '+7' + str.substr(1);
    } else {
      res = str;
    }
    return res;
  }

  return (
    <div>
      {nameClient !== null ? <span>{nameClient.name} </span> : null}
      <input
        onChange={({ target }) => setNumberPhoneClient(target.value)}
        placeholder="+3805022222"
      />
      <button
        onClick={() => {
          dispatch(isCheckDetailInfoAction(false));
          dispatch(isFindClient(false));
          dispatch(isQuerySendAction(true));
          dispatch(getClientByNumberPhone(phone(numberPhoneClient)));
          if (clientByIdUser !== {} || clientByIdUser !== null) {
            return dispatch(isFindClient(true));
          }
        }}
      >
        Send
      </button>
    </div>
  );
};
export default SearchClient;
