
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import routes from './routes'


export default class App extends Component {
  render() {
    return (
      <div className="App">
        <ul className="navs">
          <li><Link to="/ref">RefDemo</Link></li>
          <li><Link to="/forward-ref">ForwardRefDemo</Link></li>
          <li><Link to="/context">ContextDemo</Link></li>
          <li><Link to="/concurrent">ConcurrentModeDemo</Link></li>
          <li><Link to="/suspense">SuspenseDemo</Link></li>
          <li><Link to="/hooks">HooksDemo</Link></li>
          <li><Link to="/children">ChildrenDemo</Link></li>
          <li><Link to="/memo">MemoDemo</Link></li>
          <li><Link to="/portal">PortalDemo</Link></li>
          <li><Link to="/UpdateScheduler">UpdateScheduler</Link></li>
        </ul>
        <div className="contents">{routes}</div>
      </div>
    )
  }
}


