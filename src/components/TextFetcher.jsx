// TextFetcher.js
import { useState, useEffect } from 'react';
import axios from 'axios';

const TextFetcher = ({ serverEndPoint, dataAttribute }) => {
  const [textValue, setTextValue] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(serverEndPoint, {
          headers: {
            Authorization: `Bearer ${import.meta.env.VITE_BEARER_TOKEN}`
          }
        });
        console.log(response.data);
        setTextValue(response.data.data.attributes[dataAttribute]); // Assuming your API returns an object with a 'text' property
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [serverEndPoint, dataAttribute]);

  return (
    <>
      {textValue}
    </>
  );
};

export default TextFetcher;
