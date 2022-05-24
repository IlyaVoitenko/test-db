import { useSelector } from 'react-redux';
import style from './MainPage.module.css';
import { getStateClientByPhoneNumber } from './selectors';
import InfoClient from '../InfoClient';
import SelectedTransaction from '../InfoClient/SelectedTransaction';
import Transactions from '../InfoClient/Transactions';

const MainPage = () => {
  const clientByPhoneNumber = useSelector(getStateClientByPhoneNumber);
  const isAuthManager = useSelector((state) => state.isAuthManager);
  const isQuerySend = useSelector((state) => state.isQuerySend);
  const { transactions } = clientByPhoneNumber || [];

  return (
    <div>
      {isAuthManager ? <InfoClient /> : null}
      <div className={style.containerTransactions}>
        {isQuerySend ? <Transactions transactions={transactions} /> : null}
        {isQuerySend ? <SelectedTransaction /> : null}
      </div>
    </div>
  );
};
export default MainPage;
