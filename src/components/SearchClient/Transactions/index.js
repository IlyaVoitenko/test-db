import { useDispatch, useSelector } from 'react-redux';
import { Table } from 'react-bootstrap';
import { isFindClientState } from './selectors';
import {
  getSelectedTransactionAction,
  isCheckDetailInfoAction,
} from '../../../store/createActions';
import { getStateClientByPhoneNumber } from '../../MainPage/selectors';
import style from './Transactions.module.css';

const Transactions = () => {
  const dispatch = useDispatch();
  const selectedClient = useSelector(getStateClientByPhoneNumber);
  const clientByPhoneNumber = useSelector(getStateClientByPhoneNumber);

  const { transactions } = clientByPhoneNumber || [];
  const { firstName, lastName } = selectedClient || {};

  return transactions ? (
    <div className={style.container}>
      <Table hover>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Quantity</th>
            <th>Currency</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction) => {
            return (
              <tr
                key={transaction.idTransactions}
                onClick={() => {
                  dispatch(
                    getSelectedTransactionAction(transaction.idTransactions)
                  );
                  dispatch(isCheckDetailInfoAction(true));
                }}
              >
                <td>{firstName}</td>
                <td>{lastName}</td>
                <td>{transaction.quantity}</td>
                <td>{transaction.currency}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  ) : (
    <span> Number phone of client is not found</span>
  );
};
export default Transactions;
