import { useDispatch, useSelector } from 'react-redux';
import { Table } from 'react-bootstrap';
import { detailByTransaction } from './helper';

import { getStateClientByIdUser } from '../../MainPage/selectors';
import style from './Transactions.module.css';
import TransactionDate from '../TransactionDate';

const Transactions = () => {
  const dispatch = useDispatch();
  const transactionsClient = useSelector(getStateClientByIdUser);

  return transactionsClient ? (
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
          {transactionsClient.map((item) => {
            return (
              <tr
                key={item.id}
                onClick={() => dispatch(detailByTransaction(item.id))}
              >
                <TransactionDate dateTransaction={item.transDt} />
                <td>{item.operInfo}</td>
                <td>{item.originalAmount}</td>
                <td>{item.originalCurrencyValue}</td>
                {
                  <td>
                    {item.userId === item.id ? 'Получатель' : 'Отправитель'}
                  </td>
                }
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
