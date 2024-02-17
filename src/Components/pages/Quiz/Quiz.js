import { React, useState } from 'react';
import questions from '../../../data/questions';
import './Quiz.css';
import QuizBox from '../../Quiz/QuizBox/QuizBox';

// eslint-disable-next-line react/prop-types
const Quiz = ({ setResponse }) => {
  const [actualQuestion, setActualQuestion] = useState(0);
  const [error, setError] = useState(false);

  const getLabelArray = () => {
    const arr = [];
    for (let i = 0; i < questions.length; i++) {
      if (i === 0) {
        arr.push('progress-step progress-step-active');
      } else {
        arr.push('progress-step');
      }
    }
    return arr;
  };

  const labelArray = getLabelArray();

  return (
    <main >
      <div className='Quiz'>
        <div className='progress-bar' id='progress-bar'>
          {labelArray.map((elem, idx) => (
            <div key={idx} className={elem}></div>))}
        </div>

        <div className='question-number'>
          <span> Question {actualQuestion + 1} of {questions.length}</span>
        </div>

        <div className='question-title'>
          <h2>{questions[actualQuestion].title}</h2>
        </div>

        <QuizBox
          questions={questions}
          actualQuestion={actualQuestion}
          setActualQuestion={setActualQuestion}
          setError={setError}
          setResponse={setResponse} />

        {error ? <div className='error'><label>You have to choose an option!</label></div> : ''}
      </div>
    </main>
  );
};

export default Quiz;
