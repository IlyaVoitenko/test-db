import { useSelector } from 'react-redux';
import style from './SelectedTransaction.module.css';

const SelectedTransaction = () => {
  const selectedTransaction = useSelector((state) => state.selectedTransaction);
  const client = useSelector((state) => state.authClient);
  const { firstName, lastName, phoneNumber } = client || {};
  const { transactionDate, idTransactions } = selectedTransaction || {};

  return (
    <div className={style.container}>
      <p>id : {idTransactions}</p>
      <p>
        name :{firstName} {lastName}
      </p>
      <p>phone :{phoneNumber}</p>
      <p>date :{transactionDate}</p>
      <span></span>
    </div>
  );
};
export default SelectedTransaction;
