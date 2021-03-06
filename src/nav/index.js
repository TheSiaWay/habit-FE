import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import LoginForm from './../loginForm/index';
import './index.css';
class Nav extends Component {
  constructor(props) {
    super(props);
    const user = props.user;
    console.log(user);
    this.state = {
      user,
      input: '',
      isModalOpen: false,
      type: ''
    }
  }

  signOut() {
    this.setState({
      user: null
    });
    window.user = null;
    window.location.href = '/';
  }

  closeModal() {
    this.setState({
      isModalOpen: false
    });
  }

  setUser() {
    window.user = { name: this.state.input };
    this.setState((prevState) => {
      return {
        user: {
          name: prevState.input
        },
        isModalOpen: false,
        input: ''
      }
    });
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
      <Link to="/">
        <h1>Habits</h1>
      </Link>
      <ul className="nav--list">
        { user ?
          <Link to="/dashboard">
            <li className="nav--item">Dashboard</li>
          </Link>
          : ''
        }
        { user ?
          <Link to="/weekly-stats">
            <li className="nav--item">Weekly Stats</li>
          </Link>
          : ''
        }
        <li className="nav--item"
          onClick={() => this.showLoginForm('Sign In')}
        >{user ? user.name : 'Sign In'}</li>
       {
          user ?
          <li className="nav--item"
            onClick={() => this.signOut()}>
            Sign Out
          </li> :
          <li className="nav--item"
              onClick={() => this.showLoginForm('Sign Up')}>
            Sign Up
          </li>
       }

        <LoginForm
          type={type}
          input={input}
          setInput={(e) => this.setInput(e)}
          isModalOpen={isModalOpen}
          closeModal={() => this.closeModal()}
          signIn={(e) => this.setUser(e)}
        />
      </ul>
    </nav>
  }
}

export default Nav;