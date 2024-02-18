/* eslint-disable react/prop-types */
import './QuizProgressBar.css';
import React from 'react';

const QuizProgressBar = ({ questions, actualQuestion }) => {
  const getLabelArray = () => {
    const labelArray = questions.map((question, idx) =>
      idx <= actualQuestion
        ? 'progress-step active'
        : 'progress-step'
    );

    return labelArray;
  };

  return (
    <div className='progress-bar' id='progress-bar'>
      {getLabelArray().map((label, idx) => (
        <div key={idx} className={label}></div>))}
    </div>
  );
};

export default QuizProgressBar;
