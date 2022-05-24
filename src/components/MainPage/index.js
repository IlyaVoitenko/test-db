import { useSelector } from 'react-redux';
import style from './MainPage.module.css';
import InfoClient from '../InfoClient';
import SelectedTransaction from '../InfoClient/SelectedTransaction';
import Transactions from '../InfoClient/Transactions';

const MainPage = () => {
  const clientByPhoneNumber = useSelector((state) => state.clientByPhoneNumber);
  const isAuthManager = useSelector((state) => state.isAuthManager);
  const isQuerySend = useSelector((state) => state.isQuerySend);
  console.log('isQuerySend :', isQuerySend);
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
