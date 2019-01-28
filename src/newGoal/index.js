import React from 'react';
import Modal from 'react-modal';
import './index.css';
import { customStyles } from '../utils/modalStyle';

const NewGoal = ({
  isModalOpen, goal, displayStepTwo, gpWeek, startDate,
  closeModal, handleInput, handleGoalPick, handleNext, handlePrev, addGoal }) => {
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
      <div className={displayStepTwo ? 'hide' : 'goal--M' }>
        <header className="goal--M__header">
          <h1>New Habit Tracker</h1>
          <span>Step 1 of 2</span>
        </header>
        <p className="goal--M__text">What do you want to track?</p>
        <input type="text"
          data-type="goal"
          value={goal}
          onChange={handleInput}
          placeholder="Weight, Budget, Reading..."
          className="goal--M__input"/>
        <p className="goal--M__text-gray">Track anything you want by entering its name above, or choose a habit from below:</p>
        <ul className="goal--M__list">
          {goalList.map((goal, idx) => (
            <li key={idx}
              onClick={handleGoalPick}>{goal}</li>
          ))}
        </ul>
        <footer className="goal--M__footer">
          <button
            className="goal--M__button-close"
            onClick={closeModal}>Close</button>
          <button
            className="goal--M__button-primary"
            onClick={handleNext}>Next</button>
        </footer>
      </div>

      <div className={displayStepTwo ? 'goal--M' : 'hide'}>
        <header className="goal--M__header">
          <h1>Finish</h1>
          <span>Step 2 of 2</span>
        </header>
        <input
          className="goal--M__input"
          type="text" value={goal} disabled/>
        <input
          className="goal--M__input"
          data-type="gpWeek"
          type="number" placeholder="Goal per Week"
          value={gpWeek}
          onChange={handleInput} />
        <input
          className="goal--M__input"
          data-type="startDate"
          type="date" placeholder="Start Date"
          value={startDate}
          onChange={handleInput} />
        <footer className="goal--M__footer goal--M__flex">
          <button
            className="goal--M__button-back"
            onClick={handlePrev}>Previous</button>
          <div>
            <button
              className="goal--M__button-close"
              onClick={closeModal}>Close</button>
            <button
              className="goal--M__button-primary"
              onClick={addGoal}
            >Save</button>
          </div>
        </footer>
      </div>
    </Modal>
  )
};

export default NewGoal;