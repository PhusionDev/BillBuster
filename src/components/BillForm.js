import React, { Component } from 'react';
import { View, Text, Picker } from 'react-native';
import { connect } from 'react-redux';
import { CardSection, Input } from './common';
import { billUpdate } from '../actions';

import {
  BILL_ONE_TIME,
  BILL_DAYS,
  BILL_WEEKS,
  BILL_MONTHS,
  BILL_YEARS
} from '../reducers/types';

class BillForm extends Component {
  render() {
    return (
      <View>
        <CardSection>
          <Input
            label="Name"
            placeholder="Rent"
            value={this.props.name}
            onChangeText={value => this.props.billUpdate({prop: 'name', value})}
          />
        </CardSection>

        <CardSection style={{ flexDirection: 'column' }}>
          <Text style={styles.pickerTextStyle}>Select Bill Type</Text>
          <Picker
            selectedValue={this.props.type}
            onValueChange={value => this.props.billUpdate({ prop: 'type', value })}
          >
            <Picker.Item label={BILL_ONE_TIME} value={BILL_ONE_TIME} />
            <Picker.Item label={BILL_DAYS} value={BILL_DAYS} />
            <Picker.Item label={BILL_WEEKS} value={BILL_WEEKS} />
            <Picker.Item label={BILL_MONTHS} value={BILL_MONTHS} />
            <Picker.Item label={BILL_YEARS} value={BILL_YEARS} />
          </Picker>
        </CardSection>

        <CardSection>
          <Input
            label="Frequency"
            placeholder="1"
            value={this.props.spread}
            onChangeText={value => this.props.billUpdate({prop: 'spread', value})}
          />
        </CardSection>
      </View>
    );
  }
}

const mapStateToProps = state => {
  const { name, type, date, spread, active } = state.billForm;

  return { name, type, date, spread, active };
};

const styles = {
  pickerTextStyle: {
    fontSize: 18,
    paddingLeft: 20
  }
};

export default connect(mapStateToProps, { billUpdate })(BillForm);