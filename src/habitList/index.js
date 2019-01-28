import React, { Component } from 'react';
import { WeeklyHabitDisplay } from './../weeklyHabitDisplay/index';
import { format, startOfWeek, addDays, subDays } from 'date-fns';
import { curWeek } from './../stubbedData/statsData';
import './index.css';
export default class HabitList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      habits: curWeek,
      weekInRange: this.buildWeek('01/15/19'),
      daysInWeek: ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT']
    }
  }

  buildWeek(givenDate) {
    const dates = [];
    const day = startOfWeek(new Date(givenDate));
    dates.push(format(day, 'M/D/YY'));
    let increment = 1;
    while (dates.length < 7) {
      const newDate = addDays(new Date(day), increment);
      increment++;
      dates.push(format(newDate, 'M/D/YY'));
    }
    return dates;
  }

  toggleWeek(day, isPrevWeek) {
    let newDate;
    if (isPrevWeek) {
      newDate = subDays(new Date(day), 1);
    } else {
      newDate = addDays(new Date(day), 1);
    }
    const weekInRange = this.buildWeek(newDate);
    this.setState({
      weekInRange
    });
  }

  render() {
    const { habits, weekInRange, daysInWeek } = this.state;
    return (
      <table className="stats-table">
        <thead>
          <tr className="toggler">
            <th colSpan="9">
              <span
                onClick={() => this.toggleWeek(weekInRange[0], true)}>
                Prev
            </span>
              <span
                onClick={() => this.toggleWeek(weekInRange[6], false)}>
                Next
            </span>
            </th>
          </tr>
          <tr className="date-info">
            <th></th>
            {weekInRange.map((day, idx) => (
              <th key={day}>
                <span className="week">{daysInWeek[idx]}</span> <br/>
                <span className="day">{day.substring(0, day.length - 3)}</span>
              </th>
            ))}
          </tr>
        </thead>
        <WeeklyHabitDisplay habits={habits}
          weekInRange={weekInRange} />
      </table>
    )
  }
}