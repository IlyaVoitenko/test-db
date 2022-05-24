import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  isQuerySendAction,
  getClientByPhoneNumber,
  getPhoneAction,
} from '../../store/createActions';

const InfoClient = ({ client }) => {
  const dispatch = useDispatch();
  const [numberPhoneClient, setNumberPhoneClient] = useState('');
  //const {} = client || {}; +38000000
  const clientByPhoneNumber = useSelector((state) => state.clientByPhoneNumber);
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
          console.log('clientByPhoneNumber :', clientByPhoneNumber);
        }}
      >
        send
      </button>
    </div>
  );
};
export default InfoClient;
