import './NoResults.css';
import React from 'react';
import { Link } from 'react-router-dom';

const NoResults = () => {
  return (
    <div className="no-results">
      <div className="no-results--text">
        <h1>No results yet!</h1>
      </div>
      <div>
        <Link to="/quiz" className="button">
          {'Start Playing!'}
        </Link>
      </div>
    </div>
  );
};

export default NoResults;
