import { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  isQuerySendAction,
  getClientByPhoneNumber,
} from '../../store/createActions';

const InfoClient = () => {
  const dispatch = useDispatch();
  const [numberPhoneClient, setNumberPhoneClient] = useState('');
  return (
    <div>
      <p>Example phone number : +38000000</p>
      <input
        type="tel"
        onChange={({ target }) => setNumberPhoneClient(target.value)}
      />
      <button
        onClick={() => {
          dispatch(isQuerySendAction());
          dispatch(getClientByPhoneNumber(numberPhoneClient));
        }}
      >
        send
      </button>
    </div>
  );
};
export default InfoClient;
