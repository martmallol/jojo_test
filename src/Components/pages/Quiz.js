import React, {useState} from 'react';
import questions from './questions';
import './Quiz.css'

function Quiz() {
  const [actualQuestion, setActualQuestion] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const [actualAnswer, setActualAnswer] = useState(-1);
  let characters = {
    jonathan: 0, 
    joseph: 0,
    jotaro: 0,
    josuke: 0,
    giorno: 0,
    jolyne: 0};

  const updateCharactersValues = (elem) => {
    console.log(characters);
    const answer = questions[actualQuestion].options[elem];
    // Por que no me cambia los valores?????
    Object.keys(characters).forEach(key => {
        characters[key] += answer[key];
    });
    console.log(characters);
  };

  const restartCharactersValues = (elem) => {};

  const changeValue = () => {
    characters.giorno = 7;
  }

  // Handler for choosing an option and clicking next page
  const handleNextPage = () => {
    if(actualAnswer != -1) {
        updateCharactersValues(actualAnswer);
        setActualAnswer(-1);
        setActualQuestion(actualQuestion+1);
    } else {
        // Error, debes elegir una respuesta!!
    }
  };

  // Handler for clicking previous page
  const handlePreviousPage = () => {
    setActualQuestion(actualQuestion-1);
    setActualAnswer(-1)
  };

  // Handler for game's finishcharacters[key]
  const handleGameFinish = () => {
    if(actualAnswer != -1) {
        updateCharactersValues(actualAnswer);
        setIsFinished(true);
    } else {
        // Error, debes elegir una respuesta!!
    }
  };

  // What buttons should there be, depending on the question we are currently on
  const whichButtons = () => {
    if(actualQuestion == 0) {
        return (<div><button onClick={handleNextPage}>Next</button></div>)
    } else if (actualQuestion == (questions.length - 1)) {
        return (
        <div>
            <button onClick={handlePreviousPage}>Back</button> 
            <button onClick={handleGameFinish}>Get my JoJo</button>
        </div>
        )
    } else {
        return (
        <div>
            <button onClick={handlePreviousPage}>Back</button> 
            <button onClick={handleNextPage}>Next</button>
        </div>
        )
    }
  }

  // Interface
  return (
    <main>
        <div className='question-number'>
            <span> Question {actualQuestion + 1} of</span> {questions.length}
        </div>
        <div className='question-title'>
            {questions[actualQuestion].title}
        </div>
        <div className='answers'>
            {questions[actualQuestion].options.map((answer) => (
                <button onClick={() => {setActualAnswer(answer.id);}}> {answer.textAnswer}</button>
            ))}
        </div>
        <div className='back-next'>
            {whichButtons()}
        </div>
        <div className='comoEstanLasCosas(lotengoqueborrar)'>
            {characters.giorno}
        </div>
    </main>
  )
}

export default Quiz