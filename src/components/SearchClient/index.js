import { useState } from 'react';
import { getStateClientByPhoneNumber } from '../MainPage/selectors';
import { useDispatch, useSelector } from 'react-redux';
import {
  isQuerySendAction,
  getClientByPhoneNumber,
  isCheckDetailInfoAction,
  isFindClient,
} from '../../store/createActions';

const SearchClient = () => {
  const dispatch = useDispatch();
  const clientByPhoneNumber = useSelector(getStateClientByPhoneNumber);
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
      <p>Example phone number : +380789000</p>
      <input
        type="tel"
        onChange={({ target }) => setNumberPhoneClient(target.value)}
      />
      <button
        onClick={() => {
          dispatch(isCheckDetailInfoAction(false));
          dispatch(isFindClient(false));
          dispatch(isQuerySendAction(true));
          dispatch(getClientByPhoneNumber(phone(numberPhoneClient)));
          if (clientByPhoneNumber !== {} || clientByPhoneNumber !== null) {
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
