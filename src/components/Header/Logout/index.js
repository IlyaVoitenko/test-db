import { Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import style from './Logout.module.css';
import { LogOutManager } from '../helper';

const Logout = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <Button
        className={style.btnLogOut}
        onClick={() => dispatch(LogOutManager())}
      >
        Log out
      </Button>
    </div>
  );
};
export default Logout;
