/* eslint-disable multiline-ternary */
import './Results.css';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import charactersInfo from '../../../data/characters';
const Results = () => {
  const [results, setResults] = useState([]);

  useEffect(() => {
    const previousResults = localStorage.getItem('myJojos');
    if (previousResults) {
      const parsedResults = JSON.parse(previousResults);
      setResults(parsedResults);
    }
  }, []);

  console.log(results);
  return (
    <section className="results">
      {results.length !== 0 ? (
        <>
          <div>
            <h1>Check your past results!</h1>
          </div>
          <div className="results-container">
            {results.map((result, idx) => {
              return (
                <div className="result" key={idx}>
                  <div className="result--img">
                    <img src={charactersInfo[result.jojo].profileImage}></img>
                  </div>
                  <div className="result--text">
                    <span className="result--name">
                      <h3>{`${result.name} is...`}</h3>
                      <h2>{`${result.jojo}!`}</h2>
                    </span>
                    <h4>{result.date}</h4>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="play-again">
            <Link to="/quiz" className="button">
              {'Play Again'}
            </Link>
          </div>
        </>
      ) : (
        <>
          <div>
            <h1>No results yet!</h1>
          </div>
          <div>
            <Link to="/quiz" className="button">
              {'Start Playing!'}
            </Link>
          </div>
        </>
      )}
    </section>
  );
};

export default Results;
