import React from 'react';
import ReactDOM from 'react-dom';

import 'semantic-ui-css/semantic.min.css'
import './index.css';

import App from './App';
import * as serviceWorker from './serviceWorker';
import { Socket } from 'react-socket-io';
const uri = 'https://socketmapandreduce.herokuapp.com/';
const options = { transports: ['websocket'] };

ReactDOM.render(
  <React.StrictMode>
    <Socket uri={uri} options={options}>
      <App />
    </Socket>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
