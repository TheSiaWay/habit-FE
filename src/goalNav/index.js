import React, { Component } from 'react';
import NewGoal from './../newGoal/index';

export default class GoalNav extends Component {
  constructor() {
    super();
    this.state = {
      isModalOpen: false,
      goal: '',
      displayStepTwo: false,
      gpWeek: '',
      startDate: ''
    }
  }

  closeModal() {
    this.setState({
      isModalOpen: false,
      goal: '',
      displayStepTwo: false,
      gpWeek: '',
      startDate: ''
    })
  }

  openGoalModal() {
    this.setState({
      isModalOpen: true
    })
  }

  handleInput(e) {
    const { type } = e.target.dataset;
    const val = e.target.value;
    this.setState({
      [type]: val
    })
  }

  handleNext() {
    if (this.state.goal.length) {
      this.setState({
        displayStepTwo: true
      })
    }
  }

  handlePrev() {
    this.setState({
      displayStepTwo: false
    })
  }

  handleGoalPick(e) {
    const value = e.target.innerText;
    this.setState({
      goal: value
    }, () => this.handleNext());
  }

  render() {
    const { isModalOpen, goal, displayStepTwo, gpWeek, startDate } = this.state;
    return (
      <div>
        <h2>
          Daily Goals:
          <button onClick={() => this.openGoalModal()}>Add a New Habit</button>
        </h2>

        <NewGoal
          isModalOpen={isModalOpen}
          goal={goal}
          gpWeek={gpWeek}
          startDate={startDate}
          displayStepTwo={displayStepTwo}
          closeModal={() => this.closeModal()}
          handleInput={(e) => this.handleInput(e)}
          handleNext={() => this.handleNext()}
          handlePrev={() => this.handlePrev()}
          handleGoalPick={(e) => this.handleGoalPick(e)}
        />
      </div>
    )
  }
}