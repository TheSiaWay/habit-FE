import React from 'react';
import Modal from 'react-modal';
import './index.css';
import { customStyles } from '../utils/modalStyle';

const NewGoal = ({isModalOpen, closeModal, input }) => {
  const goalList = [
    'Exercise',
    'Weight',
    'Drink Water',
    'Get Up Early',
    'Read',
    'Budget',
    'Mediate',
    'Save Money',
    'Sleep',
    'Journal',
    'Floss',
    'Debt Free'
  ];
  return (
    <Modal
      isOpen={isModalOpen}
      onRequestClose={() => closeModal()}
      style={customStyles}
    >
      <div className="goal--M">
        <header className="goal--M__header">
          <h1>New Habit Tracker</h1>
          <span>Step 1 of 2</span>
        </header>
        <p className="goal--M__text">What do you want to track?</p>
        <input type="text"
          placeholder="Weight, Budget, Reading..."
          className="goal--M__input"/>
        <p className="goal--M__text-gray">Track anything you want by entering its name above, or choose a habit from below:</p>
        <ul className="goal--M__list">
          {goalList.map((goal, idx) => (
            <li key={idx}>{goal}</li>
          ))}
        </ul>
        <footer className="goal--M__footer">
          <button
            className="goal--M__button-close">Close</button>
          <button
            className="goal--M__button-next">Next</button>
        </footer>
      </div>

      <div className="hide">
        <header>Finish
          <span>Step 2 of 2</span>
        </header>
        <input type="text" value={input} />
        <input type="number" placeholder="Goal per Week" />
        <input type="date" placeholder="Start Date" />
        <footer>
          <button>Previous</button>
          <button>Close</button>
          <button>Save</button>
        </footer>
      </div>
    </Modal>
  )
};

export default NewGoal;