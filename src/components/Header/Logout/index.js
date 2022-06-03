import { Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import style from './Logout.module.css';
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
        className={style.btnLogOut}
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
