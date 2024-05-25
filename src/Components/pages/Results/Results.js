/* eslint-disable multiline-ternary */
import './Results.css';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ResultsTable from '../../Results/ResultsTable/ResultsTable.js';
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
        <ResultsTable results={results} />
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
