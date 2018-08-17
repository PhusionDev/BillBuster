import {
  BILL_NAME_CHANGED,
  BILL_TYPE_CHANGED,
  BILL_SPREAD_CHANGED,
  BILL_DATE_CHANGED
} from '../actions/types';

const INITIAL_STATE = {
  name: '',
  type: null,
  spread: 1,
  date: '',
  active: true
};

export default (state = INITIAL_STATE, action) => {
  console.log(action);

  switch (action.type) {
    case BILL_NAME_CHANGED:
      return { ...state, name: action.payload }
    case BILL_TYPE_CHANGED:
      return { ...state, type: action.payload }
    case BILL_SPREAD_CHANGED:
      return { ...state, spread: action.payload }
    case BILL_DATE_CHANGED:
      return { ...state, date: action.payload }
    default:
      return state;
  }
};