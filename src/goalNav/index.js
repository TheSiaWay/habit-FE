import React, { Component } from 'react';
import NewGoal from './../newGoal/index';
import './index.css';
export default class GoalNav extends Component {
  constructor(props) {
    super(props);
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

  handleAddGoal() {
    const {goal, gpWeek, startDate} = this.state;
    if (gpWeek.length && startDate.length) {
      this.props.addGoal({goal, gpWeek, startDate});
      this.closeModal();
    }
  }

  render() {
    const { isModalOpen, goal, displayStepTwo, gpWeek, startDate } = this.state;
    return (
      <div className="goals--nav">
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
          addGoal={() => this.handleAddGoal()}
        />
      </div>
    )
  }
}