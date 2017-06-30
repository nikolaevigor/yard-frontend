/* eslint-disable react/jsx-filename-extension */
// @flow

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './App.css';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
