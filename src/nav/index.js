import React, { Component } from 'react';

import LoginForm from './../loginForm/index';
class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        name: 'TestUserName'
      },
      input: '',
      isModalOpen: false,
      type: ''
    }
  }

  signOut() {
    this.setState({
      user: null
    });
  }

  closeModal() {
    this.setState({
      isModalOpen: false
    });
  }

  setUser(e) {
    e.preventDefault();
    this.setState((prevState) => {
      return {
        user: {
          name: prevState.input
        },
        isModalOpen: false,
        input: ''
      }
    })
  }

  showLoginForm(type) {
    this.setState({
      isModalOpen: true,
      type
    });
  }

  setInput(e) {
    const input = e.target.value;
    this.setState({
      input
    });
  }

  render() {
    const { user, input, isModalOpen, type} = this.state;
    return <nav>
      <h1>Habits</h1>
      <ul>
        <li>New Habit</li>
        <li
          onClick={() => this.showLoginForm('Sign In')}
        >{user ? user.name : 'Sign In'}</li>
       {
          user ?
          <li
            onClick={() => this.signOut()}>
            Sign Out
          </li> :
          <li
              onClick={() => this.showLoginForm('Sign Up')}>
            Sign Up
          </li>
       }

        <LoginForm
          type={type}
          input={input}
          setInput={(e) => this.setInput(e)}
          isModalOpen={isModalOpen}
          openModal={() => this.openModal()}
          closeModal={() => this.closeModal()}
          signIn={(e) => this.setUser(e)}
        />


      </ul>
    </nav>
  }
}

export default Nav;