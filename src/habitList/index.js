import React, { Component } from 'react';
import { WeeklyHabitDisplay } from './../weeklyHabitDisplay/index';
import { format, startOfWeek, addDays, subDays } from 'date-fns';

// stubbed data
const habits = [
  {
    id: 1,
    name: 'Wake up early',
    checked: ['1/13/19', '1/14/19', '1/18/19']
    // sun, mon, fri
  },
  {
    id: 2,
    name: 'Cook lunch',
    checked: ['1/15/19', '1/16/19', '1/19/19']
    // tues, wed, sat
  },
  {
    id: 3,
    name: 'Journal',
    checked: []
  },
  {
    id: 4,
    name: 'Track time',
    checked: ['1/17/19']
    // thurs
  },
  {
    id: 5,
    name: 'Meditate',
    checked: ['1/17/19', '1/18/19']
  }
]


export default class HabitList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      habits,
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
    console.log(dates);
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
      <table>
        <thead>
          <tr>
            <th colSpan="8">
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
          <tr>
            <th></th>
            {weekInRange.map((day, idx) => (
              <th key={day}>
                <span>{daysInWeek[idx]}</span> <br/>
                <span>{day.substring(0, day.length - 3)}</span>
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