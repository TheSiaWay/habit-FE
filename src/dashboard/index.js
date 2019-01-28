import React, {Component} from 'react';
import Nav from './../nav/index';
import GoalNav from './../goalNav/index';

export default class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      user: window.user,
      isModalOpen: false,
      input: ''
    }
  }

  closeModal() {
    this.setState({
      isModalOpen: false
    })
  }

  render() {
    const { user, isModalOpen } = this.state;
    return (
      <div>
        <Nav user={user}/>
        <GoalNav
        />
        Dashboard content
      </div>
    )
  }
}