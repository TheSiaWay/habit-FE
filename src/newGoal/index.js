import React from 'react';
import Modal from 'react-modal';
import './index.css';
import { customStyles } from '../utils/modalStyle';

const newGoal = ({isModalOpen, closeModal, }) => {
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
      <div>
        <h1>New Habit Tracker</h1>
        <p>What do you want to track?</p>
        <input type="text"
          placeholder="Weight, Budget, Reading..."/>
        <p>Track anything you want by entering its name above, or choose a habit from below:</p>
        <ul>
          goalList.map((goal, idx) => (
            <li key={idx}>{goal}</li>
          ))
        </ul>
      </div>
    </Modal>
  )
};

export default newGoal;