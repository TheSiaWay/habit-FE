import React from 'react';
import './index.css';

export const WeeklyHabitDisplay = ({ habits, weekInRange }) => (
  <tbody>
    {habits.map(({ id, name, checked }) => (
      <tr key={id}>
        <td className="habit-name">{name}</td>
        {weekInRange.map((day) => (
          checked.indexOf(day) === -1 ?
            <td className="missed" key={`${id}${day}`}>X</td> :
            <td className="done" key={`${id}${day}`}>✅</td>
        ))}
        <td>Edit</td>
      </tr>
    ))}
  </tbody>
)