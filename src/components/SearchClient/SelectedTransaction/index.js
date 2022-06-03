import { useSelector } from 'react-redux';
import style from './SelectedTransaction.module.css';
import {
  getStateIsCheckDetailInfo,
  getStateSelectedTransaction,
} from './selectors';
import { getStateNameClient } from '../Transactions/selectors';

import { Table } from 'react-bootstrap';

const SelectedTransaction = () => {
  const selectedTransaction = useSelector(getStateSelectedTransaction);
  const isCheckDetailInfo = useSelector(getStateIsCheckDetailInfo);
  const nameClient = useSelector(getStateNameClient);
  const {
    id,
    originalAmount,
    originalCurrencyValue,
    status,
    operInfo,
    transInfo,
  } = selectedTransaction || {};
  console.log(selectedTransaction);

  return isCheckDetailInfo ? (
    <div className={style.container}>
      <span>Deatail info :</span>
      <Table>
        <tbody>
          <tr>
            <td>ID :</td>
            <td>{id}</td>
          </tr>
          <tr>
            <td>Name :</td>
            <td>{nameClient ? nameClient.name : null}</td>
          </tr>
          <tr>
            <td>Q-ty :</td>
            <td>
              {originalAmount} {originalCurrencyValue}
            </td>
          </tr>
          <tr>
            <td>Operation :</td>
            <td>{operInfo}</td>
          </tr>
          <tr>
            <td>Transaction Info :</td>
            <td>{transInfo}</td>
          </tr>
          <tr>
            <td>Date :</td>
            <td>
              {selectedTransaction.transDt
                ? selectedTransaction.transDt.date.year
                : null}
              -
              {selectedTransaction.transDt
                ? selectedTransaction.transDt.date.month
                : null}
              -
              {selectedTransaction.transDt
                ? selectedTransaction.transDt.date.day
                : null}{' '}
              {selectedTransaction.transDt
                ? selectedTransaction.transDt.time.hour
                : null}
              :
              {selectedTransaction.transDt
                ? selectedTransaction.transDt.time.minute
                : null}
              :
              {selectedTransaction.transDt
                ? selectedTransaction.transDt.time.second
                : null}
            </td>
          </tr>
          <tr>
            <td>Status :</td>
            <td>{status}</td>
          </tr>
        </tbody>
      </Table>
    </div>
  ) : null;
};
export default SelectedTransaction;
