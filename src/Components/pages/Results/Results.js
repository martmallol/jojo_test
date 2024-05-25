/* eslint-disable multiline-ternary */
import './Results.css';
import React, { useEffect, useState } from 'react';
import ResultsTable from '../../Results/ResultsTable/ResultsTable.js';
import NoResults from '../../Results/NoResults/NoResults.js';
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
        <NoResults />
      )}
    </section>
  );
};

export default Results;
