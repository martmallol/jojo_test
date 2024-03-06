/* eslint-disable react/prop-types */
import './QuizButtons.css';
import { React, useState } from 'react';
import usePageHandling from '../../../hooks/usePageHandling';
import useFollowingQuestion from '../../../hooks/useFollowingQuestion';
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
  const followingQuestionStateUpdates = useFollowingQuestion(
    actualQuestion,
    actualQuestionHandler,
    characters,
    charactersHandler,
    answersHistory,
    setAnswersHistory
  );
  const [
    handleNextPage,
    handlePreviousPage,
    handleGameFinish
  ] = usePageHandling(
    followingQuestionStateUpdates,
    answersHistory,
    actualAnswer,
    actualAnswerHandler,
    actualQuestion,
    errorHandler);

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
