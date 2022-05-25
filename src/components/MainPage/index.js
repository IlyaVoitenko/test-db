import { useSelector } from 'react-redux';
import style from './MainPage.module.css';
import SearchClient from '../SearchClient';
import SelectedTransaction from '../SearchClient/SelectedTransaction';
import Transactions from '../SearchClient/Transactions';

const MainPage = () => {
  const isAuthManager = useSelector((state) => state.isAuthManager);
  const isQuerySend = useSelector((state) => state.isQuerySend);

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
