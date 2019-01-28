import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from "react-router-dom";
import Welcome from './welcome/index';
import HabitList from './habitList/index';
import Dashboard from './dashboard/index';

import './app.css';
window.user = null;
const App = () => (
  <BrowserRouter>
    <div>
      <Route exact path="/" component={Welcome}></Route>
      <Route path="/dashboard" component={Dashboard}></Route>
    </div>
  </BrowserRouter>
)

ReactDOM.render(<App />, document.getElementById('app'));