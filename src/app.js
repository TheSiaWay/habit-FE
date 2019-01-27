import React from 'react';
import ReactDOM from 'react-dom';

import HabitList from './habitList/index';
import Nav from './nav/index';

import './app.css';

const App = () => {
  return <div>
    <Nav />
    <HabitList />
  </div>
};

ReactDOM.render(<App />, document.getElementById('app'));