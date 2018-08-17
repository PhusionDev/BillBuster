import {
  BILL_UPDATE,
  BILL_CREATE
} from './types';

import { Actions } from 'react-native-router-flux';

export const billUpdate = ({ prop, value }) => {
  return {
    type: BILL_UPDATE,
    payload: { prop, value }
  };
};

export const billCreate = ({ name, date, type, spread, active }) => {
  return {
    type: BILL_CREATE
  };
};