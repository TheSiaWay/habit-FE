import React, {Component} from 'react';
import Nav from './../nav/index';
import LoginForm from './../loginForm/index';
import './index.css';
export default class Welcome extends Component {
  constructor() {
    super();
    this.state = {
      user: null,
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

  setUser() {
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
    const { user, input, isModalOpen, type } = this.state;
    return <div>
      <div className="welcome">
        <Nav />
        <h1 className="welcome--header">Track all your Goals & Habits in one place.</h1>
        <p className="welcome--header__paragraph">Get organized and track anything you want to build the perfect routine. Stay motivated with helpful charts and achieve your goals.</p>
        <button className="welcome--button welcome--button__primary"
          onClick={() => this.showLoginForm('Sign Up')}>Sign Up for Free</button>
        <button className="welcome--button"
          onClick={() => this.showLoginForm('Sign In')}>Sign In</button>
        <h2>Track anything you want... any way you want</h2>
      </div>

      <LoginForm
        type={type}
        input={input}
        setInput={(e) => this.setInput(e)}
        isModalOpen={isModalOpen}
        openModal={() => this.openModal()}
        closeModal={() => this.closeModal()}
        signIn={(e) => this.setUser(e)}
      />
    </div>
  }
}