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

export default class PageGrid extends Component {
  render() {
    return (
        <Grid>
          <Row>
            <Col lg={5}>
              <Navbar>
                <Navbar.Header>
                  <Navbar.Brand>
                    Write MarkDown
                  </Navbar.Brand>
                </Navbar.Header>
              </Navbar>
              <form>
                <FormGroup controlId="formControlsTextarea">
                 <FormControl
                   componentClass="textarea"
                   placeholder="write markdown"
                 />
                </FormGroup>
              </form>
            </Col>
          </Row>
        </Grid>
    );
  }
}
