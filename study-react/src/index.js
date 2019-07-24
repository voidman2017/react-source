import React, { Component, Suspense, Fragment } from 'react';
import ReactDOM from 'react-dom';
import {Comp} from './component.jsx';
class App extends Component{
    render(){
        return(
            <div id="app">this is react app!!!</div>
        )
    }
}
ReactDOM.render(<App tilte="welcome to react" className=""/>, document.getElementById('app'));

module.hot && module.hot.accept();