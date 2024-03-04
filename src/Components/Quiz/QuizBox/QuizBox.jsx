/* eslint-disable react/prop-types */
import { useState, React } from 'react';
import './QuizBox.css';
import { useNavigate } from 'react-router-dom';
import questions from '../../../data/questions';
import QuizAnswers from '../QuizAnswers/QuizAnswers';
import QuizPicture from '../QuizPicture/QuizPicture';
import QuizButtons from '../QuizButtons/QuizButtons';

const QuizBox = ({
  actualQuestion,
  setActualQuestion,
  setError,
  setResponse
}) => {
  // BIEN
  const [myCharacters, setMyCharacters] = useState({
    jonathan: 0,
    joseph: 0,
    jotaro: 0,
    josuke: 0,
    giorno: 0,
    jolyne: 0
  });
  const [actualAnswer, setActualAnswer] = useState(-1);
  const [answersHistory, setAnswersHistory] = useState([]);

  // BIEN
  const updateCharacterValues = (answerNumber, type) => {
    console.log(myCharacters, answerNumber);
    const canUpdate = type === 'add' || answerNumber !== -1;
    if (canUpdate) {
      const questionIdx = type === 'add'
        ? actualQuestion
        : actualQuestion - 1;
      const answer = questions[questionIdx].options[answerNumber];
      const updatedCharacters = Object.keys(myCharacters).reduce((acc, key) => {
        acc[key] = type === 'add'
          ? myCharacters[key] + answer[key]
          : myCharacters[key] - answer[key];
        return acc;
      }, {});

      setMyCharacters(updatedCharacters);
    };
  };

  // BIEN
  const addCharactersValues = () => {
    updateCharacterValues(actualAnswer, 'add');
  };

  // BIEN
  const restartCharactersValues = () => {
    const answerNumberToDelete = answersHistory[answersHistory.length - 1];
    updateCharacterValues(answerNumberToDelete, 'restart');
  };

  const quizButtonStateUpdate = (characterUpdate, newAnswerHistory, newQuestion) => {
    if (answersHistory) characterUpdate();
    setAnswersHistory(newAnswerHistory);
    setActualQuestion(newQuestion);
  };

  const nextOrBackStateUpdate = (buttonPressed) => {
    if (buttonPressed === 'next') {
      quizButtonStateUpdate(
        addCharactersValues,
        [...answersHistory, actualAnswer],
        actualQuestion + 1);
    } else {
      quizButtonStateUpdate(
        restartCharactersValues,
        answersHistory.slice(0, -1),
        actualQuestion - 1);
    }

    setActualAnswer(-1);
    setError(false);
    console.log(myCharacters);
  };

  // Handler for choosing an option and clicking next page
  const handleNextPage = () => {
    console.log(actualAnswer);
    (actualAnswer !== -1)
      ? nextOrBackStateUpdate('next')
      : setError(true);
  };

  // Handler for clicking previous page
  const handlePreviousPage = () => {
    nextOrBackStateUpdate('back');
  };

  // Handler for game's finish
  const handleGameFinish = () => {
    const navigation = useNavigate();
    if (actualAnswer !== -1) {
      addCharactersValues(actualAnswer);
      setResponse(myCharacters);
      navigation('/get-my-jojo');
    } else {
      // Error, debes elegir una respuesta!!
      setError(true);
    };
  };

  return (
    <div className='box'>
      <QuizPicture actualQuestion={actualQuestion} />

      <QuizAnswers
        actualQuestion={actualQuestion}
        setActualAnswer={setActualAnswer} />

      <QuizButtons
        questions={questions}
        actualQuestion={actualQuestion}
        handleNextPage={handleNextPage}
        handlePreviousPage={handlePreviousPage}
        handleGameFinish={handleGameFinish}
      />
    </div>
  );
};

export default QuizBox;
