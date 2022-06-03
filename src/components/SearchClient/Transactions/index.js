import { useDispatch, useSelector } from 'react-redux';
import { Table } from 'react-bootstrap';
import { getDetailTransaction } from '../../useAxios';
import { isCheckDetailInfoAction } from '../../../store/createActions';
import { getStateClientByIdUser } from '../../MainPage/selectors';
import style from './Transactions.module.css';

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
                onClick={() => {
                  dispatch(getDetailTransaction(item.id));
                  dispatch(isCheckDetailInfoAction(true));
                }}
              >
                <td>
                  {item?.transDt.date.year}-{item?.transDt.date.month}-
                  {item?.transDt.date.day}-{item?.transDt.time.hour}-
                  {item?.transDt.time.minute}-{item?.transDt.time.second}
                </td>
                <td>{item.operType}</td>
                <td>{item.originalAmount}</td>
                <td>{item.originalCurrencyValue}</td>
                {
                  <td>
                    {item.userId === item.id ? ' Отправитель' : 'Получатель'}
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
