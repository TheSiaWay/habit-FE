import React from 'react';
import Nav from './../nav/index';
import './index.css';

export const Welcome = () => (
  <div className="welcome">
    <Nav />
    <h1 className="welcome--header">Track all your Goals & Habits in one place.</h1>
    <p className="welcome--header__paragraph">Get organized and track anything you want to build the perfect routine. Stay motivated with helpful charts and achieve your goals.</p>
    <button className="welcome--button">Sign Up for Free</button>
    <button className="welcome--button">Sign In</button>

    <h2>Track anything you want... any way you want</h2>
  </div>
);