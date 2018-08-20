import React, { Component } from 'react';
import { View, Text, Picker } from 'react-native';
import { connect } from 'react-redux';
import { Card, CardSection, Input, Button } from './common';
import { billUpdate } from '../actions';
import DatePicker from 'react-native-datepicker';

import {
  RECURRING_DAYS,
  RECURRING_WEEKS,
  RECURRING_MONTHS,
  RECURRING_YEARS
} from '../reducers/types';

class BillForm extends Component {
  buttonOneTime() {
    this.props.billUpdate({prop: 'recurring', value: false});
  }

  buttonRecurring() {
    this.props.billUpdate({prop: 'recurring', value: true})
  }

  billType() {
    if (this.props.recurring) {
      return this.billTypeRecurring();
    }
  }

  renderDatePicker() {
    return (
      <DatePicker
        mode='date'
        placeholder='select date'
        date={this.props.date}
        confirmBtnText='Confirm'
        cancelBtnText='Cancel'
        format="YYYY-MM-DD"
        minDate="2018-01-01"
        maxDate="2500-12-31"
        onDateChange={value => this.props.billUpdate({ prop: 'date', value })}
      />
    );
  }

  renderBillDate() {
    return (
      <View>
        <CardSection>
          <Text>Bill Date</Text>
        </CardSection>

        <CardSection>
          <CardSection style={{flex: 1, flexDirection: 'column'}}>
            <Text style={{fontSize: 14}}>Month</Text>
            <Input
              placeholder="month"
            />
          </CardSection>
          <CardSection style={{flex: 1, flexDirection: 'column'}}>
            <Text style={{fontSize: 14}}>Day</Text>
            <Input
              placeholder="day"
            />
          </CardSection>
          <CardSection style={{flex: 1, flexDirection: 'column'}}>
            <Text style={{fontSize: 14}}>Year</Text>
            <Input
              placeholder="year"
            />
          </CardSection>
        </CardSection>
      </View>
    );
  }

  billTypeRecurring() {
    return (
      <View style={{ flex: 1}}>
        <CardSection>
          <Text>Recurring Every</Text>
        </CardSection>

        <CardSection >
          <Input
            style={styles.recurringInputStyle}
            placeholder="1"
            value={this.props.spread}
            onChangeText={value => this.props.billUpdate({prop: 'spread', value})}
          />

          <Picker
            style={styles.pickerStyle}
            selectedValue={this.props.recurring_type}
            onValueChange={value => this.props.billUpdate({ prop: 'recurring_type', value })}
          >
            <Picker.Item label={RECURRING_DAYS} value={RECURRING_DAYS} />
            <Picker.Item label={RECURRING_WEEKS} value={RECURRING_WEEKS} />
            <Picker.Item label={RECURRING_MONTHS} value={RECURRING_MONTHS} />
            <Picker.Item label={RECURRING_YEARS} value={RECURRING_YEARS} />
          </Picker>
        </CardSection>
      </View>
    );
  }

  render() {
    return (
      <Card>
        <CardSection>
          <Button onPress={() => {this.buttonOneTime()}}>
            One Time
          </Button>
          <Button onPress={() => {this.buttonRecurring()}}>
            Recurring
          </Button>
        </CardSection>

        <CardSection>
          <Input
            label="Name"
            placeholder="Rent"
            value={this.props.name}
            onChangeText={value => this.props.billUpdate({prop: 'name', value})}
          />
        </CardSection>

        <CardSection>
          {this.renderDatePicker()}
        </CardSection>

        <CardSection>
          {this.billType()}
        </CardSection>

        <CardSection>
          <Button>
            Create New Bill
          </Button>
        </CardSection>
      </Card>
    );
  }
}

const mapStateToProps = state => {
  const { name, date, spread, recurring, recurring_type, active } = state.billForm;

  return { name, date, spread, recurring, recurring_type, active };
};

const styles = {
  pickerTextStyle: {
    fontSize: 18,
    paddingLeft: 20
  },
  recurringInputStyle: {
    flex: 1,
    fontSize: 18
  },
  pickerStyle: {
    flex: 2
  }
};

export default connect(mapStateToProps, { billUpdate })(BillForm);