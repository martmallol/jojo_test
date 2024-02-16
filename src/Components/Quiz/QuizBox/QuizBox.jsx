import { useState } from "react";
import "./QuizBox.css";
import { useNavigate } from 'react-router-dom';
import questions from '../../../utils/questions';
import QuizAnswers from "../QuizAnswers/QuizAnswers";
import QuizPicture from "../QuizPicture/QuizPicture";

const QuizBox = ({ 
  actualQuestion,
  setActualQuestion,
  setError,
  setResponse
}) => {
  const [myCharacters, setCharacters] = useState({
    jonathan: 0, 
    joseph: 0,
    jotaro: 0,
    josuke: 0,
    giorno: 0,
    jolyne: 0});
  const [actualAnswer, setActualAnswer] = useState(-1);
  const [previousAnswer, setPreviousAnswer] = useState(-1);
  const [answersHistory, setAnswersHistory] = useState([]);
  
  const updateCharactersValues = (elem) => {
    const answer = questions[actualQuestion].options[elem];
    // Por que no me cambia los valores?????
    Object.keys(myCharacters).forEach(key => {
        myCharacters[key] += answer[key];
    });
  };

  const restartCharactersValues = (elem) => {
    if(elem != -1) {
      const answer = questions[actualQuestion-1].options[elem];
      Object.keys(myCharacters).forEach(key => {
        myCharacters[key] -= answer[key];
      });
    }
  };

  const progressSteps = [... document.querySelectorAll(".progress-step")];
    
  const myPicture = document.querySelector(".picture-inner");
  // Handler for choosing an option and clicking next page
  const handleNextPage = () => {
    if(actualAnswer != -1) {
        const upcomingBullet = progressSteps[actualQuestion + 1];
        upcomingBullet.classList.add("progress-step-active");
        myPicture.classList.remove("is-flipped");
        updateCharactersValues(actualAnswer);
        setPreviousAnswer(actualAnswer);
        answersHistory.push(actualAnswer);
        setActualAnswer(-1);
        setActualQuestion(actualQuestion+1);
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
    previousBullet.classList.remove("progress-step-active");
    myPicture.classList.remove("is-flipped");
    setActualQuestion(actualQuestion-1);
    setActualAnswer(-1)
    answersHistory.pop();
    setError(false);
    if(answersHistory) {
      setPreviousAnswer(answersHistory[answersHistory.length-1]);
      restartCharactersValues(previousAnswer);
    }
    console.log(myCharacters);
  };

  let getMyJojo = document.getElementById('get-my-jojo');
  const navigation = useNavigate();
  // Handler for game's finishcharacters[key]
  const handleGameFinish = () => {
    if(actualAnswer != -1) {
      // ACA TENGO QUE CAMBIAR COSASSSSSSSS
        updateCharactersValues(actualAnswer);
        setResponse(myCharacters);
        navigation('/get-my-jojo');
        //console.log(response);
        //window.location.href = '/get-my-jojo'; // Goes to final page
    } else {
        // Error, debes elegir una respuesta!!
        setError(true);
    }   
  };

  // What buttons should there be, depending on the question we are currently on
  const whichButtons = () => {
    if(actualQuestion == 0) {
        return (<div><button onClick={handleNextPage}>Next</button></div>)
    } else if (actualQuestion == (questions.length - 1)) {
        return (
        <div className='final-game'>
            <button className='back' onClick={handlePreviousPage}>Back</button> 
            <button className='get-my-jojo' onClick={handleGameFinish} ><a id='get-my-jojo'>Get my JoJo</a></button>
        </div>
        )
    } else {
        return (
        <div className='mid-game'>
            <button className='back' onClick={handlePreviousPage}>Back</button> 
            <button className='next' onClick={handleNextPage}>Next</button>
        </div>
        )
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
}

export default QuizBox;