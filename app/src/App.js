import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import PageGrid from './PageGrid';

export default class App extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     value: ''
  //   };
  //   this.handleChangeValue = this.handleChangeValue.bind(this);
  // }
  //
  // handleChangeValue(value) {
  //   this.setState({
  //     value: value
  //   })
  // }

  render() {
    return (
      <div>
        <PageGrid />
      </div>
    );
  }
}
