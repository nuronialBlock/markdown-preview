import React, { Component } from 'react';
import TextField from 'material-ui/TextField';

export default class TextArea extends Component {
  constructor(props) {
    super(props);
    this.ChangeInValue = this.ChangeInValue.bind(this);
  }

  ChangeInValue(value) {
    this.props.onChangeValue(value);
  }

  render() {
    return (
      
    );
  }
}
