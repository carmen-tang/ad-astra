'use client';

import React, { useEffect, useState } from 'react';
import TaskCard from './TaskCard'

function Journals() {
  const [results, setResults] = useState([]);
  const apiUrl = 'https://www.ebi.ac.uk/europepmc/webservices/rest/search?query=genetics&format=json';

  useEffect(() => {
    // Make a fetch request to the API URL
    fetch(apiUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        // Set the results in state
        setResults(data.resultList.result.slice(0, 4));
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div>
      <ul className="grid gap-4">
        {results.map((result) => (
          <li key={result.id}>
            <TaskCard
              subheading={result.title}
              heading={result.journalTitle}
              due={"5d"}
              status={result.authorString}
            />
          </li>
          
        ))}
      </ul>
    </div>
  );
}

export default Journals;
