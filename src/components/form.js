import React, { Component } from 'react';
import { Form, Text, Radio, RadioGroup, Select } from 'react-form';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import databaseRef from '../config/firebase';
import '../App.css';

class MyForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(values) {
    values = { ...values, timestamp: new Date().toISOString() };
    console.log(values);
    databaseRef.push(values);
  }
  render() {
    const branches = [
      {
        label: 'EC',
        value: 'EC',
      },
      {
        label: 'CSE',
        value: 'CSE',
      },
      {
        label: 'ME',
        value: 'ME',
      },
    ];

    return (
      <div className="App">
        <Form onSubmit={this.handleSubmit}>
          {formApi => (
            <form onSubmit={formApi.submitForm} id="form2">
              <div className="form-group">
                <label htmlFor="name">Name  </label>
                <Text required field="name" id="name" />
              </div>
              <div className="form-group">
                <label htmlFor="batch">batch</label>
                <Text required field="batch" id="batch" />
              </div>
              <div className="form-group">
                <label htmlFor="currentCompany">Current Company</label>
                <Text required field="currentCompany" id="currentCompany" />
              </div>
              <div className="form-group">
                <label htmlFor="designation">designation</label>
                <Text required field="designation" id="designation" />
              </div>
              <div className="form-group">
                <label htmlFor="mobile">mobile</label>
                <Text required field="mobile" id="mobile" />
              </div>
              <div className="form-group">
                <label htmlFor="email">email</label>
                <Text required field="email" id="email" />
              </div>
              <div className="form-group">
                <label htmlFor="address">address</label>
                <Text required field="address" id="address" />
              </div>
              <div className="form-group">
                <RadioGroup field="gender" >
                  <label htmlFor="male" className="mr-2">Male</label>
                  <Radio value="male" id="male" className="mr-3 d-inline-block" />
                  <label htmlFor="female" className="mr-2">Female</label>
                  <Radio value="female" id="female" className="d-inline-block" />
                </RadioGroup>
              </div>
              <div className="form-group">
                <Select field="branch" id="branch" options={branches} className="mb-4" />
              </div>
              <button type="submit" className="mb-4 btn btn-primary">
                Submit
              </button>
            </form>
    )}
        </Form>
      </div>
    );
  }
}

export default MyForm;
