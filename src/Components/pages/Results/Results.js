/* eslint-disable multiline-ternary */
import './Results.css';
import React from 'react';
import ResultsTable from '../../Results/ResultsTable/ResultsTable.js';
import NoResults from '../../Results/NoResults/NoResults.js';
import useResults from '../../../hooks/useResults.js';
const Results = () => {
  const results = useResults();

  console.log(results);
  return (
    <section className="results">
      {results.length === 0 ? (
        <NoResults />
      ) : (
        <ResultsTable results={results} />
      )}
    </section>
  );
};

export default Results;
