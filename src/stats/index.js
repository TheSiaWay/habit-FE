import React, { Component } from 'react';
import Nav from './../nav/index';
import HabitList from './../habitList/index';

import './index.css';
export default class Stats extends Component {
  constructor() {
    super();
    this.state = {
      user: window.user,
    }
  }

  render() {
    return (
      <div className="stats">
        <Nav user={user} />
        <HabitList />
      </div>
    )
  }

}