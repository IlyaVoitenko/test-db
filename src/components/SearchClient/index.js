import { useState } from 'react';
import { getStateClientByIdUser } from '../MainPage/selectors'; //getStateClientByIdUser
import { getStateNameClient } from './Transactions/selectors';
import { getStateIsAuthManager } from '../Header/selectors';
import { useDispatch, useSelector } from 'react-redux';
import {
  isQuerySendAction,
  getClientByIdUser,
  isCheckDetailInfoAction,
  getNamesClients,
  isFindClient,
} from '../../store/createActions';

const SearchClient = () => {
  const dispatch = useDispatch();
  const nameClient = useSelector(getStateNameClient);
  const clientByIdUser = useSelector(getStateClientByIdUser);
  const [numberPhoneClient, setNumberPhoneClient] = useState('');

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
      <p>Example phone number : +3805022222</p>
      <input
        type="tel"
        onChange={({ target }) => setNumberPhoneClient(target.value)}
      />
      <button
        onClick={() => {
          dispatch(isCheckDetailInfoAction(false));
          dispatch(isFindClient(false));
          dispatch(isQuerySendAction(true));
          if (numberPhoneClient === '+3805022222') {
            dispatch(
              getNamesClients({
                id: '961a33eb-4a5b-4f8e-a746-6c858aaf1d9e',
                name: 'Alice Trump',
              })
            );
            dispatch(getClientByIdUser(nameClient.id));
          }
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
