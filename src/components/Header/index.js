import { useSelector } from 'react-redux';
import { getStateIsAuthManager } from './selectors';
import Login from './Login';
import Logout from './Logout';

const Header = () => {
  const isAuthManager = useSelector(getStateIsAuthManager);
  return (
    <div>
      <Login />
      {isAuthManager ? <Logout /> : null}
    </div>
  );
};
export default Header;
