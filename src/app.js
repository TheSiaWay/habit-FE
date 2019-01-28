import React from 'react';
import ReactDOM from 'react-dom';

import HabitList from './habitList/index';
import Nav from './nav/index';
import { Welcome } from './welcome/index';

import './app.css';

const App = () => {
  return <div>
    <Welcome />
  </div>
};

ReactDOM.render(<App />, document.getElementById('app'));