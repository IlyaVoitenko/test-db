import { useSelector } from 'react-redux';
import style from './SelectedTransaction.module.css';
import { getStateClientByPhoneNumber } from '../../MainPage/selectors';
import { Table } from 'react-bootstrap';

const SelectedTransaction = () => {
  const selectedTransaction = useSelector((state) => state.selectedTransaction);
  const clientByPhoneNumber = useSelector(getStateClientByPhoneNumber);
  const { firstName, lastName } = clientByPhoneNumber || {};
  const {
    transactionDate,
    idTransactions,
    quantity,
    currency,
    locationTo,
    status,
    locationFrom,
  } = selectedTransaction || {};
  return (
    <div className={style.container}>
      <span>Deatail info :</span>
      <Table>
        <tbody>
          <tr>
            <td>ID :</td>
            <td>{idTransactions}</td>
          </tr>
          <tr>
            <td>firstName :</td>
            <td>{firstName}</td>
          </tr>
          <tr>
            <td>lastName :</td>
            <td>{lastName}</td>
          </tr>
          <tr>
            <td>Q-ty :</td>
            <td>{quantity}</td>
          </tr>
          <tr>
            <td>Currency :</td>
            <td>{currency}</td>
          </tr>
          <tr>
            <td>location From :</td>
            <td>{locationFrom}</td>
          </tr>
          <tr>
            <td>location To :</td>
            <td>{locationTo}</td>
          </tr>
          <tr>
            <td>Date :</td>
            <td>{transactionDate}</td>
          </tr>
          <tr>
            <td>Status :</td>
            <td>{status}</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};
export default SelectedTransaction;
