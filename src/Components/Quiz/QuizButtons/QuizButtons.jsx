/* eslint-disable react/prop-types */
import './QuizButtons.css';
import { React, useState } from 'react';
import useNextQuestion from '../../../hooks/useNextQuestion';
import usePreviousQuestion from '../../../hooks/usePreviousQuestion';
import useGameFinish from '../../../hooks/useGameFinish';
import questions from '../../../data/questions';

const QuizButtons = ({
  characters,
  charactersHandler,
  actualQuestion,
  actualQuestionHandler,
  actualAnswer,
  actualAnswerHandler,
  errorHandler
}) => {
  const [answersHistory, setAnswersHistory] = useState([]);

  const commonParameters = [
    actualAnswerHandler,
    characters,
    charactersHandler,
    answersHistory,
    setAnswersHistory,
    actualQuestion,
    actualQuestionHandler,
    errorHandler
  ];

  const handleNextQuestion = useNextQuestion(
    ...[actualAnswer, ...commonParameters]
  );
  const handlePreviousQuestion = usePreviousQuestion(
    ...commonParameters
  );
  const handleGameFinish = useGameFinish(
    handleNextQuestion
  );

  return (
    <div className='quizButtons'>
      {actualQuestion !== 0 &&
        <button className='back' onClick={handlePreviousQuestion}>Back</button>
      }
      {actualQuestion !== questions.length - 1
        ? <button className='next' onClick={handleNextQuestion}>Next</button>
        : <button className='get-my-jojo' onClick={handleGameFinish}>Get my JoJo</button>
      }
    </div>
  );
};

export default QuizButtons;
