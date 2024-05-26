import './CharacterInfoCard.css';
import { Link } from 'react-router-dom';
import charactersInfo from '../../data/characters';
import React from 'react';
import { saveResult } from '../../utils/results';

// eslint-disable-next-line react/prop-types
const CharacterInfoCard = ({ chosenJojo, shareAcross }) => {
  const logoSize = 40;

  return (
    <div className="character-info">
      <div className="hola">
        <div className="description">
          <div className="description--title">
            <img
              src={charactersInfo[chosenJojo].logo}
              width={logoSize}
              height={logoSize}
            />
            <h2>{charactersInfo[chosenJojo].name}</h2>
            <img
              src={charactersInfo[chosenJojo].logo}
              width={logoSize}
              height={logoSize}
            />
          </div>
          <p>{charactersInfo[chosenJojo].description}</p>
        </div>

        <div className="submit">
          <h3>Upload your result!</h3>
          <div className="form">
            <span>Your name:</span>
            <input id="txtbox"></input>
            <a className="button1" onClick={() => saveResult(chosenJojo)}>
              <span>Load</span>
            </a>
          </div>
        </div>
        <hr />
        <div className="card--buttons">
          <div className="share">
            <a className="button1" onClick={() => shareAcross()}>
              <span>Share</span>
            </a>
            <Link to="/results" className="button1">
              <span>Check Results</span>
            </Link>
          </div>
          <Link to="/quiz" className="button">
            <span>Play Again!</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CharacterInfoCard;
