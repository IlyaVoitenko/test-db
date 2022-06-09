import { getDetailTransaction } from '../../../thunk';
import { isCheckDetailInfoAction } from '../../../../store/createActions';

export function detailByTransaction(id) {
  return (dispatch) => {
    dispatch(getDetailTransaction(id));
    dispatch(isCheckDetailInfoAction(true));
  };
}
