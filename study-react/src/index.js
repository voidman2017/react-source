import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import { HashRouter as Router } from 'react-router-dom'

/* 
var child1 = React.createElement('li', null, 'First Text Content');
var child2 = React.createElement('li', null, 'Second Text Content');
var child3 = React.createElement('li', null, 'Third Text Content');
var root = React.createElement('ul', { className: 'my-list', style: { color: 'red' } }, child1, child2, child3);
ReactDOM.render(
    root,
    document.getElementById('app')
);
console.log(root)
 */


const reactRender = ReactDOM.render(
    <Router><App /></Router>,
    document.getElementById('app'),
    () => { console.log('应用启动') }
);

console.log(reactRender)




module.hot && module.hot.accept();


