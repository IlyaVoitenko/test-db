import { useSelector } from 'react-redux';
import { getStateIsAuthManager } from './selectors';
import { getStateClientByIdUser } from '../MainPage/selectors';
import style from './Header.module.css';
import Login from './Login';
import Logout from './Logout';

const Header = () => {
  const isAuthManager = useSelector(getStateIsAuthManager);
  const client = useSelector(getStateClientByIdUser);
  console.log('client :', client);
  return (
    <div className={style.container}>
      {client ? <span>{client.otherName}</span> : null}
      <Login />
      {isAuthManager ? <Logout /> : null}
    </div>
  );
};
export default Header;
