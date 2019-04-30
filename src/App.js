import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Home from './components/home/Home'
import Login from './components/login/Login'
import RegisterStudent from './components/register/RegisterStudent'
import RegisterTeacher from './components/register/RegisterTeacher'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Route exact path="/" render={props => (
              /* React Fragments: More components can be added here for the home page of the application. */
              <React.Fragment>
                <Home></Home>
            </React.Fragment>
            )} />
            <Route path="/login" component={Login}/>
            <Route path="/registerStudent" component={RegisterStudent}/>
            <Route path="/registerTeacher" component={RegisterTeacher}/>
          </div>
        </div>
      </Router>  
    );
  }
}

export default App;
