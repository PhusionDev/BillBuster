import {
  BILL_UPDATE,
  BILL_CREATE
  //EMPLOYEE_SAVE_SUCCESS
} from '../actions/types';

import {
  BILL_ONE_TIME,
  BILL_DAYS,
  BILL_WEEKS,
  BILL_MONTHS,
  BILL_YEARS
} from './types';

const INITIAL_STATE = {
  name: '',
  type: BILL_ONE_TIME,
  date: '',
  spread: '1',
  active: true
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case BILL_UPDATE:
      return { ...state, [action.payload.prop]: action.payload.value };
    case BILL_CREATE:
      return INITIAL_STATE;
    default:
      return state;
  }
};