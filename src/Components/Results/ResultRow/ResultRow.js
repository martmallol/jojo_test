import React from 'react';
import './ResultRow.css';
import charactersInfo from '../../../data/characters';

// eslint-disable-next-line react/prop-types
const ResultRow = ({ jojo, personName, date }) => {
  return (
    <div className="result">
      <div className="result--img">
        <img src={charactersInfo[jojo].profileImage}></img>
      </div>
      <div className="result--text">
        <span className="result--name">
          <h3>{`${personName} is...`}</h3>
          <h2>{`${jojo}!`}</h2>
        </span>
        <h4>{date}</h4>
      </div>
    </div>
  );
};

export default ResultRow;
