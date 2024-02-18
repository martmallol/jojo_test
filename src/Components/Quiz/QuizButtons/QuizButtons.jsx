/* eslint-disable react/prop-types */
import './QuizButtons.css';
import React from 'react';

const QuizButtons = ({
  questions,
  actualQuestion,
  handleNextPage,
  handlePreviousPage,
  handleGameFinish
}) => {
  return (
    <div className='quizButtons'>
      {actualQuestion !== 0 &&
        <button className='back' onClick={handlePreviousPage}>Back</button>
      }
      {actualQuestion !== questions.length - 1
        ? <button className='next' onClick={handleNextPage}>Next</button>
        : <button className='get-my-jojo' onClick={handleGameFinish}>Get my JoJo</button>
      }
    </div>
  );
};

export default QuizButtons;
