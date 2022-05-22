import { useDispatch } from 'react-redux';
import { getSelectedTransactionAction } from '../../../store/createActions';
import style from './Transactions.module.css';

const Transactions = ({ transactions }) => {
  const dispatch = useDispatch();
  return (
    <div className={style.container}>
      {transactions.map((transaction, index) => {
        return (
          <button
            className={style.btnTransaction}
            key={transaction.idTransactions}
            onClick={() => {
              dispatch(
                getSelectedTransactionAction(transaction.idTransactions)
              );
            }}
          >
            {index + 1}
          </button>
        );
      })}
    </div>
  );
};
export default Transactions;
