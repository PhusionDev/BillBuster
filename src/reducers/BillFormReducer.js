import {
  BILL_UPDATE,
  BILL_CREATE
  //EMPLOYEE_SAVE_SUCCESS
} from '../actions/types';

import {
  RECURRING_MONTHS
} from './types';

const INITIAL_STATE = {
  name: '',
  date: '',
  spread: '1',
  recurring: false,
  recurring_type: RECURRING_MONTHS,
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