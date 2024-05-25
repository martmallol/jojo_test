import './ResultsTable.css';
import React from 'react';
import { Link } from 'react-router-dom';
import ResultRow from '../ResultRow/ResultRow';

/* eslint-disable react/prop-types */
const ResultsTable = ({ results }) => {
  return (
    <>
      <div>
        <h1>Check your past results!</h1>
      </div>
      <div className="results-container">
        {results.map((result, idx) => {
          return (
            <ResultRow
              key={idx}
              jojo={result.jojo}
              personName={result.name}
              date={result.date}
            />
          );
        })}
      </div>
      <div className="play-again">
        <Link to="/quiz" className="button">
          {'Play Again'}
        </Link>
      </div>
    </>
  );
};

export default ResultsTable;
