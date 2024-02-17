/* eslint-disable react/prop-types */
import { useState, React } from 'react';
import './QuizBox.css';
import { useNavigate } from 'react-router-dom';
import questions from '../../../data/questions';
import QuizAnswers from '../QuizAnswers/QuizAnswers';
import QuizPicture from '../QuizPicture/QuizPicture';

const QuizBox = ({
  actualQuestion,
  setActualQuestion,
  setError,
  setResponse
}) => {
  const [myCharacters, setMyCharacters] = useState({
    jonathan: 0,
    joseph: 0,
    jotaro: 0,
    josuke: 0,
    giorno: 0,
    jolyne: 0
  });
  const [[previousAnswer, actualAnswer], setAnswers] = useState([-1, -1]);
  const [answersHistory, setAnswersHistory] = useState([]);

  const setPreviousAnswer = (newPrevious) => {
    const newAnswers = [newPrevious, actualAnswer];
    setAnswers(newAnswers);
  };

  const setActualAnswer = (newActual) => {
    const newAnswers = [previousAnswer, newActual];
    setAnswers(newAnswers);
    console.log(newActual);
  };

  const updateCharacterValues = (elem, type) => {
    const canUpdate = type === 'add' || elem !== -1;
    if (canUpdate) {
      const questionIdx = type === 'add'
        ? actualQuestion
        : actualQuestion - 1;
      const answer = questions[questionIdx].options[elem];
      const updatedCharacters = Object.keys(myCharacters).reduce((acc, key) => {
        acc[key] = type === 'add'
          ? myCharacters[key] + answer[key]
          : myCharacters[key] - answer[key];
        return acc;
      }, {});

      setMyCharacters(updatedCharacters);
    };
  };

  const addCharactersValues = (elem) => {
    updateCharacterValues(elem, 'add');
  };

  const restartCharactersValues = (elem) => {
    updateCharacterValues(elem, 'restart');
  };

  const progressSteps = [...document.querySelectorAll('.progress-step')];

  const myPicture = document.querySelector('.quizPicture-inner');
  // Handler for choosing an option and clicking next page
  const handleNextPage = () => {
    if (actualAnswer !== -1) {
      const upcomingBullet = progressSteps[actualQuestion + 1];
      upcomingBullet.classList.add('progress-step-active');
      myPicture.classList.remove('is-flipped');
      addCharactersValues(actualAnswer, -1);
      setAnswers([actualAnswer, -1]);
      setAnswersHistory([...answersHistory, actualAnswer]);
      setActualQuestion(actualQuestion + 1);
      setError(false);
      console.log(myCharacters);
    } else {
      // Error, debes elegir una respuesta!!
      setError(true);
    }
  };

  // Handler for clicking previous page
  const handlePreviousPage = () => {
    const previousBullet = progressSteps[actualQuestion];
    previousBullet.classList.remove('progress-step-active');
    myPicture.classList.remove('is-flipped');
    setActualQuestion(actualQuestion - 1);
    setActualAnswer(-1);
    setAnswersHistory(answersHistory.slice(0, -1));
    setError(false);
    if (answersHistory) {
      setPreviousAnswer(answersHistory[answersHistory.length - 1]);
      restartCharactersValues(previousAnswer);
    }
    console.log(myCharacters);
  };

  // const getMyJojo = document.getElementById('get-my-jojo');
  const navigation = useNavigate();
  // Handler for game's finishcharacters[key]
  const handleGameFinish = () => {
    if (actualAnswer !== -1) {
      // ACA TENGO QUE CAMBIAR COSASSSSSSSS
      addCharactersValues(actualAnswer);
      setResponse(myCharacters);
      navigation('/get-my-jojo');
    } else {
      // Error, debes elegir una respuesta!!
      setError(true);
    };
  };

  // What buttons should there be, depending on the question we are currently on
  const whichButtons = () => {
    if (actualQuestion === 0) {
      return (<div><button onClick={handleNextPage}>Next</button></div>);
    } else if (actualQuestion === (questions.length - 1)) {
      return (
        <div className='final-game'>
          <button className='back' onClick={handlePreviousPage}>Back</button>
          <button className='get-my-jojo' onClick={handleGameFinish} ><a id='get-my-jojo'>Get my JoJo</a></button>
        </div>
      );
    } else {
      return (
        <div className='mid-game'>
          <button className='back' onClick={handlePreviousPage}>Back</button>
          <button className='next' onClick={handleNextPage}>Next</button>
        </div>
      );
    }
  };

  return (
    <div className='box'>
      <QuizPicture actualQuestion={actualQuestion} />

      <QuizAnswers
        actualQuestion={actualQuestion}
        setActualAnswer={setActualAnswer} />

      <div className='back-next'>
        {whichButtons()}
      </div>
    </div>
  );
};

export default QuizBox;
