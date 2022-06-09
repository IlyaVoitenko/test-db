import { useState } from 'react';
import { SearchClientByPhoneNumber } from './helper';
import { getStateClientByIdUser } from '../MainPage/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { getStateNameClient } from '../SearchClient/Transactions/selectors';

const SearchClient = () => {
  const dispatch = useDispatch();
  const clientByIdUser = useSelector(getStateClientByIdUser);
  const [numberPhoneClient, setNumberPhoneClient] = useState('');
  const nameClient = useSelector(getStateNameClient);

  return (
    <div>
      <br></br>
      {nameClient !== null ? <span>{nameClient.name} </span> : null}
      <input
        onChange={({ target }) => setNumberPhoneClient(target.value)}
        placeholder="+3805022222"
      />
      <button
        onClick={() =>
          dispatch(SearchClientByPhoneNumber(clientByIdUser, numberPhoneClient))
        }
      >
        Send
      </button>
    </div>
  );
};
export default SearchClient;
