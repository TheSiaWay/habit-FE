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
      isMOdalOpen: false
    })
  }

  render() {
    const { user, isMOdalOpen } = this.state;
    return (
      <div>
        <Nav user={user}/>
        <GoalNav />
        Dashboard content
      </div>
    )
  }
}