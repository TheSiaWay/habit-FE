import React, { Component } from 'react';
import { WeeklyHabitDisplay } from './../weeklyHabitDisplay/index';
import { format, startOfWeek, addDays } from 'date-fns';

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
      weekInRange: this.buildWeek('01/15/19')
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

  render() {
    const {habits, weekInRange} = this.state;
    return (
      <table>
        <thead>
          <tr>
            <th></th>
            {weekInRange.map((day) => (
              <th key={day}>{day}</th>
            ))}
          </tr>
        </thead>
        <WeeklyHabitDisplay habits={habits}
          weekInRange={weekInRange} />
      </table>
    )
  }
}