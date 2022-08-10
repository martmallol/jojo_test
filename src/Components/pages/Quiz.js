import React, {useState} from 'react';
import questions from './questions';

function Quiz() {
  const [actualQuestion, setActualQuestion] = useState(0);
  const [points, setPoints] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  //Creo handler para cuando se elige la respuesta

  // What buttons should there be, depending on the question we are currently on
  const whichButtons = () => {
    if(actualQuestion == 0) {
        return (<button>Next</button>)
    } else if (actualQuestion == (questions.length - 1)) {
        return (
        <div>
            <button>Back</button> 
            <button>Get my JoJo</button>
        </div>
        )
    } else {
        return (
        <div>
            <button>Back</button> 
            <button>Next</button>
        </div>
        )
    }
  }

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
                <button key='{answer.textAnswer'> {answer.textAnswer}</button>
            ))}
        </div>
        <div className='back-next'>
            {whichButtons()}
        </div>
    </main>
  )
}

export default Quiz