import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ListView } from 'react-native';

class BillList extends Component {
  render() {
    return (
      <ListView />
    );
  }
};

const mapStateToProps = state => {

};

export default BillList;