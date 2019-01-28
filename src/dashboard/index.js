import React, {Component} from 'react';
import {isBefore} from 'date-fns';
import Nav from './../nav/index';
import GoalNav from './../goalNav/index';
import './index.css';
export default class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      user: window.user,
      goals: [
        {
          goal: 'Sleep Early',
          startDate: '1/19/19',
          gpWeek: 1
        }
      ]
    }
  }

  addGoal(goal) {
    this.setState((prevState) => ({
      goals: prevState.goals.concat([{...goal, done: false }])
    }));
  }

  getTodayGoals(goals) {
    const today = new Date();
    return goals.filter((goal) => isBefore(new Date(goal.startDate), today))
  }

  render() {
    const { user, goals } = this.state;
    const filteredList = this.getTodayGoals(goals);
    const doneCount = filteredList.filter(goal => goal.done).length;
    return (
      <div className="dashboard">
        <Nav user={user}/>
        <GoalNav
          addGoal={(goal) => this.addGoal(goal)} />
        <header className="dashboard--header">
            <h1>Today: </h1>
            <span>{doneCount} / {filteredList.length}</span>
        </header>
        <table className="dashboard--goals">
          <tbody>
            {filteredList.map((goal, idx) => (
              <tr key={idx}>
                <td>
                  <p>{goal.goal}</p>
                  <span>{goal.gpWeek} per week</span>
                </td>
                <td>Done</td>
                <td>Edit</td>
                <td>Delete</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )
  }
}