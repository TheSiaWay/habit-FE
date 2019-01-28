import React, {Component} from 'react';
import Nav from './../nav/index';

export default class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      user: window.user
    }
  }

  render() {
    const { user } = this.state;
    return (
      <div>
        <Nav user={user}/>
        Dashboard content
      </div>
    )
  }
}