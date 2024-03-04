import './QuizAnswers.css';
import questions from '../../../data/questions';
import React from 'react';

// eslint-disable-next-line react/prop-types
const QuizAnswers = ({ actualQuestion, setActualAnswer }) => {
  return (
    <div className='answers'>
      {questions[actualQuestion].options.map((answer) => (
        <button
          key={answer.id}
          onClick={() => { setActualAnswer(answer.id); }}
        >
          {answer.textAnswer}
        </button>
      ))}
    </div>
  );
};

export default QuizAnswers;
