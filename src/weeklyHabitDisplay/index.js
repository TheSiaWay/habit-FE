import React from 'react';

export const WeeklyHabitDisplay = ({ habits, weekInRange }) => (
  <tbody>
    {habits.map(({ id, name, checked }) => (
      <tr key={id}>
        <td>{name}</td>
        {weekInRange.map((day) => (
          checked.indexOf(day) === -1 ?
            <td key={`${id}${day}`}>X</td> :
            <td key={`${id}${day}`}>Y</td>
        ))}
      </tr>
    ))}
  </tbody>
)