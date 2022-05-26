import { Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import {
  isAuthManagerAction,
  isQuerySendAction,
  getClientByPhoneNumber,
} from '../../../store/createActions';

const Logout = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <Button
        onClick={() => {
          dispatch(isAuthManagerAction(false));
          dispatch(isQuerySendAction(false));
          dispatch(getClientByPhoneNumber(null));
        }}
      >
        Log out
      </Button>
    </div>
  );
};
export default Logout;
