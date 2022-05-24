import { useSelector } from 'react-redux';
import style from './SelectedTransaction.module.css';
import { getStateClientByPhoneNumber } from '../../MainPage/selectors';

const SelectedTransaction = () => {
  const selectedTransaction = useSelector((state) => state.selectedTransaction);
  const clientByPhoneNumber = useSelector(getStateClientByPhoneNumber);
  const { firstName, lastName, phoneNumber } = clientByPhoneNumber || {};
  const {
    transactionDate,
    idTransactions,
    quantity,
    locationTo,
    locationFrom,
  } = selectedTransaction || {};
  return (
    <div className={style.container}>
      <p>id : {idTransactions}</p>
      <p>
        name :{firstName} {lastName}
      </p>
      <p>phone :{phoneNumber}</p>
      <p>quantity :{quantity}</p>
      <p>locationTo :{locationTo}</p>
      <p>locationFrom :{locationFrom}</p>

      <p>date :{transactionDate}</p>
      <span></span>
    </div>
  );
};
export default SelectedTransaction;
