import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import { HashRouter as Router } from 'react-router-dom'


ReactDOM.render(<Router><App /></Router>, document.getElementById('app'));

module.hot && module.hot.accept();