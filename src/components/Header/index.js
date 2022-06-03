import { useSelector } from 'react-redux';
import { getStateIsAuthManager } from './selectors';
import style from './Header.module.css';
import Login from './Login';
import Logout from './Logout';

const Header = () => {
  const isAuthManager = useSelector(getStateIsAuthManager);
  return (
    <div className={style.container}>
      <Login />
      {isAuthManager ? <Logout /> : null}
    </div>
  );
};
export default Header;
