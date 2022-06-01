import { useDispatch, useSelector } from 'react-redux';
import { Table } from 'react-bootstrap';
import {
  getSelectedTransactionAction,
  isCheckDetailInfoAction,
} from '../../../store/createActions';
import { getStateClientByIdUser } from '../../MainPage/selectors';
import style from './Transactions.module.css';

const Transactions = () => {
  const dispatch = useDispatch();
  const clientByIdUser = useSelector(getStateClientByIdUser);
  const { originalAmount, originalCurrencyValue, operType, otherId } =
    clientByIdUser || [];
  return clientByIdUser ? (
    <div className={style.container}>
      <Table hover>
        <thead>
          <tr>
            <th>Date</th>
            <th>Operation</th>
            <th>Quantity</th>
            <th>Currency</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr
            //  key={transaction.idTransactions}
            onClick={() => {
              // dispatch(
              //   getSelectedTransactionAction(transaction.idTransactions)
              // );
              //dispatch(isCheckDetailInfoAction(true));
            }}
          >
            <td>
              {clientByIdUser?.transDt.date.year}-
              {clientByIdUser?.transDt.date.month}-
              {clientByIdUser?.transDt.date.day}-
              {clientByIdUser?.transDt.time.hour}-
              {clientByIdUser?.transDt.time.minutes}-
              {clientByIdUser?.transDt.time.seconds}
            </td>
            <td>{operType}</td>
            <td>{originalAmount}</td>
            <td>{originalCurrencyValue}</td>
            <td>{otherId.length !== 0 ? ' Отправитель' : 'Получатель'}</td>
          </tr>
          {/* {clientByIdUser.map((transaction) => {
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
                <td>{otherName}</td>
                <td></td>
                <td>{transaction.quantity}</td>
                <td>{transaction.currency}</td>
              </tr>
            );
          })} */}
        </tbody>
      </Table>
    </div>
  ) : (
    <span> Number phone of client is not found</span>
  );
};
export default Transactions;
