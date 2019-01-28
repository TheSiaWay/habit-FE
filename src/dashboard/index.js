import React, {Component} from 'react';
import {isBefore, format} from 'date-fns';
import Nav from './../nav/index';
import {GoalNav} from './../goalNav/index';
import {goalsList} from './../stubbedData/goalsList';
import './index.css';
export default class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      user: window.user,
      goals: [...goalsList],
      isModalOpen: false,
      goal: '',
      displayStepTwo: false,
      gpWeek: '',
      startDate: ''
    }
  }

  addGoal(goal) {
    this.setState((prevState) => {
      const selected = prevState.goals.find(g => g.goal === goal.goal);
      if (selected) {
        return {
          goals: prevState.goals.map(g => {
            if (g.goal === goal.goal) {
              g.gpWeek = goal.gpWeek;
              g.startDate = goal.startDate;
            }
            return g;
          })
        }
      } else {
        return {
          goals: prevState.goals.concat([{ ...goal, done: false }])
        }
      }
    });
  }

  getTodayGoals(goals) {
    const today = new Date();
    return goals.filter((goal) => isBefore(new Date(goal.startDate), today))
  }

  handleEdit(goal) {
    this.setState((prevState) => {
      const selected = prevState.goals.find(g => g.goal === goal)
      return {
        isModalOpen: true,
        displayStepTwo: true,
        goal: selected.goal,
        gpWeek: selected.gpWeek,
        startDate: selected.startDate
      }
    })
  }

  handleDone(goal, status = true) {
    this.setState((prevState) => {
      return {
        goals: prevState.goals.map(g => {
          if (g.goal === goal) {
            g.done = status;
          }
          return g;
        })
      }
    });
  }

  handleDelete(goal) {
    this.setState((prevState) => ({
      goals: prevState.goals.filter(g => g.goal !== goal)
    }));
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
    let val = e.target.value;
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
    const { goal, gpWeek, startDate } = this.state;
    if (gpWeek && startDate) {
      this.addGoal({ goal, gpWeek, startDate });
      this.closeModal();
    }
  }

  formatDate(date) {
    return format(new Date(date), 'YYYY-MM-DD')
  }

  render() {
    const { user, goals, isModalOpen, gpWeek, goal, startDate, displayStepTwo } = this.state;
    const filteredList = this.getTodayGoals(goals);
    const doneCount = filteredList.filter(goal => goal.done).length;
    if (!user) {
      window.location.href = '/';
    }
    return (
      <div className="dashboard">
        <Nav user={user}/>
        <GoalNav
          isModalOpen={isModalOpen}
          goal={goal}
          displayStepTwo={displayStepTwo}
          gpWeek={gpWeek}
          startDate={this.formatDate(startDate)}
          openGoalModal={() => this.openGoalModal()}
          closeModal={() => this.closeModal()}
          handleInput={(e) => this.handleInput(e)}
          handleGoalPick={(e) => this.handleGoalPick(e)}
          handleNext={() => this.handleNext()}
          handlePrev={() => this.handlePrev()}
          handleAddGoal={() => this.handleAddGoal()} />
        <header className="dashboard--header">
            <h1>Today: </h1>
            <span>{doneCount} / {filteredList.length}</span>
        </header>
        {
          filteredList.length === 0 ?
            <div className="zero-state">
              <p>There's no habit added to track today. Please add a new habit using the "Add a New Habit" button at the top.</p>
            </div>
          :
            <table className="dashboard--goals">
              <tbody>
                {filteredList.map((goal, idx) => (
                  <tr key={idx}>
                    <td className="goal--info">
                      <p className={goal.done ? "goal goal--done" : "goal"}>{goal.goal}</p>
                      <span>{goal.gpWeek} per week</span> <br />
                      <span>Started since: {goal.startDate}</span>
                    </td>
                    <td className="btn">
                      {goal.done ?
                        <button
                          className="dashboard--button"
                          onClick={() => this.handleDone(goal.goal, false)}>Undone</button>
                        :
                        <button
                          className="dashboard--button dashboard--button__primary"
                          onClick={() => this.handleDone(goal.goal)}>Done</button>
                      }
                    </td>
                    <td className="btn">
                      <button
                        className="dashboard--button"
                        onClick={() => this.handleEdit(goal.goal)}>Edit</button>
                    </td>
                    <td className="btn">
                      <button
                        className="dashboard--button"
                        onClick={() => this.handleDelete(goal.goal)}>Delete</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
        }
      </div>
    )
  }
}