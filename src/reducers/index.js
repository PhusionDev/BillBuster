import { combineReducers } from 'redux';
import BillFormReducer from './BillFormReducer';
import BillsReducer from './BillsReducer';

export default combineReducers({
  billForm: BillFormReducer,
  bills: BillsReducer
});