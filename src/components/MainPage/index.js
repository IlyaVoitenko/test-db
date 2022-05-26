import { useSelector } from 'react-redux';
import style from './MainPage.module.css';
import { getStateIsAuthManager } from '../Header/selectors';
import { getStateIsQuerySend } from './selectors';
import SearchClient from '../SearchClient';
import SelectedTransaction from '../SearchClient/SelectedTransaction';
import Transactions from '../SearchClient/Transactions';

const MainPage = () => {
  const isAuthManager = useSelector(getStateIsAuthManager);
  const isQuerySend = useSelector(getStateIsQuerySend);

  return (
    <div>
      {isAuthManager ? <SearchClient /> : null}
      <div className={style.containerTransactions}>
        {isQuerySend ? <Transactions /> : null}
        {isQuerySend ? <SelectedTransaction /> : null}
      </div>
    </div>
  );
};
export default MainPage;
