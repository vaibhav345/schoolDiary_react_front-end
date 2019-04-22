import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Switch, Route } from "react-router-dom";

const Student = () => <div>
                    <form action="studentProfile.html">
                    <hr></hr>
                      <label>Student login</label>
                      <input type="text" className="form-control" placeholder="Enter Username"/>
                      <input type="password" className="form-control" placeholder="Enter your Password"/>
                      <Link to='/'><button className="btn submit-btn">Submit</button></Link>
                    </form>
                    <hr></hr>
                    <Link to="/" className="pull-left">Forget You Password?</Link>
                    <Link to="/register" className="float-right">Click Here to Register</Link>
                </div>;
const Teacher = () => <div>
                    <form action="studentProfile.html">
                    <hr></hr>
                      <label>Teacher login</label>
                      <input type="text" className="form-control" placeholder="Enter Username"/>
                      <input type="password" className="form-control" placeholder="Enter your Password"/>
                      <Link to='/'><button className="btn submit-btn">Submit</button></Link>
                    </form>
                    <hr></hr>
                    <Link to="/" className="pull-right">Forget You Password?</Link>
                    <Link to="/register" className="float-right">Click Here to Register</Link>
                </div>;

export class Login extends Component {
  render() {
    const { path } = this.props.match;

    return (
      <div>
        <div className="container up">
          <div className="row">
            <div className="col-md-offset-3 col-md-6">
              <div className="school-select">
                <div className="links">
                  <Link to={`${path}`} className="link">Student Login</Link>
                  <Link to={`${path}/teacher`} className="link" className="float-right">Teacher Login</Link>
                </div>

                <div className="tabs">
                  <Switch>
                    <Route path={`${path}`} exact component={Student} />
                    <Route path={`${path}/teacher`} component={Teacher} />
                  </Switch>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Login
