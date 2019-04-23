import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import Axios from 'axios';

{/* Default url for the Java back-end. Only this will change if the back-end url changes. */}
Axios.defaults.baseURL = 'http://localhost:8080';

ReactDOM.render(<App />, document.getElementById('root'));

// The serviceWorker might not be needed. Review this before publishing the application.
serviceWorker.unregister();
