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
            Authorization: 'Bearer 8defbe8f1b33cf6c8ea7279c654316e7d047c7defd57811d6040dbedc585ae1ff109986ae9a8356c159ec79ae15e650f77058078d8fbb183dd3812fe738e82e8970845663ad14a419eeaeb27eef108e1e7c2793cfb4136a3c50e36ef6de47fdaf5ddfa34c798366ed9f42c517257f1937cfe9473ecf36585632377a0dcba0cde'
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
    <div>
      <p>Text value from Strapi: {textValue}</p>
    </div>
  );
};

export default TextFetcher;
