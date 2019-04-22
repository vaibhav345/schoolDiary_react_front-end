import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Home from './components/home/Home'
import Login from './components/login/Login'
import Register from './components/register/Register'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Route exact path="/" render={props => (
              <React.Fragment>
                <Home></Home>
            </React.Fragment>
            )} />
            <Route path="/login" component={Login}/>
            <Route path="/register" component={Register}/>
          </div>
        </div>
      </Router>  
    );
  }
}

export default App;
