import React, { Component } from 'react';
import NewGoal from './../newGoal/index';
import './index.css';

export const GoalNav = ({
  isModalOpen, goal, displayStepTwo, gpWeek, startDate,
  openGoalModal, closeModal, handleInput, handleGoalPick, handleNext, handlePrev, handleAddGoal
}) => {
  return (
    <div className="goals--nav">
      <h2>
        Daily Goals:
        <button onClick={openGoalModal}>Add a New Habit</button>
      </h2>

      <NewGoal
        isModalOpen={isModalOpen}
        goal={goal}
        gpWeek={gpWeek}
        startDate={startDate}
        displayStepTwo={displayStepTwo}
        closeModal={closeModal}
        handleInput={handleInput}
        handleNext={handleNext}
        handlePrev={handlePrev}
        handleGoalPick={handleGoalPick}
        addGoal={handleAddGoal}
      />
    </div>
  )
}