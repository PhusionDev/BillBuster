import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ListView, View, Text } from 'react-native';
import Bill from './Bill';

class BillList extends Component {
  render() {
    return (
      <View>
        <Text>Hi</Text>
      </View>
    );
  }
};

const mapStateToProps = state => {

};

export default BillList;