import React, { useState } from 'react';
import './ResultRow.css';
import charactersInfo from '../../../data/characters';

// eslint-disable-next-line react/prop-types
const ResultRow = ({ jojo, personName, date }) => {
  const [isCompressed, setIsCompressed] = useState(true);
  const logoSize = 15;
  return (
    <div className="result">
      <div className="result--content">
        <div className="result--img">
          <img src={charactersInfo[jojo].profileImage}></img>
        </div>
        <div className="result--text">
          <span className="result--name">
            <h3>{`${personName} is...`}</h3>
            <h2>{`${jojo}!`}</h2>
          </span>
          <div className="result--date">
            <h4>{date}</h4>
            <p onClick={() => setIsCompressed(!isCompressed)}>
              {isCompressed ? 'See details' : 'Close details'}
            </p>
          </div>
        </div>
      </div>
      {!isCompressed && (
        <>
          <hr className="result--hr" />
          <div className="result--details">
            <div className="details--title">
              <img
                src={charactersInfo[jojo].logo}
                width={logoSize}
                height={logoSize}
              />
              <h3>About this character</h3>
              <img
                src={charactersInfo[jojo].logo}
                width={logoSize}
                height={logoSize}
              />
            </div>

            <p>{charactersInfo[jojo].description}</p>
          </div>
        </>
      )}
    </div>
  );
};

export default ResultRow;
