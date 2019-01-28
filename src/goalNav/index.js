import React, { Component } from 'react';
import NewGoal from './../newGoal/index';

export default class GoalNav extends Component {
  constructor() {
    super();
    this.state = {
      isModalOpen: false,
      input: ''
    }
  }

  closeModal() {
    this.setState({
      isModalOpen: false
    })
  }

  openGoalModal() {
    this.setState({
      isModalOpen: true
    })
  }

  render() {
    const { isModalOpen } = this.state;
    return (
      <div>
        <h2>
          Daily Goals:
          <button onClick={() => this.openGoalModal()}>Add a New Habit</button>
        </h2>

        <NewGoal
          isModalOpen={isModalOpen}
          closeModal={() => this.closeModal()}
        />
      </div>
    )
  }
}