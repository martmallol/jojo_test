import React, {useState} from 'react';
import questions from './questions';
import './Quiz.css'

function Quiz() {
  
  // Logica

  const [myCharacters, setCharacters] = useState({
    jonathan: 0, 
    joseph: 0,
    jotaro: 0,
    josuke: 0,
    giorno: 0,
    jolyne: 0});
  const [actualQuestion, setActualQuestion] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const [actualAnswer, setActualAnswer] = useState(-1);
  const [previousAnswer, setPreviousAnswer] = useState(-1);
  const [answersHistory, setAnswersHistory] = useState([]);
  const [error, setError] = useState(false);

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
    
  // Handler for choosing an option and clicking next page
  const handleNextPage = () => {
    if(actualAnswer != -1) {
        const upcomingBullet = progressSteps[actualQuestion + 1];
        upcomingBullet.classList.add("progress-step-active");
        myCard.classList.remove("is-flipped");
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
    myCard.classList.remove("is-flipped");
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
  // Handler for game's finishcharacters[key]
  const handleGameFinish = () => {
    if(actualAnswer != -1) {
        updateCharactersValues(actualAnswer);
        setIsFinished(true); // Do I actually need this variable?
        window.location.href = '/get-my-jojo'; //Gies to final page
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

  const getLabelArray = () => {
    let arr = [];
    for (let i = 0; i < questions.length; i++) {
      if(i == 0) {
        arr.push("progress-step progress-step-active");
      } else {
        arr.push("progress-step");
      }
    }
    return arr;
  };
  
  let labelArray = getLabelArray();

  const myCard = document.querySelector(".card-inner");
  const cardFunction = () => {
    myCard.classList.toggle("is-flipped");
  }

  // Interface 

  return (
    <main className='Quiz'>
      <div className='progress-bar' id='progress-bar'>
        {labelArray.map((elem) => (
          <div className={elem}></div>))}
      </div>
      
      <div className='question-number'>
        <span> Question {actualQuestion + 1} of</span> {questions.length}
      </div>
      
      <div className='question-title'>
        <h2>{questions[actualQuestion].title}</h2>
      </div>

      <div className='box'>
        <div className='card' onClick={cardFunction}>
          <div id='hi' className='card-inner'>
            <div className='face front'>
              <img src={questions[actualQuestion].image } />
            </div>
            <div className='face back'>
              <div className='content'>
                <h3>{questions[actualQuestion].saga}</h3>
                <p>{questions[actualQuestion].show}</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className='answers'>
            {questions[actualQuestion].options.map((answer) => (
              <button onClick={() => {setActualAnswer(answer.id);}}> {answer.textAnswer}</button>
            ))}
        </div>
        <div className='back-next'>
          {whichButtons()}
        </div>
      </div>
      {error ? <div className='error'><label>You have to choose an option!</label></div> : ''}
    </main>
  )
}

export default Quiz