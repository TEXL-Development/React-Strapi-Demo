// TextFetcher.js
import { useState, useEffect } from 'react';
import axios from 'axios';

const TextFetcher = ({ serverEndPoint, dataAttribute, order }) => {
  const [imgSrc, setImgSrc] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(serverEndPoint, {
          headers: {
            Authorization: `Bearer ${import.meta.env.VITE_BEARER_TOKEN}`
          }
        });
        console.log(response.data);
        setImgSrc(response.data.data.attributes[dataAttribute].data.attributes.formats.small.url); // Assuming your API returns an object with a 'text' property
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [serverEndPoint, dataAttribute]);

  return (
    <div className={order} style={{backgroundImage: `url('${import.meta.env.VITE_SERVER_URL}${imgSrc}')`}}></div>
  );
};

export default TextFetcher;
