import React, { Component } from 'react';
import {
  Grid,
  Row,
  Col,
  FormGroup,
  ControlLabel,
  FormControl,
  Navbar
  } from 'react-bootstrap';
import { markdown } from 'markdown';

import TextArea from './TextArea';

function CustomNavBar(props) {
  return (
    <Navbar>
      <Navbar.Header>
        <Navbar.Brand>
          {props.value}
        </Navbar.Brand>
      </Navbar.Header>
    </Navbar>
  );
}

export default class PageGrid extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: '',
      md: ''
    }

    this.handleTextValue = this.handleTextValue.bind(this);
  }

  handleTextValue(value) {
    const md = markdown.toHTML(value);
    this.setState({
      text: value,
      md: md
    });
  }

  render() {
    return (
        <Grid>
          <Row>
            <Col lg={5}>
              <CustomNavBar value={"Write MarkDown"} />
              <TextArea
                value={this.state.text}
                onTextChange={this.handleTextValue}
              />
            </Col>
            <Col lg={1}></Col>
            <Col lg={5}>
              <CustomNavBar value={"MarkDowned"} />
              <div dangerouslySetInnerHTML={{__html: this.state.md}} />
            </Col>
          </Row>
        </Grid>
    );
  }
}
