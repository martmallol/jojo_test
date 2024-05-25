import { React, useState } from 'react';
import questions from '../../../data/questions';
import './Quiz.css';
import QuizBox from '../../Quiz/QuizBox/QuizBox';
import QuizProgressBar from '../../Quiz/QuizProgressBar/QuizProgressBar';

// eslint-disable-next-line react/prop-types
const Quiz = ({ characterLikeness, setCharacterLikeness }) => {
  const [actualQuestion, setActualQuestion] = useState(0);
  const [error, setError] = useState(false);

  return (
    <main >
      <div className='Quiz'>
        <QuizProgressBar
          questions={questions}
          actualQuestion={actualQuestion} />

        <div className='question-number'>
          <span>
            Question {actualQuestion + 1} of {questions.length}
          </span>
        </div>

        <div className='question-title'>
          <h2>{questions[actualQuestion].title}</h2>
        </div>

        <QuizBox
          questions={questions}
          actualQuestion={actualQuestion}
          actualQuestionHandler={setActualQuestion}
          errorHandler={setError}
          characterLikeness={characterLikeness}
          characterLikenessHandler={setCharacterLikeness} />

        {error &&
          <div className='error'>
            <label>You have to choose an option!</label>
          </div>}
      </div>
    </main>
  );
};

export default Quiz;
