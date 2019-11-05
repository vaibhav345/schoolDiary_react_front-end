import React, { Component } from 'react';
import axios from 'axios';
import { error } from 'util';

export class RegisterStudent extends Component {
    constructor() {
        super();
        this.state = {
          fields: {},
          error
          //errors: {} Need to implement it later (Validations)
        }
    
        this.onChange = this.onChange.bind(this);
        this.submituserRegistrationForm = this.submituserRegistrationForm.bind(this);
      };
    
      onChange(e) {
        let fields = this.state.fields;
        fields[e.target.name] = e.target.value;

        let error = this.state.error;
        this.setState({
          fields,
          error
        });
      }
    
      async submituserRegistrationForm(e) {
        e.preventDefault();
    
        this.setState(this.state.fields);
        const { name, email, user_name, password } = this.state.fields;
        
        // The variable name should match at the back-end.
        axios.post('/students/register', { name, email, user_name, password })
              .then((response) => {
                console.log("Results: " + response.data);
              }).catch((error) => {
                console.log(JSON.stringify(error.response.data));
              })
        }
    
      render() {
        return (
          <div>
            <div className="school-select">
              <h2 className="page-header">Register Student</h2>
              <form onSubmit={this.submituserRegistrationForm}>
                <div className="form-group">
                    <lable>Name</lable>
                    <input type="text" name="name" id="name" value={this.state.name}
                        onChange={this.onChange} autoComplete="name" className="form-control"/>
                </div>
                <div className="form-group">
                    <lable>Email</lable>
                    <input type="text" name="email" id="email" value={this.state.email}
                        onChange={this.onChange} autoComplete="email" className="form-control"/>
                </div>
                <div className="form-group">
                    <lable>User Name</lable>
                    <input type="text" name="user_name" id="user_name" value={this.state.user_name}
                        onChange={this.onChange} autoComplete="user_name" className="form-control"/>
                </div>
                <div className="form-group">
                    <lable>Password</lable>
                    <input type="text" name="password" id="password" value={this.state.password}
                        onChange={this.onChange} className="form-control"/>
                </div>
                <div>
                    <button className="btn submit-btn">Submit</button>{' '}
                </div>
              </form>
            </div>
          </div>
        )
      }
}

export default RegisterStudent
