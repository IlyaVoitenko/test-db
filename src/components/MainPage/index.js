import { useSelector } from 'react-redux';
import InfoClient from '../InfoClient';
import style from './MainPage.module.css';
import SelectedTransaction from '../InfoClient/SelectedTransaction';
import Transactions from '../InfoClient/Transactions';

const MainPage = () => {
  const isAuth = useSelector((state) => state.authClient);
  const { transactions } = isAuth || [];
  return (
    <div>
      {isAuth ? <InfoClient client={isAuth} /> : null}
      <div className={style.containerTransactions}>
        {isAuth ? <Transactions transactions={transactions} /> : null}
        {isAuth ? <SelectedTransaction /> : null}
      </div>
    </div>
  );
};
export default MainPage;
