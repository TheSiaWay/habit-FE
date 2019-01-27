import React from 'react';
import ReactDOM from 'react-dom';

import HabitList from './habitList/index';
import './app.css';

const Index = () => {
  return <div className="test">Hello React!</div>
};

ReactDOM.render(<HabitList />, document.getElementById('app'));