import { Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import {
  isAuthManagerAction,
  isQuerySendAction,
  getClientByIdUser,
  getNameClient,
} from '../../../store/createActions';

const Logout = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <Button
        onClick={() => {
          dispatch(getNameClient(null));
          dispatch(isAuthManagerAction(false));
          dispatch(isQuerySendAction(false));
          dispatch(getClientByIdUser(null));
        }}
      >
        Log out
      </Button>
    </div>
  );
};
export default Logout;
