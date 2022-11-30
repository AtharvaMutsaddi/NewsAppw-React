
import './App.css';

import React, { Component } from 'react'
import Nav from './components/Nav';
import News from './components/News';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";
export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Nav></Nav>
          {/* <News pagesize={18} category="general"></News> */}
          <h3>Click in a category to See the Top headlines</h3>
          <Switch>
          <Route exact path="/General">
            {/* KEY ENSURES IT REMOUNTS THE DATA [FETCHES FROM API] */}
          <News key="general" pagesize={18} category="general"></News>
          </Route>
          <Route exact path="/Technology">
          <News key="technology" pagesize={18} category="technology"></News>
          </Route>
          <Route exact path="/Economics">
          <News key="business" pagesize={18} category="business"></News>
          </Route>
        </Switch>
        </Router>

      </div>
    )
  }
}

