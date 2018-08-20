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
  validFormData() {
    if (this.validName()) {
      if (this.validDate()) {
        if (this.validSpread()) {
          if (this.validRecurring()) {
            if (this.validRecurringType()) {
              return true;
            }
          }
        }
      }
    }

    return false;
  }
  validName() {
    if (this.props.name !== '' ) {
      return true;
    }
    return false;
  }
  validDate() {
    if (this.props.date !== '') {
      return true;
    }
    return false;
  }
  validSpread() {
    if (this.props.spread !== '') {
      let number = Number.parseInt(this.props.spread)
      if (!Number.isNaN(number)) {
        if (number > 0) {
          return true;
        }
      }
    }
    return false;
  }
  validRecurring() {
    if (this.props.recurring === true || this.props.recurring === false) {
      return true;
    }
    return false;
  }
  validRecurringType() {
    switch (this.props.recurring_type) {
      case RECURRING_DAYS:
        return true;
      case RECURRING_WEEKS:
        return true;
      case RECURRING_MONTHS:
        return true;
      case RECURRING_YEARS:
        return true;
      default:
        return false;
    }
  }

  buttonOneTime() {
    this.props.billUpdate({prop: 'recurring', value: false});
    this.props.billUpdate({prop: 'spread', value: '1' })
  }

  buttonRecurring() {
    this.props.billUpdate({prop: 'recurring', value: true})
  }

  buttonCreateBill() {
    alert(this.validFormData());
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

  billTypeRecurring() {
    return (
      <CardSection style={{ flexDirection: 'column' }}>
        <CardSection>
          <Text>Recurring Every</Text>
        </CardSection>

        <CardSection style={{ flexDirection: 'row' }}>
          <Input
            style={styles.recurringInputStyle}
            placeholder="1"
            value={this.props.spread}
            onChangeText={value => this.props.billUpdate({ prop: 'spread', value })}
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
      </CardSection>
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

        {this.billType()}

        <CardSection>
          <Button onPress={() => {this.buttonCreateBill()}}>
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