import React, { Component } from 'react';
import { connect } from 'react-redux';
import { billUpdate, billCreate } from '../actions';
import { Card, CardSection, Button } from './common';
import BillForm from './BillForm';

class BillCreate extends Component {
  render() {
    return (
      <Card>
        <BillForm />
      </Card>
    );
  }
}

const mapStateToProps = (state) => {
  const { name, type, spread, date, value } = state.billForm;

  return { name, type, spread, date, value };
};

export default connect(mapStateToProps,
  {
    billUpdate,
    billCreate
  })(BillCreate);