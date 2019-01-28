import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from "react-router-dom";
import Welcome from './welcome/index';
import HabitList from './habitList/index';

import './app.css';
const App = () => (
  <BrowserRouter>
    <div>
      <Route exact path="/" component={Welcome}></Route>
      <Route path="/test" component={HabitList}></Route>
    </div>
  </BrowserRouter>
)

ReactDOM.render(<App />, document.getElementById('app'));