import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import state from './Redux/State'





ReactDOM.render(<App state = {state}/>, document.getElementById('root'));


serviceWorker.unregister();
