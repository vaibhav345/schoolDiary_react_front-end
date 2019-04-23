import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">
          <div className="row">
            <div className="col-md-offset-3 col-md-6">
              <div className="school-select">
                <form>
                  <label>Select School</label>
                  <input list="schoolList" type="text" className="form-control" placeholder="Select School"/>
                  <datalist id="schoolList">
                    {/*TODO: This is just a placeholder. This needs to change */}
                    <option value="School 1"></option>
                    <option value="School 2"></option>
                    <option value="School 3"></option>            
                  </datalist>
                  <Link to="/login"><button className="btn submit-btn">Submit</button></Link>
                  <hr></hr>
                  <Link to="/">Register School</Link>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;