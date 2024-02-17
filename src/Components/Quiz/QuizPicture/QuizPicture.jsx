import './QuizPicture.css';
import questions from '../../../data/questions';
import React from 'react';

// eslint-disable-next-line react/prop-types
const QuizPicture = ({ actualQuestion }) => {
  const myPicture = document.querySelector('.quizPicture-inner');

  const togglePicture = () => {
    if (myPicture) {
      myPicture.classList.toggle('is-flipped');
    }
  };

  return (
    <div className='quizPicture' onClick={togglePicture}>
      <div id='hi' className='quizPicture-inner'>
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
  );
};

export default QuizPicture;
