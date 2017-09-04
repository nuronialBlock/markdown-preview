import React, { Component } from 'react';
import {
  FormGroup,
  ControlLabel,
  FormControl,
  Navbar
  } from 'react-bootstrap';

export default class TextArea extends Component {
  constructor(props) {
    super(props);
    this.changeInText = this.changeInText.bind(this);
  }

  changeInText(e) {
    this.props.onTextChange(e.target.value);
  }

  render() {
    return (
      <form>
        <FormGroup controlId="formControlsTextarea">
         <FormControl
           componentClass="textarea"
           value={this.props.value}
           onChange={this.changeInText}
         />
        </FormGroup>
      </form>
    );
  }
}
