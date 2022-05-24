import { useDispatch, useSelector } from 'react-redux';
import { Table } from 'react-bootstrap';
import { getSelectedTransactionAction } from '../../../store/createActions';
import { getStateClientByPhoneNumber } from '../../MainPage/selectors';
import style from './Transactions.module.css';

const Transactions = ({ transactions }) => {
  const dispatch = useDispatch();
  const selectedClient = useSelector(getStateClientByPhoneNumber);
  const { firstName, lastName } = selectedClient;
  return (
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
          {transactions.map((transaction, index) => {
            return (
              <tr
                onClick={() =>
                  dispatch(
                    getSelectedTransactionAction(transaction.idTransactions)
                  )
                }
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
  );
};
export default Transactions;
