/* eslint-disable react/prop-types */
import { useState, React } from 'react';
import './QuizBox.css';
import QuizAnswers from '../QuizAnswers/QuizAnswers';
import QuizPicture from '../QuizPicture/QuizPicture';
import QuizButtons from '../QuizButtons/QuizButtons';

const QuizBox = ({
  actualQuestion,
  actualQuestionHandler,
  errorHandler,
  characterLikeness,
  characterLikenessHandler
}) => {
  // BIEN
  const [actualAnswer, setActualAnswer] = useState(-1);

  return (
    <div className='box'>
      <QuizPicture actualQuestion={actualQuestion} />

      <QuizAnswers
        actualQuestion={actualQuestion}
        setActualAnswer={setActualAnswer} />

      <QuizButtons
        characters={characterLikeness}
        charactersHandler={characterLikenessHandler}
        actualQuestion={actualQuestion}
        actualQuestionHandler={actualQuestionHandler}
        actualAnswer={actualAnswer}
        actualAnswerHandler={setActualAnswer}
        errorHandler={errorHandler}
      />
    </div>
  );
};

export default QuizBox;
