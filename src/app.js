import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from "react-router-dom";
import Welcome from './welcome/index';
import Stats from './stats/index';
import Dashboard from './dashboard/index';

import './app.css';
window.user = null;
const App = () => (
  <BrowserRouter>
    <div>
      <Route exact path="/" component={Welcome}></Route>
      <Route path="/dashboard" component={Dashboard}></Route>
      <Route path="/weekly-stats" component={Stats}></Route>
    </div>
  </BrowserRouter>
)

ReactDOM.render(<App />, document.getElementById('app'));