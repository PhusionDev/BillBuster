import { combineReducers } from 'redux';
import IncomesReducer from './IncomesReducer';
import BillsReducer from './BillsReducer';

export default combineReducers({
  bills: BillsReducer,
  income: IncomesReducer
});