import { useDispatch, useSelector } from 'react-redux';
import { getSelectedTransactionAction } from '../../../store/createActions';
import { getStateClientByPhoneNumber } from '../../MainPage/selectors';
import style from './Transactions.module.css';

const Transactions = ({ transactions }) => {
  const dispatch = useDispatch();
  const selectedClient = useSelector(getStateClientByPhoneNumber);
  console.log('selectedClient :', selectedClient);
  const { firstName, lastName, phoneNumber } = selectedClient;
  return (
    <div className={style.container}>
      {transactions.map((transaction, index) => {
        return (
          <div>
            <p> firstName :{firstName}</p>
            <p> lastName :{lastName}</p>
            <p> phone Number :{phoneNumber}</p>
            <p> quantity :{transaction.quantity}</p>
            <p> currency :{transaction.currency}</p>
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
          </div>
        );
      })}
    </div>
  );
};
export default Transactions;
