import { useState, useEffect } from 'react';

export const useHttp = (url, dependencies) => {
  const [fetchedData, setFetchedData] = useState(null);
const fetch = require("node-fetch");
  useEffect(() => {
    console.log('Sending Http request to URL: ' + url);
    fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch.');
        }
        return response.json();
        
      })
      .then(data => {
        setFetchedData(data);
      })
      .catch(err => {
        console.log(err);
      });
  }, dependencies);

  return [fetchedData];
};
