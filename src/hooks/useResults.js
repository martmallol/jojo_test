import { useEffect, useState } from 'react';

const useResults = () => {
  const [results, setResults] = useState([]);

  useEffect(() => {
    const previousResults = localStorage.getItem('myJojos');
    if (previousResults) {
      const parsedResults = JSON.parse(previousResults);
      setResults(parsedResults);
    }
  }, []);

  return results;
};

export default useResults;
