import './CharacterInfoCard.css';
import { Link } from 'react-router-dom';
import charactersInfo from '../../data/characters';
import React from 'react';

// eslint-disable-next-line react/prop-types
const CharacterInfoCard = ({ chosenJojo, shareAcross }) => {
  return (
    <div className='character-info'>
      <div className='hola'>
        <div className='card-box'>
          <div className='description'>
            <h2>{charactersInfo[chosenJojo].name}</h2>
            <p>{charactersInfo[chosenJojo].description}</p>
          </div>

          <div className='submit'>
            <h3>Upload your result!</h3>
            <div className='form'>
              <span>Your name:</span>
              <input id="txtbox"></input>
              <a className='button1' href="#"><span>Load</span></a>
            </div>
          </div>

          <div className='submit'>
            <h3>Upload your result!</h3>
            <div className='form'>
              <span>Your name:</span>
              <input id="txtbox"></input>
              <a className='button1' href=""><span>Load</span></a>
            </div>
          </div>
          <div className='share'>
            <Link to='/quiz' className='button1'><span>Play Again</span></Link>
            <a className='button1' onClick={() => shareAcross()} href="#"><span>Share</span></a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CharacterInfoCard;
