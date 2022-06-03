import { useSelector } from 'react-redux';
import { getStateIsAuthManager } from './selectors';
import { getStateNameClient } from '../SearchClient/Transactions/selectors';
import style from './Header.module.css';
import Login from './Login';
import Logout from './Logout';

const Header = () => {
  const isAuthManager = useSelector(getStateIsAuthManager);
  const nameClient = useSelector(getStateNameClient);
  return (
    <div className={style.container}>
      {nameClient !== null ? <span>{nameClient.name}</span> : null}
      <Login />
      {isAuthManager ? <Logout /> : null}
    </div>
  );
};
export default Header;
